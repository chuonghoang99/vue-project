<template>
  <card>
    <h4 slot="header" class="card-title">Edit Profile</h4>
    <form>
      <div class="row">
        <div class="col-md-4">
          <label for="" class="control-label">Role</label>
          <input
            class="form-control"
            type="text"
            label="Role"
            :disabled="true"
            placeholder="Role"
            v-model="userLogin.authorities[0].authority"
          />
        </div>

        <div class="col-md-4">
          <label for="" class="control-label">Username</label>
          <input
            class="form-control"
            type="text"
            :disabled="true"
            placeholder="Email"
            v-model="userLogin.username"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-10">
          <label for="" class="control-label">fullname</label>
          <input
            class="form-control"
            type="text"
            placeholder="Full Name"
            v-model="userLogin.fullName"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <label for="" class="control-label">Address</label>
          <input class="form-control" type="text" placeholder="Home Address" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-5">
          <label for="" class="control-label">City</label>
          <input class="form-control" type="text" placeholder="City" />
        </div>
        <div class="col-md-5">
          <label for="" class="control-label">Country</label>
          <input class="form-control" type="text" placeholder="Country" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>About Me</label>
            <textarea
              rows="2"
              class="form-control border-input"
              placeholder="Here can be your description"
            >
            </textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click.prevent="updateProfile"
        >
          Update Profile
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'
import { mapState } from 'vuex'

export default {
  created() {
    this.userLogin = JSON.parse(localStorage.getItem('userLogin'))
    // console.log(typeof userLogin);

    console.log(this.userLogin)
  },
  components: {
    Card
  },
  data() {
    return {
      userLogin: {}
    }
  },
  computed: {
    // userLogin: JSON.parse(localStorage.getItem("userLogin"))
  },
  methods: {
    updateProfile() {
      alert('submit profile ---> code sau nha')
    }
    // test() {
    //   let x = localStorage.getItem("userLogin");
    //   return x;
    // }
  }
}
</script>
<style></style>
