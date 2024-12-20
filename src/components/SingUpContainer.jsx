import { HiCalendarDays } from "react-icons/hi2";
import SignUp from "./Signup";
import { PiMapTrifoldBold } from "react-icons/pi";

export default function SingUpContainer(){

    const singUpContainerStyling = {

        dateAndTime: {
            backgroundColor: "white",
        },

        underLineStyling: {
            border: "none",
            marginTop: "0.5rem",
            borderBottom: "1px dotted",
            apperence: "none"
        },
        firstp: {
            textTransform: "uppercase",
            fontWeight: "600",  
            fontSize: "0.75rem",
            padding: "3rem 0 0.5rem 2rem",
            
        },

        secondp: {
             fontWeight: "600",
             fontSize: "22px",
             padding: "0 0 0.4rem 2rem",
        },

        twoPs: {
             fontWeight: "bold",
             fontSize: "0.75rem",
             padding: "0 0 0.4rem 2rem",
        },  
            
            
    }


    return (
        <div style={singUpContainerStyling.dateAndTime}>

                <p style={singUpContainerStyling.firstp}>Signup for the event</p>
                <p style={singUpContainerStyling.secondp}>Orange Rabbit Festival 2023</p>
                <p style={singUpContainerStyling.twoPs}><HiCalendarDays /> 24 June 2025 - 1 July 2025</p>
                <p style={singUpContainerStyling.twoPs}><PiMapTrifoldBold /> Bunny Avenue 22, 2300, Rabbitkilde</p>
                <hr style={singUpContainerStyling.underLineStyling} />
            <SignUp />
        </div>
    )
}