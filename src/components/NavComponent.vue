<template>
  <nav>
    <div>
      <h1><strong class="text-red-400">Lovely</strong> Chat App</h1>

      <div v-if="isLogin" class="login">
        <AvatarComponent :src="user.photoURL" />
        <button class="text-gray-400 hover:text-white" @click="signOut">
          Sign Out
        </button>
      </div>

      <button v-else class="bg-green-500 hover:bg-green-600" @click="signIn">
        Sign in
      </button>
    </div>
  </nav>
</template>

<script>
import AvatarComponent from './AvatarComponent.vue'
import { useAuth } from '@/firebase'

export default {
  components: { AvatarComponent },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth()
    return { user, isLogin, signOut, signIn }
  }
}
</script>
