import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
const HomeButton = styled.div`
  font-size: 0.9rem;
  padding: 12px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  background-color: #ffaa20;
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
const StyledUl = styled.ul`
  width: 400px;

  li {
    padding: 4px 0;
  }
`;

interface RouteParams {
  coinId: string;
}
interface ICoinInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  description: string;
  started_at: Date;
  proof_type: string;
  org_structure: string;
}
interface ICoinPrice {
  total_supply: number;
  max_supply: number;
  quotes: {
    USD: {
      price: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams();
  const location = useLocation();
  const [coinInfo, setCoinInfo] = useState<ICoinInfo>();
  const [coinPriceInfo, setCoinPriceInfo] = useState<ICoinPrice>();

  useEffect(() => {
    // get coin info
    axios
      .get(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      .then((res) => {
        setCoinInfo(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log("fetch err");
      });

    // get coin price info
    axios
      .get(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      .then((res) => {
        setCoinPriceInfo(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log("fetch err");
      });
  }, []);

  return (
    <Wrapper>
      {location ? <h1>{location.state?.coinName}</h1> : <h1>"Loading..."</h1>}
      <StyledUl>
        <li>rank: {coinInfo?.rank}</li>
        <li>
          <h3>price: {coinPriceInfo?.quotes.USD.price.toFixed(3).toString()}$</h3>
        </li>
        <li>decription: {coinInfo?.description}</li>
        <li>started at: {coinInfo?.started_at.toString().substring(0, 10)}</li>
      </StyledUl>
      <Link to="/" style={{ display: "inline-block" }}>
        <HomeButton>Go Home</HomeButton>
      </Link>
    </Wrapper>
  );
}
export default Coin;
