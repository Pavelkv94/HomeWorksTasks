import React from "react";

function Error404() {
    const errorMessage = {
        fontSize: '45px',
        color: 'white',
        fontWeight: 600
    }
    return (
        <div style={{ width: '100vw', height: '90vh', backgroundColor: 'red', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={errorMessage}>404</div>
            <div style={errorMessage}>Page not found!</div>
            <div style={errorMessage}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
