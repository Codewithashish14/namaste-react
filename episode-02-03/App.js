import React from "react";
import ReactDOM from "react-dom/client";


// React Element
//React.createElement =>JS object => Rendered onto the DOM => it will become HTML Element
const heading = React.createElement("h1",
    { id: "heading" },
    "Namaste React"
);
console.log(heading);

// JSX(transpiled by "PARCEL" before it reaches the JS engine And that responsility is managed by Babel) => JS syntax which is easier to create React Elements
// JSX is not a part of React, it is a part of the React ecosystem. JSX is a syntactic sugar for React.createElement() function. JSX is not HTML, it is a syntax extension for JavaScript. JSX is not mandatory to use React, but it is recommended to use JSX because it makes the code easier to read and write.


// JSX => React.createElement => React Element - (JS object) => Rendered onto the DOM => it will become HTML Element

const jsxHeading = (
    <h1 id="jsx-heading" className="jsx-heading" tabIndex="1">
        Namaste React using JSX
    </h1>
);

// if you want to write JSX in multiple lines, you have to wrap it in parentheses.
// JSX is not HTML inside JS. It is HTML/XML like syntax.
// If you have to give an attributes to JSX you have to use Camel Case.
// Homework - Explore various Attributs of various tags.
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Heading);
root.render(jsxHeading);




// React Component
// 1. Class Based Component - OLD way of writing React Components(JA class are being used)
// 2. Functional Component - NEW way of writing React Components(JA functions are being used)

// React Functional Component

const HeadingComponent = () => {
    return (
        <h1 id="heading-component" className="heading-component" tabIndex="2">
            Namaste React using Functional Component
        </h1>
    );
};

// It can also be written as:

const HeadingComponent2 = () => (
    <h1 id="heading-component-2" className="heading-component-2" tabIndex="3">
        Namaste React using Functional Component 2
    </h1>
);

// And now finally it can be written as:

const HeadingComponent3 = () => <h1 id="heading-component-3" className="heading-component-3">Namaste React using Functional Component 3</h1>;

// Component Composition - A component can be used inside another component. This is called Component Composition. It is a way to reuse components. It is a way to create a hierarchy of components. It is a way to create a tree of components. It is a way to create a parent-child relationship between components.

//{} <= we can inject any js code inside this {}.

const number = 10000;


const HeadingComponent4 = () => (
    <div id="container">
        <Title />
        <Title></Title>
        {title}
        <h2>{number}</h2>
        <h1 id="heading-component-4" className="heading-component-4">
            Namaste React using Functional Component 4
        </h1>
    </div>
)

root.render(<HeadingComponent4 />);

// Title Component
const Title = () => (
    <h1 id="title" className="title">
        Namaste React using Title Component
    </h1>
);



// React element inside another React element

const elem = (
    <span id="elem" className="elem">
         React element inside another React element
    </span>
);




// React element inside component

const title = (
    <div id="title-container">
        <h1 id="title" className="title">
            {elem}
            Namaste React using Title Component
        </h1>
    </div>
);