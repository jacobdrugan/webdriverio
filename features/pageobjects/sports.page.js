const Page = require('./page');

class SportsPage extends Page {
    get btnLogin () {
        return $('._dc34219 > ._e637394')
    }
    get inputUsername () {
        return $('#userId')
    }
    get inputPassword () {
        return $('#password')
    }
    get btnSubmitLogin () {
        return $('._38fea9f > ._18f4de1')
    }
    get btnOneTrustAccept () {
        return $('#onetrust-accept-btn-handler')
    }
    get spanUsername () {
        return $('._306d2f1')
    }

    get listPopularBets () {
        return $('.PopularBetsView')
    }

    get btnAddPopularBet () {
        return $('.PopularBetsView em')
    }

    get listBetslip () {
        return $('.SingleBetView')
    }
    get singleBetonSlip () {
        return $('#single-bet-li-bet-^')
    }

    async acceptOneTrust () {
        this.btnOneTrustAccept.click()
    }

    async login (username, password) {
        await this.acceptOneTrust()
        await this.btnLogin.click()
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmitLogin.click();
    }
    open () {
        return super.open('sports');
    }
} 

module.exports = new SportsPage();
