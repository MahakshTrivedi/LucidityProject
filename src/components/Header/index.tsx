import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import GreenSwitch from "./GreenSwitch";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import { StyledHeader, StyledIcon, StyledText } from "./style";

type HeaderProps = {
  isUserMode: boolean;
  setUserMode: Function;
};

const Header = ({ isUserMode, setUserMode }: HeaderProps) => {
  const handleSwitchChange = () => {
    setUserMode((prevIsUserMode: boolean) => !prevIsUserMode);
  };

  return (
    <StyledHeader>
      <StyledText>
        admin
      </StyledText>
        <GreenSwitch 
        checked={isUserMode} 
        onChange={handleSwitchChange}
        color="default"
         />
        <StyledText>
        user
        </StyledText>
      <StyledIcon>
      <LogoutIcon sx={{ color: "white" }} />
      </StyledIcon>
    </StyledHeader>
  );
};

export default Header;
