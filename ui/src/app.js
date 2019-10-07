import {Client} from '@heroiclabs/nakama-js';
import Phaser from 'phaser';
var client = new Client("defaultkey", "127.0.0.1", 7350);
client.ssl = false;

async function init() {
    const email = "hello@example.com";
    const password = "somesupersecretpassword";
    const session = await client.authenticateEmail({
      email: email,
      password: password
    });
    // Store session for quick reconnects.
    localStorage.nakamaAuthToken = session.token;
    console.info("Authenticated successfully. User id:", session.user_id);
}

init()

function preload() {
  this.load.image('logo', '/assets/hello.png');
  this.load.image('red', 'http://labs.phaser.io/assets/particles/red.png');
  this.load.image('sky','/assets/world.jpg');
}

function create() {
  this.add.image(400, 300, 'sky');

  var particles = this.add.particles('red');

  var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
  });

  var logo = this.physics.add.image(400, 100, 'logo');

  logo.setVelocity(50, 100);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
  },
  scene: {
      preload: preload,
      create: create
  }
};

function loadGame() {
  var game = new Phaser.Game(config);
}

loadGame();