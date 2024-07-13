import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Flex, Button, VStack, useToast, Heading, Table, Thead, Tbody, Tr, Th, Td, Select } from '@chakra-ui/react';
import axios from 'axios';

const Assign = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState('');
  const toast = useToast();

  const availablePersons = ["Satyam", "Ashish", "Anand", "Yash"];

  useEffect(() => {
    fetchEmployees();
  }, []);

  const assignPerson = async (id) => {
    const employeeToAssign = employees.find(employee => employee._id === id);
    const { name, Mouse, keyboard, date, Moniter, roomNo, systemNo, ups, Issue } = employeeToAssign;

    try {
      await axios.post('http://localhost:5000/AssignIssue', {
        name, Mouse, keyboard, date, Moniter, roomNo, systemNo, ups, Issue, assignedPerson: selectedPerson, id
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      setEmployees(prevEmployees => prevEmployees.map(employee => 
        employee._id === id ? { ...employee, assignedPerson: selectedPerson } : employee
      ));

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
      const response = await axios.get('http://localhost:5000/getIssue');
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
                <Th>Assign</Th>
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
                  <Td>
                    <Select placeholder="Select person" onChange={(e) => setSelectedPerson(e.target.value)} value={selectedPerson}>
                      {availablePersons.map(person => (
                        <option key={person} value={person}>{person}</option>
                      ))}
                    </Select>
                    <Button onClick={() => assignPerson(employee._id)} marginTop="4">
                      {employee.assignedPerson ? `Assigned To ${employee.assignedPerson}` : "Click To Assign"}
                    </Button>
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

export default Assign;
