/* eslint-disable prettier/prettier */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* basics of importing, also * as is bad because it imports all functions*/
import './assets/main.scss'

import ttt, * as math from './stores/temp';
console.log({ttt})
console.log(math.add(ttt,1))
console.log(math.subtract(ttt,1))

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
