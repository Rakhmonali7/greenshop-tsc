import { FC } from "react";
import { useReduxSelector } from "../../hooks/useRedux";
import SiteMap from "./Modals/SiteMap";
import Authorization from "./Modals/Authorization";
import MobileDashboard from "../Home/Category/Dashboard/MobileDashboard";
import Confirmation from "./Modals/Confirmation";

const ModalVisibility: FC = () => {
  const {
    siteMapModalVisibility,
    authModalVisibility,
    dashboardModalVisibility,
    confirmationModalVisibility,
  } = useReduxSelector((state) => state.modal);
  return (
    <>
      {/* Site Map */}
      {siteMapModalVisibility && <SiteMap />}
      {/* Authorization based Modal */}
      {authModalVisibility.open && <Authorization />}
      {/* Mobile Category Dashboard */}
      {dashboardModalVisibility && <MobileDashboard />}
      {/* Confirmation Modal */}
      {confirmationModalVisibility && <Confirmation />}
    </>
  );
};

export default ModalVisibility;