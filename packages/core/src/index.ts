import emoticons from "./emoticons.json";

type EmojisName = emoticons["emoticons"]["emoticon"][number]["title"];

export const getEmojiByName = (name: EmojisName) => {
  return emoticons.emoticons.emoticon.find((emoji) => emoji.title === name);
};
