"use client";

import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppBar, Box, Container, createTheme, CssBaseline, Toolbar, Typography } from "@mui/material";

import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const emotionCache = createCache({ key: "css", prepend: true });
const theme = createTheme();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
          
        {/*barra de ferramentas*/}
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div">
                Revisao Front 
              </Typography>
            </Toolbar>
          </AppBar>



        {/*Conteudo*/}
          <Box component="main" sx={{ minHeight: 'calc(100vh - 120px)', py: 4 }}>
            <Container>{children}</Container>
          </Box>

        {/*Rodape*/}

          <Box component="footer"
          sx={{ 
            bgcolor : "#1a1a1a",
            color : "#fff",
            py : 2,
            textAlign : "center",
          }}>

          <Typography variant="body2">
            Gustavo Mamou.
          </Typography>

        </Box>

         </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
