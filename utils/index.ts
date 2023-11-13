import { tweet } from "~/data";

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatTimestamp(timeString: String): string {
  // Split the timeString into hours and minutes
  const [hours, minutes] = timeString.split(":");

  // Convert hours to 12-hour format
  const formattedHours = parseInt(hours, 10) % 12 || 12;

  // Concatenate hours, minutes, and AM/PM
  return `${formattedHours}.${minutes} ${Number(hours) >= 12 ? "PM" : "AM"}`;
}

// Binding Variable
export const color = "rgb(14 165 233)";
export const likes = ref(tweet.likes);
export const sizeImage = 28;
export const baseColor = "#243447";
export const strokeColor = "text-white/60";
export const defaultStrokeColor = ref(strokeColor);
export const isLiked = ref(false);
export const likedColor = ref(baseColor);
