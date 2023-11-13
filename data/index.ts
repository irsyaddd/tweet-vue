import type { TweetProps } from "~/types/type";

const today = new Date();
export const tweet: TweetProps = {
  user: {
    name: "John Doe",
    username: "realjohndoe",
  },
  tweet:
    "Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for the best'?",
  likes: 68,
  hashtags: ["programming", "coding", "debugging"],
  timestamp: today.toLocaleTimeString(),
  date: today,
};
