import { config as sharedConfig } from './wdio.shared.conf.ts';

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        user: process.env.LT_USERNAME,
        key: process.env.LT_ACCESS_KEY,
      //logFile : './log/api.log',
      services: [
        [
            "lambdatest",
            {
                tunnel: true,
                lambdatestOpts: {
                    logFile: "tunnel.log"
                }
            }
        ]
    ],
        // capabilities: [
        //   {
        //       maxInstances: 5,
        //       browserName: 'chrome',
        //       browserVersion: 'latest',
        //       platformName: 'Windows 11',
        //       'goog:chromeOptions': {
        //           //headless: true
        //           }
        //     }
        // ]

        capabilities: [{
            // capabilities for local browser web tests
            browserName: 'chrome' // or "firefox", "microsoftedge", "safari"
        }],
    }
}
