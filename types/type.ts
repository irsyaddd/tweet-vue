export interface TweetProps {
  user: {
    name: string;
    username: string;
  };
  tweet: string;
  likes: number;
  hashtags: string[];
  timestamp: string;
  date: Date;
}
