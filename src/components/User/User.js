import {Link} from "react-router-dom";

export default function User ({item,url}) {
    let path = `${url}/${item.id}`
    return (
         <div>
             {item.id} - {item.first_name} - {item.last_name} - <Link to={{pathname:path, state:item}}>User Details</Link>


         </div>
    )
}