import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import StarsIconOutlinedIcon from '@mui/icons-material/StarsOutlined';
import DoorSlidingOutlinedIcon from '@mui/icons-material/DoorSlidingOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

export default function Features() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <StarsIconOutlinedIcon />
          <TimelineConnector style={{margin: '10px 0'}} />
        </TimelineSeparator>
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <DoorSlidingOutlinedIcon />
          <TimelineConnector style={{margin: '10px 0'}} />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <Inventory2OutlinedIcon />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}