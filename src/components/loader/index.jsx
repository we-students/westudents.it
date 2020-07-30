import React from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const CustomLoader = ({ color = '#ffffff', height = 30, width = 30, type = 'Oval' }) => {
    return <Loader type={type} color={color} height={height} width={width} />
}

export default CustomLoader
