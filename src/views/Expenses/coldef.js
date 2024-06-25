import { Typography } from "@mui/material";

const PaymentType = ({ paymentMethod }) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        {paymentMethod.toLowerCase() === "upi" ? (
          <img
            style={{ height: 25, width: 25 }}
            src={process.env.PUBLIC_URL + "/assets/images/UPI.svg"}
          />
        ) : (
          <span> {paymentMethod} </span>
        )}
      </div>
    </>
  );
};

export const coldef = [
  {
    field: "id",
    hidden: true,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 2,
  },
  { field: "category", headerName: "Category", flex: 1 },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
  },
  { field: "amount", flex: 1, headerName: "Amount" },
  {
    field: "paymentMethod",
    flex: 1,
    headerName: "Payment Method",
    renderCell: (params) => {
      return <PaymentType paymentMethod={params?.row?.paymentMethod} />;
    },
    align: "center",
  },
];
