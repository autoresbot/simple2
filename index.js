const axios = require('axios');

// Fungsi untuk mendapatkan dan menampilkan IP publik
async function showPublicIP() {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        console.log('Berhasil mendapatkan IP')
        console.log(`IP Publik Anda: ${response.data.ip}`);
    } catch (error) {
        console.error('Gagal mendapatkan IP:', error.message);
    }
}

// Memanggil fungsi
showPublicIP();
