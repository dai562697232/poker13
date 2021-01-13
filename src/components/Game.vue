<template>
  <div style="height: 100%">

    <!--<img src="../assets/card-imgs/ace_of_clubs.png"/>-->


    <!--<b-img v-bind:src="testUrl"  width="130px" height="190px"/>-->
    <!--玩家1区域-->
    <div>
      <a-row>
        <a-col span="8">
          <a-button type="primary" @click="sendPoker">在线荷官 性感发牌</a-button>
        </a-col>
        <a-col span="8" style="height:100%">
          <a-card style="background-color: bisque;">
            <h1>至死不渝丶震</h1>
          </a-card>
        </a-col>
        <a-col span="8">
          <a-button>开始游戏</a-button>
        </a-col>
      </a-row>
    </div>
    <!--玩家2区域-->

    <div>
      <a-row>

        <a-col span="6">
          <a-card style="background-color: bisque">
            <h1>天下爱我的</h1>
          </a-card>
        </a-col>
        <a-col span="12">
          <a-card style="background-color: green">

            <img src="../assets/card-imgs/poker_table.png"/>
          </a-card>
        </a-col>
        <a-col span="6">
          <a-card style="background-color: bisque">
            <h1>雷胎神</h1>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <!--玩家4区域-->
    <div>
      <a-row>
        <a-col span="9" offset="8">
          <a-card>
            <a-card-grid style="width: 33.333333333333333333333333333%" v-for="poker in poker_position.first" :key="poker.name">
              <img :src="poker.imgUrl" style="width: 80%" height="150px"/>
              <a-button>切换</a-button>
            </a-card-grid>
          </a-card>
        </a-col>
      </a-row>
      <a-row>
        <a-col span="16" offset="4">
          <a-card>
            <a-card-grid  style="width: 20%" v-for="poker in poker_position.second" :key="poker.name">
              <img :src="poker.imgUrl"height="150px"/>
              <a-button type="primary">切换</a-button>
            </a-card-grid>
          </a-card>
        </a-col>
      </a-row>
      <a-row>
        <a-col span="16" offset="4">
          <a-card>
            <a-card-grid  style="width: 20%" v-for="poker in poker_position.third" :key="poker.name">
              <img :src="poker.imgUrl"height="150px"/>
              <a-button>切换</a-button>
            </a-card-grid>
          </a-card>
        </a-col>
      </a-row>
<!--      <a-row>
        <a-col span="24">
          <span style="margin: auto">头道</span>
          <a-space :size="0" class="poker_img" v-for="poker in  poker_position.first" :key="poker.name">
            <a-row>
              <a-col span="24"><b-img :src="poker.imgUrl" width="100px"
                                      height="150px"/>
              </a-col>
              <a-col span="24"><a-button style="width: 80%" block icon="setting"></a-button></a-col>
            </a-row>
          </a-space>
        </a-col>
      </a-row>

      <a-row>
        <a-col span="24">
          <a-space :size="0" class="poker_img" v-for="poker in  poker_position.second" :key="poker.name">
            <a-row>
              <a-col span="24"><b-img :src="poker.imgUrl" width="100px"
                                      height="150px"/>
              </a-col>
              <a-col span="24"><a-button style="width: 80%" block icon="setting"></a-button></a-col>
            </a-row>
          </a-space>
        </a-col>
      </a-row>
      <a-row>
        <a-col span="24">
          <a-space :size="0" class="poker_img" v-for="poker in  poker_position.third" :key="poker.name">
            <a-row>
              <a-col span="24"><b-img :src="poker.imgUrl" width="100px"
                                      height="150px"/>
              </a-col>
              <a-col span="24"><a-button style="width: 80%" block icon="setting"></a-button></a-col>
            </a-row>
          </a-space>
        </a-col>
      </a-row>-->




      <!--<a-row>
        <a-col span="24">
          <div>
              <a-space :size="0" class="poker_img" v-for="poker in  players.player1" :key="poker.name">
                <a-row>
                  <a-col span="24"><b-img :src="poker.imgUrl" width="100px"
                                          height="150px"/>
                    </a-col>
                  <a-col span="24"><a-button style="width: 80%" block icon="setting"></a-button></a-col>
                </a-row>
              </a-space>
          </div>
        </a-col>
      </a-row>-->
    </div>


    <!--    <b-row>
          <b-col>
            <h3>玩家2</h3>
           <b-img class="poker_img" v-for="poker in players.player2" :key="poker.name" :src="poker.imgUrl" width="130px" height="190px"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h3>玩家3</h3>
           <b-img class="poker_img" v-for="poker in players.player3" :key="poker.name" :src="poker.imgUrl" width="130px" height="190px"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h3>玩家4</h3>
           <b-img class="poker_img" v-for="poker in players.player4" :key="poker.name" :src="poker.imgUrl" width="130px" height="190px"/>
          </b-col>
        </b-row>-->
  </div>
</template>

