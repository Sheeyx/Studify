import React from 'react'
import "./styles.scss"
import { Button, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'

export default function PricePackage() {
  return (
    <div className='price-package' id='pricing'>
        <div className='container'>
            <Typography className='heading'>Choose your package</Typography>
            <Typography className='text'>Whether you're just starting or need full support, there's a package for you.</Typography>
            <Grid container justifyContent="space-between" spacing={2} style={{ marginTop: 50 }}>
                <Grid className='card' item md={3.5} sm={2}>
                    <Typography className='package' variant="h5" align="left">Basic</Typography>
                    <Typography className='text-line' variant="body2" align="left">Ideal for those who have experience dealing with starting new life abroad.</Typography>
                    <Divider className='divider' />
                    <List>
                        <ListItem>
                            <ListItemText primary="Study Abroad Consultation" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="University Admission Support" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Visa Application Guidance" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="No Post-Arrival Services" />
                        </ListItem>
                    </List>
                    <Button className='btn'>Get started</Button>
                </Grid>
                <Grid className='card' item md={3.5} sm={2}>
                    <Typography className='package' variant="h5" align="left">Premium</Typography>
                    <Typography className='text-line' variant="body2" align="left">Complete A to Z support – from planning to arrival in your new country.</Typography>
                    <Divider className='divider' />
                    <List>
                        <ListItem>
                            <ListItemText primary="Everything in the Basic Package" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Airport Pickup & Welcome" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Accommodation Arrangement" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Full Ongoing Support" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Direct Contact with Our Advisors" />
                        </ListItem>
                    </List>
                    <Button className='btn'>Get started</Button>
                </Grid>
                <Grid className='card' item md={3.5} sm={2}>
                    <Typography className='package' variant="h5" align="left">Zero Loss</Typography>
                    <Typography className='text-line' variant="body2" align="left">Full responsibility. Zero risk. 100% confidence.</Typography>
                    <Divider className='divider' />
                    <List>
                        <ListItem>
                            <ListItemText primary="Free Consultation & Career Guidance" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Guaranteed University Admission" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Complete Document Preparation" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Priority Support from Senior Advisors" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Airport Pickup & Accommodation Support" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Post-Arrival Support (SIM, Banking, Orientation, etc.)" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="100% Money-Back Guarantee if Visa is Rejected" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="✅ You focus on your future. We take care of the rest — or you pay nothing." />
                        </ListItem>
                    </List>
                    <Button className='btn'>Get started</Button>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}
