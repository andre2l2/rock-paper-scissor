import styled, { css } from "styled-components";

type CenterProps = {
  type: "center";
};

export const Center = styled.div<CenterProps>`
  display: flex;
  height: 100%;

  ${({ type }) =>
    type === "center"
      ? css`
          justify-content: center;
          align-items: center;
        `
      : null}
`;
