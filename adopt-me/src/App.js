const pet = ({name, animal, breed}) => {
    return React.createElement("div",{},[
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]);
};


const App = () => {
    return React.createElement("div", { id: "something-important"}, [
        React.createElement("h1",{},"Adopt Me!"),
        React.createElement(pet, {
            name: "Gabbar", 
            animal: "Dog", 
            breed: "German Shephard"
        }),
        React.createElement(pet, {
            name: "Doing", 
            animal: "cat", 
            breed: "mixed"
        }),
        React.createElement(pet, {
            name: "Toing", 
            animal: "Pig", 
            breed: "mixed"
        })
        ]);
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);