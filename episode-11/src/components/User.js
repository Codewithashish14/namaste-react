import { useEffect, useState } from "react";


const User = ({ name }) => {
    const [count, setCount] = useState(0);

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
        <div className="w-60 p-4 m-4 border border-solid border-black rounded-lg bg-gray-100 hover:bg-gray-200">
            <h1>Count : {count}</h1>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => setCount(count + 1)}>Increment Count</button>
            <h2 className="font-bold">Name: {name}</h2>
            <h3>Location: Mohali</h3>
            <h4>Contact: @_Ashishsingh_01</h4>
        </div>
    );
};

export default User;