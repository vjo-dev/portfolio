import React from "react";
import { BugFill } from "react-bootstrap-icons";
import styled from "styled-components";

export default function NotFoundPage() {
  return(
    <NotFoundPageStyle>
      <BugFill size={200} color="var(--green-1)"/>
      <h2>Page not found !</h2>
    </NotFoundPageStyle>
  );
}

const NotFoundPageStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  gap: 2rem;
  min-height: 60vh;
`;
