import styled from "styled-components";

export default function AppBar(props) {
  return <AppBarWrapper>{props.children}</AppBarWrapper>;
}

const AppBarWrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  position: fixed;
  padding: 0 24px;
  justify-content: start;
`;