<script>
  import ACol from "ant-design-vue/es/grid/Col";
  import ARow from "ant-design-vue/es/grid/Row";

  class Poker {
    constructor(color, value, name, imgUrl) {
      this.color = color
      this.value = value
      this.name = name
      this.imgUrl = imgUrl
    }

  }

  //注册洗牌算法
  Array.prototype.shuffle = function () {
    let m = this.length,
      i;
    while (m) {
      i = (Math.random() * m--) >>> 0;
      [this[m], this[i]] = [this[i], this[m]]
    }
    return this;
  }

  //检查是否含有ACE

  //检查有几对相同的


  const groups = [
    {
      name: '一条龙',
      rank: 0,
      shorthand: 'YTL'
    },
    {
      name: '同花顺',
      rank: 1,
      shorthand: 'THS'
    },
    {
      name: '四条',
      rank: 2,
      shorthand: 'SIT'
    },
    {
      name: '葫芦',
      rank: 3,
      shorthand: 'YTL'
    },
    {
      name: '同花',
      rank: 4,
      shorthand: 'HL'
    },
    {
      name: '顺子',
      rank: 5,
      shorthand: 'SZ'
    },
    {
      name: '三条',
      rank: 6,
      shorthand: 'SANT'
    },
    {
      name: '两对',
      rank: 7,
      shorthand: 'LD'
    },
    {
      name: '对子',
      rank: 8,
      shorthand: 'DZ'
    },
    {
      name: '乌龙',
      rank: 9,
      shorthand: 'WL'
    }
  ]
  const color = ["♠", "♥", "♣", "♦"]

  class CardType {
    constructor(pokers = [Poker]) {

      if (pokers.length === 3) {


      } else if (pokers.length === 5) {

      }
      this.pokers = pokers


      pokers.forEach(poker => {
        this.value += poker.value
      })
      this.value = value
    }

    _compare(cards = CardType) {

    }
  }


  const color_en = ["spades", "hearts", "clubs", "diamonds"]

  export default {
    name: "Game",
    components: {ARow, ACol},
    data() {
      return {
        cards: [],
        color_en,
        groups,
        height: '',
        tableImg: require('../assets/card-imgs/poker_table.png'),
        color,
        testUrl: '',
        players: {
          player1: [Poker],
          player2: [Poker],
          player3: [Poker],
          player4: [Poker]
        },
        poker_position:{
          first:[],
          second:[],
          third:[]
        }
      }
    },
    methods: {
      initPokers() {
        let arr = []

        for (var i = 0; i < 4; i++) {
          for (var j = 2; j <= 14; j++) {

            let c = null;
            switch (j) {

              case 11:
                c = new Poker(this.color_en[i], j, this.color[i] + "J", require(`../assets/card-imgs/jack_of_${this.color_en[i]}.png`))
                break;
              case 12:
                c = new Poker(this.color_en[i], j, this.color[i] + "Q", require(`../assets/card-imgs/queen_of_${this.color_en[i]}.png`))
                break;
              case 13:
                c = new Poker(this.color_en[i], j, this.color[i] + "K", require(`../assets/card-imgs/king_of_${this.color_en[i]}.png`))
                break;
              case 14:
                c = new Poker(this.color_en[i], j, this.color[i] + "A", require(`../assets/card-imgs/ace_of_${this.color_en[i]}.png`))
                break;
              default:
                c = new Poker(this.color_en[i], j, this.color[i] + j, require(`../assets/card-imgs/${j}_of_${this.color_en[i]}.png`))
            }
            arr.push(c)

          }
        }
        this.cards = [...arr]
      },
      check_ACE(pokers = [Poker]) {

        let flag = false
        pokers.forEach(poker => {
          if (poker.value === 14) {
            flag = true
          }
        })
        return flag;
      },
      check_same(pokers = [Poker]) {

        let sort_pokers = pokers.sort((a, b) => {
          return a.value - b.value
        })
        let cur_poker_value = []
        let pair_count = 0
        for (let i = 0; i < sort_pokers.length; i++) {
          if (cur_poker_value.indexOf(sort_pokers[i].value) === -1) {
            cur_poker_value.push(sort_pokers[i].value)
          } else {
            //存在相同卡牌 判断存在几对
            pair_count = cur_poker_value.indexOf(sort_pokers[i].value) === 1 ? 2 : 1
          }
        }
        return pair_count;


      },
      //判断顺子
      checkSZ(pokers = [Poker]) {
        if (pokers.length < 5 || pokers.length > 13) {
          return false
        }
        if (this.check_same(pokers) > 0) {
          return false
        }
        pokers = pokers.sort((a, b) => {
          return a.value - b.value
        })
        console.log(pokers);
        let cur_pokers = []
        pokers.forEach(poker => {
          if (cur_pokers.indexOf(poker.value)) {
            cur_pokers.push(poker.value)
          }
        })
        if (this.check_ACE(pokers)) {
          //存在ACE 分两种情况
          //1.直接判断第一个数是否为2或10
          return pokers[0].value === 2 || pokers[0].value === 10
        } else {
          return pokers[0].value + 4 === pokers[4].value

        }

      },
      sort_method_of_poker(poker1 = Poker, poker2 = Poker) {
        return poker1.value - poker2.value
      },
      shuffle() {
        this.cards.shuffle()

      },
      sort_players_card() {
        for (let playersKey in this.players) {
          this.players[playersKey].sort((a, b) => {
            return a.value - b.value
          })
        }
      },
      getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      start_game() {

      },
      sendPoker() {
        let shuffle_cards = [...this.cards.shuffle().shuffle()]
        for (let playersKey in this.players) {
          this.players[playersKey] = [...shuffle_cards.splice(0, 13)].sort((a, b) => {
            if (a.value === b.value) {
              return this.color_en.indexOf(a.color) - this.color_en.indexOf(b.color)
            } else {
              return a.value - b.value
            }
          })
        }
        let copy = [...this.players.player1]
        this.poker_position.first = copy.splice(0,3)
        this.poker_position.second = copy.splice(0,5)
        this.poker_position.third = copy.splice(0,5)
        if (this.players.player1[0].value >= 6) {
          alert("看看")
        }
      },

    },

    mounted() {
      this.initPokers()
      this.sendPoker()

    }
  }
</script>

<style scoped>
/*  .poker_img:hover {
    transform: scale(1.2); !* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) *!
  }*/


</style>
