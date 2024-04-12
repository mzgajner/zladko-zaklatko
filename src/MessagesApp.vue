<script setup lang="ts">
import { ref } from "vue";

import Header from "./Header.vue";
import Input from "./Input.vue";
import Messages from "./Messages.vue";
import { decrypt } from "./crypto";
import hints from "./hints.json";
import {
  addOurMessage,
  addTheirMessage,
  addTheirWrongMessage,
} from "./messages";

const typing = ref(false);

async function attemptDecryption(message) {
  typing.value = true;

  const decryptionAttempts = hints.map((encryptedHint) =>
    decrypt(encryptedHint, message.toLocaleLowerCase())
  );
  const results = await Promise.all(decryptionAttempts);
  const correctResults = results.filter((result) => result !== false);

  await new Promise((resolve) => window.setTimeout(resolve, 200));

  typing.value = false;

  if (correctResults.length === 0) {
    addTheirWrongMessage();
  } else {
    addTheirMessage(correctResults[0].toString());
  }
}

function handleSendMessage(message: string) {
  addOurMessage(message);
  attemptDecryption(message);
}
</script>

<template>
  <main>
    <Header />
    <Messages class="messages" :typing="typing" />
    <Input @send-message="handleSendMessage" :disabled="typing" />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial,
    sans-serif;
}
</style>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.messages {
  flex: 1;
}
</style>
