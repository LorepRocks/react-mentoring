import { Button } from '@mui/material';

const CustomButton = ({ text, onClick, size, variant }) => {
	return (
		<Button size={size} onClick={onClick} variant={variant}>
			{text}
		</Button>
	);
};

export default CustomButton;
