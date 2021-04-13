import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

function LandingPage(props) {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response))
    }, [])

    const onClickHandler = () => {
        axios.get(`/api/users/logout`)
        .then( response => {
            console.log(response.data) 
            if ( response.data.success) {
                props.history.push("/login")
            } else {
                alert(` fail to logout`)
            }
        })
    }

    return (
        <div style= {{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <h2>Start Page</h2>

            <button onClick={ onClickHandler }>
                LogOut
            </button>
        </div>
    )
}

export default withRouter(LandingPage)
