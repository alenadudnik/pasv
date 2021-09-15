import LoginPage from  '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('successful log in', async () => {
        await LoginPage.login('7182001562alena@gmail.com', 'Alena227!!!');
        await expect(ProfilePage.iconAvatar).toBeDisplayed();
    });

    it('wrong credentials throws error', async () => {

        await LoginPage.login('invalid@exapmle.com', 'invalid');
        await expect(LoginPage.notification).toHaveTextContaining('Auth failed');
    });
});



