# grocery-list

This application runs on Node JS. It has been tested on `9.11`.

Please follow these instructions to get things running.

### Install dependencies

```
npm install
```

### Build the frontend bundle

```
npm run build
```


### Run the application

```
npm start
```

The application should now be running on http://localhost:3000

Note: set env variable `PORT` to run on a different port


### To run the tests:

```
npm test
```

---

**Version number** 38ada8dd45ad9b9c3f5bae33cb41119c526dd243

## Features

- View list ☑️
- Add lines ☑️
- Strike through when purchase has been made
- Equal experts branding 


## Compromises

### I didn't compromise on:
- API acceptance tests. Quicker feedback loop than testing in browser + provides a safety net for future refactoring.

- API validation. It's possible to make API requests outside of the frontend application


### I compromised on:
- API unit tests. I'd add them when refactoring logic out of the controllers.

- Completing the _strike through_ feature. With 20 minutes to go I decided to opt for branding/visual improvements instead. Felt the features I had completed would be useful in their own right.

- Fiddly unit tests on `client/components/AddItem` and `client/api-client.js`. The behaviour is relatively easy to test in the browser

- Adding equal experts specific branding. I only had time to use bootstrap to make the UI easier to read

- Error handling in `client/components/Container.js`. In hindsight I should have bumped the branding for this.