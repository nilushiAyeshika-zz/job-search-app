## Job Search App

This project was with [Create React App - TypeScript](https://create-react-app.dev/docs/getting-started/#creating-a-typescript-app).

Features :

```
Users can search jobs using query string and location.
List of job search result.
API polling with result.
Users can navigate to the job details page.
User can apply to a job by clicking on the Apply button.
Already applied job also labeled.
If the user navigates back to this results page from other pages, the current search query and results
are preserved, so that the user can continue browsing the results.
```

## .env Configuration

Create .env file and add below lines into file

```
REACT_APP_JOB_SERVICES=http://localhost:8080
```

## Running the project locally with Docker

Run the following command to build and run the app service docker image

```
docker-compose -f jobsearch.yml up
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To stop the service and remove all relevant resources, run the following command

```
docker-compose -f jobsearch.yml down
```

## Available scripts & running the project locally without Docker

First you need to install dependencies using yarn

### `yarn`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run test -- --coverage --watchAll=false`

Launches the test coverage reports.

### `yarn run lint`

Run the eslint and check the issues.

### `yarn run format`

Code formatting by using the prettier.

## Learn More resources for unit test

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

https://www.npmjs.com/package/jest

https://www.npmjs.com/package/enzyme

https://www.npmjs.com/package/enzyme-adapter-react-17
