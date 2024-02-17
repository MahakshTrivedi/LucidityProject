import { alpha, styled } from '@mui/material/styles';
import { green,lightGreen } from '@mui/material/colors';
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
//   '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track + .MuiSwitch-thumb': {
//     backgroundColor: '#ffffff', // Set the thumb color to white when the switch is off
//   },

//   '& .MuiSwitch-switchBase': {
//     color: '#ffffff', // Set the color to white when the switch is off
//     '&:hover': {
//       backgroundColor: alpha('#ffffff', theme.palette.action.hoverOpacity),
//     },
//   },

}));

export default GreenSwitch;
