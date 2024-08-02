import { useSearchParams } from "react-router-dom";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Inputtype from "../components/Inputtype";
import Users from "../components/Users";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard()
{
  const [searchParams, setSearchParams] = useSearchParams();
  const [balance,setBalance]=useState("");

  async function getBalance()
{
  const response=await axios.get("http://localhost:3000/api/v1/account/balance?id="+searchParams.get("id"))
  setBalance(response.data.balance);
}

  useEffect(()=>{
   getBalance();
  },[balance])

    return <div>
      <Appbar AppName={"Payments App"} UserName={"User"} UserSymbol={"U"}/>
      <br/>
      <Balance Amount={balance}/>
      <Users fromuserid={searchParams.get("id")}/>
    </div>  
}

// 
export default Dashboard;