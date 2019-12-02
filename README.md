# Metro Transit: NextTrip

## Table of Contents
1. [Introduction](#introduction)
2. [Technology](#technology)
3. [Setup](#setup)
4. [Tests](#tests)
5. [Assumptions](#assumptions)
6. [Next Steps](#next-steps)

## Introduction
Metro Transit: NextTrip is a front end application that allows users to find up coming transit times for a given route using the NextTrip API.

This application was made for the Target Case Study.

## Technology
- React with hooks, context, and reducers for managing state
- React Router for page routing
- Semantic UI React for styling
- Axios for HTTP requests
- Jest and Enzyme for testing
- Moxios for testing mock Axios requests

## Setup

To run this project, install it locally using npm:

```
cd <desired directory>
npm install
npm start
```

This runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tests

to run tests on this project:

```
npm test
```
Tests include testing for API calls and content rendering.

## Assumptions
- Testing will probably the most challenging aspect of this application. I have only seen some basic testing for React with Jest but have not used it myself.
- There is going to be API calls that rely on data from previous API calls. I will need to find a way to do this that is clean, DRY and not verbose.
- Attempting to make this with accessibility in mind may cause the application may deviate somewhat from the example. For example, a submit button will be added to create a better user experience for those with cognitive disabilities.

## Next Steps
### Known Bugs
- There is an error when a user refreshes to the stops view. To be production ready this would either need to redirect back to search view on refresh or save results.
- On the search view each stop property is only updated once (and therefore the appropriate API call is only made once). This means that if a user selected a route and selected a direction, but then changed their mind and selected a different route the directions and stops would not update with new data causing a error on the stops view when attempting to display data.
- There are some warning errors that get thrown when testing, but they do not affect test results.
### Future Features
- Replace alert with a toast or other non-intrusive way to let tell users to select all options
- Create custom accessible select dropdowns to be able to style dropdown content.
- Show selected stop data on Stops view.
- Additional testing for stops container.
- Link to Metro Transit route page for given route on stops view.
- Tweak styling for mobile responsive.



