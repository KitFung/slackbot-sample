Slackbot-sample
----

The objective of the program is demonstrate how to build a basic slackbot. This will cover how to connect other api, database, online BaaS service, etc.

Basic structure:
===

botsocket.js: handle all message/event in the channel using slack rtm socket. It will response if the message is a command to him, like `helloworld imageme something`

botserver.js: handle all slash command

botfirebase.js: handle all real time event in firebase and put them to slack channel.
