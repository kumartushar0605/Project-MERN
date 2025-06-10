import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Flex, Button, VStack, useToast,Input, Heading, Table, Thead, Tbody, Tr, Th, Td, Select, FormControl,FormLabel } from '@chakra-ui/react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const CheckStatus2 = () => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

    const [employees, setEmployees] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState('');
  const toast = useToast();
 const location = useLocation();

 const { name,roomNo,systemNo } = location.state || {};


  useEffect(() => {
    fetchEmployees();
  }, []);
  const fetchEmployees = async () => {
    try {
        console.log("hiii")
      const response = await axios.get(`${apiBaseUrl}/status?name=${name}&roomNo=${roomNo}&systemNo=${systemNo}`);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };
  return (
    <ChakraProvider>
    <Flex minHeight="100vh" padding="4" flexDirection="column">
      <Heading as="h1" marginBottom="8" textAlign="center">
        Employee Inventory Management
      </Heading>
      <Box borderWidth="1px" borderRadius="lg" padding="4">
        <Heading as="h2" size="md" marginBottom="4">
          Issue List
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Room No</Th>
              <Th>System No</Th>
              <Th>Monitor</Th>
              <Th>Keyboard</Th>
              <Th>Mouse</Th>
              <Th>UPS</Th>
              <Th>Issue</Th>
              <Th>Assigned To</Th>
              <Th>Date of report</Th>
              <Th> Fixed Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {employees.map((employee) => (
              <Tr key={employee._id}>
                <Td>{employee.name}</Td>
                <Td>{employee.roomNo}</Td>
                <Td>{employee.systemNo}</Td>
                <Td>{employee.Moniter}</Td>
                <Td>{employee.keyboard}</Td>
                <Td>{employee.Mouse}</Td>
                <Td>{employee.ups}</Td>
                <Td>{employee.Issue}</Td>
                <Td>{employee.AssignedTo}</Td>
                <Td>{employee.date}</Td>
                <Td>{employee.FixedDate}</Td>
                <Td>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  </ChakraProvider>
  )
}

export default CheckStatus2