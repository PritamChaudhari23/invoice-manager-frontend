import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Paper,
  InputAdornment,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Lock from "@mui/icons-material/Lock";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)"
    >
      <Paper
        elevation={6}
        sx={{
          p: 5,
          width: 370,
          borderRadius: 4,
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          background: "rgba(255,255,255,0.95)",
        }}
      >
        <Typography
          variant="h4"
          mb={1.5}
          align="center"
          fontWeight={700}
          color="primary"
        >
          Welcome Back
        </Typography>
        <Typography
          variant="subtitle2"
          mb={3}
          align="center"
          color="text.secondary"
        >
          Please login to your account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="action" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="action" />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              py: 1.2,
              fontWeight: 600,
              letterSpacing: 1,
              borderRadius: 2,
              fontSize: "1rem",
            }}
          >
            Login
          </Button>
        </form>
        <Box mt={3} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            New user?{" "}
            <Link
              href="/signup"
              underline="hover"
              color="primary"
              fontWeight={500}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
