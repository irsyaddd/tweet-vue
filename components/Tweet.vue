<script setup lang="ts">
const props = defineProps(["hashtags"]);
</script>

<template>
  <p>
    <slot />
    <span
      v-for="(item, index) in props.hashtags"
      :key="index"
      :style="{ color: color }"
    >
      #{{ item }}
    </span>
  </p>
</template>
