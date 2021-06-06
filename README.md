# Pre trained Intent for Bots.

## Background

In the process of Bot creation, there are list of user messages which AI Bot analyzes.
When one of the users writes a message in the chat, the AI analyzes that message to understand the users intent and give the appropriate reply, 
**For example:**

---
> User: "Hello"

*AI understands that this is a Greeting*

> AI: "Hello :) How can I help you?"
---

In order to understand what the user wants, the AI is trained to recognize different intents.

For each intent the AI gets a list of user messages (expressions) as training data to learn 
how users express that intent. 
For every intent there will also be a reply that the AI Bot should give, once it recognizes that intent. 
In the above example that intent would look like this:

---
```
Intent: Greeting
- Training Expressions: "Hello", "Hi", "Hey there!", "Good morning!", ...
- Reply: "Hello :) How can I help you?"
```
---

**The web page allows users to see pretrained intents and select which ones they want to use in their AI bot.**
**This page is one step of a wizard in the above mentioned bot creation process.**

The JSON file contains some of those pretrained intents as per below format. 

Each item in the JSON contains the following:
- `id`: The unique ID that identifies the intent.
- `name`: The name of that intent.
- `description`: A string describing what the intent is used for.
- `trainingData`: The training data that is used to train the AI. It contains:
    - `expressionCount`: the total number of training expressions for this intent
    - `expressions`: An array with three example expressions for this intent, each with a unique `id` and a `text` field with the expression.
- `reply`: The reply the bot will give when the intent is recognized, containing again a unique `id` and a `text` field with the actual reply.

**The web page has been developed using React with Typescript and the UI is driven using React Material UI.**

##### Key points
- Typescript has been used with React, to make the application strictly types and less error prone. Props and state values can be checked for type and errors can be found at early stages.
- React Material-UI has been a major stakeholder driving the UI's across websites. It has good development support and is highly customizable. Components and themes can be easily managed with React Material UI.
- The app can be enhanced even further and the candidates for the same are part of code as comments. Searching **todo** in the repo will list down places where enhancements can be done in future.
- The web page is hosted @https://bot-intents.netlify.app/
- Redux has not been used in the app. Given the amount of data does not cater the need to use Redux. Redux might have been a good choice during the overall application development where sharing of state across components is required.
- The test cases written are very basic and more will be added in future. 
- Below is the lighthouse report.

<img src="https://i.ibb.co/P9nJRNp/lighthouse-report.png" alt="lighthouse-report" border="0"> 

##### Setting up and running locally

- Clone the  [repository](https://github.com/shantanutomar/pre-trained-intents-for-ai-bot.git).
- Run `npm install` in the root directory.
- Run `npm start`.
- Hit the URL - http://localhost:3000