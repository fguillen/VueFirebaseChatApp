<script>
import { useChat } from "@/firebase"
import { watch, onMounted } from "vue"

export default {
  setup() {
    const favicon = document.getElementById("favicon");
    const { messages } = useChat()
    let isFocus = false

    const setUnreadIcon = () => {
      favicon.href = "/favicon.png";
    }

    const setReadIcon = () => {
      favicon.href = "/favicon_read.png";
    }

    const setFocus = () => {
      isFocus = true
      setReadIcon()
    }

    const setUnfocus = () => {
      isFocus = false
    }

    const visibilitychange = () => {
      if (document.visibilityState === 'visible') {
        setFocus()
      } else {
        setUnfocus()
      }
    }

    watch(
      messages,
      () => {
        if (!isFocus) {
          setUnreadIcon()
        }
      }
    )

    onMounted(() => {
      document.addEventListener('visibilitychange', visibilitychange );
      setFocus()
    })
  }
}
</script>
