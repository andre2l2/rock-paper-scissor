import React from "react";

import { Card } from "@/components/card";
import { HtmlHead } from "@/components/head";
import { Section } from "@/components/section";

const Home: React.FC = () => {
  return (
    <>
      <HtmlHead title="Rock Paper Scissor | Game" />
      <Section>
        <Card />
      </Section>
    </>
  );
};

export default Home;
