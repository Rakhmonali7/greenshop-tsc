import { useMutation, useQueryClient } from "react-query";
import { AddFlowerType, MainCardType } from "../../../@types";
import { useHandler } from "../../../generic/Handlers";
import { useAxios } from "../../useAxios";

// Cache Handler
const useDeleteWishlistDataFromCache = () => {
  const { likeHandler } = useHandler();
  const queryClient = useQueryClient();

  return async (recievedData: MainCardType) => {
    queryClient.setQueryData("wishlist", (oldQuery: any) => {
      return oldQuery?.filter((v: MainCardType) => v._id !== recievedData._id);
    });
    await likeHandler({ main_flower_data: recievedData, category: "" });
  };
};

const useDeleteProductFromCache = () => {
  const queryClient = useQueryClient();
  return (recievedData: MainCardType) => {
    queryClient.setQueryData("/my-products", (oldQuery: any) => {
      return oldQuery.filter((v: MainCardType) => v._id !== recievedData._id);
    });
  };
};

// Mutation
const useAddProduct = () => {
  const axios = useAxios();
  return useMutation(({ uploadData }: { uploadData: AddFlowerType }) => {
    return axios({
      url: `/flower/category/${uploadData.category}`,
      method: "POST",
      body: { ...uploadData },
    });
  });
};
const useDeleteProduct = () => {
  const axios = useAxios();
  const deleteProductFromCache = useDeleteProductFromCache();

  return useMutation(({ data }: { data: MainCardType }) => {
    deleteProductFromCache(data);
    return axios({
      url: `/user/product/${data.category}`,
      method: "DELETE",
      body: { _id: data._id },
    });
  });
};
export { useDeleteWishlistDataFromCache, useAddProduct, useDeleteProduct };
