import { Box, Flex, Link, Text, Tooltip, Divider } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py="4">
      <Flex
        maxW="960px"
        mx="auto"
        px="4"
        justifyContent="space-between"
        alignItems="center"
        fontSize="sm"
      >
        <Text>&copy; 2024 Your Company. All rights reserved.</Text>
        <Divider orientation="vertical" marginLeft={-100} h="40px" borderColor="white" />
        <Flex gap={3}>
         
            <Link
              href="https://github.com/"
              target="_blank"
              
              mr="4"
              _hover={{ color: "teal.300" }}
            >
              <FaGithub size={24} />
            </Link>
          
          
            <Link
              href="https://twitter.com/"
              target="_blank"
             
              mr="4"
              _hover={{ color: "teal.300" }}
            >
              <FaTwitter size={24} />
            </Link>
          
          
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
             
            >
              <FaLinkedin size={24} />
            </Link>
          
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
