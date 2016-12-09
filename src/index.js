 function chatbot(message) {

    var botMessage, humanMessage;

    // do {
    //     botMessage = chatbot(humanMessage);
    //     humanMessage = prompt(botMessage);
    // } while (humanMessage.toLowerCase() != 'bye');

    // return "hello."
    if(message) {
        var lowerMessage = message.toLowerCase();
    }

    if (message === undefined) {
        return 'Hello.'
    }

    if (lowerMessage === 'hi') {
        return "How are you?"
    }
}

 module.exports = chatbot;
