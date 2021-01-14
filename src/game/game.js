import Phaser from 'phaser'
import BootScene from '@/game/scenes/BootScene'

function launch(containerID) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 1366,
    height: 768,
    parent:containerID,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {y: 300},
        debug: false
      },
    },
    scene:BootScene
  })
}


export  default  {launch}
