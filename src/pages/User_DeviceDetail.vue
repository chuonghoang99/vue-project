<template>
  <card>
    <h4 class="card-title">Device Detail</h4>
    <form class="form" v-if="Object.keys(deviceDetail).length !== 0">
      <div class="row">
        <div class="col-md-3">
          <label for="" class="control-label">Name Device</label>
          <input
            type="text"
            placeholder="Name Device"
            :disabled="true"
            v-model="deviceDetail.name"
          />
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
          <label for="" class="control-label">Sensor 01</label>
          <input
            class="form-control"
            :disabled="true"
            type="text"
            placeholder="Name Sensor 01"
            v-model="deviceDetail.sensorList[0].name"
          />
        </div>
        <div class="col-md-2 check-box  ">
          <input
            :disabled="true"
            type="checkbox"
            id="name_sensor_01"
            :checked="deviceDetail.sensorList[0].status"
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
            v-model="deviceDetail.sensorList[1].name"
          >
          </base-input>
        </div>
        <div class="col-md-2 check-box  ">
          <input
            :disabled="true"
            type="checkbox"
            id="name_sensor_02"
            :checked="deviceDetail.sensorList[1].status"
          /><label for="name_sensor_02"
            ><span class="ml-1">Collect</span></label
          >
        </div>
        <div class="col-md-2">
          <label for="" class="control-label">Sensor 03</label>
          <input
            class="form-control"
            :disabled="true"
            type="text"
            placeholder="Name Sensor 03"
            v-model="deviceDetail.sensorList[2].name"
          />
        </div>
        <div class="col-md-2 check-box  ">
          <input
            type="checkbox"
            id="name_sensor_03"
            :disabled="true"
            :checked="deviceDetail.sensorList[2].status"
          /><label for="name_sensor_03"
            ><span class="ml-1">Collect</span></label
          >
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">
          <label for="" class="control-label">Sensor 04</label>
          <input
            class="form-control"
            type="text"
            :disabled="true"
            placeholder="Name Sensor 04"
            v-model="deviceDetail.sensorList[3].name"
          />
        </div>
        <div class="col-md-2 check-box  ">
          <input
            type="checkbox"
            :disabled="true"
            :checked="deviceDetail.sensorList[3].status"
          /><label for="name_sensor_04"
            ><span class="ml-1">Collect</span></label
          >
        </div>

        <div class="col-md-2">
          <label for="" class="control-label">Sensor 05</label>
          <input
            class="form-control"
            type="text"
            :disabled="true"
            placeholder="Name Sensor 05"
            v-model="deviceDetail.sensorList[4].name"
          />
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
  </card>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'
import axios from 'axios'

export default {
  created() {
    let id = localStorage.getItem('idDeviceClick')
    let url = '/api/device/' + id
    axios
      .get(url, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(result => {
        this.deviceDetail = result.data
        console.log('device detail: ', this.deviceDetail)
      })
      .catch(error => {
        throw new Error(`API ${error}`)
      })
  },
  data() {
    return {
      deviceDetail: ''
    }
  }
}
</script>

<style scoped>
.form {
  min-height: 540px;
}
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
