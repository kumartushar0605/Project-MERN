import { Box, Heading, Text, Flex, Icon, Grid, GridItem } from '@chakra-ui/react';
import { FaCalendarDay, FaHome, FaKeyboard, FaDesktop, FaMouse, FaUserAlt ,FaBatteryHalf,FaDoorClosed , FaLaptop} from 'react-icons/fa';
import React, { useContext } from 'react';
import { Context } from '../index';

const Profile = () => {
  const {userr} = useContext(Context);

  return (
    <Box
      width="800px"
      margin="0 auto"
      padding="30px"
      mt={30}
      borderRadius="15px"
      boxShadow="0 10px 30px rgba(0, 0, 0, 0.1)"
      bgGradient="linear(to-r, gray.300, gray.400)"
      textAlign="center"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Flex mr={15} alignItems="center" justifyContent="center" marginBottom="30px">
        <Icon as={FaUserAlt} w={8} h={8} marginRight="10px" />
        <Heading as="h2" size="lg" color="gray.700">
          {userr.name}
        </Heading>
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaCalendarDay} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Date of Birth: {userr.dob}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaCalendarDay} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Date of Joining: {userr.doj}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaCalendarDay} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Date of Retirement: {userr.dor}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaHome} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Address: {userr.Address}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaUserAlt} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Room No.: {userr.roomNo}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaLaptop} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              System No.: {userr.systemNo}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaDesktop} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Monitor: {userr.Moniter}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaKeyboard} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Keyboard: {userr.keyboard}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaMouse} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              Mouse: {userr.Mouse}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex alignItems="center">
            <Icon as={FaBatteryHalf} w={6} h={6} marginRight="10px" />
            <Text fontSize="xl" color="gray.600">
              UPS: {userr.ups}
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Profile;
