import React, { useState } from 'react';
import "./styles.scss";
import { Container, Tabs, Tab, Typography, Box } from '@mui/material';
import OurTeam from './components/ourTeam';
import AboutUs from './components/aboutUs';
import { useTranslation } from 'react-i18next';

function TabPanel(props: any) {
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
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
  };

  const isTeamTab = value === 0;

  return (
    <Container maxWidth="lg" className='about-company' id="about">
      <div>
        <Typography className='heading' variant="h4" align="center" gutterBottom>
          {t(isTeamTab ? 'about_company.team_title' : 'about_company.about_title')}
        </Typography>
        <Typography className='text' variant="body1" align="center">
          {t(isTeamTab ? 'about_company.team_description' : 'about_company.about_description')}
        </Typography>
      </div>

      <Tabs className='tabs' value={value} onChange={handleChange} centered>
        <Tab
          className={value === 0 ? 'tab-active' : "tab"}
          label={t('about_company.tab_team')}
        />
        <Tab
          className={value === 1 ? 'tab-active' : "tab"}
          label={t('about_company.tab_about')}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <OurTeam />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <AboutUs />
      </TabPanel>
    </Container>
  );
}

export default AboutCompany;
