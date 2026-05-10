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

## Cost Estimator Redesign: "Interactive Quote Studio"

### Overview

To create a more premium and engaging user experience, the Cost Estimator will be redesigned with a modern, interactive interface.

### Design and Implementation Plan

1.  **Layout:**
    *   Implement a two-column layout. The main content will wrap around the `CostEstimator` form, which will be placed in an `aside` element for semantic correctness.
    *   **Left Pane ("Inspiration Pane"):** This area will dynamically update based on user selections in the form. It will feature:
        *   High-quality, relevant imagery that changes as the user selects different services.
        *   Inspirational text snippets that highlight the value and possibilities of the selected service.
        *   Icon-based benefit snippets (e.g., "Increased Home Value," "Modern Aesthetics").
    *   **Right Pane ("Estimator Aside"):** This will be the form itself, with a sleek, modern design.
        *   The `aside` will have a subtle background texture or gradient and a soft, multi-layered drop shadow to appear "lifted."

2.  **Form Elements & Interactivity:**
    *   **Progress Bar:** An animated progress bar will be added to show the user their progress through the form.
    *   **Sliders:** Number inputs will be replaced with elegant sliders for a more tactile experience.
    *   **Icon-based Choices:** Dropdown menus will be replaced with clickable cards that use icons for a more intuitive selection process.
    *   **Glow Effects:** Interactive elements like buttons and active input fields will have a "glow" effect to guide the user's focus.
    *   **Animated Transitions:** Smooth fade-in/fade-out transitions will be used for form steps.

3.  **Typography & Color:**
    *   **Fonts:** A clean, modern sans-serif font (e.g., Inter, Poppins) will be used. Font weights will be varied to create a clear visual hierarchy.
    *   **Colors:** The existing color palette will be expanded with soft neutrals for backgrounds and containers, and a vibrant secondary color for calls to action. The final estimated cost will be displayed in a bold, celebratory color.

### Future Improvements

*   **Headless CMS for Pricing:** To make it easier for the client to update pricing without touching the code, the pricing data could be fetched from a headless CMS like Contentful or Strapi.
*   **Advanced Form Library:** For more complex forms, a library like `react-hook-form` or `formik` could be used to provide more advanced features for validation and state management.
