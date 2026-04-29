# Project Blueprint

## Overview

This document outlines the features, design, and implementation plan for the Dumore Construction and Remodeling website. It serves as a single source of truth for the project's development.

## Current Features

*   **Homepage:** A welcoming page with a brief introduction to the company, a list of services, and a call to action.
*   **Services Pages:** Detailed pages for each of the company's services.
*   **Blog:** A blog with articles about construction and remodeling.
*   **About Us Page:** Information about the company's history, team, and values.
*   **Contact Page:** A form for clients to get in touch with the company.
*   **Privacy Policy and Terms of Service:** Legal documents for the website.

## New Feature: Cost Estimator

### Overview

A multi-step form that allows clients to get an estimated cost for their construction or remodeling project.

### Implementation Plan

1.  **Component:** Create a new `CostEstimator` component in the `components` directory.
2.  **State Management:** Use React's `useState` and `useReducer` hooks to manage the form's state.
3.  **Multi-Step Logic:** Implement the multi-step functionality, with validation at each step to ensure that all required fields are filled out.
4.  **Dynamic Fields:** Conditionally render form fields based on the selected service.
5.  **Pricing:** Use the provided dummy data for pricing. Create a separate module for pricing logic to make it easy to update in the future.
6.  **Island-Based Pricing:** Add a multiplier to the total cost based on the selected island.
7.  **UI/UX:**
    *   **Mobile:** The estimator will replace the banner image.
    *   **Tablet/Desktop:** The estimator will be a card that floats over the banner image on the right side of the screen.
8.  **Submission:**
    *   Create a server action to handle the form submission.
    *   The server action will:
        *   Calculate the final estimated cost.
        *   Send an email to the client with the estimate.
        *   Send an email to an admin with the estimate.
        *   Send an SMS notification to the company owner using Twilio.
9.  **Integration:**
    *   Add the `CostEstimator` component to the homepage.
    *   Add the `CostEstimator` component to each service page, with the service pre-selected.

### Future Improvements

*   **Headless CMS for Pricing:** To make it easier for the client to update pricing without touching the code, the pricing data could be fetched from a headless CMS like Contentful or Strapi.
*   **Advanced Form Library:** For more complex forms, a library like `react-hook-form` or `formik` could be used to provide more advanced features for validation and state management.
