import React, { useEffect, useState ,useContext} from 'react'
import { Box, VStack, Text, Heading, useColorMode, Button,useToast ,Icon, HStack,Flex,Grid,GridItem, Input} from '@chakra-ui/react';
import { FaCalendarDay, FaHome, FaKeyboard, FaDesktop, FaMouse, FaUserAlt ,FaBatteryHalf,FaDoorClosed , FaLaptop} from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { MdReportProblem } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../index';

const Fixed = () => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

   
      const navigate = useNavigate();
      const [user,setUserr] = useState([]);
      const{namee,setNamee,setData}= useContext(Context);
      console.log("nammee is "+namee)
      useEffect(()=>{
        axios.get(`${apiBaseUrl}/getData/${namee}`,{
          withCredentials:true
        }).then((res)=>{
          setUserr(res.data)
          console.log(res.data)
          
          
        }).catch((error)=>{
            setUserr([])
        })
      },[])
      console.log(user)
      
  return (
    <Box maxW="1000px" mx="auto" mt="30" p="4" border="1px solid #ccc" borderRadius="md" overflowY="scroll" maxH="600px" bg={'gray.100'} color={'black'} transition="background-color 0.5s ease">
  <HStack>
  <Button mb={4} bgColor={'lightblue'} onClick={()=>(navigate('/'))} >Back</Button>
  <Button mb={4} bgColor={'lightblue'} onClick={()=>(navigate('/ro'))} >Issue remains</Button>
  </HStack>
      {/* <Button onClick={toggleColorMode} mb="4">
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> */}
      <Text></Text>

      
      <VStack spacing={4} align="stretch">
        {user.map((userData) => (
          <Box
            key={user.id}
            p="4"
            bg={'gray.200' }
            borderRadius="md"
            shadow="md"
            _hover={  'gray.300' }
            as={motion.div}
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >  
          
      
      {userData.filteredItems && userData.filteredItems.map((item)=>(
        <>
        <Text mb={2}>Issue reported on : {item.date}</Text>
            <Text mb={4}>Issue Fixed on : {userData.date}</Text>   

        <Grid  templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem>
            <Flex alignItems="center">
              <Icon as={FaUserAlt} w={6} h={6} marginRight="10px" />
              <Text fontSize="xl" color="gray.600">
                Name: {item.name}
              </Text>
            </Flex>
          </GridItem> 
          <GridItem>
            <Flex alignItems="center">
              <Icon as={FaUserAlt} w={6} h={6} marginRight="10px" />
              <Text fontSize="xl" color="gray.600">
                Room No.: {item.Room}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center">
              <Icon as={FaLaptop} w={6} h={6} marginRight="10px" />
              <Text fontSize="xl" color="gray.600">
                System No: {item.Sys}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center">
              <Icon as={FaDesktop} w={6} h={6} marginRight="10px" />
              <Text fontSize="xl" color="gray.600">
                Monitor: {item.Moniter}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center">
              <Icon as={FaKeyboard} w={6} h={6} marginRight="10px" />
              <Text fontSize="xl" color="gray.600">
                Keyboard: {item.keyboard}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center">
              <Icon as={FaMouse} w={6} h={6} marginRight="10px" />
              <Text fontSize="xl" color="gray.600">
                Mouse: {item.Mouse}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center">
              <Icon as={FaBatteryHalf} w={6} h={6} marginRight="10px" />
              <Text fontSize="xl" color="gray.600">
                UPS: {item.ups}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex alignItems="center">
              <Icon as={MdReportProblem} w={6} h={6} marginRight="10px" />
              <Text fontSize="xl" color="gray.600">
                Issue: {item.Issue}
              </Text>
            </Flex>
          </GridItem>
        </Grid>
        </>
      ))}
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

export default Fixed