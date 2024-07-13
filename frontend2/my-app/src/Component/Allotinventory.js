import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, FormControl, FormLabel, Input, Button, VStack, Heading, SimpleGrid,useToast } from '@chakra-ui/react';
import axios from 'axios';

const Allotinventory = () => {
  const [Mouse, setMouse] = useState('');
  const [keyboard, setKeyboard] = useState('');
  const [Moniter, setMoniter] = useState('');
  const [ups, setUps] = useState('');
  const [Room, setRoom] = useState('');
  const [Sys, setSys] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [dor, setDor] = useState('');
  const [doj, setDoj] = useState('');
  const [Address, setAddres] = useState('');
  const toast = useToast();


  const handleSubmit = async(e) => {
    e.preventDefault();
    const employeeData = {
      name,
      email,
      roomNo: Room,
      systemNo: Sys,
      dob,
      doj,
      dor,
     Address,
     Moniter,
      keyboard,
     Mouse,
      ups
    };

    try {
        
        const response = await axios.post(`http://localhost:5000/register`, employeeData, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        });
        setMouse('');
        setKeyboard('');
        setMoniter('');
        setUps('');
        setRoom('');
        setSys('');
        setName('');
        setEmail('');
        setDob('');
        setDor('');
        setDoj('');
        setAddres('');
        toast({
            title: `Inventory alloted successfully`,
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
      } catch (error) {
        console.error('Error sending POST request:', error);
        // Handle error
        console.error('Error updating inventory:', error);
      toast({
        title: 'Error',
        description: 'Failed to update inventory',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      }
      
    
    
  };

  return (
    <ChakraProvider>
      <Flex minHeight="100vh" padding="4" flexDirection="column">
        <Heading as="h1" marginBottom="8" textAlign="center">
          Employee Inventory Management
        </Heading>
        <form onSubmit={handleSubmit}>
          <Flex justifyContent="center" flex="1">
            <Box width="40%" padding="4" borderWidth="1px" borderRadius="lg" marginRight="4">
              <Heading as="h2" size="md" marginBottom="4">
                Enter Employee Detail
              </Heading>
              <SimpleGrid columns={2} spacing={4}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="roomNo">
                  <FormLabel>Room No</FormLabel>
                  <Input type="text" value={Room} onChange={(e) => setRoom(e.target.value)} />
                </FormControl>
                <FormControl id="systemNo">
                  <FormLabel>System No</FormLabel>
                  <Input type="text" value={Sys} onChange={(e) => setSys(e.target.value)} />
                </FormControl>
                <FormControl id="dob">
                  <FormLabel>Date of Birth</FormLabel>
                  <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                </FormControl>
                <FormControl id="doj">
                  <FormLabel>Date of Joining</FormLabel>
                  <Input type="date" value={doj} onChange={(e) => setDoj(e.target.value)} />
                </FormControl>
                <FormControl id="dor">
                  <FormLabel>Date of Retirement</FormLabel>
                  <Input type="date" value={dor} onChange={(e) => setDor(e.target.value)} />
                </FormControl>
                <FormControl id="address">
                  <FormLabel>Address</FormLabel>
                  <Input type="text" value={Address} onChange={(e) => setAddres(e.target.value)} />
                </FormControl>
              </SimpleGrid>
            </Box>
            <Box width="40%" padding="4" borderWidth="1px" borderRadius="lg">
              <Heading as="h2" size="md" marginBottom="4">
                Allot Employee Inventory
              </Heading>
              <VStack spacing="4" align="stretch">
                <FormControl id="monitor">
                  <FormLabel>Monitor</FormLabel>
                  <Input type="text" value={Moniter} onChange={(e) => setMoniter(e.target.value)} />
                </FormControl>
                <FormControl id="keyboard">
                  <FormLabel>Keyboard</FormLabel>
                  <Input type="text" value={keyboard} onChange={(e) => setKeyboard(e.target.value)} />
                </FormControl>
                <FormControl id="mouse">
                  <FormLabel>Mouse</FormLabel>
                  <Input type="text" value={Mouse} onChange={(e) => setMouse(e.target.value)} />
                </FormControl>
                <FormControl id="ups">
                  <FormLabel>UPS</FormLabel>
                  <Input type="text" value={ups} onChange={(e) => setUps(e.target.value)} />
                </FormControl>
              </VStack>
            </Box>
          </Flex>
          <Flex justifyContent="center" marginTop="4">
            <Button width={400} colorScheme="blue" type="submit">Submit</Button>
          </Flex>
        </form>
      </Flex>
    </ChakraProvider>
  );
};

export default Allotinventory;
