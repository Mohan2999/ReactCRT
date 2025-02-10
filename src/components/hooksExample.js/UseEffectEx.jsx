import React,{useEffect,useState} from 'react'

const UseeffectEx = () => {
    /* const[count,setCount]=useState(0);
    useEffect(()=>{
    setTimeout(()=>{
        setCount(1000);
    },5000);
    document.title=count;
},[count]) */
    //!api fetching
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json()
            .then(data => {
                setUsers(data);
            }))
            
            .catch(err => console.log(err));
    }, []);

    return (
        <div classname='parent'>
            {users.map((user, index) => (
                //<div key={index}>
                <React.Fragment>
                    <h1>{user.name}</h1>
                    <h3>{user.email}</h3>
                </React.Fragment>
                //</div>
                
                
            ))}
        </div>
    );
};

export default UseeffectEx;
