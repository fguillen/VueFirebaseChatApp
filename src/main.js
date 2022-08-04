import { createApp } from 'vue'
import App from './App.vue'

import './main.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCircleXmark)

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
