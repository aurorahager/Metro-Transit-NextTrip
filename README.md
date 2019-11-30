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
- React with hooks and context for managing state
- React Router for page routing
- Jest and Enzyme for testing

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
`npm test`

## Assumptions
- Testing will probably the most challenging aspect of this application. I have only seen some basic testing for React with Jest but have not used it myself.
- There is going to be API calls that rely on data from previous API calls. I will need to find a way to do this that is clean, DRY and not verbose.
- Attempting to make this with accessibility in mind may cause the application may deviate somewhat from the example. For example, a submit button will be added to create a better user experience for those with cognitive disabilities.

## Next Steps



