import React from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Icon, Divider, useColorMode } from '@chakra-ui/react';
import { FaMouse, FaKeyboard, FaDesktop, FaBatteryHalf, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const MotionBox = motion(Box);
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Container maxW="container.lg" p={6} centerContent>
      <VStack spacing={6} align="start">
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" size="2xl" textAlign="center" color={isDark ? 'gray.100' : 'gray.800'}>
            About Our Issue Reporting System
          </Heading>
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Text fontSize="xl" textAlign="center" color={isDark ? 'gray.200' : 'gray.700'}>
            Welcome to our employee issue reporting system. This platform is designed to help employees quickly and efficiently report issues related to their office equipment, ensuring a smooth and productive work environment.
          </Text>
        </MotionBox>
        
        <Divider borderColor={isDark ? 'gray.600' : 'gray.300'} />

        <MotionBox
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          w="full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          bg={isDark ? 'gray.700' : 'gray.50'}
          boxShadow="xl"
        >
          <Heading as="h2" size="lg" mb={4} color={isDark ? 'gray.100' : 'gray.800'}>
            Our Purpose
          </Heading>
          <Text fontSize="md" color={isDark ? 'gray.200' : 'gray.700'}>
            The primary goal of this system is to streamline the process of addressing common office equipment issues. Employees can report problems related to:
          </Text>
          <VStack spacing={3} mt={4} align="start">
            <HStack>
              <Icon as={FaMouse} w={6} h={6} color={isDark ? 'gray.300' : 'gray.700'} />
              <Text fontSize="md" color={isDark ? 'gray.300' : 'gray.700'}>Mouse</Text>
            </HStack>
            <HStack>
              <Icon as={FaKeyboard} w={6} h={6} color={isDark ? 'gray.300' : 'gray.700'} />
              <Text fontSize="md" color={isDark ? 'gray.300' : 'gray.700'}>Keyboard</Text>
            </HStack>
            <HStack>
              <Icon as={FaDesktop} w={6} h={6} color={isDark ? 'gray.300' : 'gray.700'} />
              <Text fontSize="md" color={isDark ? 'gray.300' : 'gray.700'}>Monitor</Text>
            </HStack>
            <HStack>
              <Icon as={FaBatteryHalf} w={6} h={6} color={isDark ? 'gray.300' : 'gray.700'} />
              <Text fontSize="md" color={isDark ? 'gray.300' : 'gray.700'}>UPS</Text>
            </HStack>
          </VStack>
        </MotionBox>


      </VStack>
    </Container>
  );
};

export default About;
