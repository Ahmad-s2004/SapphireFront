import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';

function Navbar() {

    const {carts} = useSelector(state => state.allDetail)

    const [sidebar, setSidebar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <div className="container-fluid">
                <div className="row py-3 align-items-center">
                    <div className="col-3 before">
                        <div className='ps-3'>
                            <Link to="/"><img src="./images/logo.svg" width={200} alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-6 after z-index-100">
                        <div className="d-flex align-items-center" style={{ overflow: "visible", zIndex: "999" }}>
                            <IconContext.Provider className="icon-provider navbar-side" value={{ color: 'black' }}>
                                <div className='navbar'>
                                    <Link to='#' className='menu-bars pb-3'>
                                        <FaIcons.FaBars onClick={showSidebar} />
                                    </Link>

                                </div>
                                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                                    <ul className='nav-menu-items icon-provider' onClick={showSidebar}>
                                        <li className='navbar-toggle'>
                                            <Link to='#' className='menu-bars'>
                                                <AiIcons.AiOutlineClose />
                                            </Link>
                                        </li>
                                        {SidebarData.map((item, index) => {
                                            return (
                                                <li key={index} className={item.cName}>
                                                    <Link to={item.path}>
                                                        {item.icon}
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </nav>
                            </IconContext.Provider>
                            <div className='ms-4 pb-2 text-center float-left'>
                            <Link to="/"><img src="./images/logo.svg" width={200} alt="" /></Link>
                            </div>
                        </div></div>
                    <div className="col-6 border-none text-center search-bx">
                        <div className="row text-center w-100 search-navbar p-2 align-items-center">
                            <div className="col">
                                <input className="form-control " type="search" placeholder="FIND YOUR FAVOURITES" />
                            </div>
                            <div className="col-auto pt-2">
                                <i className="fas fa-search h5 text-body" />
                            </div>
                        </div>
                    </div>


                    <div className="col-3 me before">
                        <div className='d-flex align-items-center me justify-content-between'>
                            <div className='px-2'>
                                <Link to="/cart"><img src="./images/delivery-truck.png" width={32} className='h5' alt="" /></Link>
                            </div>
                            <div className="px-2">
                                <img src="./images/account_icon.png" className='h5' width={32} alt="" />
                            </div>
                            <div className="pe-2 me-3">
                                <Badge badgeContent={carts.length} color="primary">
                                   <Link to="/cart"> <i className="fa-solid fa-cart-shopping" /></Link>
                                </Badge>
                            </div>
                        </div>
                    </div>


                    <div className="col-6 after after-500">
                        <div className='d-flex align-items-center me'>
                            <div className='px-2'>
                            <Link to="/cart"><img src="./images/delivery-truck.png" width={32} className='h5' alt="" /></Link>
                            </div>
                            <div className="ps-2 pe-1 pb-2">
                                <FaUser className='' style={{fontSize:"23px"}}/>
                            </div>
                            <div className="pe-1 me-3">
                                <Badge badgeContent={carts.length} color="primary">
                                <Link to="/cart"> <i className="fa-solid fa-cart-shopping align-items-baseline" /></Link>
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-4 px-5 border-none text-center search-bx-row-2">
                        <div className="row text-center search-navbar p-2 align-items-center">
                            <div className="col">
                                <input className="form-control " type="search" placeholder="FIND YOUR FAVOURITES" />
                            </div>
                            <div className="col-auto pt-2">
                                <i className="fas fa-search h5 text-body" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row menu-items-bar mx-5 text-center mb-4 nav-menu-bar px-5" style={{display:"flex", justifyContent:"space-around"}}>
                    <Link to="/women" className="btn-menu col-1 text-center">WOMEN </Link>
                    <Link to="/newin" className="btn-menu col-1 text-center">NEW IN</Link>
                    <Link to="/men" className="btn-menu col-1 text-center">MEN</Link>
                    <Link to="/kids" className="btn-menu col-1 text-center">KIDS</Link>
                    {/* <Link to="/beauty" className="btn-menu col-1 text-center">BEAUTY</Link> */}
                    <Link to="/accessories" className="btn-menu col-2 text-center">ACCESSORIES</Link>
                    <Link to="/home" className="btn-menu col-1 text-center">HOME</Link>
                    <Link to="/sapphire-x-naimal" className="btn-menu col-3 text-center">SAPPHIRE X NAIMAL KHAWAR</Link>
                    {/* <button className="btn col-1">SPECIAL OFFERS</                      button>  */}
                    <Link to="/pink-edit" className="btn-menu col-1 text-center">THE PINK EDIT</Link>
                </div>
            </div>
        </div>


    );
}

export default Navbar;





{/* <IconContext.Provider value={{ color: 'black' }}> */}
    <div className='navbar'>
        <Link to='#' className='menu-bars'>
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
        </Link>

    </div>
    {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> */}
    {/* <ul className='nav-menu-items' onClick={showSidebar}> */}
    <li className='navbar-toggle'>
        <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose />
        </Link>
    </li>
    {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
    {/* </ul> */}
    {/* </nav> */}
{/* </IconContext.Provider> */}