import React, {useState, useEffect} from "react";
function App() {
    const [dogpic, setDogPic] = useState(null); 
useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data)=> {
        setDogPic(data.message)
    });
}, []);
    if (!dogpic) return <p>Loading...</p>
return <img alt="A Random Dog." src={dogpic}/>
// Use the useEffect hook in the App component. 
    //Inside the callback for useEffect, send a fetch request to , a free API that returns a random image of a dog.
// Display a <p> tag with the text of "Loading..." when the component is first rendered
// After receiving a response from the API, show the dog image in an <img> tag, 
    //with the alt attribute set to "A Random Dog".
}

export default App; 