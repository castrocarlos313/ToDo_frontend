/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0 1rem 1rem 0;
`;

const Label = styled.label`
  min-width: 70px;
  text-align: center;
  margin: auto 10px;
`;

const Span = styled.span`
  font-size: 1.6rem;
  position: relative;
  top: 10px;
  left: 10px;
  color: red;
`;

const InputGroup = ({
  value,
  onChange,
  inputId,
  labelName,
  placeHolder,
  type = "text",
  error,
}) => (
  <>
    {error && <Span>{error}</Span>}
    <div
      css={css`
        display: flex;
        background-color: #e1e1e1;
        border-radius: 1rem;
        margin-top: 1rem;
      `}
    >
      <Label htmlFor={inputId}>{labelName}</Label>
      <Input
        type={type}
        onChange={(e) => onChange(e)}
        placeholder={placeHolder}
        id={inputId}
        name={inputId}
        value={value}
        autoComplete="true"
      />
    </div>
  </>
);

export default InputGroup;
