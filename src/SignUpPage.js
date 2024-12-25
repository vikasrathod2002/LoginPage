import React from 'react';

const SignUpPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Sign Up</h2>
        <form>
          <input 
            type="text" 
            placeholder="Full Name" 
            style={styles.input} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            style={styles.input} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            style={styles.input} 
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.text}>
          Already have an account? <a href="/login" style={styles.link}>Login</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '1rem',
    fontSize: '24px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '0.5rem 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  text: {
    marginTop: '1rem',
    fontSize: '14px',
    color: '#666',
  },
  link: {
    color: '#4CAF50',
    textDecoration: 'none',
  },
};

export default SignUpPage;
