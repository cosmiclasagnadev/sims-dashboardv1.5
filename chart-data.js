var options = {
    series: [{
    name: 'AR',
    data: [5, 10, 5, 6, 0, 9, 0, 0, 0, 0]
  }, {
    name: 'GR',
    data: [3, 2, 5, 2, 2, 1, 0, 2, 1, 1]
  }, {
    name: 'GA',
    data: [0, 1, 2, 1, 1, 0, 0, 0, 0, 0]
  }, {
    name: 'Mes',
    data: [9, 5, 4, 2, 5, 2, 1, 1, 3, 1]
  }, {
    name: 'HF',
    data: [10, 8, 5, 0, 1, 2, 1, 0, 0, 0]
  }, {
    name: 'BF',
    data: [2, 1, 2, 2, 5, 0, 0, 0, 0, 0]
  }
],
    chart: {
    type: 'area',
    height: 350
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  
  title: {
    text: 'Daily Pest Count',
    align: 'left',
    style: {
      fontSize: '14px'
    }
  },
  xaxis: {
    type: 'datetime',
    categories: ['2021-01-01', '2021-01-02', '2021-01-03', '2021-01-04', '2021-01-05', '2021-01-06', '2021-01-07', '2021-01-08', '2021-01-09', '2021-01-10']
  },
  yaxis: {
    tickAmount: 4,
    floating: false,
  
    labels: {
      style: {
        colors: '#8e8da4',
      },
      offsetY: -7,
      offsetX: 0,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false
    }
  },
  fill: {
    opacity: 0.5
  },
  tooltip: {
    x: {
      format: "MMMM d",
    },
    fixed: {
      enabled: false,
      position: 'topRight'
    }
  },
  grid: {
    yaxis: {
      lines: {
        offsetX: -30
      }
    },
    padding: {
      left: 20
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#custom-chart"), options);
  chart.render();