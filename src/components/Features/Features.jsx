import { React, useEffect, useRef, useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { FEATURES } from '../../constants/text';
import './styles.css'
import { Typography } from '@mui/material';
import StarsIconOutlinedIcon from '@mui/icons-material/StarsOutlined';
import DoorSlidingOutlinedIcon from '@mui/icons-material/DoorSlidingOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';


export default function Features() {

  const [intersect, setIntersect] = useState(false)
  const ref = useRef(null);
  const previousScrollY = useRef(0);

  const handleScroll = () => {
    const headingTop = ref.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const currentScrollY = window.scrollY;
    setIntersect(headingTop <= windowHeight * 0.5 || currentScrollY < previousScrollY.current)
    previousScrollY.current = currentScrollY;
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className='feature-container'>
      <div className='feature-heading-container'>
        <Typography ref={ref} variant='h2' className={intersect ? 'feature-heading intersect' : 'feature-heading'}>
          <span className='feature-blue-heading'>{FEATURES.headingBlue}</span>
          {FEATURES.heading}
        </Typography>
      </div>
      <div className='feature-timeline'>
        <Timeline>
        <TimelineItem className='feature-list'>
          <TimelineSeparator>
            <StarsIconOutlinedIcon className='feature-icons' />
            <TimelineConnector className='feature-time-connector' />
          </TimelineSeparator>
          <TimelineContent sx={{padding: 0, margin: "0 0 2rem 1.5rem"}}>
            <Typography className='feature-subHeading'>
              {FEATURES.features.unique.heading}
            </Typography>
            <Typography color='GrayText'>
              {FEATURES.features.unique.text}
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className='feature-list'>
          <TimelineSeparator>
            <DoorSlidingOutlinedIcon className='feature-icons' />
            <TimelineConnector className='feature-time-connector' />
          </TimelineSeparator>
          <TimelineContent sx={{padding: 0, margin: "0 0 2rem 1.5rem"}}>
            <Typography className='feature-subHeading'>
              {FEATURES.features.lockers.heading}
            </Typography>
            <Typography color='GrayText'>
              {FEATURES.features.lockers.text}
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className='feature-list'>
          <TimelineSeparator>
            <Inventory2OutlinedIcon className='feature-icons' />
          </TimelineSeparator>
          <TimelineContent sx={{padding: 0, margin: "0 0 2rem 1.5rem"}}>
            <Typography className='feature-subHeading'>
              {FEATURES.features.unique.heading}
            </Typography>
            <Typography color='GrayText'>
              {FEATURES.features.unique.text}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </div>
    </div>
  );
}