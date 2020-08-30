import React, {useState} from 'react'

const Tooltip = props => {
    
    return (
        <article className='tooltip'>
            <section className='tooltip-img'>
                <img src={require('../images/historic-ship.png')} alt='Ship' />
            </section>
            <section className='tooltip-info'>
                <p>Here's where all the info goes</p>
            </section>
        </article>
    )
}

export default Tooltip