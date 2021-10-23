import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/userRecoil'
import SidebarPresenter from 'screens/Sidebar/SidebarPresenter';

const Sidebar = ({ isOpen, toggle }) => {
    const { isLoggedIn } = useRecoilValue(userState)

    return (
        <SidebarPresenter
            isOpen={isOpen}
            toggle={toggle}
            isLoggedIn={isLoggedIn}
        />
    );
};

export default Sidebar;