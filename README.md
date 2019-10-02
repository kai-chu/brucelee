# brucelee

## background
I just watched a video in youtube, in which a guy said Bruce Lee is 4 times faster punches than the quickest guy does in the world. Then the idea comes out.

## game
A facebook online game in which players can click on space as quickly as possible. If someone in the game can do it 4 times faster than the second faster guy, the winer is Bruce Lee.

![Idea](/idea.png)

## Game Engine
Phaser is an engine to create 2D games, I found out their github is quite active and documents are pretty easy as well. 
https://phaser.io

## Backend end api specification
GraphQL https://graphql.org/
GraphQL is really good for defining apis with a good manner. 

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

## Intial graphql spec
```
Query {
}

Mutation { 
  createRoom(request: Room!): RoomPayload!
  joinRoom(request: Room!): JoinPayload!
  startGame(): 
}

Subscription {
  gameStatesUpdate(): UpdatePacketPayload!
}

input Room {
   name: String!
}

type RoomPayload {
   id: ID!
   name: String!
}

type JoinPayload {
   players: [Player]!
}

type Player {
   id: String!
}

type UpdatePacketPayload {
   delta: GameStateDelta
}

type GameStateDelta {
   ... 
}

// something more
```
