import styled, { css } from "styled-components";

type CenterProps = {
  type: "center";
};

export const Center = styled.div<CenterProps>`
  display: flex;

  ${({ type }) =>
    type === "center"
      ? css`
          justify-content: center;
          align-items: center;
        `
      : null}
`;
