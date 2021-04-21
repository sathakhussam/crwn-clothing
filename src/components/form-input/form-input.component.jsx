import React from 'react';
import './form-input.styles.scss'

const Forminput = ({HandleChange, label, ...OtherInputprops}) => (
    <div className="group">
        <input className='form-input' onChange={HandleChange} {...OtherInputprops}/>
        {
            label ?
            <label className={`form-input-label ${OtherInputprops.value.length ? 'shrink' : ''}`}>{label}</label>
            : null
        }
    </div>    
)

export default Forminput