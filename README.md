# voter statistics
`voter statistics` is a simple React-based web application that displays a table of voter statistics from a provided endpoint.

Created by [prokhorvlg (Valentin Sigalov)](https://github.com/prokhorvlg).

## Contents

This repository contains the project:
* **React app**: The full React-based front-end can be found within the 'app' folder.

## History

To view the git commit history for this repository, use the command `git log`.

For a minified version, use `git log --pretty="%h - %s"`.

You can also view the [GitHub commit log](https://github.com/prokhorvlg/voter-statistics/commits/main).

## Technologies

* **React** - JavaScript framework, React hooks, functional components
* **TypeScript** - interfaces, types
* **Jest**, **React Testing Library** - user-experience-oriented unit testing
* **SCSS** - CSS preprocessor
* **React Dropdown Select** - external component used in place of a vanilla dropdown
* **Docker** - containerized front end application for use in CI/CD pipeline

## Features

* **Loads and displays data** from the provided endpoint using a fetch request and displays it as a list
* **Aggregates data** into segments with calculated percentages

## How to Set Up and Run

Before starting, clone the repository using `git clone https://github.com/prokhorvlg/voter-statistics.git`.

### React App

#### Run the App

1. Open terminal on this folder.
2. Run `npm install`.
3. Run `npm start`.
4. Visit `localhost:3000` if the app does not automatically open in browser.

#### Run the Unit Tests

1. Open terminal on this folder.
2. Run `npm install`.
3. Run `npm test`.
4. The Jest test results should appear in your console after running.

#### Run on Docker

1. Open terminal on this folder.
2. Run `npm docker-build`.
3. Visit `localhost:3000` if the app does not automatically open in browser.

## Future ideas
* Allow user to filter by column by simply selecting the column itself.
* Responsive design, so the table can be usable on a mobile device.

# Mistakes

When designing the app initially, I did not notice the totals row provided with the data, so I implemented the total calculations myself. 

In my opinion, this was caused primarily by these issues:

* The lack of an interface provided with the endpoint.
* The endpoint's design is unconventional. From my experience, special pieces of information are often provided seperately within the interface.
* I did not examine each row carefully enough.

Ultimately, I decided to stick with my logic as I felt confident with it and did not want to spend time refactoring. Instead, I simply filtered out the totals row.