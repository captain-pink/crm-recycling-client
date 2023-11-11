import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormEvent, useState } from "react";
import useTheme from "@mui/material/styles/useTheme";
import { gql, useMutation } from "@apollo/client";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const MUTATION_SIGN_UP = gql`
mutation MyMutation($data: SignUpInput!) {
  signUp(data: $data) {
    status
  }
}
`

export function SignUpPage() {
  const theme = useTheme();
  const [companyType, setCompanyType] = useState('MANUFACTURER');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordComplexityError, setPasswordComplexityError] = useState('');
  const [signUp, { error, loading }] = useMutation<{
    signUp: {
      status: string;
    }
  }>(MUTATION_SIGN_UP);
  const navigate = useNavigate();

  const isPasswordComplexEnough = (password: string) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isPasswordComplexEnough(password)) {
      setPasswordComplexityError("Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.");
      return;
    }
    setPasswordComplexityError('');

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }
    setPasswordError('')

    await signUp({
      variables: {
        data: {
          type: companyType,
          companyName: companyName,
          email: email,
          password: password,
        }
      }
    })

    // TODO Display some success message
    navigate('/login');
  };

  if (error) {
    // TODO handle error
    return (
      <div>Error</div>
    )
  }

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <CardMedia
        loading="lazy"
        component="img"
        sx={{ width: '50%', height: '100vh', objectFit: 'cover', objectPosition: 'center' }}
        image="/public/critical-raw-material-background.png"
        alt="Raw Material Recycling Background Image"
      />
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="form"
          onSubmit={(e) => handleFormSubmit(e)}
          sx={{
            padding: '5rem',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <Typography
            color={'primary'}
            variant="h3"
            fontSize={24}
            fontWeight={500}
            gutterBottom
            sx={{ textAlign: 'center' }}
          >
            Sign up
          </Typography>

          <FormControl fullWidth>
            <InputLabel id="company-type-label">Company type</InputLabel>
            <Select
              required
              labelId="company-type-label"
              id="company-type-select"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
              label="Company type"
            >
              <MenuItem value={'MANUFACTURER'}>Manufacturer</MenuItem>
              <MenuItem value={'RECYCLER'}>Recycling Center</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            id="company-name"
            label="Company name"
            onChange={e => setCompanyName(e.target.value)}
          />
          <TextField
            required
            type='email'
            id="email"
            label="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            required
            type='password'
            id="password"
            label="Password"
            error={!!passwordComplexityError}
            helperText={passwordComplexityError}
            onChange={e => setPassword(e.target.value)}
          />
          <TextField
            required
            type='password'
            id="confirm-password"
            label="Confirm password"
            error={!!passwordError}
            helperText={passwordError}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <FormControl>
            <FormControlLabel
              control={(
                <Checkbox
                  required
                  color={"primary"}
                  id={'terms-and-conditions'}
                />
              )}
              label="I accept the terms and conditions"
            />
          </FormControl>
          <Button
            disabled={loading}
            sx={{ background: theme.palette.primary.main }}
            variant="contained"
            type="submit"
          >
            Sign up
          </Button>
        </Box>
      </Box>
      <Backdrop
        open={loading}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backdropFilter: 'blur(5px)', }}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </Box>
  )
}
