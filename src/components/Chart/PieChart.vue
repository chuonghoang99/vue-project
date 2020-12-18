<script>
import { Pie } from "vue-chartjs";

export default {
  name: "LineChart",
  extends: Pie,
  data() {
    return {
      data: {
        labels: ["1990", "1995", "2000", "2005", "2010", "2015", "2020"],
        datasets: [
          {
            label: "đơn vị (triệu tấn)",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
              "#dcd615",
              "#57d408"
            ],
            data: [63.2, 52.1, 73.4, 78.4, 80.5, 79.2, 82.1]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Bieu do duong"
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  created() {
    setInterval(() => {
      // console.log("dat oc cho");
      this.renderChart(this.data, this.options);
    }, 5000);
  }
};
</script>

<style></style>
