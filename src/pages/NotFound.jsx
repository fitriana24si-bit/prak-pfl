import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound({
    code = "404",
    title = "Halaman Tidak Ditemukan",
    description = "Halaman yang kamu cari mungkin sudah dipindahkan atau tidak tersedia.",
    image
}) {
    const navigate = useNavigate();

    return (
        <div style={styles.wrapper}>
            
            <div style={styles.bgCircle}></div>

            <div style={styles.container}>
                
                <h1 style={styles.errorCode}>{code}</h1>

                <h2 style={styles.title}>
                    {title}
                </h2>

                <p style={styles.description}>
                    {description}
                </p>

                {image && (
                    <img 
                        src={image} 
                        alt="error" 
                        style={{ width: "200px", marginBottom: "20px" }}
                    />
                )}

                <div style={styles.buttonGroup}>
                    <button 
                        style={styles.primaryBtn}
                        onClick={() => navigate('/')}
                    >
                        Kembali ke Dashboard
                    </button>

                    <button 
                        style={styles.secondaryBtn}
                        onClick={() => navigate(-1)}
                    >
                        Kembali
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    wrapper: {
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Poppins', sans-serif",
        background: '#f9fafb',
        overflow: 'hidden'
    },
    bgCircle: {
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: '#00B074',
        borderRadius: '50%',
        filter: 'blur(150px)',
        opacity: '0.2'
    },
    container: {
        textAlign: 'center',
        zIndex: 2
    },
    errorCode: {
        fontSize: '120px',
        fontWeight: '800',
        margin: 0,
        color: '#00B074',
        letterSpacing: '5px'
    },
    title: {
        fontSize: '26px',
        fontWeight: '600',
        marginTop: '10px'
    },
    description: {
        color: '#777',
        margin: '15px auto 30px',
        maxWidth: '400px',
        lineHeight: '1.6'
    },
    buttonGroup: {
        display: 'flex',
        gap: '15px',
        justifyContent: 'center'
    },
    primaryBtn: {
        backgroundColor: '#00B074',
        color: '#fff',
        border: 'none',
        padding: '12px 22px',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: 'pointer'
    },
    secondaryBtn: {
        backgroundColor: 'transparent',
        border: '2px solid #00B074',
        color: '#00B074',
        padding: '12px 22px',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: 'pointer'
    }
};