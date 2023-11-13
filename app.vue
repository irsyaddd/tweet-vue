<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";
import { tweet } from "./data";
useHead({ title: "Tweet Embed Component" });
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <Container>
      <HeaderInfo :name="tweet.user.name" :username="tweet.user.username" />
      <Tweet :hashtags="tweet.hashtags">
        {{ tweet.tweet }}
      </Tweet>
      <TweetInfo :date="tweet.date" :timestamp="tweet.timestamp" />
    </Container>
    <div
      class="md:w-[63%] lg:w-[36%] my-3 text-sm lowercase text-white/30 italic flex items-center"
    >
      Inspiration Source :
      <div class="relative pr-4">
        <NuxtLink
          to="https://codedesign.dev/challenge/twitter-embed"
          target="_blank"
        >
          codedesign.dev
        </NuxtLink>
        <ArrowUpRight :size="14" class="absolute top-0 right-0" />
      </div>
    </div>
  </div>
</template>
