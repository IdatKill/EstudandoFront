"use client";

import page from "@/app/page";
import api from "@/services/api";
import Evento from "@/types/evento";
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { use, useEffect, useState } from "react";

function ListarEventos() {
  const [evento, setEventos] = useState<Evento[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  useEffect(() => {
    api
      .get<Evento[]>("/evento/listar")
      .then((resposta) => {
        setEventos(resposta.data);
        console.table(resposta.data);
      })
      .catch((erro) => {
        console.log("erro");
      });
  }, []);


  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Listar Eventos
      </Typography>
      <TableContainer component={Paper} elevation={10}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Criado Em</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Local</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {evento
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((evento) => (
                <TableRow key={evento.id}>
                  <TableCell>{evento.id}</TableCell>
                  <TableCell>{evento.nome}</TableCell>
                  <TableCell>{evento.criadoEm}</TableCell>
                  <TableCell>{evento.data}</TableCell>
                  <TableCell>{evento.local}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={evento.length}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          labelRowsPerPage="Itens por página"
        />
      </TableContainer>
    </Container>
  );
}

export default ListarEventos;
