# Botframework MultiPrompt

The existing node.js botframework [Prompt](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-dialog-prompt) class is only able to process one input type, whether its a text, attachment or anything else. Such functionality is limiting and requires users to make muliple linear requests to recieve the information they want using an image or text as input.

This module provides a custom [Prompt](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-dialog-prompt)  implementation allows dynamic processing of either text or attachments with one unified query.

## Usage
[Usage example](src/README.md)

## Sample code
Launch the bot located in the 'sample' directory.
When the user speaks with the bot, the bot will answer 'text!' if the user entered a text and 'attachment!' if the user sent an image.
