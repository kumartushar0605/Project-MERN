import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';
// import  { StrictMode } from 'react';

import App from './App';
import { createContext, useState } from 'react';


export const Context = createContext();

const AppWrapper = ()=>{

    const[namee,setNamee] = useState('');
    const[data,setData] = useState([]);
    return(
        <Context.Provider value={{
            namee,
            setNamee,
            data,
            setData

        }}>
            {/* <StrictMode> */}
    <ColorModeScript/>
<ChakraProvider>
{/* <ColorModeSwitcher/> */}

    <App />
</ChakraProvider>
    {/* </StrictMode> */}
        </Context.Provider>
    )
} 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppWrapper/>
);

