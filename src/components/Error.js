import React from 'react'
import {useRouteError} from 'react-router-dom'
import Footer from './Footer'

function Error() {
    const error = useRouteError()
  return (

    <>
        <div className="error-page">
            <h1>You have entered a wrong URL !</h1>
            <p>Error: {error?.status} - {error?.error?.message}</p>
            {console.log(error)}
        </div>
        <Footer/>
    </>
  )
}

export default Error