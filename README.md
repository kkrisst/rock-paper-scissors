## Rock-paper-scissors Coding Test

See the live version at: https://rock-paper-scissors-test.herokuapp.com/

### `Notes`

This is a solution to a rock-paper-scissors coding test.
The project took me about 6 hours to finish.

The test description mentions that I should create a script that installs and launches the site on Linux or OSX, I still chose to deploy the project to Heroku, as it is an easier option for anyone to see it live with no installation or any instructions.

The game has two modes, the player can play against the computer or against another player. Choosing a mode is done on the menu page with the root URL. Playing against the computer is fairly simple - the player just chooses an item and the result is displayed. When two players play against each other, a timer is introduced to guide them when the user input is expected. The players have to press a key to choose an item, as using the mouse for both is not an option. By using keypresses, the players can select their item at the same time. The selected items are not uncovered until both of the players have chosen theirs. The player can choose to start a new game after having played one.

The design is basic, although I kept a responsive approach.
If the project was to continue, I would probably add a more detailed design and try to make the UX better.

### `Original test description`
Coding Test - Rock, Paper, Scissors

Create, using any Javascript web framework, the game rock paper scissors. Users should be able to play another player, or a computer (robot) player. The program should be written using TDD, and be easily extendible so that new rules
could be added easily.

Create a script that installs and launches the site on linux or osx. Running this script is
the only command we should need to execute to run your site.

Include all necessary instructions to run the script. Also include any comments you feel
relevant about design decisions.
