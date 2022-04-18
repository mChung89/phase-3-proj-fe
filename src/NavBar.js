import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react'
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NavBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab component={Link} to="/" label="Home" {...a11yProps(0)} />
          <Tab component={Link} to='/listings' label="Listings" {...a11yProps(1)} />
          <Tab label="Something" {...a11yProps(2)} />
          <Tab />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="h4">Home</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography variant="h4">Listings</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography variant="h4">Something</Typography>
      </TabPanel>
    </Box>
  );
}