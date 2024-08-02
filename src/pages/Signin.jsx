import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputtype from "../components/Inputtype";

import Subheading from "../components/Subheading";
import BottomWarning from "../components/Bottomwarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      {" "}
      <div className="h-screen flex justify-center items-center bg-gray-500">
        <div className="w-80 h-96 border border-black bg-white m-10 rounded-md p-5 ">
          <Heading title={"Sign In"} />
          <Subheading
            subtitle={"Enter your credientials to access ypur account"}
          />
          <br />

          <Inputtype type={"text"} label={"Email"} onchange={setuserName} />

          <Inputtype
            type={"password"}
            label={"Password"}
            onchange={setPassword}
          />
          <br />
          <div className="flex justify-center">
            <Button
              title={"Sign in"}
              color={"black"}
              hover={"gray-500"}
              clickon={async () => {
                
                  const response = await axios.post(
                    "http://localhost:3000/api/v1/users/signin",
                    {
                      username: userName,
                      password,
                    }
                  );

                  localStorage.setItem(
                    "token",
                    "Bearer " + response.data.jwt
                  );
                
        
  
                const resp = await axios.get(
                  "http://localhost:3000/api/v1/users/getuserid",
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                

                navigate("/dashboard?id=" + resp.data.userid);

    
              }}
            />
          </div>
          <BottomWarning Warning={"Don't"} name={"Signup"} route={"/signup"} />
        </div>
      </div>
    </div>
  );
}
export default Signin;
