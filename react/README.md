# Synaptiq React Skills Test

## Holiday Shopping Countdown

![](https://y.yarn.co/026b65c5-9ada-46b8-b1ec-11135f7efe41_text.gif)

### New Feature Story:

> As a user I want to know how many days I have left to go shopping for presents for a specific holiday e.g. Mother's Day: I want to be able to choose from a list of predefined holiday dates, and be shown the number of days remaining before the next occurrence.

The date picker itself follows [the "Date List" pattern in Polaris' Date Picking spec](https://polaris.shopify.com/patterns/date-picking/date-list) - the user selects a range of time between now, and the next occurance of a holiday date.

## New Dependencies

- [convert](https://www.npmjs.com/package/convert) - convert between one unit and another, used here for `ms`➡`days`

## New Components

_components are browsed with `yarn storybook`_

- `<DatePickerList />` - basically just a `<select />` and a collection of `<option />`s that fires an event when the user picks a new value

## New Tests

### Unit Tests

_tests are run with `yarn test`_

- **getFutureDateDifferenceMs** - function takes a month/day date string, and returns the number of milliseconds before the _next_ occurence of that date. If the month/day provided is the same as the current date, a year's worth of milliseconds are returned
