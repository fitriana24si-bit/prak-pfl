import React from 'react';
import { useNavigate } from 'react-router-dom'; // Jika kamu menggunakan React Router

export default function NotFound() {
    const navigate = useNavigate();

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
            textAlign: 'center',
            fontFamily: "'Poppins', sans-serif", // Menyesuaikan style dashboard
            color: '#333'
        },
        errorCode: {
            fontSize: '120px',
            fontWeight: '800',
            margin: '0',
            color: '#00B074', // Hijau yang senada dengan tombol 'Add Order'
            lineHeight: '1'
        },
        title: {
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '10px'
        },
        description: {
            color: '#777',
            marginBottom: '30px',
            maxWidth: '400px'
        },
        button: {
            backgroundColor: '#00B074', // Match dengan branding Sedap
            color: 'white',
            border: 'none',
            padding: '12px 25px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: '0.3s',
            boxShadow: '0px 4px 10px rgba(0, 176, 116, 0.2)'
        }
    };

    return (
        <div id="dashboard-container" style={{ padding: '20px' }}>
            {/* Tetap menggunakan header agar user tetap merasa di dalam aplikasi */}
            <div style={styles.container}>
                <h1 style={styles.errorCode}>404</h1>
                <h2 style={styles.title}>Waduh! Halaman Tidak Ditemukan</h2>
                <p style={styles.description}>
                    Sepertinya halaman yang kamu cari sudah dipindah atau memang tidak pernah ada. 
                    Yuk, balik ke dashboard utama!
                </p>
                <button 
                    style={styles.button}
                    onClick={() => navigate('/')}
                    onMouseOver={(e) => e.target.style.opacity = '0.9'}
                    onMouseOut={(e) => e.target.style.opacity = '1'}
                >
                    Kembali ke Dashboard
                </button>
            </div>
        </div>
    );
}