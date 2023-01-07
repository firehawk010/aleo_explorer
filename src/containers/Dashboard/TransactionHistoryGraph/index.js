import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import './index.scss';

const TransactionHistoryGraph = () => {

  const lineChart1 = {
    chart: {
      type: "line",
      backgroundColor: null,
      height: "180",
      margin: 0,
      padding: 0,
      spacing: 0,
      style: {
        fontFamily: 'Montserrat'
      },
      // events: {
      //   load() {
      //     this.showLoading();
      //     setTimeout(this.hideLoading.bind(this), 2000);
      //   }
      // }
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
    },
    tooltip: {
      enabled: true,
    },
    plotOptions: {
      line: {
        spacing: 0,
        size: "95%",
        showInLegend: false,
        lineWidth: 3,
        lineColor: "#516FB6",
        fillColor: false,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 8,
          states: {
            hover: {
              enabled: false
            }
          }
        }
      },
    },
    yAxis: {
      gridLineColor: "transparent",
      labels: {
        series: [
          {
            data: [0, 1, 3, 2, 4, 5, 4.5, 4, 6, 8],
          },
        ],
      },
      title: {
        enabled: false,
      },
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.y}'
    },
    xAxis: {
      lineColor: "transparent",
      labels: {
        enabled: false,
      },

    },
    series: [
      {
        data: [0, 1, 3, 2, 4, 5, 4.5, 4, 6, 8],
      },
    ],
  };



  return (
    <>
      <div className="transaction_graph_bg">
        <div className="transaction_graph_main_container">
          <div className="transaction_container">
            <div className="title">
              Transaction Traffic
            </div>
            <HighchartsReact highcharts={Highcharts} options={lineChart1} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TransactionHistoryGraph;