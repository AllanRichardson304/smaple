import React from 'react'
import './Sidebar.scss'
import logo from '../../assets/img/svg/logo.svg'
import menuFirst from '../../assets/img/svg/menu-1.svg'
import menuSecond from '../../assets/img/svg/menu-2.svg'
import menuThird from '../../assets/img/svg/menu3.svg'

export default function Sidebar() {
    return (
        <>
            <aside className='sidebar'>
                <div className='sidebar__logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='sidebar__menu-list'>
                    <div className='sidebar__menu-inner'>
                        <img src={menuFirst} alt="" />
                    </div>
                    <div className='sidebar__menu-inner'>
                        <img src={menuSecond} alt="" />
                    </div>
                    <div className='sidebar__menu-inner'>
                        <img src={menuThird} alt="" />
                    </div>
                </div>
            </aside>
        </>
    )
}

