<template>
  <div class="container-sm mt-20">
    <div class="mx-5">
      <div class="mx-5">
        <Message
          v-for="message in messages"
          :key="message.id"
          :name="message.userName"
          :photo-url="message.userPhotoURL"
          :sender="message.userId === user?.id"
        >
          {{ message.text }}
        </Message>
      </div>
    </div>
  </div>

  <div class="mt-20">

  </div>
</template>

<script>
import { useAuth, useChat } from "@/firebase"

export default {
  components: { Message },
  setup() {
    const { messages } = useChat()
    const { user, isLogin } = useAuth()

    return { isLogin, user, messages }
  }
}

</script>
