import styled from "styled-components";
import Link from "next/link";
import { links, social } from "./data";
import { sizes, themes } from "../../utils/variables";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";
import { useTheme } from "../../utils/provider";
import { ContactCard } from "../ContactCard/ContactCard";

export const Footer = ({ all, large, medium, small }) => {
  const { theme } = useTheme();

  return (
    <Cont
      all={all}
      large={large}
      medium={medium}
      small={small}
      background={themes[theme].footer}
    >
      <Content>
        <Column>
          <LogoUI>
            <Link href="/">contractor pro™</Link>
          </LogoUI>
          <Text all={"color: #fff; max-width: 500px; margin: 0 0 60px 0"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            feugiat pharetra quis imperdiet cursus tristique tincidunt non
            vitae.
          </Text>

          <Row>
            {social.map((item, i) => {
              return (
                <Icon key={i}>
                  <Link href={item.url} target={item.target}>
                    {item.icon}
                  </Link>
                </Icon>
              );
            })}
          </Row>
        </Column>

        <Column>
          <H3 all={"color: #fff; max-width: 500px; margin: 0 0 40px 0;"}>
            Links
          </H3>
          {links.map((item, i) => {
            return (
              <LinkUI key={i}>
                <Link href={item.url} target={item.target}>
                  {item.head}
                </Link>
              </LinkUI>
            );
          })}
        </Column>

        <ContactCard
          color="#fff"
          all={"flex-direction: column; align-items: flex-end;"}
          medium={"align-items: flex-start;"}
          initial={{ opacity: 1 }}
        />
      </Content>

      <Bottom>
        <Text
          all={"color: #fff; max-width: 500px; margin: 0px;"}
          medium={"margin: 20px 0;"}
        >
          © 2022 Cowboy Interactive. All rights reserved.
        </Text>
        <Text all={"color: #fff; max-width: 500px; margin: 0px;"}>
          Website developed and maintained by{" "}
          <Link href="https://cowboyinteractive.com">Cowboy Interactive</Link>
        </Text>
      </Bottom>
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.background};
  padding: 60px 0;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 2fr;
  width: 80%;
  position: relative;

  @media (max-width: ${sizes.medium}) {
    flex-direction: column;
    grid-template-columns: 2fr;
    width: 90%;
  }
  @media (max-width: ${sizes.small}) {
    flex-direction: column;
    grid-template-columns: 2fr;
    width: 90%;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Bottom = styled.div`
  margin: 60px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  width: 80%;
  position: relative;
  @media (max-width: ${sizes.medium}) {
    flex-direction: column;
    width: 90%;
  }

  @media (max-width: ${sizes.medium}) {
    flex-direction: column;
    width: 90%;
  }
`;

const Column = styled.div`
  margin-bottom: auto;
  align-self: flex-start;
  width: 100%;

  @media (max-width: ${sizes.medium}) {
    margin: 0 0 60px 0;
  }
`;

const Icon = styled.div`
  color: white;
  margin: 0 20px 0 0;
`;

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  cursor: pointer;
  flex-direction: column;
  overflow: hidden;
  transition: 0.2s ease;
`;

const LinkUI = styled.div`
  color: white;
  margin: 0 0 20px 0;
`;

const LogoUI = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  margin: 0 0 40px 0;
`;
