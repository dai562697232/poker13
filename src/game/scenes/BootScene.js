import {Scene} from 'phaser'
// import sky from '@/game/assets/sky.png'

export default class BootScene extends Scene {
  constructor(){
    super({key:'BootScene'})
  }

  preload (){
    this.load.image("table",require('@/game/assets/poker-table.png'))
    this.load.image("ace_of_spades",require('@/game/assets/pokerimg/ace_of_spades.png'))
  }

  create(){
    this.add.image(650,400,'table').setScale(1.5)
    this.add.image(300,680,'ace_of_spades').setScale(0.2)
  }



}
