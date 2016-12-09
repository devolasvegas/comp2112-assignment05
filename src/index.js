 function chatbot(input) {

    var message = input;

    var botMessage, humanMessage;

    // do {
    //     botMessage = chatbot(humanMessage);
    //     humanMessage = prompt(botMessage);
    // } while (humanMessage.toLowerCase() != 'bye');

    // return "hello."

    // var lowerMessage = message.toLowerCase();

    if (message === undefined) {
        return 'Hello.'
    }

    if (lowerMessage === 'hi') {
        return "How are you?"
    }
}

 module.exports = chatbot;
