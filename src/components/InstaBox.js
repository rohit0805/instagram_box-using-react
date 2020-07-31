import React from 'react';

const InstaBox=(props)=>{
    return (
        <section className="box">
            {props.children}
        </section>
    );
}

export default InstaBox;