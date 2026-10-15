import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "Dummy Name",
                location: "Default Location",
            }
        };

        console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount() {

        this.timer = setInterval (() => {
            console.log("NAMASTE REACT OP")
        }, 1000);

        console.log(this.props.name + "ChildComponentDidMount");

        const data = await fetch("https://api.github.com/users/Codewithashish14");
        const json = await data.json();

        this.setState({
            userInfo: json
        });

        console.log(json);
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log("Component Will Unmount");
    }

    render() {
        // const { name, location } = this.props;
        const { count, count2 } = this.state;

        const { name, location, avatar_url } = this.state.userInfo;
        // debugger;

        console.log(this.props.name + "Child Render")

        return (
            <div className="w-60 p-4 m-4 border border-solid border-black rounded-lg bg-gray-100 hover:bg-gray-200">
                <h1>Count: {count}</h1>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => {
                        {/* Never update STATE VARIABLES directly */ }
                        this.setState({
                            count: this.state.count + 1,
                            count2: this.state.count2 + 1
                        });
                    }}
                >
                    Increment Count
                </button>
                <h1>Count2: {count2}</h1>
                <img src={avatar_url} alt="Avatar" />
                <h2 className="font-bold">Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @_Ashishsingh_01</h4>
            </div>
        );
    }
}

export default UserClass;


/***
 * 
 *  --- MOUNTING Lifecycle ---
 * 
 * Constructor
 * Render (Dummy)
 *    <HTML Dummy >
 * Component Did Mount
 *    <API Call>
 *    <this.setState> -> State Variable is updated
 * 
 *  --- UPDATING Lifecycle ---
 *    
 *      render(API data)
 *      <HTML with API data> -> User sees the updated data
 *      Component Did Update
 * 
 */