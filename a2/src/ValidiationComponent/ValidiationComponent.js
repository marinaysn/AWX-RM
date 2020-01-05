import React from 'react'

const validiationComponent = (props) => {

    let msg ='';

    if (props.msg.length < 5 && props.msg.length > 0 ) {   
        msg = 'Text is too short'
    }
    else if (props.msg.length >= 5 && props.msg.length > 0 ) {
        msg='Text is long enough'
    }
    else 
    {
        msg = ''
    }

    return (
        

        <div>
            <p>{msg}</p>
        </div>
    )
}

export default validiationComponent
