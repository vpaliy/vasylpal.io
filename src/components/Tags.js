import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  list-type: none;
  padding: 10px 0 0 0;
`

const Tag = styled.li`
  display: inline;
  background-color: #EEEEEE;
  color: rgba(0, 0, 0, 0.68);
  padding: 5px 10px 5px 10px;
  margin-left: 2px;
  margin-right: 2px;
  font-size: 13px;
  font-weight: 400;
  border-radius: 3px;
`

const Tags = ({ tags }) => (
  <Container>
    {tags.map(tag => (
      <Tag>{tag}</Tag>
    ))}
  </Container>
)

export default Tags;
