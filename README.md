### Sparta Front-end assessment

## About

This project is a coding assessment for a Frontend Developer position. It's a simple To-Do List application with features like adding, updating, and deleting tasks. Users can also mark tasks as done.

## Features

- User Authentication
- Add/Update/Delete Tasks
- Mark Tasks as Done
- Responsive Design

## Tech Stack

- Next.js
- TypeScript
- Redux Toolkit
- Material-UI
- SASS
- Jest
- Cypress

## Getting Started

### Prerequisites

- Node.js >= 14.x
- npm >= 6.x
- Yarn (Optional)

### Installation

Clone the repository and install the dependencies:


`git clone https://github.com/Jonandereg/sparta-assessment.git`
`cd to the project folder`
`npm install`


## Running Locally

### Starting the Development Server

Run the following command to start the development server:


`npm run dev`


### Running Tests

#### Unit Tests

To run Jest tests, use:

`npm run test`

#### End-to-End Tests

First, make sure you have the development server running. In a new terminal, run:

`npx cypress open`

Follow the on-screen instructions to run the Cypress tests.

## Code Structure

### Project Layout

- \`components/\`: All React components
- \`pages/\`: Next.js pages
- \`store/\`: Redux store and slices
- \`styles/\`: SASS stylesheets
- \`tests/\`: Jest and Cypress tests

### Redux Store

- \`authSlice.ts\`: Manages authentication state
- \`taskSlice.ts\`: Manages task-related state

## Notes for Reviewer

### Time Allocation

The development of this project was conducted in approximately 5-6 hours, fragmented across multiple sessions to accommodate my existing professional commitments.

### Technical Challenges

My primary experience in styling web applications over the last three years has been with CSS-in-JS solutions. Given the time constraints of this assessment and my expertise with these libraries, I opted to rely predominantly on CSS-in-JS for styling—accounting for approximately 95% of the project's styles.

### Areas for Future Enhancement

With additional time, several areas could be refined for a more robust application:

- **Styling Refinement**: A more polished and cohesive design language could be implemented.
- **Responsive Design**: Further work could ensure a seamless user experience across various screen sizes.
- **Accessibility**: The addition of key accessibility features would make the application more inclusive.
- **SASS Utilization**: The use of SASS could be expanded for a more optimized styling architecture.
