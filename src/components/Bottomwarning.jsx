import { Link } from "react-router-dom";
export default function BottomWarning({Warning,route,name})
{
    return <div className=" text-center">
    {Warning} have an account <Link className=" text-cyan-900" to={route}><u>{name}</u></Link>
    </div>
}