"use client";

import { Container, Paper, Typography, Box, TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const router = useRouter();

        async function efetuarLogin(e : React.FormEvent) {
        e.preventDefault();
        console.log("Login efetuado com sucesso!");

            const resposta = await fetch(
            "http://localhost:5288/api/usuario/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, senha
                }),
            }

        );

        if (!resposta.ok){
            alert("Erro ao efetuar login");
            return;
        }

        const token = await resposta.text();
        localStorage.setItem('token', token);
        router.push("/home");

    }

  return (
    <Container maxWidth="sm">
      <Paper elevation={5} sx={{ padding: 4, mt: 8 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>

        <Box component="form" onSubmit={efetuarLogin}>
          <TextField
            fullWidth
            margin="normal"
            label="E-mail"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>

          <TextField
            fullWidth
            margin="normal"
            label="Senha"
            type="text"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          ></TextField>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Efetuar Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
