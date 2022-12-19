## Overall thoughts

- Consider code style and linting to be used across the codebase
- Consider useMemo / useCallback usage in more components to prevent re-renders that cause repeated execution / instantiation

## /src/screens/Schedule/index.js 

- Maintain components in separate file to neaten the codebase, keep concerns separate and make it eaiser to test

## /src/utils/dates.js

- niceDate Naming wasn't descriptive, consider general purpose helper function naming - for example the function name was changed to formatDate. Building on from simple functions for common use cases a group of helper functions could also be built on top of the base function e.g. longFormDate or shortFormDate that use the base formatDate function. We can agree on some standardisation of how to present a few forms of date across the app to help prevent confusion to the user by preventing usage of too many different formats.