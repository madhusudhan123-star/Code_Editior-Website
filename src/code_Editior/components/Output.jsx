import { Box, Text, Button, useToast } from '@chakra-ui/react'
import { executeCode } from '../api';
import { useState } from 'react';

const Output = ({language, editorRef}) => {
    const toast = useToast();
    const [output, setOutput] = useState(null)
    const [isLoading , setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const runCode =async () => {
        const sourceCode = editorRef.current.getValue();
        if(!sourceCode) return;
        try{
            setIsLoading(true);
            const {run:result} = await executeCode(language, sourceCode);
            setOutput(result.output.split("\n"));
            result.stderr ? setIsError(true) : setIsError(false);
        } catch (error) {
            console.log(error);
            toast({
                title: "An error occurred.",
                description: error.message || "unable to run the code",
                status: "error",
                duration: 5000,
                isClosable: true
            })
        }finally{
            setIsLoading(false);
        }
    }
  return (
    <Box w='50%'>
        <Text mb={2} fontSize="lg">
            Output:
        </Text>
        <Button
            isLoading={isLoading}
            variant='outline'
            colorScheme='blue'
            onClick={runCode}
        >
            Run Code
        </Button>
        <Box
            height='75vh'
            p={2}
            color = {isError ? 'red.500' : ''}
            border='1px solid'
            borderRadius={4}
            borderColor={
                isError ? 'red.500' : 'green.500'
            }
        >
        {
            output ? (
                output.map((line, index) => (
                    <Text key={index}>{line}</Text>
                ))
            ) : (
                <Text>No output</Text>
            )
        }
        </Box>
    </Box>
  )
}

export default Output