import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));


// Title Component
const Title = () => (
    <h1 id="title" className="title">
        Namaste React using Title Component
    </h1>
);


// Since functional components are just a javascript function so we can call it like this:
const HeadingComponent4 = () => (
    <div id="container">
        {Title()}
        {55576 + 876567}
        <h1 id="heading-component-4" className="heading-component-4">
            Namaste React using Functional Component 4
        </h1>
    </div>
)

root.render(<HeadingComponent4 />);