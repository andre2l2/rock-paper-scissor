import styled from "styled-components";

import { ColorsDefault } from "@/styles/colors";

export const CardContainer = styled.div`
  height: 350px;
  width: 235px;
  border-radius: 15px;
  background-color: ${ColorsDefault.BACKGRAUND};
  border: 10px solid ${ColorsDefault.FONT};
  padding: 10px;
  margin: 10px;
  transition: 0.5s;

  cursor: pointer;

  &:hover {
    border: 10px solid ${ColorsDefault.BORDER};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

export const SpanContainer = styled.span`
  font-size: 48px;
  color: ${ColorsDefault.FONT};
`;
