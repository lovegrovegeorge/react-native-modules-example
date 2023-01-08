## /src/screens/Schedule/index.js

- Maintain shared and screen components in separate files to neaten and decouple each part of the codebase - helping to keep concerns separate and making it eaiser to test and reuse code

## /src/utils/dates.js

- niceDate Naming wasn't descriptive, consider general purpose helper function naming - for example the function name was changed to formatDate. Building on from simple functions for common use cases a group of helper functions could also be built on top of the base function e.g. longFormDate or shortFormDate that use the base formatDate function. We can agree on some standardisation of how to present a few forms of date across the app to help prevent confusion to the user by preventing usage of too many different formats.
