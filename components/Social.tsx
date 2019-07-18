import React, { FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";

type SocialType = "facebook" | "twitter" | "instagram" | "youtube" | "linkedin";

interface SocialItemProps extends HTMLAttributes<HTMLAnchorElement> {
  site: SocialType;
}

export interface SocialProps {
  items: { [key in SocialType]?: string };
}

const SocialItem = styled.a<SocialItemProps>`
  img {
    display: block;
    width: 24px;
  }
`;

const SocialTable = styled.table.attrs({
  cellpadding: 0,
  cellspacing: 0,
  border: 0,
  align: "center"
})`
  margin: 0 auto;
  td {
    width: 40px;
  }
`;

const Social: FunctionComponent<SocialProps> = ({ items }) => {
  let socialItems = Object.keys(items).map((key: SocialType) => (
    <td key={key}>
      <SocialItem site={key} href={items[key]}>
        <img src={`/static/${key}.png`} alt={key} />
      </SocialItem>
    </td>
  ));
  return (
    <SocialTable>
      <tbody>
        <tr>{socialItems}</tr>
      </tbody>
    </SocialTable>
  );
};

export default Social;
