import React from "react";
import Button from "./Button"

const App = () => {
    return (
        <div>
            <h1 className="title"> Hello World</h1>
            <section className="container">
                <h2 className="section-title"> My favorite fruits</h2>
                <Button buttonText=" Watermelon" />
                <Button buttonText=" Strawberries" />
                <Button buttonText=" Grape" />

            </section>
        </div>
    )
        
    
}

export default App;