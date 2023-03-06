# Hops-app frontend

The app is used to plan studies. The core functionality is a calendar which consists of 4 periods and 2 additional periods for summer studies. Courses can be added, edited and removed.

The app requires registering and logging in in order to use the calendar.

This app is running [here](https://hopsapp.fly.dev/)

The frontend of the app is crafted with Typescript, React and materialUI. E2E testing is performed with cypress.


### Working hours record for the fullstack course

| day   |hours | description  |
| :----:|:-----| :-----|
| 3.2.  | 2    | Project planning, backend initialization, creation of mongoose schemas  |
| 5.2.  | 6    | Git initialized, created ApolloServer, created schema for Apollo and mongoose |
| 6.2.  | 3    | More schemas for mongooose, Added mutations and queries for apollo |
|       | 4    | More resolvers and queries |
| 7.2.  | 8    | Unit tests for mutations and queries --> fixed broken mutation |
| 8.2.  | 7    | Frontend initialized, created appbar component and frontpage. Enabled materialUI |
| 9.2.  | 3    | Customhooks, styling, refactoring and created the page component |
| 13.2  | 8    | Improved AppBar, signup and login forms.
| 14.2  | 3    | Backend is now using express, apollo is used as a middleware.
|       | 6    | Production env for the app. Automatic deploying. Styled forms. Base for the calendar component.
| 18.2  | 8    | Fixed AppBar, fixed useMe hook,  app now fetches coursedata from backend. Styled the calendar.
| 20.2  | 10   | Added components for the calendar
| 21.2  | 12   | Enabled redux on frontend. Fixed remounting issues and various bugs. Added a feature where courses can be added.
| 24.2  | 8    | Modal for course inspection and/or deletion. 
|       | 2    | Calendar column summaries
|       | 1    | Profile page
|       | 4    | Home page introduction and compilation components
|       | 2    | About page which renders a .md file
|       | 1    | Bug fixing
| 26.2  | 3    | Refactored components directory. Enabled prettier in frontend.
| 27.2  | 2    | Improved typing in forms. Changed profile and hops routes to protected routes.
| 28.2  | 4    | Enabled prettier in backend. Refactored and improved tests of backend.
| 1.3   | 1    | Created test for editcourse mutation
|       | 2    | Implemented editcourse mutation
|       | 3    | Added the ability to edit courses through the coursemodal in frontend
| 4.3   | 8    | Tooltips for buttons. Notifications for various actions. Enabled cypress E2E testing
| 5.3   | 3    | Created testingrouter in backend for E2E testing. Added E2E tests
| total | 124  | | 
