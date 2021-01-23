use game_rules;
db.dropDatabase();

db.default_rules.insertMany([
    {
        name: "Waterfall",
        text: "To perform a waterfall, each player starts drinking their beverage at the same time as the person to their left, starting with the player who drew the card. No player can stop drinking until the player before them stops.",
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
        text: "Last person to touch the floor with their hands must take a drink.",
        value: "4"
    },
    {
        name: "Guys",
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
        text: "The player who drew the card says a word, with players going clockwise each saying a word that rhyme with the original. The first person to fail to come up with a rhyming word that has not been used must drink.",
        value: "9"
    },
    {
        name: "Categories",
        text: "The player who drew the card chooses a category, with players going clockwise to name things that fall within the category. The first person to fail to come up with something that has not been said must drink.",
        value: "10"
    },
    {
        name: "Everyone Drinks",
        text: "Everyone must take a drink.",
        value: "JACK"
    },
    {
        name: "Questions",
        text: "The player who drew the card becomes the question master. Whenever they ask a question, other players must also respond with questions or otherwise drink. This continues until another Queen is drawn, at which point that player becomes the question master.",
        value: "QUEEN"
    },
    {
        name: "King's Cup",
        text: "When each of the first 3 Kings are drawn, the person who drew the card puts some of their drink into the King's Cup at the center of the table. When the 4th King is drawn, the person who drew the 4th King must drink the contents of the King's Cup. In some variations, the first three people to pick a King card can also make a rule that must be followed until the next King is picked. Some common rules include Buffalo (must always use left hand), Thumbs (player puts their thumb on the table silently, last person to follow suit drinks), In bed (everyone has to say 'in bed' after every sentence), and Teeth (players can't show their teeth when they laugh).",
        value: "KING"
    },

])
