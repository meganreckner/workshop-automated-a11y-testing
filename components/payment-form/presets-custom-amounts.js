import React, {useRef, useState} from "react"

const PresetsCustomAmounts = ({amounts}) => {
    const customAmtRadio = useRef(null)
    
    const focusInCustomInput = () => {
        customAmtRadio.current.checked = true
    }
    return (
        <>
            {amounts.map((amount, index)=> {
                return <label key={index}>
                    <input
                        id={`amt_${amount}`}
                        name="amounts"
                        type="radio"
                        value={amount}
                    />
                    ${amount}
                </label>
            })}
            <label className="custom-radio-group">
                <input
                    id="amt_custom"
                    name="amounts"
                    onChange={(event) => handleChange(event)}
                    ref={customAmtRadio}
                    type="radio"
                    value="Custom"
                />
                <input
                    id="amt_custom_text"
                    onFocus={focusInCustomInput}
                    placeholder="$ Other amount"
                    type="text"
                />
            </label>
        </>
    )
}

export default PresetsCustomAmounts
