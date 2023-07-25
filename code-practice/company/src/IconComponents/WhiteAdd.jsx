import { GrAddCircle } from "react-icons/gr";
import { IconContext } from "react-icons";

let LightAddCircle = ({children}) => { 
    console.log({children});
    return (
        <IconContext.Provider
            value={{ color: "white", size: '28px' }} >
                < GrAddCircle />
            </IconContext.Provider>
    );
}

export default LightAddCircle; 