import React from 'react';
import {config} from "../utils/keyBoard.config"

const KeyBoard = () => {

    const newData = []
    for(let i = 0; i < config.rows; i++) {
        const blankArray = []
        for(let j = 0; j < config.cols; j++) {
            const el = config.data[i * (config.rows - 1) + j]
            if (el !== undefined) {
                blankArray.push(el)
            }
        }
        newData.push(blankArray)
    }

    console.log(newData, ' new data')

    return (
        <div className="keyboard d-flex flex-column justify-content-center">
            {
                // config.data.map(item => {
                //     return <button>{item.value}</button>
                // })
                newData.map((item) => {
                    return <div>
                        {
                            item.map(el => {
                                if (el.type === "symbol") {
                                    return <button className="formSymbol">{el?.value}</button>
                                }
                                if (el.type === "command") {
                                    return <button className="formCommand">{el?.value}</button>
                                }
                            })
                        }
                    </div>
                })
            }
        </div>
    );
};

export default KeyBoard;
