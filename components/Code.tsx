import { Component, Fragment } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS as scSecrets } from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/styles/hljs";
import juice from "juice";
import { ReactElementLike } from "prop-types";

interface Props {
  children: ReactElementLike;
}

const { StyleSheet } = scSecrets;
const syntaxStyle = {
  background: "transparent",
  height: "100%",
  margin: 0,
  padding: 0
};

class Code extends Component<Props> {
  render() {
    StyleSheet.reset(true);
    const code = renderToStaticMarkup(this.props.children);
    const styleTags = StyleSheet.master.toHTML();
    StyleSheet.reset(false);
    const html = `<!doctype html>
<html>
  <head>${styleTags}</head>
  <body>
    ${code}
  </body>
</html>`;
    return (
      <Fragment>
        <SyntaxHighlighter
          language="html"
          style={monokai}
          customStyle={syntaxStyle}
        >
          {juice(html)}
        </SyntaxHighlighter>
      </Fragment>
    );
  }
}

export default Code;
