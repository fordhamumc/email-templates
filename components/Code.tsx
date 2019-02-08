import { Fragment, FunctionComponent } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/styles/hljs";
import juice from "juice";
import { html } from "js-beautify";
import { ReactElementLike } from "prop-types";
import emailTemplate from "../components/emailTemplate";
// @ts-ignore
import { __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS as scSecrets } from "styled-components";

// @ts-ignore
juice.nonVisualElements = ["P", "UL", "LI"];

interface Props {
  children: ReactElementLike;
}

const { StyleSheet } = scSecrets;
const syntaxStyle = {
  background: "transparent",
  height: "100%",
  margin: 0,
  padding: 0,
  whiteSpace: "pre-wrap"
};

const Code: FunctionComponent<Props> = props => {
  StyleSheet.reset(true);
  const code = renderToStaticMarkup(props.children);
  const styleTags = StyleSheet.master.toHTML();
  StyleSheet.reset(false);
  return (
    <Fragment>
      <SyntaxHighlighter
        language="html"
        style={monokai}
        customStyle={syntaxStyle}
        wrapLines={true}
      >
        {html(juice(emailTemplate(styleTags, code)))}
      </SyntaxHighlighter>
    </Fragment>
  );
};

export default Code;
