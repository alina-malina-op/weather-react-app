import React from 'react';

import s from './Main.module.scss';

interface Props {

}

export const Main = (props: Props) => {
    return (
        <div className={s.main}></div> //main - key, automatically modular
    )
}