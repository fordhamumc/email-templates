import React, { Fragment, FunctionComponent } from "react";
import sizes from "./sizes";

interface Props {
  width?: number | string;
}

const IeContainer: FunctionComponent<Props> = ({
  width = sizes.innerWidth + sizes.gutter * 2,
  children
}) => {
  return (
    <Fragment>
      <div
        dangerouslySetInnerHTML={{
          __html: `<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:${width}px;" width="${width}"><tr><td style="font-size: 0;line-height: 0;mso-line-height-rule:exactly;"><div><![endif]-->`
        }}
      />
      {children}
      <div
        dangerouslySetInnerHTML={{
          __html: `<!--[if mso | IE]></div></td></tr></table><![endif]-->`
        }}
      />
    </Fragment>
  );
};

export { IeContainer };
