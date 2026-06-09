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

---

## **Updated Cost Estimator Implementation Plan: Pricing, Notifications, and UI Refinements**

This section details the specific modifications to the Cost Estimator and related backend services, building upon the existing blueprint.

### **Phase 1: Dependency and Environment Configuration**

*   **Goal:** Ensure the project is configured for AWS SES and SNS, and remove all references to Twilio.
*   **Steps:**
    1.  Inspect `package.json` for Twilio. If present, uninstall it (`npm uninstall twilio`).
    2.  Verify `@aws-sdk/client-ses` and `@aws-sdk/client-sns` are installed in `package.json` using stable (LTS) versions. Install if missing (`npm install @aws-sdk/client-ses @aws-sdk/client-sns`).
    3.  Review `app/actions.ts` to ensure `isNotificationConfigured` checks for necessary AWS environment variables (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`) and application-specific variables (`ADMIN_EMAIL`, `OWNER_EMAIL`, `CLIENT_EMAIL`, `OWNER_PHONE_NUMBER`, `SENDER_EMAIL`). Development overrides will be handled within the code.
*   **Verification:** Confirm Twilio is removed, AWS SDKs are present, and environment variable checks are robust.

### **Phase 2: Pricing Data and Calculation Logic Updates**

*   **Goal:** Update pricing data in `lib/pricing.ts` and calculation logic in `app/actions.ts` for production-level quality and sustainability.
*   **Steps:**
    1.  **Modify `lib/pricing.ts`:**
        *   Rename quality tiers: `'mid-tier'` to `'selective-grade'`, `'luxury'` to `'high-end'`.
        *   Update `servicePricing` for:
            *   `new-construction`: `builder`: [250, 600], `selective-grade`: [350, 850], `high-end`: [650, 1200]
            *   `home-remodeling`: `builder`: [250, 500], `selective-grade`: [500, 800], `high-end`: [800, 1500] (per sqft)
            *   `kitchen-remodeling`: `builder`: [20000, 50000], `selective-grade`: [30000, 65000], `high-end`: [75000, 150000]
            *   `bathroom-remodeling`: `builder`: [8000, 15000], `selective-grade`: [12000, 25000], `high-end`: [30000, 85000]
            *   `additions`: `builder`: [200, 300], `selective-grade`: [300, 500], `high-end`: [500, 700]
    2.  **Modify `app/actions.ts`:**
        *   In the `calculateEstimate` function, remove calculation cases for `'pest-repair'`, `'storm-damage-repair'`, and `'house-moving'`.
        *   Update the `'home-remodeling'` logic to use `formData.homeRemodelingSqft` for calculation.
*   **Verification:** Ensure pricing data and calculation logic are accurate and syntactically correct. No styling impact expected.

### **Phase 3: Cost Estimator Component Refinements**

*   **Goal:** Directly remove services, update UI text, modify input for 'home remodeling', and overhaul the final step's UI and messaging in `components/CostEstimator.tsx`.
*   **Steps:**
    1.  **Direct Service Removal:** Within `CostEstimator.tsx`, locate the array/map generating service selection options. Remove the entries corresponding to `'pest-repair'`, `'storm-damage-repair'`, and `'house-moving'` directly from this list.
    2.  **UI Text Update (Quality Tiers):** Update internal quality tier definitions (e.g., `qualityOptions`) in `CostEstimator.tsx`:
        *   `'mid-tier'` -> `'Selective-Grade'`
        *   `'luxury'` -> `'High-End'`
    3.  **Input Change for Home Remodeling:** In `renderServiceFields()` within `CostEstimator.tsx`, change the `homeRemodelingRooms` input's `name` attribute to `homeRemodelingSqft`. Update its label and `htmlFor` to "Square Footage". Adjust component state management accordingly.
    4.  **Final Step UI Overhaul:**
        *   In `CostEstimator.tsx`'s `return` statement (case 3), delete the `Estimated Cost` heading line.
        *   Add the new heading below the project summary: `<h3 className={styles.finalHeading}>You will receive a free written estimate when we get onsite.</h3>`.
    5.  **Styling:** Add the `.finalHeading` class to `components/CostEstimator.module.css` with styles for professionalism and confidence (bold, larger font, accent color border, subtle background/shadow).
*   **Verification:** Visually confirm service removal, updated labels, correct input for remodeling, and the new heading. Ensure styling consistency and that functionality remains intact.

### **Phase 4: AWS Notification Logic Implementation**

*   **Goal:** Implement multi-recipient email via SES and SMS via SNS, ensuring all Twilio references are gone and using production-ready AWS services.
*   **Steps:**
    1.  **SES Email Recipients:** In `app/actions.ts`, configure `SendEmailCommand`'s `ToAddresses` array using `process.env.CLIENT_EMAIL`, `process.env.ADMIN_EMAIL`, and `process.env.OWNER_EMAIL` (with fallback to `ADMIN_EMAIL`). Use development overrides for testing.
    2.  **SNS SMS Implementation:** Construct the SMS message and use `PublishCommand` with `PhoneNumber: process.env.OWNER_PHONE_NUMBER`. Use development overrides for testing. Log warnings if production `OWNER_PHONE_NUMBER` is missing.
    3.  **Error Handling:** Wrap SES and SNS calls in `try...catch` blocks, logging errors. Ensure `isNotificationConfigured` correctly gates notification logic.
*   **Verification:** Confirm Twilio is completely removed. Test email and SMS notifications in the development environment. Verify production configuration relies on environment variables.

### **Final Production Quality and Sustainability Check**

*   **Code Linting:** Execute `npm run lint -- --fix`.
*   **Dependency Review:** Ensure `package.json` reflects only necessary AWS SDK packages.
*   **Styling Review:** Visually inspect all modified UI elements for consistency with `globals.css` and the established design guide.
*   **Functional Testing:** Perform end-to-end testing of the Cost Estimator in the development environment. Verify all steps, calculations, notifications, and UI elements.
*   **Sustainability:** Confirm all sensitive configurations (emails, phone numbers, AWS keys) are managed via environment variables.

---
