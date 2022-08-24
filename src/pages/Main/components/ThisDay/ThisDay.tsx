import React from 'react';
import { SharedSvgSelector } from '../../../../assets/images/icons/shared/SharedSvgSelector';
import s from './ThisDay.module.scss';

interface Props {

}

export const ThisDay = (props: Props) => {

    return (
        <header className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>20°</div>
                    <div className={s.this__day_name}>Сегодня</div>
                </div>
                <SharedSvgSelector id="sun" />
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    Время: <span>10:44</span>
                </div>
                <div className={s.this__city}>
                    <span>Минск</span>
                </div>
            </div>
        </header> //main - key, automatically modular
    )
}