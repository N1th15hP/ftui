import MainLayout from "../components/MainLayout";
import Dashboard from "../views/Dashboard";
import Expenses from "../views/Expenses";

const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "dashboard", // Define the default route
        element: <Dashboard />,
      },
      {
        path: "transactions/expenses", // Define the default route
        element: <Expenses />,
      },
    ],
  },
];

export default MainRoutes;
