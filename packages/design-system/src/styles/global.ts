import { css } from "@emotion/react";

export const global = css({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },

  "ul, ol, li": {
    listStyle: "none",
  },

  "html, body": {
    fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue'`,
  },

  a: {
    textDecoration: "none",
  },
  button: {
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
  },
});
