const mongoose = require('mongoose');

// Test MongoDB connection
const testConnection = async () => {
  console.log('🔍 Testing MongoDB connection...');
  console.log('Connection string: mongodb://localhost:27017/smartAgri');
  
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/smartAgri');
    
    console.log('✅ MongoDB Connected Successfully!');
    console.log(`📊 Host: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    console.log(`📊 Port: ${conn.connection.port}`);
    console.log(`📊 Ready State: ${conn.connection.readyState}`); // 1 = connected
    
    // Close connection
    await mongoose.connection.close();
    console.log('✅ Connection closed successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ MongoDB Connection Failed!');
    console.error('Error:', error.message);
    console.error('\n💡 Possible reasons:');
    console.error('1. MongoDB is not installed');
    console.error('2. MongoDB service is not running');
    console.error('3. Wrong connection string');
    console.error('\n📝 To fix:');
    console.error('- Install MongoDB: https://www.mongodb.com/try/download/community');
    console.error('- Start MongoDB service:');
    console.error('  Windows: net start MongoDB');
    console.error('  Mac/Linux: sudo systemctl start mongod');
    process.exit(1);
  }
};

testConnection();
