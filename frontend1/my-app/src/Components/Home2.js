import React, { useState,useContext } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from '../index';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const Home2 = () => {

    const [name, setName] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [systemNo, setSystemNo] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
console.log("API Base URL:", apiBaseUrl);

  const {loading,setLoading,setUserr,userr} = useContext(Context);

  
    const handleSubmit = async (e) => {
      console.log(apiBaseUrl+"hii")
        e.preventDefault();
        try {
          const response = await axios.post(`${apiBaseUrl}/login`, {
            name,
            roomNo,
            systemNo,
          });
          if (response.data.success) {
            toast({
              title: 'Success',
              description: 'Employee details matched',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
          } else {
            toast({
              title: 'Error',
              description: 'Employee details not matched',
              status: 'error',
              duration: 5000,
              isClosable: true,
            });
            return;
          }
          setUserr(response.data.user)
          console.log(userr)
          console.log(response.data.user)
          navigate('/h2',{ state: { name: name } })
          
        } catch (error) {
          console.error('Error checking employee details:', error);
          toast({
            title: 'Error',
            description: 'An error occurred while checking employee details.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      };
  return (
    <MotionBox
      w="400px"
      p="4"
      m="auto"
      mt="20"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Heading as="h2" size="lg" mb="6" textAlign="center" color="teal.500">
        Welcome, Enter Your Details
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              focusBorderColor="teal.500"
              placeholder="Enter your name"
            />
          </FormControl>
          <FormControl id="roomNo" isRequired>
            <FormLabel>Room No</FormLabel>
            <Input
              type="text"
              value={roomNo}
              onChange={(e) => setRoomNo(e.target.value)}
              focusBorderColor="teal.500"
              placeholder="Enter your room number"
            />
          </FormControl>
          <FormControl id="systemNo" isRequired>
            <FormLabel>System No</FormLabel>
            <Input
              type="text"
              value={systemNo}
              onChange={(e) => setSystemNo(e.target.value)}
              focusBorderColor="teal.500"
              placeholder="Enter your system number"
            />
          </FormControl>
          <MotionButton
            type="submit"
            colorScheme="teal"
            width="full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue
          </MotionButton>
        </VStack>
      </form>
    </MotionBox>
  )
}

export default Home2