import CourseCard from './components/CourseCard/CourseCard';

const Courses = ({ mockedCoursesList, mockedAuthorsList }) => {
	console.log('__mockedCoursesList', mockedCoursesList);
	console.log('___mockedAuthorsList', mockedAuthorsList);
	return (
		<>
			{mockedCoursesList.map((course) => (
				<CourseCard
					key={course.id}
					authors={course.authors}
					title={course.title}
					description={course.description}
					creation_date={course.creationDate}
					duration={course.duration}
				/>
			))}
		</>
	);
};

export default Courses;
