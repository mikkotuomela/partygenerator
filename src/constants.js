// Words for name generation
const wordLists = {
  party: {
    start:  'New Finnish Best Oldschool Retro Swedish Japanese Special Illegal Small Random Generic Stolen Last Final First Drunk Obscure Christian Ultimate The The The Another That Weird Alternative',
    middle: 'Summer Winter Alternative Sauna C64 Amiga Atari Apple Dark Demo Booze Vodka Coding GFX CGI AI Machine Perl Hacker Data Cracker Stork Group Intro MSX Färjan Bar Restaurant Train Mod Hardware Horror LAN',
    end:    'Party Event Meeting Copyparty Gathering Party Party Megaparty Artparty Evening Weekend Assembly Afterparty Jamboree Conference Convention Unconference Workshop Jam Cruise',
  },
  company: {
    start:  'Fish Tech Graph Angry Micro Mega Best Computer Game Video',
    end:    'Birds Wizards Hub Tube App Team',
    type:   'Ltd Oy Oyj Plc Corp Corporation',
  },
  venue: {
    end:    'Hall Colosseum Stadium Arena Center eSportsCenter eSportsArena Theatre Cinema Sauna Room Basement Restaurant Club',
  },
  name: {
    first:  'Mikko Kristoffer Felice Anni Kim Matti Chris Nick Pekka Al Jeff',
    last:   'Tuomela Lawson Murtosaari Viljanen Koskimies Spowart Lowe Minter Virtanen Smith Hubbard Laakkonen Aakko',
  },
  handle: {
    start:  'Fake Big Bad Cute Dark Murder Laser Darth Dr Mr Sir Mrs Miss Professor Real True Mini Max Pissed Wiz Lol Bass Magic Rave Cereal Techno',
    end:    'Wolf Nut Pharaoh Jesus Buddha Nuke Space Planet God Cat Kitty Bat Cadet Coder Wizard Ninja Girl Boy Guy Vader Killer Bob Wizard Witch Hacker Conan Arnold Punk Pope Geisha Shogun Emperor King Queen Prince Princess Duke Nuke Joker',
  },
  group: {
    start: 'Wild Dark Elite Amiga Gold Cool Complex Byte Anarchy Virtual Psycho Mad',
    end:   'Coders Group Team Pirates Dreams Crew Men Guys Boys',
  },
  competition: {
    start: 'Automated Robotic Impossible Radical Political Unofficial Uncensored Reverse Alternative Dynamic Unlimited 1-on-1 Oldschool Realtime Tiny Live Extreme Inverted Beginner Real Obscure Executable Themed Freestyle Textmode Funniest Ridiculous Silent Quiet Slow Fast Simulated Emulated Kinky Classic Random Combined 1970s 1980s 1990s',
    end:   'Wild Vallejo Short Färjan Calculator Supercomputer BASIC MSX Analogue Invitation 1-bit Perl Java Flash Steampunk MIDI ProTracker AGA VGA 3DO PlayStation Generated Fractal Art Crack Hardware Nintendo Data Computer Software Plasma Phong Gouraud Mainframe Bootsector Crayon Game 3D 2D 4k 256B Roguelike Amiga C64 Fake Spectrum AI Party',
    type:  'Demo Demo Demo Demo Intro Intro Dentro Graphics Graphics Knitting Poetry Video Gaming Gaming Hacking Cosplay Music Music Sound Zoomer Effect Throwing Boozing Visuals VJ DJ Dancing',
    word:  'Competition Performance Competition Competition Contest Showdown',
  }
}

// Convert everything into real arrays
var words = {};
wordLists.forEach(theme => {
  words[theme] = {};
  wordLists[theme].each(key => {
    words[theme][key] = wordList[theme][key].split(' ');
  });
});

// Other constants
const config = {
  minDays:        180,
  dayRange:       300,
  locale:         'en-US',
  competitions:   10,
  fakerAvailable: testFaker(),
}

