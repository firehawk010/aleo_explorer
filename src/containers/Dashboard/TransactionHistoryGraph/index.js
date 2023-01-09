import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import './index.scss';

const TransactionHistoryGraph = () => {

  const PriceChart = {
    chart: {
      type: "spline",
      backgroundColor: null,
      height: 220,
      marginBottom: 30,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    yAxis: {
      gridLineWidth: 0,
      title: {
        enabled: false,
      },
      labels: {
        enabled: true,
        style: {
          color: "#fff",
        },
      },
    },
    xAxis: {
      lineColor: false,
      labels: {
        style: {
          fontSize: 10,
          color: "#fff",
          fontWeight: 300,
        },
      },
      gridLineWidth: 1,
      gridLineColor: "#002140",
      categories: [
        // "APR",
        // "MAY",
        // "JUN",
        // "JUL",
        // "AUG",
        // "SEP",
        // "OCT",
        // "NOV",
        // "DEC",
        // "JAN",
        // "FEB",
        // "MAR",
        // "APR",
        // "MAY",
        // "JUN",
      ],
    },
    series: [
      {
        showInLegend: false,
        lineWidth: 2,
        lineColor: "#02c9f7",
        marker: false,
        data: [4, 1, 3, 2, 14, 5, 4.5, 4, 6, 2, 9, 7, 11, 8],
      },
    ],
  };

  return (
    <>
      <div className="transaction_graph_bg">
        <div className="transaction_graph_main_container">
          <div className="transaction_container">
            <div className="title">
              Transaction <span>Traffic</span>
            </div>
            <HighchartsReact highcharts={Highcharts} options={PriceChart} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TransactionHistoryGraph;