import React, { FC } from "react";
import AccountDetails from "../../components/Profile/AccountDetails";
import {
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

type dashboard_items = {
  path: string;
  Icon: React.ForwardRefExoticComponent<any>;
  Component: FC;
  title: string;
};

export const dashboard_mock: dashboard_items[] = [
  {
    path: "",
    Icon: UserOutlined,
    Component: AccountDetails,
    title: "Account Details",
  },
  {
    path: "my-products",
    Icon: ShoppingOutlined,
    Component: AccountDetails,
    title: "My Products",
  },
  {
    path: "address",
    Icon: EnvironmentOutlined,
    Component: AccountDetails,
    title: "Address",
  },
  {
    path: "wishlist",
    Icon: HeartOutlined,
    Component: AccountDetails,
    title: "Wishlist",
  },
];
