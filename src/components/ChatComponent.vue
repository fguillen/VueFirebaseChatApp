<template>
  <div class="container-sm mt-20">
    <div class="mx-5">
      <div class="mx-5">
        <MessageComponent v-for="message in messages" :key="message.id" :name="message.userName"
          :photo-url="message.userPhotoURL" :sender="message.userId === user?.uid">
          {{ message.text }}
        </MessageComponent>
      </div>
    </div>
  </div>

  <div ref="bottom" class="mt-20" />

  <div class="bottom">
    <div class="container-sm">
      <form v-if="isLogin" @submit.prevent="send">
        <input v-model="message" placeholder="Message" required />
        <button type="submit">
          <SendIconComponent />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuth, useChat } from "@/firebase"
import MessageComponent from "./MessageComponent.vue"
import SendIconComponent from "./SendIconComponent.vue"
import { ref, watch, nextTick } from "vue"

export default {
  components: { MessageComponent, SendIconComponent },
  setup() {
    const { messages, sendMessage } = useChat()
    const { user, isLogin } = useAuth()

    const bottom = ref(null)
    watch(
      messages,
      () => {
        console.log("watch.messages")
        nextTick(() => {
          console.log("watch.messages.nextTick")
          bottom.value?.scrollIntoView({ behavior: "smooth" })
        })
      },
      { deep: true }
    )

    const message = ref("")
    const send = () => {
      sendMessage(message.value)
      message.value = ""
    }

    return { isLogin, user, messages, send, message, bottom }
  }
}

</script>
