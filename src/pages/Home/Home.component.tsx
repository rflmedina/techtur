import React from "react";
import { Col, Row } from "react-grid-system";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  LocationMarkerIcon,
  ClockIcon,
} from "../../assets/icons";
import Button from "../../components/atoms/Button";
import Card from "../../components/Card";
import { ButtonEnum } from "../../models/enums/Button";
import Home, { EndWrapper, TimeWrapper } from "./Home.styles";

const HomeComponent = () => {
  return (
    <Home>
      <Card>
        <Row>
          <Col xs={9}>
            <Row>
              <Col xs={2}>
                <LocationMarkerIcon />
              </Col>
              <Col xs={6}>
                <h3>Partida:</h3>
                <h2>Santo Cristo</h2>
              </Col>
              <Col xs={4}>
                <TimeWrapper>
                  <h3>15h00m</h3>
                  <ClockIcon />
                </TimeWrapper>
              </Col>
            </Row>
            <br />
            <ArrowDownIcon />
            <br />
            <br />
            <Row>
              <Col xs={2}>
                <LocationMarkerIcon />
              </Col>
              <Col xs={6}>
                <h3>Chegada:</h3>
                <h2>Santa Rosa</h2>
              </Col>
              <Col xs={4}>
                <TimeWrapper>
                  <h3>15h45m</h3>
                  <ClockIcon />
                </TimeWrapper>
              </Col>
            </Row>
          </Col>
          <EndWrapper style={{ width: "20%" }}>
            <Button enumType={ButtonEnum.MainCircleButton}>
              <ArrowRightIcon />
            </Button>
          </EndWrapper>
        </Row>
      </Card>
    </Home>
  );
};

export default HomeComponent;
