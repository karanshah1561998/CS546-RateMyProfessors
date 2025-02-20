const chalk = require("chalk");

const mongodbConnection = require("../config/mongoConnection");
const schoolService = require("../services").schoolService;
const userService = require("../services").userService;
const schoolData = require("../data/school");

(async () => {
  try {
    const db = await mongodbConnection.getDB();
    await db.dropDatabase();
    console.log(chalk.blue("Database dropped"));
    console.log(chalk.blue("Starting database seed"));

    let result = null;

    // Users Collection
    // Add Users
    let users = [
      ["Ronak", "Kachalia", "password", "rkachali@stevens.edu"],
      ["Sam", "Severance", "password", "sseveran@stevens.edu"],
      ["Matt", "Wisnewski", "password", "mwisnews@stevens.edu"],
      ["Karan", "Shah", "password", "kshah129@stevens.edu"],
      ["Priya", "Patel", "password", "priya.patel@example.com"],
      ["John", "Doe", "password", "johndoe@example.com"],
      ["Emma", "Smith", "password", "emmasmith@example.com"],
      ["Liam", "Johnson", "password", "liamjohnson@example.com"],
      ["Sophia", "Brown", "password", "sophiabrown@example.com"],
      ["Noah", "Garcia", "password", "noahgarcia@example.com"],
      ["Ava", "Martinez", "password", "avamartinez@example.com"],
      ["Ethan", "Davis", "password", "ethandavis@example.com"],
      ["Isabella", "Rodriguez", "password", "isabellarodriguez@example.com"],
      ["Mason", "Hernandez", "password", "masonhernandez@example.com"],
      ["Mia", "Lopez", "password", "mialopez@example.com"],
      ["Oliver", "Gonzalez", "password", "olivergonzalez@example.com"],
      ["Lucas", "Wilson", "password", "lucaswilson@example.com"],
      ["Amelia", "Anderson", "password", "ameliaanderson@example.com"],
      ["Harper", "Thomas", "password", "harperthomas@example.com"],
      ["Evelyn", "Taylor", "password", "evelyntaylor@example.com"],
      ["Elijah", "Moore", "password", "elijahmoore@example.com"],
      ["James", "Jackson", "password", "jamesjackson@example.com"],
      ["Charlotte", "White", "password", "charlottewhite@example.com"],
      ["Benjamin", "Harris", "password", "benjaminharris@example.com"],
      ["Henry", "Clark", "password", "henryclark@example.com"],
      ["Alexander", "Lewis", "password", "alexanderlewis@example.com"],
      ["Scarlett", "Walker", "password", "scarlettwalker@example.com"],
      ["David", "Hall", "password", "davidhall@example.com"],
      ["Grace", "Allen", "password", "graceallen@example.com"],
      ["Samuel", "Young", "password", "samuelyoung@example.com"],
      ["Victoria", "King", "password", "victoriaking@example.com"],
      ["Jack", "Wright", "password", "jackwright@example.com"],
      ["Daniel", "Scott", "password", "danielscott@example.com"],
      ["Lily", "Green", "password", "lilygreen@example.com"],
      ["Owen", "Baker", "password", "owenbaker@example.com"],
      ["Hannah", "Adams", "password", "hannahadams@example.com"],
      ["Dylan", "Nelson", "password", "dylannelson@example.com"],
      ["Zoe", "Carter", "password", "zoecarter@example.com"],
      ["Matthew", "Mitchell", "password", "matthewmitchell@example.com"],
      ["Chloe", "Perez", "password", "chloeperez@example.com"],
      ["Nathan", "Roberts", "password", "nathanroberts@example.com"],
      ["Ella", "Phillips", "password", "ellaphillips@example.com"],
      ["Ryan", "Evans", "password", "ryanevans@example.com"],
      ["Aubrey", "Edwards", "password", "aubreyedwards@example.com"],
      ["Luke", "Collins", "password", "lukecollins@example.com"],
      ["Aria", "Stewart", "password", "ariastewart@example.com"],
      ["Isaac", "Morris", "password", "isaacmorris@example.com"],
      ["Savannah", "Rogers", "password", "savannahrogers@example.com"],
      ["Caleb", "Reed", "password", "calebreed@example.com"],
      ["Penelope", "Cook", "password", "penelopecook@example.com"],
    ];

    for (const user of users) {
      result = await userService.addUser(...user, new Date());
      if (result.isInserted) {
        console.log(
          chalk.green(`User - ${user[0]} ${user[1]} added successfully`)
        );
        user.unshift(result.userId.toString());
      } else
        console.error(
          chalk.red(`User - ${user[0]} ${user[1]} could not be added`)
        );
    }

    // Schools Collection
    // Add Schools
    let schools = [
      [
        "Stevens Institute of Technology",
        "College",
        "Hoboken",
        "New Jersey",
        "07030",
        users[0][0],
      ],
      [
        "New Jersey Institute of Technology",
        "College",
        "Newark",
        "New Jersey",
        "07102",
        users[1][0],
      ],
      [
        "New York University",
        "College",
        "New York City",
        "New York",
        "10003",
        users[2][0],
      ],
      [
        "Rutgers University",
        "College",
        "New Brunswick",
        "New Jersey",
        "08901",
        users[3][0],
      ],
      [
        "Massachusetts Institute of Technology",
        "College",
        "Cambridge",
        "Massachusetts",
        "02139",
        users[4][0],
      ],
      [
        "Harvard University",
        "College",
        "Cambridge",
        "Massachusetts",
        "02138",
        users[5][0],
      ],
      [
        "Stanford University",
        "College",
        "Stanford",
        "California",
        "94305",
        users[6][0],
      ],
      [
        "California Institute of Technology",
        "College",
        "Pasadena",
        "California",
        "91125",
        users[7][0],
      ],
      [
        "University of California, Berkeley",
        "College",
        "Berkeley",
        "California",
        "94720",
        users[8][0],
      ],
      [
        "University of California, Los Angeles",
        "College",
        "Los Angeles",
        "California",
        "90095",
        users[9][0],
      ],
      [
        "Princeton University",
        "College",
        "Princeton",
        "New Jersey",
        "08544",
        users[10][0],
      ],
      [
        "Yale University",
        "College",
        "New Haven",
        "Connecticut",
        "06520",
        users[11][0],
      ],
      [
        "University of Pennsylvania",
        "College",
        "Philadelphia",
        "Pennsylvania",
        "19104",
        users[12][0],
      ],
      [
        "Columbia University",
        "College",
        "New York City",
        "New York",
        "10027",
        users[13][0],
      ],
      [
        "Cornell University",
        "College",
        "Ithaca",
        "New York",
        "14850",
        users[14][0],
      ],
      [
        "University of Chicago",
        "College",
        "Chicago",
        "Illinois",
        "60637",
        users[15][0],
      ],
      [
        "Northwestern University",
        "College",
        "Evanston",
        "Illinois",
        "60208",
        users[16][0],
      ],
      [
        "University of Michigan",
        "College",
        "Ann Arbor",
        "Michigan",
        "48109",
        users[17][0],
      ],
      [
        "Carnegie Mellon University",
        "College",
        "Pittsburgh",
        "Pennsylvania",
        "15213",
        users[18][0],
      ],
      [
        "University of Illinois Urbana-Champaign",
        "College",
        "Urbana",
        "Illinois",
        "61801",
        users[19][0],
      ],
      [
        "Georgia Institute of Technology",
        "College",
        "Atlanta",
        "Georgia",
        "30332",
        users[20][0],
      ],
      [
        "University of Texas at Austin",
        "College",
        "Austin",
        "Texas",
        "78712",
        users[21][0],
      ],
      [
        "University of California, San Diego",
        "College",
        "San Diego",
        "California",
        "92093",
        users[22][0],
      ],
      [
        "University of Washington",
        "College",
        "Seattle",
        "Washington",
        "98195",
        users[23][0],
      ],
      [
        "University of Wisconsin-Madison",
        "College",
        "Madison",
        "Wisconsin",
        "53706",
        users[24][0],
      ],
      [
        "University of Southern California",
        "College",
        "Los Angeles",
        "California",
        "90089",
        users[25][0],
      ],
      [
        "Duke University",
        "College",
        "Durham",
        "North Carolina",
        "27708",
        users[26][0],
      ],
      [
        "Brown University",
        "College",
        "Providence",
        "Rhode Island",
        "02912",
        users[27][0],
      ],
      [
        "University of Virginia",
        "College",
        "Charlottesville",
        "Virginia",
        "22903",
        users[28][0],
      ],
      [
        "Pennsylvania State University",
        "College",
        "State College",
        "Pennsylvania",
        "16802",
        users[29][0],
      ],
      [
        "University of North Carolina at Chapel Hill",
        "College",
        "Chapel Hill",
        "North Carolina",
        "27599",
        users[30][0],
      ],
      [
        "University of Florida",
        "College",
        "Gainesville",
        "Florida",
        "32611",
        users[31][0],
      ],
      [
        "Boston University",
        "College",
        "Boston",
        "Massachusetts",
        "02215",
        users[32][0],
      ],
      [
        "University of Maryland, College Park",
        "College",
        "College Park",
        "Maryland",
        "20742",
        users[33][0],
      ],
      [
        "Northeastern University",
        "College",
        "Boston",
        "Massachusetts",
        "02115",
        users[34][0],
      ],
      [
        "Purdue University",
        "College",
        "West Lafayette",
        "Indiana",
        "47907",
        users[35][0],
      ],
      [
        "University of California, Irvine",
        "College",
        "Irvine",
        "California",
        "92697",
        users[36][0],
      ],
      [
        "University of Colorado Boulder",
        "College",
        "Boulder",
        "Colorado",
        "80309",
        users[37][0],
      ],
      [
        "McGill University",
        "College",
        "Montreal",
        "Quebec",
        "H3A 0G4",
        users[38][0],
      ],
      [
        "University of Toronto",
        "College",
        "Toronto",
        "Ontario",
        "M5S 1A1",
        users[39][0],
      ],
      [
        "University of British Columbia",
        "College",
        "Vancouver",
        "British Columbia",
        "V6T 1Z4",
        users[40][0],
      ],
      [
        "University of Alberta",
        "College",
        "Edmonton",
        "Alberta",
        "T6G 2R3",
        users[41][0],
      ],
      [
        "University of Waterloo",
        "College",
        "Waterloo",
        "Ontario",
        "N2L 3G1",
        users[42][0],
      ],
      [
        "Simon Fraser University",
        "College",
        "Burnaby",
        "British Columbia",
        "V5A 1S6",
        users[43][0],
      ],
      [
        "Queen’s University",
        "College",
        "Kingston",
        "Ontario",
        "K7L 3N6",
        users[44][0],
      ],
      [
        "University of Calgary",
        "College",
        "Calgary",
        "Alberta",
        "T2N 1N4",
        users[45][0],
      ],
      [
        "Western University",
        "College",
        "London",
        "Ontario",
        "N6A 3K7",
        users[46][0],
      ],
      [
        "York University",
        "College",
        "Toronto",
        "Ontario",
        "M3J 1P3",
        users[47][0],
      ],
      [
        "Dalhousie University",
        "College",
        "Halifax",
        "Nova Scotia",
        "B3H 4R2",
        users[48][0],
      ],
      [
        "University of Ottawa",
        "College",
        "Ottawa",
        "Ontario",
        "K1N 6N5",
        users[49][0],
      ],
    ];

    for (const school of schools) {
      result = await schoolService.addSchool(...school);
      if (result) {
        console.log(chalk.green(`School - ${school[0]} added successfully`));
        school.unshift(result.insertedId.toString());
      } else
        console.error(chalk.red(`School - ${school[0]} could not be added`));
    }

    // Add Professors
    let professors = [
      // Stevens Institute of Technology
      ["Patrick", "Hill", schools[0][0], ["CS 546", "CS 554"]],
      ["Khasha", "Dehnad", schools[0][0], ["CS 513"]],
      ["Insuk", "Jang", schools[0][0], ["CS 590"]],
      ["Anthony", "Penn", schools[0][0], ["CS 511"]],
      ["Charles", "Tappert", schools[0][0], ["CS 532"]],
      ["Elliot", "Chikofsky", schools[0][0], ["CS 540"]],
      ["Richard", "Sweeney", schools[0][0], ["CS 520"]],
      ["Mary", "Weathers", schools[0][0], ["CS 518"]],
      ["Liam", "Green", schools[0][0], ["CS 599"]],
      ["Nora", "Hughes", schools[0][0], ["CS 506"]],
      // New Jersey Institute of Technology (NJIT)
      ["Tim", "Howard", schools[1][0], ["MIS 555", "MIS 597"]],
      ["Mike", "Dayson", schools[1][0], ["BIA 500"]],
      ["Connor", "Williams", schools[1][0], ["BIA 505"]],
      ["Alicia", "Patel", schools[1][0], ["CS 514"]],
      ["John", "Wesley", schools[1][0], ["CS 530"]],
      ["Amanda", "Field", schools[1][0], ["CS 550"]],
      ["Derek", "Brown", schools[1][0], ["CS 570"]],
      ["Elizabeth", "Moore", schools[1][0], ["CS 600"]],
      ["Matthew", "Carter", schools[1][0], ["CS 610"]],
      ["Sophia", "Green", schools[1][0], ["CS 620"]],
      // New York University (NYU)
      ["Kyle", "Walker", schools[2][0], ["CE 147", "CE 258"]],
      ["Jason", "Nodd", schools[2][0], ["BIA 500"]],
      ["Chris", "Morris", schools[2][0], ["BIA 505"]],
      ["James", "Harrison", schools[2][0], ["CS 510"]],
      ["Laura", "Bennett", schools[2][0], ["CS 545"]],
      ["Ethan", "Clark", schools[2][0], ["CS 600"]],
      ["Lucas", "Thompson", schools[2][0], ["CS 650"]],
      ["Isabella", "White", schools[2][0], ["CS 700"]],
      ["Nathan", "Scott", schools[2][0], ["CS 520"]],
      ["Olivia", "Adams", schools[2][0], ["CS 560"]],
      // Rutgers University
      ["David", "Watson", schools[3][0], ["CS 112", "MATH 251"]],
      ["Sophia", "Brown", schools[3][0], ["ECON 101"]],
      ["Ethan", "Clarke", schools[3][0], ["CHEM 161"]],
      ["Charlotte", "Johnson", schools[3][0], ["PSY 250"]],
      ["Daniel", "White", schools[3][0], ["BIO 101"]],
      ["Olivia", "Green", schools[3][0], ["HIST 200"]],
      ["Henry", "Wilson", schools[3][0], ["PHIL 103"]],
      ["Lucas", "Young", schools[3][0], ["MKTG 220"]],
      ["Ava", "Carter", schools[3][0], ["STAT 285"]],
      ["Mason", "Reed", schools[3][0], ["LIT 120"]],
      // Massachusetts Institute of Technology (MIT)
      ["James", "Thompson", schools[4][0], ["CS 600", "MATH 180"]],
      ["Sophia", "Adams", schools[4][0], ["ECON 300"]],
      ["Ethan", "Roberts", schools[4][0], ["CHEM 320"]],
      ["Charlotte", "Lewis", schools[4][0], ["PSY 350"]],
      ["Daniel", "Scott", schools[4][0], ["BIO 450"]],
      ["Olivia", "Martinez", schools[4][0], ["HIST 315"]],
      ["Henry", "Harris", schools[4][0], ["PHIL 410"]],
      ["Lucas", "Turner", schools[4][0], ["MKTG 505"]],
      ["Ava", "Mitchell", schools[4][0], ["STAT 490"]],
      ["Mason", "Phillips", schools[4][0], ["LIT 300"]],
      // Harvard University
      ["Adam", "King", schools[5][0], ["EE 150", "EE 502"]],
      ["James", "Rudd", schools[5][0], ["CS 500"]],
      ["Nathan", "Lyon", schools[5][0], ["CS 550"]],
      ["Grace", "Carter", schools[5][0], ["CS 600"]],
      ["Benjamin", "Hall", schools[5][0], ["CS 620"]],
      ["Charlotte", "Baker", schools[5][0], ["CS 630"]],
      ["Liam", "Wilson", schools[5][0], ["CS 640"]],
      ["Sophia", "Martinez", schools[5][0], ["CS 660"]],
      ["Noah", "Thompson", schools[5][0], ["CS 680"]],
      ["Emma", "Harris", schools[5][0], ["CS 700"]],
      // Stanford University
      ["David", "Brown", schools[6][0], ["CS 101", "CS 234"]],
      ["Sarah", "Jones", schools[6][0], ["CS 448"]],
      ["Brian", "Wilson", schools[6][0], ["CS 499"]],
      ["Emily", "Turner", schools[6][0], ["CS 567"]],
      ["Olivia", "Campbell", schools[6][0], ["CS 675"]],
      ["William", "Thompson", schools[6][0], ["CS 700"]],
      ["Ava", "Mitchell", schools[6][0], ["CS 720"]],
      ["Mason", "Rodriguez", schools[6][0], ["CS 740"]],
      ["Lucas", "Evans", schools[6][0], ["CS 760"]],
      ["Zoe", "Scott", schools[6][0], ["CS 780"]],
      // University of California, Berkeley
      ["Mark", "Richards", schools[7][0], ["CS 161", "CS 162"]],
      ["Lisa", "Zhang", schools[7][0], ["CS 164"]],
      ["Tom", "Henderson", schools[7][0], ["CS 168"]],
      ["Angela", "Brooks", schools[7][0], ["CS 186"]],
      ["Chris", "Wong", schools[7][0], ["CS 188"]],
      ["Rachel", "Lewis", schools[7][0], ["CS 189"]],
      ["Kevin", "Patel", schools[7][0], ["CS 194"]],
      ["Andrew", "Ng", schools[7][0], ["CS 280"]],
      ["Sarah", "Wilson", schools[7][0], ["CS 284"]],
      ["James", "Parker", schools[7][0], ["CS 301"]],
      // University of California, Los Angeles (UCLA)
      ["Brian", "Hunter", schools[8][0], ["EE 110", "EE 120"]],
      ["Jessica", "Wright", schools[8][0], ["CS 131"]],
      ["Henry", "Brown", schools[8][0], ["CS 143"]],
      ["Olivia", "Roberts", schools[8][0], ["CS 152"]],
      ["Ethan", "Turner", schools[8][0], ["CS 162"]],
      ["Sophia", "Green", schools[8][0], ["CS 174"]],
      ["William", "Thompson", schools[8][0], ["CS 183"]],
      ["Emily", "Adams", schools[8][0], ["CS 198"]],
      ["Daniel", "Martin", schools[8][0], ["CS 201"]],
      ["Grace", "Cooper", schools[8][0], ["CS 222"]],
      // Princeton University
      ["Jacob", "Carter", schools[9][0], ["CS 102", "CS 225"]],
      ["Sophia", "Mitchell", schools[9][0], ["CS 320"]],
      ["Benjamin", "Davis", schools[9][0], ["CS 370"]],
      ["Isabella", "King", schools[9][0], ["CS 400"]],
      ["William", "Roberts", schools[9][0], ["CS 450"]],
      ["Ava", "Taylor", schools[9][0], ["CS 500"]],
      ["Mason", "Wright", schools[9][0], ["CS 510"]],
      ["Lucas", "Young", schools[9][0], ["CS 560"]],
      ["Olivia", "Gonzalez", schools[9][0], ["CS 599"]],
      ["Ethan", "Phillips", schools[9][0], ["CS 620"]],
      // Yale University
      ["Noah", "Harris", schools[10][0], ["CS 101", "CS 240"]],
      ["Charlotte", "Evans", schools[10][0], ["CS 300"]],
      ["Daniel", "Walker", schools[10][0], ["CS 330"]],
      ["Amelia", "Clark", schools[10][0], ["CS 410"]],
      ["Matthew", "Allen", schools[10][0], ["CS 460"]],
      ["Sophia", "Sanchez", schools[10][0], ["CS 500"]],
      ["James", "Peterson", schools[10][0], ["CS 550"]],
      ["Zoe", "Bennett", schools[10][0], ["CS 580"]],
      ["Henry", "Turner", schools[10][0], ["CS 620"]],
      ["Lillian", "Adams", schools[10][0], ["CS 650"]],
      // University of Pennsylvania
      ["Ryan", "Mitchell", schools[11][0], ["CS 110", "CS 225"]],
      ["Ava", "Wilson", schools[11][0], ["CS 320"]],
      ["Liam", "Roberts", schools[11][0], ["CS 370"]],
      ["Hannah", "King", schools[11][0], ["CS 410"]],
      ["Mason", "White", schools[11][0], ["CS 460"]],
      ["Sophia", "Lewis", schools[11][0], ["CS 500"]],
      ["Jacob", "Harris", schools[11][0], ["CS 550"]],
      ["Emily", "Turner", schools[11][0], ["CS 580"]],
      ["James", "Brown", schools[11][0], ["CS 620"]],
      ["Olivia", "Thomas", schools[11][0], ["CS 650"]],
      // Columbia University
      ["David", "Green", schools[12][0], ["CS 101", "CS 201"]],
      ["Sophia", "Martinez", schools[12][0], ["CS 310"]],
      ["Elijah", "Carter", schools[12][0], ["CS 350"]],
      ["Charlotte", "Walker", schools[12][0], ["CS 420"]],
      ["Liam", "Scott", schools[12][0], ["CS 460"]],
      ["Isabella", "Perez", schools[12][0], ["CS 500"]],
      ["Noah", "Wright", schools[12][0], ["CS 540"]],
      ["Lucas", "Adams", schools[12][0], ["CS 580"]],
      ["Zoe", "Bennett", schools[12][0], ["CS 620"]],
      ["Mia", "Phillips", schools[12][0], ["CS 650"]],
      // Cornell University
      ["Ethan", "Foster", schools[13][0], ["CS 111", "CS 211"]],
      ["Sophia", "Hayes", schools[13][0], ["CS 311"]],
      ["Benjamin", "Turner", schools[13][0], ["CS 351"]],
      ["Emma", "Rivera", schools[13][0], ["CS 410"]],
      ["James", "Scott", schools[13][0], ["CS 430"]],
      ["Charlotte", "Collins", schools[13][0], ["CS 450"]],
      ["Lucas", "Martin", schools[13][0], ["CS 500"]],
      ["Ava", "Green", schools[13][0], ["CS 550"]],
      ["Henry", "Bennett", schools[13][0], ["CS 590"]],
      ["Olivia", "Allen", schools[13][0], ["CS 610"]],
      // University of Chicago
      ["Daniel", "Clark", schools[14][0], ["CS 101", "CS 202"]],
      ["Emily", "Wilson", schools[14][0], ["CS 305"]],
      ["Matthew", "Young", schools[14][0], ["CS 320"]],
      ["Hannah", "Baker", schools[14][0], ["CS 410"]],
      ["David", "Rodriguez", schools[14][0], ["CS 450"]],
      ["Isabella", "Perry", schools[14][0], ["CS 500"]],
      ["Liam", "Harris", schools[14][0], ["CS 520"]],
      ["Zoe", "Campbell", schools[14][0], ["CS 560"]],
      ["Mason", "Reed", schools[14][0], ["CS 600"]],
      ["Olivia", "Torres", schools[14][0], ["CS 650"]],
      // Northwestern University
      ["Nathan", "Scott", schools[15][0], ["CS 102", "CS 230"]],
      ["Amelia", "Adams", schools[15][0], ["CS 310"]],
      ["Ryan", "Perez", schools[15][0], ["CS 340"]],
      ["Sophia", "Hernandez", schools[15][0], ["CS 410"]],
      ["Liam", "Wright", schools[15][0], ["CS 460"]],
      ["Charlotte", "Morris", schools[15][0], ["CS 500"]],
      ["Ethan", "Brown", schools[15][0], ["CS 530"]],
      ["Emily", "Carter", schools[15][0], ["CS 570"]],
      ["Benjamin", "Lewis", schools[15][0], ["CS 600"]],
      ["Grace", "Foster", schools[15][0], ["CS 640"]],
      // University of Michigan
      ["James", "Anderson", schools[16][0], ["CS 105", "CS 225"]],
      ["Ava", "Turner", schools[16][0], ["CS 330"]],
      ["Lucas", "Scott", schools[16][0], ["CS 375"]],
      ["Sophia", "Lopez", schools[16][0], ["CS 410"]],
      ["Mason", "Martin", schools[16][0], ["CS 440"]],
      ["Olivia", "White", schools[16][0], ["CS 480"]],
      ["Daniel", "Gonzalez", schools[16][0], ["CS 500"]],
      ["Zoe", "Harris", schools[16][0], ["CS 550"]],
      ["Henry", "Brown", schools[16][0], ["CS 590"]],
      ["Charlotte", "Wilson", schools[16][0], ["CS 630"]],
      // Carnegie Mellon University
      ["Ethan", "Parker", schools[17][0], ["CS 110", "CS 210"]],
      ["Sophia", "Clark", schools[17][0], ["CS 330"]],
      ["Benjamin", "Stewart", schools[17][0], ["CS 370"]],
      ["Hannah", "Thomas", schools[17][0], ["CS 410"]],
      ["David", "Walker", schools[17][0], ["CS 450"]],
      ["Isabella", "Adams", schools[17][0], ["CS 500"]],
      ["Liam", "Mitchell", schools[17][0], ["CS 540"]],
      ["Zoe", "Robinson", schools[17][0], ["CS 580"]],
      ["Mason", "Lewis", schools[17][0], ["CS 620"]],
      ["Olivia", "Green", schools[17][0], ["CS 660"]],
      // University of Illinois Urbana-Champaign
      ["William", "Anderson", schools[18][0], ["CS 125", "ECE 110"]],
      ["Sophia", "Miller", schools[18][0], ["ME 200"]],
      ["Benjamin", "Harris", schools[18][0], ["MATH 231"]],
      ["Olivia", "Walker", schools[18][0], ["PHYS 212"]],
      ["Daniel", "Gonzalez", schools[18][0], ["STAT 400"]],
      ["Charlotte", "King", schools[18][0], ["ACCY 201"]],
      ["Ethan", "White", schools[18][0], ["BADM 320"]],
      ["Mason", "Adams", schools[18][0], ["CHEM 101"]],
      ["Zoe", "Carter", schools[18][0], ["HIST 101"]],
      ["Lucas", "Martin", schools[18][0], ["LING 225"]],
      // Georgia Institute of Technology
      ["James", "Phillips", schools[19][0], ["ECE 2020", "CS 1331"]],
      ["Emma", "Scott", schools[19][0], ["ME 3322"]],
      ["Nathan", "Foster", schools[19][0], ["AE 4451"]],
      ["Amelia", "Rivera", schools[19][0], ["MGT 3660"]],
      ["Liam", "Roberts", schools[19][0], ["PSYC 1101"]],
      ["Sophia", "Thomas", schools[19][0], ["BIO 1510"]],
      ["Olivia", "Hall", schools[19][0], ["ECON 2106"]],
      ["Henry", "Turner", schools[19][0], ["ISYE 2027"]],
      ["Grace", "Evans", schools[19][0], ["CEE 4100"]],
      ["Benjamin", "Lewis", schools[19][0], ["MUSI 2010"]],
      // University of Texas at Austin
      ["David", "Campbell", schools[20][0], ["GOV 310L", "CS 312"]],
      ["Sophia", "Brown", schools[20][0], ["MATH 408D"]],
      ["Elijah", "Mitchell", schools[20][0], ["EE 302"]],
      ["Charlotte", "Wright", schools[20][0], ["CHEM 301"]],
      ["Daniel", "Morris", schools[20][0], ["PHIL 313"]],
      ["Olivia", "Scott", schools[20][0], ["LAW 320"]],
      ["Ava", "King", schools[20][0], ["BIO 325"]],
      ["Lucas", "Rodriguez", schools[20][0], ["PSY 301"]],
      ["Ethan", "Adams", schools[20][0], ["GEO 303"]],
      ["Zoe", "White", schools[20][0], ["HIST 329"]],
      // University of California, San Diego
      ["Henry", "Baker", schools[21][0], ["CS 110", "ECE 101"]],
      ["Amelia", "Harris", schools[21][0], ["BENG 140A"]],
      ["Liam", "Wilson", schools[21][0], ["POLI 100"]],
      ["Sophia", "Clark", schools[21][0], ["MGT 103"]],
      ["Olivia", "Martin", schools[21][0], ["SIO 120"]],
      ["Benjamin", "Wright", schools[21][0], ["HDS 181"]],
      ["Ethan", "Green", schools[21][0], ["LIGN 101"]],
      ["Mason", "Carter", schools[21][0], ["VIS 100"]],
      ["Zoe", "Taylor", schools[21][0], ["ANSC 125"]],
      ["Lucas", "Hall", schools[21][0], ["PHYS 140"]],
      // University of Washington
      ["David", "Parker", schools[22][0], ["CS 210", "INFO 360"]],
      ["Sophia", "Evans", schools[22][0], ["ME 355"]],
      ["Ethan", "White", schools[22][0], ["ENGL 270"]],
      ["Charlotte", "Campbell", schools[22][0], ["CHEM 237"]],
      ["Daniel", "Brown", schools[22][0], ["MKTG 301"]],
      ["Olivia", "Turner", schools[22][0], ["ECON 200"]],
      ["Henry", "Mitchell", schools[22][0], ["PHYS 121"]],
      ["Lucas", "Wright", schools[22][0], ["BIO 220"]],
      ["Ava", "Harris", schools[22][0], ["POL S 202"]],
      ["Mason", "Lewis", schools[22][0], ["LING 300"]],
      // University of Wisconsin-Madison
      ["James", "Nelson", schools[23][0], ["CS 200", "MATH 234"]],
      ["Sophia", "Peterson", schools[23][0], ["ECON 101"]],
      ["Ethan", "Foster", schools[23][0], ["CHEM 103"]],
      ["Charlotte", "Barnes", schools[23][0], ["PSYCH 202"]],
      ["Daniel", "Lewis", schools[23][0], ["BIO 151"]],
      ["Olivia", "Stewart", schools[23][0], ["HIST 241"]],
      ["Henry", "Bennett", schools[23][0], ["PHIL 104"]],
      ["Lucas", "Anderson", schools[23][0], ["MKTG 301"]],
      ["Ava", "Carter", schools[23][0], ["STAT 311"]],
      ["Mason", "White", schools[23][0], ["LIT 210"]],
      // University of Southern California (USC)
      ["David", "Phillips", schools[24][0], ["CSCI 104", "EE 250"]],
      ["Sophia", "Collins", schools[24][0], ["PSYCH 210"]],
      ["Ethan", "Brown", schools[24][0], ["CHEM 120A"]],
      ["Charlotte", "Parker", schools[24][0], ["PHIL 200"]],
      ["Daniel", "Adams", schools[24][0], ["BIO 225"]],
      ["Olivia", "Harris", schools[24][0], ["HIST 300"]],
      ["Henry", "Martin", schools[24][0], ["LAW 301"]],
      ["Lucas", "Young", schools[24][0], ["MKTG 405"]],
      ["Ava", "Wilson", schools[24][0], ["POLI 105"]],
      ["Mason", "Robinson", schools[24][0], ["ENGR 410"]],
      // Duke University
      ["James", "Parker", schools[25][0], ["CS 101", "MATH 202"]],
      ["Sophia", "Green", schools[25][0], ["ECON 210"]],
      ["Ethan", "Martinez", schools[25][0], ["CHEM 240"]],
      ["Charlotte", "Campbell", schools[25][0], ["PSY 250"]],
      ["Daniel", "White", schools[25][0], ["BIO 260"]],
      ["Olivia", "Thomas", schools[25][0], ["HIST 205"]],
      ["Henry", "Evans", schools[25][0], ["PHIL 300"]],
      ["Lucas", "Reed", schools[25][0], ["MKTG 320"]],
      ["Ava", "Bennett", schools[25][0], ["STAT 405"]],
      ["Mason", "Scott", schools[25][0], ["LIT 315"]],
      // Brown University
      ["David", "Wright", schools[26][0], ["CS 250", "ENGN 110"]],
      ["Sophia", "Lewis", schools[26][0], ["ECON 330"]],
      ["Ethan", "Allen", schools[26][0], ["CHEM 101"]],
      ["Charlotte", "Foster", schools[26][0], ["PSY 315"]],
      ["Daniel", "Clark", schools[26][0], ["BIO 150"]],
      ["Olivia", "Walker", schools[26][0], ["HIST 340"]],
      ["Henry", "Carter", schools[26][0], ["PHIL 212"]],
      ["Lucas", "Adams", schools[26][0], ["MKTG 310"]],
      ["Ava", "Mitchell", schools[26][0], ["STAT 500"]],
      ["Mason", "Gonzalez", schools[26][0], ["LIT 250"]],
      // University of Virginia
      ["James", "Hall", schools[27][0], ["CS 112", "EE 225"]],
      ["Sophia", "King", schools[27][0], ["ECON 305"]],
      ["Ethan", "Moore", schools[27][0], ["CHEM 200"]],
      ["Charlotte", "Harris", schools[27][0], ["PSY 400"]],
      ["Daniel", "Brown", schools[27][0], ["BIO 355"]],
      ["Olivia", "Thompson", schools[27][0], ["HIST 410"]],
      ["Henry", "Roberts", schools[27][0], ["PHIL 315"]],
      ["Lucas", "White", schools[27][0], ["MKTG 450"]],
      ["Ava", "Adams", schools[27][0], ["STAT 320"]],
      ["Mason", "Phillips", schools[27][0], ["LIT 310"]],
      // Pennsylvania State University
      ["James", "Nelson", schools[28][0], ["CS 101", "STAT 200"]],
      ["Sophia", "Peterson", schools[28][0], ["ECON 102"]],
      ["Ethan", "Foster", schools[28][0], ["CHEM 110"]],
      ["Charlotte", "Barnes", schools[28][0], ["PSY 100"]],
      ["Daniel", "Lewis", schools[28][0], ["BIO 141"]],
      ["Olivia", "Stewart", schools[28][0], ["HIST 121"]],
      ["Henry", "Bennett", schools[28][0], ["PHIL 101"]],
      ["Lucas", "Anderson", schools[28][0], ["MKTG 301"]],
      ["Ava", "Carter", schools[28][0], ["STAT 401"]],
      ["Mason", "White", schools[28][0], ["LIT 100"]],
      // University of North Carolina at Chapel Hill
      ["David", "Phillips", schools[29][0], ["CS 201", "EE 101"]],
      ["Sophia", "Collins", schools[29][0], ["PSYC 230"]],
      ["Ethan", "Brown", schools[29][0], ["CHEM 240"]],
      ["Charlotte", "Parker", schools[29][0], ["PHIL 210"]],
      ["Daniel", "Adams", schools[29][0], ["BIO 250"]],
      ["Olivia", "Harris", schools[29][0], ["HIST 315"]],
      ["Henry", "Martin", schools[29][0], ["LAW 305"]],
      ["Lucas", "Young", schools[29][0], ["MKTG 405"]],
      ["Ava", "Wilson", schools[29][0], ["POLI 130"]],
      ["Mason", "Robinson", schools[29][0], ["ENGR 210"]],
      // University of Florida
      ["James", "Parker", schools[30][0], ["CS 300", "MATH 200"]],
      ["Sophia", "Green", schools[30][0], ["ECON 310"]],
      ["Ethan", "Martinez", schools[30][0], ["CHEM 220"]],
      ["Charlotte", "Campbell", schools[30][0], ["PSY 250"]],
      ["Daniel", "White", schools[30][0], ["BIO 330"]],
      ["Olivia", "Thomas", schools[30][0], ["HIST 220"]],
      ["Henry", "Evans", schools[30][0], ["PHIL 350"]],
      ["Lucas", "Reed", schools[30][0], ["MKTG 305"]],
      ["Ava", "Bennett", schools[30][0], ["STAT 410"]],
      ["Mason", "Scott", schools[30][0], ["LIT 205"]],
      // Boston University
      ["David", "Wright", schools[31][0], ["CS 275", "ENG 101"]],
      ["Sophia", "Lewis", schools[31][0], ["ECON 320"]],
      ["Ethan", "Allen", schools[31][0], ["CHEM 150"]],
      ["Charlotte", "Foster", schools[31][0], ["PSY 315"]],
      ["Daniel", "Clark", schools[31][0], ["BIO 160"]],
      ["Olivia", "Walker", schools[31][0], ["HIST 245"]],
      ["Henry", "Carter", schools[31][0], ["PHIL 225"]],
      ["Lucas", "Adams", schools[31][0], ["MKTG 315"]],
      ["Ava", "Mitchell", schools[31][0], ["STAT 515"]],
      ["Mason", "Gonzalez", schools[31][0], ["LIT 275"]],
      // University of Maryland, College Park
      ["James", "Hall", schools[32][0], ["CS 330", "ENGR 250"]],
      ["Sophia", "King", schools[32][0], ["ECON 405"]],
      ["Ethan", "Moore", schools[32][0], ["CHEM 320"]],
      ["Charlotte", "Harris", schools[32][0], ["PSY 410"]],
      ["Daniel", "Brown", schools[32][0], ["BIO 355"]],
      ["Olivia", "Thompson", schools[32][0], ["HIST 420"]],
      ["Henry", "Roberts", schools[32][0], ["PHIL 315"]],
      ["Lucas", "White", schools[32][0], ["MKTG 450"]],
      ["Ava", "Adams", schools[32][0], ["STAT 325"]],
      ["Mason", "Phillips", schools[32][0], ["LIT 310"]],
      // Northeastern University
      ["James", "Nelson", schools[33][0], ["CS 180", "MATH 250"]],
      ["Sophia", "Peterson", schools[33][0], ["ECON 201"]],
      ["Ethan", "Foster", schools[33][0], ["CHEM 120"]],
      ["Charlotte", "Barnes", schools[33][0], ["PSY 210"]],
      ["Daniel", "Lewis", schools[33][0], ["BIO 220"]],
      ["Olivia", "Stewart", schools[33][0], ["HIST 150"]],
      ["Henry", "Bennett", schools[33][0], ["PHIL 110"]],
      ["Lucas", "Anderson", schools[33][0], ["MKTG 220"]],
      ["Ava", "Carter", schools[33][0], ["STAT 320"]],
      ["Mason", "White", schools[33][0], ["LIT 180"]],
      // Purdue University
      ["David", "Phillips", schools[34][0], ["CS 250", "EE 202"]],
      ["Sophia", "Collins", schools[34][0], ["PSYCH 301"]],
      ["Ethan", "Brown", schools[34][0], ["CHEM 340"]],
      ["Charlotte", "Parker", schools[34][0], ["PHIL 300"]],
      ["Daniel", "Adams", schools[34][0], ["BIO 315"]],
      ["Olivia", "Harris", schools[34][0], ["HIST 400"]],
      ["Henry", "Martin", schools[34][0], ["LAW 210"]],
      ["Lucas", "Young", schools[34][0], ["MKTG 410"]],
      ["Ava", "Wilson", schools[34][0], ["POLI 220"]],
      ["Mason", "Robinson", schools[34][0], ["ENGR 350"]],
      // University of California, Irvine
      ["James", "Parker", schools[35][0], ["CS 150", "MATH 200"]],
      ["Sophia", "Green", schools[35][0], ["ECON 310"]],
      ["Ethan", "Martinez", schools[35][0], ["CHEM 230"]],
      ["Charlotte", "Campbell", schools[35][0], ["PSY 280"]],
      ["Daniel", "White", schools[35][0], ["BIO 320"]],
      ["Olivia", "Thomas", schools[35][0], ["HIST 310"]],
      ["Henry", "Evans", schools[35][0], ["PHIL 340"]],
      ["Lucas", "Reed", schools[35][0], ["MKTG 320"]],
      ["Ava", "Bennett", schools[35][0], ["STAT 410"]],
      ["Mason", "Scott", schools[35][0], ["LIT 205"]],
      // University of Colorado Boulder
      ["David", "Wright", schools[36][0], ["CS 260", "ENG 210"]],
      ["Sophia", "Lewis", schools[36][0], ["ECON 330"]],
      ["Ethan", "Allen", schools[36][0], ["CHEM 210"]],
      ["Charlotte", "Foster", schools[36][0], ["PSY 325"]],
      ["Daniel", "Clark", schools[36][0], ["BIO 280"]],
      ["Olivia", "Walker", schools[36][0], ["HIST 350"]],
      ["Henry", "Carter", schools[36][0], ["PHIL 310"]],
      ["Lucas", "Adams", schools[36][0], ["MKTG 410"]],
      ["Ava", "Mitchell", schools[36][0], ["STAT 500"]],
      ["Mason", "Gonzalez", schools[36][0], ["LIT 275"]],
      // McGill University
      ["James", "Hall", schools[37][0], ["CS 300", "ENGR 150"]],
      ["Sophia", "King", schools[37][0], ["ECON 405"]],
      ["Ethan", "Moore", schools[37][0], ["CHEM 320"]],
      ["Charlotte", "Harris", schools[37][0], ["PSY 410"]],
      ["Daniel", "Brown", schools[37][0], ["BIO 355"]],
      ["Olivia", "Thompson", schools[37][0], ["HIST 420"]],
      ["Henry", "Roberts", schools[37][0], ["PHIL 350"]],
      ["Lucas", "White", schools[37][0], ["MKTG 450"]],
      ["Ava", "Adams", schools[37][0], ["STAT 325"]],
      ["Mason", "Phillips", schools[37][0], ["LIT 310"]],
      // University of Toronto
      ["David", "Watson", schools[38][0], ["CS 108", "MATH 157"]],
      ["Sophia", "Brown", schools[38][0], ["ECON 102"]],
      ["Ethan", "Clarke", schools[38][0], ["CHEM 101"]],
      ["Charlotte", "Johnson", schools[38][0], ["PSY 220"]],
      ["Daniel", "White", schools[38][0], ["BIO 120"]],
      ["Olivia", "Green", schools[38][0], ["HIST 230"]],
      ["Henry", "Wilson", schools[38][0], ["PHIL 103"]],
      ["Lucas", "Young", schools[38][0], ["MKTG 225"]],
      ["Ava", "Carter", schools[38][0], ["STAT 280"]],
      ["Mason", "Reed", schools[38][0], ["LIT 130"]],
      // University of British Columbia
      ["James", "Thompson", schools[39][0], ["CS 110", "MATH 200"]],
      ["Sophia", "Adams", schools[39][0], ["ECON 250"]],
      ["Ethan", "Roberts", schools[39][0], ["CHEM 210"]],
      ["Charlotte", "Lewis", schools[39][0], ["PSY 310"]],
      ["Daniel", "Scott", schools[39][0], ["BIO 215"]],
      ["Olivia", "Martinez", schools[39][0], ["HIST 315"]],
      ["Henry", "Harris", schools[39][0], ["PHIL 310"]],
      ["Lucas", "Turner", schools[39][0], ["MKTG 305"]],
      ["Ava", "Mitchell", schools[39][0], ["STAT 400"]],
      ["Mason", "Phillips", schools[39][0], ["LIT 220"]],
      // University of Alberta
      ["David", "Hall", schools[40][0], ["CS 101", "EE 150"]],
      ["Sophia", "Nelson", schools[40][0], ["ECON 201"]],
      ["Ethan", "Wright", schools[40][0], ["CHEM 102"]],
      ["Charlotte", "Green", schools[40][0], ["PSY 202"]],
      ["Daniel", "Parker", schools[40][0], ["BIO 240"]],
      ["Olivia", "Edwards", schools[40][0], ["HIST 400"]],
      ["Henry", "Evans", schools[40][0], ["PHIL 250"]],
      ["Lucas", "Gonzalez", schools[40][0], ["MKTG 320"]],
      ["Ava", "Sanchez", schools[40][0], ["STAT 210"]],
      ["Mason", "Robinson", schools[40][0], ["LIT 140"]],
      // University of Waterloo
      ["James", "Lee", schools[41][0], ["CS 135", "MATH 237"]],
      ["Sophia", "Walker", schools[41][0], ["ECON 280"]],
      ["Ethan", "Taylor", schools[41][0], ["CHEM 200"]],
      ["Charlotte", "Bennett", schools[41][0], ["PSY 210"]],
      ["Daniel", "White", schools[41][0], ["BIO 270"]],
      ["Olivia", "Wilson", schools[41][0], ["HIST 350"]],
      ["Henry", "Phillips", schools[41][0], ["PHIL 310"]],
      ["Lucas", "Adams", schools[41][0], ["MKTG 310"]],
      ["Ava", "Moore", schools[41][0], ["STAT 250"]],
      ["Mason", "Gonzalez", schools[41][0], ["LIT 190"]],
      // Simon Fraser University
      ["David", "Russell", schools[42][0], ["CS 110", "ENGR 200"]],
      ["Sophia", "Turner", schools[42][0], ["ECON 300"]],
      ["Ethan", "Harris", schools[42][0], ["CHEM 250"]],
      ["Charlotte", "Cooper", schools[42][0], ["PSY 300"]],
      ["Daniel", "Green", schools[42][0], ["BIO 320"]],
      ["Olivia", "Lewis", schools[42][0], ["HIST 410"]],
      ["Henry", "Scott", schools[42][0], ["PHIL 320"]],
      ["Lucas", "Campbell", schools[42][0], ["MKTG 450"]],
      ["Ava", "Peterson", schools[42][0], ["STAT 315"]],
      ["Mason", "Rogers", schools[42][0], ["LIT 280"]],
      // Queen’s University
      ["David", "Miller", schools[43][0], ["CS 101", "MATH 210"]],
      ["Sophia", "Carter", schools[43][0], ["ECON 220"]],
      ["Ethan", "Stewart", schools[43][0], ["CHEM 205"]],
      ["Charlotte", "Taylor", schools[43][0], ["PSY 310"]],
      ["Daniel", "Scott", schools[43][0], ["BIO 275"]],
      ["Olivia", "White", schools[43][0], ["HIST 200"]],
      ["Henry", "Martinez", schools[43][0], ["PHIL 270"]],
      ["Lucas", "Harris", schools[43][0], ["MKTG 325"]],
      ["Ava", "Wilson", schools[43][0], ["STAT 350"]],
      ["Mason", "Adams", schools[43][0], ["LIT 215"]],
      // University of Calgary
      ["James", "Moore", schools[44][0], ["CS 120", "ENGR 250"]],
      ["Sophia", "Lewis", schools[44][0], ["ECON 310"]],
      ["Ethan", "Foster", schools[44][0], ["CHEM 315"]],
      ["Charlotte", "Evans", schools[44][0], ["PSY 305"]],
      ["Daniel", "Brown", schools[44][0], ["BIO 260"]],
      ["Olivia", "Green", schools[44][0], ["HIST 380"]],
      ["Henry", "Thomas", schools[44][0], ["PHIL 300"]],
      ["Lucas", "Wright", schools[44][0], ["MKTG 420"]],
      ["Ava", "Mitchell", schools[44][0], ["STAT 450"]],
      ["Mason", "Phillips", schools[44][0], ["LIT 280"]],
      // Western University
      ["David", "King", schools[45][0], ["CS 210", "MATH 240"]],
      ["Sophia", "Turner", schools[45][0], ["ECON 405"]],
      ["Ethan", "Martinez", schools[45][0], ["CHEM 230"]],
      ["Charlotte", "Hall", schools[45][0], ["PSY 375"]],
      ["Daniel", "Roberts", schools[45][0], ["BIO 315"]],
      ["Olivia", "Walker", schools[45][0], ["HIST 325"]],
      ["Henry", "Gonzalez", schools[45][0], ["PHIL 310"]],
      ["Lucas", "Adams", schools[45][0], ["MKTG 320"]],
      ["Ava", "Moore", schools[45][0], ["STAT 370"]],
      ["Mason", "Rogers", schools[45][0], ["LIT 290"]],
      // York University
      ["James", "Lewis", schools[46][0], ["CS 300", "ENGR 110"]],
      ["Sophia", "White", schools[46][0], ["ECON 275"]],
      ["Ethan", "Brown", schools[46][0], ["CHEM 280"]],
      ["Charlotte", "Harris", schools[46][0], ["PSY 320"]],
      ["Daniel", "Allen", schools[46][0], ["BIO 345"]],
      ["Olivia", "Scott", schools[46][0], ["HIST 400"]],
      ["Henry", "Evans", schools[46][0], ["PHIL 280"]],
      ["Lucas", "Robinson", schools[46][0], ["MKTG 390"]],
      ["Ava", "Turner", schools[46][0], ["STAT 420"]],
      ["Mason", "Sanchez", schools[46][0], ["LIT 350"]],
      // Dalhousie University
      ["David", "Russell", schools[47][0], ["CS 150", "MATH 210"]],
      ["Sophia", "Taylor", schools[47][0], ["ECON 350"]],
      ["Ethan", "Parker", schools[47][0], ["CHEM 275"]],
      ["Charlotte", "King", schools[47][0], ["PSY 390"]],
      ["Daniel", "Carter", schools[47][0], ["BIO 315"]],
      ["Olivia", "Wilson", schools[47][0], ["HIST 320"]],
      ["Henry", "Walker", schools[47][0], ["PHIL 290"]],
      ["Lucas", "Moore", schools[47][0], ["MKTG 410"]],
      ["Ava", "Adams", schools[47][0], ["STAT 360"]],
      ["Mason", "Phillips", schools[47][0], ["LIT 370"]],
      // California Institute of Technology
      ["David", "Anderson", schools[48][0], ["CS 101", "MATH 110"]],
      ["Sophia", "Martin", schools[48][0], ["ECON 210"]],
      ["Ethan", "Harris", schools[48][0], ["CHEM 120"]],
      ["Charlotte", "Wright", schools[48][0], ["PSY 250"]],
      ["Daniel", "Lopez", schools[48][0], ["BIO 320"]],
      ["Olivia", "Hall", schools[48][0], ["HIST 310"]],
      ["Henry", "Rodriguez", schools[48][0], ["PHIL 200"]],
      ["Lucas", "Nelson", schools[48][0], ["MKTG 330"]],
      ["Ava", "Baker", schools[48][0], ["STAT 400"]],
      ["Mason", "Scott", schools[48][0], ["LIT 150"]],
      // Vadodara Institute of Technology
      ["James", "Carter", schools[49][0], ["CS 150", "MATH 180"]],
      ["Sophia", "Evans", schools[49][0], ["ECON 300"]],
      ["Ethan", "Roberts", schools[49][0], ["CHEM 250"]],
      ["Charlotte", "Green", schools[49][0], ["PSY 310"]],
      ["Daniel", "White", schools[49][0], ["BIO 410"]],
      ["Olivia", "Moore", schools[49][0], ["HIST 360"]],
      ["Henry", "Phillips", schools[49][0], ["PHIL 290"]],
      ["Lucas", "Brown", schools[49][0], ["MKTG 420"]],
      ["Ava", "Mitchell", schools[49][0], ["STAT 450"]],
      ["Mason", "Turner", schools[49][0], ["LIT 200"]],
    ];

    for (const professor of professors) {
      result = await schoolService.addProfessorToSchool(...professor);
      if (result) {
        console.log(
          chalk.green(`Professor - ${professor[0]} added successfully`)
        );
        professor.unshift(result.id.toString());
      } else
        console.error(
          chalk.red(`Professor - ${professor[0]} could not be added`)
        );
    }

    // Add reviews to professors
    let reviews = [];

    for (let schoolIndex = 0; schoolIndex < 50; schoolIndex++) {
      for (let professorIndex = 0; professorIndex < 10; professorIndex++) {
        let professor = professors[schoolIndex * 10 + professorIndex];
        let school = schools[schoolIndex];

        for (let reviewIndex = 0; reviewIndex < 5; reviewIndex++) {
          let user =
            users[
              (schoolIndex * 10 + professorIndex * 5 + reviewIndex) %
                users.length
            ];

          reviews.push([
            Math.round((Math.random() * 4 + 1) * 10) / 10, // Rating (1.0 - 5.0)
            Math.round((Math.random() * 4 + 1) * 10) / 10, // Difficulty (1.0 - 5.0)
            professor[3][Math.floor(Math.random() * professor[3].length)], // Random Course
            [
              "Excellent professor!",
              "Very helpful!",
              "Engaging lectures.",
              "Needs improvement.",
              "Best professor!",
              "Difficult but worth it.",
              "Clear explanations.",
              "Challenging but rewarding.",
              "Boring class.",
              "Would take again!",
            ][Math.floor(Math.random() * 10)], // Random Review Comment
            new Date(),
            professor[0], // Professor ID
            school[0], // School ID
            user[0], // User ID
          ]);
        }
      }
    }

    // Insert reviews into the database
    for (const review of reviews) {
      result = await schoolService.addReviewToProfessor(...review);
      if (result) {
        console.log(chalk.green(`Review - ${review[3]} added successfully`));
      } else {
        console.error(chalk.red(`Review - ${review[3]} could not be added`));
      }
    }

    // Add Comments
    let schoolsData = await schoolData.getAllSchoolsData();

    const commentsList = [
      "I totally agree with this review!",
      "I had a different experience with this professor.",
      "Great professor, but I found the exams quite tough.",
      "The lectures were engaging, but the assignments were hard.",
      "I learned a lot from this course!",
      "This class was too fast-paced for me.",
      "I would highly recommend this professor!",
      "The grading was fair, but participation was important.",
      "The professor explains concepts really well!",
      "I struggled with this class, but the professor was helpful.",
    ];
    const getRandomComment = () =>
      commentsList[Math.floor(Math.random() * commentsList.length)];

    for (schData of schoolsData) {
      for (prof of schData.professors) {
        for (rev of prof.reviews) {
          try {
            const numComments = Math.floor(Math.random() * 3) + 2; // Generates 2, 3, or 4 comments
            const randomUser =
              users[Math.floor(Math.random() * users.length)][0]; // Random user ID
            const randomComment = getRandomComment();

            await schoolService.addCommentToReview(
              new Date(),
              randomComment,
              schData._id,
              prof._id,
              rev._id,
              randomUser
            );
            // Randomly add thumbs up/down (50% chance)
            if (Math.random() > 0.5) {
              await schoolService.addThumbsUpToReview(
                schData._id,
                prof._id,
                rev._id,
                users[Math.floor(Math.random() * users.length)][0]
              );
            } else {
              await schoolService.addThumbsDownToReview(
                schData._id,
                prof._id,
                rev._id,
                users[Math.floor(Math.random() * users.length)][0]
              );
            }
            console.log(chalk.green("Comment added successfully"));
          } catch (err) {
            console.log(chalk.red("Comment could not be added"));
          }
        }
      }
    }
    console.log(chalk.blue("Done seeding database"));
    await db.serverConfig.close();
  } catch (e) {
    console.error(e);
  }
})();
