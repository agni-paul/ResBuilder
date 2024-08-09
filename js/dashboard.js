function init() {
    dragula([document.querySelector("#dragparent1"), document.querySelector("#dragparent2")]);
    dragula([document.querySelector("#dragparent2"), document.querySelector("#dragparent1")]);
    //dragula([document.querySelector("#dragparent3"), document.querySelector("#dragparent6"), document.querySelector("#dragparent7"), document.querySelector("#dragparent8"), document.querySelector("#dragparent9"), document.querySelector("#dragparent10")]);
    //dragula([document.querySelector("#dragparent4"), document.querySelector("#dragparent6"), document.querySelector("#dragparent7"), document.querySelector("#dragparent8"), document.querySelector("#dragparent9"), document.querySelector("#dragparent10")]);
    //dragula([document.querySelector("#dragparent5"), document.querySelector("#dragparent6"), document.querySelector("#dragparent7"), document.querySelector("#dragparent8"), document.querySelector("#dragparent9"), document.querySelector("#dragparent10")]);
    //dragula([document.querySelector("#dragparent6"), document.querySelector("#dragparent1"), document.querySelector("#dragparent2"), document.querySelector("#dragparent3"), document.querySelector("#dragparent4"), document.querySelector("#dragparent5")]);
    //dragula([document.querySelector("#dragparent7"), document.querySelector("#dragparent1"), document.querySelector("#dragparent2"), document.querySelector("#dragparent3"), document.querySelector("#dragparent4"), document.querySelector("#dragparent5")]);
    //dragula([document.querySelector("#dragparent8"), document.querySelector("#dragparent1"), document.querySelector("#dragparent2"), document.querySelector("#dragparent3"), document.querySelector("#dragparent4"), document.querySelector("#dragparent5")]);
    //dragula([document.querySelector("#dragparent9"), document.querySelector("#dragparent1"), document.querySelector("#dragparent2"), document.querySelector("#dragparent3"), document.querySelector("#dragparent4"), document.querySelector("#dragparent5")]);
    //dragula([document.querySelector("#dragparent10"), document.querySelector("#dragparent6"), document.querySelector("#dragparent7"), document.querySelector("#dragparent8"), document.querySelector("#dragparent9"), document.querySelector("#dragparent10")]);
}

$(function () {


  // =====================================
  // Profit
  // =====================================
  var chart = {
    series: [
      { name: "Customer Impact:", data: [50, 40, 80, 59, 50] },
      { name: "Disruptive Occurence:", data: [70, 60, 59, 57, 43] },
      { name: "Detection Likelihood:", data: [45, 57, 49, 40, 38] },
    ],

    chart: {
      type: "bar",
      height: 345,
      offsetX: -15,
      toolbar: { show: true },
      foreColor: "#adb0bb",
      fontFamily: 'inherit',
      sparkline: { enabled: false },
    },


      colors: ["#616161", "#C9CACB", "#799EC3"],


    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "65%",
        borderRadius: [3],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    markers: { size: 0 },

    dataLabels: {
      enabled: false,
    },


    legend: {
      show: true,
    },


    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      type: "category",
      categories: ["People", "Locations", "Applications", "Hardware", "Suppliers"],
      labels: {
        style: { cssClass: "grey--text lighten-2--text fill-color" },
      },
    },


    yaxis: {
      show: true,
      min: 0,
      max: 100,
      tickAmount: 4,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 3,
      lineCap: "butt",
      colors: ["transparent"],
    },


    tooltip: { theme: "light" },

    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
            }
          },
        }
      }
    ]


  };

  var chart = new ApexCharts(document.querySelector("#chart"), chart);
  chart.render();


  // =====================================
  // Breakup
  // =====================================
  var breakup = {
    color: "#adb5bd",
    series: [6],
    labels: ["Critical"],
    chart: {
        width: 220,
        type: "donut",
        fontFamily: "Plus Jakarta Sans', sans-serif",
        foreColor: "#FFFAFA",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 250,
        donut: {
            size: '95%',
            background: "#F2383A",
            labels: {
                show: true,
                name: {
                    show: true,
                    color: "#FFFAFA",
                },
                value: {
                    show: true,
                },
            },
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
      colors: ["#D81B60"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
  chart.render();

    // =====================================
    // Breakup 1
    // =====================================
    var breakup1 = {
        color: "#adb5bd",
        series: [20],
        labels: ["Moderate"],
        chart: {
            width: 280,
            type: "donut",
            fontFamily: "Plus Jakarta Sans', sans-serif",
            foreColor: "#FFFAFA",
        },
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 230,
                donut: {
                    size: '95%',
                    background: "#adb0bb",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            color: "#FFFAFA",
                        },
                        value: {
                            show: true,
                        },
                    },
                },
            },
        },
        stroke: {
            show: false,
        },

        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        colors: ["A19E9E"],

        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        width: 150,
                    },
                },
            },
        ],
        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
    };

    var chart = new ApexCharts(document.querySelector("#breakup1"), breakup1);
    chart.render();

    // =====================================
    // Breakup 2
    // =====================================
    var breakup2 = {
        color: "#adb5bd",
        series: [10],
        labels: ["Minor"],
        chart: {
            width: 240,
            type: "donut",
            fontFamily: "Plus Jakarta Sans', sans-serif",
            foreColor: "#FFFAFA",
        },
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 250,
                donut: {
                    size: '95%',
                    background: "#adb0bb",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            color: "#FFFAFA",
                        },
                        value: {
                            show: true,
                        },
                    },
                },
            },
        },
        stroke: {
            show: false,
        },

        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        colors: ["A19E9E"],

        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        width: 150,
                    },
                },
            },
        ],
        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
    };

    var chart = new ApexCharts(document.querySelector("#breakup2"), breakup2);
    chart.render();

    // =====================================
    // Breakup 3
    // =====================================
    var breakup3 = {
        color: "#adb5bd",
        series: [9],
        labels: ["Major"],
        chart: {
            width: 230,
            type: "donut",
            fontFamily: "Plus Jakarta Sans', sans-serif",
            foreColor: "#FFFAFA",
        },
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 280,
                donut: {
                    size: '95%',
                    background: "#799EC3",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            color: "#FFFAFA",
                        },
                        value: {
                            show: true,
                        },
                    },
                },
            },
        },
        stroke: {
            show: false,
        },

        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        colors: ["#799EC3"],

        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        width: 150,
                    },
                },
            },
        ],
        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
    };

    var chart = new ApexCharts(document.querySelector("#breakup3"), breakup3);
    chart.render();


  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "#49BEFF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();
})