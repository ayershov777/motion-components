import { motion } from "framer-motion";
import styled from "styled-components";

const Home = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const Main = styled(motion.div)`
    overflow: hidden;
    width: 100vw;
    align-items: center;
    background: #111;
    background: radial-gradient(#1a1a1a, black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 45vh;
  `;

  const Center = styled.div`
    overflow: hidden;
    background-color: rgba(86, 86, 88, 0.3);
    width: 650px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: white solid 2px;
  `;

  return (
    <Main>
      <Center
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Home
      </Center>
    </Main>
  );
};

export default Home;
