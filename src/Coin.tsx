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

interface RouteParams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams();
  const location = useLocation();
  const [coinInfo, setCoinInfo] = useState<Object>({});

  useEffect(() => {
    axios
      .get(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      .then((res) => {
        setCoinInfo(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log("fetch err");
      });
  }, []);

  return (
    <Wrapper>
      {location ? <h1>{location.state?.coinName}</h1> : <h1>"Loading..."</h1>}
      <div>{coinInfo.toString()}</div>
      <Link to="/" style={{ display: "inline-block" }}>
        <HomeButton>Go Home</HomeButton>
      </Link>
    </Wrapper>
  );
}
export default Coin;
