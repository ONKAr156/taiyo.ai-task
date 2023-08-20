# Contact Management App with Charts and Maps

📊🗺️ A Contact Management App with interactive Charts and Maps, built using ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query (TanstackQuery).

## Table of Contents

- [Objective](#objective)
- [Features](#features)
- [Getting Started](#getting-started)
- [APIs](#apis)
- [Things used](#Things-used)
- [Technologies Used](#technologies-used)


## Objective

Create a comprehensive contact management app that also includes interactive Charts and Maps to visualize COVID-19 data. The app should be well-structured, responsive, and easy to maintain.

### Objective Page: Contacts

- Add new contacts using a form.
- Display a list of all added contacts.
- Each contact has a button to view its details.
- Contacts can be edited and deleted.
- Utilize Redux to store contact data.

### Objective Page: Charts and Maps

- Build a simple dashboard with:
  - A line graph showing COVID-19 cases fluctuations.
  - A React Leaflet map with markers indicating COVID-19 statistics for countries.

## Features

- Add and manage contacts.
- Interactive line graph to visualize COVID-19 cases fluctuations.
- Interactive map with country-specific COVID-19 statistics.
- Responsive design for desktop and mobile devices.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm i`.
3. Run the development server using `npm run dev`.
3. Run the development server using `json-server --watch --port=5000 db.json`.

## APIs

- Worldwide COVID-19 data: [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
- Country-specific COVID-19 data: [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
- Graph data for cases with date: [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)

## Things used :

- Used create-react-app with TypeScript to set up the basic structure of the app.
- Used React Query to handle API calls and data management.
- Used TailwindCSS to style the app.
- Used TypeScript to type-check the code.


## Technologies Used

- ReactJS
- TypeScript
- TailwindCSS
- React Router v6
- React Query (TanstackQuery)
- Redux