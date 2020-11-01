import React from 'react';

import LoopCircleLoading from './CircleLoading'


//HOC using pure function 
//it's a function that accepts ComponentToDebug and implicitly returns a Functional component 
let WithLoader = (WrappedComponent) => (

    // Functional Component being returned
    props => (
        <div>

            <div>Im from HOC</div>
            {
                props.isLoading ?
                    <LoopCircleLoading /> :
                    <WrappedComponent {...props} />
            }

        </div>
    )
);

export default WithLoader;