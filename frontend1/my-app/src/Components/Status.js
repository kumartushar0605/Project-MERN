import React, { useState, useEffect, useContext } from 'react';
import { Box, Heading, Text, Center, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Context } from '../index';

// MotionBox component for adding animations and transitions
const MotionBox = motion(Box);

const Status = () => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const [issues, setIssues] = useState([]);
  const { userr } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${apiBaseUrl}/getAssignedIssue?name=${userr.name}&roomNo=${userr.roomNo}&systemNo=${userr.systemNo}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setIssues(response.data);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
      setLoading(false);
    };

    fetchIssues();
  }, [userr.name, userr.roomNo, userr.systemNo]);

  return (
    <Center>
      <Box textAlign="center" p={8} maxWidth="600px">
        <Heading as="h1" size="xl" mb={5}>
          Issue Tracker
        </Heading>
        {loading ? (
          <Spinner size="xl" color="teal.500" />
        ) : issues.length > 0 ? (
          issues.map((issue, index) => (
            <MotionBox
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p="6"
              m="4"
              bg="white"
              shadow="md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Heading as="h2" size="lg" mb="4" color="teal.500">
                {issue.Issue}
              </Heading>
              <Text fontSize="md" color="gray.600">
                Assigned to: {issue.AssignedTo}
              </Text>
            </MotionBox>
          ))
        ) : (
          <Text fontSize="lg" color="gray.500">
            Not Assigned Yet!!
          </Text>
        )}
      </Box>
    </Center>
  );
};

export default Status;
