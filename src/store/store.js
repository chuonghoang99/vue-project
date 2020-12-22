import Vue from 'vue'
import Vuex from 'vuex'

// import listUser from "./Modules/listUser";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listUser: [],
    listDevice: []
  },

  getters: {
    totalUser: state => {
      return state.listUser.length
    },
    totalDevice: state => {
      return state.listDevice.length
    }
  },
  mutations: {
    // USER
    SAVE_LISTUSER(state, listUser) {
      state.listUser = listUser
    },

    // DEVICE
    SAVE_LISTDEVICE(state, listDevice) {
      state.listDevice = listDevice
    }
  },
  actions: {
    // API List User By Admin
    loadListUser({ commit }) {
      Vue.axios
        .get('/api/auth/list', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(result => {
          // console.log("list user ", result.data);
          commit('SAVE_LISTUSER', result.data)
        })
        .catch(error => {
          throw new Error(`API ${error}`)
        })
    },

    // API List Device by Admin
    loadListDevice({ commit }) {
      Vue.axios
        .get('/api/admin/device/list', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(result => {
          //console.log("list device ", result.data);
          commit('SAVE_LISTDEVICE', result.data)
        })
        .catch(error => {
          throw new Error(`API ${error}`)
        })
    }
  }

  // modules: {
  //   userProfile,
  //   listUser,

  // }
})
