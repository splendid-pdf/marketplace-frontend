import { Outlet } from "react-router-dom";
import { ChipMenuSeller } from "shared/ui/ChipMenuSeller/ChipMenuSeller";

export const SellerBaseProductPage = () => {
  return (
    <div>
      <ChipMenuSeller/>
      <Outlet />    
    </div>
  );
};