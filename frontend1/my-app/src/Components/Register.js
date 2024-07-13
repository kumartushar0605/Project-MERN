import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState,useContext } from 'react';
import { Link ,Navigate} from 'react-router-dom';
import { Context } from '../index';
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const Register = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [dob,setDob] = useState('');
  const [dor,setDor] = useState('');
  const [doj,setDoj] = useState('');
  const [Addres,setAddres] = useState();

  const {isAuthenticated,setIsAuthenticated,loading,setLoading} = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    console.log("hi")
    try {
      const { data } = await axios.post(
        `http://localhost:5000/register`,
        {
          name,
          email,
          password,
          dob,
          doj,
          dor,
          Addres
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false)
      navigate('/in',{ state: { reload: true } })
      // if(isAuthenticated) return <Navigate to={"/inventory"}/>
    } catch (error) {
        console.log(error)
      toast.error("error");
      setIsAuthenticated(false);
      setLoading(false)
    }
  };

// if(isAuthenticated) return <Navigate to={'/in'}/>


  return (
    
    <Container  h={['80vh','100vh']} p={'16'}>
    <form onSubmit={handleSubmit}>
      <VStack
        alignItems={'stretch'}
        spacing={'8'}
        w={['full', '96']}
        m={'auto'}
        my={'2'}
      >
        <Heading >Welcome </Heading>

       <HStack gap={10}>
       <Input
          placeholder={'Email'}
          type={'email'}
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          focusBorderColor={'purple.500'}
        />
        <Input
          placeholder={'Password'}
          type={'password'}
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          focusBorderColor={'purple.500'}
        />
       </HStack>
       <HStack gap={10}>
       <Input
          placeholder={'Name'}
          value={name}
          onChange={(e)=>setName(e.target.value)}
          type={'name'}
          required
          focusBorderColor={'purple.500'}
        />
        <Input
          placeholder={'Date of birth'}
          value={dob}
          onChange={(e)=>setDob(e.target.value)}
          type={'dob'}
          required
          focusBorderColor={'purple.500'}
        />
       </HStack>
       <HStack gap={10}>
       <Input
          placeholder={'Date of Joining'}
          value={doj}
          onChange={(e)=>setDoj(e.target.value)}
          type={'doj'}
          required
          focusBorderColor={'purple.500'}
        />
        <Input
          placeholder={'Date of retirement'}
          value={dor}
          onChange={(e)=>setDor(e.target.value)}
          type={'dor'}
          required
          focusBorderColor={'purple.500'}
        />
       </HStack>
       <Input
          placeholder={'Addres'}
          type={'addres'}
          value={Addres}
          onChange={(e)=>setAddres(e.target.value)}
          required
          focusBorderColor={'purple.500'}
        />

        {/* <Button variant={'link'} alignSelf={'flex-end'}>
          <Link to={'/forgetpassword'}>Forget Password?</Link>
        </Button> */}

        <Button  disabled={loading}  colorScheme={'purple'} type={'submit'}>
          Register
        </Button>

        <Text textAlign={'right'}>
          Already Signed Up?{' '}
          <Button variant={'link'} colorScheme={'purple'}>
            <Link to={'/login'}>Sign In</Link>
          </Button>
        </Text>
      </VStack>
    </form>
  </Container>
  )
}

export default Register