<template>
  <card>
    <h4 slot="header" class="card-title">Add User</h4>
    <form>
      <div class="row">
        <div class="col-md-2">
          <div class="form-group select">
            <label for="exampleFormControlSelect1">Role</label>
            <select class="form-control" v-model="role">
              <option value="USER">USER </option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
        </div>

        <div class="col-md-5">
          <label for="email" class="control-label">Email * </label>
          <input
            id="email"
            class="form-control"
            type="email"
            placeholder="Email"
            v-model="email"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-9">
          <label class="control-label">FullName *</label>
          <input
            class="form-control"
            type="text"
            placeholder="Full Name"
            v-model="fullName"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-9">
          <label class="control-label">UserName *</label>
          <input
            class="form-control"
            type="text"
            placeholder="User Name"
            v-model="userName"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-9">
          <label class="control-label">Password *</label>
          <input
            class="form-control"
            type="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-9">
          <label class="control-label">
            Confirm Password *
          </label>
          <input class="form-control" type="password" placeholder="Password" />
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
      email: '',
      fullName: '',
      userName: '',
      password: ''
    }
  },

  methods: {
    handleAddUser() {
      let json = {
        username: this.userName,
        password: this.password,
        email: this.email,
        full_name: this.fullName,
        status: 1,
        roleDto: {
          code: this.role
        }
      }
      //console.log(json)
      axios
        .post('/api/admin/auth/signup', json, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(result => {
          console.log(result.data)
          alert('Add user thanh cong')
        })
        .catch(error => {
          alert('Error: khong thanh cong')
          throw new Error(`API ${error}`)
        })
    }
  }
}
</script>

<style scoped></style>
