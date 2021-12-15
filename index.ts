import {Options} from "selenium-webdriver/chrome";
import {Builder, By} from "selenium-webdriver";

const run = async () => {
    const options = new Options()
    options.headless()
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build()
    await driver.manage().window().setRect({width: 1440, height: 900})
    await driver.get("https://medium.com/wavesprotocol/wavesducks/home")
    const el = await driver.findElements(By.css(".js-trackPostPresentation"));
    let result: {title: string, date: string}[] = []
    for (let i = 0; i < el.length; i++) {
        const textArray = (await el[i].getText()).split("\n")
        result.push({title: textArray[0], date: textArray[4]})
    }
    console.log(result)
    async () => driver.quit()
}

run()
