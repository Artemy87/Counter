import React, {ChangeEvent, FC, useEffect} from 'react';
import s from './CounterInterface.module.css';
import {Button} from "@mui/material";
import SuperInputText from "../c1-SuperInputText/SuperInputText";

export const values = {
    maxCounterValue: 'MAX_COUNTER_VALUE',
    startCounterValue: 'START_COUNTER_VALUE'
}

export type CounterInterfacePropsType = {
    startValue: number
    maxValue:number
    setCounter: (value:number) => void
    setMaxValue: (value:number) => void
    setStartValue: (value:number) => void
    disabledValue: boolean
    editMode: boolean
    setEditMode: (value:boolean) => void
}

export const CounterInterface:FC<CounterInterfacePropsType> = (
    {
        setCounter,
        startValue,
        maxValue,
        setStartValue,
        setMaxValue,
        disabledValue,
        editMode,
        setEditMode
    }
) => {

    useEffect(() => {
        localStorage.setItem(values.maxCounterValue, JSON.stringify(maxValue))
        localStorage.setItem(values.startCounterValue, JSON.stringify(startValue))
    }, [])


    const onChangeStartValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setStartValue(JSON.parse(e.currentTarget.value))
        setEditMode(true)
    }

    const onChangeMaxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setMaxValue(JSON.parse(e.currentTarget.value))
        setEditMode(true)
    }

    const onSetValuesHandler = () => {
        localStorage.setItem(values.maxCounterValue, JSON.stringify(maxValue))
        localStorage.setItem(values.startCounterValue, JSON.stringify(startValue))
        setCounter(startValue)
        setEditMode(false)
    }

    const logicCorrectInput = maxValue < 0 || startValue < 0 || startValue > maxValue || maxValue === startValue

    return (
        <div className={s.container}>
            <div className={s.values}>
                <div className={s.maxValue}>
                    <span>max value</span>
                    <SuperInputText  className={logicCorrectInput ? s.inputStyleRed : s.inputStyle} type={'number'} value={maxValue} onChange={onChangeMaxValueHandler}/>
                </div>
                <div className={s.startValue}>
                    <span>start value</span>
                    <SuperInputText className={logicCorrectInput ? s.inputStyleRed : s.inputStyle} type={'number'} value={startValue} onChange={onChangeStartValueHandler}/>
                </div>
            </div>
            <div className={s.button}>
                <Button variant="contained" color="success" size="large"
                        disabled={disabledValue}
                        onClick={onSetValuesHandler}>set</Button>
            </div>
        </div>
    );
};