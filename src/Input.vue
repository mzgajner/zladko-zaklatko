<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = defineProps<{ disabled: boolean }>()
const emit = defineEmits<{ sendMessage: [string] }>()

const messageText = ref('')
const sendingDisabled = computed(() => messageText.value.length === 0 || props.disabled)

function sendMessage() {
  if (sendingDisabled.value) return
  emit('sendMessage', messageText.value)
  messageText.value = ''
}
</script>

<template>
  <div class="input">
    <input v-model="messageText" placeholder="Vnesi sporočilo" type="text" @keyup.enter="sendMessage" />
    <div class="send-button" :class="{ disabled: sendingDisabled }" @click="sendMessage">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V6.98C22 4.23 19.76 2 17 2ZM13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75ZM17 8.75H7C6.59 8.75 6.25 8.41 6.25 8C6.25 7.59 6.59 7.25 7 7.25H17C17.41 7.25 17.75 7.59 17.75 8C17.75 8.41 17.41 8.75 17 8.75Z"
          fill="currentColor" />
      </svg>
    </div>
  </div>
</template>

<style>
.input {
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  flex-basis: 4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  line-height: 1.15;
  width: 100%;

  input:focus {
    outline: 2px solid cornflowerblue;
  }

  input {
    border: none;
    background-image: none;
    background-color: white;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    border-radius: 1.125rem;
    flex-grow: 2;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.2);
    letter-spacing: 0.025em;
    font-family: inherit;

    &:placeholder {
      color: #999;
    }
  }

  .send-button {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.2);
    color: cornflowerblue;
    padding: 0.30rem 0.25rem 0.15rem 0.25rem;

    &.disabled {
      color: #999;
    }
  }
}
</style>
