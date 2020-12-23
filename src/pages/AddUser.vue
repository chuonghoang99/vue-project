<template>
  <card>
    <h4 slot="header" class="card-title">Add User</h4>
    <form>
      <div class="row">
        <div class="col-md-2">
          <div class="form-group select">
            <label for="exampleFormControlSelect1">Role</label>
            <select class="form-control">
              <option value="USER">USER </option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
        </div>

        <div class="col-md-5">
          <base-input
            type="email"
            label="email"
            placeholder="Email"
            v-model="this.email"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-9">
          <base-input
            type="text"
            label="fullname"
            placeholder="Full Name"
            v-model="this.fullName"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-9">
          <base-input
            type="text"
            label="username"
            placeholder="User Name"
            v-model="this.username"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-9">
          <base-input
            type="password"
            label="password"
            placeholder="Password"
            v-model="this.password"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-9">
          <base-input
            type="password"
            label="confirm-password"
            placeholder="Password"
          >
          </base-input>
        </div>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-left "
          @click.prevent="handleAddUser()"
        >
          Add User
        </button>
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
  data() {
    return {
      role: 'USER',
      email: 'a',
      fullName: 'a',
      username: 'a',
      password: 'a'
    }
  },

  methods: {
    handleAddUser() {
      let json = {
        username: this.username,
        password: this.password,
        email: this.email,
        full_name: this.fullName,
        status: 1,
        roleDto: {
          code: this.role
        }
      }
      console.log(json)
    }
  }
}
</script>

<style scoped></style>
