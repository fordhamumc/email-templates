import React from "react";
import Layout from "./Default";
import Code from "../components/Code";
import styled from "styled-components";

const Section = styled.section`
  padding: 1.5rem 1rem;
  overflow-y: auto;

  @media (min-width: 60rem) {
    padding: 1.5rem 1rem;
    overflow-y: auto;
  }
`;

const SectionCode = styled(Section)`
  background-color: rgb(39, 40, 34);
  user-select: all;
`;

const EmailViewer = props => (
  <Layout className="grid">
    <Section>{props.children}</Section>
    <SectionCode>
      <Code>{props.children}</Code>
    </SectionCode>
  </Layout>
);

export default EmailViewer;
