import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Video
import Video from '../../assets/hero/cover.mp4';
//Assets
import HeroImage from '../../assets/hero/hero.jpg';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <div className="HeroBg">
          <video autoPlay loop muted src={Video} type='video/mp4' />
        </div>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">
              Del Icalla Portfolio
            </h1>
            <p className="font15">
              Welcome to DERUSAN.COM!<br></br>ようこそDERUSAN.COMへ!
            </p>
            <Button label="CONTACT ME" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;