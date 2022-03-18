function getBotResponse(input) {
    //rock paper scissors
    if (input == "Hi") {
        return "Hi";
    } else if (input == "Hello") {
        return "Hi";
    } else if (input == "Hello. Can you please list me the most recent projects related to AI?") {
        return "You can search for keywords AI and Project in the search bar";
    }

    // Simple responses
    if (input == "Ok. Thanks for your help!") {
        return "No problem";
    } else if (input == "goodbye") {
        return "Bye";
    } else {
        return "Sorry, I couldn't understand.";
    }
}