import Image from "next/image";
import React from "react";

import {
  CardContainer,
  ImageContainer,
  SpanContainer,
  TextContainer,
} from "./style";

type CardProps = {
  name: string;
  img: string;
  onClick: (name: string) => void;
};

export const Card: React.FC<CardProps> = ({ name, img, onClick }) => {
  return (
    <CardContainer onClick={() => onClick(name)}>
      <ImageContainer>
        <Image src={img} alt="image" width={180} height={180} />
      </ImageContainer>
      <TextContainer>
        <SpanContainer>{name}</SpanContainer>
      </TextContainer>
    </CardContainer>
  );
};
