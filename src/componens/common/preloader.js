import React from "react"
import preloaders from "../../assets/loader/Spinner-1s-200px.svg"


let Preloader = (props) => {
    return (
        <div>
            <img src={preloaders} />
        </div>
    )
}

export default Preloader