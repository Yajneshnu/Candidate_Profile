import React, { useEffect, useState } from "react";
import CandidateCard from './Candidate';

interface AssignmentDetails {
  duration_in_seconds: number;
  ends_at: number;
  id: string;
  link: string;
  status: string;
  title: string;
}

const fetchCandidates = async () => {
  try {
    const response = await fetch(
      "https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates?status=review&limit=10&offset=0"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch candidates");
    }
    const data: Candidate[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchAssignmentDetails = async () => {
  try {
    const response = await fetch(
      "https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_details"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch assignment details");
    }
    const data: AssignmentDetails = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const InitForm: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [assignmentDetails, setAssignmentDetails] = useState<AssignmentDetails | null>(null);

  useEffect(() => {
    fetchCandidates().then((data) => {
      setCandidates(data);
    });
    fetchAssignmentDetails().then((data) => {
      setAssignmentDetails(data);
    });
  }, []);

  return (
    <div className="flex justify-start max-w-screen-lg">
      <div className="bg-white rounded-md shadow-md p-4 max-w-xs mr-4"> {/* Assignment card */}
        {assignmentDetails && (
          <>
            <h2 className="text-lg font-semibold">{assignmentDetails.title}</h2>
            <p><strong>Status:</strong> {assignmentDetails.status}</p>
            <p><strong>Duration:</strong> {assignmentDetails.duration_in_seconds} seconds</p>
            <p><strong>Ends At:</strong> {assignmentDetails.ends_at}</p>
            <a href={assignmentDetails.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Link</a>
          </>
        )}
        <button
          className="flex items-center justify-center bg-green-500 rounded-md text-white px-4 py-2 mt-4 focus:outline-none"
          onClick={() => {
            // Add your onClick logic here
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          New Assignment
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Candidate cards */}
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default InitForm;
