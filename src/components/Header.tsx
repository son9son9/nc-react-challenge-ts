import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffb8352f;
  position: fixed;
  color: ${(props) => props.theme.textColor};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
  padding: 10px;
`;
const Title = styled.h2``;
const ThemeButton = styled.div`
  font-size: 0.9rem;
  padding: 12px;
  margin: 10px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  background-color: #ffb53d;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;

  transition: 0.2s;
  &:hover {
    background-color: #a5e55a;
  }
  &:active {
    transform: translateY(4px);
    transition: 0.1s;
  }
`;

const changeTheme = () => {};

const Header = () => {
  return (
    <Wrapper>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo src="https://cdn-icons-png.flaticon.com/512/7992/7992207.png" alt="Logo" />
        <Title>Coin Mandarin</Title>
      </div>
      <ThemeButton onClick={changeTheme}>Change Theme 🍊</ThemeButton>
    </Wrapper>
  );
};
export default Header;
