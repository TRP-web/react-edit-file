import React from 'react'
import './InputFile.scss'
import { useDispatch, useSelector } from 'react-redux'

const InputFile = () => {
    const content = useSelector(state => state.file.content)
    console.log(content);
    const dispath = useDispatch()
    const fileChenge = (e) => {
        const render = new FileReader()
        let file = e.target.files[0]
        render.addEventListener('load', (e) => {
            dispath({ type: "ADD_CONTENT", newContent: render.result })
        })
        render.readAsText(file)
    }

    return (
        <input type="file" onChange={(e) => fileChenge(e)} />
    )
}

export default InputFile