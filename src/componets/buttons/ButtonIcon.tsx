import { IconContext } from "react-icons";
import styled from "styled-components";

export type ButtonIconProps = {
  onClick?: () => void;
  size?: string;
  color?: string;
  children: React.ReactNode;
};

export default function ButtonIcon(props: ButtonIconProps) {
  return (
    <IconContext.Provider value={{ size: props.size, color: props.color }}>
      <IconContainer onClick={props.onClick}>{props.children}</IconContainer>
    </IconContext.Provider>
  );
}

const IconContainer = styled.div`
  padding: 0 5px 3px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
