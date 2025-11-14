import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  AppBar,
  Toolbar,
  Alert,
} from '@mui/material';
import { Home, Save, ArrowBack } from '@mui/icons-material';
import { loadPeople, savePerson } from '../data/mockData';

function PersonForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    dateOfAdmission: '',
    disability: '',
    address: '',
    contact: '',
    emergencyContact: '',
    bloodGroup: '',
    medicalHistory: '',
    currentMedications: '',
    allergies: '',
    dietaryRestrictions: '',
    photo: '',
    guardianName: '',
    guardianContact: '',
    guardianRelation: '',
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      const people = loadPeople();
      const person = people.find(p => p.id === parseInt(id));
      if (person) {
        setFormData(person);
      } else {
        navigate('/persons');
      }
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    savePerson({ ...formData, id: id ? parseInt(id) : undefined });
    setSuccess(true);
    setTimeout(() => {
      navigate('/persons');
    }, 1500);
  };

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cheshire Homes India
          </Typography>
          <Button color="inherit" startIcon={<Home />} onClick={() => navigate('/')}>
            Home
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {id ? 'Person updated successfully!' : 'Person added successfully!'}
          </Alert>
        )}

        <Paper elevation={3} sx={{ p: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              {id ? 'Edit Person' : 'Add New Person'}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {id ? 'Update the information below to modify the person\'s details.' : 'Fill in the information below to add a new person to the system.'}
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  helperText="Enter the person's full name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  inputProps={{ min: 0, max: 150 }}
                  helperText="Enter the person's age"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Type of Disability"
                  name="disability"
                  value={formData.disability}
                  onChange={handleChange}
                  required
                  helperText="Specify the type of disability"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date of Admission"
                  name="dateOfAdmission"
                  type="date"
                  value={formData.dateOfAdmission}
                  onChange={handleChange}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Complete Address"
                  name="address"
                  multiline
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  required
                  helperText="Enter the full residential address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Blood Group"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value=""></option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Medical History"
                  name="medicalHistory"
                  multiline
                  rows={3}
                  value={formData.medicalHistory}
                  onChange={handleChange}
                  helperText="Include relevant medical history and conditions"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Current Medications"
                  name="currentMedications"
                  multiline
                  rows={2}
                  value={formData.currentMedications}
                  onChange={handleChange}
                  helperText="List all current medications and dosages"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Allergies"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  helperText="List any known allergies"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Dietary Restrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  helperText="Any specific dietary needs or restrictions"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Emergency Contact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  required
                  helperText="Emergency contact number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Medical History"
                  name="medicalHistory"
                  multiline
                  rows={4}
                  value={formData.medicalHistory}
                  onChange={handleChange}
                  helperText="Provide relevant medical history and ongoing treatments"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Photo URL"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                  helperText="Enter a URL for the person's photo"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Guardian Information
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Guardian Name"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                  required
                  helperText="Full name of the guardian"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Guardian Contact"
                  name="guardianContact"
                  value={formData.guardianContact}
                  onChange={handleChange}
                  required
                  helperText="Guardian's contact number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Relation to Resident"
                  name="guardianRelation"
                  value={formData.guardianRelation}
                  onChange={handleChange}
                  required
                  helperText="Guardian's relationship to the resident"
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<Save />}
                  >
                    {id ? 'Update Person' : 'Save Person'}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<ArrowBack />}
                    onClick={() => navigate('/persons')}
                  >
                    Back to List
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default PersonForm;