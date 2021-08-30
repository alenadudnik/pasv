import LoginPage from  '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', () => {
    it('successful log in', async () => {
        await LoginPage.open();
        await LoginPage.login('7182001562alena@gmail.com', 'Alena227!!!');
        await expect(ProfilePage.iconAvatar).toBeDisplayed();
    });
});


