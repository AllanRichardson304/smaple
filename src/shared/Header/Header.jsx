import { useState } from 'react'
import './Header.scss'
import { Drawer} from 'antd';

import menuicon from '../../assets/img/svg/header-msg.svg'
import menuiconsecond from '../../assets/img/svg/header-msg2.svg'
import close from '../../assets/img/svg/close.svg'
import phone from '../../assets/img/svg/phone.svg'
import sun from '../../assets/img/svg/sun.svg'
import arrow from '../../assets/img/svg/down-arrow.svg'
import menu from '../../assets/img/svg/menu.svg'
import '../Sidebar/Sidebar.scss'
import logo from '../../assets/img/svg/logo.svg'
import menuFirst from '../../assets/img/svg/menu-1.svg'
import menuSecond from '../../assets/img/svg/menu-2.svg'
import menuThird from '../../assets/img/svg/menu3.svg'

export const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <header className="header">
       <div className='header__col-one'>
        <img className='header__menu' src={menu} alt="" width={24} onClick={showDrawer} />
        <div className='header__tab'>
       <div className='header__tab-inactive'>
        <img src={menuicon} alt="" />
        <div>
          <p>Ruby Franecki... <span>0.1:42</span></p>
          <h5>IVR-Queue</h5>
        </div>
     </div>
     <div className='header__tab-bg'>

     </div>
     <div className='header__tab-active'>
        <img src={menuiconsecond} alt="" />
        <div className='header__acitve-inner'>
        <div>
          <p>Ruby Franecki... </p>
          <h6>IVR-Queue • Resolved</h6>
        </div>
        <div>
         <img className='cursor' src={close} alt="" width={22} height={22} />
        </div>
        </div>
        
     </div>
     </div>
       </div>
       <div className='header__col-two'>
         <div className='header__theme-set'>
            <img className='cursor' src={phone} alt="" />
            <img className='cursor' src={sun} alt="" />
         </div>
         <div className='header__profile-content'>
          <div className='header__profile'>
           <h1>W</h1>
          </div>
          <img className='cursor' src={arrow} alt="" />
         </div>
       </div>
      </header>
      <Drawer  placement="left" title={
 <div className='sidebar-responsive__logo'>
 <img src={logo} alt=""  />
</div>
      } onClose={onClose} open={open} width={100} classNam="menu"  >
      <aside className='sidebar-responsive'>
               
                <div className='sidebar-responsive__menu-list'>
                    <div className='sidebar-responsive__menu-inner' >
                        <img src={menuFirst} alt=""  onClick={onClose}/>
                    </div>
                    <div className='sidebar-responsive__menu-inner'>
                        <img src={menuSecond} alt=""  onClick={onClose} />
                    </div>
                    <div className='sidebar-responsive__menu-inner'>
                        <img src={menuThird} alt=""  onClick={onClose} />
                    </div>
                </div>
            </aside>
      </Drawer>
    </>
  )
}
