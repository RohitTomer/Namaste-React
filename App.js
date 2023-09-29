// const heading = React.createElement('h1', { id: "heading", xyz: "abc" }, "Hello world by react js by Akshay Saini");
// const box = ReactDOM.createRoot(document.getElementById("box"))
// box.render(heading)


/*
<div id ="parent">
    <div id ="child">
        <h1> I am h1 Tag</h>
        <h2> I am h1 Tag</h2>
    </div>
    <div id ="child2">
        <h1> I am h1 Tag</h>
        <h2> I am h1 Tag</h2>
    </div>
</div>



*/

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I am h3 tag"), React.createElement("h2", {}, "I am h4 tag")])

]);


// JSX

const box = ReactDOM.createRoot(document.getElementById("box"))
box.render(parent)