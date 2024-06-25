import {
  CurrencyRupeeOutlined,
  WalletOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";

const icons = [CurrencyRupeeOutlined, WalletOutlined, ShoppingBagOutlined];

const transactions = {
  id: "transactions",
  title: "",
  type: "group",
  children: [
    {
      id: "transactions",
      title: "Transactions",
      type: "collapse", //"collapse",
      icon: icons[0],

      children: [
        {
          id: "income",
          title: "Income",
          type: "item",
          url: "/transactions/income",
          target: false,
          icon: icons[1],
        },
        {
          id: "expenses",
          title: "Expenses",
          type: "item",
          url: "/transactions/expenses",
          target: false,
          icon: icons[2],
        },
      ],
    },
  ],
};

export default transactions;
