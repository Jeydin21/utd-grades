import { Col } from "antd";
import Router from "next/router";
import React from "react";
import styled from "styled-components";
import FadeIn from "../components/animations/FadeIn";
import Core from "../components/Core";
import Search from "../components/Search";
import ThemeToggle from "../components/ThemeToggle";
import type { SearchQuery } from "../types";

const Content = styled.div`
  display: block;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color-primary);
`;

const Main = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const Header = styled.h2`
  font-family: var(--font-family);
  text-transform: uppercase;
  text-align: center;
  color: var(--text-color-primary);
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 26px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-family: var(--font-family);
  text-align: center;
  color: var(--text-color-primary);
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 30px;
`;

const HeaderBold = styled.span`
  font-weight: 700;
`;

export default function Home() {
  function handleSubmit({ search }: SearchQuery) {
    (async function () {
      await Router.push({
        pathname: "/results",
        query: { search },
      });
    })();
  }

  return (
    <Core>
      <Content>
        <ThemeToggle />
        <Main>
          <Col lg={{ span: 8, offset: 8 }} xs={{ span: 20, offset: 2 }}>
            <FadeIn delay={0}>
              <Header>
                <HeaderBold>UTD</HeaderBold> Grades
              </Header>
            </FadeIn>
            <FadeIn delay={300}>
              <Description>
                See how students did in any given class. And it&apos;s{" "}
                <strong>free, forever.</strong>
              </Description>
            </FadeIn>
            <Search onSubmit={handleSubmit} />
          </Col>
        </Main>
      </Content>
    </Core>
  );
}