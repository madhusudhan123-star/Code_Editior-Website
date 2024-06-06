import * as React from 'react';
import {InputGroup, Input, InputRightElement, Button, Container, Text, Box} from '@chakra-ui/react'

function Signup() {
  const [show, setShow] = React.useState(false)
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [data, setData] = React.useState([]);
  const handleClick = () => setShow(!show);
  const handleInputChange = (e, setter) => {
    setter(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUserData = [{ 
      name :name,  
      email:email, 
      password:password
    }]
    try {
      // Using fetch
      const response = await fetch('http://localhost:4000/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUserData)
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('User registered:', data);
        // Handle successful registration (e.g., show success message, redirect)
      } else {
        console.error('Registration failed');
        // Handle error (e.g., show error message)
      }
      }catch (error){
        console.log(error)
      }
    // setData([...data, newUserData])
    // console.log('New user data:', newUserData)
    setName('')
    setEmail('')
    setPassword('')
  }
  
  React.useEffect(() => {

  }, [data])
  return (
    <Box className="App"bg={'gray.800'}  width={"100%"} height={"100%"}>
      <Container display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
      <Box  bg={"white"} padding={20} borderRadius={20} border='2px' borderColor='blue.500' marginY={50}>
        <Text fontSize='4xl' fontWeight='bold'>Signup</Text>
        <form onSubmit= {handleSubmit}>
        <Input mb="20px" type='name' value={name} onChange={e => handleInputChange(e, setName)} placeholder='Name' />
        <Input mb="20px" type='email' value={email} onChange={e => handleInputChange(e, setEmail)} placeholder='Email' />
        <InputGroup mb="20px" size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              value={password} onChange={e => handleInputChange(e, setPassword)}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme='blue' type='Submit'>Signup</Button>
        </form>
      </Box>
      </Container>
    </Box>
  );
}

export default Signup;
