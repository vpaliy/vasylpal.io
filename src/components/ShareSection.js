import React from 'react';
import styled from 'styled-components';
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
} from 'react-share';

import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  RedditShareButton,
  GooglePlusShareButton,
  PinterestShareButton,
} from 'react-share';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-bottom: 2rem;
`;

const ButtonList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-item: center;
`;

const Prompt = styled.h1`
  width: 100%;
  font-family: 'Merriweather';
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  font-size: 18px;
  border-bottom: 1px solid #eeeeee;
  line-height: 0.01em;
  margin: 10px 0 30px;
  > span {
    color: rgba(0, 0, 0, 0.68);
    background: #fff;
    padding: 0 10px;
  }
`;

const url = window.location.origin.toString();

const ShareSection = ({ title }) => (
  <Wrapper>
    <Prompt>
      <span>Share this</span>
    </Prompt>
    <ButtonList>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      <RedditShareButton url={url} title={title}>
        <RedditIcon size={32} round={true} />
      </RedditShareButton>
      <GooglePlusShareButton url={url} title={title}>
        <GooglePlusIcon size={32} round={true} />
      </GooglePlusShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
      <PinterestShareButton url={url} title={title}>
        <PinterestIcon size={32} round={true} />
      </PinterestShareButton>
    </ButtonList>
  </Wrapper>
);

export default ShareSection;
