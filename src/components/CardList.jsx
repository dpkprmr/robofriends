import React from 'react';
import Card from "./Card";

const CardList = ({robots}) => {
    if (false) {
        throw new Error('Nooo!!');
    }

    return (
        <div>
            {
                robots.map((user, i) => {
                return( <Card
                    key={i}
                    id={robots[i].id}
                    name={robots[i].name}
                    email={robots[i].email}
                    dob={robots[i].birthDate}
                    />
                );
                }
                )
            }
        </div>
    );
};

export default CardList;