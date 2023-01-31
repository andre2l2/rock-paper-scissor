import React from "react";

import { Card } from "@/components/card";
import { Center } from "@/components/center/center";
import { HtmlHead } from "@/components/head";
import { Paragrafy } from "@/components/paragrafy";
import { Section } from "@/components/section";

const Home: React.FC = () => {
  return (
    <>
      <HtmlHead title="Rock Paper Scissor | Game" />
      <Section>
        <Paragrafy>by Andre Ferreira</Paragrafy>
        <Center type="center">
          <Card name="Scissor" img="/images/scissor.svg" />
          <Card name="Paper" img="/images/paper.svg" />
          <Card name="Rock" img="/images/rock.svg" />
        </Center>
      </Section>
    </>
  );
};

export default Home;
