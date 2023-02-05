import styled from "styled-components";

export function ButtonContainer(props) {
  return (
    <ButtonWrapper
      color={props.backgroundColor ?? "#ffffff"}
      onClick={props.onClick}
      borderRadius={props.borderRadius ?? true}
      style={{ height: props.height, width: props.width }}
    >
      <IconLogo src={props.logoSrc} alt={props.logoAlt} />
      {props.startAndornment}
      {props.description}
    </ButtonWrapper>
  );
}

const IconLogo = styled.img`
  height: 24px;
  padding-right: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  height: 48px;
  width: 90%;
  background: ${(props) => props.color};
  color: ${(props) => (props.color != "#ffffff" ? "#ffffff" : "black")};
  border: ${(props) => (props.borderRadius ? "2px solid #f4f4f4" : "")};
  border-radius: 12px;
  cursor: pointer;
`;
