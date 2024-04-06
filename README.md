**Candidate Dashboard**

This is a candidate dashboard built with Next.js and TypeScript. It retrieves candidate details from a mock API endpoint and displays them in a user-friendly interface. Additionally, it fetches assignment details and displays them alongside candidate information.

### Features

- Fetches candidate details from a mock API endpoint.
- Retrieves assignment details from another mock API endpoint.
- Displays candidate information in a user-friendly card format.
- Shows assignment details in a separate card on the left side.
- Provides a button to create a new assignment.

### Components

#### `InitForm.tsx`

This component fetches candidate details and assignment details from mock API endpoints. It then renders the candidate cards and the assignment card.

#### `CandidateCard.tsx`

This component represents a candidate card. It displays candidate information such as name, email, experience, hobbies, etc. It also includes a button to toggle additional details like scores.

### API Endpoints

#### Assignment Details

- **URL:** https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_details
- **Description:** Retrieves details about an assignment, including duration, status, end time, and a link.

#### Assignment Submissions

- **URL:** https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates
- **Query Params:** `status` (str) - Specifies the status of the submissions (review/shortlisted), `limit` and `offset` for pagination.
- **Description:** Fetches submissions for an assignment based on the specified status. Supports pagination to handle large datasets.

#### User Assignment Scores

- **URL:** https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/candidate_assignment_data
- **Query Params:** `user_id` and `assignment_id` to retrieve scores for a specific user and assignment.
- **Description:** Retrieves scores for a user's submission to a particular assignment.

### Usage

1. Run the application.
2. Navigate to the candidate dashboard.
3. View candidate details and assignment information.
4. Toggle additional details for each candidate.
5. Create a new assignment using the provided button.

### Technologies Used

- Next.js
- TypeScript
- Tailwind CSS

### Development Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Access the dashboard in your browser at the specified port.

Feel free to expand upon this project by adding more features, improving UI/UX, or integrating with real API endpoints for live data.