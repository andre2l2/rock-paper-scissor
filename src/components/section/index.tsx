import React, { ReactElement } from "react";

import { SectionContainer } from "./style";

type SectionProps = {
  children: ReactElement | ReactElement[];
};

export const Section: React.FC<SectionProps> = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>;
};
