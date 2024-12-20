import '../style/signup.scss'
import SignUpContainer from '../components/SingUpContainer';


function Signup() {
    
    const container = {
        display: "grid",
        gridTemplateColumns: "3fr 2fr",
        maxWidth: "80rem",
        sideImage: {
            zIndex: "1",
        },
        sideImage: {
            width: "100%",
        }
    }
    
    return (
        <div style={container}>
            <img style={container.sideImage} src="./orange-rabbit.png" alt="" />
            <SignUpContainer />
        </div>
    );
}

export default Signup;