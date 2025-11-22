import { Loader2 } from 'lucide-react';
import React, { useState } from "react";
import { Button } from '../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'sonner';


const Signup = () => {  
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();  //signup hone ke baad dusre page pe bhejane ke liye

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true)
            const res = await axios.post("http://localhost:8000/api/v1/admin/register", formData, {
                headers:{
                    "Content-Type":"application/json"
                }
            });
            if(res.data.success){
                navigate("/admin/login")
                toast.success(res.data.message)
            }
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
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleChange}
                        className='border-2 border-gray-400 focus:outline-none focus:ring-0 rounded-md w-full text-xl px-3 py-1.5' 
                    />

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
                        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 cursor-pointer text-white my-4">Sign-Up</Button>
                    }
                    <span className='text-sm'>Already have an account? <Link to="/admin/login" className='text-blue-600 hover:underline'>Login</Link></span>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup




// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//         const res = await axios.post("http://localhost:8000/api/v1/admin/register", formData);
//         alert("User registered successfully!");
//         console.log(res.data);
//     } catch (err) {
//         console.error(err);
//         alert("Registration failed!");
//     }
// };

//     // try {
//     // //   const response = await fetch("http://localhost:8000/api/v1/admin/register", {
//     // //     method: "POST",
//     // //     headers: {
//     // //       "Content-Type": "application/json"
//     // //     },
//     // //     body: JSON.stringify(formData)
//     // //   });

//     //   const data = await response.json();

//     //   if (response.ok) {
//     //     alert("User registered successfully!");
//     //     console.log("Server response:", data);
//     //   } else {
//     //     alert(`Error: ${data.message || "Registration failed"}`);
//     //   }
//     // } catch (error) {
//     //   console.error("Error:", error);
//     //   alert("Something went wrong!");
//     // }
// //   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Enter name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Enter email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Enter password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default Signup
