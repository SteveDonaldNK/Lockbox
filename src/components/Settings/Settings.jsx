import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Button } from '@mui/material';
import Profile from '../Profile/Profile';

import './styles.css'
import Password from '../Password/Password';

function TabPanel(props) {
  const { children, value, index} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ px: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Settings({ contentRef }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className='settings-container'
      ref={contentRef}
    >
      <Box className='settings-innerBox' sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}>
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider', flexShrink: 0}}
        >
            <Tab label="Mon Compte" {...a11yProps(0)} />
            <Tab label="Mot de passe" {...a11yProps(1)} />
            <Button color='error' sx={{py: 1.5, px: 4}}>Déconnexion</Button>
        </Tabs>
        <TabPanel value={value} index={0}>
            <Profile />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Password />
        </TabPanel>
      </Box>
    </Box>
  );
}