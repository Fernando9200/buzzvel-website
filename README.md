# Project Overview

This project is a responsive and animated microsite built with React.js and CSS, designed to demonstrate my front-end development skills of Fernando Carretto. The site is designed to be fully responsive and includes various animations to enhance the user experience. The microsite showcases my experience, motivations, and projected career timeline. It also includes E2E tests to ensure the application's responsiveness and functionality across both desktop and mobile devices.

![landing-page](https://github.com/user-attachments/assets/40072c59-2b0d-421c-8f20-fa264b07739c)


## Features

- **Responsive Design:** Fully responsive layout for all screen sizes, including mobile devices.
- **Interactive Animations:** Includes particle animations, typewriter effects, and other interactive elements.
- **SEO Optimized:** Metadata and Open Graph tags included for better search engine indexing and social media sharing.
- **Modern Design:** Clean and modern design with a focus on user experience.
- **End-to-End Testing:** Cypress tests included to ensure the application works as expected on both desktop and mobile devices.

## Technologies Used

- **React:** For building the user interface.
- **Vite:** For development and build tooling.
- **tsparticles:** For particle animations on the landing page.
- **react-slick & slick-carousel:** For the portfolio slider.
- **react-helmet:** For managing the document head.
- **CSS3:** For styling and animations.
- **Cypress:** For end-to-end testing.

## Screenshots

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/Fernando9200/buzzvel-website.git
   cd buzzvel-website
   ```
3. **Install dependencies:**
   
   ```bash
   npm install
   ```
5. **Run the development server:**
   
   ```bash
   npm run dev
   ```
7. **To run the Application with Docker:**
   
   ```bash
   docker-compose up --build
   ```
   The application will be available at `http://localhost:5173`.

## SEO and Social Media Integration
The application includes SEO optimizations and social media integration using `react-helmet`. Meta tags for Open Graph, Twitter, and other SEO-related properties are included.

## End-to-End Testing
The project includes comprehensive end-to-end (E2E) tests using Cypress. The tests ensure that all key functionalities of the application work correctly on both desktop and mobile devices.

## To run the Cypress tests locally:

1. **Install Cypress:**
   
   ```bash
   npm install cypress --save-dev
   ```
2. **Run the Cypress tests:**
   
   ```bash
   npx cypress run
   ```
