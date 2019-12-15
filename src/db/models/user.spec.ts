import {User} from "./index";

describe("User", () => {
    const email = "a.a@example.com";
    const password = "adminadmin";
    beforeAll(async done => {
        await User.create({password: password, email: email});
        done()
    });

    /* パスワードが暗号化されている */
    it('password should be encrypted', async (done) => {
        const user = await User.findOne({where: {email}});
        expect(user).toBeTruthy();
        if (user) {
            expect(user.password).not.toEqual(password)
        }
        done()
    });

    /* 暗号化されたパスワードと比較できる */
    it('comparePassword should work', async (done) => {
        const user = await User.findOne({where: {email}});
        expect(user).toBeTruthy();
        if (user) {
            expect(user.comparePassword(password)).toBeTruthy();
            expect(user.comparePassword("false pass")).toBeFalsy()
        }
        done()
    });
    afterAll(async done => {
        await User.destroy({
            where: {email}
        });
        done()
    })
})
