# voter statistics
`voter statistics` is a simple React-based web application that displays a table of voter statistics from a provided endpoint.

Created by [prokhorvlg (Valentin Sigalov)](https://github.com/prokhorvlg).

## Contents

This repository contains the project:
* **React app**: The full React-based front-end can be found within the 'app' folder.

## History

To view the git commit history for this repository, use the command `git log`.

For a minified version, use `git log --pretty="%h - %s"`.

You can also view the [GitHub commit log](https://github.com/prokhorvlg/relay-network-take-home-val/commits/main).

## Technologies

* **React** - JavaScript framework, React hooks, functional components
* **TypeScript** - interfaces, types
* **Jest**, **React Testing Library** - user-experience-oriented unit testing
* **SCSS** - CSS preprocessor
* **React Dropdown Select** - external component used in place of a vanilla dropdown

## Features

* **Loads and displays data** from the provided endpoint using a fetch request and displays it as a list
* **Aggregates data** into segments with calculated percentages

## How to Set Up and Run

Before starting, clone the repository using `git clone https://github.com/prokhorvlg/relay-network-take-home-val.git`.

### React App

#### Run the App

1. Open terminal on this folder.
2. Run `cd app` to open the client app folder.
3. Run `npm install`.
4. Run `npm start`.
5. Visit `localhost:3000` if the app does not automatically open in browser.

#### Run the Unit Tests

1. Open terminal on this folder.
2. Run `cd app` to open the client app folder.
3. Run `npm install`.
4. Run `npm test`.
5. The Jest test results should appear in your console after running.

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