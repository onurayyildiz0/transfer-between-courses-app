import React from 'react';

function Course({ course, onNext, onPrevious }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
            <p className="text-gray-700 mb-4">{course.content}</p>
            <p className="text-gray-900 font-semibold mb-4">${course.price}</p>
            <div className="flex justify-between">
                <button
                    onClick={onPrevious}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Previous
                </button>
                <button
                    onClick={onNext}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Course;
