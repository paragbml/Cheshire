import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  AppBar,
  Toolbar,
  Chip
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  WhatsApp,
  ArrowBack,
  AccessTime,
  Directions
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Location from '../components/Location';

const Contact = () => {
  const navigate = useNavigate();

  const cheshireLocation = {
    lat: 19.1176,
    lng: 72.8697,
    address: "Bethlehem House, Opposite Canosa High School, Behind Sacred Heart Church, Mahakali Caves Road, Andheri East, Mumbai-400093"
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Navigation Bar */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/')}
            sx={{ color: 'primary.main', mr: 2 }}
          >
            Back to Home
          </Button>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 600 }}>
            Contact Us
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Paper elevation={0} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white', borderRadius: 3 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Contact Cheshire Homes Mumbai
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
            We're here to help. Reach out to us for inquiries, support, or to learn more about our services.
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: 'fit-content', borderRadius: 3, mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  Get in Touch
                </Typography>
                
                <List sx={{ mt: 2 }}>
                  {/* Address */}
                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemIcon>
                      <LocationOn color="primary" sx={{ fontSize: 28 }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          Address
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body1" sx={{ mt: 0.5, lineHeight: 1.6 }}>
                          Bethlehem House<br />
                          Opposite Canosa High School<br />
                          Behind Sacred Heart Church<br />
                          Mahakali Caves Road<br />
                          Andheri East, Mumbai-400093
                        </Typography>
                      }
                    />
                  </ListItem>

                  {/* Phone Numbers */}
                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemIcon>
                      <Phone color="primary" sx={{ fontSize: 28 }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          Phone Numbers
                        </Typography>
                      }
                      secondary={
                        <Box sx={{ mt: 0.5 }}>
                          <Typography variant="body1" sx={{ mb: 0.5 }}>
                            +91 22 47489330
                          </Typography>
                          <Typography variant="body1">
                            +91 87 79022386
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>

                  {/* WhatsApp */}
                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemIcon>
                      <WhatsApp color="primary" sx={{ fontSize: 28 }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          WhatsApp
                        </Typography>
                      }
                      secondary={
                        <Box sx={{ mt: 0.5 }}>
                          <Chip 
                            label="+91 87 79022386"
                            variant="outlined"
                            color="primary"
                            sx={{ fontWeight: 500 }}
                          />
                        </Box>
                      }
                    />
                  </ListItem>

                  {/* Email */}
                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemIcon>
                      <Email color="primary" sx={{ fontSize: 28 }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          Email
                        </Typography>
                      }
                      secondary={
                        <Box sx={{ mt: 0.5 }}>
                          <Typography variant="body1" sx={{ mb: 0.5 }}>
                            info.mumbai@cheshireindia.org
                          </Typography>
                          <Typography variant="body1">
                            cheshirehomemumbai@gmail.com
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            {/* Visiting Hours */}
            <Card elevation={2} sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  <AccessTime sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Visiting Hours
                </Typography>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText 
                      primary="Monday - Friday"
                      secondary="10:00 AM - 6:00 PM"
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText 
                      primary="Saturday"
                      secondary="10:00 AM - 4:00 PM"
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText 
                      primary="Sunday"
                      secondary="10:00 AM - 2:00 PM"
                    />
                  </ListItem>
                </List>
                <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic', color: 'text.secondary' }}>
                  Please call ahead to schedule your visit
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Map Section */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ p: 3, pb: 2 }}>
                  <Typography variant="h5" component="h2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                    <Directions sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Find Us
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                    Located in the heart of Andheri East, easily accessible by public transport
                  </Typography>
                </Box>
                
                <Box sx={{ height: '400px', borderRadius: '0 0 12px 12px', overflow: 'hidden' }}>
                  <Location 
                    location={cheshireLocation}
                    height="400px"
                  />
                </Box>
                
                <Box sx={{ p: 3, pt: 2 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    <strong>Nearest Landmarks:</strong><br />
                    • Canosa High School (Opposite)<br />
                    • Sacred Heart Church (Behind)<br />
                    • Mahakali Caves Road Metro Station (1 km)<br />
                    • Andheri East Railway Station (2 km)
                  </Typography>
                  
                  <Button
                    variant="contained"
                    startIcon={<Directions />}
                    href={`https://maps.google.com/?q=${cheshireLocation.lat},${cheshireLocation.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 1 }}
                  >
                    Get Directions
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Emergency Contact */}
        <Paper 
          elevation={2} 
          sx={{ 
            p: 3, 
            mt: 4, 
            borderRadius: 3,
            bgcolor: '#fff3e0',
            border: '1px solid #ffb74d'
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: '#e65100', fontWeight: 600 }}>
            Emergency Contact
          </Typography>
          <Typography variant="body1" sx={{ color: '#bf360c' }}>
            For urgent matters outside visiting hours, please call: <strong>+91 87 79022386</strong>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;