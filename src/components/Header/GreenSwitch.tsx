import { alpha, styled } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: lightGreen[600],
    '&:hover': {
      backgroundColor: alpha(lightGreen[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: lightGreen[600],
  },
}));

export default GreenSwitch;
