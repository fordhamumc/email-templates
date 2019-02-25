import React, { Component } from "react";
import SimpleStorage from "react-simple-storage";
import Layout from "./Default";
import Code from "../components/Code";
import styled from "styled-components";

interface State {
  codeOpen: boolean;
}

const Section = styled.section`
  box-sizing: border-box;
  overflow-y: auto;
  height: calc(50vh - 0.5rem - 0.7em);

  &.grid--single {
    height: 100%;
    overflow: auto;
  }

  @media (min-width: 60rem) {
    height: calc(100vh - 1rem - 1.4em);
  }
`;

const SectionCode = styled(Section)`
  background-color: rgb(39, 40, 34);
  padding: 1.5rem 1rem;
`;

const ToggleButton = styled.button`
  background: dodgerblue;
  color: white;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

class EmailViewer extends Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      codeOpen: false
    };
  }
  private handleCodeToggle = () => {
    this.setState(prevState => ({
      codeOpen: !prevState.codeOpen
    }));
  };
  public render() {
    const { children } = this.props;
    return (
      <Layout className="grid" codeOpen={this.state.codeOpen}>
        <SimpleStorage parent={this} />
        <Section className={this.state.codeOpen ? "" : "grid--single"}>
          {children}
        </Section>
        {this.state.codeOpen && (
          <SectionCode>
            <Code>{children}</Code>
          </SectionCode>
        )}
        <ToggleButton onClick={this.handleCodeToggle}>
          {this.state.codeOpen ? "Layout Only" : "Code View"}
        </ToggleButton>
      </Layout>
    );
  }
}

export default EmailViewer;
