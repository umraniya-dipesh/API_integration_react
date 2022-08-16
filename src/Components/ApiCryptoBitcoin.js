import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./mystyle.css";
const ApiCryptoBitcoin = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState("");
  const [usdPrice, setUsdprice] = useState("");
  const [euroPrice, setEURprice] = useState("");
  const dateToday = new Date().toDateString();
  useEffect(() => {
    const getDataCrypto = async () => {
      const CryptoInfo = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      //   console.log(CryptoInfo);
      setBitcoinPrice(CryptoInfo.data);
      setUsdprice(CryptoInfo.data.bpi.USD);
      setEURprice(CryptoInfo.data.bpi.EUR);
      console.log(CryptoInfo.data);
    };
    getDataCrypto();
    // console.log(bitcoinPrice);
  });
  return (
    <>
      <div className="divWrapper">
        <div className="text-center">
          <h3 className="text-center text-decoration-underline text-success">
            Geting Live Bitcoin Price using Api
          </h3>
        </div>
        <Card className="card_border" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            className="bitcoinPriceInfo"
            src="https://img2.freepng.es/20190213/wrg/kisspng-bitcoin-cryptocurrency-royalty-free-stock-photogra-about-bitclub-network-mining-investment-south-afri-5c641c6c32c3f4.298684931550064748208.jpg"
          />
          <Card.Body>
            <Card.Title>
            <h2 className="text-center btcoinHEading">{bitcoinPrice.chartName}</h2>
            </Card.Title>
            <Card.Text>
              <div className="PriceSection text-center">
                <p className="mb-1 text-decoration-underline price_heading">Prices</p>
                <p className="m-0">
                  USD : <strong>{usdPrice.rate}</strong>
                </p>
                <p>
                  EUR : <strong>{euroPrice.rate}</strong>
                </p>
              </div>
            </Card.Text>
            <div className="text-center">
              <Button variant="primary" >
                {dateToday}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ApiCryptoBitcoin;
