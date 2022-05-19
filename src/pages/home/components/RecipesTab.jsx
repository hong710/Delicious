import * as React from 'react';
import {Box, Container} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Popular from '../../../components/Popular';
import Veggie from '../../../components/Veggie';

export default function RecipesTab() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ width: '100%' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
          <TabList 
            onChange={handleChange} 
            aria-label="lab API tabs example" 
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="inherit"
        >
            <Tab label="Popular Recipes" value="1" />
            <Tab label="Vegetarian Picks" value="2" />
            <Tab label="30 Minutes Meal" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Popular />
        </TabPanel>
        <TabPanel value="2">
            <Veggie />
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Container>
  );
}

