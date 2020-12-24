<template>
  <card>
    <h4 slot="header" class="card-title">Device Detail</h4>
    <form v-if="Object.keys(deviceDetail).length !== 0">
      <div class="row">
        <div class="col-md-3">
          <label for="" class="control-label">Name Device</label>
          <input
            class="form-control"
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
            v-model="deviceDetail.alive"
          /><label for="namedevice"><span class="ml-1">Collect</span></label>
        </div>
      </div>

      <h4>SenSor</h4>
      <div class="row">
        <div class="col-md-2">
          <label for="" class="control-label">SenSor 01</label>
          <input
            class="form-control"
            :disabled="true"
            type="text"
            label="Sensor 01"
            placeholder="Name Sensor 01"
            v-model="listSensor[0].name"
          />
        </div>
        <div class="col-md-2 check-box  ">
          <input
            :disabled="true"
            type="checkbox"
            v-model="listSensor[0].status"
          /><label for="name_sensor_01"
            ><span class="ml-1">Collect</span></label
          >
        </div>

        <div class="col-md-2">
          <label for="" class="control-label">SenSor 02</label>
          <input
            class="form-control"
            :disabled="true"
            type="text"
            placeholder="Name Sensor 02"
            v-model="listSensor[1].name"
          />
        </div>
        <div class="col-md-2 check-box  ">
          <input
            :disabled="true"
            type="checkbox"
            v-model="listSensor[1].status"
          /><label for="name_sensor_02"
            ><span class="ml-1">Collect</span></label
          >
        </div>
        <div class="col-md-2">
          <label for="" class="control-label">SenSor 03</label>
          <input
            class="form-control"
            :disabled="true"
            type="text"
            placeholder="Name Sensor 03"
            v-model="listSensor[2].name"
          />
        </div>
        <div class="col-md-2 check-box  ">
          <input
            type="checkbox"
            :disabled="true"
            v-model="listSensor[2].status"
          /><label for="name_sensor_03"
            ><span class="ml-1">Collect</span></label
          >
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">
          <label for="" class="control-label">SenSor 04</label>
          <input
            class="form-control"
            type="text"
            :disabled="true"
            placeholder="Name Sensor 04"
            v-model="listSensor[3].name"
          />
        </div>
        <div class="col-md-2 check-box  ">
          <input
            type="checkbox"
            :disabled="true"
            v-model="listSensor[3].status"
          /><label for="name_sensor_04"
            ><span class="ml-1">Collect</span></label
          >
        </div>

        <div class="col-md-2">
          <label for="" class="control-label">SenSor 05</label>
          <input
            class="form-control"
            type="text"
            :disabled="true"
            placeholder="Name Sensor 05"
            v-model="listSensor[4].name"
          />
        </div>
        <div class="col-md-2 check-box  ">
          <input
            type="checkbox"
            :disabled="true"
            v-model="listSensor[4].status"
          /><label for="name_sensor_05"
            ><span class="ml-1">Collect</span></label
          >
        </div>
      </div>

      <div class="clearfix"></div>
    </form>

    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="card col-md-11 ml-3 mt-5">
            <div>
              <line-real-time
                :deviceClick="deviceClick"
                :usernameClick="userClick"
              ></line-real-time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'
import axios from 'axios'
import LineRealTime from '../components/Apexcharts/LineRealTime.vue'
import LoginVue from './Login.vue'

export default {
  created() {
    this.userClick = localStorage.getItem('userNameClick')
    this.deviceClick = localStorage.getItem('idDeviceClick')

    // Get infor device
    let url = `/api/admin/${this.userClick}/device/${this.deviceClick}`
    axios
      .get(url, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(result => {
        this.deviceDetail = result.data

        this.listSensor = result.data.sensorList
        this.listSensor.sort((a, b) => {
          if (a.code < b.code) return -1
          return a.code > b.code ? 1 : 0
        })

        //console.log('listSensor', this.listSensor)

        this.listSensor.sort((a, b) => {
          if (a.code < b.code) return -1
          return a.code > b.code ? 1 : 0
        })

        // console.log('listSensor', this.listSensor)
      })
      .catch(error => {
        throw new Error(`API ${error}`)
      })
  },

  components: { LineRealTime },

  data() {
    return {
      // props - > chart
      deviceClick: '',
      userClick: '',

      deviceDetail: '',

      listSensor: []
    }
  }
}
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
