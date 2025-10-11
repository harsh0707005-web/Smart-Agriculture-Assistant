// ============================================
// Configuration File
// ============================================
// Update these values as per your network setup

const CONFIG = {
    // Frontend machine IP
    FRONTEND_IP: window.location.hostname === 'localhost' ? '10.175.34.172' : window.location.hostname,
    
    // Backend API (on backend laptop)
    // For local development: use local IP
    // For production: Replace 'localhost' with your deployed backend URL when ready
    BACKEND_IP: window.location.hostname === 'localhost' ? '10.175.34.239' : '10.175.34.239',
    BACKEND_PORT: '5001',
    
    // Database server IP
    DATABASE_IP: '10.175.34.120',
    DATABASE_PORT: '27017',
    DATABASE_NAME: 'smartAgri',
    
    // Environment mode
    DEBUG: window.location.hostname === 'localhost'
};

// Computed values
CONFIG.BACKEND_URL = `http://${CONFIG.BACKEND_IP}:${CONFIG.BACKEND_PORT}`;
CONFIG.API_BASE_URL = `${CONFIG.BACKEND_URL}/api`;
CONFIG.DATABASE_URL = `mongodb://${CONFIG.DATABASE_IP}:${CONFIG.DATABASE_PORT}/${CONFIG.DATABASE_NAME}`;

// Export for use in other files
window.CONFIG = CONFIG;

console.log('✅ Configuration loaded from config.js');
console.log(`   Frontend IP: ${CONFIG.FRONTEND_IP}`);
console.log(`   Backend IP: ${CONFIG.BACKEND_IP}:${CONFIG.BACKEND_PORT}`);
console.log(`   Database IP: ${CONFIG.DATABASE_IP}`);
console.log(`   API Base URL: ${CONFIG.API_BASE_URL}`);
