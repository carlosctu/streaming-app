import styled from "styled-components";

export type ButtonProps = {
  description: string;
  height?: string;
  width?: string;
  logoSrc?: string;
  logoAlt?: string;
  backgroundColor?: string;
  onClick?: () => void;
  startAndornment?: JSX.Element;
};

export function ButtonContainer(props: ButtonProps): JSX.Element {
  return (
    <ButtonWrapper
      color={props.backgroundColor ?? "#ffffff"}
      onClick={props.onClick}
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
  height: 48px;
  width: 90%;
  background: ${(props) => props.color};
  color: ${(props) => (props.color != "#ffffff" ? "#ffffff" : "black")};
  border: 2px solid #f4f4f4;
  border-radius: 12px;
  cursor: pointer;
`;
