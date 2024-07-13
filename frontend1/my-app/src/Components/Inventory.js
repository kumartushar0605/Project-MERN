import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState,useContext,useEffect } from 'react';
import { Link,Navigate } from 'react-router-dom';
import { Context } from '../index';
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Inventory = () => {
  const location = useLocation();

    useEffect(() => {
        const reloadFlag = localStorage.getItem('reloadPage1');
        if (location.state?.reload && !reloadFlag) {
          localStorage.setItem('reloadPage1', 'true');
          window.location.reload();
        } else {
          localStorage.removeItem('reloadPage1');
        }
      }, [location.state]);
  
  const [Mouse, setMouse] = useState('');
  const [keyboard, setKeyboard] = useState('');
  const [Moniter,setMoniter] = useState('');
  const [ups,setUps] = useState('');
  const [Room,setRoom] = useState('');
  const [Sys,setSys] = useState('');
  const navigate =  useNavigate();
  const {loading,setLoading,userr} = useContext(Context);
  
  const handleSubmit = async(e)=>{
    console.log("hiiiiiiiikkkkk")
    e.preventDefault();
    setLoading(true)
    // console.log(keyboard + " " + Room)

    try {
      console.log(keyboard + " hi" + Room)
       const data = await axios.post(`http://localhost:5000/inventory/${userr.email}`,{
           Room,Sys,Moniter,keyboard,Mouse,ups
       },{
           headers:{
               "Content-Type":"application/json"
           },
           withCredentials:true
           
       })
      console.log(Sys + " "+Moniter)
       toast.success(data.data.message)
       setLoading(false)
       navigate('/',{ state: { reload: true } })
       
    } catch (error) {
       console.log(error)
       toast.error(error.response.data.message)// we the message that we have written in the backend
       setLoading(false)
       
    }
  }

  // if(isAuthenticated) return <Navigate to={"/"}/>

  return (
    <Container  h={['80vh','100vh']} p={'16'}>
    <form onSubmit={handleSubmit}>
      <VStack
        alignItems={'stretch'}
        spacing={'8'}
        w={['full', '96']}
        m={'auto'}
        my={'-10'}
      >
        <Heading >Inventory </Heading>

       <HStack gap={10}>
       <Input
          placeholder={'Room No.'}
          value={Room}
          type={'roomno'}
          onChange={(e)=>setRoom(e.target.value)}
          required
          focusBorderColor={'purple.500'}
        />
        <Input
          placeholder={'System No.'}
          type={'sys'}
          value={Sys}
          onChange={(e)=>setSys(e.target.value)}
          required
          focusBorderColor={'purple.500'}
        />
       </HStack>
       <HStack gap={10}>
       <Input
          value={Moniter}
          placeholder={'Moniter Name and ID'}
          onChange={(e)=>setMoniter(e.target.value)}
          type={'Monitername'}
          required
          focusBorderColor={'purple.500'}
        />
       </HStack>
       <HStack gap={10}>
       <Input
          value={Mouse}
          placeholder={'Mouse Name and ID'}
          onChange={(e)=>setMouse(e.target.value)}
          type={'Mousename'}
          required
          focusBorderColor={'purple.500'}
        />
       
       </HStack>
       <HStack gap={10}>
       <Input
          placeholder={'Keyboard Name and ID'}
          type={'keyname'}
          value={keyboard}
          onChange={(e)=>setKeyboard(e.target.value)}
          required
          focusBorderColor={'purple.500'}
        />
        
       </HStack>
       <HStack gap={10}>
       <Input
          placeholder={'UPS Name and ID'}
          value={ups}
          onChange={(e)=>setUps(e.target.value)}
          type={'upsname'}
          required
          focusBorderColor={'purple.500'}
        />
       
       </HStack>
        <Button disabled={loading} colorScheme={'purple'} type={'submit'}>
          <Link >Submit</Link>
        </Button>
      </VStack>
    </form>
  </Container>
  )
}

export default Inventory