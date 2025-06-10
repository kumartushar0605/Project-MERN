import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import { Context } from '../index';
import { useNavigate,useLocation } from 'react-router-dom';


import {
    Box,
    Heading,
    Flex,
    Radio,
    RadioGroup,
    Input,
    Button,
    useToast,
  } from '@chakra-ui/react';

const Inventoryy = () => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

    const [Moniter, setMonitorData] = useState('');
  const [keyboard, setKeyboardData] = useState('');
  const [Mouse, setMouseData] = useState('');
  const [ups, setUps] = useState('');
  const [selectedField, setSelectedField] = useState(null);
  const {userr} = useContext(Context);
  const toast = useToast();
  const location = useLocation();

  const {name,roomNo,systemNo} = location.state || {}
 

  const handleRadioChange = (field) => {
    setSelectedField(field); // Update selected field when radio changes
  };

  const handleUpdate = async () => {
    if (!selectedField) return;
      let updatedData = '';
      switch (selectedField) {
        case 'moniter':
          updatedData = Moniter;
          break;
        case 'keyboard':
          updatedData = keyboard;
          break;
        case 'mouse':
          updatedData = Mouse;
          break;
          case 'ups':
          updatedData = ups;
          break;
        default:
          return;
      }

    //   Example of sending updated data to backend
    //   await axios.put(`http://localhost:5000/inventoryup/${userr.email}`, {
    //     data: updatedData,
    //   });
    const dataa = {
        selectedField: selectedField,
        updatedData: updatedData
    };
    
    try {
          console.log(selectedField+" hi"+updatedData)
        const response = await axios.post(`${apiBaseUrl}/inventoryy?name=${name}&roomNo=${roomNo}&systemNo=${systemNo}`, dataa, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        });
        toast({
            title: `Updated ${selectedField} successfully`,
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          setSelectedField(null);
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
    <Box width="700px"
    margin="0 auto"
    padding="30px"
    mt={36}
    borderRadius="15px"
    boxShadow="0 10px 30px rgba(0, 0, 0, 0.1)"
    bgGradient="linear(to-r, gray.300, gray.400)"
    textAlign="center"
    transition="transform 0.3s ease-in-out"
    _hover={{ transform: 'scale(1.05)' }}>
      <Heading mb={4}>Update Inventory</Heading>

      <RadioGroup onChange={handleRadioChange} value={selectedField}>
        <Flex direction="column" mb={4}>
          <Radio value="moniter">Monitor</Radio>
          <Radio value="keyboard">Keyboard</Radio>
          <Radio value="mouse">Mouse</Radio>
          <Radio value="ups">Ups</Radio>
        </Flex>
      </RadioGroup>

      {selectedField && (
        <Box mt={4}>
          <Heading size="md">Update {selectedField}</Heading>
          <Input
            mt={2}
            value={
              selectedField === 'moniter'
                ? Moniter
                : selectedField === 'keyboard'
                ? keyboard
                : selectedField === 'ups'
                ?ups
                : Mouse
            }
            onChange={(e) => {
              switch (selectedField) {
                case 'moniter':
                  setMonitorData(e.target.value);
                  break;
                case 'keyboard':
                  setKeyboardData(e.target.value);
                  break;
                case 'mouse':
                  setMouseData(e.target.value);
                  break;
                  case 'ups':
                  setUps(e.target.value);
                  break;
                default:
                  return;
              }
            }}
          />
          <Button mt={2} colorScheme="teal" onClick={handleUpdate}>
            Update
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default Inventoryy