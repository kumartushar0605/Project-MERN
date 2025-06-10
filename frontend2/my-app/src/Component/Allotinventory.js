import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Flex, FormControl,Textarea, FormLabel, Input, Button, VStack, Heading, SimpleGrid, useToast, Select } from '@chakra-ui/react';
import axios from 'axios';

const Allotinventory = () => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  console.log("API Base URL:", apiBaseUrl);
  const [Mouse, setMouse] = useState('');
  const [keyboard, setKeyboard] = useState('');
  const [Moniter, setMoniter] = useState('');
  const [ups, setUps] = useState('');
  const [Cpu, setCpu] = useState('');
  const [Room, setRoom] = useState('');
  const [Sys, setSys] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [dor, setDor] = useState('');
  const [doj, setDoj] = useState('');
  const [Address, setAddres] = useState('');
  const [empID, setEmpId] = useState('');
  const [pcType, setPcType] = useState('');
  const [remarks, setRemarks] = useState('');
  const toast = useToast();

  useEffect(() => {
    if (empID) {
      fetchData();
    } else {
      setName('');
      setDob('');
      setDoj('');
      setDor('');
      setAddres('');
      setEmail('');
      setSys('');
      setRoom('');
    }
    if(pcType=='fullPC'){
      setMouse('');
      setKeyboard('');
      setMoniter('');
      setUps('');
      setCpu('');
      setRemarks('');
    }else if(pcType=='desktopPC'){
      setMouse('');
      setKeyboard('');
      setMoniter('');
      setUps('');
      setCpu('');
      setRemarks('');
    }else if(pcType=='other'){
      setMouse('');
      setKeyboard('');
      setMoniter('');
      setUps('');
      setCpu('');
      setRemarks('');
    }
  }, [empID,pcType]);

  const fetchData = async () => {
    console.log(apiBaseUrl)
    console.log("error")
    const response = await axios.get(`${apiBaseUrl}/getEmp/${empID}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    console.log(response.data);
    setName(response.data.name);
    setDob(response.data.dob);
    setDoj(response.data.doj);
    setDor(response.data.dor);
    setAddres(response.data.Address);
    setEmail(response.data.email);
    setSys(response.data.systemNo);
    setRoom(response.data.roomNo);
  };

  const handleSubmit = async (e) => {
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
      ups,
      Cpu,
      remarks,
      pcType
    };

    try {
      const response = await axios.post(`${apiBaseUrl}/register`, employeeData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      setMouse('');
      setKeyboard('');
      setMoniter('');
      setUps('');
      setCpu('');
      setRoom('');
      setSys('');
      setName('');
      setEmail('');
      setDob('');
      setDor('');
      setDoj('');
      setAddres('');
      setRemarks('');
      toast({
        title: `Inventory allotted successfully`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error sending POST request:', error);
      // Handle error
      toast({
        title: 'Error',
        description: 'Inventory already alloted ',
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
              <FormControl id="empID">
                <Heading as="h2" size="md" marginBottom="4">Enter Employee ID</Heading>
                {/* <FormLabel>Enter Employee ID</FormLabel> */}
                <Input required={true} type="text" value={empID} onChange={(e) => setEmpId(e.target.value)} />
              </FormControl>
              <SimpleGrid columns={2} spacing={4}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input required={true} type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input required={true} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="roomNo">
                  <FormLabel>Room No</FormLabel>
                  <Input required={true} type="text" value={Room} onChange={(e) => setRoom(e.target.value)} />
                </FormControl>
                <FormControl id="systemNo">
                  <FormLabel>System No</FormLabel>
                  <Input required={true} type="text" value={Sys} onChange={(e) => setSys(e.target.value)} />
                </FormControl>
                <FormControl id="dob">
                  <FormLabel>Date of Birth</FormLabel>
                  <Input required={true} type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
                </FormControl>
                <FormControl id="doj">
                  <FormLabel>Date of Joining</FormLabel>
                  <Input required={true} type="text" value={doj} onChange={(e) => setDoj(e.target.value)} />
                </FormControl>
                <FormControl id="dor">
                  <FormLabel>Date of Retirement</FormLabel>
                  <Input required={true} type="text" value={dor} onChange={(e) => setDor(e.target.value)} />
                </FormControl>
                <FormControl id="address">
                  <FormLabel>Address</FormLabel>
                  <Input  required={true} type="text" value={Address} onChange={(e) => setAddres(e.target.value)} />
                </FormControl>
              </SimpleGrid>
            </Box>
            <Box width="40%" padding="4" borderWidth="1px" borderRadius="lg">
              <Heading as="h2" size="md" marginBottom="4">
                Allot Employee Inventory
              </Heading>
              <VStack spacing="4" align="stretch">
                <FormControl id="pcType">
                  <Select required={true} placeholder="Select Type" value={pcType} onChange={(e) => setPcType(e.target.value)}>
                    <option value="fullPC">Full PC</option>
                    <option value="desktopPC">Desktop PC</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>

                {pcType === 'fullPC' && (
                  
                  <>
                  
                    <SimpleGrid columns={2} spacing={4}>
                    <FormControl id="monitor">
                      <FormLabel>Monitor</FormLabel>
                      <Input required={true} type="text" value={Moniter} onChange={(e) => setMoniter(e.target.value)} />
                    </FormControl>
                    <FormControl id="keyboard">
                      <FormLabel>Keyboard</FormLabel>
                      <Input required={true} type="text" value={keyboard} onChange={(e) => setKeyboard(e.target.value)} />
                    </FormControl>
                    <FormControl id="mouse">
                      <FormLabel>Mouse</FormLabel>
                      <Input required={true} type="text" value={Mouse} onChange={(e) => setMouse(e.target.value)} />
                    </FormControl>
                    <FormControl id="cpu">
                      <FormLabel>CPU</FormLabel>
                      <Input required={true} type="text" value={Cpu} onChange={(e) => setCpu(e.target.value)} />
                    </FormControl>
                    <FormControl id="ups">
                      <FormLabel>UPS</FormLabel>
                      <Input required={true} type="text" value={ups} onChange={(e) => setUps(e.target.value)} />
                    </FormControl>
                    <FormControl id="remarks">
                      <FormLabel>Remarks</FormLabel>
                      <Textarea h={100} value={remarks} onChange={(e) => setRemarks(e.target.value)} />
                    </FormControl>
                    </SimpleGrid>
                  </>
                )}

                {pcType === 'desktopPC' && (
                  <>
                    <SimpleGrid columns={2} spacing={4}>
                    <FormControl id="monitor">
                      <FormLabel>Monitor</FormLabel>
                      <Input required={true} type="text" value={Moniter} onChange={(e) => setMoniter(e.target.value)} />
                    </FormControl>
                    <FormControl id="keyboard">
                      <FormLabel>Keyboard</FormLabel>
                      <Input required={true} type="text" value={keyboard} onChange={(e) => setKeyboard(e.target.value)} />
                    </FormControl>
                    <FormControl id="mouse">
                      <FormLabel>Mouse</FormLabel>
                      <Input required={true} type="text" value={Mouse} onChange={(e) => setMouse(e.target.value)} />
                    </FormControl>
                    <FormControl id="ups">
                      <FormLabel>UPS</FormLabel>
                      <Input required={true} type="text" value={ups} onChange={(e) => setUps(e.target.value)} />
                    </FormControl>
                    <FormControl id="remarks">
                      <FormLabel>Remarks</FormLabel>
                      <Textarea h={100} w={460} value={remarks} onChange={(e) => setRemarks(e.target.value)} />
                      </FormControl>
                    </SimpleGrid>
                  </>
                )}

                {pcType === 'other' && (
                  <FormControl id="remarks">
                    <FormLabel>Remarks</FormLabel>
                    <Textarea required={true} h={200} value={remarks} onChange={(e) => setRemarks(e.target.value)} />
                  </FormControl>
                )}
              </VStack>
            </Box>
          </Flex>
          <Flex justifyContent="center" marginTop="4">
            <Button width={400} colorScheme="blue" type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Flex>
    </ChakraProvider>
  );
};

export default Allotinventory;
