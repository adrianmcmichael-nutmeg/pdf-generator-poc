import React from "react";
import Layout from "./Layout";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <Layout>
               <img src={"http://placekitten.com/200/300"} alt={"kitten!"}/>
               <img src={"http://placekitten.com/200/300"} alt={"kitten!"}/>
               <img src={"http://placekitten.com/200/300"} alt={"kitten!"}/>
           </Layout>
        );
    }
}
export default App;