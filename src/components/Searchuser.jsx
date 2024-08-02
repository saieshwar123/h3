import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Searchuser({FullName,firstchar,userid,fromid})
{
    const navigate=useNavigate();
    return <div className="flex flex-row justify-between"> 
        <div className="flex flex-row">
        <div class="rounded-full h-10 w-10 flex items-center justify-center bg-green-500  mr-2 font-bold">{firstchar}</div>
        {FullName}
        </div>
        <div>
            <Button title={"Send Money"} color={"black"} clickon={()=>{navigate("/transfer?fromid="+fromid+"&id=" + userid+ "&name=" + FullName)}}/>
        </div> 
    </div>
}

