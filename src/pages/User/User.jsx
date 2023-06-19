import React, { useRef, useEffect } from 'react'
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

  useEffect(() => {
    const handleResize = () => {
      appBarRef.current.style.width = `calc(${document.body.offsetWidth}px - ${sideBarRef.current.offsetWidth}px)`
    }

    const margin = {
      top: appBarRef.current.offsetHeight * 1.5 ,
      bottom: appBarRef.current.offsetHeight,
      left: sideBarRef.current.offsetWidth ,
      right: 5 ,
    }

    contentRef.current.style.padding = `${margin.top}px ${margin.right}% ${margin.bottom}px calc(${margin.left}px)`
    appBarRef.current.style.width = `calc(${document.body.offsetWidth}px - ${sideBarRef.current.offsetWidth}px)`

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize);
  }, [])
  

  return (
    <div className='user-account'>
        <Sidebar sideBarRef={sideBarRef} />
        <UserAppbar appBarRef={appBarRef} />
        <div className='user-account-content'>
          {/* <CodeRequest contentRef={contentRef} /> */}
          {/* <Subscription contentRef={contentRef} /> */}
          {/* <ActiveSubscription contentRef={contentRef}/> */}
          {/* <History contentRef={contentRef} /> */}
          <Settings contentRef={contentRef} />
        </div>
    </div>
  )
}
