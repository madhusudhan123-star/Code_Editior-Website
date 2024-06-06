import * as React from 'react';
import {InputGroup, Input, InputRightElement, Button, Container, Text, Box} from '@chakra-ui/react'

function Login() {
  const [show, setShow] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [userData, setUserData] = React.useState([])

  const handleClick = () => setShow(!show)

  const handleInputChange = (e, setter) => {
    setter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUserData = [email, password]
    setUserData([...userData, newUserData])
    console.log('New user data:', newUserData)
    console.log('All user data:', [...userData, newUserData])
    // Reset form fields after submission
    setEmail('')
    setPassword('')
  }

  return (
    <Box className="App"bg={'gray.800'}  width={"100%"} height={"100%"}>
      <Container  display="flex" flexDirection="column" alignItems="center" justifyContent="center" h='100vh' >
      <Box  bg={"white"} padding={20} borderRadius={20} border='2px' borderColor='blue.500'>
        <Text fontSize='4xl' fontWeight='bold'>Login</Text>
        <form onSubmit={handleSubmit}>
          <Input 
            mb="20px" 
            type='email' 
            placeholder='Email' 
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
          />
          <InputGroup mb="20px" size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              value={password}
              onChange={(e) => handleInputChange(e, setPassword)}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick} type="button">
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Box display="flex" justifyContent="space-between">
            <Button colorScheme='blue' type="submit">Login</Button>
            <Text color='blue'>Forgot Password?</Text>
          </Box>
        </form>
      </Box>
      </Container>
    </Box>
  );
}

export default Login;