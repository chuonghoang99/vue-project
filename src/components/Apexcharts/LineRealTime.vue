<template>
  <apexchart
    ref="realtimeChart"
    type="line"
    height="450"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { mapState } from 'vuex'
export default {
  created() {
    this.$store.dispatch('loadDataSensor', this.deviceClick)
    this.dataSensor = this.$store.state.listDataSensor
    console.log('this.dataSensor', this.dataSensor)

    this.dataSensor.sort((a, b) => {
      if (a.code < b.code) return -1
      return a.code > b.code ? 1 : 0
    })

    console.log('this.dataSensor', this.dataSensor)

    // for (let i = 0; i < 5; i++) {
    //   if (this.dataSensor[i].sensorDataList.length != 0) {
    //     this.dataSensor[i].sensorDataList.sort((a, b) => {
    //       if (a.id < b.id) return -1
    //       return a.id > b.id ? 1 : 0
    //     })

    //     this.dataSensor[i].sensorDataList.forEach(element => {
    //       let newLength = data[i].push(element.value)
    //       console.log('data[]', data[i])
    //     })
    //   }
    // }

    // his.series[0].data = data[0]
    // console.log('this.series[o].data', data[0])

    // this.series[1].data = data[1]

    // this.series[2].data = data[2]
    // this.series[3].data = data[3]
    // this.series[4].data = data[4]t
  },
  props: ['deviceClick', 'usernameClick'],

  // chuwa load dk state -> 16
  // computed: {
  //   ...mapState(['listDataSensor'])
  // },
  data() {
    return {
      dataSensor: '',
      dataSensor1: '',
      dataSensor2: '',
      dataSensor3: '',
      dataSensor4: '',
      dataSensor5: '',

      // chart
      series: [
        {
          name: 'Sensor 01',
          data: []
        }
        // {
        //   name: 'Sensor 02',
        //   data: []
        // },
        // {
        //   name: 'Sensor 03',
        //   data: []
        // },
        // {
        //   name: 'Sensor 04',
        //   data: []
        // },
        // {
        //   name: 'Sensor 05',
        //   data: []
        // }
      ],
      chartOptions: {
        colors: ['#77B6EA', '#545454', '#00ff00', '#009900', '#ff33ff'],
        chart: {
          height: 450,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          }
        },
        toolbar: {
          show: false
        },
        grid: {
          show: true,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        stroke: {
          curve: 'smooth'
        },
        grid: {
          padding: {
            left: 0,
            right: 0
          }
        },
        dropShadow: {
          enabled: true,
          opacity: 0.3,
          blur: 5,
          left: -7,
          top: 22
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Biểu đổ lượng nước các sensor của thiết bị',
          align: 'left'
        },
        xaxis: {
          categories: [],
          title: {
            text: 'Time'
          }
        },
        yaxis: {
          title: {
            text: 'Valude'
          },
          min: 0,
          max: 400
        }
      }
    }
  },
  mounted() {
    this.setDataLineChart()
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * 99)
    },
    setDataLineChart() {
      // setInterval(() => {
      //   this.series[0].data.splice(0, 1)
      //   // this.series[0].data.push(this.getRandomArbitrary(0, 99))
      //   this.updateSeriesLine()
      // }, 3000)
    },
    updateSeriesLine() {
      //   this.$refs.realtimeChart.updateSeries(
      //     [
      //       {
      //         data: this.series[0].data
      //       }
      //     ],
      //     false,
      //     true
      //   )
    }
  }
}
</script>
