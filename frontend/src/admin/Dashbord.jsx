import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Dashbord = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/contact/", {
          withCredentials: true, 
        });
        if(res.data.success){
          toast.success(res.data.message)
        }
        setMessages(res.data.data || []);
      } catch (err) {
        console.error("Error fetching messages:", err);
        toast.error("Failed to load messages!");
      } finally {
      setLoading(false);
      }

    };
    fetchMessages();
  }, []);

  const todoDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:8000/api/v1/contact/delete/${id}`)
            setMessages(messages.filter((t)=>t._id!==id))
        }catch(error){
          toast.error("Failed to delete messages!");
        }
  }

  const logout = async () => {
        try{
            await axios.get('http://localhost:8000/api/v1/admin/logout');
            toast.success("User logged out successfully");
            navigate("/admin/login")
            localStorage.removeItem("token");
        }catch(error){
            toast.error("Failed to logout contact ")
        }
  }
 
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
         Admin Dashboard
      </h1>

      {loading ? (
        <div className="text-center text-gray-500">Loading messages...</div>
      ) : messages.length === 0 ? (
        <div className="text-center text-gray-500">No messages found.</div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Message</th>
                <th className="py-3 px-4 text-left">Contact</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 text-right">Completed</th>
                <th className="py-3 text-center"> Delete </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-4">{msg.username}</td>
                  <td className="py-3 px-4">{msg.email}</td>
                  <td className="py-3 px-4">{msg.message}</td>
                  <td className="py-3 px-4">{msg.phone}</td>
                  <td className="py-3 px-4 text-gray-500">
                    {new Date(msg.createdAt).toLocaleString()}
                  </td>
                  <td className="text-right"><input type="checkbox" className="scale-150"/></td>
                  <td className="text-center">
                    <button onClick={()=>todoDelete(msg._id)} className='bg-red-500 rounded-full text-white p-1 border-none hover:bg-red-700 duration-300 cursor-pointer '><AiTwotoneDelete size={20}/></button>
                  </td>
                </tr>
                
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button onClick={()=>logout()} className='bg-red-500 hover:bg-red-700 w-full rounded-md py-1 duration-300 text-xl cursor-pointer'>Logout</button>
    </div>
  );
}


export default Dashbord
