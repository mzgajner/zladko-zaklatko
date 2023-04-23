<script setup lang="ts">
import { ref } from "vue";

import { decrypt } from "./crypto";
import hints from "./hints.json";

const key = ref("");
const outputData = ref("");
const loading = ref(false);

async function attemptDecryption() {
  if (key.value.length === 0) return;
  loading.value = true;

  const decryptionAttempts = hints.map((encryptedHint) =>
    decrypt(encryptedHint, key.value)
  );
  const results = await Promise.all(decryptionAttempts);
  const correctResults = results.filter((result) => result !== false);
  key.value = "";

  await new Promise((resolve) => window.setTimeout(resolve, 5000));

  loading.value = false;

  if (correctResults.length === 0) {
    outputData.value = "Ključ žal ni pravilen 😞.";
  } else {
    outputData.value = correctResults[0].toString();
  }
}

function reset() {
  outputData.value = "";
}
</script>

<template>
  <main>
    <template v-if="loading">
      <div class="loader">⏳</div>
    </template>
    <template v-else-if="outputData === ''">
      <div class="icon">🔑</div>

      <input
        type="text"
        placeholder="Vnesi šifro"
        v-model="key"
        @keyup.enter="attemptDecryption"
      />

      <button si @click="attemptDecryption" :disabled="key.length === 0">
        Dekodiraj
      </button>

      <div class="output">{{ outputData }}</div>
    </template>
    <template v-else>
      <div class="output">{{ outputData }}</div>

      <button @click="reset">Nazaj</button>
    </template>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.icon {
  font-size: 72px;
  margin-bottom: 1rem;
}

input {
  font-size: 20px;
}

button {
  margin-top: 1rem;
  font-size: 20px;
}

.output {
  white-space: pre-wrap;
  text-align: center;
  margin-bottom: 1rem;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.loader {
  font-size: 72px;
  animation: rotation 2.5s infinite ease-in-out;
}
</style>
