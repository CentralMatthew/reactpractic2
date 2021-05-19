export default function UserDetails({location:{state}}) {
    let {id,email,avatar,first_name, last_name} = state
    return (
        <div>
            <img src={avatar} alt=""/>
            <hr/>
            {id} - {first_name} - {last_name} - {email}

        </div>
    )
}