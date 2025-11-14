import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  Stack,
  Paper,
} from '@mui/material';
import Location from '../components/Location';
import { PersonAdd, People, Home, Accessible, LocationOn, VolunteerActivism, LocalHospital } from '@mui/icons-material';

// Hero image from Cheshire Homes Facebook page
const headerImage = 'https://scontent.fbom3-5.fna.fbcdn.net/v/t39.30808-6/482216213_1060254359475985_4398650229568423369_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=pwYrGRkvEbcQ7kNvwGw1uSW&_nc_oc=Adk8PAQT06KNhIo3uK5yVYl2x_cPG9yKXc69V5416slHTt18XbyTrhzszUXy6t_9g3FZ9iuf7DfPCLj0ilCmt-6M&_nc_zt=23&_nc_ht=scontent.fbom3-5.fna&_nc_gid=U66A4J77yL67TVczqvjqcQ&oh=00_AfjdlTZlcr8umtuY5FtXJVT5_A-4neb2sA8KtJoowhqU7Q&oe=69136C52';

function Dashboard() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Residential Care",
      description: "Environment of Care, Love, Respect promoting a Productive Life with Dignity for Persons with Disability",
      icon: <Home fontSize="large" />,
    },
    {
      title: "CBR Program", 
      description: "Services That Reach Out to Children with Disabilities Living in Poverty through Health and Education Interventions",
      icon: <LocalHospital fontSize="large" />,
    },
    {
      title: "Sustainable Livelihood",
      description: "Skills Training Programme Empowering Youth with Disabilities with Gainful Employment",
      icon: <Accessible fontSize="large" />,
    },
    {
      title: "Community Outreach",
      description: "Impacting lives of hundreds of Children, Youth & Adults with Disabilities through comprehensive interventions",
      icon: <VolunteerActivism fontSize="large" />,
    }
  ];

  return (
    <Box>
      {/* Header */}
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ bgcolor: 'rgba(255, 255, 255, 0.95)' }}>
        <Toolbar sx={{ py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
              component="img"
              src="https://www.mumbaicheshire.org/images/cheshire_logo.png"
              alt="Cheshire Homes Logo"
              sx={{ 
                height: 60, 
                width: 'auto',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                cursor: 'pointer'
              }}
              onClick={() => navigate('/')}
            />
          </Box>
          <Stack direction="row" spacing={2}>
            <Button 
              color="primary" 
              variant="text" 
              onClick={() => navigate('/')}
              sx={{
                fontWeight: 500,
                fontSize: '0.95rem',
                '&:hover': { backgroundColor: 'rgba(26, 35, 126, 0.08)' }
              }}
            >
              <Home sx={{ mr: 0.5 }} /> Home
            </Button>
            <Button 
              color="primary" 
              variant="text" 
              onClick={() => navigate('/about')}
              sx={{
                fontWeight: 500,
                fontSize: '0.95rem',
                '&:hover': { backgroundColor: 'rgba(26, 35, 126, 0.08)' }
              }}
            >
              About Us
            </Button>

            <Button 
              color="primary" 
              variant="text" 
              onClick={() => navigate('/persons')}
              sx={{
                fontWeight: 500,
                fontSize: '0.95rem',
                '&:hover': { backgroundColor: 'rgba(26, 35, 126, 0.08)' }
              }}
            >
              <People sx={{ mr: 0.5 }} /> Directory
            </Button>
            <Button 
              color="primary" 
              variant="text"
              onClick={() => navigate('/contact')}
              sx={{
                fontWeight: 500,
                fontSize: '0.95rem',
                '&:hover': { backgroundColor: 'rgba(26, 35, 126, 0.08)' }
              }}
            >
              Contact
            </Button>
            <Button 
              color="primary" 
              variant="contained" 
              onClick={() => navigate('/person/add')}
              sx={{
                fontWeight: 500,
                fontSize: '0.95rem',
                borderRadius: 2,
                px: 3,
                ml: 2,
                '&:hover': { transform: 'translateY(-2px)' },
                transition: 'transform 0.2s'
              }}
            >
              <PersonAdd sx={{ mr: 0.5 }} /> Add Resident
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '70vh',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://lh3.googleusercontent.com/gps-cs-s/AG0ilSynVr-6TTcnTjNghQVNz2cAGyXI0l5Vw60Yp8tfcLr8aQ_BJK_NIR-Usf2y1C9nOHZ1tCfrPMRNlqHijGSuhIPp56-yCsAUnd2pqmibLYtGux3RLVz_h0bnrBahRLI9V9d2vSFL=s1360-w1360-h1020-rw')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <Container
          sx={{
            position: 'relative',
            zIndex: 1,
            mt: 8,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ p: 4 }}>
                <Typography 
                  variant="h1" 
                  component="h1" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 700,
                    mb: 3,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    letterSpacing: '-0.5px'
                  }}
                >
                  Empowering Lives Through Dignity & Support
                </Typography>
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    mb: 4, 
                    lineHeight: 1.6,
                    opacity: 0.9,
                    fontWeight: 400
                  }}
                >
                  Providing comprehensive care and rehabilitation services to individuals with disabilities in Mumbai, fostering independence and dignity.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/person/add')}
                    sx={{
                      bgcolor: '#1a237e',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      borderRadius: 2,
                      '&:hover': {
                        bgcolor: '#2c387e',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s'
                    }}
                  >
                    <PersonAdd sx={{ mr: 1 }} /> Add New Resident
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/persons')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      borderRadius: 2,
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s'
                    }}
                  >
                    <People sx={{ mr: 1 }} /> View Directory
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ bgcolor: '#1a237e', color: 'white', py: 8 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {[
              { icon: <Accessible sx={{ fontSize: 40 }}/>, count: '500+', label: 'Lives Impacted' },
              { icon: <LocationOn sx={{ fontSize: 40 }}/>, count: '15+', label: 'Locations in India' },
              { icon: <VolunteerActivism sx={{ fontSize: 40 }}/>, count: '200+', label: 'Care Providers' },
              { icon: <LocalHospital sx={{ fontSize: 40 }}/>, count: '24/7', label: 'Medical Support' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  {stat.icon}
                  <Typography variant="h3" sx={{ my: 2, fontWeight: 700 }}>
                    {stat.count}
                  </Typography>
                  <Typography variant="h6">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" gutterBottom sx={{ color: '#1a237e', fontWeight: 700 }}>
                Our Mission
              </Typography>
              <Typography variant="h6" paragraph color="text.secondary" sx={{ mb: 4 }}>
                Cheshire Homes India is dedicated to providing comprehensive care, support, and opportunities 
                for people with disabilities. We believe in:
              </Typography>
              {[
                'Dignity and respect for all individuals',
                'Professional medical care and rehabilitation',
                'Creating an inclusive and supportive community',
                'Empowering through education and skill development'
              ].map((point, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      mr: 2
                    }}
                  />
                  <Typography variant="body1">{point}</Typography>
                </Box>
              ))}
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Action Cards */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom sx={{ color: '#1a237e', fontWeight: 700, mb: 6 }}>
            Management Portal
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PersonAdd color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h4">Add Resident</Typography>
                </Box>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  Register a new resident to our care facility. Add their personal details, 
                  medical history, and contact information to ensure comprehensive care management.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/person/add')}
                  sx={{ px: 4, py: 1.5 }}
                >
                  Add New Resident
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <People color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h4">View Directory</Typography>
                </Box>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  Access and manage the complete directory of residents. View detailed profiles,
                  update information, and maintain accurate records of our community.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/persons')}
                  sx={{ px: 4, py: 1.5 }}
                >
                  Open Directory
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" gutterBottom sx={{ color: '#1a237e', fontWeight: 700 }}>
                About Cheshire Homes
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                Cheshire Home Mumbai established in the year 1955 by Late Group Captain Leonard Cheshire V.C., U.K. 
                Cheshire Home Mumbai is the first home outside the U.K. set up as a residential care for terminally 
                ill and disabled men with no means or support.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                Cheshire Homes India, Mumbai (CHM) is a non-profit organisation registered under Societies Registration 
                Act 1860 and under Bombay Public Trusts Act 1950 with registrations under 80-G and a valid FCRA.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, fontStyle: 'italic', color: '#666' }}>
                "We strive to see ourselves as partners in a common struggle; working towards the same essential goal 
                of dignity, respect, and empowerment for all individuals with disabilities."
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ color: '#1a237e', fontWeight: 700, mb: 1 }}>
                  1955
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Established
                </Typography>
                <Typography variant="h4" sx={{ color: '#1a237e', fontWeight: 700, mb: 1 }}>
                  First
                </Typography>
                <Typography variant="body1">
                  Cheshire Home outside the U.K.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Philosophy Section */}
      <Box sx={{ py: 6, bgcolor: '#f8f8f8' }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {/* Inspirational Quotes Section */}
            <Grid item xs={12} md={10}>
              <Box sx={{ 
                p: 4, 
                bgcolor: 'rgba(26, 35, 126, 0.05)', 
                borderRadius: 2,
                borderLeft: '4px solid #1a237e'
              }}>
                <Typography variant="h5" gutterBottom fontWeight={600} sx={{ color: '#1a237e' }}>
                  Our Philosophy
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    fontStyle: 'italic', 
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: '#2f3542'
                  }}
                >
                  "Behind this great ideal lies an issue of principle. Our efforts to help someone raise himself 
                  to a higher standard of living are the most effective and the more valued proportionately as we 
                  become personally and genuinely involved. In this way, and this way only, we begin to see ourselves 
                  as partners in a common struggle."
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    textAlign: 'right', 
                    fontWeight: 600,
                    color: '#1a237e'
                  }}
                >
                  — Group Captain Leonard Cheshire V.C., Founder
                </Typography>
              </Box>
            </Grid>

            {/* Additional Information */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Transportation
                </Typography>
                <Typography variant="body2">
                  • Nearest Railway: Andheri East<br />
                  • Metro: Andheri East Metro Station<br />
                  • Bus Routes: 185, 334, 415<br />
                  • Auto-rickshaw accessible
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Volunteer Opportunities
                </Typography>
                <Typography variant="body2">
                  • Teaching & Skill Development<br />
                  • Medical Support<br />
                  • Recreation Activities<br />
                  • Administrative Support
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Donation Options
                </Typography>
                <Typography variant="body2">
                  • Monthly Sponsorship<br />
                  • Medical Equipment<br />
                  • Educational Materials<br />
                  • Food & Clothing Drives
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#0a1029', color: 'white', py: 4 }}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Cheshire Homes India</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Bethlehem House, Mahakali Caves Rd, opposite Canosa High School, 
                Subhash Nagar, Andheri(E), Mumbai, Maharashtra 400093
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { md: 'right' } }}>
              <Typography variant="body2">© 2025 Cheshire Homes India. All rights reserved.</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;