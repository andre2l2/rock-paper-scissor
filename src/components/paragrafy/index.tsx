import React, { ReactElement } from "react";

import { ParagrafyContainer } from "./style";

type ParagrafyProps = {
  children: ReactElement | string;
};

export const Paragrafy: React.FC<ParagrafyProps> = ({ children }) => {
  return <ParagrafyContainer>{children}</ParagrafyContainer>;
};
