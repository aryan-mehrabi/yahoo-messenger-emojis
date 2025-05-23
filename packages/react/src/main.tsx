import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { YahooMessengerEmojis } from "./components/YahooMessengerEmojis/YahooMessengerEmojis";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <p>hi</p>
    <YahooMessengerEmojis name="alien" />
  </StrictMode>,
);
