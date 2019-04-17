import React from "react";
import "../assests/sass/main.scss";

// Root structure
const App = (props) => (
    <div className="row mt-5">
        { props.children }
    </div>
);

export default App;