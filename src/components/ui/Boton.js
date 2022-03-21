import styled from "@emotion/styled";

const Boton = styled.button`
  display: block;
  min-width: 150px;
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  box-sizing: border-box;
  border-radius: 1rem;
  background-color: #e1e1e1;
  font-size: 2rem;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #fff;
  }
`;

export default Boton;
