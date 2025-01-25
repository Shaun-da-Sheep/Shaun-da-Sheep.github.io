var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting Pass 2025",
  "page_title": "63572 Reefscape 🪸",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024txcmp1",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/realreal2025field.png",
      "clickRestriction": "one",
      "allowableResponses": "6 7 18 19 30 31 42 43 54 55 66 67",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  { "name": "Defense",
      "code": "fre",
      "type":"radio",
      "choices": {
        "one": "protected one location<br>",
        "multiple": "protected multiple locations<br>",
        "team": "targeted specific team<br>",
        "na": "Not attempted"
      },
      "defaultValue": "na"
    },
    { "name": "Defense Delayed Opponent?",
      "code": "ght",
      "type": "bool"
    },
    { "name": "Temporarily Immobilized",
      "code": "swe",
      "type": "bool"
    },
    { "name": "Permanently Immobilized",
      "code": "fgb",
      "type": "bool"
    }
    ],
   "postmatch": [
   ]
}`;
