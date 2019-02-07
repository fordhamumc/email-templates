import React, { Fragment } from "react";
import EmailViewer from "../layouts/EmailViewer";
import styled from "styled-components";

const RedElem = styled.div`
  color: red;
  @media (max-width: 60rem) {
    color: blue !important;
  }
`;
const BlueElem = styled.div`
  color: blue;
`;

export default () => (
  <EmailViewer>
    <Fragment>
      <RedElem>Yo</RedElem>
      <BlueElem>YO</BlueElem>
    </Fragment>
  </EmailViewer>
);
