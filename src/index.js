var builder = require('botbuilder');

const promptName = 'multiPrompt';

 // Create a custom prompt
    var prompt = new builder.Prompt({ defaultRetryPrompt: "I'm sorry. I didn't recognize your search." })
        .onRecognize(function (event, callback) {
            if (event.message.attachments.length === 1) {
                callback(null, 1.0, { "type": "attachment", "data": event.message.attachments[0] });
            }
            else {
                callback(null, 1.0, { "type": "text", "data": event.message.text });
            }
        });

function multiPromptsLauncher(session, prompt, options) {
        var args = options || {};
        args.prompt = prompt || options.prompt;
        session.beginDialog(promptName, args);
    }

module.exports = {
  multiPrompt: prompt,
  multiPromptsLauncher : multiPromptsLauncher
}