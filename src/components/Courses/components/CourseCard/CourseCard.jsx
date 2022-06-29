import { Box, Typography } from '@mui/material';
import CustomButton from '../../../../common/Button/Button';

const CourseCard = ({
	title,
	duration,
	creation_date,
	description,
	authors,
}) => {
	const handleShowCourse = () => {
		console.log('___Show Course Clicked!');
	};
	return (
		<Box>
			<Box>
				<Typography>{title}</Typography>
				<Typography>{description}</Typography>
			</Box>
			<Box>
				<Typography> Authors : {authors}</Typography>
				<Typography> Duration : {duration}</Typography>
				<Typography>Created: {creation_date}</Typography>
				<CustomButton
					text='Show Course'
					variant='outlined'
					size='large'
					onClick={handleShowCourse}
				/>
			</Box>
		</Box>
	);
};

export default CourseCard;
