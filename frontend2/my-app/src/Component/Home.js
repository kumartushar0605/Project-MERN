import React from 'react';
import { Grid, GridItem, Button, useColorModeValue, Center, Box, Text, VStack, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionButton = motion(Button);

const Home = () => {
  const buttonHoverBg = useColorModeValue('gray.200', 'gray.700');
  const buttonActiveBg = useColorModeValue('gray.300', 'gray.600');
  const buttonBg = useColorModeValue('gray.100', 'gray.800');
  const navigate = useNavigate();

  return (
    <Center height="100vh">
      <VStack spacing={8} width="80%">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Welcome, Admin
        </Text>
        <Box width="100%">
          <Grid templateColumns="repeat(2, 1fr)" gap={10}>
            <GridItem>
              <MotionButton
                width="100%"
                height="150px"
                bg="blue.500"
                color="white"
                _hover={{ bg: 'blue.600' }}
                _active={{ bg: 'blue.700' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={()=>(navigate('/allot'))}
              >
                Allot Inventory
              </MotionButton>
            </GridItem>
            <GridItem>
              <MotionButton
                width="100%"
                height="150px"
                bg="green.500"
                color="white"
                _hover={{ bg: 'green.600' }}
                _active={{ bg: 'green.700' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={()=>(navigate('/check'))}
              >
                Check Status
              </MotionButton>
            </GridItem>
            <GridItem>
              <MotionButton
                width="100%"
                height="150px"
                bg="orange.400"
                color="white"
                _hover={{ bg: 'orange.600' }}
                _active={{ bg: 'orange.700' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={()=>(navigate('/assign'))}
              >
                Assign Issue
              </MotionButton>
            </GridItem>
            <GridItem>
              <MotionButton
                width="100%"
                height="150px"
                bg="red.500"
                color="white"
                _hover={{ bg: 'red.600' }}
                _active={{ bg: 'red.700' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={()=>(navigate('/assigned'))}
              >
                Issue Fixed
              </MotionButton>
            </GridItem>
          </Grid>
          <GridItem>
              <MotionButton
                width="100%"
                height="90px"
                bg='purple.400'
                mt={10}
                color="white"
                _hover={{ bg: 'purple.600' }}
                _active={{ bg: 'purple.700' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={()=>(navigate('/up'))}
              >
                Issue Fixed
              </MotionButton>
            </GridItem>
        </Box>
      </VStack>
    </Center>
  );
};

export default Home;
