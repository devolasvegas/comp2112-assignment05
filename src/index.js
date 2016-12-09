module.exports = chatbot ();

    var botMessage, humanMessage;

    do {
        botMessage = chatbot(humanMessage);
        humanMessage = prompt(botMessage);
    } while (humanMessage.toLowerCase() != 'bye');

    function chatbot (message) {
        if (message === undefined) {
            return 'Hello.'
        }
    }

