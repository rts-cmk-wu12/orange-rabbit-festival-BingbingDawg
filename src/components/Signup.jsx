import { useEffect, useRef, useState } from 'react';
import '../style/signup.scss'
import BirthdateInput from "./Birthdate";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";

export default function SignUp() {
    const formElement = useRef(null)
    const [user, setUser] = useState({})

    useEffect(() => {
        const userToString = JSON.stringify(user)

        console.log(userToString)
        localStorage.setItem('user', userToString)
    }, [user])

    function submitHandler(event) {
        event.preventDefault()
    

        const data = new FormData(formElement.current)
        const dataObject = Object.fromEntries(data.entries())

        setUser(dataObject)

        formElement.current.reset()

        
    }

    const fontBoldness = {
        fontWeight: "bold",
        fontSize: "1rem",
        paddingTop: "1rem", 
    }

    return (
        <div>

            <form ref={formElement} className="signup-form " onSubmit={submitHandler}>
                <p style={fontBoldness}>Your name</p>
                <input className="signup-form__input" placeholder="Full name" type="text" name='fullName' />
                <p style={fontBoldness}>Email address</p>
                <EmailInput className="signup-form__input"/>
                <p style={fontBoldness}>Phone number</p>
                <PhoneInput className="signup-form__input"/>
                <p style={fontBoldness}>Your birthdate</p>
                <BirthdateInput />
                <input className="signup-form__button" type="submit" value="Add participant +" />
            </form>

        </div>
    )
}