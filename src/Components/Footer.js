import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  Link,
  Icon,
  useColorModeValue,
  Button,
  Grid,
  VStack,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Footer() {
    const linkColor = useColorModeValue('gray.400', 'gray.400');
    const linkHoverColor = useColorModeValue('blue.300', 'blue.300');
    const footerBgColor = useColorModeValue('gray.900', 'black');
    const borderColor = useColorModeValue('gray.800', 'gray.800');
    const inputBgColor = useColorModeValue('whiteAlpha.100', 'whiteAlpha.100');
    const inputFocusBgColor = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200');

  return (
    <Box bg={footerBgColor} color={linkColor}>
      <Box maxW="7xl" mx="auto" py={12} px={4}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '2fr 1fr 1fr 1fr' }} gap={8}>
          {/* Brand and Newsletter */}
          <VStack align="start" spacing={6}>
            <Text
              fontFamily={'heading'}
              fontSize={'2xl'}
              fontWeight={'bold'}
              color={'white'}
              as={RouterLink}
              to="/"
            >
              CodeCraft
            </Text>
            <Text mt={2} fontSize={'md'}>
              Empower your coding journey with our cloud-based IDE. Build, collaborate, and deploy seamlessly.
            </Text>
            <Stack direction={'row'} spacing={6}>
              {SOCIAL_LINKS.map((link) => (
                <Link key={link.name} href={link.href} isExternal>
                  <Icon as={link.icon} w={6} h={6} />
                </Link>
              ))}
            </Stack>
          </VStack>

          {/* Quick Links */}
          <Box>
            <Text fontWeight={'500'} fontSize={'lg'} mb={4}>
              Quick Links
            </Text>
            <VStack align="start" spacing={3}>
              {FOOTER_LINKS.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </VStack>
          </Box>

          {/* Features */}
          <Box>
            <Text fontWeight={'500'} fontSize={'lg'} mb={4}>
              Features
            </Text>
            <VStack align="start" spacing={3}>
              {FEATURES.map((feature) => (
                <FooterLink key={feature.label} {...feature} />
              ))}
            </VStack>
          </Box>

          {/* Newsletter */}
          <Box>
            <Text fontWeight={'500'} fontSize={'lg'} mb={4}>
              Stay Updated
            </Text>
            <Text fontSize={'md'} mb={4}>
            Venture into the unknown and unlock the power of the internet. By embracing your natural curiosity, you'll embark on a fascinating journey of online exploration and discovery.
            </Text>
          </Box>
        </Grid>

        {/* Copyright and Terms */}
        <Box borderTopWidth={1} borderStyle={'solid'} borderColor={borderColor} pt={8} mt={12}>
          <Flex direction={{ base: 'column', md: 'row' }} justifyContent={'space-between'} alignItems={'center'}>
            <Text color="gray.500" >© 2024 CodeCraft. All rights reserved.</Text>
            <Stack direction={'row'} spacing={6} mt={{ base: 4, md: 0 }}>
              <Link href={'#'} fontSize={'sm'}>Privacy Policy</Link>
              <Link href={'#'} fontSize={'sm'}>Terms of Service</Link>
              <Link href={'#'} fontSize={'sm'}>Contact Us</Link>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

const FooterLink = ({ label, href }) => {
  const hoverColor = useColorModeValue('blue.500', 'blue.300');
  return (
    <Link
      as={RouterLink}
      to={href ?? '#'}
      fontSize={'sm'}
      color={useColorModeValue('gray.600', 'gray.200')}
      _hover={{
        textDecoration: 'none',
        color: hoverColor,
      }}
    >
      {label} <Icon as={ChevronRightIcon} w={3} h={3} ml={1} />
    </Link>
  );
};

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/codecraft' },
  { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/codecraft' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/company/codecraft' },
  { name: 'Discord', icon: FaDiscord, href: 'https://discord.gg/codecraft' },
];

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/prices' },
  { label: 'Blog', href: '/blog' },
];

const FEATURES = [
  { label: 'Multi-Language Support', href: '/languages' },
  { label: 'Real-Time Collaboration', href: '/CodeEditor' },
  { label: 'AI Code Assistant', href: '/ai_code_assistant' },
];