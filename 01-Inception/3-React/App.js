const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I'm h1"),
    React.createElement("h2", {}, "Hello I'm h2"),
  ])
);

const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I'm h1"),
    React.createElement("h2", {}, "Hello I'm h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h4", {}, "Hello I'm h4"),
    React.createElement("p", {}, "Hello I'm p"),
  ]),
]);

console.log(heading);

console.log(parent);

console.log(parent2);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
