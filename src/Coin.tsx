import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const HomeButton = styled.div`
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

interface RouteParams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams();

  return (
    <div>
      <h1>Coin: {coinId}</h1>
      <Link to="/">
        <HomeButton>Go Home</HomeButton>
      </Link>
    </div>
  );
}
export default Coin;
