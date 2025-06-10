import React, { useState ,useContext} from 'react'
import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link,Navigate, useNavigate } from 'react-router-dom';
import { Context } from '../index';
import toast from "react-hot-toast";
import axios from "axios";

const Report = () => {
  const[Issue,setIssue] = useState('');
  const[datee,setDate] = useState('');
  const navigate = useNavigate();
  const {loading,setLoading,setUserr,userr} = useContext(Context);


  const submitHandler = async(e)=>{
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

    e.preventDefault();
    setLoading(true)
    console.log(userr)
    const name = userr.name;
    const roomNo = userr.roomNo;
    const systemNo= userr.systemNo;
    const Moniter = userr.Moniter;
    const keyboard  = userr.keyboard;
    const Mouse = userr.Mouse;
    const ups = userr.ups;


    try {
       const data = await axios.post(`${apiBaseUrl}/report`,{
           name,roomNo,systemNo,Moniter,keyboard,Mouse,ups,Issue,datee
          
       },{
           headers:{
               "Content-Type":"application/json"
           },
           withCredentials:true
           
       })

       toast.success(data.data.message)
       setLoading(false)
       setDate('');
       setIssue('');
       
       
    } catch (error) {
       console.log(error)
       toast.error(error.response.data.message)
       setLoading(false)
       
    }
  }

  return (
    <Container  h={['80vh','100vh']} p={'16'}>
        <form onSubmit={submitHandler}>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'1'}
          >
            <Heading>Report</Heading>

            <Input
            height={100}
            w={380}
            value={Issue}
          onChange={(e)=>setIssue(e.target.value)}
              placeholder={'Enter the Issue'}
              type={'issue'}
              required
              focusBorderColor={'purple.500'}
            />
{/*   
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/forgetpassword'}>Forget Password?</Link>
            </Button> */}
         <Input
          placeholder={'Enter the date - DD/MM/YYYY'}
          type={'Idate'}
          value={datee}
          onChange={(e)=>setDate(e.target.value)}
          required
          focusBorderColor={'purple.500'}
        />
        

            <Button disabled={loading} colorScheme={'purple'} type={'submit'}>
              Submit
            </Button>
            
          </VStack>
        </form>
      </Container>
  )
}

export default Report