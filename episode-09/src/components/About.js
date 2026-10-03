import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// import { Component } from "react";

class About extends React.Component {
// class About extends Component {

constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent ComponentDidMount");
        // API Call
    }

    render() {
        console.log("Parent Render")
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React web Series</h2>
                <User name={"Ashish (function)"} />
                <UserClass name={"Ashish (class)"} location={"Mohali (class)"} />
                {/* <UserClass name={"Alice (class)"} location={"USA (class)"} /> */}
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React web Series</h2>
//             <User name={"Ashish (function)"} />
//             <UserClass name={"Ashish (class)"} location={"Mohali (class)"} />
//         </div>
//     );
// };

export default About;