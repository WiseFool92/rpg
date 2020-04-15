# _My Text Based RPG_

#### April 15rd, 2020

## Description

_This site is a text based rpg that players create characters fight monsters in a fantasty world, level up and find epic loot_

_This site is already linked to an index.html, styles.css, jQuery.js(3.4.1), scripts.js., main.js, jest, babel, lint, webpack, json, & gitignore_

## Setup/Installation Requirements

_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. Click the green 'Clone or Download' button and copy the link / download the zip
2. Open terminal and type... or skip to the 2nd #3 if you downloaded the zip

**Windows**

```sh
cd desktop
```

Mac & linux

```sh
cd ~/Desktop
```

3.  in terminal type '_git clone {link to repository}_ '

```sh
git clone {link to repository}
```
3. If you downloaded the zip then extract all onto your desktop
4. Open your the folder with VSC or an equivalent
5. Run _$ npm install_
6. Run _$ npm run build_
7. Run _$ npm run start_
8. Enjoy

## Specs

### Behavior Driven Development Spec List
#### My RPG
|                          Behavior                          | Input  | Output  |
| :--------------------------------------------------------: | :----: | :-----: |
| The program propmts the user to input name identification | 'Name' | 'Creates character "Name"' |
| The program prompts character selection | 'Selects from dropdown' | '"Warrior", "Wizard", "Rogue"' |
| The program prompts the journey's backstory | 'Click Start' | 'Intro story populates' |
| The program propmts the user to move forward through the story | 'Click venture forth' | | 'Character moves to next prompt' |
| The program will prompt user into battles upon entry of a new scene | 'Click venture forth' | | 'Battle Ensues' |
| The program describes the battle scene | 'Entered scene' | | 'Battle Location/Opponent description' |
| The program prompts a d6 roll for player and monster. Highest roll goes first & ties default to monster victory. | 'd6 roll' | | 'highest number goes first, ties default to monster victory' |
| The program will prompt user to "Attack", "Block", "Heal" |  'Attk' 'Blk' 'Heal' | '-1' , 'negate effect' , '+1' |
| The program will prompt monster to "Attack", "Block", "Heal" |  'Attk' 'Blk' 'Heal' | '-1' , 'negate effect' , '+1' |
| The program will prompt win for user or monster after health = 0 | 'Attk' | | 'Hit' -1 Health |
| The program will prompt scene restart if user hits 0 health | 'You've been killed' | | 'Scene restart' |
| The program distributes loot to player upon battle victory | 'You've killed (monster name)' | | 'Received (loot) from (monster name)'
| After battle victory the program prompts user choice: | 'Go to town', 'Search Room', 'Continue' | 'Town', 'Search', 'Continue' |
| After battle victory or scene change health is reset to full | 'battle victory', 'scene change' | | 'Health reset to full' |
| If user chooses 'Continue' program propmts next scene | 'Continue' | | 'Next Scene' |
| If user chooses 'Search Room' program will prompt d6 roll, | 'if roll = 1-3', 'if roll = 4-6'| | 'user fights duplicate monster', 'user gains two pieces of loot' |
| If user chooses 'Go to town' program prompts town text | 'Go to town' | | 'Welcome to town, would you like to sell loot at the Merchant to buy goods?' |
| Once in town user is propmted with three choices | 'Buy', 'Sell', 'Adventure' | | 'Buy from merchant', 'Sell to merchant', 'Go back to adventuring' |
| Program will return + 1 currency for each sold loot| 'Sell (loot)' | | '+1 Currency' |
| Program will prompt user to choose from purchase menu | 'Attk Upgrade' 'Heal Upgrade" | | '+ 1 hit points' '+ 1 Healing' |
| Program will charge $3 per item upgrade | 'Attk Upgrade' | | '-$3 from user currency' |
| Program will describe final battle scene and boss details upon user entering final scene | 'Venture forth to Finale!' | | 'Final scene and boss description (Boss will have 2x Attk & Health)' |
| Program will prompt an epilogue upon victory | 'Boss health = 0' | | 'Epilogue' |

---
## Known Bugs

_N/A_ - 4/15/2020

## gh-pages

WiseFool92.github.io/rpg

## Support

_Email: watkins92@gmail.com_
_Email: seanbeloussow@yahoo.com_

---
## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
- [jQuery](https://jquery.com/) - Used to interact with the DOM
- [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling

## Useful tools

- [free icons @ icons8](https://icons8.com/)
- [free icons @ fontawesome](https://fontawesome.com/)

---

- [Old School Gifs Search](https://gifcities.org/)
- [free images @ unsplash](https://unsplash.com/)

  - **_source.unsplash.com_ will return a random image at a desired size by simply calling the size after the url followed by a '?' and a keyword. Example below**

  - _https://source.unsplash.com/400x400/?cat_
  - http://unsplash.it/500/500 - This will just return a random image the size of 500x500

---

- [Flex-box Cheat Sheet](http://yoksel.github.io/flex-cheatsheet/)
- [CSS Grid Cheat Sheet](http://grid.malven.co/)

---

- [CSS Gradient BG Generator](https://mycolor.space/gradient)
- [CSS Basic Gradient Generator](https://cssgradient.io/)

---

- [CSS Dropshadow Generator](https://cssgenerator.org/box-shadow-css-generator.html)

### License

This project is licensed under the MIT License

Copyright (c) 2020 **_Nathan Watkins-Hoagland & Sean VanLeeuwen_**
