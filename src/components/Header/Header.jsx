import { Box } from '@mui/material';
import Logo from './components/Logo';
const Header = () => {
	return (
		<Box sx={{ position: 'fixed', top: 0 }}>
			<Logo />
		</Box>
	);
};

export default Header;
