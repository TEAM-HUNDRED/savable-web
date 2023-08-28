import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

type PropsType = {
  label: string;
  placeholder: string;
  limitLength?: number;
  limitRow?: number;
  value: string;
  onChangeValue: (value: string) => void;
};

function CreateOrderInputCard({
  label,
  placeholder,
  limitLength,
  value,
  limitRow,
  onChangeValue,
}: PropsType) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const baseRowHeight = placeholder.split(`\n`).length * 1.5 + 2;
  const valueRowHeight = value.split(`\n`).length * 1.5 + 2;

  const inputBarHeight =
    valueRowHeight > baseRowHeight ? valueRowHeight : baseRowHeight;

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (limitRow && e.target.value.split(`\n`).length > limitRow)
      onChangeValue(e.target.value.slice(0, -1));
    else onChangeValue(e.target.value);
  };

  return (
    <Container>
      <LabelText isFocus={isFocus}>{label}</LabelText>
      <InputBar
        placeholder={placeholder}
        value={value}
        rows={1}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        maxLength={limitLength}
        height={`${inputBarHeight}rem`}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
`;

const LabelText = styled.p<{ isFocus: boolean }>`
  margin: 0px;
  color: ${(props) => (props.isFocus ? "#9BBE0F" : "#000000")};
`;

const InputBar = styled.textarea<{ height: string }>`
  width: 100%;
  box-sizing: border-box;
  margin: 12px 0px;
  padding: 16px;
  border: 0px;
  overflow: auto;
  height: ${({ height }) => height};
  caret-color: #e9f9ac;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  resize: none;
  line-height: 1.5rem;
  ::placeholder {
    color: #e9e8e8;
  }
  &:focus {
    outline: none;
    border-top: 1px solid #e9f9ac;
    border-bottom: 1px solid #e9f9ac;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default React.memo(CreateOrderInputCard);
