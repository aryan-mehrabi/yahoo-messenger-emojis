import emoticons from "./emoticons.json";
import emoticonsType from "./emoticons.json.js";

const emojiImports = import.meta.glob("./emojis/*.png", { eager: true });

const emojis: Record<string, string> = {};

console.log("emojiImports", emojiImports);
for (const path in emojiImports) {
  const fileName = path.split("/").pop().replace(".png", "");
  console.log("fileName", fileName);
  emojis[fileName] = emojiImports[path].default;
}

type EmojisName = emoticonsType[number]["title"];

const getEmojiByName = (name: EmojisName) => {
  return emoticons.find((emoji) => emoji.title === name);
};

export { emojis, getEmojiByName, type EmojisName };
