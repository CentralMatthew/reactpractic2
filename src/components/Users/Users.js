import {useEffect, useState} from "react";
import User from "../User/User";
import {Link} from "react-router-dom";
import {MyContext} from "../Routers/Routers";

const Users = ({match:{url},location:{search}}) => {
    console.log(search)
    // let {match:{location:{state},match:{url}}} = props
    const [users, setUsers] = useState([]);
    let [pageNum, setPageNum] = useState(1);
    const backPage = (pageNum) => {
        --pageNum
        if (pageNum >= 1) {
            return setPageNum(pageNum)
        }
    }
    const nextPage = (pageNum) => {
        ++pageNum
        if (pageNum <= 2) {
            return setPageNum(pageNum)
        }
    }

    const fetchData = async () => {
        const resp = await fetch('https://reqres.in/api/users?page=' + pageNum);
        const json = await resp.json();
        setUsers(json.data)
    }

    useEffect(() => {
        fetchData();
    }, [pageNum])

    return (
        <div>
            {users.map(value => <User key={value.id} item={value} url={url}/>)}
            <Link to={{pathname: `users`, search:`page=2`}}>
            <button onClick={() => nextPage(pageNum)}>+</button>
            </Link>

            <Link to={{pathname: `users`, search:`page=1`}}>
                <button onClick={() => backPage(pageNum)}>-</button>
            </Link>

        </div>
    )
}


export default Users;


