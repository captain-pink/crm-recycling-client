import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormEvent, useState } from "react";
import useTheme from "@mui/material/styles/useTheme";
import { gql, useMutation } from "@apollo/client";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const MUTATION_LOGIN = gql`
  mutation MyMutation($data: LoginInput!) {
    login(data: $data) {
      status
    }
  }
`;

export function LoginPage() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [login, { error, loading }] = useMutation<{
    login: {
      status: string;
    };
  }>(MUTATION_LOGIN);
  const navigate = useNavigate();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPasswordError("");

    const res = await login({
      variables: {
        data: {
          email: email,
          password: password,
        },
      },
    });

    if (res.data?.login.status === "OK") {
      navigate("/dashboard");
    } else {
      setPasswordError("Email or password is incorrect, please try again.");
    }
  };

  if (error) {
    // TODO handle error
    return <div>Error</div>;
  }

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CardMedia
        loading="lazy"
        component="img"
        sx={{
          width: "50%",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "center",
        }}
        image="/critical-raw-material-background.png"
        alt="Raw Material Recycling Background Image"
      />
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={(e) => handleFormSubmit(e)}
          sx={{
            padding: "5rem",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Typography
            color={"primary"}
            variant="h3"
            fontSize={24}
            fontWeight={500}
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Login
          </Typography>

          {passwordError && <Alert severity="error">{passwordError}</Alert>}

          <TextField
            required
            type="email"
            id="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            type="password"
            id="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            disabled={loading}
            sx={{ background: theme.palette.primary.main }}
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </Box>
      </Box>
      <Backdrop
        open={loading}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(5px)",
        }}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </Box>
  );
}
