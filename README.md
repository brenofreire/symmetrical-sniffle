# Code Challenge for Senior Frontend Engineer (Angular 17+ / React)

## Code Challenge

### Build a Multi-Step Form Wizard with Validation and Asynchronous Error Handling

**Objective:**\
Create a multi-step form wizard using either **Angular 17+** or **React** that demonstrates your ability to handle complex form workflows, synchronous and asynchronous validation, accessibility compliance, and performance considerations.

### Requirements

1.  **Multi-Step Form Wizard**

    *   At least 3 steps/pages in the form.
    *   Navigation controls to move forward and backward between steps.
    *   Display a progress indicator (e.g., step numbers or progress bar).

2.  **Form Fields & Validation**

    *   Each step should contain multiple form fields (text inputs, selects, checkboxes, etc.).
    *   Implement synchronous validation (e.g., required fields, email format).
    *   Implement asynchronous validation on at least one field (e.g., username availability check simulated with a Promise and a delay).
    *   Show validation error messages inline and disable the "Next" button until the current step is valid.

3.  **Asynchronous Error Handling**

    *   Simulate an asynchronous API call on the final submission step.
    *   Handle possible errors gracefully (e.g., network error or server validation failure).
    *   Display user-friendly error messages and allow retry.

4.  **Accessibility**

    *   Use semantic HTML and ARIA roles where appropriate.
    *   Ensure keyboard navigation works for all interactive elements.
    *   Provide screen reader-friendly labels and error announcements.

5.  **Performance Considerations**

    *   Use React hooks or Angular reactive forms efficiently to avoid unnecessary re-renders.
    *   Lazy load form steps/components if applicable.
    *   Keep the UI responsive and snappy.

6.  **Bonus (Optional)**

    *   Use a state management approach suitable for the chosen framework (e.g., React Context + useReducer, Angular Services with RxJS).
    *   Add unit or integration tests for form validation logic (optional due to time constraints).

### Deliverables

*   A runnable project or code snippet that can be tested live (e.g., on StackBlitz, CodeSandbox, or GitHub Codespaces).
*   Clear instructions on how to run the project.
*   Brief comments explaining key parts of your implementation.

### Time Limit

**30 minutes**

## External Resources

*   You may use any free online code editor for live coding, such as:

    *   [StackBlitz (Angular & React)](https://stackblitz.com/)
    *   [CodeSandbox (React & Angular)](https://codesandbox.io/)

*   For asynchronous username validation simulation, no real API is required; use a mocked Promise with a delay.

*   Accessibility references:

    *   [WCAG 2.1 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
    *   [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)

## Relevant Technologies

*   Angular 17+ (Reactive Forms, RxJS, Angular Material optional)
*   React (Hooks, Context API, functional components)
*   JavaScript (ES6+) / TypeScript
*   HTML5, CSS3
*   Accessibility (ARIA roles, keyboard navigation)
*   Asynchronous programming (Promises, async/await)