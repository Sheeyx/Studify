import React, { useState } from 'react';
import "./styles.scss";
import { Container, Tabs, Tab, Typography, Box } from '@mui/material';
import OurTeam from './components/ourTeam';
import AboutUs from './components/aboutUs';

// Tab Panel Component
function TabPanel(props:any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
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

function AboutCompany() {
  const [value, setValue] = useState(0);

  // Handle tab change
  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" className='about-company' id="about">
        {
            value === 0 ?
            (
                <div>
                    <Typography className='heading' variant="h4" align="center" gutterBottom>
                        Meet the Minds behind your journey
                    </Typography>
                    <Typography className='text' variant="body1" align="center">
                        Our team of passionate experts is here to guide, support, and inspire you every step of the way.
                    </Typography>
                </div>
                
            ) : (
                <div>
                    <Typography className='heading' variant="h4" align="center" gutterBottom>
                        Our journey
                    </Typography>
                    <Typography className='text' variant="body1" align="center">
                        Our team of passionate experts is here to guide, support, and inspire you every step of the way
                    </Typography>
                </div>
            )
        }
      
      {/* Tabs for switching between sections */}
      <Tabs className='tabs' value={value} onChange={handleChange} centered>
        <Tab className={value === 0 ? 'tab-active' : "tab"} label="Our Team" />
        <Tab className={value === 1 ? 'tab-active' : "tab"} label="About Us" />
      </Tabs>

      {/* Tab Panels for showing content */}
      <TabPanel value={value} index={0}>
        {/* Our Team Section */}
        <OurTeam />
      </TabPanel>

      <TabPanel value={value} index={1}>
        {/* About Us Section */}
        <AboutUs />
      </TabPanel>
    </Container>
  );
}

export default AboutCompany;
