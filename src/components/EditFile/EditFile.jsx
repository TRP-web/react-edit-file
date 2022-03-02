import React, {useState } from 'react'
import './EditFile.scss'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import useAddAtribute from '../../hooks/EditFile/use-add-atribute'
import useRepleseAtiribute from '../../hooks/EditFile/use-replese-atiribute'
import ViewEdit from './ViewEdit/ViewEdit'

const EditFile = () => {
    const [activeRadio, setActiveRadio] = useState('delete')

    const dispath = useDispatch()
    const content = useSelector(state => state.file.content)

    const EditForOffer = (content) => {
        let newRepleseString = useRepleseAtiribute('a', 'href', content, '{offer}')
        let newString = useAddAtribute('a', 'href', newRepleseString, '{offer}')
        dispath({ type: "ADD_CONTENT", newContent: newString })
    }

    const radioChange = (newActive) => {
        setActiveRadio(newActive)
    }

    function testActiveRadio(radio, activeRadio) {
        if (radio === activeRadio) {
            return ' active'
        } else {
            return ''
        }

    }

    return (
        <>
            <button className="edit-offer button" onClick={() => EditForOffer(content)}>
                Edit href for Offer
            </button>
            <h1 className="mode__title">select mode edit atrebute</h1>
            <div className="mode__inner">
                <div className={"mode__block" + testActiveRadio('delete', activeRadio)}>
                    <input
                        type="radio"
                        name="mode"
                        className={"mode__radio"}
                        value={'delete'}
                        checked={activeRadio === "delete"}
                        onChange={(e) => radioChange(e.target.value)}
                    />
                    <span className="mode__name">delete</span>
                </div>
                <div className={"mode__block" + testActiveRadio('add', activeRadio)}>
                    <input
                        type="radio"
                        name="mode"
                        className='mode__radio'
                        value={'add'}
                        checked={activeRadio === "add"}
                        onChange={(e) => radioChange(e.target.value)}
                    />
                    <span className="mode__name">add</span>
                </div>
                <div className={"mode__block" + testActiveRadio('replace', activeRadio)}>
                    <input
                        type="radio"
                        name="mode"
                        className='mode__radio'
                        value={'replace'}
                        checked={activeRadio === "replace"}
                        onChange={(e) => radioChange(e.target.value)}
                    />
                    <span className="mode__name">replace</span>
                </div>
            </div>

            <ViewEdit active={activeRadio} />
        </>

    )
}

export default EditFile