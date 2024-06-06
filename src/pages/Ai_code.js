import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  useToast,
  Flex,
  Link,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

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
    },
  },
});

const Ai_code = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const toast = useToast();

  const assistants = [
    {
      name: 'OpenAI Playground',
      url: 'https://playground.openai.com/e/prompt-engineer',
      description: "Experiment with OpenAI's language models.",
    },
    {
      name: 'Google Colab',
      url: 'https://colab.research.google.com/drive/1VvKcAaJ_4ZHF8vJzBSj8QBSWZHqKO3vC?usp=sharing',
      description: 'Use Python and AI libraries in Jupyter notebooks.',
    },
    {
      name: 'Repl.it - Python AI',
      url: 'https://replit.com/@replit/Machine-Learning',
      description: 'Code and run AI models in the browser.',
    },
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box bg="brand.900" minHeight="100vh" color="white" p={8}>
        <VStack spacing={8} align="stretch">
          <Heading size="2xl" textAlign="center">AI Code Assistant</Heading>

          {currentUrl && (
            <Box bg="brand.800" rounded="lg" shadow="xl" overflow="hidden">
              <iframe 
                src={currentUrl} 
                title="AI Code Assistant" 
                width="100%" 
                height="600px" 
                style={{ border: 'none' }}
              />
            </Box>
          )}

          <Box bg="brand.800" p={6} rounded="lg" shadow="xl">
            <Heading size="lg" mb={4}>Popular AI Code Assistants</Heading>
            <VStack align="stretch" spacing={4}>
              {assistants.map((assistant, index) => (
                <Box key={index} p={4} bg="brand.700" rounded="md">
                  <Heading size="md" mb={2}>{assistant.name}</Heading>
                  <Text mb={2}>{assistant.description}</Text>
                  <Link href={assistant.url} isExternal color="accent.500">
                    Open <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Ai_code;