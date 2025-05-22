import React from 'react';
import "./styles.scss";
import { Button, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function PricePackage() {
  const { t } = useTranslation();

  const packages = [
    {
      key: 'basic',
    },
    {
      key: 'premium',
    },
    {
      key: 'zero',
    }
  ];

  return (
    <div className='price-package' id='pricing'>
      <div className='container'>
        <Typography className='heading'>{t('pricing.title')}</Typography>
        <Typography className='text'>{t('pricing.description')}</Typography>

        <Grid container justifyContent="space-between" spacing={2} style={{ marginTop: 50 }}>
          {packages.map((pkg) => (
            <Grid className='card' item md={3.5} sm={2} key={pkg.key}>
              <Typography className='package' variant="h5" align="left">
                {t(`pricing.${pkg.key}.title`)}
              </Typography>
              <Typography className='text-line' variant="body2" align="left">
                {t(`pricing.${pkg.key}.desc`)}
              </Typography>
              <Divider className='divider' />
              <List>
                {(t(`pricing.${pkg.key}.features`, { returnObjects: true }) as string[]).map(
                    (feature, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={feature} />
                    </ListItem>
                    )
                )}
                </List>
              <Button className='btn'>{t('pricing.button')}</Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
