import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "@/ui/Title";
import ListTable from "@/layout/ListTable";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const data = [
  {
    date: "16 Mar, 2019",
    name: "Elvis Presley",
    shipTo: "Tupelo, MS",
    paymentMethod: "VISA ⠀•••• 3719",
    amount: 312.44,
  },
  {
    date: "16 Mar, 2019",
    name: "Paul McCartney",
    shipTo: "London, UK",
    paymentMethod: "VISA ⠀•••• 2574",
    amount: 866.99,
  },
  {
    date: "16 Mar, 2019",
    name: "Tom Scholz",
    shipTo: "Boston, MA",
    paymentMethod: "MC ⠀•••• 1253",
    amount: 100.81,
  },
  {
    date: "16 Mar, 2019",
    name: "Michael Jackson",
    shipTo: "Gary, IN",
    paymentMethod: "AMEX ⠀•••• 2000",
    amount: 654.39,
  },
  {
    date: "15 Mar, 2019",
    name: "Bruce Springsteen",
    shipTo: "Long Branch, NJ",
    paymentMethod: "VISA ⠀•••• 5919",
    amount: 212.79,
  },
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <ListTable
        data={data}
        labels={["Date", "Name", "Ship To", "Payment Method", "Sale Amount"]}
      />
    </React.Fragment>
  );
}
