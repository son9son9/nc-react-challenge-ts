import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { arrayBuffer } from "stream/consumers";
import styled from "styled-components";
import Coin from "./Coin";

const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
const ThemeButton = styled.div`
  font-size: 0.9rem;
  padding: 12px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  background-color: #ffaa20;
  border-radius: 10px;
  cursor: pointer;

  transition: 0.2s;
  &:hover {
    background-color: #a5e55a;
  }
  &:active {
    transform: translateY(4px);
    transition: 0.1s;
  }
`;
const CoinTitle = styled.div`
  width: 160px;
  height: 40px;
  padding: 20px;
  margin: 20px 0;
  background-color: beige;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 600;

  transition: 0.2s;
  &:hover {
    transform: translateX(12px);
  }
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const changeTheme = () => {
    console.log("테마 변경 미구현 ㅋ");
  };

  useEffect(() => {
    axios
      .get("https://api.coinpaprika.com/v1/coins")
      .then((res) => {
        setCoins(res.data.slice(0, 100));
        setIsLoading(false);
        console.log(res.data[0]);
      })
      .catch(() => {
        console.log("err");
      });
  }, []);

  return (
    <Wrapper>
      <h1>Coin Mandarin 🍊</h1>
      <ThemeButton onClick={changeTheme}>Change Theme</ThemeButton>
      {isLoading
        ? "Loading ..."
        : coins.map((props) => {
            return (
              <Link to={`/${props.id}`}>
                <CoinTitle>{props.name + "  ➡️"}</CoinTitle>
              </Link>
            );
          })}
    </Wrapper>
  );
}
export default Coins;
