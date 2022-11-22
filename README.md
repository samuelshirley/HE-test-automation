# HE-test-automation

## Step One - Add env variables to cypress.config.template -> copy and save as cypress.config.js 
(BASE_URL: 'https://github.com')
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
