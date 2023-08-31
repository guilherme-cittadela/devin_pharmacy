import React from 'react';

const footerStyle = {
  backgroundColor: '#f2f2f2',
  padding: '20px',
  textAlign: 'center',
  width: '100%',
  marginTop: "16px"
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Desenvolvido por <a style={{textDecoration: "none", color: "#969191", fontWeight: "bold"}} href="https://www.linkedin.com/in/guilherme-cittadela/" target="_blank" rel="noopener noreferrer">Guilherme Cittadela</a> </p>
    </footer>
  );
}

export { Footer};
