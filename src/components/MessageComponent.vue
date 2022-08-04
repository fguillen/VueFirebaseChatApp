<template>
  <div class="message">
    <span v-if="!sender">{{ name }}</span>
    <div class="flex" :class="sender ? 'flex-row-reverse' : ''">
      <AvatarComponent class="mt-1" :src="photoUrl" />
      <div v-if="isMimi" class="text text-4xl w-3/4 bg-red-400 font-black">
        <slot />
      </div>
      <div v-else class="text w-3/4" :class="sender ? 'bg-green-800' : 'bg-gray-700'">
        <slot />
      </div>

      <button @click="$emit('delete')" v-if="sender" type="button"
        class="h-9 text-white bg-gray-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <font-awesome-icon :icon="['fa', 'fa-circle-xmark']" />
      </button>
    </div>
  </div>
</template>

<script>
import AvatarComponent from "./AvatarComponent.vue"
import { computed } from "vue"

export default {
  components: { AvatarComponent },
  props: {
    name: { type: String, default: "" },
    photoUrl: { type: String, default: "" },
    sender: { type: Boolean, default: false }
  },
  setup(_props, context) {
    console.log("context:", context.slots.default())
    const isMimi = computed(() => context.slots.default()[0].children.trim().match(/^[\smi]+$/))

    return { isMimi }
  }
}
</script>
