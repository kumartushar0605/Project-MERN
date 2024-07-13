import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Flex, Button, VStack, useToast,Input, Heading, Table, Thead, Tbody, Tr, Th, Td, Select, FormControl,FormLabel } from '@chakra-ui/react';
import axios from 'axios';

const Assigned = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState('');
  const [datee,setDate] = useState('');
  const toast = useToast();

  const availablePersons = ["Satyam", "Ashish", "Anand", "Yash"];

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handlerSubmit = async (id) => {
    const employeeToAssign = employees.find(employee => employee._id === id);
    const { name, Mouse, keyboard, date, Moniter, roomNo, systemNo, ups, Issue ,AssignedTo} = employeeToAssign;

    try {
      await axios.post('http://localhost:5000/IssueFixed', {
        name, Mouse, keyboard, date, Moniter, roomNo, systemNo, ups, Issue, assignedPerson: AssignedTo, id,datee
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      

      toast({
        title: `Assigned to ${selectedPerson} successfully`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setTimeout(() => {
        setEmployees(employees.filter(item => item._id !== id));
      }, 4000);
    } catch (error) {
      console.error('Error storing filtered data:', error);
    }
  };

  const fetchEmployees = async () => {
    try {
        console.log("hiii")
      const response = await axios.get('http://localhost:5000/IssueAssigned');
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
                <Th>Date of report</Th>
                <Th>Assigned To</Th>
                <Th>Issue Fixed Date</Th>
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
                  <Td>{employee.date}</Td>
                  <Td>{employee.AssignedTo}</Td>
                  <Td>
                    <FormControl>
                  
                  <Input type='date' w={160} onChange={(e)=>setDate(e.target.value)}  />
                  </FormControl>
                <Button onClick={()=>handlerSubmit(employee._id)} bgColor={'lightblue'} w={160} mt={6}>Fixed</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Assigned;
