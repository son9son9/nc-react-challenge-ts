import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 60px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const CoinWrapper = styled.div`
  width: 160px;
  height: 40px;
  padding: 20px;
  margin: 20px 0;
  background-color: #ffc10726;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: none;
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

  useEffect(() => {
    axios
      .get("https://api.coinpaprika.com/v1/coins")
      .then((res) => {
        setCoins(res.data.slice(0, 100));
        setIsLoading(false);
      })
      .catch(() => {
        console.log("err");
      });
  }, []);

  return (
    <Wrapper>
      {isLoading
        ? "Loading ..."
        : coins.map((props) => {
            return (
              <Link
                to={`/${props.id}`}
                state={{ coinName: props.name }}
                style={{ display: "block", width: "fit-content" }}
                key={props.id}
              >
                <CoinWrapper>
                  <img
                    src={`https://coinicons-api.vercel.app/api/icon/${props.symbol.toLowerCase()}`}
                    alt="logo"
                    style={{ width: "40px", height: "40px", paddingRight: "20px" }}
                  />
                  {props.name}
                </CoinWrapper>
              </Link>
            );
          })}
    </Wrapper>
  );
}
export default Coins;
