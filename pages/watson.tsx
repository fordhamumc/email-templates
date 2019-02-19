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

export default () => (
  <EmailViewer>
    <Fragment>
      <GlobalScaffold />
      <Header
        src="https://litmus-builder.s3.amazonaws.com/1531253906570"
        alt="Fordham University"
        width="200"
      >
        Office of the President
      </Header>
      <Container>
        <Break className="large" />
        <div className="inner">
          <Title>This Is The Title</Title>
          <DateLocation date="Wednesday, February 13 at 6 p.m.">
            Costantino Room | School of Law | Lincoln Center Campus
          </DateLocation>
          <ImageFull src="https://placehold.it/1080x675" alt="" />
          <Lead>
            This is a lead content section. It's optional and should only be
            used for the first paragraph. If the user only reads this paragraph
            they should understand the purpose of the email.
          </Lead>
          <p>
            This is some test content. It's just a test to evaluate the look and
            feel of typeset text. It can include <strong>bold</strong> or{" "}
            <em>italic</em> text.{" "}
            <a href="something">It can also have links.</a> Replace this text
            with your content.
          </p>
          <SectionHeader>Section Header</SectionHeader>
          <Article
            title="Title for a News Article with an Image"
            imageUrl="https://placehold.it/600x375"
            alt="s"
            link="https://fordham.edu"
          >
            <p>
              Replace this text with your content. Make sure your image is 600px
              wide so that it looks good on both desktop and mobile.
            </p>
          </Article>
          <Article
            title="Title for a News Article with an Image"
            imageUrl="https://placehold.it/600x375"
            alt="s"
            link="https://fordham.edu"
          >
            <p>
              Replace this text with your content. Make sure your image is 600px
              wide so that it looks good on both desktop and mobile.
            </p>
          </Article>
          <Article
            title="Title for a News Article with an Image"
            imageUrl="https://placehold.it/600x375"
            alt="s"
            link="https://fordham.edu"
          >
            <p>
              Replace this text with your content. Make sure your image is 600px
              wide so that it looks good on both desktop and mobile.
            </p>
          </Article>

          <Article
            title="This is the Title for a News Article Without an Image"
            link="https://news.fordham.edu/commencement/commencement-2018/at-the-gabelli-school-helping-others-get-ahead/"
          >
            <p>
              This is some test content. It's just a test to evaluate the look
              and feel of typeset text. Replace this text with your content.
            </p>
          </Article>

          <TwoColumn>
            <Column
              imageUrl="https://placehold.it/600x375"
              alt="s"
              title="Column 1 Title"
            >
              <p>
                This is some sample content for a 2 column layout. Make sure
                your image is 600px wide so that it looks good on both desktop
                and mobile.
              </p>
            </Column>
            <Column
              imageUrl="https://placehold.it/600x375"
              link="http://fordham.edu"
              alt="s"
              title="Column 2 Title"
            >
              <p>
                This is some sample content for a 2 column layout. Make sure
                your image is 600px wide so that it looks good on both desktop
                and mobile.
              </p>
            </Column>
          </TwoColumn>

          <ImageLeft src="https://placehold.it/600x375" alt="s">
            <p>
              This is some test content. It's just a test to evaluate the look
              and feel of typeset text. Replace this text with your content.
            </p>
            <p>
              This content shows how you can wrap the text around an image. Make
              sure you have ample text between aligned images otherwise it will
              not look right. Make sure your image is 600px wide so that it
              looks good on both desktop and mobile.
            </p>
          </ImageLeft>

          <ImageRight src="https://placehold.it/600x375" alt="s">
            <p>
              This is some test content. It's just a test to evaluate the look
              and feel of typeset text. Replace this text with your content.
            </p>
            <p>
              This content shows how you can wrap the text around an image. Make
              sure you have ample text between aligned images otherwise it will
              not look right. Make sure your image is 600px wide so that it
              looks good on both desktop and mobile.
            </p>
          </ImageRight>
          <Button href="http://fordham.edu">Call to Action</Button>
        </div>
      </Container>
      <Footer />
    </Fragment>
  </EmailViewer>
);
