
import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputtype from "../components/Inputtype";
import Subheading from "../components/Subheading";
import { useState } from "react";
import axios from "axios";

import BottomWarning from "../components/Bottomwarning";
import { useNavigate } from "react-router-dom";
function Signup()
{
    const [firstName,setfirstName]=useState("");
    const [lastName,setlastName]=useState("");
    const [userName,setuserName]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    return (
        <div>
      {" "}
      <div className="h-screen flex justify-center items-center bg-gray-500">
        <div className="w-80 h-100 border border-black bg-white m-10 rounded-md p-5 ">
          <Heading title={"Sign Up"} />
          <Subheading
            subtitle={"Enter your information to create your account"}
          />
          <br/>
          <Inputtype type={"text"} onchange={setfirstName} label={"First Name"} />
          <Inputtype type={"text"} onchange={setlastName} label={"Last Name"}/>
          <Inputtype type={"text"} onchange={setuserName} label={"Email"}/>
          <Inputtype type={"password"} onchange={setPassword} label={"Password"}/>
          <br/>
          <div className="flex justify-center">
          <Button  title={"Sign Up"} color={"black"} hover={"gray-500"} clickon={async ()=>{
            
            const response=await axios.post("http://localhost:3000/api/v1/users/signup",{
              username:userName,
              password,
              firstName,
              lastName
            })
            localStorage.setItem("token","Bearer "+response.data.jwt)
            navigate('/signup')
            alert("sucess");
          }} />
          </div>
          <BottomWarning Warning={"Already"} name={"Signin"} route={"/signin"}/>
        </div> 
      </div>
    </div>
    )
}
export default Signup