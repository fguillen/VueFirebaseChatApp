<template>
  <NavComponent />
  <ChatComponent />
</template>

<script>
import NavComponent from '@/components/NavComponent.vue'
import ChatComponent from '@/components/ChatComponent.vue'

export default {
  name: 'App',
  components: {
    ChatComponent,
    NavComponent
  }
}
</script>
