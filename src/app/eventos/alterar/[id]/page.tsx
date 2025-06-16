"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Container, Typography, TextField, Button, Box, Paper } from "@mui/material";
import api from "@/services/api";
import Evento from "@/types/evento";

export default function AlterarEvento() {
  const { id } = useParams();
  const router = useRouter();

  const [evento, setEvento] = useState<Evento>({
    id: 0,
    nome: "",
    data: "",
    local: "",
    criadoEm: "",
  });

  useEffect(() => {
    api.get<Evento>(`/evento/buscar/${id}`)
      .then((res) => {
        setEvento(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao buscar evento.");
      });
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvento({ ...evento, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.put(`/evento/alterar/${id}`, evento)
      .then(() => {
        alert("Evento alterado com sucesso!");
        router.push("/evento/listar"); // Redireciona para a listagem
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao alterar evento.");
      });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={10} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Alterar Evento
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nome"
            name="nome"
            margin="normal"
            value={evento.nome}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Data"
            name="data"
            margin="normal"
            value={evento.data}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Local"
            name="local"
            margin="normal"
            value={evento.local}
            onChange={handleChange}
            required
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Salvar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => router.back()}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
