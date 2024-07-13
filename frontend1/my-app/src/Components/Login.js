import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState,useContext } from 'react';
import { Link,Navigate ,useNavigate} from 'react-router-dom';
import { Context } from '../index';
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  const {isAuthenticated,setIsAuthenticated,loading,setLoading,setUserr} = useContext(Context);

  const submitHandler = async(e)=>{
    e.preventDefault();
    console.log(email,password)
    setLoading(true)

    try {
       const data = await axios.post(`http://localhost:5000/login`,{
           email,password,
       },{
           headers:{
               "Content-Type":"application/json"
           },
           withCredentials:true
           
       })

       toast.success(data.data.message)
       setIsAuthenticated(true)
       setLoading(false)
      //  setUserr(data.user)
       navigate('/',{ state: { reload: true } })
       
    } catch (error) {
       console.log(error)
       toast.error(error.response.data.message)// we the message that we have written in the backend
       setIsAuthenticated(false)
       setLoading(false)
       
    }
  }

//   if(isAuthenticated) { 
//  return <Navigate to={"/"} /> 
//   }


  return (
    <Container  h={['80vh','100vh']} p={'16'}>
        <form onSubmit={submitHandler}>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading>Welcome Back</Heading>
  
            <Input
              placeholder={'Email'}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Password'}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type={'password'}
              required
              focusBorderColor={'purple.500'}
            />
{/*   
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/forgetpassword'}>Forget Password?</Link>
            </Button> */}
  
            <Button disabled={loading} colorScheme={'purple'} type={'submit'}>
              Log In
            </Button>
  
            <Text textAlign={'right'}>
              New User?{' '}
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/register'}>Sign Up</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
  )
}

export default Login