import React, { useRef, useState ,useContext,useEffect} from 'react'
import {animate, motion} from "framer-motion"
import Typewriter from "typewriter-effect"
import {BsArrowUpRight, BsChevronBarDown, BsChevronDown} from "react-icons/bs"
import me from "../Assets/vg.png"
import { Link } from 'react-router-dom'
import { Context } from '../index';
import { Box, Button, Flex, Heading, Image, Text, VStack, HStack } from '@chakra-ui/react';

import toast from "react-hot-toast";
import { useLocation,useNavigate } from 'react-router-dom';

import axios from "axios";

const Home = () => {
    const {setLoading,loding,userr} = useContext(Context);
    const navigate = useNavigate();
    
    const location = useLocation();
    const { name } = location.state || {};
    // useEffect(() => {
    //     const reloadFlag = localStorage.getItem('reloadPage1');
    //     if (location.state?.reload && !reloadFlag) {
    //       localStorage.setItem('reloadPage1', 'true');
    //       window.location.reload();
    //     } else {
    //       localStorage.removeItem('reloadPage1');
    //     }
    //   }, [location.state]);


    // const logoutHandler = async()=>{
      //   setLoading(true)
      //   try {
            
      //       console.log("hi how are you")
      //     const data = await axios.get(`http://localhost:5000/logout`,{
      //       withCredentials:true
      //     })
      //     toast.success("logout succesfully")
      //     setIsAuthenticated(false)
      //     setLoading(false)
      //   } catch (error) {
      //     console.log(error)
      //     toast.error("logout failed")
      //     setIsAuthenticated(true)
      //     setLoading(false)
      //   }
      // }
      
//    if(isAuthenticated){
//     if(re===1){
//         window.location.reload();
        
//     }
//     re=re-1;
//    }

    

    const animation ={
        h1:{
            initial:{
    x:"-100%",
    opacity:0,
    
},
whileInView:{
    x:0,
    opacity:1
}

},

button:{
            initial:{
            y:"-100%",
            opacity:0,
},
            whileInView:{
             y:0, 
            opacity:1
}

        }

    }
    
  return (
    <Box id="home" width="100%" height="90vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
    <Flex mt={-38} width="100%" justifyContent="space-around" alignItems="center">
      <Box mt={-10}  borderTop="5px solid #6B46C1" pt="1rem">
        <motion.div  {...animation.h1}>
          <Heading mb={3} as="h1" fontWeight="900" fontSize="4rem">
            Hi, Welcome<br />{userr.name}
          </Heading>
        </motion.div>
        <Typewriter 
          options={{
            strings: ['Report an issue', 'Update inventory'],
            autoStart: true,
            loop: true,
            cursor: ' ',
            wrapperClassName: 'typewriterpara',
          }}
        />
        <HStack mt="2rem" spacing="4">
          {/* {isAuthenticated ? ( */}
            {/* <>
              <Button
                as={Link}
                to="/report"
                bg="#6B46C1"
                color="#FFFFFF"
                py="0.8rem"
                px="2.5rem"
                fontWeight="bold"
                borderRadius="10px"
                _hover={{ bg: '#553C9A' }}
              >
                Report
              </Button> */}
              {/* <Button
                onClick={logoutHandler}
                bg="#6B46C1"
                color="#FFFFFF"
                py="0.8rem"
                px="2.5rem"
                fontWeight="bold"
                borderRadius="10px"
                _hover={{ bg: '#553C9A' }}
              >
                Logout
              </Button> */}
            {/* </> */}
          {/* ) : ( */}
            <>
              <Button
                onClick={() => navigate("/report")}
                bg="#6B46C1"
                color="#FFFFFF"
                py="0.8rem"
                px="2.5rem"
                fontWeight="bold"
                borderRadius="10px"
                _hover={{ bg: '#553C9A' }}
              >
                Report
              </Button>
              {/* <Button
                as={Link}
                to="/register"
                bg="#6B46C1"
                color="#FFFFFF"
                py="0.8rem"
                px="2.5rem"
                fontWeight="bold"
                borderRadius="10px"
                _hover={{ bg: '#553C9A' }}
              >
                Register
              </Button> */}
            </>
          {/* )} */}
        </HStack>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image src={me} width="40vmax" objectFit="contain" height="30vmax" transform="translateY(0%)" bg="#6B46C1" borderRadius="40%" />
      </Box>
    </Flex>
    <Box position="absolute" fontSize="4rem" color="#4A5568" left="46%" bottom="5%">
      <BsChevronDown />
    </Box>
  </Box>
  );
}
export default Home