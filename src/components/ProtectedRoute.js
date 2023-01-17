import { Navigate } from "react-router-dom";
import React from 'react'
function ProtectedRoute(props) {
    if (!props.loggedIn) {
        return <Navigate to="/login" replace/>
    } else if (!props.onboarded) {
        return <Navigate to="/onboarding" replace/>
    } else {
        return props.children;
    }
}

export default ProtectedRoute;