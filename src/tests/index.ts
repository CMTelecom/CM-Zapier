import "should"
import { createAppTester } from "zapier-platform-core"
import App from "../main/index"

const appTester = createAppTester(App)

describe("Authentication", () => {
    it("Authentication should fail when giving incorrect token", async () => {
        const bundle = {
            authData: {
                productToken: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
            }
        }
        
        try {
            await appTester(App.authentication.test, bundle)
        } catch (e) {
            e.message.should.containEql("The Product Token you supplied is invalid")
        }
    })
})