const users = [
   {
      "id":1,
      "name":"Shea Cummings",
      "email":"pretium@nuncullamcorpereu.net",
      "phone":"(989) 113-3909",
      "address":"100-4841 Nam Street",
      "city":"Copiapo",
      "zip":"55718",
	  "sal":10000
   },
   {
      "id":2,
      "name":"Nicholas Crawford",
      "email":"fames@magnaUttincidunt.ca",
      "phone":"(318) 739-5632",
      "address":"P.O. Box 114, 3459 Amet, Rd.",
      "city":"Molfetta",
      "zip":"7593",
	  "sal":20000
   },
   {
      "id":3,
      "name":"Sade Dunlap",
      "email":"tellus.non@hendrerita.org",
      "phone":"(530) 260-4734",
      "address":"415-3252 Erat Street",
      "city":"Gembloux",
      "zip":"21582",
	  "sal":15000
   },
   {
      "id":4,
      "name":"Megan Cortez",
      "email":"mollis.nec@Pellentesque.com",
      "phone":"(940) 196-0875",
      "address":"P.O. Box 564, 6689 Nec St.",
      "city":"Saguenay",
      "zip":"41910",
	  "sal":10000
   },
   {
      "id":5,
      "name":"Deirdre Merritt",
      "email":"tincidunt.aliquam.arcu@atnisiCum.net",
      "phone":"(545) 843-4672",
      "address":"6351 Mi Rd.",
      "city":"Boneffe",
      "zip":"53633",
	  "sal":11000
   },
   {
      "id":6,
      "name":"Iris Koch",
      "email":"urna.Vivamus@lacus.com",
      "phone":"(494) 393-4272",
      "address":"757-6732 Tincidunt Av.",
      "city":"Sefro",
      "zip":"913243",
	  "sal":34000
   },
   {
      "id":7,
      "name":"Bruce Ochoa",
      "email":"Phasellus.fermentum@necmalesuada.com",
      "phone":"(683) 924-1310",
      "address":"Ap #196-9768 Elementum Rd.",
      "city":"Calmar",
      "zip":"824915",
	  "sal":21000
   },
   {
      "id":8,
      "name":"Noelani Black",
      "email":"ac@malesuadaiderat.ca",
      "phone":"(405) 537-8203",
      "address":"580 Quis Road",
      "city":"L'Hospitalet de Llobregat",
      "zip":"6622IG",
	  "sal":12000
   },
   {
      "id":9,
      "name":"Mark Vang",
      "email":"Aenean.gravida@sed.edu",
      "phone":"(614) 308-9853",
      "address":"9850 In, St.",
      "city":"Relegem",
      "zip":"5204",
	  "sal":8000
   },
   {
      "id":10,
      "name":"Illiana Frederick",
      "email":"egestas.hendrerit@nisidictum.edu",
      "phone":"(689) 510-8155",
      "address":"Ap #769-1763 Morbi St.",
      "city":"Worksop",
      "zip":"B89 4RQ",
	  "sal":28000
   },
   {
      "id":11,
      "name":"Xerxes Bridges",
      "email":"augue.ac@euligula.edu",
      "phone":"(547) 732-9433",
      "address":"1347 Blandit Ave",
      "city":"Osgoode",
      "zip":"PP22 4VO",
	  "sal":13000
   },
   {
      "id":12,
      "name":"Sandra Faulkner",
      "email":"nulla.at@necimperdietnec.org",
      "phone":"(637) 233-5781",
      "address":"P.O. Box 117, 7622 Sapien. St.",
      "city":"Pontedera",
      "zip":"471166",
	  "sal":11000
   },
   {
      "id":13,
      "name":"Cally Wright",
      "email":"non.nisi@justoeuarcu.edu",
      "phone":"(827) 174-9461",
      "address":"320-2197 Cursus. Rd.",
      "city":"Buggenhout",
      "zip":"24078",
	  "sal":12000
   },
   {
      "id":14,
      "name":"Chandler Newton",
      "email":"nunc.sit@nascetur.com",
      "phone":"(558) 197-7518",
      "address":"Ap #602-4754 Massa. Av.",
      "city":"Ulm",
      "zip":"32804",
	  "sal":10000
   },
   {
      "id":15,
      "name":"Gregory Weber",
      "email":"magnis.dis@nulla.org",
      "phone":"(191) 489-0848",
      "address":"Ap #515-6426 Tortor Ave",
      "city":"Jolanda di Savoia",
      "zip":"211012",
	  "sal":9000
   },
   {
      "id":16,
      "name":"Preston Garrison",
      "email":"mus@nislarcu.net",
      "phone":"(708) 264-3149",
      "address":"615-1124 Hendrerit St.",
      "city":"Diets-Heur",
      "zip":"3316",
	  "sal":10000
   },
   {
      "id":17,
      "name":"Zenia Melton",
      "email":"dis.parturient@Morbiaccumsanlaoreet.org",
      "phone":"(611) 494-3595",
      "address":"P.O. Box 270, 612 Lacus. Road",
      "city":"Neunkirchen",
      "zip":"6600ZY",
	  "sal":17000
   },
   {
      "id":18,
      "name":"Xander Dale",
      "email":"adipiscing@feugiat.co.uk",
      "phone":"(356) 169-6694",
      "address":"3025 Nibh Rd.",
      "city":"Beervelde",
      "zip":"337737",
	  "sal":45000
   },
   {
      "id":19,
      "name":"Lillith Mason",
      "email":"penatibus.et@convallisest.co.uk",
      "phone":"(311) 759-8672",
      "address":"650-2715 Eros. Rd.",
      "city":"Amsterdam",
      "zip":"33978",
	  "sal":67000
   },
   {
      "id":20,
      "name":"Carol Franks",
      "email":"lectus.Nullam@ridiculusmus.edu",
      "phone":"(510) 966-9860",
      "address":"2533 Congue Avenue",
      "city":"Rouvroy",
      "zip":"8079",
	  "sal":54000
   },
   {
      "id":21,
      "name":"Sharon Wade",
      "email":"sem.mollis@etliberoProin.org",
      "phone":"(122) 262-5969",
      "address":"2259 Magna. Rd.",
      "city":"Perk",
      "zip":"V8Y 8X6",
	  "sal":34000
   },
   {
      "id":22,
      "name":"Matthew Clark",
      "email":"lorem@urna.org",
      "phone":"(250) 588-0809",
      "address":"685-2385 Dui. Ave",
      "city":"Oordegem",
      "zip":"48080",
	  "sal":18000
   },
   {
      "id":23,
      "name":"Inga Bartlett",
      "email":"semper.rutrum.Fusce@tempusrisus.ca",
      "phone":"(764) 735-3625",
      "address":"Ap #849-2440 Nisi Avenue",
      "city":"Roux-Miroir",
      "zip":"9866",
	  "sal":27000
   },
   {
      "id":24,
      "name":"Wallace Terrell",
      "email":"metus.Aenean@maurisblandit.com",
      "phone":"(449) 501-1515",
      "address":"349-9540 Laoreet, Ave",
      "city":"Sint-Lambrechts-Woluwe",
      "zip":"64823",
	  "sal":29600
   },
   {
      "id":25,
      "name":"Constance Kent",
      "email":"enim.nec.tempus@urnaUt.com",
      "phone":"(564) 592-5302",
      "address":"P.O. Box 626, 5444 Felis, Rd.",
      "city":"Laino Castello",
      "zip":"12-888",
	  "sal":33300
   }
]

export default users
