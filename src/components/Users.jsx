import { useEffect, useState } from "react"
import Inputtype from "./Inputtype"
import axios from "axios"
import Searchuser from "./Searchuser";
export default function Users({fromuserid})
{
    const [users,setUsers]=useState([])
    const [filter,setFilter]=useState("");
    async function useEffectdata()
    {
    const response=await axios.get("http://localhost:3000/api/v1/users/bulk?filter="+filter);
    // setUsers(response.data)
    const narr=response.data;
    console.log(fromuserid)
    for(let i=0;i<narr.length;i++)
        {
        console.log(narr[i])
        const id=narr[i]._id;
        if(id===(fromuserid))
        {
            narr.splice(i,1);
            break;  
        }
        }
    setUsers(narr);
    }
    useEffect(()=>{
        useEffectdata();
    },[filter])
    
    return <div className="m-5">
    <div className="font-bold text-2xl">
    Users
    </div>
    <Inputtype type={"text"} placeholder={"Search users..."} onchange={setFilter}/>
    <div>
        <div>{
            users.map((user)=>{
             return   <div className="m-2"> <Searchuser fromid={fromuserid} userid={user._id} FullName={user.firstName+" "+user.lastName} firstchar={user.firstName.charAt(0).toUpperCase()}/>
                        </div>
            })
        }
        </div>
    </div>
  </div>
}

