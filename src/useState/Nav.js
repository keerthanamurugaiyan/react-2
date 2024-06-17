import React from 'react'
// import './useState/Style.css';

function Nav() {
    return (

        <nav>

            <div className='navbar navbar-expand-lg sticky-top navbar-light bg-light h-'>
                <div className='container-fluid'>

                <h1 className='navbar-brand text-dark mx-5 px-2 fs-2' href='#'>Crud Operation</h1>

                <button className='navbar-toggler colapsed' type='button' data-bs-toggle='colapse' dats-bs-target='#navbarNav'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='colapse navbar-colapse' id='navbarNav'>
                    <ul className='navbar-nav ms-auto pe-5 me-5'>
                        
                        <li className='nav-item  '>
                            <a href='#' id='state' className='nav-link fw-bold '  >UseState</a>
                                <ul className='usestate navbar-nav navbar'>
                                    <li className='nav-item'>
                                        <a className='nav-link ' href='#'>UseState</a></li>
                                    <li><a className=' '>UseState with API</a></li>
                                </ul>
                        </li>

                        <li className='navbar-item dropdown'>
                            <a href='#' className='nav-link fw-bold dropdown-toggle' data-bs-toggle='dropdown' >UseReducer</a>
                                <ul className='dropdown-menu'>
                                    <li><a className='dropdown-item' href='#'>UseReducer</a></li>
                                    <li><a className='dropdown-item' href='#'>UseReducer with API</a></li>
                                </ul>
                        </li>
                        
                    </ul>
                    
                </div>

                </div>
            </div>

        </nav>
        
    )
}

export default Nav
