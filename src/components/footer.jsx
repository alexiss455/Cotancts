import React from "react";
import "../index.css"



export default function footer(){
    const year = new Date();
    return(
        <footer className="footer">
            <div>
                Copyright {year.getFullYear()}
            </div>
        </footer>
    );
}