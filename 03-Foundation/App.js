import React from "react";
import ReactDOM from "react-dom/client";

// Nested header using React.createElement
const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "I am h1 from React.createElement"),
  React.createElement("h2", {}, "I am h2"),
  React.createElement("h3", {}, "I am h3"),
]);

// Nested element using JSX
const jsxheading = (
  <div className="title">
    <h1>I am JSX heading 1</h1>
    <h2>I am JSX heading 2</h2>
    <h3>I am JSX heading 3</h3>
  </div>
);

//Component Composition
const TitleComponent = () => {
  return <h1> I am a title</h1>;
};

//Functional Component
const FunctionalComponent = () => (
  <div className="title">
    {header}
    {jsxheading}
    <h1>I am H1 inside Functional component</h1>
    <h2>I am H2 inside Functional component</h2>
    <h3>I am H3 inside Functional component</h3>
    <TitleComponent />
    {TitleComponent()}
    {<TitleComponent />}
    {<TitleComponent> </TitleComponent>}
    <HeaderComponent />
  </div>
);

const Logo = () => (
  <img
    className="logo"
    src="https://cdn.shopify.com/s/files/1/0099/9562/files/Header-Icon-Logo.png?14597416339728210630"
  ></img>
);

const Searchbar = () => (
  <input className="searchbar" type="text" placeholder="Search here" />
);

const UserIcon = () => (
  <img
    className="usericon"
    src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
  ></img>
);

//Header component
const HeaderComponent = () => (
  <div id="header">
    <Logo />
    <Searchbar />
    <UserIcon />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponent />);
