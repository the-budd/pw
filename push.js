var push = require('web-push')

let vapidKeys =    {

        publicKey: 'BHdfhji1LB1e4TJ5oMcr4la-HjyNtXem9h7i3X98i-H3dUNtjxQbPUj-Z38TKGptVNTAD56rNBE6iAxAueTo8xw',
        privateKey: 'Mq1vxS0HFbPlG-RQjxfv2QlI-CJ18XtiDhl9CxJ0zu0'

      }

push.setVapidDetails('mailto:test@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

let sub ={};

push.sendNotification(Sub, 'test-message')