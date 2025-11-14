import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Box,
  TextField,
  InputAdornment,
} from '@mui/material';
import { Edit, Delete, Search, Home, PersonAdd } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { loadPeople, deletePerson } from '../data/mockData';

function PersonList() {
  const [persons, setPersons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const data = loadPeople();
    setPersons(data);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      deletePerson(id);
      setPersons(loadPeople());
    }
  };

  const filteredPersons = persons.filter(person =>
    person.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.disability?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.guardianName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.bloodGroup?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.disabilitySeverity?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.gender?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.address?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <AppBar 
        position="static" 
        sx={{ 
          bgcolor: '#2f3542',
          boxShadow: 'none',
          borderBottom: '3px solid #1a237e'
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontFamily: 'Georgia, serif',
              fontSize: '1.5rem'
            }}
          >
            Cheshire Homes India
          </Typography>
          <Button 
            color="inherit" 
            startIcon={<Home />} 
            onClick={() => navigate('/')}
            sx={{
              fontFamily: 'Georgia, serif',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 6, mb: 6 }}>
        <Box sx={{ 
          mb: 5, 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between', 
          alignItems: { xs: 'stretch', sm: 'center' },
          gap: 2
        }}>
          <Typography 
            variant="h4" 
            component="h1"
            sx={{
              fontFamily: 'Georgia, serif',
              color: '#2f3542',
              fontWeight: 600
            }}
          >
            Residents Directory
          </Typography>
          <Button
            variant="contained"
            startIcon={<PersonAdd />}
            onClick={() => navigate('/person/add')}
            sx={{
              bgcolor: '#1a237e',
              fontFamily: 'Georgia, serif',
              px: 3,
              py: 1,
              '&:hover': {
                bgcolor: '#0d1432'
              }
            }}
          >
            Add New Resident
          </Button>
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search residents by name, disability, blood group..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ 
            mb: 4,
            '& .MuiOutlinedInput-root': {
              bgcolor: '#fff',
              fontFamily: 'Georgia, serif',
              '& fieldset': {
                borderColor: '#ddd',
              },
              '&:hover fieldset': {
                borderColor: '#1a237e',
              },
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#57606f' }} />
              </InputAdornment>
            ),
          }}
        />

        <Grid container spacing={2}>
          {filteredPersons.map((person) => (
            <Grid item xs={12} sm={6} key={person.id}>
              <Card 
                sx={{ 
                  display: 'flex',
                  height: '320px',
                  width: '650px', // Fixed constant width for all cards
                  bgcolor: '#f5f5f5',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  '&:hover': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 200,
                    height: '100%',
                    objectFit: 'cover',
                    borderRight: '1px solid #ddd'
                  }}
                  image={person.photo || `https://randomuser.me/api/portraits/${person.id % 2 ? 'men' : 'women'}/${person.id}.jpg`}
                  alt={person.name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                  <CardContent sx={{ 
                    flex: 1, 
                    p: 3, 
                    display: 'flex', 
                    flexDirection: 'column',
                    minHeight: 0 // Allow content to shrink
                  }}>
                    <Typography variant="h5" component="h2" sx={{ 
                      color: '#2f3542',
                      fontWeight: 600,
                      mb: 2,
                      fontFamily: 'Georgia, serif',
                      minHeight: '32px' // Fixed height for name
                    }}>
                      {person.name}
                    </Typography>
                    
                    <Grid container spacing={1.5} sx={{ flex: 1 }}>
                      <Grid item xs={6}>
                        <Typography variant="body1" sx={{ 
                          color: '#57606f',
                          fontFamily: 'Georgia, serif',
                          fontSize: '0.9rem',
                          minHeight: '20px'
                        }}>
                          Age: {person.age}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1" sx={{ 
                          color: '#57606f',
                          fontFamily: 'Georgia, serif',
                          fontSize: '0.9rem',
                          minHeight: '20px'
                        }}>
                          Gender: {person.gender}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1" sx={{ 
                          color: '#2f3542',
                          fontFamily: 'Georgia, serif',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          minHeight: '40px', // Fixed height for disability (may wrap)
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          Disability: {person.disability}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1" sx={{ 
                          color: '#e55039',
                          fontFamily: 'Georgia, serif',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          minHeight: '20px' // Always reserve space for severity
                        }}>
                          {person.disabilitySeverity && person.disabilitySeverity !== '-' 
                            ? `Severity: ${person.disabilitySeverity}` 
                            : ''}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1" sx={{ 
                          color: '#57606f',
                          fontFamily: 'Georgia, serif',
                          fontSize: '0.9rem',
                          minHeight: '20px'
                        }}>
                          Blood: {person.bloodGroup || 'Not specified'}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1" sx={{ 
                          color: '#57606f',
                          fontFamily: 'Georgia, serif',
                          fontSize: '0.9rem',
                          minHeight: '20px'
                        }}>
                          ID: CHM-{String(person.id).padStart(3, '0')}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1" sx={{ 
                          color: '#57606f',
                          fontFamily: 'Georgia, serif',
                          fontSize: '0.85rem',
                          minHeight: '20px',
                          display: '-webkit-box',
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          Guardian: {person.guardianName}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions sx={{ 
                    justifyContent: 'flex-end',
                    p: 2,
                    borderTop: '1px solid #ddd',
                    bgcolor: '#fff'
                  }}>
                    <Button
                      size="small"
                      startIcon={<Edit />}
                      onClick={() => navigate(`/person/edit/${person.id}`)}
                      sx={{
                        fontFamily: 'Georgia, serif',
                        color: '#2f3542',
                        '&:hover': {
                          bgcolor: '#f1f2f6'
                        }
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => handleDelete(person.id)}
                      sx={{
                        fontFamily: 'Georgia, serif',
                        '&:hover': {
                          bgcolor: '#fff8f8'
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredPersons.length === 0 && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No residents found
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default PersonList;