<template>
  <div class="flex items-center gap-2 text-sm text-white/60">
    <div class="flex items-center gap-1">
      <button @click="toggleLike">
        <Heart :size="16" :fill="likedColor" :class="defaultStrokeColor" />
      </button>
      <p>{{ likes }}</p>
    </div>
    <div class="flex items-center gap-1">
      <p>{{ formatTimestamp(props.timestamp) }}</p>
      -
      <p>{{ formatDate(props.date) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Heart } from "lucide-vue-next";
const props = defineProps(["timestamp", "date"]);

function toggleLike() {
  isLiked.value = !isLiked.value;
  likedColor.value = isLiked.value ? "rgb(244 63 94)" : baseColor;
  defaultStrokeColor.value = isLiked.value ? "text-rose-600" : strokeColor;
  likes.value = isLiked.value ? likes.value + 1 : likes.value - 1;
}
</script>
