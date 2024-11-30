import React from "react";

export default props => {
    return(
        <div >                  
            <a className={props.pageactive}  href={props.link}>{props.page}</a>          
        </div>
    )
}