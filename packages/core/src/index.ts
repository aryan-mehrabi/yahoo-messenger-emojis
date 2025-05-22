import emoticons from "./emoticons.json";
import emoticonsType from "./emoticons.json.js";

export type EmojisName = emoticonsType[number]["title"];

export const getEmojiByName = (name: EmojisName) => {
  return emoticons.find((emoji) => emoji.title === name);
};
