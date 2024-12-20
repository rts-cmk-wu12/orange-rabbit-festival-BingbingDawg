import { useRef, useState } from "react"

function PhoneInput(props) {
    const inputElement = useRef(null)
    const [error, setError] = useState(false)

    const phoneValidate = (value) => {
        const phoneRegex = /^[0-9]{10}$/
        return phoneRegex.test(value)
    }

    const inputHandler = event => {
        const value = inputElement.current.value
        const isValid = phoneValidate(value)
        if (!isValid) {
            setError('Phone number is not valid!')
        } else {
            setError(false)
        }
    }

    return (
        <>
            <input ref={inputElement} onInput={inputHandler} placeholder="Phone" type="tel" name='phone' {...props} />
            {error && <p className="error">{error}</p>}
        </>

    );
}

export default PhoneInput;

