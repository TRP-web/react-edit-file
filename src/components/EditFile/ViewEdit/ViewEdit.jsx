import React, { useState } from 'react'

const ViewEdit = ({ active }) => {
    const [InputsInfo, setTegContent] = useState({
        teg: '',
        atribute: ''
    })

    const chengeInputState = (elem) => {
        let newObject = InputsInfo;
        newObject[elem.id] = elem.value;
        setTegContent({ ...newObject })
    }
    console.log(InputsInfo)

    console.log(active)
    const loadActive = (active) => {
        switch (active) {
            case 'delete':
                return (
                    <div className="view">
                        <input
                            type="text"
                            className="teg"
                            placeholder='for-teg'
                            id='teg'
                            value={InputsInfo.teg}
                            onChange={(e) => chengeInputState(e.target)}
                        />
                        <input
                            type="text"
                            className="for-atribute"
                            placeholder='atribute'
                            id='atribute'
                            value={InputsInfo.atribute}
                            onChange={(e) => chengeInputState(e.target)}
                        />
                        <div className="view__desription">
                            desription
                        </div>
                    </div>
                )
            case 'add':
                return (
                    <div>
                        add
                    </div>
                )
            case 'replace':
                return (
                    <div>
                        replace
                    </div>
                )
        }

    }
    return (
        <div className="view">
            <div className="view__block">
                {
                    loadActive(active)
                }
            </div>
        </div>
    )
}

export default ViewEdit