<script setup lang="ts">
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
  </div>
</template>
