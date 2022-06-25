import './App.css';
import CustomButton from './common/Button/Button';

function App() {
	const handleClick = () => {
		console.log('Button Clicked!');
	};
	return (
		<CustomButton
			text='Hello Human!'
			size='large'
			onClick={handleClick}
			variant='outlined'
		/>
	);
}

export default App;
