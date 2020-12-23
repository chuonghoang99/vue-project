<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Sign In</h5>
              <form class="form-signin" @submit.prevent="handleSubmit()">
                <div class="form-label-group">
                  <input
                    type="text"
                    id="inputText"
                    class="form-control mt-2"
                    placeholder="username"
                    required
                    autofocus
                    v-model="username"
                  />
                  <label for="inputText">User Name</label>
                </div>

                <div class="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required
                    v-model="password"
                  />
                  <label for="inputPassword">Password</label>
                </div>

                <div class="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                  />
                  <label class="custom-control-label" for="customCheck1"
                    >Remember password</label
                  >
                </div>
                <button
                  class="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Sign in
                </button>

                <router-link to="" class="register">About Us</router-link>
                <br />
                <hr class="my-4" />
                <button class="btn btn-lg btn-google btn-block text-uppercase">
                  <i class="fab fa-google mr-2"></i> Sign in with Google
                </button>
                <button
                  class="btn btn-lg btn-facebook btn-block text-uppercase"
                >
                  <i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      axios
        .post('/api/auth/signin', {
          username: this.username,
          password: this.password
        })
        .then(result => {
          console.log('dfdf', result.data)
          console.log('result login: ', result.data)
          localStorage.setItem('userLogin', JSON.stringify(result.data.user))
          localStorage.setItem('token', result.data.jwt)
          if (result.data.user.authorities[0].authority == 'ROLE_USER') {
            alert('Ban dang nhap voi tu cach user')
            this.$router.push('/user/list-device')
          } else if (result.data.user.authorities[0].authority == 'ROLE_ADMIN')
            this.$router.push('/admin/overview')
        })
        .catch(error => {
          alert('Error: Dang nhap loi hoac tai khoan khong ton tai')
          throw new Error(`API ${error}`)
        })
    }
  }
}
</script>

<style scope>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.login {
  background: #007bff;
  background: linear-gradient(to right, #0062e6, #33aeff);
  min-height: 800px;
}

.register {
  margin-top: 10px;
  display: block;
  float: right;
}

.register:after {
  content: '';
  display: block;
  clear: both;
}
.register:hover {
  color: red;
}

.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group > label {
  margin-top: 4px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>
