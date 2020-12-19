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
    ...mapGetters(["totalUser", "totalDevice"])
  },
  data() {
    return {
      totalData: 0,
      total: 0
    };
  }
};
</script>
<style></style>
