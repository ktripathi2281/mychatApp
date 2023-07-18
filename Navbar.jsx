import React from 'react';
import SignIn from './SignIn'
import SignOut from './SignOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>ChatUp</h1>
      {user ? <SignOut /> : <SignIn />}

    </div>
  );
};

export default Navbar;