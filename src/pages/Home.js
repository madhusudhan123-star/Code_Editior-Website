import { Box, Button, Container, Text } from '@chakra-ui/react';
import React from 'react';
import background from '../utilis/background.mp4';
import Content from '../Components/Content';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
const Home = () => {
  return (
    <Box>

    <Box position="relative" minHeight="100vh" overflow="hidden">
        <Box 
        position="absolute" 
        top="0" 
        left="0" 
        width="100%" 
        height="100%" 
        bg="#000000bd" 
        zIndex="-1"
      />
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container
        centerContent
        maxW="container.xl"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        color="white"
        textAlign="center"
      >
        <Text fontSize={80} fontWeight="bold" mb={6}>
          Build Your Code
        </Text>
        <Text fontSize={25} mb={8}>
          Get instant results without the hassle of setting up<br/> a code base or installing extra software.
        </Text>
        <Button as={RouterLink} to={'/signup'} _hover={{ bg: 'blue.500', color: "white"}} size="lg">
          Sign Up
        </Button>
      </Container>
    </Box>
    <Box >
      <Content />
    </Box>
    </Box>
  );
};

export default Home;