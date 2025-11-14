const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');

mongoose.connect('mongodb://localhost:27017/cheshiredb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('Connected to MongoDB');
  
  try {
    // First, check if admin already exists
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      mongoose.connection.close();
      return;
    }

    // Create new admin user
    const hashedPassword = await bcrypt.hash('admin123', 12);
    const admin = new Admin({
      username: 'admin',
      password: hashedPassword,
      email: 'admin@cheshirehomes.org'
    });

    await admin.save();
    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error creating admin:', error);
  }
  
  mongoose.connection.close();
})
.catch((err) => console.error('MongoDB connection error:', err));