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
import { FC, FormEvent, useState } from "react";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { CRITICAL_RAW_MATERIALS } from "../../common/constant.ts";

type DeviceType = 'phone' | 'tablet' | 'laptop';

export interface DeviceModel {
  type: DeviceType;
  title: string;
  materials: { name: string, amount: number }[];
}

interface AddDeviceModelDialogComponentProps {
  open: boolean;
  onClose: () => void;
  onSave: (deviceModel: DeviceModel) => Promise<void>;
}

export const AddDeviceModelDialogComponent: FC<AddDeviceModelDialogComponentProps> = (props) => {
  const [deviceType, setDeviceType] = useState<DeviceType>('phone');
  const [deviceTitle, setDeviceTitle] = useState<string>('');
  const [materials, setMaterials] = useState<{ name: string, amount: number }[]>([
    { name: '', amount: 0 },
  ]);

  const handleAddMaterial = () => {
    setMaterials([...materials, { name: '', amount: 0 }]);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const deviceModel: DeviceModel = {
      type: deviceType,
      title: deviceTitle,
      materials: materials.filter(material => material.name !== '')
    };

    await props.onSave(deviceModel);

    setDeviceType('phone');
    setDeviceTitle('');
    setMaterials([{ name: '', amount: 0 }]);
    props.onClose();
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
        component="form"
        onSubmit={handleSubmit}
        sx={{
          padding: '1.5rem 2.5rem',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <DialogTitle>Add Device Model</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={props.onClose}
            sx={{ color: (theme) => theme.palette.grey[500], alignSelf: 'center' }}
          >
            <CloseIcon/>
          </IconButton>
        </Box>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography
            color={"#000000DE"}
            variant="body1"
            fontSize="16px"
            fontWeight={400}
          >
            Device info
          </Typography>

          <FormControl required fullWidth margin="normal">
            <InputLabel id="device-type-label">Device Type</InputLabel>
            <Select
              required
              labelId="device-type-label"
              id="device-type"
              value={deviceType}
              label="Device Type"
              onChange={(e) => setDeviceType(e.target.value as DeviceType)}
            >
              <MenuItem value="phone">Phone</MenuItem>
              <MenuItem value="tablet">Tablet</MenuItem>
              <MenuItem value="laptop">Laptop</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
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
                    {
                      CRITICAL_RAW_MATERIALS.map(crm => (
                        <MenuItem key={crm} value={crm}>{crm}</MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
                <FormControl
                  fullWidth
                  variant="outlined"
                  margin={'normal'}
                >
                  <OutlinedInput
                    onChange={e => {
                      const newMaterials = [...materials];
                      newMaterials[index].amount = Number.parseInt(e.target.value, 10);
                      setMaterials(newMaterials);
                    }}
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
          <Button type="submit" color={"primary"} variant="contained">
            Add Device Model
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  )
}
