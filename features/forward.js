/*
Copyright (c) 2020 Cisco and/or its affiliates.

This software is licensed to you under the terms of the Cisco Sample
Code License, Version 1.1 (the "License"). You may obtain a copy of the
License at

               https://developer.cisco.com/docs/licenses

All use of the material herein must be in accordance with the terms of
the License. All rights not expressly granted by the License are
reserved. Unless required by applicable law or agreed to separately in
writing, software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
or implied.
*/

const Webex = require(`webex`);
const webex = Webex.init({
    credentials: {
        access_token:process.env.WEBEX_ACCESS_TOKEN,
            }
            });

module.exports = function(controller) {


    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `Your message: ${ message.text }`);
        //console.log(message.text)
        //console.log(message.personEmail)
        await webex.messages.create({
            markdown: `${message.personEmail} wrote: ${message.text}`,
            roomId:process.env.TEST_ROOM
        });
    });

}