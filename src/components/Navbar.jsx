import React from 'react';
import wallet from '../assets/images/wallet.svg'
import data from '../assets/js/data'
import '../assets/css/Navbar.css'
function Navbar(){
    console.log(data);
    const [navItems, setNavItems] = React.useState(data);
    const navItemList = navItems.map(val =>
    {
    return (
    <div className={`nav-item ${val.label =='Payouts' ? 'clicked':''}`}>
        <div className='nav-item-icon'>
            <img src={`/icon-images/${val.icon}`} />
        </div>
        <span>{val.label}</span>
    </div>
    )});
    return(
        <div className='navbar-container'>
           <div className='navbar-branding'>
                <div className='brand-logo'></div>
                <div className='brand-details'>
                    <h5 className='brand-name'>Nishyan</h5>
                    <h6 className='store-link'>Visit Store</h6>
                </div>
                <div className='navbar-arrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="white"/>
                    </svg>
                </div>
           </div>
           <div className='nav-items-list'>
                {navItemList}
           </div>
           <div className='navbar-bottom'>
                <div className='bottom-icon'>
                    <img src={wallet} />
                </div>
                <div className='bottom-text'>
                    <h5 className='title'>Available credits</h5>
                    <h5 className='subtitle'>222.10</h5>
                </div>
           </div>
        </div>
    )
}

export default Navbar