import React, { useState } from "react";
import logo from './logo.svg';

const AptitudeTest = ({ goBack, handlePageChange }) => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [visitedQuestions, setVisitedQuestions] = useState(new Set([0]));

  const questions = [
    { id: "q1", text: "1. Which of the following best describes your approach to new challenges?", options: ["A logical, problem-solving one", "A creative and imaginative one", "A collaborative and interpersonal one"] },
    { id: "q2", text: "2. Which hobby sounds most appealing to you?", options: ["Researching new technologies", "Practicing a musical instrument", "Playing a team sport"] },
    { id: "q3", text: "3. If you had to choose, which subject would you study for fun?", options: ["History and literature", "Managing finances and investments", "Space and astronomy"] },
    { id: "q4", text: "4. Which career path appeals most to you?", options: ["A career in healthcare or medicine", "A career in technology or engineering", "A career in arts or humanities"] },
    { id: "q5", text: "5. Given a choice, would you rather be responsible for...", options: ["Designing a new product", "Organizing a community event", "Analyzing market trends"] },
    { id: "q6", text: "6. What is your preferred way to spend a Saturday afternoon?", options: ["Writing a play or novel", "Conducting a science experiment", "Volunteering for a local charity"] },
    { id: "q7", text: "7. Do you prefer working in:", options: ["A team environment where you collaborate", "An independent setting where you have full control"] },
    { id: "q8", text: "8. You are given a choice between two tasks. Which do you pick?", options: ["Solving a complex math problem", "Creating a detailed business plan", "Editing a film or video"] },
    { id: "q9", text: "9. Which class did you find most interesting in school?", options: ["Physics", "Economics", "Social studies or history"] },
    { id: "q10", text: "10. What kind of books do you enjoy reading?", options: ["Science fiction", "Business and marketing", "Biographies"] },
    { id: "q11", text: "11. Which field of study are you most curious about?", options: ["Chemistry and biology", "Political science", "Architecture"] },
    { id: "q12", text: "12. What sounds like a better way to spend your time?", options: ["Drawing, painting, or sculpting", "Building with a construction kit", "Creating a spreadsheet to track expenses"] },
    { id: "q13", text: "13. Which of these topics do you enjoy discussing?", options: ["Latest discoveries in science", "Learning about the economy and stock market", "Art movements and their history"] },
    { id: "q14", text: "14. Which subject are you best at?", options: ["Physics or computer science", "Literature and language", "Accounting and bookkeeping"] },
    { id: "q15", text: "15. Which of these motivates you most?", options: ["Caring for people and making a difference in their lives", "Inventing something new", "Making a profit"] },
    { id: "q16", text: "16. Do you prefer to work on:", options: ["An individual project where you can focus deeply", "A collaborative project where you can brainstorm with others"] },
    { id: "q17", text: "17. What extracurricular activity would you most likely join?", options: ["Robotics club", "Debates and public speaking", "Investment club"] },
    { id: "q18", text: "18. Which of these sounds more satisfying?", options: ["Building or fixing machines", "Providing advice to a customer", "Telling a compelling story"] },
    { id: "q19", text: "19. What's more exciting to you?", options: ["Analyzing data and trends", "Understanding different cultures", "Managing a team of people"] },
    { id: "q20", text: "20. You have an opportunity to mentor someone. Which area would you choose?", options: ["Helping them with their financial plans", "Guiding them in a creative project", "Teaching them a scientific concept"] }
  ];

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const notAnsweredCount = totalQuestions - answeredCount;
  const visitedCount = visitedQuestions.size;
  const notVisitedCount = totalQuestions - visitedCount;

  const handleChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    });
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    setVisitedQuestions(prev => new Set(prev).add(nextIndex));
    setCurrentQuestionIndex(nextIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = { science: 0, commerce: 0, arts: 0, medical: 0, engineering: 0 };
    if (answers.q1 === "A logical, problem-solving one") score.engineering += 2;
    if (answers.q2 === "Researching new technologies") score.science += 2;
    if (answers.q3 === "Managing finances and investments") score.commerce += 2;
    if (answers.q4 === "A career in healthcare or medicine") score.medical += 2;
    if (answers.q5 === "Designing a new product") score.engineering += 2;
    if (answers.q6 === "Writing a play or novel") score.arts += 2;
    if (answers.q7 === "A team environment where you collaborate") score.commerce += 2;
    if (answers.q8 === "Solving a complex math problem") score.science += 2;
    if (answers.q9 === "Social studies or history") score.arts += 2;
    if (answers.q10 === "Business and marketing") score.commerce += 2;
    if (answers.q11 === "Chemistry and biology") score.medical += 2;
    if (answers.q12 === "Drawing, painting, or sculpting") score.arts += 2;
    if (answers.q13 === "Learning about the economy and stock market") score.commerce += 2;
    if (answers.q14 === "Physics or computer science") score.engineering += 2;
    if (answers.q15 === "Caring for people and making a difference in their lives") score.medical += 2;
    if (answers.q16 === "An individual project where you can focus deeply") score.science += 2;
    if (answers.q17 === "Debates and public speaking") score.arts += 2;
    if (answers.q18 === "Building or fixing machines") score.engineering += 2;
    if (answers.q19 === "Analyzing data and trends") score.science += 2;
    if (answers.q20 === "Helping others with their financial plans") score.commerce += 2;

    let suggestedStream = "Unclear";
    let maxScore = 0;
    for (const stream in score) {
      if (score[stream] > maxScore) {
        maxScore = score[stream];
        suggestedStream = stream.charAt(0).toUpperCase() + stream.slice(1);
      }
    }

    setAnswers(prev => ({ ...prev, suggestedStream }));
    setShowResults(true);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const getProgressColor = (current, total) => {
    if (total === 0) return 'w-0';
    const percentage = (current / total) * 100;
    if (percentage === 100) return 'bg-green-500';
    if (percentage > 0) return 'bg-yellow-400';
    return 'bg-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {showResults && (
        <nav className="bg-white shadow flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-4">
            <button onClick={goBack} className="p-0 border-0 bg-transparent cursor-pointer">
              <img src={logo} alt="Logo" className="h-8" />
            </button>
            <button onClick={goBack} className="font-semibold text-gray-700 hover:text-blue-600">Home</button>
            <button onClick={() => handlePageChange("courses")} className="text-gray-600 hover:text-blue-600">Courses</button>
            <button onClick={() => handlePageChange("careerPaths")} className="text-gray-600 hover:text-blue-600">Career Paths</button>
            <button onClick={() => handlePageChange("colleges")} className="text-gray-600 hover:text-blue-600">Colleges</button>
            <button onClick={() => handlePageChange("scholarships")} className="text-gray-600 hover:text-blue-600">Scholarships</button>
          </div>
        </nav>
      )}

      <main className="flex-1 px-8 py-6">
        <div className="max-w-6xl mx-auto flex">
          
          {/* Progress Sidebar */}
          {!showResults && (
            <div className="w-1/4 bg-white shadow-lg rounded-lg p-6 mr-6 h-fit">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quiz Progress</h3>
              <div className="space-y-4">
                <div className="text-gray-600">
                  <span className="font-medium">Questions:</span> {totalQuestions}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Answered</span>
                    <span className="font-bold text-green-600">{answeredCount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full" 
                      style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Unanswered</span>
                    <span className="font-bold text-red-600">{notAnsweredCount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-red-500 h-2.5 rounded-full" 
                      style={{ width: `${(notAnsweredCount / totalQuestions) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Visited</span>
                    <span className="font-bold text-blue-600">{visitedCount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-500 h-2.5 rounded-full" 
                      style={{ width: `${(visitedCount / totalQuestions) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Not Visited</span>
                    <span className="font-bold text-gray-600">{notVisitedCount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-gray-400 h-2.5 rounded-full" 
                      style={{ width: `${(notVisitedCount / totalQuestions) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-4">
                <h4 className="text-lg font-semibold mb-2">Question Navigation</h4>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((q, index) => (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentQuestionIndex(index);
                        setVisitedQuestions(prev => new Set(prev).add(index));
                      }}
                      className={`p-2 rounded-md font-bold text-sm transition ${
                        index === currentQuestionIndex 
                          ? 'bg-blue-600 text-white shadow-lg' 
                          : answers[q.id] 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quiz or Results Section */}
          <div className={`flex-1 ${!showResults ? 'w-3/4' : 'w-full'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Aptitude Test</h2>
            
            {!showResults && (
              <div className="bg-blue-100 rounded-lg p-4 mb-6 text-center shadow-sm">
                <p className="text-lg text-blue-800 font-semibold">
                  "Answer honestly for accurate guidance"
                </p>
              </div>
            )}

            {!showResults ? (
              <form onSubmit={isLastQuestion ? handleSubmit : handleNext} className="bg-white shadow-lg rounded-lg p-8 mb-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Choose the best answer for you.</h3>
                
                <div key={currentQuestion.id} className="mb-6 pb-4">
                  <p className="mb-3 font-medium text-gray-700">{currentQuestion.text}</p>
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, i) => (
                      <label 
                        className={`block text-gray-600 cursor-pointer p-3 border rounded-lg hover:border-blue-600 transition ${
                          answers[currentQuestion.id] === option 
                            ? 'border-blue-600 bg-blue-50 text-blue-800' 
                            : 'border-gray-300'
                        }`} 
                        key={i}
                      >
                        <input 
                          type="radio" 
                          name={currentQuestion.id} 
                          value={option} 
                          checked={answers[currentQuestion.id] === option}
                          onChange={(e) => handleChange(currentQuestion.id, e.target.value)} 
                          className="mr-3 accent-blue-600" 
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  {isLastQuestion ? (
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                    >
                      Submit Answers
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                    >
                      Next
                    </button>
                  )}
                </div>
              </form>
            ) : (
              <div className="bg-white shadow-lg rounded-lg p-8 mb-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
                    <h4 className="font-semibold text-lg mb-2">Suggested Stream</h4>
                    <p className="text-blue-600 font-bold text-2xl">{answers.suggestedStream}</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
                    <h4 className="font-semibold text-lg mb-2">Personality Type</h4>
                    <p className="text-blue-600 font-bold text-2xl">Innovator</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-between">
                    <h4 className="font-semibold text-lg mb-2">Next Step</h4>
                    <p className="text-gray-700 text-sm mb-4">Explore courses in your suggested stream.</p>
                    <button 
                      onClick={() => handlePageChange("courses")} 
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold w-full hover:bg-blue-700 transition"
                    >
                      Suggested Courses
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; 2025 Career Website. All rights reserved.
      </footer>
    </div>
  );
};

export default AptitudeTest;