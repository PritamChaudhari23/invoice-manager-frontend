import { lazy, Suspense } from "react";
import ProtectedRoute from "../app/components/Auth/ProtectedRoute";

const Loadable = (Component) => {
  return (props) => (
    <Suspense fallback={<div>Loading.....</div>}>
      <Component {...props} />
    </Suspense>
  );
};

const Login = Loadable(lazy(() => import("../app/pages/Login/Login")));
const Signup = Loadable(lazy(() => import("../app/pages/Signup/Signup")));
const Dashboard = Loadable(
  lazy(() => import("../app/pages/Dashboard/Dashboard"))
);
const InvoiceList = Loadable(
  lazy(() => import("../app/pages/Invoice/InvoiceList"))
);
const InvoiceAddEdit = Loadable(
  lazy(() => import("../app/pages/Invoice/InvoiceAddEdit"))
);
const InvoiceDetails = Loadable(
  lazy(() => import("../app/pages/Invoice/InvoiceDetails"))
);

export const routes = [
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/dashboard", element: <ProtectedRoute element={<Dashboard />} /> },
  {
    path: "/invoices",
    element: <ProtectedRoute element={<InvoiceList />} />,
    children: [
      { path: "/add", element: <InvoiceAddEdit mode="ADD" /> },
      { path: "/:id/edit", element: <InvoiceAddEdit mode="EDIT" /> },
      { path: "/:id", element: <InvoiceDetails /> },
    ],
  },
];
