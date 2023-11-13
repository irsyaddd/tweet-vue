
<script setup>
import { Camera } from 'lucide-vue-next';

</script>


<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-col justify-start w-2/4">
      <p>Twitter Embed</p>
      <p>Code The Design Challange from <span>codedesign.dev</span></p>
    </div>
    <div class="w-2/4 border rounded-md shadow-lg bg-slate-800 border-slate-700 h-80 p-7">
      <div class="w-16 h-16 rounded-full bg-slate-700"/>
      <div>
        <p>John Doe</p>
        <p>@realjohndoe</p>
      </div>
      <Camera
    color="red"
    :size="32"
  />

    </div>
  </div>
</template>
