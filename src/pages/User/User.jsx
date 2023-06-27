import React, { useRef, useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import UserAppbar from '../../components/UserAppbar/UserAppbar'
import CodeRequest from '../../components/CodeRequest/CodeRequest'
import Subscription from '../../components/Subscription/Subscription'

import './styles.css'
import ActiveSubscription from '../../components/ActiveSubscription/ActiveSubscription'
import History from '../../components/History/History'
import Settings from '../../components/Settings/Settings'

export default function User() {

  const appBarRef = useRef(null);
  const sideBarRef = useRef(null);
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState('home');

  function setTab() {
    if (activeTab == 'subscription') {
      return <Subscription contentRef={contentRef} />;
     } else if (activeTab === 'history') {
      return <History contentRef={contentRef} />;
     } else if (activeTab === 'settings') {
      return <Settings contentRef={contentRef} />;
     } else {
      return <CodeRequest contentRef={contentRef} />;
     }
  }

  useEffect(() => {
    const queryString = window.location.search;
    const param = new URLSearchParams(queryString)
    setActiveTab(param.get('tab'))
    const handleResize = () => {
      appBarRef.current.style.width = `calc(${document.body.offsetWidth}px - ${sideBarRef.current.offsetWidth}px)`
    };
    const margin = {
      top: appBarRef.current.offsetHeight * 1.5 ,
      bottom: appBarRef.current.offsetHeight,
      left: sideBarRef.current.offsetWidth,
      right: 5 ,
    }
    contentRef.current.style.padding = `${margin.top}px ${margin.right}% ${margin.bottom}px calc(${margin.left}px + 5%)`;
    appBarRef.current.style.width = `calc(${document.body.offsetWidth}px - ${sideBarRef.current.offsetWidth}px)`;
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab])
  

  return (
    <div className='user-account'>
        <Sidebar setActiveTab={setActiveTab} sideBarRef={sideBarRef} />
        <UserAppbar appBarRef={appBarRef} />
        <div className='user-account-content'>
        {
          setTab()
        }
        </div>
    </div>
  )
}
