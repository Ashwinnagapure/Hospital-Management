import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets' 
import { AppContext } from '../Context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
  const {backendUrl,token,setToken}=useContext(AppContext)
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === 'Sign Up') {
        const {data}=await axios.post(backendUrl + '/api/user/register',{name,password,email})
        if(data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }else{
          toast.error(data.message)
        }
      } else {
        const {data}=await axios.post(backendUrl + '/api/user/login',{password,email})
        if(data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }else{
          toast.error(data.message)
        }
      }
    } catch (error) {
       toast.error(error.message)
    }
    
  };

  return (

    <div className='flex gap-3 items-center justify-center '>
      {/* Left Side */}
      <div className='min-h-[90vh] flex '>
           <div className='flex flex-col gap-3 m-auto items-center p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
              <img className='h-76 w-80' src={assets.about_image} alt="" />
              <p className='text-center text-gray-700 font-semibold '>"Happiness is the highest <br />
              form of health"</p>
           </div>
      </div>

      {/* Right side */}
      <form
      className="min-h-[90vh] flex"
      onSubmit={onSubmitHandler}
    >
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
        <p>
          Please {state === 'Sign Up' ? 'Sign Up' : 'Log in'} to book
          appointments
        </p>
        {state === 'Sign Up' && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white w-full py-2 rounded-md text-base"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>
        {state === 'Sign Up' ? (
          <p>
            Already have an account?{' '}
            <span
              onClick={() => setState('Login')}
              className="text-blue-600 underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{' '}
            <span
              onClick={() => setState('Sign Up')}
              className="text-blue-600 underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>

    </div>
   
  );
};

export default Login;
