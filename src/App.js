import './App.css';
import Reset from './Component/reset';
import Login from './Component/login';
import { useState } from 'react'; 

function App() {
  const [form,setForm]=useState('login');

  return (
    <>
      <div className='app'>
        <h1>Welcome</h1>
        {(form === 'login')?<Login/>:<Reset/>}
        <button onClick={()=>{setForm((form === 'login')?'reset':'login')}} >
          {(form === 'login')?"Forgot Password":"Back to Login"}
        </button>
      </div>
    </>
  );
}

export default App;
