import Image from "next/image";
import React from "react";

import {
  CardContainer,
  ImageContainer,
  SpanContainer,
  TextContainer,
} from "./style";

export const Card: React.FC = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image
          src="/images/scissor.svg"
          alt="scissor"
          width={180}
          height={180}
        />
      </ImageContainer>
      <TextContainer>
        <SpanContainer>Scissor</SpanContainer>
      </TextContainer>
    </CardContainer>
  );
};
