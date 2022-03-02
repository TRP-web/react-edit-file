import React from 'react'
import './Main.scss'
import InputFile from '../../components/InputFile/InputFile'
import InnerFile from '../../components/InnerFile.jsx/InnerFile'
import EditFile from '../../components/EditFile/EditFile'


const Main = () => {
    return (
        <div className='main'>
            <InputFile />
            <InnerFile />
            <EditFile />
        </div>
    )
}

export default Main