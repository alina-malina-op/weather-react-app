import React from 'react';
import { ThisDay } from './components/ThisDay/ThisDay';

import s from './Main.module.scss';

interface Props {

}

export const Main = (props: Props) => {
    return (
        <div className={s.main}>
            <ThisDay />
        </div> //main - key, automatically modular
    )
}