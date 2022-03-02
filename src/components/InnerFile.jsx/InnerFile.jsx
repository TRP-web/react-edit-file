import React from 'react'
import './innerFile.scss'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const InnerFile = () => {
    const dispath = useDispatch()
    const content = useSelector(state => state.file.content)
    console.log(content);
    const textChenge = (e) => {
        dispath({ type: "ADD_CONTENT", newContent: e.target.value })
    }
    return (
        <div className="inner">
            <textarea
                name="inner-text"
                value={content}
                onChange={(e) => textChenge(e)}
            ></textarea>
        </div>
    )
}

export default InnerFile