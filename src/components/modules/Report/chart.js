import React, { useEffect, useState } from "react";
import Router from "next/router";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";
import { makeStyles, Paper, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));
export default function Chart({ page }) {
  console.log(page);
  page = parseInt(page);
  const classes = useStyles();
  const [dataChart, setData] = useState([]);

  const fetchData = async () => {
    let resp = await fetch(
      `https://api.worldbank.org/v2/countries/NA/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=json`
    );
    let data = await resp.json();
    console.log(data);
    let dtChart = data[1].map((v) => ({
      name: v.country.value,
      value: v.value,
    }));
    setData(dtChart);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Paper className={classes.paper}>
      {dataChart.length > 0 && (
        <LineChart
          width={400}
          height={400}
          data={dataChart}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="value" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
        </LineChart>
      )}
      {/* {page !== dataChart.length && (
        <div>
          <Link
            color="primary"
            onClick={() =>
              Router.push(`/report/${page + 1}`, undefined, { shallow: true })
            }
          >
            Next
          </Link>
        </div>
      )}
      {page !== 0 && (
        <div>
          <Link
            color="primary"
            onClick={() =>
              Router.push(`/report/${page - 1}`, undefined, { shallow: true })
            }
          >
            Prev
          </Link>
        </div>
      )} */}
    </Paper>
  );
}
