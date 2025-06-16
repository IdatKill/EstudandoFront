"use client";

import { Container, Paper, Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";

function CadastrarEvento() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await api.post("/evento/cadastrar", {
        nome,
        data,
        local,
      });

      alert("Evento cadastrado com sucesso!");
      router.push("/eventos/listar");
    } catch (error) {
      alert("Erro ao cadastrar evento.");
      console.error(error);
    }
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={5} sx={{ padding: 4, mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Cadastrar Evento
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Data"
            type="date"
            required
            value={data}
            onChange={(e) => setData(e.target.value)}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            label="Local"
            required
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Cadastrar Evento
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default CadastrarEvento;
