import { useContext } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const Private = ({ children }) => {
    
    const {user, loading} = useContext(AuthContext) 

    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    if(user){
        return children;
    }

    return ( <Navigate to='/in'></Navigate>
    );
};

export default Private;


Private.propTypes = {
    children: PropTypes.node
}