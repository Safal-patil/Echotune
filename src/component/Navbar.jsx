import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import log from './images/log-2.jpg'
import profile from './images/profile-1.jpg'


export default function Navbar() {
  // this is for the dropdown (nav in mobile screen)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // this is for the dropdown (nav in mobile screen)

  return (
    <div>
      <nav className='w-full sticky top-0 z-50'>
        <div className='text-white flex justify-between my-5 mx-5 border-4 rounded-full border-green-500 p-4 bg-slate-900 text-lg font-semibold '>

          <div>
            <div>
              <img className='h-10 rounded-full' src={profile} alt="Profile" />
            </div>
          </div>

          <div>
            <ul className=' flex gap-9  '>
              <li className='hidden md:block'>
                <Link to="/"><div className='hover:bg-slate-500 px-2 rounded-full'>Songs</div> </Link>
              </li>
              <li className='hidden md:block'>
                <Link to="/songs"><div className='hover:bg-slate-500 px-2 rounded-full'>Recommended</div></Link>
              </li>
              <li className='hidden md:block'>
                <Link to="/latest"><div className='hover:bg-slate-500 px-2 rounded-full'>Latest</div>  </Link>
              </li>
              <li className='hidden md:block'>
                <Link to="/history"><div className='hover:bg-slate-500 px-2 rounded-full'>History</div>  </Link>
              </li>
            </ul>

            <div className='sm:hidden '>
              {/* this is for the dropdown (nav in mobile screen) */}
              <div className=''>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                
                🟰
              </Button>
              </div>
             
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <div className=''>
                <MenuItem onClick={handleClose}>
                  <Link to="/"> Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/songs">Recommended</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/latest">Latest</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/history">History</Link>
                </MenuItem>
                </div>
              </Menu>
              
              {/* this is for the dropdown (nav in mobile screen) */}

              <div>

              </div>
            </div>

          </div>

          <div>
             <img className='h-10 rounded-full ' src={log} alt="Log" />
          </div>

        </div>
      </nav>



    </div>
  )
}
