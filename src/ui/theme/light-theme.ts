import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#9661ff",
      main: "#6b2aee",
      dark: "#581ecd",
    },
    background: {
      default: "#000", // Fundo preto para a página
      paper: "#121212", // Fundo escuro para componentes como cards
    },
    text: {
      primary: "#ffffff", // Texto branco
      secondary: "#9b9b9b",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    button: {
      textTransform: 'none', // Sem caixa alta nos botões
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          width: '100%',
          backgroundColor: "#000", // Fundo preto
        },
        body: {
          backgroundColor: "#000", // Fundo preto
          minHeight: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0,
          overflowX: "hidden", // Impede o scroll lateral
        },
        '#__next': {
          height: '100%',
          width: '100%',
          backgroundColor: "#000", // Fundo preto
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          padding: "12px 24px", // Ajuste de padding
          borderWidth: "2px", // Largura da borda
          backgroundColor: "transparent", // Evitar fundo branco nos botões
          borderColor: "#6b2aee", // Garantir que a borda seja roxa
          color: "#fff", // Texto branco
          ":hover": {
            backgroundColor: "#6b2aee", // Cor de fundo roxa no hover
            borderColor: "#6b2aee", // Borda no hover também roxa
            color: "#fff", // Texto branco no hover 
          },
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            padding: "16px 40px",
            backgroundColor: "#6b2aee", // Cor de fundo para botões contidos
            color: "#fff", // Cor do texto
            ":hover": {
              backgroundColor: "#581ecd", // Cor mais escura no hover
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderColor: "#6b2aee", // Cor da borda
            color: "#6b2aee", // Cor do texto
            backgroundColor: "transparent", // Garantir que o fundo seja transparente
            ":hover": {
              backgroundColor: "#6b2aee", // Cor de fundo no hover
              color: "#fff", // Texto branco no hover
              borderColor: "#6b2aee", // Cor da borda no hover
            },
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#fff", // Links brancos
          ":hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0,0,0, 0.05)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#6b2aee", // Cor sólida para o header
          color: "#fff",
        },
      },
    },
  },
});

export default theme;
