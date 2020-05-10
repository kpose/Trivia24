## Description
> Trivia24 is an iOS contest app built with React Native and Expo. This app will allow you to run a trivia contest for a group of people. One person, the admin, will be in control of when a new question is sent to the players. The players will then answer, and a leaderboard will be updated. When the admin chooses, the game can be ended

## Screenshots

![Welcome](https://user-images.githubusercontent.com/25622362/81503713-0b1b7d00-92dd-11ea-8d9c-b5c307d96c0f.PNG) ![Admin](https://user-images.githubusercontent.com/25622362/81503756-3bfbb200-92dd-11ea-8fe9-767a222f952f.PNG) ![Questions](https://user-images.githubusercontent.com/25622362/81503764-5b92da80-92dd-11ea-8103-d4db943f6e5b.PNG) ![Leaderboard](https://user-images.githubusercontent.com/25622362/81503781-79603f80-92dd-11ea-9fbf-809b3c81b085.PNG) ![EndGame](https://user-images.githubusercontent.com/25622362/81503820-b9272700-92dd-11ea-801e-caffd7c5877a.PNG)


## Main technologies used

- [React Native](https://github.com/facebook/react-native)

> A framework for building native apps with React.

- [Expo](https://expo.io)

> An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

- [Socket io](https://socket.io)

> A JavaScript library for realtime web applications that enables realtime, bi-directional communication between web clients and servers

- [React Navigation](https://reactnavigation.org)

> Routing and navigation for your React Native apps

- [Redux](https://redux.js.org)

> A predictable state container for JavaScript apps.

- [Styled Components](https://www.styled-components.com)

> Use the best bits of ES6 and CSS to style your apps without stress.

## Running the project

- Clone this project
```
git clone < project-url.git >
```

- [Install Expo](https://expo.io) on your computer. Assuming that you have Node 10 LTS or greater installed, you can use npm to install the Expo CLI command line utility:
 ```
npm install -g expo-cli
``` 
- 
- [Install NodeJS](https://nodejs.org/en/) on your computer.

- [Install yarn](https://yarnpkg.com/en/docs/install) on your computer
> Yarn is a dependency manager built by facebook and google. It is a more efficient and reliable (thanks to yarn.lock) alternative of npm.

- Launch ``` yarn ``` command in a terminal opened in the project folder.
> This command will look into the *package.json* file and install all the dependencies listed here.

- Then run the following command from the project folder to start the app
```
expo start
```