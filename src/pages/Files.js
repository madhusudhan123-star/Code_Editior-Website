import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  VStack,
  Heading,
  Text,
  Grid,
  Image,
  Button,
  Tag,
  Flex,
  Icon,
  useColorModeValue,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import { FaReact, FaArtstation, FaRobot, FaCode } from 'react-icons/fa';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      900: '#1a202c',
      800: '#2d3748',
      700: '#4a5568',
    },
    accent: {
      500: '#319795', // teal.500
      400: '#38b2ac', // teal.400 - for hover
    },
  },
});

const ProjectCard = ({ title, description, image, tags, icon, path }) => {
  return (
    <Box 
      bg={useColorModeValue('brand.800', 'brand.700')} 
      p={6} 
      rounded="lg" 
      shadow="xl"
      height={200} 
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Flex align="center" mb={4}>
        <Icon as={icon} w={8} h={8} mr={4} color="accent.500" />
        <Heading size="lg">{title}</Heading>
      </Flex>
      <Button 
        as={RouterLink} 
        to={'/CodeEditor'} 
        colorScheme="teal" 
        size="lg" 
        w="full"
        bg="accent.500"
        _hover={{ bg: 'accent.400' }}
      >
        View File
      </Button>
    </Box>
  );
};

const Files = () => {
  const projects = [
    {
      title: 'AI Art Gallery',
      description: 'A curated collection of AI-generated artwork, showcasing the intersection of technology and creativity.',
      image: 'https://images.unsplash.com/photo-1653677553950-de9e32196984',
      tags: ['React', 'Chakra UI', 'AI Art'],
      icon: FaArtstation,
      path: '/ai-art-gallery',
    },
    {
      title: 'Tech Blog',
      description: 'Stay updated with the latest in tech, from AI advancements to React best practices.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      tags: ['React', 'Chakra UI', 'Dark Theme'],
      icon: FaReact,
      path: '/blog',
    },
    {
      title: 'AI Code Assistant',
      description: 'Your coding companion! Embed various AI-powered coding tools for smarter development.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
      tags: ['React', 'iFrames', 'AI Tools'],
      icon: FaRobot,
      path: '/ai-code-assistant',
    },
    {
      title: 'Coming Soon...',
      description: 'More exciting projects are in the works. Stay tuned for updates!',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      tags: ['React', 'Chakra UI', 'Innovation'],
      icon: FaCode,
      path: '#',
    },
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box bg="brand.900" minHeight="100vh" color="white" p={8}>
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading size="2xl" mb={4}>My React Projects</Heading>
            <Text fontSize="xl">A collection of innovative web applications built with React and Chakra UI.</Text>
          </Box>
          
          <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Grid>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Files;