import React from 'react'

const Avatar = (props) => {
    const {url, width ="100px", height= "100px"} = props
    return (
        <div style={{ margin:"auto"}}>
            <img src = {url} alt ="profile images" className='card-img-top rounded-circle' />  
        </div>
    )
}

export default Avatar
