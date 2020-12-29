<template>
  <apexchart
    height="500"
    type="bar"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  name: 'BarRealTime',
  created() {
    let payload = {
      id: this.deviceClick,
      year: this.yearSelectBar
    }
    this.$store.dispatch('loadDataSenSorYear', payload)
    this.dataYear = this.$store.state.listDataSensorYear

    //console.log('dataYear', this.dataYear)

    this.dataYear.sort((a, b) => {
      if (a.code < b.code) return -1
      return a.code > b.code ? 1 : 0
    })
    this.dataYear.forEach((item, index, array) => {
      // console.log('item', item)
      this.series[index].name = item.name
      if (item.listData.length != 0) {
        item.listData.forEach(element => {
          //console.log(element)
          this.series[index].data[element.date - 1] = element.sum
          console.log(this.series[index].data[element.date - 1])
        })
      }
    })

    // console.log('this.series', this.series)
  },

  props: ['deviceClick', 'usernameClick', 'yearSelectBar'],
  data: function() {
    return {
      dataYear: [],
      // chart
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
        },
        yaxis: {
          title: {
            text: 'value'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val
            }
          }
        }
      },
      series: [
        { name: '', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { name: '', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { name: '', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { name: '', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { name: '', data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        // { name: 'dat', data: [20, 2, 34, 15, 0, 80, 90, 40, 22, 0, 30, 10] }
      ]
    }
  },
  mounted() {
    // setInterval(() => {
    //   this.getData(this.deviceClick)
    //   console.log('setInterval: ')
    // }, 1000)
  },
  methods: {}
}
</script>
