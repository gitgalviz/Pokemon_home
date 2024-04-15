import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { router } from './routes/routes.js'

import './style.css'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'

const app = createApp(App)

app.use(Quasar)
app.use(router)


app.mount('#app')