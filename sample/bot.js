var builder = require('botbuilder');
var multiPrompt = require('botframework_multiprompt');

function create(connector) {

    var bot = new builder.UniversalBot((connector));

    builder.Prompts.multiPrompt = multiPrompt.multiPromptsLauncher;
    bot.dialog('multiPrompt', multiPrompt.multiPrompt);
    bot.dialog('/', require('./dialogs/root'));

    return bot;
}

module.exports = { create }



