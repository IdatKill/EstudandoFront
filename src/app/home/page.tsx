"use client";

import { List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import Link from "next/link";

function Menu() {
  return (
    <Paper elevation={8} sx={{ width: 300, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Menu de Navegação
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} href="/">
            <ListItemText primary="Início" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} href="/eventos/listar">
            <ListItemText primary="Listar Eventos" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} href="/eventos/cadastrar">
            <ListItemText primary="Cadastrar Evento" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} href="/usuarios/login">
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} href="/eventos/alterar/id">
            <ListItemText primary="Alterar Evento" />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
}

export default Menu;
