import React from 'react';

const KeyBoard = ({deleteNumberHandler, addNumberHandler}) => {

    const handleClick = (e, number) => {
        e.stopPropagation()
        e.preventDefault()
        addNumberHandler(number)
    }

    return (
        <div id="keyboard" className="keyboard d-flex flex-column justify-content-center">
            <div>
                <button onClick={(e) => handleClick(e, 1)} className="formSymbol">1</button>
                <button onClick={() => addNumberHandler(2)} className="formSymbol">2</button>
                <button onClick={() => addNumberHandler(3)} className="formSymbol">3</button>
            </div>
            <div>
                <button onClick={() => addNumberHandler(4)} className="formSymbol">4</button>
                <button onClick={() => addNumberHandler(5)} className="formSymbol">5</button>
                <button onClick={() => addNumberHandler(6)} className="formSymbol">6</button>
            </div>
            <div>
                <button onClick={() => addNumberHandler(7)} className="formSymbol">7</button>
                <button onClick={() => addNumberHandler(8)} className="formSymbol">8</button>
                <button onClick={() => addNumberHandler(9)} className="formSymbol">9</button>
            </div>
            <div>
                <button onClick={deleteNumberHandler} className="formCommand">Стереть</button>
                <button onClick={() => addNumberHandler(0)} className="formSymbol">0</button>
            </div>
        </div>
    );
};

export default KeyBoard;
