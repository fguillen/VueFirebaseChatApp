<template>
  <nav>
    <div>
      <h1><strong>Vue</strong> Chat App</h1>
      <button v-if="isLogin" @click="signOut">
        Sign out xx

        <pre>
          {{ user }}
        </pre>
      </button>

      <button v-else @click="signIn">
        Sign in
      </button>
    </div>
  </nav>
</template>

<script>
import { useAuth } from "@/firebase"

export default {
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth()
    return { user, isLogin, signOut, signIn }
  }
}
</script>
