import React, { Fragment } from "react";
import EmailViewer from "../layouts/EmailViewer";
import Header from "../components/Header";
import { Container, GlobalScaffold } from "../components/Container";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Break from "../components/Break";
import SectionHeader from "../components/SectionHeader";
import Lead from "../components/Lead";
import { Title } from "../components/Titles";
import DateLocation from "../components/DateLocation";
import { ImageFull, ImageLeft, ImageRight } from "../components/Images";
import Article from "../components/Article";
import { Column, TwoColumn } from "../components/Contents";
import Grid from "../components/Grid";
import Ad from "../components/Ad";
import { sizes } from "../components/defaults";

export default () => (
  <EmailViewer>
    <Fragment>
      <GlobalScaffold />
      <Header
        src="https://litmus-builder.s3.amazonaws.com/1531253906570"
        alt="Fordham University"
        width="200"
      >
        School or Department Name
      </Header>
      <Container role="main" maxWidth={sizes.innerWidth + 30} bottomPad={true}>
        <Title>This Is The Title. It's a bit longer this time.</Title>
        <DateLocation date="Wednesday, February 13 at 6 p.m.">
          Costantino Room | School of Law | Lincoln Center Campus
        </DateLocation>
        <Break />
        <ImageFull src="https://placehold.it/1080x675" alt="" />
        <Break />
        <Lead>
          This is a lead content section. It's optional and should only be used
          for the first paragraph. If the user only reads this paragraph they
          should understand the purpose of the email.
        </Lead>
        <Break />
        This is some test content. It's just a test to evaluate the look and
        feel of typeset text. It can include <strong>bold</strong> or{" "}
        <em>italic</em> text. <a href="something">It can also have links.</a>{" "}
        Replace this text with your content.
        <Break />
        <SectionHeader>Section Header</SectionHeader>
        <Article
          title="Title for a News Article with an Image"
          imageUrl="https://placehold.it/600x375"
          alt="s"
          link="https://fordham.edu"
        >
          Replace this text with your content. Make sure your image is 600px
          wide so that it looks good on both desktop and mobile.
        </Article>
        <Break />
        <Article
          title="Title for a News Article with an Image"
          imageUrl="https://placehold.it/600x375"
          alt="s"
          link="https://fordham.edu"
        >
          Replace this text with your content. Make sure your image is 600px
          wide so that it looks good on both desktop and mobile.
        </Article>
        <Break />
        <Article
          title="Title for a News Article with an Image"
          imageUrl="https://placehold.it/600x375"
          alt="s"
          link="https://fordham.edu"
        >
          Replace this text with your content. Make sure your image is 600px
          wide so that it looks good on both desktop and mobile.
        </Article>
        <Break />
        <Article
          title="This is the Title for a News Article Without an Image"
          link="https://news.fordham.edu/commencement/commencement-2018/at-the-gabelli-school-helping-others-get-ahead/"
        >
          This is some test content. It's just a test to evaluate the look and
          feel of typeset text. Replace this text with your content.
        </Article>
        <Break />
        <TwoColumn>
          <Column
            imageUrl="https://placehold.it/600x375"
            alt="s"
            title="Column 1 Title"
          >
            This is some sample content for a 2 column layout. Make sure your
            image is 600px wide so that it looks good on both desktop and
            mobile.
          </Column>
          <Column
            imageUrl="https://placehold.it/600x375"
            link="http://fordham.edu"
            alt="s"
            title="Column 2 Title"
          >
            This is some sample content for a 2 column layout. Make sure your
            image is 600px wide so that it looks good on both desktop and
            mobile.
          </Column>
        </TwoColumn>
        <Break />
        <div>
          <ImageLeft src="https://placehold.it/600x375" alt="s" />
          This is some test content. It's just a test to evaluate the look and
          feel of typeset text. Please make sure to replace this text with your
          content.
          <br />
          <br />
          This content shows how you can wrap the text around an image. The
          image can be aligned either to the left or right. Make sure you have
          ample text between aligned images otherwise it will not look right.
          Your image should be 600px wide so that it looks good on both desktop
          and mobile.
        </div>
        <br />
        <div>
          <ImageRight src="https://placehold.it/600x375" alt="s" />
          This is some test content. It's just a test to evaluate the look and
          feel of typeset text. Please make sure to replace this text with your
          content.
          <br />
          <br />
          This content shows how you can wrap the text around an image. The
          image can be aligned either to the left or right. Make sure you have
          ample text between aligned images otherwise it will not look right.
          Your image should be 600px wide so that it looks good on both desktop
          and mobile.
        </div>
        <br />
        <Button href="http://fordham.edu">Call to Action</Button>
        <Break />
        <Grid
          images={[
            { src: "https://placehold.it/300x300", alt: "s" },
            { src: "https://placehold.it/300x300", alt: "s" },
            { src: "https://placehold.it/300x300", alt: "s" },
            { src: "https://placehold.it/300x300", alt: "s" }
          ]}
        />
        <Ad
          src="https://placehold.it/600x375"
          alt="s"
          link="#"
          linkText="Call to Action"
        >
          This is some ad text. This section can be used for sponsored content
          or to highlight a separate event or initiative.
        </Ad>
        <Break />
        <Ad link="#" linkText="Call to Action">
          This is some ad text. This section can be used for sponsored content
          or to highlight a separate event or initiative.
        </Ad>
      </Container>
      <Footer role="contentinfo" />
    </Fragment>
  </EmailViewer>
);
