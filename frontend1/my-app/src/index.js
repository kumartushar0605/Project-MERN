// import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';
import React, { createContext, useState } from 'react';
import  theme  from '../src/Components/theme';

export const Context = createContext();
const isAuthenticated =false

const AppWrapper = ()=>{

    const [loading,setLoading] = useState(false);
    const [userr,setUserr]=useState({})
    return(
        <Context.Provider value={{
           
            loading,
            setLoading,
            userr,
            setUserr

        }}>
            {/* <StrictMode> */}
    <ColorModeScript/>
<ChakraProvider theme={theme}>
<ColorModeSwitcher/>

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

