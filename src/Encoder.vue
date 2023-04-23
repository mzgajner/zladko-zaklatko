<script setup lang="ts">
import { ref } from 'vue';

import {encrypt, decrypt } from './crypto'

const inputData = ref('')
const outputData = ref('')
const key = ref('')

async function encode() {
  const result = await encrypt(inputData.value, key.value)
  outputData.value = result
  inputData.value = ''
}

async function decode() {
  const result = await decrypt(inputData.value, key.value)
  outputData.value = result.toString()
  inputData.value = ''
}
</script>

<template>
  <div>
    <div>
      <input type="text" placeholder="key" v-model="key" />
    </div>

    <div>
      <textarea v-model="inputData" placeholder="input data"></textarea>
    </div>

    <button si @click="encode">encode</button>
    <button si @click="decode">decode</button>

    <pre>{{ outputData }}</pre>
  </div>
</template>

<style scoped>
</style>
