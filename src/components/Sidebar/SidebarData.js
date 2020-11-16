import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as HiIcons from 'react-icons/hi';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/profile',
        icon: <AiIcons.AiOutlineDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Make Appointment',
        path: '/profile/makeappointment',
        icon: <BiIcons.BiBookAdd />,
        cName: 'nav-text'
    },
    {
        title: 'Personal Info',
        path: '/profile/info',
        icon: <BsIcons.BsPencilSquare />,
        cName: 'nav-text'
    },
    {
        title: 'Check Working schedule - for employee only',
        path: '/profile/setSchedule',
        icon: <BsIcons.BsCalendar />,
        cName: 'nav-text'
    },
    {
        title: 'Bussiness report - for admin only',
        path: '/profile/businessReport',
        icon: <HiIcons.HiOutlineDocumentReport />,
        cName: 'nav-text'
    },



]