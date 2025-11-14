import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  AppBar,
  Toolbar
} from '@mui/material';
import {
  Home,
  People,
  Favorite,
  School,
  Work,
  CheckCircle,
  ArrowBack
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

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
            About Cheshire Homes
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Paper elevation={0} sx={{ p: 4, mb: 4, bgcolor: 'primary.main', color: 'white', borderRadius: 3 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            About Cheshire Homes
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
            Empowering lives through compassionate care and inclusive communities since 1948
          </Typography>
        </Paper>

        {/* Mission & Vision */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
                  To provide quality residential care, rehabilitation, and support services for people with 
                  physical disabilities, enabling them to live with dignity, independence, and purpose in 
                  an inclusive community environment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
                  A world where every person with a disability has equal opportunities to participate 
                  fully in society, achieve their potential, and contribute meaningfully to their communities 
                  through comprehensive care and support.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* History Section */}
        <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
            Our History
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
            Cheshire Homes was founded in 1948 by Group Captain Leonard Cheshire VC OM DSO DFC, 
            a decorated Royal Air Force pilot who dedicated his life to caring for people with disabilities. 
            What began as a single home in Hampshire, England, has grown into a global network of care facilities.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
            The Mumbai chapter of Cheshire Homes was established to serve the needs of people with 
            physical disabilities in the metropolitan region. Located in Andheri East, our facility 
            has been a beacon of hope and care for residents and their families for decades.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            Today, we continue Leonard Cheshire's legacy by providing comprehensive residential care, 
            medical support, rehabilitation services, and vocational training to help our residents 
            achieve maximum independence and quality of life.
          </Typography>
        </Paper>

        {/* Services Section */}
        <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
            Our Services
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Home color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Residential Care" 
                    secondary="24/7 supportive living environment with personal care assistance"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Favorite color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Medical Support" 
                    secondary="Regular health monitoring, medication management, and healthcare coordination"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <School color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Rehabilitation Services" 
                    secondary="Physiotherapy, occupational therapy, and adaptive equipment training"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Work color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Vocational Training" 
                    secondary="Skills development and employment preparation programs"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <People color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Community Integration" 
                    secondary="Social activities, outings, and community participation programs"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Family Support" 
                    secondary="Counseling, education, and respite services for families"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>

        {/* Values Section */}
        <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
            Our Values
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  Dignity
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Respecting the inherent worth and rights of every individual
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  Compassion
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Providing care with empathy, understanding, and kindness
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  Independence
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Empowering individuals to achieve maximum self-reliance
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;