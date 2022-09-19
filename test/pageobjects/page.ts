export class Page {

    get btnLogin () {
        return $('._dc34219 > ._e637394')
    }
    //btnLogin = $('._dc34219 > ._e637394')
    
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

    async login (username, password) {
       await this.acceptOneTrust()
       await this.btnLogin.click()
       await this.inputUsername.setValue(username);
       await this.inputPassword.setValue(password);
       await this.btnSubmitLogin.click();
    }
    async acceptOneTrust () {
       await this.btnOneTrustAccept.click()
    }
    async open (path) {
        await browser.url(`/${path}`)
    }
}
export default new Page()