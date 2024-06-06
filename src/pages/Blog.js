import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  Tag,
  HStack,
  useColorModeValue,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';

// Extend the theme to include custom colors
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
  },
});

const BlogPost = ({ title, excerpt, image, tags }) => {
  return (
    <Box 
      bg={useColorModeValue('brand.800', 'brand.900')} 
      p={6} 
      rounded="lg" 
      shadow="xl" 
      mb={6}
    >
      <Image src={image} alt={title} mb={4} rounded="lg" />
      <Heading size="lg" mb={2}>{title}</Heading>
      <Text mb={4}>{excerpt}</Text>
      <HStack>
        {tags.map((tag, index) => (
          <Tag key={index} colorScheme="teal">{tag}</Tag>
        ))}
      </HStack>
    </Box>
  );
};

const Blog = () => {
  const posts = [
    {
      title: 'The Future of AI',
      excerpt: 'Artificial Intelligence is reshaping our world in ways we never imagined...',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      tags: ['AI', 'Technology', 'Future'],
    },
    {
      title: 'Mastering React Hooks',
      excerpt: 'React Hooks have revolutionized the way we write functional components...',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      tags: ['React', 'JavaScript', 'Web Development'],
    },
    // Add more blog posts as needed
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box bg="brand.900" minHeight="100vh" color="white" p={8}>
        <VStack spacing={8} align="stretch">
          <Heading size="2xl" textAlign="center">My Tech Blog</Heading>
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Blog;