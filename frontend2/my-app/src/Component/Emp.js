import React, { useEffect, useState , useContext } from 'react';
import { Box, VStack, Text, Heading, useColorMode, Button,useToast ,Icon, HStack,Flex,Grid,GridItem, Input} from '@chakra-ui/react';
import { FaCalendarDay, FaHome, FaKeyboard, FaDesktop, FaMouse, FaUserAlt ,FaBatteryHalf,FaDoorClosed , FaLaptop} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';
import { MdReportProblem } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from '../index';
const Emp = () => {
  const dataa = [
    { "id": 1, "name": "Alice", "Room": "2","sys":"3","Mouse":"Logitech","Keybord":"Zebronics","Moniter":"LG","ups":"APC","AssignedTo":"anish","Issue":" the keboard is not working" },
    { "id": 2, "name": "Bob", "Room": "2","sys":"3","Mouse":"Logitech","Keybord":"Zebronics","Moniter":"LG","ups":"APC","AssignedTo":"anish","Issue":" the keboard is not working" },
    { "id": 3, "name": "Charlie", "Room": "2","sys":"3","Mouse":"Logitech","Keybord":"Zebronics","Moniter":"LG","ups":"APC","AssignedTo":"anish","Issue":" the keboard is not working" },
    { "id": 4, "name": "David", "Room": "2","sys":"3","Mouse":"Logitech","Keybord":"Zebronics","Moniter":"LG","ups":"APC","AssignedTo":"anish","Issue":" the keboard is not working"},
    { "id": 5, "name": "Eve", "Room": "2","sys":"3","Mouse":"Logitech","Keybord":"Zebronics","Moniter":"LG","ups":"APC","AssignedTo":"anish","Issue":" the keboard is not working" }
  ]
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const {namee,data,setData} = useContext(Context);
  const[date,setDate] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const toast = useToast();
  
  const handlerSubmit = async(id)=>{
    
      
    const result = data.filter(item=>item._id=== id);
    setFilteredData(result);
    // console.log(result)
    if(date){
      const result = data.filter(item => item._id === id);
      setFilteredData(result);

      try {
        await axios.post('http://localhost:5000/storeFilteredData', {
          date: date,
          filteredItems: result,
          namee

        }, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        toast({
          title: `Issue resolved on ${date}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setData(data.filter(item => item._id !== id));
      } catch (error) {
        console.error('Error storing filtered data:', error);
      }
      
    }else{
       toast({
            title: `Enter the Date`,
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
    }

    // try {
    //   await axios.post('http://localhost:5000/storeFilteredData', {
    //     date: date,
    //     filteredItems: result
    //   }, {
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   });
    // } catch (error) {
    //   console.error('Error storing filtered data:', error);
    // }
    

  }
  
  return (
    
<Box maxW="1000px" mx="auto" mt="30" p="4" border="1px solid #ccc" borderRadius="md" overflowY="scroll" maxH="600px" bg={colorMode === 'light' ? 'gray.100' : 'gray.800'} color={colorMode === 'light' ? 'black' : 'white'} transition="background-color 0.5s ease">
  <HStack>
  <Button mb={4} bgColor={'lightblue'} onClick={()=>(navigate('/'))} >Back</Button>
  <Button mb={4} bgColor={'lightblue'} onClick={()=>(navigate('/fixed'))} >Issue resolved</Button>
  </HStack>
      {/* <Button onClick={toggleColorMode} mb="4">
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> */}
      

      
      <VStack spacing={4} align="stretch">
        {data.map((user) => (
          <Box
            key={user.id}
            p="4"
            bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            borderRadius="md"
            shadow="md"
            _hover={{ bg: colorMode === 'light' ? 'gray.300' : 'gray.600' }}
            as={motion.div}
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >  
               <Text mb={3}>Issue reported on {user.date}</Text>
      <Grid  templateColumns="repeat(2, 1fr)" gap={4}>
      <GridItem>
          <Flex alignItems="center">
            <Icon as={FaUserAlt} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Name: {user.name}
            </Text>
          </Flex>
        </GridItem> 
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaUserAlt} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Room No.: {user.Room}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaLaptop} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              System No: {user.Sys}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaDesktop} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Monitor: {user.Moniter}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaKeyboard} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Keyboard: {user.keyboard}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaMouse} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Mouse: {user.Mouse}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaBatteryHalf} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              UPS: {user.ups}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={MdReportProblem} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Issue: {user.Issue}
            </Text>
          </Flex>
        </GridItem>
      </Grid>
      <HStack>
      <Input  onChange={(e)=>setDate(e.target.value)} w={200} bgColor={'lightblue'} placeholder='Enter Date'/>
      <Button onClick={()=>handlerSubmit(user._id)} bgColor={'lightblue'} mr={6}>Fixed</Button>
      </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

export default Emp