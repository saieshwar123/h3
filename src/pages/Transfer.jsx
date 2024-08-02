import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputtype from "../components/Inputtype";
import { useState } from "react";
import axios from "axios";


function Transfer()
{
    const [searchParams, setSearchParams] = useSearchParams();
    const [amount,setAmount]=useState(0);
    const name=searchParams.get("name");
    const id=searchParams.get("id");
    const fromid=searchParams.get("fromid");
    return <div className="h-screen flex justify-center items-center bg-slate-100">
        <div className="w-80 h-96 border  bg-white m-10 rounded-md p-5 shadow-lg ">

            <div>
                <Heading title={"Send Money"}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="flex flex-row">
            <div class="rounded-full h-10 w-10 flex items-center justify-center bg-green-500  mr-2">{name.charAt(0).toUpperCase()}</div>
               <div className="text-2xl font-bold">{name.charAt(0).toUpperCase()+name.substring(1)}</div>  
            </div>
            <div className="font-semibold m-2">
                Amount (in Rs)
            </div>
            <div>
                <Inputtype type={"number"} placeholder={"Enter Amount"} onchange={setAmount}/>
            </div>
            <br/>
            <Button title={"Initiate Transfer"} color={"green-500"} hover={'gray-500'} clickon={async ()=>{
              const response=await axios.post("http://localhost:3000/api/v1/account/transfer?id="+fromid,{
                    to:id,
                    amount
              }) 
            }}/>
        </div>
        </div>

}
export default Transfer;