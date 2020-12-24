<template>
  <card>
    <h4 slot="header" class="card-title">Add Device</h4>
    <form>
      <div class="row">
        <div class="form-group select">
          <label for="exampleFormControlSelect1">Choose username</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="username"
          >
            <option v-for="user in listUser" :key="user.username">{{
              user.username
            }}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <label for="" class="control-label">Name Device</label>
          <input
            class="form-control"
            type="text"
            placeholder="Name Device"
            v-model="name"
          />
        </div>
        <div class="col-md-4 check-box  ">
          <input type="checkbox" id="namesensor" v-model="alive" /><label
            for="namesensor"
            ><span class="ml-1">Collect</span></label
          >
        </div>
      </div>

      <h4>SenSor</h4>

      <div class="row">
        <div class="col-md-3">
          <label for="" class="control-label">Sensor 01</label>
          <input
            class="form-control"
            type="text"
            placeholder="Name Sensor 01"
            v-model="sensor1.name"
          />
        </div>
        <div class="col-md-3 check-box  ">
          <input
            type="checkbox"
            id="name_sensor_01"
            v-model="sensor1.status"
          /><label for="name_sensor_01"
            ><span class="ml-1">Collect</span></label
          >
        </div>

        <div class="col-md-3">
          <label for="" class="control-label">Sensor 02</label>

          <input
            type="text"
            class="form-control"
            placeholder="Name Sensor 02"
            v-model="sensor2.name"
          />
        </div>
        <div class="col-md-3 check-box  ">
          <input
            type="checkbox"
            id="name_sensor_02"
            v-model="sensor2.status"
          /><label for="name_sensor_02"
            ><span class="ml-1">Collect</span></label
          >
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <label for="" class="control-label">Sensor 03</label>
          <input
            type="text"
            class="form-control"
            placeholder="Name Sensor 03"
            v-model="sensor3.name"
          />
        </div>
        <div class="col-md-3 check-box  ">
          <input
            type="checkbox"
            id="name_sensor_03"
            v-model="sensor3.status"
          /><label for="name_sensor_03"
            ><span class="ml-1">Collect</span></label
          >
        </div>

        <div class="col-md-3">
          <label for="" class="control-label">Sensor 04</label>
          <input
            class="form-control"
            type="text"
            placeholder="Name Sensor 04"
            v-model="sensor4.name"
          />
        </div>
        <div class="col-md-3 check-box  ">
          <input
            type="checkbox"
            id="name_sensor_04"
            v-model="sensor4.status"
          /><label for="name_sensor_04"
            ><span class="ml-1">Collect</span></label
          >
        </div>

        <div class="col-md-3">
          <label for="" class="control-label">Sensor 05</label>
          <input
            type="text"
            class="form-control"
            placeholder="Name Sensor 05"
            v-model="sensor5.name"
          />
        </div>
        <div class="col-md-3 check-box  ">
          <input
            type="checkbox"
            id="name_sensor_05"
            v-model="sensor5.status"
          /><label for="name_sensor_05"
            ><span class="ml-1">Collect</span></label
          >
        </div>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-left ml-3"
          @click.prevent="addDevice()"
        >
          Submit
        </button>
      </div>
      <div class="clearfix"></div>

      <div
        class="mx-auto p-1 bg-success text-white text-center mt-5"
        v-show="showAddDevice"
      >
        !!! ADD DEVICE DONE !!!
        <br /><br />
        <p>Device ID : {{ deviceId }}</p>
        <p>Token :{{ token }}</p>
      </div>

      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  created() {
    //this.$store.dispatch("loadListDevice");
    this.$store.dispatch('loadListUser')
    this.showAddDevice = false
  },
  computed: {
    ...mapState({
      listUser: state => state.listUser,
      listDeviceOfUser: state => state.listDeviceOfUser
      // listDevice: state => state.listDevice
    })
  },
  data() {
    return {
      showAddDevice: false,
      username: '',
      name: '',
      alive: '',
      sensor1: { name: 'sensor 1', code: 'SENSOR1', status: 0 },
      sensor2: { name: 'sensor 2', code: 'SENSOR2', status: 0 },
      sensor3: { name: 'sensor 3', code: 'SENSOR3', status: 0 },
      sensor4: { name: 'sensor 4', code: 'SENSOR4', status: 0 },
      sensor5: { name: 'sensor 5', code: 'SENSOR5', status: 0 },

      // result add device success
      deviceId: '',
      token: ''
      //sensorList =  [this.sensor1,this.sensor2, this.sensor3, this.sensor4,this.sensor5]
    }
  },

  methods: {
    addDevice() {
      this.sensor1.status = this.sensor1.status ? 1 : 0
      this.sensor2.status = this.sensor2.status ? 1 : 0
      this.sensor3.status = this.sensor3.status ? 1 : 0
      this.sensor4.status = this.sensor4.status ? 1 : 0
      this.sensor5.status = this.sensor5.status ? 1 : 0
      let json = {
        name: this.name,
        alive: this.alive ? 1 : 0,
        userDto: {
          username: this.username
        },
        sensorList: [
          this.sensor1,
          this.sensor2,
          this.sensor3,
          this.sensor4,
          this.sensor5
        ]
      }

      console.log('json', json)
      debugger
      axios
        .post('/api/admin/device', json, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(result => {
          console.log('result login: ', result.data)
          alert('Add device thành công')
          this.showAddDevice = true
          this.deviceId = result.data.deviceId
          this.token = result.data.token
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
button {
  min-width: 120px;
}
.row .select {
  margin-left: 19px;
  min-width: 7;
}
</style>
