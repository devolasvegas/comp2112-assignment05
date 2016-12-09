/**
 * Created by devon on 2016-12-08.
 */
var chatBot = require('./src/index.js');

if (chatBot() != 'Hello') {
    throw "Should return hello"
} else {
    throw "Passes."
}