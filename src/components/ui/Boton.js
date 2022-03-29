import styled from "@emotion/styled";

const Boton = styled.button`
  display: block;
  min-width: 150px;
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  box-sizing: border-box;
  border-radius: 1rem;
  background-color: ${(props) => (props.bg ? props.bg : "#e1e1e1")};
  font-size: 2rem;
  transition: background-color 0.3s ease-in-out;
  color: ${(props) => (props.color ? props.color : "#000")};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.bgHover ? props.bgHover : "#fff")};
    color: ${(props) => (props.colorHover ? props.colorHover : "#000")};
  }
`;

export default Boton;
