import styled from "@emotion/styled";

const Form = styled.form`
  width: 350px;
  background-color: #999;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export default Form;
