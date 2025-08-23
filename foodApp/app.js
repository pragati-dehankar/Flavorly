//nested structure in react.
const parent=React.createElement("div",
{id:"parent"},
[React.createElement("div",
{id:"child"},
[React.createElement("h1",{},"I am an h1 tag"),
React.createElement("h2",{},"I am an h2 tag")]),

React.createElement("div",
{id:"child2"},
[React.createElement("h1",{},"I am h1"),
React.createElement("h2",{},"I am h2")])
])

const heading=React.createElement("h1",
{
id:'heading',
xyz: "abc"
},
"Hello World from React");

//console.log(heading);
console.log(parent);

   const root=ReactDOM.createRoot(document.getElementById("root"));

   //root.render(heading);
   root.render(parent);