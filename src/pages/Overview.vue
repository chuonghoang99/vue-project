<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-chart text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Total User</p>
              <h4 class="card-title">{{ totalUser }}</h4>
            </div>
            <div slot="footer"><i class="fa fa-refresh"></i>Updated now</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-light-3 text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">Total Device</p>
              <h4 class="card-title">{{ totalDevice }}</h4>
            </div>
            <div slot="footer"><i class="fa fa-calendar-o"></i>Last day</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-vector text-danger"></i>
            </div>
            <div slot="content">
              <p class="card-category">Total Data</p>
              <h4 class="card-title">{{ this.totalData }}</h4>
            </div>
            <div slot="footer"><i class="fa fa-clock-o"></i>Last day</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-favourite-28 text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Total</p>
              <h4 class="card-title">{{ this.total }}</h4>
            </div>
            <div slot="footer"><i class="fa fa-refresh"></i>Updated now</div>
          </stats-card>
        </div>
      </div>

      <div class="row">
        <div class="card col-md-7 ml-3">
          <line-chart></line-chart>
        </div>

        <div class="card col-md-4 ml-5 mr-4 ">
          <pie-chart></pie-chart>
        </div>
      </div>

      <div class="row">
        <div class="card col-md-11 ml-3">
          <bar-chart></bar-chart>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StatsCard from "src/components/Cards/StatsCard.vue";

import LineChart from "src/components/Chart/LineChart";
import PieChart from "src/components/Chart/PieChart";
import BarChart from "src/components/Chart/BarChart";

import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("loadListDevice");
    this.$store.dispatch("loadListUser");
  },
  components: {
    StatsCard,
    LineChart,
    PieChart,
    BarChart
  },
  computed: {
    // totalUser() {
    //   return this.$store.getters.totalUser;
    // },
    // totalDevice() {
    //   return this.$store.getters.totalDevice;
    // }
    ...mapGetters(["totalUser", "totalDevice"])
  },
  data() {
    return {
      totalData: 0,
      total: 0,
      editTooltip: "Edit Task",
      deleteTooltip: "Remove",
      pieChart: {
        data: {
          labels: ["40%", "20%", "40%"],
          series: [40, 20, 40]
        }
      },
      lineChart: {
        data: {
          labels: [
            "9:00AM",
            "12:00AM",
            "3:00PM",
            "6:00PM",
            "9:00PM",
            "12:00PM",
            "3:00AM",
            "6:00AM"
          ],
          series: [
            [287, 385, 490, 492, 554, 586, 698, 695],
            [67, 152, 143, 240, 287, 335, 435, 437],
            [23, 113, 67, 108, 190, 239, 307, 308]
          ]
        },
        options: {
          low: 0,
          high: 800,
          showArea: false,
          height: "245px",
          axisX: {
            showGrid: false
          },
          lineSmooth: true,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          chartPadding: {
            right: 50
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              axisX: {
                labelInterpolationFnc(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      },
      barChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
          ]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: "245px"
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      },
      tableData: {
        data: [
          {
            title:
              'Sign contract for "What are conference organizers afraid of?"',
            checked: false
          },
          {
            title:
              "Lines From Great Russian Literature? Or E-mails From My Boss?",
            checked: true
          },
          {
            title:
              "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
            checked: true
          },
          {
            title: "Create 4 Invisible User Experiences you Never Knew About",
            checked: false
          },
          { title: 'Read "Following makes Medium better"', checked: false },
          { title: "Unfollow 5 enemies from twitter", checked: false }
        ]
      }
    };
  }
};
</script>
<style></style>
