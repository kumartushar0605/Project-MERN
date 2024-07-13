import header from '../Styles/header.scss'
import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import  { useContext } from 'react';
import { Context } from '../index';
import toast from 'react-hot-toast';

const Header = () => {
  const {userr} = useContext(Context);
  return (
    <> 
       <HStack bgColor={"blackAlpha.900"} p={'6'}  > 
      <Button ml={400} variant={'ghost'} colorScheme='messenger'>
  <Link to='/h2'>Home</Link>
      </Button>

     <>
      <Button variant={'ghost'} colorScheme='messenger'>
  <Link to='/status'>Status</Link>
      </Button>

      <Button variant={'ghost'} colorScheme='messenger'>
  <Link to='/report'>Report</Link>
      </Button>

      <Button variant={'ghost'} colorScheme='messenger'>
  <Link to='/profile'>Profile</Link>
      </Button></> 
      
      <Button variant={'ghost'} colorScheme='messenger'>
  <Link to='/about'>About</Link>
      </Button>

      
      </HStack>
  </>
  );
};

const NavContent = ()=>{
    <>
    <div>
      <a  href="#home">
        Home
      </a>
      <a  href="#work">
        Work
      </a>
      <a  href="#timeline">
        Experience
      </a>
      <a  href="#services">
        Services
      </a>
      <a  href="#testimonial">
        Testimonial
      </a>
      <a  href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:official.6packprogrammer@gmail.com">
      <button>Email</button>
    </a>
    </>
}






export default Header;