import { useEffect, useState } from "react";
import { TiMediaRecordOutline } from "react-icons/ti";


const User = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(() => {
        // API Call
    //    const timer = setInterval(() => {
            console.log("NAMASTE REACT OP(Functional Component)");
    //     }, 1000);
    

        return () => {
            // clearInterval(timer);
            console.log("Namaste React OP Functional Component Unmounted");
        }
    }, []);


    return (
    <div className="user-card">
       <h1>Count : {count}</h1>
         <button onClick={() => setCount(count + 1)}>Increment Count</button>
       <h1>Count2 : {count2}</h1>
       <h2>Name: {name}</h2>
       <h3>Location: Mohali</h3>
       <h4>Contact: @_Ashishsingh_01</h4>
    </div>
    );
};

export default User;