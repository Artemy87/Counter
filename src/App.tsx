import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter/Counter";
import {CounterInterface} from "./components/CoounterInterface/CounterInterface";


function App() {

    const [startValue, setStartValue] = useState(1);
    const [maxValue, setMaxValue] = useState(5);
    const [counter, setCounter] = useState(startValue);
    const [editMode, setEditMode] = useState(false);

    const onIncrement= () => {
        setCounter(counter => counter + 1)
    }
    const onReset = () => {
        setCounter(startValue)
    }

    const logicCorrectInput = maxValue < 0 || startValue < 0 || startValue > maxValue || maxValue === startValue

    return (
        <div className={s.grid}>
            <CounterInterface
                startValue={startValue}
                maxValue={maxValue}
                setCounter={setCounter}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                disabledValue={logicCorrectInput}
                editMode={editMode}
                setEditMode={setEditMode}
            />
            <Counter
                disabledValue={counter === maxValue}
                counter={counter}
                maxValue={maxValue}
                startValue={startValue}
                onIncrement={onIncrement}
                onReset={onReset}
                editMode={editMode}
            />
        </div>
    );
}

export default App;
