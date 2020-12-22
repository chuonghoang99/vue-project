<template>
  <card>
    <h4 slot="header" class="card-title">Device Edit</h4>
    <form v-if="Object.keys(deviceDetail).length !== 0">
      <div class="row">
        <div class="col-md-4">
          <base-input
            type="text"
            label="Name Device"
            placeholder="Name Device"
            v-model="deviceDetail.name"
          >
          </base-input>
        </div>
        <div class="col-md-4 check-box  ">
          <input
            type="checkbox"
            id="name_device"
            v-model="deviceDetail.alive"
          /><label for="namedevice"><span class="ml-1">Collect</span></label>
        </div>
      </div>

      <h4>SenSor</h4>
      <div class="row">
        <div class="col-md-3">
          <base-input
            type="text"
            label="Sensor 01"
            placeholder="Name Sensor 01"
            v-model="deviceDetail.sensorList[0].name"
          >
          </base-input>
        </div>
        <div class="col-md-3 check-box  ">
          <input
            type="checkbox"
            id="name_sensor_01"
            v-model="checked_01"
          /><label for="name_sensor_01"
            ><span class="ml-1">Collect</span></label
          >
        </div>

        <div class="col-md-3">
          <base-input
            type="text"
            label="Sensor 02"
            placeholder="Name Sensor 02"
            v-model="deviceDetail.sensorList[1].name"
          >
          </base-input>
        </div>
        <div class="col-md-3 check-box  ">
          <input
            type="checkbox"
            id="name_sensor_02"
            v-model="checked_02"
          /><label for="name_sensor_02"
            ><span class="ml-1">Collect</span></label
          >
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <base-input
            type="text"
            label="Sensor 03"
            placeholder="Name Sensor 03"
            v-model="deviceDetail.sensorList[2].name"
          >
          </base-input>
        </div>
        <div class="col-md-3 check-box  ">
          <input
            type="checkbox"
            id="name_sensor_03"
            v-model="checked_03"
          /><label for="name_sensor_03"
            ><span class="ml-1">Collect</span></label
          >
        </div>

        <div class="col-md-3">
          <base-input
            type="text"
            label="Sensor 04"
            placeholder="Name Sensor 04"
            v-model="deviceDetail.sensorList[3].name"
          >
          </base-input>
        </div>
        <div class="col-md-3 check-box  ">
          <input
            type="checkbox"
            id="name_sensor_04"
            v-model="checked_04"
          /><label for="name_sensor_04"
            ><span class="ml-1">Collect</span></label
          >
        </div>

        <div class="col-md-3">
          <base-input
            type="text"
            label="Sensor 05"
            placeholder="Name Sensor 05"
            v-model="deviceDetail.sensorList[4].name"
          >
          </base-input>
        </div>
        <div class="col-md-3 check-box  ">
          <input
            type="checkbox"
            id="name_sensor_05"
            v-model="checked_05"
          /><label for="name_sensor_05"
            ><span class="ml-1">Collect</span></label
          >
        </div>
      </div>

      <div class="text-center">
        <button
          type="submit"
          to="/admin/device-edit"
          class="btn btn-info btn-fill float-left ml-3"
          @click="saveChange()"
        >
          Save Change
        </button>
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
    let username = localStorage.getItem('userNameClick')
    let id = localStorage.getItem('idDeviceClick')

    let url = `/api/admin/${username}/device/${id}`
    //console.log("url: ", url);

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

        this.checked_01 = this.listSensor[0].status
        this.checked_02 = this.listSensor[1].status
        this.checked_03 = this.listSensor[2].status
        this.checked_04 = this.listSensor[3].status
        this.checked_05 = this.listSensor[4].status

        console.log(this.deviceDetail.sensorList)
        // this.deviceDetail.sensorList.sort(dynamicSort("id"));
        console.log('aaaaaa', this.deviceDetail)
      })
      .catch(error => {
        throw new Error(`API ${error}`)
      })
  },
  data() {
    return {
      checked_01: '',
      checked_02: '',
      checked_03: '',
      checked_04: '',
      checked_05: '',
      deviceDetail: '',
      listSensor: ''
    }
  },

  methods: {
    saveChange() {
      // console.log("status ", this.checked_01);
      // console.log("status ", this.checked_02);
      // console.log("status ", this.checked_03);
      // console.log("status ", this.checked_04);
      // console.log("status ", this.checked_05);

      // debugger;
      let sensor1 = {
        id: this.listSensor[0].id,
        name: this.listSensor[0].name,
        code: 'SENSOR1',
        status: this.checked_01 ? 1 : 0
      }
      let sensor2 = {
        id: this.listSensor[1].id,
        name: this.listSensor[1].name,
        code: 'SENSOR2',
        status: this.checked_02 ? 1 : 0
      }
      let sensor3 = {
        id: this.listSensor[2].id,
        name: this.listSensor[2].name,
        code: 'SENSOR3',
        status: this.checked_03 ? 1 : 0
      }
      let sensor4 = {
        id: this.listSensor[3].id,
        name: this.listSensor[3].name,
        code: 'SENSOR4',
        status: this.checked_04 ? 1 : 0
      }
      let sensor5 = {
        id: this.listSensor[4].id,
        name: this.listSensor[4].name,
        code: 'SENSOR5',
        status: this.checked_05 ? 1 : 0
      }

      let json = {
        id: localStorage.getItem('idDeviceClick'),
        alive: this.deviceDetail.alive ? 1 : 0,
        name: this.deviceDetail.name,
        sensorList: [sensor1, sensor2, sensor3, sensor4, sensor5]
      }

      // let a = JSON.stringify(json);
      // console.log(a);
      //debugger;
      // console.log("json edit: ", json);

      // console.log("json put ", json);

      let userLogin = JSON.parse(localStorage.getItem('userLogin'))
      const url = '/api/admin/' + userLogin.username + '/device'

      axios
        .put(url, json, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(result => {
          //  console.log("aaaaaaaaa");
          console.log(result.data)
          alert('Update Success')
        })
        .catch(error => {
          throw new Error(`API ${error}`)
          alert('Add Device Fail')
        })
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
