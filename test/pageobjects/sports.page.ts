import { Page } from './page'

export class SportsPage extends Page {
    get listPopularBets () {
        return $('.PopularBetsView')
    }

    get btnAddBet () {
        return $$('.em.button__bet__odds')
    }

    get listBetslip () {
        return $('.SingleBetView')
    }

    get singleBetonSlip () {
        return $('#single-bet-li-bet-^')
    }

    async addNumberofBets (numberofbets) {
        for(var i = 0 ; i < numberofbets; i++){
            (await this.btnAddBet[i]).click()
        }
     }
    //should probably have something to pull a list of bets on the slip and number of bets in a list

    async open () {
        return await super.open('sports');
    }
}
export default new SportsPage()