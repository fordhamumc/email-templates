import React, {
  Fragment,
  FunctionComponent,
  HTMLAttributes,
  useContext
} from "react";
import styled, { ThemeContext } from "styled-components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

const ImageTable: FunctionComponent<{
  src: string;
  alt: string;
}> = ({ src, alt, ...props }) => {
  if (!src || !alt) return null;
  const theme = useContext(ThemeContext);
  return (
    <table {...props} role="presentation">
      <tbody>
        <tr>
          <td>
            <img src={src} alt={alt} width={theme.sizes.innerWidth / 3} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const AlignedImage = styled(ImageTable).attrs({
  cellSpacing: 0,
  cellPadding: 0,
  align: "left",
  className: `aligned-image`
})`
  border: 0;
  width: ${({ theme }) => Math.round(theme.sizes.innerWidth / 3)}px;
  max-width: 50%;

  img {
    display: block;
    width: ${({ theme }) => theme.sizes.innerWidth / 3}px;
  }

  td {
    padding: ${({ theme }) =>
      `5px ${theme.sizes.gutter}px ${theme.sizes.breakSm}px 0`};
  }

  &.right td {
    padding: ${({ theme }) =>
      `5px 0 ${theme.sizes.gutter}px ${theme.sizes.breakSm}px`};
  }

  @media (max-width: 440px) {
    &.aligned-image {
      width: 100% !important;
      max-width: 100% !important;

      td {
        padding: 0 0 ${({ theme }) => theme.sizes.breakSm}px 0 !important;
      }

      img {
        width: 100% !important;
      }
    }
  }
`;

const ImageFullStyle = styled.div`
  img {
    display: block;
    margin: 0 auto;
    width: ${({ theme }) => theme.sizes.innerWidth}px;
  }
`;

const ImageFull: FunctionComponent<Props> = ({ src, alt, ...props }) => {
  const theme = useContext(ThemeContext);
  return (
    <ImageFullStyle {...props}>
      <img src={src} alt={alt} width={theme.sizes.innerWidth} />
    </ImageFullStyle>
  );
};

const ImageLeft: FunctionComponent<
  Props & { align?: string } & HTMLAttributes<HTMLDivElement>
> = ({ src, alt, children, align = "left", ...props }) => {
  return (
    <Fragment>
      <AlignedImage src={src} alt={alt} align={align} {...props} />
      {children}
    </Fragment>
  );
};

const ImageRight: FunctionComponent<Props & { align?: string }> = props => (
  <ImageLeft {...props} align="right" className="right" />
);

export { ImageFull, ImageLeft, ImageRight };
