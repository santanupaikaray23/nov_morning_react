import React from 'react';

const Footer = (props) => {
    return(
        <footer>
            <hr/>
            <center>
                <h2>Developer Funnel {props.year} {props.month}</h2>
            </center>
        </footer>
    )
}

export default Footer;