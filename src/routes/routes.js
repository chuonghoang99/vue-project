import DashboardLayout from '../layout/DashboardLayout.vue'
import User_DashboardLayout from '../layout/User_DashboardLayout.vue'
// GeneralViews
//import NotFound from "../pages/NotFoundPage.vue";
import Login from '../pages/Login.vue'
//import Register from "../pages/Register.vue";

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import AddDevice from 'src/pages/AddDevice'
import AddUser from 'src/pages/AddUser'
import DeviceDetail from 'src/pages/DeviceDetail'
import DeviceEdit from 'src/pages/DeviceEdit'

// User pages
import User_DeviceList from 'src/pages/User_DeviceList'
import User_Profile from 'src/pages/User_Profile'
import User_DeviceDetail from 'src/pages/User_DeviceDetail'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },

  {
    path: '/user',
    component: User_DashboardLayout,
    children: [
      { path: 'list-device', name: 'list-device', component: User_DeviceList },
      {
        path: 'user-profile',
        component: User_Profile
      },
      {
        path: 'user-device-detail',
        name: 'user-device-detail',
        component: User_DeviceDetail
      }
    ]
  },

  {
    path: '/admin',
    component: DashboardLayout,
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user-profile',
        name: 'User-profile',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      },
      {
        path: 'add-device',
        name: 'Add Device',
        component: AddDevice
      },
      {
        path: 'add-user',
        name: 'Add User',
        component: AddUser
      },

      {
        path: 'device-detail',
        name: 'Device Detail',
        component: DeviceDetail
      },
      {
        path: 'device-edit',
        name: 'Device Edit',
        component: DeviceEdit
      }
    ]
  }
  //{ path: "*", component: Login }
]

export default routes
