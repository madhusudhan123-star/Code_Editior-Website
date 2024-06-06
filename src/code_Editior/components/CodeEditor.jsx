import { Box, HStack } from '@chakra-ui/react';
import {useState, useRef} from 'react';
import Editor from "@monaco-editor/react";
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constant';
import Output from './Output';
import { useLocation } from 'react-router-dom';

const CodeEditor = () => {
    const location = useLocation();
    const receivedData = location.state;
    const lang = receivedData != null ? receivedData : "javascript";
    const editorRef = useRef()
    const [value, setValue] = useState()
    const [language, setLanguage] = useState(lang);
    const onMount = (editor) =>{
        editorRef.current = editor;
        editor.focus();
    }
    const onSelect = (language) =>{
        setLanguage(language);  
        setValue(
            CODE_SNIPPETS[language]
        )
    }
  return (
    <Box bg={'gray.900'} color={"white"}>
    <HStack spaceing={4}>
        <Box w="50%">
        <LanguageSelector language={language} onSelect={onSelect} />
        <Editor
            height="75vh"
            defaultLanguage={language}
            defaultValue={CODE_SNIPPETS[language]}
            theme="vs-dark"
            onMount={onMount}
            onChange={(value) => setValue(value)}
            value={value}
            />
        </Box>
        <Output language={language} editorRef={editorRef} />
    </HStack>
    </Box>
  )
}

export default CodeEditor;