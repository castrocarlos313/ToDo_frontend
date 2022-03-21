import styled from "@emotion/styled";

const Icon = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => (props.bg ? props.bg : "#000")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconBoton = ({ children, color, bg, onClick }) => {
  return (
    <Icon type="button" color={color} bg={bg} onClick={onClick}>
      {children}
    </Icon>
  );
};

export default IconBoton;
