# Example React Native Test

## Introduction

You'll find a small iOS app called EventsApp in here, the app provides a schedule of upcoming events and allows the user to _buy_ a ticket.

Below we have 2 tasks, the first is a review task where we would like you to complete a review of the current state of the EventsApp codebase.

The second is our technical task where we ask that you complete 3 subtasks. Please complete subtask 1 and 2, optionally if you have time you can also complete the 3rd subtask. 

We recommend that the test should take a couple of hours (2-3) rather than days. All we ask is that you let us know, truthfully, how much time you spent on the test. There is no right or wrong amount of time, this info will simply help us with context when reviewing the results.


## Setup
- A very basic GraphQL endpoint with a list of events is provided. Start it by running `node server.js`. You'll then have access to GraphQL at http://localhost:8702/graphql
- You'll need to install dependencies via `yarn install` followed by `cd ios; pod install`
- Open `./src/ios/EventsApp.xcworkspace` in Xcode to run

## Review Task
Take some time to review the current codebase inside `./src`. Please leave your review in `__FEEDBACK.md` inside of that directory. Feel free to quote blocks of code in the markdown file or format it.

Treat this as a code review you'd provide to your colleague on a Github pull request. What we're looking for in this part is to see what you normally pay attention to when you're reviewing the code of your teammate and how you communicate feedback to them. Feel free to also point out things you like in the code, not just critique.


## Technical Task

**1. Create a native module exposing a native method which will play a selected sound file on buying a ticket to an event**
In `./src/screens/Confirm/index.js` you'll find a stub that plays a random sound when the page is opened on line 45. This will work when the SoundManager NativeModule is available, this task is to implement that module. 

- Create the SoundManager module
- Expose a method like `SoundManager.play(soundName)` where soundName is a string matching one of the 3 mp3 files in `./src/ios/`
- On calling the play method the selected sound should be played

**2. Implement a calendar to jump to a day on the schedule**
You'll find a button for a calendar on the top right of the schedule screen, using whatever tools, components and libraries you'd like implement the following requirements:

- On press we would like to display a calendar for the month ahead
- Selecting a day should jump to that day on the schedule screen. The user should still be able to scroll through through the other days on the list after jumping.

When approaching this task please consider the performance of this screen when displaying a large number of events along with any accessibility and UX needs.

**3. (Optional) Implement the GraphQL query for event on the event screen and display real data for that event**
In `./src/screens/Event/index.js` you'll find the screen is populated with mock data. Our backend provides a query for fetching a single event by ID. This task is to implement that query and display real data on the Event screen.

- Using the ID passed via navigation to the Event screen fetch the event details
- Display the real event data (title, description, pricing) on the Event screen

Example query to fetch a single event by ID:

http://localhost:8702/graphql?operationName=GetEvent&query=query%20GetEvent(%24eventId%3A%20ID!)%20%7B%0A%20%20%20%20Event(id%3A%20%24eventId)%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20starts%0A%20%20%20%20%20%20image%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20long_description%0A%20%20%20%20%20%20price%0A%20%20%20%20%20%20location%0A%20%20%20%20%7D%0A%20%20%7D&variables=%7B%0A%20%20%22eventId%22%3A%20%22uuid%22%0A%7D
