# Scuba Diving Inventory Project

![ScubaDiving](https://i.pinimg.com/736x/d1/19/c7/d119c753ba57baf2681695701b2814c7.jpg)

Here I have an application where employees can keep track of the scuba diving inventory of a store. Employees can create new scuba sets, update any info pertaining to a set, see a list of scuba diving sets, see details of one, and delete sets. 

## Functionality
* A user can create a new item.
* A user can see a list of all the items.
* A user can see the details of one item.
* A user can delete an item.
* A user can update an item.
* When a user performs an action like creating or deleting an item, the data file is updated correctly. If the JSON is malformed, there is some logic to prevent writing to the file and thus corrupting the data file.
* When a user creates an item a unique id is assigned to the new item.
* Add a cart function where a user can add items to the shopping cart and see the total price and total number of each item.
* Add a cancel cart function that empties the shopping cart.

## Command Line
The interactive menu to enhance our fellow divers experience:
```
* node index.js add name color priceInCents inStock - Adds a scuba set 
* node index.js update insertUniqueIdHere name color priceInCents inStock - Updates aspects of your scuba diving set
* node index.js read insertUniqueIdHere - Gets the user a diving set by id
* node index.js delete insertIndex - User may delete a particular scuba set
* node index.js addToCart insertUniqueIdHere - Adds a scuba set to your cart
* node index.js emptyCart - Empties the shopping cart
* node index.js viewCart - User may take a peek at their cart
```

```
                                 _..--==--.._           (/)    ~
                  o        ~   .-`   ______   `-.    o   (/) o
~ |                           / _   .--==--.  .' \       (\)
  |        ~         ~       /    /.-=____=-.\ .` \   ~  (/)  ~
  |              .          | '. // ||    || \\    |     (\)
  \   ~      o          ~   |   ||==||====||==||   |     (/) ~
   `.              ~        |   ||' ||    ||  || ` |   ~ (\)
  ~  `\                     | `.\\==||====||==//   | .   (/)  .
      `\   ~            .    \   \`.||____||.'/   /      (\)     ~
        .         O           \   `-.______.-' . /    ~ (/) O
  ~      \   .         ~      /'-._          _.-'\      (\)     .
          \              _...-| .  `-......-'  . |-..._ (/)
           \   ~     .-'   '.  '.__.   ::  ' __.'  .' _.'\)   ~
           |       .'        '.|`._''------''_.`|.'_][\).' '.      ~
     ~     |  ~   /    ~       |   |`------`|   |       _.'  `.  .
           '    .'             |___|        |___|  '''''       \
 ~        /     |              |__.'  . ~   '.__|       .'      \ ~
         /   ~  /    ~  |  |  .|  |  `._     |  |     \/     ~   `.
     _.-'     .'         \/   .' /      `::.  \ `.    |  .       _|  ~
~  .'         \_         |  .' .'     ~        `. `.  '.  `.      '.
 .'      ~   .'      ~  .'.' .'  ~  .            `. `._\       .--`/
 `.          |         .' \.'     _..--:::''    ~  `.__|\          `.  ~
   `-       /    .-   /   |    .'                 .  _.' \  `.      |
     `.   .'   _.'   / ~  |                _. '      ./   \   \      \
 ~     `. \  ''     /     \.   ~    _...--'    ``..  |  ~  `._ ---    \
         \|        /       \ _   .'              __' _\ .    \        /
  ~    ~ ||  ...   |    .   [_]-._ __ .-----. __ _.-[_]   ~  '.    .--| ~
        .'/.--''   |   ~     |'-._[__]|\/ \/|[__]_.-'|        |.-.-'._|
        | \-       |        /    \\   '-----'   // `. \       |-''''._|
       /  |_....._ |        |     \\           //   | |\ ~   /        \
    ~ /   |  _.    |    o   | |    \\  ~      //  ~ |  |    / ._ --\ -\\
   ..'    '-'  `..'\     ~  | |    `\\       //.    |  |   (_/   \' \\ \)
  |      // -/  _;. \       | | ~   `\\     //   '  |  |    ~     \_/ \`\
   \    (/`//' /   \_)     /  |       \\ _ //       |  |       .    '-'-`
   |  ~ / / |_/           /  /         .' |         |   \
   |    `-'-'         ~  |  /          |  \     ~  /     |    O       ~
~  |         ~          .' |      ~    |   |      /   `   \
   '                    |  /          .'   |   ~ |        |       ~
  /      ~              | /    .      /    `.    .  ~     /
  '-........     o     / |      ~    |      |    |        |            ~
            |          |  |          /       \   .    .   |    ~   .
    ~      /      ~    |  `    ~    |    ~    `./          \
        .-'            |   \        |           \       ~  |.
       /        .      /    |      .'    .      '  .       `\       ~
~   _.-               |     '|     \        o   |   :        |
  .'        ~         |       '|   |            |   |         \
 /                    |   -  |'    |   ~         \.'     ~    /   ~
 \           o       /             |        .    /\         | |
  `.                /    |'   ~    /            |  \        | \      ~
    \`-..._        |              |   .      ~  \- /  ~     | |  o
~    '     `-._    \      `-..    |   |\  |\    / /|        / /
     |         `._  |             |   / \/ |   | |  \..__..-  |       o
    .'  ~       `/-_|   ~        .'  |  /  \|\ / |  |`  ''    |
   /             \  `.:.       .:|   | |   /  |  /  \ `----' /    ~
  /        ~      `\_`\ `-----' / .'  \|  |`| | /   |    .- -|
 .'                  \ |- --. `.| `-...__ '. / .'   |   / .._|
/              .--.   ||     \  |    `   `..-._.'-- /\.'    .'\|/ _    ~
|  ____.'`----'    `--/'      `./\- -- ....       -.\/\      .'\   '...__
'. LGB               /'   ~    /\/         -._. _'   \/\_   ~ '.\.      
 |  ~  ~     ~      /        _/\/     ~       -'     `\/\.       \  ..--'
 '--.___           /        ./\/                   ~   \/`._____.|   `_
        `..  ~    |`._____ .'\/   ..---------           `./_____\' ._....
   ~     ':_____  `./_____\.' _.--'  ____  ..`........____  `--.._
                `.-''' ___  ''''_____  ------ .........-----_______--'''
```
