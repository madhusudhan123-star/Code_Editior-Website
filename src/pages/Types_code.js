import React from 'react';
import { Box, Button, Grid, Text, useColorModeValue, keyframes } from '@chakra-ui/react';
import { LANGUAGE_VERSIONS } from '../utilis/Languages';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.6); }
  70% { box-shadow: 0 0 0 10px rgba(66, 153, 225, 0); }
  100% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0); }
`;

const Types_code = () => {
  const bgColor = useColorModeValue('gray.900', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardHoverBg = useColorModeValue('gray.100', 'gray.700');

  const languageIcons = {
    javascript: '🌟',
    typescript: '📘',
    python: '🐍',
    java: '☕',
    csharp: '#️⃣',
    php: '🐘',
  };

  const languageColors = {
    javascript: 'yellow',
    typescript: 'blue',
    python: 'green',
    java: 'orange',
    csharp: 'purple',
    php: 'indigo',
  };

  return (
    <Box bg={bgColor} minHeight="100vh" display="flex" alignItems="center" justifyContent="center" p={[4, 8, 12]}>
      <Grid 
        templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} 
        gap={8} 
        maxW="1200px" 
        mx="auto"
      >
        {Object.entries(LANGUAGE_VERSIONS).map(([language, version]) => (
          <Button
            as={RouterLink}
            to={"/CodeEditor"}
            state={language}
            key={language}
            size="lg"
            height="auto"
            py={8}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg={cardBg}
            color={`${languageColors[language]}.500`}
            _hover={{
              bg: cardHoverBg,
              transform: 'translateY(-5px)',
              boxShadow: 'xl',
            }}
            transition="all 0.3s"
            borderRadius="2xl"
            boxShadow="md"
            position="relative"
            overflow="hidden"
          >
            <Box fontSize="6xl" mb={2}>
              {languageIcons[language]}
            </Box>
            <Text fontWeight="bold" fontSize="2xl" mb={2} textTransform="capitalize">
              {language}
            </Text>
            <Text fontSize="md" opacity={0.8}>
              v{version}
            </Text>
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              borderRadius="50%"
              bg={`${languageColors[language]}.500`}
              opacity="0.1"
              w="80%"
              h="80%"
              zIndex="-1"
            />
          </Button>
        ))}
      </Grid>
    </Box>
  );
};

export default Types_code;
