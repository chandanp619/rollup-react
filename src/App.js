import React, {useState, useEffect} from "react";

const App = ()=> {
    const [name,setName] = useState('');
    useEffect(()=>{
        setName("Chandan Pradhan")
    },[]);

    return (<div>
        <h2>I am Rollup React</h2>
        <p>Developed By {name}</p>
        {process.env.REACT_APP_API_ENDPOINT}
        </div>)
}
export default App;