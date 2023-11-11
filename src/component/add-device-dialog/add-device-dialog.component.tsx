import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { FC, useState } from "react";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

interface AddDeviceDialogComponentProps {
  open: boolean;
  onClose: () => void;
}

export const AddDeviceDialogComponent: FC<AddDeviceDialogComponentProps> = (props) => {
  const [deviceType, setDeviceType] = useState('phone');
  const [deviceTitle, setDeviceTitle] = useState('');
  const [materials, setMaterials] = useState<{ name: string, amount: number }[]>([
    { name: '', amount: 0 },
  ]);

  const handleAddMaterial = () => {
    setMaterials([...materials, { name: '', amount: 0 }]);
  }

  return (
    <Dialog
      fullWidth
      open={props.open}
      onClose={props.onClose}
      sx={{
        padding: '1.5rem 2.5rem',
      }}
    >
      <Box
        sx={{
          padding: '1.5rem 2.5rem',
        }}
      >

        <IconButton
          aria-label="close"
          onClick={props.onClose}
          sx={{
            position: 'absolute',
            right: '0',
            top: '0',
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon/>
        </IconButton>
        <DialogTitle>Add Device</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography
            color={"#000000DE"}
            variant="body1"
            fontSize="16px"
            fontWeight={400}
          >
            Device info
          </Typography>

          <FormControl fullWidth margin="normal">
            <InputLabel id="device-type-label">Device Type</InputLabel>
            <Select
              labelId="device-type-label"
              id="device-type"
              value={deviceType}
              label="Device Type"
              onChange={(e) => setDeviceType(e.target.value)}
            >
              <MenuItem value="phone">Phone</MenuItem>
              <MenuItem value="tablet">Tablet</MenuItem>
              <MenuItem value="laptop">Laptop</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            id="device-title"
            label="Device Title"
            type="text"
            fullWidth
            value={deviceTitle}
            onChange={(e) => setDeviceTitle(e.target.value)}
          />

          <Box sx={{ marginTop: 2 }}>
            <Typography
              color={"#000000DE"}
              variant="body1"
              fontSize="16px"
              fontWeight={400}
            >
              Raw materials used
            </Typography>
            {materials.map((material, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 1 }}>
                <FormControl fullWidth margin="normal">
                  <InputLabel id={`material-type-label-${index}`}>Material</InputLabel>
                  <Select
                    labelId={`material-type-label-${index}`}
                    id={`material-type-${index}`}
                    value={material.name}
                    label="Material"
                    onChange={(e) => {
                      const newMaterials = [...materials];
                      newMaterials[index].name = e.target.value;
                      setMaterials(newMaterials);
                    }}
                  >
                    {/* Populate with actual materials */}
                    <MenuItem value="aluminum">Aluminum</MenuItem>
                    <MenuItem value="copper">Copper</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined" margin={'normal'}>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end">g</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                </FormControl>
                <IconButton
                  sx={{ alignSelf: 'center' }}
                  aria-label="close"
                  onClick={() => {
                    const newMaterials = [...materials];
                    newMaterials.splice(index, 1);
                    setMaterials(newMaterials);
                  }}
                  >
                  <CloseIcon/>
                </IconButton>
              </Box>
            ))}
            <Button color={"primary"} endIcon={<AddIcon/>} onClick={handleAddMaterial}>
              Add material
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button color={"primary"} variant="contained" onClick={props.onClose}>
            Add device
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  )
}
