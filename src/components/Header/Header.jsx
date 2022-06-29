import { Box, Typography } from '@mui/material';
import Logo from './components/Logo/Logo';
import CustomButton from '../../common/Button/Button';
import './style.css';
const Header = () => {
	const handleLogout = () => {
		console.log('__Log out Clicked!');
	};

	return (
		<Box className='header'>
			<Logo />
			<Box className='optionsBox'>
				<Typography className='userInfo'>Lorena</Typography>
				<CustomButton
					text='Log out'
					variant='text'
					onClick={handleLogout}
					size='small'
				/>
			</Box>
		</Box>
	);
};

export default Header;
