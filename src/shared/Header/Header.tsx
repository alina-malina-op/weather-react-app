import React from 'react';
import Select from 'react-select';
import { SharedSvgSelector } from '../../assets/images/icons/shared/SharedSvgSelector';

import s from './Header.module.scss';

interface Props {

}

export const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Киев' },
        { value: 'city-2', label: 'Минск' },
        { value: 'city-3', label: 'Борисов' }
    ];

    const colorStyles = {
        control: (styles: any) => ({ //TS не может понять какого типа объект, пишем any types; return
            ...styles, //разварот предыдущих стилей
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        })
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><SharedSvgSelector id="header-logo" /></div>
                <div className={s.title}>Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <SharedSvgSelector id="change-theme" />
                </div>
                <Select 
                defaultValue={options[0]} 
                styles={colorStyles} 
                options={options} />
            </div>
        </header> //main - key, automatically modular
    )
}