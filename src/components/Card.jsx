import React from "react";
import logo from "../logo.svg"

const Card = ({name, email, id, dob}) => {
    // const {name, email, id, dob} = props;
    return(
        <div className="tc bg-lightest-blue hover-bg-light-yellow dib br3 pa3 ma2 grow shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?100x1\ 00`}/>
            <div>
                <h2 className="lh-title-ns" >{name}</h2>
                <h2 className="helvetica small-caps-ns">{dob}</h2>
                <p className="helvetica ">{email}</p>
            </div>
        </div>
    );
}

export default Card;