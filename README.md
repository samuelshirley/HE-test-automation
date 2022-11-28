# HE-test-automation

## Step One - Add a cypress.config.js with env variables from the cypress.config.template

(for the code challenge purposes, you will only need to install and run.)
Test for AC is in /cypress/e2e/Github/Pages/Search/unathenticated-users.cy.js
Other folders are to demonstrate a folder structure

## Step Two - Install

```
npm install
```

## How to run headless

```
npm run cypress:run
```

## How to run headed in your choice of chrome / electron

```
npm run cypress:open
```

# Ticket-AC

- As a guest (not logged-in), when I search github for the term "create-react-app" from the landing page search input, I see:
  - A count of matching results
  - The facebook/create-create-app project as the first result
- As a guest, when I click the "About" button in the landing page footer I am taken to the GitHub "About" page

# Extra

I made a super simple single API test with Jest hitting Github's API and checking the repo url and request status.

Please get the API key from the onetime secret link in the email sent to Brendan then paste it into {{APIKEY}} inside config.template.json in /API-TEST and save the file as "config.json"

```
npm run apitests

```
