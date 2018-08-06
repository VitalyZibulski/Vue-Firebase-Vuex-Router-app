import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../store'
import Vuetify from 'vuetify'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
      // Initialize Firebase
      var config = {
          apiKey: 'AIzaSyAX3_yDkwq-mCDLyCr1ovFTi5kN0s8zSew',
          authDomain: 'onlinestore-9643b.firebaseapp.com',
          databaseURL: 'https://onlinestore-9643b.firebaseio.com',
          projectId: 'onlinestore-9643b',
          storageBucket: 'onlinestore-9643b.appspot.com',
          messagingSenderId: '677150071068'
      }
      fb.initializeApp(config)
  }
})
