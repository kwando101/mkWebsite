//global



//reuse-chart

//contamination-chart

let conGraph = document.getElementById('needlestick-chart').getContext('2d');


let conChart = new Chart(conGraph,{ 
  type:"horizontalBar",
  data:{
    labels:['Hepatitis B', 'Hepatitis C','HIV'],
    datasets:[{
      data:[
        333,
        33,
        2
      ],
      backgroundColor:'darkblue',
      borderColor:'black',
      fontColor:'black',
      fillColor: 'red'
    }],
    
  },

  options:{

    title:{
      display:false,
    },

    legend:{
      display:false
    },

    scales:{
      xAxes:[{
        scaleLabel:{
          display:true,
          labelString:"Out of 1000 (person)",
          fontSize:18,
          fontColor:'black',
        },
        gridLines:{
          display:false,
          color:'black',
        },
        ticks:{
          fontSize:18,
          fontColor:'Black'
        }
      }],

      yAxes:[{
        scaleLabel:{
          display:true,
          labelString:"Bloodborne Viruses",
          fontSize:18,
          fontColor:'black',
          padding:40
        },
        gridLines:{
          display:true,
          color:'black',
        },
        ticks:{
          fontSize:18,
          fontColor:'black'
        }
      }],

    }
    
  }
})