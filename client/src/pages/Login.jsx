import React from 'react';
import '../styles/login.css';
import { Auth, } from '@supabase/auth-ui-react'
import { supabase } from '../lib/client';
import Tilt from 'react-parallax-tilt';


function Login(){


  return (
    <div className='world h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center'>
   <Tilt>
   <div className=' container h-97 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm'>
            <div className='text-white text-md tracking-wider'>MaadSounds</div>
        <div className='text-white text-2xl tracking-wider text-center'>Login form </div>
<Auth
    supabaseClient={supabase}
     providers={['google']}
    appearance={{ className: {
      container: 'h-full flex flex-col justify-evenly',
      button: 'cursor-pointer bg-green-500',
     }
    }}
  />
  </div>
  </Tilt>
  </div>
  )
}

export default Login; 


/*      <div className='h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center'>
<Tilt>
     <div className=' container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm'>
      { !session ? <>
<form className='h-full flex flex-col justify-evenly items-center'>
    <div className='text-white text-2xl tracking-wider'>Login form </div>
    <input type='text' placeholder='username' className='text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide' onChange={(e) => setEmail(e)}/>
    <input type='password' placeholder='password' className='text-white bg-transparent focus: outline-none border border-r-0 border-t-0 border-l-0 tracking-wide' onChange={(e) => setPassword(e)} autoComplete="off"/>
    <input type='Submit' placeholder='' className='cursor-pointer px-5 py-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80' onClick={Login}/>
</form>
</> : <>
<p>Welcome back {session.user.email}</p>
<button onClick={Logout}>Logout</button>
</>
}
        </div>
</Tilt>

    </div>  */ 