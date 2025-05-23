import React from "react";
import { getEmojiByName, EmojisName } from "@yahoo-messenger-emojis/core";

type PropTypes = {
  name: EmojisName;
};

export const YahooMessengerEmojis = ({ name }: PropTypes) => {
  const emoji = getEmojiByName(name);

  console.log(emoji);

  return <img src={emoji?.id} />;
};
