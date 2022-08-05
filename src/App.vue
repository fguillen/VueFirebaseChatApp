<template>
  <FaviconComponent />
  <NavComponent />
  <ChatComponent />
</template>

<script>
import NavComponent from '@/components/NavComponent.vue'
import ChatComponent from '@/components/ChatComponent.vue'
import FaviconComponent from '@/components/FaviconComponent.vue'

export default {
  name: 'App',
  components: {
    ChatComponent,
    NavComponent,
    FaviconComponent
}
}
</script>
