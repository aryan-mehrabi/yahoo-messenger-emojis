import React from "react";
import {
  getEmojiByName,
  EmojisName,
  emojis,
} from "@yahoo-messenger-emojis/core";

type PropTypes = {
  name: EmojisName;
};

console.log(emojis);

export const YahooMessengerEmojis = ({ name }: PropTypes) => {
  const emoji = getEmojiByName(name);

  if (!emoji) {
    console.warn(`There is no emoji named: ${name}`);
    return null;
  }

  console.log(emoji);

  return <img src={emojis[emoji.id]} />;
};
