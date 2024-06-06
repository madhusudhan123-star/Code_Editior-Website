import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';


export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isSignIn, setIsSignIn] = React.useState(true);
  const navigate = useNavigate();
  const toggleAuthState = () => {
    setIsSignIn(!isSignIn);
    navigate(isSignIn ? '/signup' : '/login');
  };
  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.800', 'white')}
        color={useColorModeValue('white', 'gray.600')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.900', 'gray.200')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            as={RouterLink}
            to={"/"}
            color={useColorModeValue('white', 'gray.800')}>
            CodeCraft
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button 
            as={RouterLink}
            to={isSignIn ? '/login' : '/signup'}
            fontSize={'sm'} 
            fontWeight={400} 
            variant={'link'} 
            onClick={toggleAuthState}
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
          {/* <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.400'}
            href={'#'}
            _hover={{
              bg: 'blue.300',
            }}>
            Launch Editor
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.200', 'gray.600');
  const linkHoverColor = useColorModeValue('white', 'gray.800');
  const popoverContentBgColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                as={RouterLink}
                to={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel,isDisabled }) => {
  const hoverBg = useColorModeValue('gray.900', 'blue.50');
  const disabledStyle = {
    opacity: isDisabled ? 0.4 : 1,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
  };

  return (
    <Link
      href={isDisabled ? '#' : href}
      role="group"
      display="block"
      p={2}
      rounded={'md'}
      _hover={!isDisabled ? { bg: hoverBg } : {}}
      style={disabledStyle}
      onClick={(e) => isDisabled && e.preventDefault()}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={!isDisabled ? { color: 'blue.400' } : {}}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'} color={isDisabled ? 'gray.600' : 'gray.500'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('gray.800', 'white')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isSignIn, setIsSignIn] = React.useState(true);
  const toggleAuthState = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.200', 'gray.600')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.700', 'gray.200')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link
                key={child.label} 
                py={2} 
                href={child.isDisabled ? '#' : child.href}
                style={{
                  opacity: child.isDisabled ? 0.4 : 1,
                  cursor: child.isDisabled ? 'not-allowed' : 'pointer',
                }}
                onClick={(e) => child.isDisabled && e.preventDefault()}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Features',
    children: [
      {
        label: 'Multi-Language Support',
        subLabel: 'Python, JavaScript, Rust, and more',
        href: '/languages',
      },
      {
        label: 'Real-Time Collaboration',
        subLabel: 'Code with your team in real time',
        href: '/CodeEditor',
      },
    ],
  },
  {
    label: 'Pricing',
    href: '/prices',
  },
  {
    label: 'Learn',
    children: [
      {
        label: 'Tutorials',
        subLabel: 'Step-by-step coding guides',
        href: '#',
        isDisabled: true, 
      },
    ],
  },
];