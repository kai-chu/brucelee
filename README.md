# brucelee

## background
I just watched a video in youtube, in which a guy said Bruce Lee is 4 times faster punches than the quickest guy does in the world. Then the idea comes out.

## game
A facebook online game in which players can click on space as quickly as possible. If someone in the game can do it 4 times faster than the second faster guy, the winer is Bruce Lee.

![Idea](/idea.png)

## Game Engine
Phaser is an engine to create 2D games, I found out their github is quite active and documents are pretty easy as well. 
https://phaser.io

## Game server project
https://heroiclabs.com

## Things to do
* Add github pages to describe what the project is and news
* Add backend to store use records
    * Add backend service end point to receive user command
    * Add backend service logic to compare user click speed and rank
    * Add backend service logic to identify final states of the game, clicking speed of the first quickest user is 4 times than that of the second fastest.
    * Add backend service to publish game status

* Add frontend to interact with users
    * Add login check with facebook login api
    * Add game logic to show user click speed
    * Add game logic to receive user click
    * Add game logic to show different colors for different users
    * Refactor project to use webpack, npm
    * Add CI build in travis ci

## Game Stories
When an user enters the game after login with facebook, interface with should be shown with create a room or join a room. A game will be started in a room.
* Create a room
  * User inputs the room name and create it.
* Invite other to join
  * User can input other users id and click invite to send invitations
* Join a room
  * User inputs the room id or id, click on join. Feedback should be given depending on if the game has started or not.
  * User can accept a inviation to friends join a room.
* View a list of rooms
  * User can see list of rooms existing in the game
* User can start a game
  * User click start to start a game and 3s later all user can start compete with each other
* User can quit a game
  * User click quit to leave a game room
* User Play
  * To play, user continuousely click space button on keyboard as quickly as possible to win the game to be Bruce Lee


## Init project setup
Start backend, go to backend 
```
cd backend
docker-compose up
```
go to http://localhost:8080

Start frontend ui
```
cd ui
yarn install
yarn build-dev
yarn start
```
go to http://localhost:8081