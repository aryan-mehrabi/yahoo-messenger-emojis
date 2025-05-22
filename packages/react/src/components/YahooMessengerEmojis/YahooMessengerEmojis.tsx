import { EmojisName, getEmojiByName } from "../../../../core/src";
import React from "react";

type PropTypes = {
  name: EmojisName;
};

export const YahooMessengerEmojis = ({ name }: PropTypes) => {
  const emoji = getEmojiByName(name);

  return <img src={emoji?.id} />;
};
