import { Box, Button, Flex, Grid, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import image from '../utilis/photo.png'
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Content = () => {
  return (
    <Box bg="gray.900" paddingY={100} color="white">
      {/* Main Feature Section */}
      <Flex 
        maxW="1200px" 
        mx="auto" 
        direction={["column", "column", "row"]} 
        alignItems="center"
        px={[4, 8]}
        width={'100vw'} 
        height={'70vh'} 
        paddingTop={250}
      >
        {/* Left: Image */}
        <Box flex={1} mb={[8, 8, 0]} order={[2, 2, 1]}>
          <Image 
            src={image} 
            alt="Developer collaborating with team" 
            borderRadius="xl" 
            boxShadow="dark-lg"
            width="100%"
            height="auto"
          />
        </Box>

        {/* Right: Content */}
        <Box flex={1} order={[1, 1, 2]} pl={[0, 0, 12]} textAlign={["center", "center", "left"]}>
          <Text fontSize="4xl" fontWeight="bold" mb={6} bgGradient="linear(to-r, blue.400, purple.500)" bgClip="text">
            Collaborate Seamlessly
          </Text>
          <Text fontSize="xl" mb={8} color="gray.300">
            Our cloud-based environment allows you to work with your team in real-time. Share code, review changes, and mentor junior developers—all without leaving your browser.
          </Text>
          <Stack direction={["column", "row"]} spacing={4} justifyContent={["center", "center", "flex-start"]}>
            <Button as={RouterLink} to={'/prices'} variant="outline" size="lg" color="white" borderColor="white" _hover={{ bg: "whiteAlpha.300" }}>  {/* Adjusted for dark theme */}
              See Plans
            </Button>
          </Stack>
        </Box>

      </Flex>

      {/* Additional Features Grid */}
      <Grid 
        templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} 
        gap={10} 
        maxW="1200px" 
        mx="auto"
        width={'100vw'} 
        height={'70vh'} 
        paddingTop={250} 
        px={[4, 8]}
      >
        {/* Feature 1 */}
        <Box p={6} bg="gray.700" borderRadius="lg" boxShadow="dark-lg">
          <Box color="blue.400" fontSize="4xl" mb={4}>🚀</Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Instant Setup</Text>
          <Text color="gray.300">Start coding immediately without any installation or configuration.</Text>
        </Box>

        {/* Feature 2 */}
        <Box p={6} bg="gray.700" borderRadius="lg" boxShadow="dark-lg">
          <Box color="green.400" fontSize="4xl" mb={4}>🔧</Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Rich Toolset</Text>
          <Text color="gray.300">Access a wide range of dev tools, from linters to debuggers.</Text>
        </Box>
        
        {/* Feature 3 */}
        <Box p={6} bg="gray.700" borderRadius="lg" boxShadow="dark-lg">
          <Box color="purple.400" fontSize="4xl" mb={4}>🌐</Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Cloud Hosting</Text>
          <Text color="gray.300">Deploy your projects directly from our platform to the cloud.</Text>
        </Box>
        
      </Grid>

      {/* Call to Action */}

      <Box width={'100vw'} height={'70vh'} paddingTop={250} textAlign="center">
        <Text fontSize="4xl" fontWeight="bold" mb={6} color="white">
          Ready to Build?
        </Text>
        <Text fontSize="xl" mb={8} color="gray.300" maxW="800px" mx="auto">
          Join thousands of developers who are shipping products faster with our cloud-based coding environment.
        </Text>
        <Button
          as={RouterLink}
          to={'/CodeEditor'}
          colorScheme="blue"
          size="lg"
          fontSize="xl"
          px={10}
          bgGradient="linear(to-r, blue.500, purple.600)"
          _hover={{ bgGradient: "linear(to-r, blue.600, purple.700)" }}
        >
          Start Free Trial
        </Button>
      </Box>
    </Box>
  );
};

export default Content;