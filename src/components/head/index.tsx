import Head from "next/head";
import React from "react";

type HtmlHeadProps = {
  title: string;
};

export const HtmlHead: React.FC<HtmlHeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="An game of rock paper scissor" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};
