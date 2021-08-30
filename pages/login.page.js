import Page from './page';

class LoginPage extends Page {
    get inputEmail () { return $('#normal_login_email') }
    get inputPassword () { return $('#normal_login_password') }
    get buttonLogin () { return $('.login-form-button') }

    async login (email, password) {
       await this.inputEmail.setValue(email);
       await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
    }

    open () {
        return super.open('/user/login');
    }
}

export default new LoginPage();
