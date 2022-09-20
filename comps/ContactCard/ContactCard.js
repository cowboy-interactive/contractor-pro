import styled from "styled-components";
import Link from "next/link";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { Button } from "../Button";
import ThemeSwitch from "../ThemeSwitch";
import { useTheme } from "../../utils/provider";
import { Container } from "../Container";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";

export const ContactCard = ({ children, all, large, medium, small, xsmall }) => {
  const { theme } = useTheme();
  return (
    <Cont all={all} large={large} medium={medium} small={small} xsmall={xsmall}>
      {links.map((item) => {
        return (
          <a href={item.url} target={item.target}>
            <Card all={all} large={large} medium={medium} small={small}>
              <Icon themes={themes}>{item.icon}</Icon>
              <Column>
                <H3 all={"margin: 0 0 5px 0;"}>{item.head}</H3>
                <Text all={"width: 170px;"}>{item.text}</Text>
              </Column>
            </Card>
          </a>
        );
      })}
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 20px;
  width: 60vw;

  ${props => props.all};

  @media (max-width: ${sizes.medium}) {
    width: 80vw;
    ${props => props.medium};
  }
  @media (max-width: ${sizes.small}) {
    width: auto;
    grid-template-columns: 2fr;
    grid-gap: 40px;
    ${props => props.small};
  }
  @media (max-width: ${sizes.xsmall}) {
    width: 90vw;
    grid-template-columns: 2fr;
    ${props => props.xsmall};
  }
`;

const Icon = styled.div`
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.themes.highlight};
  color: white;
  border-radius: 5px;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  width: auto;

  @media (max-width: ${sizes.small}) {
    justify-content: flex-start;
    width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20px;
`;