// create your App component here
import React, { useEffect, useState } from "react";


const App = () => {

    const [dogLink, setDogLink] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            setDogLink(data.message)
            setIsLoading(false)
        })
    }, [])

    return (
        <div>
            {isLoading ? <p>Loading...</p> : <img src={dogLink} alt={"A Random Dog"} />}
        </div>
    );
}
 
export default App;