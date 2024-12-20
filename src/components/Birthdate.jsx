import { useRef, useState } from "react"
import '../style/signup.scss'

export default function BirthDateInput(props){
    const inputElement = useRef(null)
        const [error, setError] = useState(false)

        const inputHandler = event => {
            const value = inputElement.current.value
            const isValid = phoneValidate(value)
            if (!isValid) {
                setError('Birthdate Is Not Valid!')
            } else {
                setError(false)
            }
        }

    return(
        <>
            <input type="date"  placeholder="Birthdate" className="BirthdateInput" />
            {error && <p className="error">{error}</p>}
        </>
    )
}