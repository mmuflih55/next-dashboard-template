import React from "react";
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
const data = [
  [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ],
  [
    {
      name: "Page A",
      uv: 3000,
      pv: 2700,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 6000,
      pv: 398,
      amt: 210,
    },
    {
      name: "Page C",
      uv: 5000,
      pv: 3800,
      amt: 1290,
    },
    {
      name: "Page D",
      uv: 1780,
      pv: 5908,
      amt: 6000,
    },
    {
      name: "Page E",
      uv: 3890,
      pv: 2800,
      amt: 1181,
    },
    {
      name: "Page F",
      uv: 1390,
      pv: 6800,
      amt: 3500,
    },
    {
      name: "Page G",
      uv: 6490,
      pv: 2300,
      amt: 4100,
    },
  ],
  [
    {
      name: "Page A",
      uv: 1000,
      pv: 1400,
      amt: 4400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 4398,
      amt: 1210,
    },
    {
      name: "Page C",
      uv: 1000,
      pv: 2800,
      amt: 3290,
    },
    {
      name: "Page D",
      uv: 4780,
      pv: 3908,
      amt: 1000,
    },
    {
      name: "Page E",
      uv: 4890,
      pv: 3800,
      amt: 1181,
    },
    {
      name: "Page F",
      uv: 1390,
      pv: 4800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 5490,
      pv: 3300,
      amt: 2100,
    },
  ],
];
export default function Chart({ id }) {
  id = parseInt(id);
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <LineChart
        width={400}
        height={400}
        data={data[id]}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>
      {id !== data.length && (
        <div>
          <Link
            color="primary"
            onClick={() =>
              Router.push(`/report/${id + 1}`, undefined, { shallow: true })
            }
          >
            Next
          </Link>
        </div>
      )}
      {id !== 0 && (
        <div>
          <Link
            color="primary"
            onClick={() =>
              Router.push(`/report/${id - 1}`, undefined, { shallow: true })
            }
          >
            Prev
          </Link>
        </div>
      )}
    </Paper>
  );
}
