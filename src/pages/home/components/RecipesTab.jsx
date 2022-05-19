import * as React from 'react';
import {Box, Container} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SplideCard from '../../../components/SplideCards';


export default function RecipesTab() {

    const popularRecipes = 'recipes/random?number=10';
    const veggieRecipes = 'recipes/random?number=10&tags=vegetarian';


  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ width: '100%', marginTop: '3rem' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
          <TabList 
            onChange={handleChange} 
            aria-label="lab API tabs example" 
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="inherit"
            
        >
            <Tab label="Popular Recipes" value="1"  sx={{fontSize:'1.2rem'}}/>
            <Tab label="Vegetarian Picks" value="2" sx={{fontSize:'1.2rem'}} />
            <Tab label="30 Minutes Meal" value="3"  sx={{fontSize:'1.2rem'}}/>
            <Tab label="30 Minutes Meal" value="4"  sx={{fontSize:'1.2rem'}}/>
          </TabList>
        </Box>
        <TabPanel value="1">
            <SplideCard query ={popularRecipes} />
        </TabPanel>

        <TabPanel value="2">
            <SplideCard query ={veggieRecipes} />
        </TabPanel>

        <TabPanel value="3">
            Item Three
        </TabPanel>

        <TabPanel value="4">
            Item Three
        </TabPanel>
      </TabContext>
    </Container>
  );
}

