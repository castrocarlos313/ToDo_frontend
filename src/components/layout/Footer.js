/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Footer = () => {
  return (
    <footer
      css={css`
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        color: white;
        background: #000;
        text-align: center;
        margin: 0;
      `}
    >
      <p>Desarrolado por Carlos Castro , {new Date().getFullYear()}.</p>
    </footer>
  );
};

export default Footer;
