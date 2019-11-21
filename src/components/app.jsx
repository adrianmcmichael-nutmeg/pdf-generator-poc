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
               <hr/>
               <table>
                   <tr>
                       <td>Some thing:</td>
                       <td>3000%</td>
                   </tr>
                   <tr>
                       <td>Something else</td>
                       <td>-10%</td>
                   </tr>
               </table>
           </Layout>
        );
    }
}
export default App;