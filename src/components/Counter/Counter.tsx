import React, {FC} from 'react';
import {Button} from "@mui/material";
import s from './Counter.module.css';

export type CounterPropsType = {
    disabledValue: boolean
    counter: number
    maxValue: number
    startValue: number
    onIncrement: () => void
    onReset: () => void
    editMode: boolean
}

export const Counter:FC<CounterPropsType> = (
    {
        disabledValue,
        counter,
        maxValue,
        startValue,
        onIncrement,
        onReset,
        editMode
    }
) => {
    const onIncrementHandler = () => {
        onIncrement()
    }
    const onResetHandler = () => {
        onReset()
    }


    return (
        <div className={s.container}>
            { (maxValue < 0 || startValue < 0 || startValue > maxValue || maxValue === startValue)
                ? <div className={s.incorrect}>Incorrect value!</div>
                : editMode ? <div>Enter! Set value!</div>
                : <div className={counter !== maxValue ? s.counter : s.counterRed}>{counter}</div>
            }

            <div className={s.buttons}>
                <Button className={s.button} variant="contained" size="large"  color="success"
                        disabled={editMode || disabledValue}
                        onClick={onIncrementHandler}>inc</Button>
                <Button className={s.button} variant="contained" size="large" color="success"
                        onClick={onResetHandler}>reset</Button>
            </div>
        </div>
    );
};