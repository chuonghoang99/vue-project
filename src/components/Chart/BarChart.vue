<script>
import { Bar } from 'vue-chartjs'

export default {
  name: 'BarChart',
  extends: Bar,
  data() {
    return {
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

        datasets: [
          {
            data: [70, 95, 100, 120, 257, 271, 300, 321, 383, 450, 300, 150],
            label: 'đơn vị tấn (nước)',
            backgroundColor: [
              '#3e95cd',
              '#8e5ea2',
              '#3cba9f',
              '#e8c3b9',
              '#c45850',
              '#ff66ff',
              '#3300ff',
              '#00cccc',
              '#ffff00',
              '#ff3300',
              '#0000cc',
              '#330033'
            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'TỔNG SẢN LƯỢNG NƯỚC TỪNG THÁNG TRONG NĂM'
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    // setInterval(() => {
    //   // console.log("dat oc cho");
    //   this.renderChart(this.data, this.options);
    // }, 5000);
    this.renderChart(this.data, this.options)
  }
}
</script>

<style></style>
