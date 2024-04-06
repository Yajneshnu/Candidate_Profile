import React, { useState } from "react";

interface Score {
  max_score: number;
  min_score: number;
  score_type: string;
  user_score: number;
}

interface Candidate {
  id: number;
  full_name: string;
  email: string;
  experience: string;
  hobbies: string;
  about_me: string;
  introduction: string;
  score: string;
//   scores?: Score[];
  scores: { score_type: string; user_score: number; max_score: number }[];
}

interface CandidateProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateProps> = ({ candidate }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (

  
    <div className="flex max-w-3xl mx-auto space-x-4">
        
      <div className="flex-1">
  <div className="bg-white rounded-md shadow-md p-4 h-full flex items-center justify-between">
    <div className="flex items-center space-x-4" style={{ width: "250px" }}>
      <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="Profile" className="w-12 h-12 rounded-full" />
      <div>
        <h2 className="text-lg font-semibold">{candidate.full_name}</h2>
        <p className="text-sm text-gray-400">{candidate.email}</p>
      </div>
    </div>
    <div className="flex items-center">
      <p className="text-sm text-gray-600 mr-4"><strong>Score:</strong> {candidate.score}</p>
      <button onClick={toggleDetails} className="text-blue-500 focus:outline-none">
        {showDetails ? 'Hide' : 'Show'} Details
      </button>
    </div>
  </div>
</div>

{showDetails && (
  <div className="flex-1 relative">
   
    <div className="absolute top-0 left-0 h-full w-2 bg-green-500 rounded-l-md"></div>
    <div className="bg-white rounded-md shadow-md p-4 pl-6 relative">
      <h2 className="text-lg font-semibold mb-4">Details</h2>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Scores:</strong></p>
        {candidate.scores && (
          <div className="grid grid-cols-1 gap-4">
            {candidate.scores.map((score, index) => (
              <div key={index} className="flex items-center">
                <p className="w-1/3">{score.score_type}</p>
                <div className="w-2/3 flex items-center space-x-2">
                  <input
                    type="range"
                   
                    min={1}
                    max={score.max_score}
                    value={score.user_score}
                    className="w-full appearance-none bg-green-200 h-1 rounded-md"
                    disabled
                  />
                  <span className="text-green-600">{score.user_score}/{score.max_score}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      

      </div>
      <p><strong>Email:</strong> {candidate.email}</p>
      <p><strong>Experience:</strong> {candidate.experience}</p>
      <p><strong>Hobbies:</strong> {candidate.hobbies}</p>
      <p><strong>About:</strong> {candidate.about_me}</p>
      <p><strong>Introduction:</strong> {candidate.introduction}</p>
      <p><strong>Score:</strong> {candidate.score}</p>
    </div>
  </div>
)}

       
    </div>
  
  );
};

export default CandidateCard;


