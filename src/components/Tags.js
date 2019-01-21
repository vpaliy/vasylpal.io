import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  list-type: none;
`;

const Tag = styled.li`
  display: inline-block;
  background-color: #eeeeee;
  color: rgba(0, 0, 0, 0.68);
  padding: 5px 10px 5px 10px;
  margin: 0 2px 5px 2px;
  font-size: 13px;
  font-weight: 400;
  border-radius: 3px;
  word-wrap: break-word;
`;

const Tags = ({ tags }) => (
  <Container>
    {tags.map(tag => (
      <Tag>{tag}</Tag>
    ))}
  </Container>
);

export default Tags;
