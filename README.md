# Botframework MultiPrompt

The existing node.js botframework [Prompt](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-dialog-prompt) class is only able to process one input type, whether its a text, attachment or anything else. Such functionality is limiting and requires users to make muliple linear requests to recieve the information they want using an image or text as input.

This module provides a custom [Prompt](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-dialog-prompt)  implementation allows dynamic processing of either text or attachments with one unified query.

## Usage example
  ```
    var bot = new builder.UniversalBot((connector));

    builder.Prompts.multiPrompt = multiPrompt.multiPromptsLauncher;
    bot.dialog('multiPrompt', multiPrompt.multiPrompt);

    // then just ask for input
    builder.Prompts.multiPrompt(session, "Please upload an image or type your message");
  ```
