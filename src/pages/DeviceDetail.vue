<template>
  <card>
    <h4 slot="header" class="card-title">Device Detail</h4>
    <form v-if="Object.keys(deviceDetail).length !== 0">
      <div class="row">
        <div class="col-md-3">
          <base-input
            type="text"
            label="Name Device"
            placeholder="Name Device"
            :disabled="true"
            v-model="deviceDetail.name"
          >
          </base-input>
        </div>
        <div class="col-md-3 check-box  ">
          <input
            type="checkbox"
            :disabled="true"
            id="name_device"
            v-model="deviceDetail.alive"
            :checked="deviceDetail.alive"
          /><label for="namedevice"><span class="ml-1">Collect</span></label>
        </div>
      </div>

      <h4>SenSor</h4>
      <div class="row">
        <div class="col-md-2">
          <base-input
            :disabled="true"
            type="text"
            label="Sensor 01"
            placeholder="Name Sensor 01"
            v-model="listSensor[0].name"
          >
          </base-input>
        </div>
        <div class="col-md-2 check-box  ">
          <input
            :disabled="true"
            type="checkbox"
            id="name_sensor_01"
            :checked="listSensor[0].status"
          /><label for="name_sensor_01"
            ><span class="ml-1">Collect</span></label
          >
        </div>

        <div class="col-md-2">
          <base-input
            :disabled="true"
            type="text"
            label="Sensor 02"
            placeholder="Name Sensor 02"
            v-model="listSensor[1].name"
          >
          </base-input>
        </div>
        <div class="col-md-2 check-box  ">
          <input
            :disabled="true"
            type="checkbox"
            id="name_sensor_02"
            :checked="listSensor[1].status"
          /><label for="name_sensor_02"
            ><span class="ml-1">Collect</span></label
          >
        </div>
        <div class="col-md-2">
          <base-input
            :disabled="true"
            type="text"
            label="Sensor 03"
            placeholder="Name Sensor 03"
            v-model="listSensor[2].name"
          >
          </base-input>
        </div>
        <div class="col-md-2 check-box  ">
          <input
            type="checkbox"
            id="name_sensor_03"
            :disabled="true"
            :checked="listSensor[2].status"
          /><label for="name_sensor_03"
            ><span class="ml-1">Collect</span></label
          >
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">
          <base-input
            type="text"
            :disabled="true"
            label="Sensor 04"
            placeholder="Name Sensor 04"
            v-model="listSensor[3].name"
          >
          </base-input>
        </div>
        <div class="col-md-2 check-box  ">
          <input
            type="checkbox"
            :disabled="true"
            id="name_sensor_04"
            :checked="listSensor[3].status"
          /><label for="name_sensor_04"
            ><span class="ml-1">Collect</span></label
          >
        </div>

        <div class="col-md-2">
          <base-input
            type="text"
            :disabled="true"
            label="Sensor 05"
            placeholder="Name Sensor 05"
            v-model="listSensor[4].name"
          >
          </base-input>
        </div>
        <div class="col-md-2 check-box  ">
          <input type="checkbox" id="name_sensor_05" :disabled="true" /><label
            for="name_sensor_05"
            ><span class="ml-1">Collect</span></label
          >
        </div>
      </div>

      <div class="clearfix"></div>
    </form>

    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="card col-md-7 ml-3">
            Biểu đồ 1
          </div>

          <div class="card col-md-4 ml-5 mr-4 ">
            biểu đồ 2
          </div>
        </div>

        <div class="row">
          <div class="card col-md-11 ml-3">
            biểu đồ 3
          </div>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
import Card from "src/components/Cards/Card.vue";
import axios from "axios";

export default {
  created() {
    /// info device
    let id = localStorage.getItem("idDeviceClick");
    let url = `/api/device/${id}`;
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(result => {
        this.deviceDetail = result.data;
        this.listSensor = result.data.sensorList;
        this.listSensor.sort((a, b) => {
          if (a.code < b.code) return -1;
          return a.code > b.code ? 1 : 0;
        });
      })
      .catch(error => {
        throw new Error(`API ${error}`);
      });

    // get data sensor
    //Lấy tất cả dữ liệu sensor có status=1 liên quan đến device
    // /api/device/{id}/alldata

    axios.get(`/api/device/${id}/alldata`).then(result => {
      this.dataSensor = result.data;

      this.dataSensor.sort((a, b) => {
        if (a.code < b.code) return -1;
        return a.code > b.code ? 1 : 0;
      });

      console.log(this.dataSensor);
      var data = [];
      for (let i = 0; i < 5; i++) {
        data[i] = [];
        if (this.dataSensor[i].sensorDataList.length != 0) {
          this.dataSensor[i].sensorDataList.forEach(element => {
            console.log("aaaaa");
            let newLength = data[i].push(element.value);
          });
        }
      }
      //console.log(data[0]);
      this.dataSensor1 = data[0];
      this.dataSensor2 = data[1];
      this.dataSensor3 = data[2];
      this.dataSensor4 = data[3];
      this.dataSensor5 = data[4];

      console.log(this.dataSensor1);
      console.log(this.dataSensor2);
    });
  },
  data() {
    return {
      deviceDetail: "",
      listSensor: "",

      // data
      dataSensor: "",

      dataSensor1: "",
      dataSensor2: "",
      dataSensor3: "",
      dataSensor4: "",
      dataSensor5: ""
    };
  }
};
</script>

<style scoped>
.check-box input {
  margin-top: 40px;
  margin-left: 10px;
}

select,
.row .select {
  margin-left: 19px;
  min-width: 7;
}
</style>
