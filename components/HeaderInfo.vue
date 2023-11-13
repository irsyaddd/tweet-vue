<script setup lang="ts">
import { Twitter } from "lucide-vue-next";
const props = defineProps(["name", "username"]);
</script>

<template>
  <div class="flex items-center gap-4">
    <NuxtImg
      src="/img/ava.jpg"
      class="object-cover overflow-hidden rounded-full w-14 aspect-square bg-slate-700"
    />
    <div class="flex items-center justify-between w-full h-fit">
      <div>
        <p class="font-semibold text-white">{{ props.name }}</p>
        <p class="text-sm font-thin text-white/60">@{{ props.username }}</p>
      </div>
      <Twitter :color="color" :fill="color" :size="sizeImage" />
    </div>
  </div>
</template>
