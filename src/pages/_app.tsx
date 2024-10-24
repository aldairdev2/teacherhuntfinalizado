import Base from "@components/surfaces/Base";
import { ProfessorProvider } from "@data/contexts/ProfessorContext";
import { ThemeProvider, CssBaseline } from "@mui/material";
import '@styles/global1.css';
import type { AppProps } from "next/app";
import theme from "ui/theme/light-theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProfessorProvider>
        <Base>
          <main style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', flexGrow: 1 }}>
            <Component {...pageProps} />
            <div className="ball top"></div>
            <div className="ball bottom"></div>
          </main>
        </Base>
      </ProfessorProvider>
    </ThemeProvider>
  );
}
