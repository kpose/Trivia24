## Description
> Trivia24 is an iOS contest app built with React Native and Expo. This app will allow you to run a trivia contest for a group of people. One person, the admin, will be in control of when a new question is sent to the players. The players will then answer, and a leaderboard will be updated. When the admin chooses, the game can be ended

## Screenshots

![Welcome](https://user-images.githubusercontent.com/25622362/81504162-9d248500-92df-11ea-8e5a-1dee2518cf3e.PNG) ![Admin](https://user-images.githubusercontent.com/25622362/81504196-cb09c980-92df-11ea-9761-5ff7fba10373.PNG) ![Questions](https://user-images.githubusercontent.com/25622362/81504229-ee347900-92df-11ea-932a-a6b51af97383.PNG) ![Leaderboard](https://user-images.githubusercontent.com/25622362/81504239-0efcce80-92e0-11ea-9c63-406a1d331fc9.PNG) ![EndGame](https://user-images.githubusercontent.com/25622362/81504259-33f14180-92e0-11ea-9ba0-386a3f178c25.PNG)


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