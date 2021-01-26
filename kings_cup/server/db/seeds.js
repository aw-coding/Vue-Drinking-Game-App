use game_rules;
db.dropDatabase();

db.default_rules.insertMany([
    {
        name: "Ace Race",
        text: "The player who drew the card selects a word. the last person to type out the word takes a drink",
        value: "ACE"
    },
    {
        name: "You",
        text: "The player who drew the card gives out two drinks, either both to the same person or one to two different people",
        value: "2"
    },
    {
        name: "Me",
        text: "The player who drew the card takes a drink",
        value: "3"
    },
    {
        name: "Floor",
        text: "Last person visible on screen takes a drink",
        value: "4"
    },
    {
        name: "Five is Guys",
        text: "All men playing take a drink.",
        value: "5"
    },
    {
        name: "Six is Chicks",
        text: "All women playing take a drink.",
        value: "6"
    },
    {
        name: "Heaven",
        text: "Last person to raise their hand has to drink.",
        value: "7"
    },
    {
        name: "Mate",
        text: "The player who drew the card chooses another player who must drink at the same time as them for the rest of the game.",
        value: "8"
    },
    {
        name: "Rhyme",
        text: "The player who drew the card says a word, with players going in order saying a word that rhymes with the original. The first person to fail to come up with a rhyming word that has not been used must drink.",
        value: "9"
    },
    {
        name: "Categories",
        text: "The player who drew the card chooses a category, with players going in order to name things that fall within the category. The first person to fail to come up with something that has not been said must drink.",
        value: "10"
    },
    {
        name: "Everyone Drinks",
        text: "Everyone takes a drink.",
        value: "JACK"
    },
    {
        name: "Questions",
        text: "The player who drew the card becomes the question master. Whenever they ask a question, other players must also respond with questions or otherwise drink. This continues until another Queen is drawn, at which point that player becomes the question master.",
        value: "QUEEN"
    },
    {
        name: "King's Cup",
        text: "The player who picked this card can write a new rule for the rest of the game. The player who draws the 4th king takes a shot ",
        value: "KING"
    },

])

//added insertMany to house_rules

db.house_rules.insertMany([
    {
        name: "Ace Race",
        text: "The player who drew the card selects a word. the last person to type out the word takes a drink",
        value: "ACE"
    },
    {
        name: "You",
        text: "The player who drew the card gives out two drinks, either both to the same person or one to two different people",
        value: "2"
    },
    {
        name: "Me",
        text: "The player who drew the card takes a drink",
        value: "3"
    },
    {
        name: "Floor",
        text: "Last person visible on screen takes a drink",
        value: "4"
    },
    {
        name: "Five is Guys",
        text: "All men playing take a drink.",
        value: "5"
    },
    {
        name: "Six is Chicks",
        text: "All women playing take a drink.",
        value: "6"
    },
    {
        name: "Heaven",
        text: "Last person to raise their hand has to drink.",
        value: "7"
    },
    {
        name: "Mate",
        text: "The player who drew the card chooses another player who must drink at the same time as them for the rest of the game.",
        value: "8"
    },
    {
        name: "Rhyme",
        text: "The player who drew the card says a word, with players going in order saying a word that rhymes with the original. The first person to fail to come up with a rhyming word that has not been used must drink.",
        value: "9"
    },
    {
        name: "Categories",
        text: "The player who drew the card chooses a category, with players going in order to name things that fall within the category. The first person to fail to come up with something that has not been said must drink.",
        value: "10"
    },
    {
        name: "Everyone Drinks",
        text: "Everyone takes a drink.",
        value: "JACK"
    },
    {
        name: "Questions",
        text: "The player who drew the card becomes the question master. Whenever they ask a question, other players must also respond with questions or otherwise drink. This continues until another Queen is drawn, at which point that player becomes the question master.",
        value: "QUEEN"
    },
    {
        name: "King's Cup",
        text: "The player who picked this card can write a new rule for the rest of the game. The player who draws the 4th king takes a shot ",
        value: "KING"
    },

])

