import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container>
      <div className="ball top"></div>
      <div className="ball bottom"></div>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bem-vindo ao TeacherHunter
        </Typography>
        <Typography variant="body1">
          Este é um exemplo de página inicial estilizada com Material UI e CSS customizado.
        </Typography>
        {/* Conteúdo adicional da página */}
      </Box>
    </Container>
  );
};

export default HomePage;
