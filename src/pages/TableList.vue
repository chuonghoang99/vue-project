<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <h4 class="card-title pl-4 pb-2">List User</h4>

            <table class="table table-hover table-striped">
              <thead>
                <tr>
                  <th v-for="(x, index) in theadUser" :key="index">
                    {{ x }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="user in listUser"
                  :key="user.name"
                  @click="loadListDeviceOfUser(user.id, user.username)"
                >
                  <td>{{ user.id }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.full_name }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.create_time | convertToDate }}</td>
                  <td>{{ user.roleDto.name }}</td>
                  <td>
                    <i
                      class="far fa-trash-alt ml-3 mt-1"
                      style="color: black"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </card>
        </div>

        <div class="col-12" v-if="showDeviceOfUser">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <h4 class="card-title pl-4 pb-2">
              List Device Of
              <span style="color: red">{{ userClick | capitalize }}</span>
            </h4>

            <table class="table table-hover table-striped">
              <thead>
                <tr>
                  <th v-for="(x, index) in theadDevice" :key="index">
                    {{ x }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="device in listDeviceOfUser"
                  :key="device.id"
                  @click="getIdDevice(device.id)"
                >
                  <td>{{ device.id }}</td>
                  <td>{{ device.name }}</td>
                  <td>{{ device.alive }}</td>

                  <td>
                    <router-link tag="a" to="/admin/device-edit"
                      ><i class="fas fa-edit"></i
                    ></router-link>

                    <router-link tag="a" to="/admin/device-detail"
                      ><i
                        class="fas fa-info-circle ml-1"
                        style="color: blue"
                      ></i
                    ></router-link>
                    <i
                      class="far fa-trash-alt ml-2 mt-1 "
                      style="color: black"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  created() {
    this.$store.dispatch('loadListUser')
    this.$store.dispatch('loadListDevice')
  },
  components: {
    Card
  },
  computed: {
    ...mapState(['listUser'])
  },
  data() {
    return {
      listDeviceOfUser: '',
      userClick: '',
      showDeviceOfUser: false,
      theadUser: [
        'Id',
        'Email',
        'FullName',
        'UserName',
        'CreateTime',
        'Role',
        'Action'
      ],
      theadDevice: ['Id', 'Name', 'Alive', 'Action'],

      deviceEdit: {}
    }
  },

  methods: {
    getNumberSensor(id) {
      return 5
    },

    getIdDevice(id) {
      console.log('id click: ', id)
      localStorage.setItem('idDeviceClick', id)
    },

    loadListDeviceOfUser(id, username) {
      // v-show ten bang
      this.showDeviceOfUser = true
      this.userClick = username

      // Save username click
      localStorage.setItem('userNameClick', username)

      // API -> List Device Of User
      let url = '/api/admin/' + username + '/device/list'
      axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(result => {
          this.listDeviceOfUser = result.data
          console.log('device of user', result.data)
        })
        .catch(error => {
          throw new Error(`API ${error}`)
        })
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    convertToDate(value) {
      if (!value) return ''
      else return new Date(value).toUTCString()
    }
  }
}
</script>
<style></style>
