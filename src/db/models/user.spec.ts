import {User} from "./index";

describe("User", () => {
    const email = "a.a@example.com";
    const password = "adminadmin";
    let user: User
    beforeAll(async done => {
        user = new User({password, email})
        done()
    });

    /* パスワードが暗号化されている */
    it('password should be encrypted', async (done) => {
        expect(user).toBeTruthy();
        if (user) {
            expect(user.password).not.toEqual(password)
        }
        done()
    });

    /* 暗号化されたパスワードと比較できる */
    it('comparePassword should work', async (done) => {
        expect(user).toBeTruthy();
        if (user) {
            expect(user.comparePassword(password)).toBeTrue();
            expect(user.comparePassword("false pass")).toBeFalse()
        }
        done()
    });
    afterAll(async done => {
        done()
    })
})
