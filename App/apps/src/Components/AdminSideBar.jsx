import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';

export const AdminSidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Create-Job',
    path: '/createjob',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Edit-Job',
    path: '/#',
    icon: <FaIcons.FaEdit />,
    cName: 'nav-text'
  },
  {
      title: 'View-Jobs',
      path: '/#',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
        title: 'Applications',
        path: '/#',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'View-Users',
        path: '/#',
        icon: <FaIcons.FaUser/>,
        cName: 'nav-text'
    },
    {
      title: 'View-Pay',
      path: '/#',
      icon: <FaIcons.FaCcVisa />,
      cName: 'nav-text'
    },
  {
    title: 'Support',
    path: '/#',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
