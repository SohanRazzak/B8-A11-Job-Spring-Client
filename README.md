# Assignment - 11
## Assignment Category - 003
## Live Link: https://job-spring.web.app/
## Server Repo: https://github.com/SohanRazzak/B8-A11-Job-Spring-Server
## Client Repo: https://github.com/SohanRazzak/B8-A11-Job-Spring-Client

# Job Spring

Job Spring is a job portal web application where users can create an account, publish and edit jobs, view jobs they've posted and applied for, and browse all available job listings. The application is built with React and uses Firebase for authentication and EmailJS for sending application confirmation emails. Lottie animations are used to enhance the user experience.

## Features

### User Authentication
- Users can create an account and log in using Firebase Authentication.

### Job Management
- **New Job**: Users can publish new job listings.
- **My Jobs**: Users can view and manage the jobs they have published.
- **Applied Jobs**: Users can see the jobs they have applied for.
- **Job Details**: Detailed view of each job listing, including the option to apply.

### Application Process
- Users can apply for jobs directly from the job details page.
- Application restrictions: Users cannot apply if the deadline has passed, they are the job publisher, or they have already applied.
- A modal is used to collect application details.
- Upon successful application, users receive a confirmation email via EmailJS.

### Public Pages
- **Terms and Conditions**: Details about the terms and conditions of using the platform.
- **Privacy Policy**: Information about the privacy policy.
- **Blog**: Public blog page for articles and updates.
- **All Jobs**: Browse all available jobs, with sorting options using React Tabs.

## Routes

### Private Routes
- **New Job**: `/new-job`
- **My Jobs**: `/my-jobs`
- **Applied Jobs**: `/applied-jobs`
- **Job Details**: `/job-details/:id`

### Public Routes
- **Terms and Conditions**: `/terms`
- **Privacy Policy**: `/privacy`
- **Blog**: `/blog`
- **All Jobs**: `/all-jobs`

## Technologies Used

- **React**: For building the user interface.
- **Firebase**: For user authentication and database management.
- **EmailJS**: For sending confirmation emails upon successful job application.
- **React Router**: For navigation and routing.
- **React Tabs**: For organizing job listings in the "All Jobs" page.
- **Lottie Animations**: For adding animations to various routes to enhance the user experience.

## Extra Two Section In Home page
- **How it Works**
- **What People Say**

## Additional Features

- **Pagination**: Show Pagination for every category when the Job Data is more than 10.

