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
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button
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
                <h2>Name: {name}</h2>
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