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
      <p>© {new Date().getFullYear()} Minha Aplicação. Todos os direitos reservados.</p>
    </footer>
  );
}

export { Footer};
