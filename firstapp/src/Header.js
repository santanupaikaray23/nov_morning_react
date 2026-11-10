import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <div>
                <center>
                    <h1>React App</h1>

                </center>
                <hr/>
            </div>
        )
    }

}
// const Header = (props) => {
//     console.log(props)
//     return(
//         <>
//             <center>
//             <h2>Developer Funnel {props.day} </h2>
//             </center>
//               <hr/>
//         </>
//     )
// }
 export default Header;