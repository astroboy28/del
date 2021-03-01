import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import TeamInfoJapanese from "./teamInfoJapanese";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/del_icalla.jpg";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT" />
      <p className="font15">
      A Web Developer based in Niigata, Japan.
Someone who loves to code to create<br></br> projects across a variety of platforms.
My strategy is to design and then implement it in code.<hr className="horizontalLine"></hr>新潟在住のコーダ/ ウェブ開発者。
様々なプラットフォームでフロントエンドプロジェクト<br></br>を作成するためのコーディングに夢中。
目標を達成するための戦略はデザインしてから、コードに実装すること。
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="DEL ICALLA" job="Web Developer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfoJapanese />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
