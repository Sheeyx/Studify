import React from 'react'
import "./styles.scss"
import { Button, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'

export default function PricePackage() {
  return (
    <div className='price-package'>
        <div className='container'>
            <Typography className='heading'>Choose your package</Typography>
            <Typography className='text'>Our team of passionate experts is here to guide, support, and inspire you every step of the way. We made best prices for you.</Typography>
            <Grid container justifyContent="space-between" spacing={2} style={{ marginTop: 50 }}>
                <Grid className='card' item md={3.5} sm={2}>
                    <Typography className='package' variant="h5" align="left">Basic</Typography>
                    <Typography className='text-line' variant="body2" align="left">Ideal for those who have experience dealing with starting new life abroad.</Typography>
                    <Divider className='divider' />
                    <List>
                        <ListItem>
                            <ListItemText primary="100% Money back policy" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Any benefit here" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="One more benefit here" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Best solution for your problems" />
                        </ListItem>
                    </List>
                    <Button className='btn'>Get started</Button>
                </Grid>
                <Grid className='card' item md={3.5} sm={2}>
                    <Typography className='package' variant="h5" align="left">Premium</Typography>
                    <Typography className='text-line' variant="body2" align="left">Ideal for those who have experience dealing with starting new life abroad.</Typography>
                    <Divider className='divider' />
                    <List>
                        <ListItem>
                            <ListItemText primary="100% Money back policy" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Any benefit here" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="One more benefit here" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Best solution for your problems" />
                        </ListItem>
                    </List>
                    <Button className='btn'>Get started</Button>
                </Grid>
                <Grid className='card' item md={3.5} sm={2}>
                    <Typography className='package' variant="h5" align="left">Custom</Typography>
                    <Typography className='text-line' variant="body2" align="left">Ideal for those who have experience dealing with starting new life abroad.</Typography>
                    <Divider className='divider' />
                    <List>
                        <ListItem>
                            <ListItemText primary="100% Money back policy" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Any benefit here" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="One more benefit here" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Best solution for your problems" />
                        </ListItem>
                    </List>
                    <Button className='btn'>Get started</Button>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}
