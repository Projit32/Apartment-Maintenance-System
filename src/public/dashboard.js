/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars

  //get data
  const client = new XMLHttpRequest();
  client.onload = function(){
    if (this.status == 200) {
      const response = JSON.parse(this.responseText);
      const labelsData=[];
      const datasetsData=[];
      response.data.forEach(element => {
        labelsData.push(element.month);
        datasetsData.push(element.amount);
      });

      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labelsData,
          datasets: [{
            data: datasetsData,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false
          }
        }
      })
    }
    else{
      console.error({
          code : this.status,
          details : JSON.parse(this.responseText)
        })
    }
  }
  const year = new Date().getFullYear();
  client.open("GET", "/stats/electricityTrends/"+year,true)
  client.setRequestHeader("Content-type","application/json");
  client.send()
  
})()
