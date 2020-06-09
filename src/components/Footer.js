import React from 'react';


var style = {
    backgroundColor: "#373c42",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%",
    "font-size": "15px",
    color:"white"
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '50px',
  width: '100%',
}

function Footer({ text }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style} bg="dark" variant="dark">
                { text }
            </div>
        </div>
    )
}

export default Footer