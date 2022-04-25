/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Footer from "./Footer";
import Header from "./Header";

const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Layout = (prop) => {
  return (
    <>
      <Header />
      <div
        css={css`
          height: 100%;
        `}
      >
        <Main>{prop.children}</Main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
