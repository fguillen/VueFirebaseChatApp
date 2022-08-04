import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import firebase from "firebase/app"
// import "firebase/auth"
// import "firebase/firestore"

import { ref, onUnmounted, computed } from "vue"


firebase.initializeApp({
  apiKey: "AIzaSyC0gCrWMo5HIofgTUiS8FsDCgpCpLVSfjM",
  authDomain: "test---vue-chat.firebaseapp.com",
  projectId: "test---vue-chat",
  storageBucket: "test---vue-chat.appspot.com",
  messagingSenderId: "13267053198",
  appId: "1:13267053198:web:0e0bf415fb6fb783ef77df"
})

const auth = firebase.auth()

export function useAuth() {
  const user = ref(null)
  const unsubscribe = auth.onAuthStateChanged(_user => (user.value = _user))
  onUnmounted(unsubscribe)
  const isLogin = computed(() => user.value !== null)

  const signIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()

    try {
      await auth.signInWithPopup(googleProvider)
    } catch (error) {
      console.error(error)
    }
  }

  const signOut = () => {
    console.log("SignOut")
    auth.signOut()
  }

  return { user, isLogin, signIn, signOut }
}

const firestore = firebase.firestore()
const messagesCollection = firestore.collection("messages")
const messagesQuery = messagesCollection.orderBy("createdAt", "desc").limit(100)

export function useChat() {
  const messages = ref([])
  const unsubscribe = messagesQuery.onSnapshot(snapshot => {
    messages.value = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .reverse()
  })

  onUnmounted(unsubscribe)

  const { user, isLogin } = useAuth()
  const sendMessage = text => {
    if (!isLogin.value) return
    const { photoURL, uid, displayName } = user.value
    messagesCollection.add({
      userName: displayName,
      userId: uid,
      userPhotoURL: photoURL,
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  const deleteMessage = (id) => {
    console.log("deleteMessage: " + id)
    if (!isLogin.value) return
    messagesCollection.doc(id).delete()
  }

  return { messages, sendMessage, deleteMessage }
}
