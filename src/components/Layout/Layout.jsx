import React from 'react';
import {Helmet} from 'react-helmet';

const Layout = ({children}) =>{
    return (
        <>
         <Helmet>
            <title>The Hippie Duo | Andrys & Cristian's Wedding</title>
         </Helmet>
         {children}  
        </>
    )
}

export default Layout
