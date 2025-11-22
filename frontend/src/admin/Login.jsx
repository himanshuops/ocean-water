import { Loader2 } from 'lucide-react';
import React, { useState } from "react";
import { Button } from '../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'sonner';



const Login = () => {  
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();  

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

        
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true)
            const res = await axios.post("http://localhost:8000/api/v1/admin/login", formData, {
                headers:{
                    "Content-Type":"application/json"
                }
            });
            if(res.data.success){
                navigate("/admin/dashbord")
                toast.success(res.data.message)
            }
            console.log(res.data);
            setLoading(false)
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message)
        }finally{
            setLoading(false)
        }
    };
  return (
    <>
      <div id='contact' className="w-full min-h-screen flex items-center bg- justify-center px-5 sm:px-10 md:px-20 py-10">
        <div className='flex items-center justify-center w-md bg-gray-400  rounded-lg p-7 '>
            <div className='bg-white/20 rounded-xl w-full h-full p-4 shadow-md shadow-zinc-200'>
               <h1 className='text-center font-semibold text-3xl pb-4'>Admin Signup</h1>
                <form onSubmit={handleSubmit} className='flex text-black flex-col items-center gap-3'>                     

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        className='border-2 border-gray-400 focus:outline-none focus:ring-0 rounded-md w-full text-xl px-3 py-1.5'
                    />
                    
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        className='border-2 border-gray-400 focus:outline-none focus:ring-0 rounded-md w-full text-xl px-3 py-1.5' 
                    />
                    {
                        loading ? <Button disabled className="w-full bg-blue-500 hover:bg-blue-700 my-4 "><Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please waite . . . </Button>:
                        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 cursor-pointer text-white my-4">Sign-In</Button>
                    }
                    <span className='text-sm'>Donn't have an account? <Link to="/admin/register" className='text-blue-600 hover:underline'>Sign up</Link></span>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
