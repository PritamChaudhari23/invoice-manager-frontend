import AppPage from "../../components/AppPage/AppPage";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";

const InvoiceList = () => {
  return (
    <AppPage title={""} description={""}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Invoice List
        </Typography>
      </div>
      <Outlet />
    </AppPage>
  );
};

export default InvoiceList;
