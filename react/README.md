# Synaptiq React Skills Test

## Holiday Shopping Countdown

### New Feature Story:

As a user I want to know how many days I have left to go shopping for presents for Mother's Day - I want to be able to choose from a list of predfined holiday dates, and be shown the number of days remaining before the next occurance.

The date picker itself follows [the "Date List" pattern in Polaris' Date Picking spec](https://polaris.shopify.com/patterns/date-picking/date-list) - the user selects a range of time between now, and the next occurance of a holiday date.

## New Dependencies

- [convert](https://www.npmjs.com/package/convert) - convert between one unit and another, used here for `ms`->`days`

## New Components

_components are browed with `yarn storybook`_

- `<DatePickerList />` - basically just a `<select />` and a collection of `<option />`s that fires an event when the user picks a new value

## New Tests

### Unit Tests

_tests are run with `yarn test`_

- **getFutureDateDifferenceMs** - function takes a month/day date string, and returns the number of milliseconds before the _next_ occurence of that date. If the month/day provided is the same as the current date, a year's worth of milliseconds are returned

## Features

TODO:

### Usability

TODO:

### Accessibility

TODO:

---

- You should build off the framework and tools in this repo, namely:
  - yarn
  - storybook
  - next.js
  - react
  - tailwind.css
  - typescript
- You may pick any of the patterns described (single-date, date range or date list)
- You should include your component in a sample next.js page added to this project
- Your example page can do anything you want, so show off what it can do!
- Your component should be added to the storybook in this project
- Your component should be tested and demonstrate your command of css, html and react
- Your should add (and document) the commands used to run your tests
- Your component should meet the usability guidelines from polaris
- You should update this readme explaining what usability features and capabilities you have implemented
- You should fork this repository and open a pull request against it with your changes.
- Your code should compile and test cleanly via github actions.
  - Opening a pull request will verify this
  - You can also use `act -C..` from https://github.com/nektos/act to run locally
- You should be prepared to discuss your changes in detail and explain why they are great.
