var builder = require('botbuilder');

module.exports = [
    function (session) {
        builder.Prompts.multiPrompt(session, "Please type or upload an image");
    },
    function (session, result) {
        if (result.response.type == 'text') {
            session.send('Text!');
        } else {
            session.send('Attachment !');
        }

        // on error, start over
        session.on('error', function (err) {
            session.send('Failed with message: %s', err.message);
            session.endDialog();
        });

        // continue on proper dialog
        var selection = result.response.entity;

    }
]