import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

// * Destruct Component from props and rest of props
// const ProtectedRoute = (props) => {
const ProtectedRoute = ({ component: ComponentPassedIntoComponentProp, ...restOfProps }) => {

    // console.log('Rest +++++++++++++++++++++++++',ComponentPassedIntoComponentProp)

    // console.log('Rest +++++++++++++++++++++++++', restOfProps)



    return (

        <Route {...restOfProps} render={
            props => {
                if (localStorage.getItem('currentUserId')) {
                    return <ComponentPassedIntoComponentProp {...restOfProps} {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: '/login',
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }
        } />

    )
}

export default ProtectedRoute;