import { useEffect, useState } from 'react';
import axios from 'axios';
import Course from './Course';

function App() {
  const [courses, setCourses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:3001/courses');
      setCourses(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleNext = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === courses.length - 1 ? 0 : nextIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const randomCourse = () => {
    if (courses.length > 0) {
      const randomIndex = Math.floor(Math.random() * courses.length);
      setCurrentIndex(randomIndex);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={randomCourse}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Rastgele Kurs Ata
      </button>
      {courses.length > 0 && (
        <Course
          course={courses[currentIndex]}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
}

export default App;
