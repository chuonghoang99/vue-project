<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <h4 class="card-title pl-4 pb-2">
              List Device
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
                  v-for="device in listDevice"
                  :key="device.id"
                  @click="getIdDevice(device.id)"
                >
                  <td>{{ device.id }}</td>
                  <td>{{ device.name }}</td>
                  <td>{{ device.alive }}</td>

                  <td>{{ device.created_at | convertToDate }}</td>
                  <td>
                    <router-link tag="a" to="user-device-detail"
                      ><i
                        class="fas fa-info-circle ml-1"
                        style="color: blue"
                      ></i
                    ></router-link>
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
import Card from "src/components/Cards/Card.vue";
import axios from "axios";
import { mapState } from "vuex";
export default {
  created() {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let id = userLogin.id;

    axios
      .get("api/device/list", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(result => {
        this.listDevice = result.data;
        // console.log(result.data);
        // debugger;
      })
      .catch(error => {
        throw new Error(`API ${error}`);
      });

    //  /api/cdeeiv / list;
  },
  components: {
    Card
  },
  data() {
    return {
      listDevice: "",
      theadDevice: ["Id", "Name", "Alive", "Create At", "Action"]
    };
  },

  methods: {
    getIdDevice(id) {
      localStorage.setItem("idDeviceClick", id);
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    convertToDate(value) {
      if (!value) return "";
      else return new Date(value).toUTCString();
    }
  }
};
</script>
<style></style>
