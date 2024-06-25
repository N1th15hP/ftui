import {
  DashboardOutlined,
  CurrencyRupeeOutlined,
  BarChartOutlined,
} from "@mui/icons-material";

const icons = [DashboardOutlined, CurrencyRupeeOutlined, BarChartOutlined];

const dashboard = {
  id: "dashboard",
  title: "",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item", //"collapse",
      icon: icons[0],

      // children: [
      //   {
      //     id: "transactions",
      //     title: "Transactions",
      //     type: "item",
      //     url: "/dashboard/default",
      //     target: false,
      //     icon: icons[1],
      //   },
      //   {
      //     id: "investments",
      //     title: "Investments",
      //     type: "item",
      //     url: "/pages/register/register3",
      //     target: false,
      //     icon: icons[2],
      //   },
      // ],
    },
  ],
};

export default dashboard;
