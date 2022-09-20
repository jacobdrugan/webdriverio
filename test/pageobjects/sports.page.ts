import { Page } from './page'

export class SportsPage extends Page {
    get btnAddBet () {
        return $$('.button__bet__odds')
    }

    get listBetslip () {
        return $('.SingleBetView')
    }

    get listBetslipcount () {
        return $$('[id^=single-bet-li-bet]')
    }

    get mainContent () {
        return $('.main-content-wrap')
    }
    async addNumberofBets (numofbets:number) {
        for(let i = 0 ; i <= numofbets; i++){
            (await this.btnAddBet[i]).click()
        }
    }

/*
    async countofbetsonslip () {
        return (await this.listBetslipcount).length
    }
*/
    async open () {
        return await super.open('sports');
    }
}
export default new SportsPage()