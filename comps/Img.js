import styled from "styled-components";
import { sizes } from "../utils/variables";
import Image from "next/image";
import { motion } from "framer-motion";

export const Img = ({
  src,
  all,
  large,
  medium,
  small,
  alt,
  initial = { opacity: 1 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
  width=700,
  height=450

}) => {
  return (
    <Cont
      all={all}
      large={large}
      medium={medium}
      small={small}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      <Image src={src} width={width} height={height} alt={alt} priority={true}/>
    </Cont>
  );
};

const Cont = styled(motion.div)`
  ${(props) => props.all};
  display: flex;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: ${sizes.large}) {
    ${(props) => props.large};
  }

  @media (max-width: ${sizes.medium}) {
    ${(props) => props.medium};
  }

  @media (max-width: ${sizes.small}) {
    ${(props) => props.small};
  }
`;
