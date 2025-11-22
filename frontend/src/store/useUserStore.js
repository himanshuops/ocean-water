import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { create } from "zustand";
import {createJSONStorage, persist} from 'zustand/middleware'

const API_END_POINT = 'http://localhost:8000/api/v1/admin'
axios.defaults.withCredentials = true;

export const useUserStore = create()(persist((set) => ({
    user: null,
    logding:false,

    // signup api implementation

    signup: async (formData) => {
        try{
            set({logding:true});
            const response = await axios.post(`${API_END_POINT}/signup`, formData, {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' }
            })
            
            if(response.data.success){
                toast.success(response.data.message)
                set({logding:false, user:response.data.user, isAuthenticated:true})
            }
        }catch(error){
            toast.error(error.response.data.message)
            set({logding:false})
        }
        
    },
    login: async (input) => {
        try{
            set({logding:true});
            const response = await axios.post(`${API_END_POINT}/login`,input,{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            if(response.data.success){
                toast.success(response.data.message)
                set({logding:false, user:response.data.user, isAuthenticated:true})
            }
        }catch(error){
            toast.error(error.response.data.message)
            set({logding:false})
        }
        
    },
    logout: async () => {
        try{
            set({logding:true});
            const response = await axios.post(`${API_END_POINT}/logout`)
            if(response.data.success){
                toast.success(response.data.message)
                set({logding:false, user:null, isAuthenticated:false})
            }
        }catch(error){
            toast.error(error.response.data.message)
            set({logding:false})
        }

        // const navigate = useNavigate();
        //     logout().then(() => {
        //     navigate('/login');
        // });
    },
    
}),
{
    name:'user-name',
    storage: createJSONStorage(() => localStorage)
}
))