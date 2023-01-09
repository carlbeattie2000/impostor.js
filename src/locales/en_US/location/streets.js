const streets = [
  'W 27th Street',
  'Wall Road',
  'W',
  'Pinseeker',
  'Madison Drive',
  'Selma Pkwy',
  'Baptist Health Drive',
  'Appleblossom Lane',
  'Appaloosa Oak',
  'Spring Road',
  'Gopher Road',
  'Chelsea Circle',
  'W 101st Street',
  'Brisbane Drive',
  'Schaefer Road',
  'Stuyvesant Loop W',
  'Queen Street',
  'Davenport',
  'Union Square S',
  'Aries',
  'Mocine Elm',
  'Retama Pkwy',
  'Brennan Road',
  'Golden Oak',
  'Nunnawauk Meadows',
  'Harbour Town',
  'Borough Lane',
  'W 163rd Street',
  'Habersham',
  'Koch Street',
  'Chelsea Drive',
  'W 59th Street',
  'Persimmon Drive',
  'W 40th Street',
  'Fern Lane',
  'State Highway 302',
  'Randolph Avenue',
  'Iron Ridge Pass',
  'W 157th Street',
  'W 87th Street',
  'Robin Hill Road',
  'Passenna Spring',
  'Park Lane',
  'American Flag',
  'Whitefield Square',
  'Palestine Road',
  'Meadow Road',
  'Sunset Hill Road',
  'W 113th Street',
  'Coconut Palm',
  'Bentagrass Lane',
  'Castle Meadow Road',
  'Hattertown Road',
  'W 22nd Street',
  'Fieldstone Drive',
  'W 214th Street',
  'Abercorn',
  'Jasper Hill Lane',
  'Forest Ridge Pkwy',
  'Ike Lane',
  'Hilltop Drive',
  'Grand Forrest Drive',
  'Fox Run Lane S',
  'Gate Brg',
  'Pond Brook Road',
  'Laura Hts',
  'Shadow Ridge Circle',
  'W 104th Street',
  'Hyvue Drive',
  'Frontage Road',
  'Hopewell Road',
  'Scenic Lake Drive',
  'Bentgrass Lane',
  'Robin Hood Way',
  'W 211th Street',
  'Elm Leaf Lane',
  'Limestone Mesa',
  'W 193rd Street',
  'Freeport Drive',
  'Stephanie G Street',
  'Hunting Ridge Road',
  'Suffolk Street',
  'Barnabas Road',
  'Fork Drive, West',
  'Aranda',
  'Pepperidge Road',
  'Wilmington Way',
  'Trout Brook Circle',
  'W 99th Street',
  'Botsford Lane',
  'Dug Hill Road',
  'Chestnut',
  'Williams Street',
  'Summit Hill Drive',
  'Monument Pass',
  'St Andrews Plaza',
  'W 127th Street',
  'Nelson Lane',
  'King',
  'Schoolhouse Hill Road',
  'Hickory Lane',
  'U',
  'W 13rd Street',
  'Pencil Cholla',
  'Telfair Square',
  'Winburn Avenue',
  'Abbey Lane',
  'W 70th Street',
  'Maid Marian',
  'Lazy Oak',
  'Tamarack Road',
  'Toddy Hill Road',
  'Old Evans Road',
  'Possum Ridge Road',
  'Poverty Hollow Road',
  'Knollwood',
  'Beverly Drive',
  'Peachtree Lane',
  'Timber Springs',
  'Bayberry Drive',
  'Wuest Street',
  'Adams Hill Lane',
  'Thames Street, West',
  'Mesa Brook',
  'Saddle Ridge Road',
  'Farm Meadow Road',
  'Marilyn Drive',
  'Szold Place',
  'W 180th Street',
  'Abbotts Hill Road',
  'Mount Pleasant Road',
  'Juniper Lane',
  'Twist Hill Lane',
  'Hawks Meadow',
  'Mountcrest Drive',
  'W 135th Street',
  'Hunter Hts',
  'Edmund Road',
  'Greentree',
  'V',
  'Trimble Place',
  'Hermes Drive',
  'Lower Seguin Road',
  'Longview Heights Road',
  'Roundtree Drive',
  'W 129th Street',
  'Lovells Lane',
  'Calvert Street',
  'Stuyvesant Loop N',
  'Pipestone',
  'Washington Square N',
  'King Street',
  'Valley View Road',
  'W 84th Street',
  'Pecan Drive',
  'W 174th Street',
  'Tree Branch',
  'W 147th Street',
  'Topside Lane',
  'Linden Grove Drive',
  'Jangling Plains Road',
  'Staff Street',
  'W 85th Street',
  'Greaves Lane',
  'W 120th Street',
  'Prichard Place',
  'Fairfield Circle, South',
  'Elm Street',
  'Agora Pkwy',
  'Cove Trail',
  'W 34th Street',
  'Joal Court',
  'W 15th Street',
  'Violette Road',
  'Tower Road',
  'Shepard Hill Road',
  'W 66th Street',
  'Pegasus Drive',
  'Yellow Bark Boulevard',
  'Corridor Pkwy',
  'Newbury Road',
  'Boulder Creek Road',
  'Irving Lane',
  'Clearwater Boulevard',
  'State Route 301',
  'Kent Road',
  'W 204th Street',
  'Black Walnut',
  'W 20th Street',
  'W 38th Street',
  'W 190th Street',
  'Taunton Lake Road',
  'Bluffside Boulevard',
  'W 211st Street',
  'Kline Circle',
  'Ebony Lane',
  'Cutler Brg',
  'Williamsburg Drive',
  'Cornfield Ridge',
  'Lake George Road',
  'Mule Deer',
  'Mountain Brook',
  'W 79st Transverse Road',
  'Morning Drive',
  'West Street',
  'Samantha Drive',
  'Daves Lane',
  'Andrew Low',
  'Buck Mountain',
  'Crimson Cove Drive',
  'Hemlock Road',
  'Deep Spring Pass',
  'Nearbrook Drive',
  'Broadleaf',
  'Mesquite Chase',
  'Carol Ann Drive',
  'Mill Street',
  'Belle Glade Boulevard',
  'Lookout Road',
  'Parmalee Hill Road',
  'Hedge Meadow Lane',
  'Jane Addams Drive',
  'Glover Avenue',
  'Evans Road, East',
  'W 188th Street',
  'Forsyth Park',
  'Chestnut Oak',
  'Scarlet Rose',
  'Thomas Street',
  'Sugar Street',
  'Birch Hill Road',
  'Oleander',
  'W 162nd Street',
  'Pine',
  'Meridian',
  'Church Hill Road',
  'Sharon Court',
  'Andre',
  'Prairie Lane',
  'Hi Barlow Road',
  'Bench Trail',
  'Sturges Road',
  'Old Austin Road',
  'Monitor Hill Road',
  'Dimrock',
  'Sumter Glade',
  'Shelly Road',
  'Piedmont Trce',
  'Elm Drive',
  'Cotswold Drive',
  'Grand Forest Drive',
  'Castle Hill Road',
  'Garden Circle',
  'Fox Lane',
  'W 114th Street',
  'Edgewood Drive',
  'Kip Lane',
  'Oak Ridge',
  'Little Brook Lane',
  'Vicki Lynn Drive',
  'Brushy Hill Road',
  'Churchill Cove',
  'Grey Feather',
  'Silver Buckle',
  'Conners Road',
  'Elbel Road',
  'Menlo Drive',
  'Four Oaks Lane',
  'East Street',
  'Flintlock Trail',
  'Red Iron',
  'Johnnie Cake Lane',
  'Curtiss Avenue',
  'Silo Street',
  'Ruidoso Chase',
  'Winged Foot',
  'Eden Hill Road',
  'Lori Lynn Circle',
  'Roanoke',
  'FM 78, East',
  'W 123rd Street',
  'Stonewall Place',
  'W 119th Street',
  'Mare Pass',
  'Hamilton Place',
  'Piedmont Place',
  'Saddle Run',
  'Tattnall',
  'Hoosier Park',
  'W 219th Street',
  'Sylvan Place',
  'W 73rd Street',
  'Wellbrook',
  'Robert Derrick Drive',
  'Ferris Road',
  'Cherokee Winds',
  'Maske Road',
  'Oak Valley',
  'Osage Avenue',
  'Taunton Hill Road',
  'Cemetary Road',
  'W 141st Street',
  'W 191st Street',
  'Warren Street',
  'FM 1518',
  'Borwick Lane',
  'Bold Cypress',
  'Dell Lane',
  'Green Valley Road',
  'Blanches Walk',
  'W 144th Street',
  'Valhalla',
  'W 50th Street',
  'Peach Lane',
  'Meadow Sage',
  'U I Plaza, West',
  'Brassie Road',
  'Middleton Road',
  'Witten',
  'Smokey Creek',
  'River Run Road',
  'Aegean Way',
  'Sandy Ridge Circle',
  'W 95th Street',
  'Pocono Road',
  'Benjamin Drive',
  'Cove Brook',
  'Oak Place',
  'Academy Lane',
  'Westwood Terrace',
  'White Oak Farm Road',
  'Butterfield Road',
  'Planters Pass',
  'Winton Farm Road',
  'W 202nd Street',
  'Howard Drive',
  'Wildcat Road',
  'Arroyo Verde',
  'W 19th Street',
  'State Route 9a',
  'Cherrywood',
  'Crown Oak Pass',
  'Bear Oak',
  'Dogwood Terrace',
  'Exchange Avenue',
  'Amberly Court',
  'Joan Drive',
  'Owl Creek Road',
  'Estates Drive',
  'Green Bluff Drive',
  'Red Cedar Cove',
  'Enterprise Avenue',
  'Union Square W',
  'Bell North Drive',
  'Meridian Ridge',
  'Aspen Drive',
  'W 47th Street',
  'W 97th Street',
  'Taras Shevchenko Place',
  'Fawn Drive',
  'FM 2252',
  'W 43rd Street',
  'Branch Road, North',
  'Turf Club',
  'Fields Way',
  'Victoria Pt',
  'W 105th Street',
  'Pfeil Street',
  'Capri Lane',
  'Woodcliff Boulevard',
  'Sweet Meadow Road',
  'Alberts Hill Road',
  'Windy Meadows Drive',
  'W 77th Street',
  'Colony Drive',
  'Bonnie Brae Drive',
  'W 31st Street',
  'Frank Baum Drive',
  'Bobcat Lane',
  'Sullivan Street',
  'Wadsworth Terrace',
  'Main Street',
  'Moss Wood',
  'W Thames Street',
  'Pond View Drive',
  'Jet Brook Road',
  'Tampa Road',
  'Staple Street',
  'N Branch Road',
  'Steck Drive',
  'Ivory Creek',
  'Cove Hill',
  'Westchester Drive',
  'Candleberry Drive',
  'W 207th Street',
  'W 146th Street',
  'Pinnacle Drive',
  'Evans Road, North',
  'Cannon Drive',
  'Spicewood',
  'US Highway 6',
  'Black Horse',
  'W 58th Street',
  'Grove Park',
  'Dietz Road',
  'Brush Creek Drive',
  'Wilderness West Road',
  'Red Oak Cove',
  'Pheasant Ridge Road',
  'Ira',
  'Verde Hills',
  'Nettleton Avenue',
  'W 28th Street',
  'Mimosa Drive',
  'Castle Lane',
  'Black Pine',
  'W 185th Street',
  'Saw Mill Road',
  'Blue Forest Drive',
  'W 9th Street',
  'W 61st Street',
  'Big Horn Trail',
  'Medusa',
  'Hawleyville Road',
  'Twin Lane',
  'Stonewall Ridge Road',
  'Schmidt-Craft Lane',
  'Turtle Spring Lane',
  'Cyrus McCormick',
  'W 96th Street',
  'Brenda Francis Street',
  'Round Creek',
  'Webster Drive',
  'Augusta Glade',
  'Tinkerfield Road',
  'Orchard Hill Road',
  'Quailwood Run',
  'Deerfield Boulevard',
  'Saw Mill Ridge Road',
  'W 131st Street',
  'Post Lane',
  'W 189th Street',
  'Hillcrest Drive',
  'Alamo Derby',
  'Megans Circle',
  'Blue Spruce Drive',
  'Clydesdale Run',
  'Nunnawauk Road',
  'Dowman Street',
  'Emerald Pt',
  'Butternut Ridge',
  'W 83rd Street',
  'FM 1976',
  'W 60th Street',
  'W 35th Street',
  'Eli Whitney Road',
  'Whisper Manor',
  'Red Rock Pass',
  'Sunrise Pass',
  'Birch Rise Drive',
  'Greenleaf Farms Road',
  'Sombra Hill',
  'W 48th Street',
  'Mt Nebo Road',
  'Silverton Drive',
  'W 75th Street',
  'Will Cloudsley',
  'Sharp Hill',
  'Shut Road',
  'Aero Avenue',
  'Furlong Gate',
  'Brook Hollow Drive',
  'W 161st Street',
  'W 160th Street',
  'W 124th Street',
  'Curry Drive',
  'Lee Street',
  'Oak Run',
  'Old Farm Hill Road',
  'Shamrock Lane',
  'W 54th Street',
  'Binz-Engleman Road',
  'W 155th Street',
  'Country Club Road',
  'Storm Ridge Road',
  'Beacon',
  'Meyers Avenue',
  'Jacobs Lane',
  'Riva Ridge Circle',
  'Windy Woods Circle',
  'Caballo Valley',
  'Cherry Blossom',
  'Schertz Pkwy',
  'Washington Square E',
  'Holliwell Brg',
  'Bari Drive',
  'Orth Avenue',
  'Fawn Pass',
  'W 53rd Street',
  'Limestone Cove',
  'Crepe Myrtle Lane',
  'W 49th Street',
  'Diamond Drive',
  'Interstate 35 Access Road',
  'W 67th Street',
  'Chapel Hill',
  'Firestone Drive',
  'Olympia Pkwy',
  'Blakeslee Drive',
  'Greenshire Drive',
  'Boulevard',
  'Hanover Road',
  'Bramble Trail',
  'W 116th Street',
  'John Beach Road',
  'Roy Richard Drive',
  'Hillside Lane',
  'Tractor Pass',
  'Taunton Ridge Road',
  'W 149th Street',
  'Galloping Oak',
  'W 24th Street',
  'Poor House Road',
  'Ty Lindstrom',
  'T',
  'Stuart Drive',
  'Crested Hts',
  'Gate Creek Lane',
  'W 106th Street',
  'W 86th Street',
  'Oak Tree Circle',
  'Thames Street',
  'Old Town Road',
  'Arroyo del Sol',
  'Mitchell Avenue',
  'Roxanne Lane',
  'Pecan',
  'Rosewell Place',
  'Pawlin Drive',
  'Maple Drive',
  'Gaylor Drive',
  'W 152nd Street',
  'Horseshoe Cove',
  'W 217th Street',
  'W 25th Street',
  'Fairchild Drive',
  'Derby Vis',
  'Pond Apple',
  'Ox Hill Road',
  'St Lukes Place',
  'Simm Lane',
  'W 16th Street',
  'W 173rd Street',
  'Windy Falk',
  'Gamble Street',
  'Cedar Circle',
  'Washington Square S',
  'W 32nd Street',
  'W 178th Street',
  'W 213th Street',
  'County Road 318',
  'St Nicholas Avenue',
  'Emerald Gate',
  'Beaufort Boulevard',
  'Wensledale Drive',
  'Commerce Road',
  'Birch Street',
  'W U I Plaza',
  'Trophy Club',
  'Elizabeth Street',
  'Vestry Street',
  'W 91st Street',
  'Forest Way',
  'Lotus Park',
  'W 103rd Street',
  'Olde Moss Street',
  'Glenn Lane',
  'Weir Road',
  'St James Place',
  'Silverton',
  'Scudder Road',
  'Valencia Lane',
  'Wayward Pass',
  'Turkey Hill Terrace',
  'Pillory Pointe',
  'Guneva Drive',
  'Wright Avenue',
  'Lincoln Drive',
  'Cottonwood Drive',
  'Circle Star Road',
  'W 3rd Street',
  'Gwendolyn Way',
  'Wild Cherry',
  'Thelonius Monk Circle',
  'W 80th Street',
  'Trainer Hale Road',
  'Blackman Road',
  'Twocourts Way',
  'Sealand Drive',
  'Dylan Drive',
  'W 145th Street',
  'Twin Point Creek',
  'US Route 9',
  'Raceway Downs',
  'Triborough Plaza',
  'Wiederstein Road',
  'Berry Park',
  'Prospect Terrace',
  'Great Hill Road',
  'Chloe Court',
  'State Highway 25',
  'State Street',
  'W 153rd Street',
  'W 134th Street',
  'Washington Place',
  'Smoke Rise Ridge',
  'Blakely Street',
  'Dusty Xing',
  'Briarwood',
  'Two Courts Way',
  'Macon Avenue',
  'Madrone Drive',
  'Wedgewood Court',
  'Valley Oak',
  'Belmont Ridge',
  'Natalie Way',
  'W 14th Street',
  'Oak Ridge Drive',
  'Meadow View Drive',
  'Thurber Drive',
  'Melissa Court',
  'Hill Lane',
  'Covered Bridge Road',
  'Rose Sharon Drive',
  'Hallie Hts',
  'Wills Road',
  'W 175th Street',
  'W 170th Street',
  'W 72nd Street',
  'Cedarwood',
  'Cold Spring Road',
  'Oakmont Downs',
  'W 205th Street',
  'Bellister Street',
  'Circle Oak Drive',
  'Tiemann Place',
  'Twist Hill Road',
  'Legacy Oaks Pkwy',
  'W 100th Street',
  'Plaza Drive',
  'W 45th Street',
  'Glenmor Drive',
  'Lockwood Lane',
  'W 179th Street',
  'Melville Lane',
  'Spanish Oak Drive',
  'Muntjac',
  'W 30th Street',
  'Beck Street',
  'Oak Park',
  'W 110th Street',
  'Irish Creek Road',
  'Faulkner Drive',
  'Lafayette Trail',
  'Old Hawleyville Road',
  'Cloverleaf Drive',
  'W 168th Street',
  'Whippoorwill Hill Road',
  'Juniper Road',
  'Shady Oak Lane',
  'Union Creek Drive',
  'Bending Brook Drive',
  'W 92nd Street',
  'Southbrook Lane',
  'W 181st Street',
  'Woman Hollering Road',
  'Greenwood',
  'Washington Hill Road',
  'Kentucky Ridge',
  'W 107th Street',
  'W 118th Street',
  'Sutton Pl S',
  'Whitewood Road',
  'Fred Couples',
  'Reservoir Road',
  'Trinity Place',
  'Irola Drive',
  'Live Oak Road, East',
  'W 10th Street',
  'Woodlawn Farms',
  'Cotton King',
  'Boxer Pass Drive',
  'W 208th Street',
  'Cherry Tree Drive',
  'Willow Top Drive',
  'W 46th Street',
  'W 89th Street',
  'Union Square E',
  'Cobblestone Lane',
  'W 122nd Street',
  'W 183rd Street',
  'Obtuse Road',
  'Deer Run',
  'Rooster Run',
  'Painted River',
  'Valley Forge',
  'Ashley Park',
  'W 186th Street',
  'Purdy Station Road',
  'W 151st Street',
  'Thayer Street',
  'Chippewa Boulevard',
  'Roseman Ridge',
  'Linda Court',
  'Cove Crst',
  'Whitaker',
  'York Lane',
  'W 33rd Street',
  'Rustic Acres',
  'W 36th Street',
  'Botsford Hill Road',
  'Wanamaker Place',
  'Red Bud Circle',
  'S Main Street',
  'Ginsberg Drive',
  'W 187th Street',
  'Woodland Oaks Drive',
  'Cedarhill Road',
  'Martin Street',
  'Granite Field',
  'Wiley Lane',
  'Mill Cross Lane',
  'Royal Palm Avenue',
  'Newning',
  'W 159th Street',
  'Dove Meadows',
  'W 56th Street',
  'Main Street, South',
  'Mount Pleasant Terrace',
  'Meade Street',
  'Baldwin Road',
  'W 177th Street',
  'W 12th Street',
  'Marietta Lane',
  'Corporate Drive',
  'Red River Lane',
  'Utopia Boulevard',
  'Farm Ridge Road, West',
  'Riedel',
  'Ridge Road',
  'Stuyvesant Walk',
  'W 26th Street',
  'W 128th Street',
  'Linda Lee Lane',
  'Crest Oak Lane',
  'Stone Fence Lane',
  'Interstate 10 Access Road',
  'Lori Lynn Drive',
  'W 11th Street',
  'Summer Street',
  'Hundred Acres Road',
  'Budd Drive',
  'W 57th Street',
  'Emerson Pass',
  'Jangling Plain Road',
  'Oakdale Drive',
  'Bear Hills Road',
  'Pecks Lane',
  'Pecan Grove Road',
  'Swamp Road',
  'Ellerston Boulevard',
  'W 143rd Street',
  'W 93rd Street',
  'Winslow Road',
  'S Fairfield Circle',
  'W 176th Street',
  'Fox Run Lane',
  'W Broadway',
  'Ridge Peak Drive',
  'Spring Meadow Lane',
  'Aunt Park Lane',
  'Winding Brook Road',
  'Lands End Road',
  'Betty Roberts Drive',
  'Dodgingtown Road',
  'W 61 Drive',
  'Deep Brook Road',
  'Poplar Grove Lane',
  'Newrock Creek',
  'Dinglebrook Lane',
  'Morning Rose',
  'Saratoga Knoll',
  'Cotton Patch',
  'Jacklin Road',
  'E Live Oak Road',
  'Georges Hill Road',
  'Cibolo Valley Drive',
  'Stuyvesant Street',
  'Fulton Drive',
  'Oak Bloom',
  'Pebble Run',
  'Henry Ford Drive',
  'Gusty Pt',
  'Homestead Lane',
  'Equestrian Ridge',
  'W 115th Street',
  'State Route 343',
  'W 212nd Street',
  'Berry Trce',
  'Webster Place',
  'Emmet Park',
  'E Evans Road',
  'W 90th Street',
  'W 172nd Street',
  'Hillview Lane',
  'United Nations Plaza',
  'Rimrock Trail',
  'Baldwin Park',
  'Newfield Lane',
  'Sugar Hill Road',
  'Mountain View Drive',
  'University Place',
  'W 69th Street',
  'W 137th Street',
  'Villa Elm',
  'Hall Lane',
  'Transverse Road 4',
  'Parmalee Park Lane',
  'Arroyo Seco',
  'W 117th Street',
  'State Highway 42',
  'Times Square',
  'Meadow Lane',
  'Betty Joe Lane',
  'Dogwood Lane',
  'Mid-Cities Pkwy',
  'St Vincents Square',
  'Ventura Boulevard',
  'W 71st Street',
  'W 140th Street',
  'Robert Stevens Drive',
  'Windy Pt',
  'Jonas Drive',
  'W 37th Street',
  'Runaway Crown',
  'Mourning Dove',
  'Pine Tree Hill Road',
  'Concord Ridge Road',
  'W 78th Street',
  'Ogelthorpe',
  'Arroyo Sierra',
  'State Street Plaza',
  'W 64th Street',
  'White Pine Drive',
  'McAlister',
  'Turkey Hill Road',
  'Dartmouth Cove',
  'W 62nd Street',
  'Theatre Alley',
  'W 212th Street',
  'Mile Hill Road',
  'Nell Deane Boulevard',
  'Abbeville Drive',
  'Pumpkin Lane',
  'Vandam Street',
  'Hidden Grove Lane',
  'W 167th Street',
  'Ashford Lane',
  'Horse Brg',
  'Bryan Lane',
  'Park Fair Gate',
  'Hemingway Trail',
  'Richardson Drive',
  'Old Stream Road',
  'Cedar Lane',
  'W 29th Street',
  'Arroyo Loma',
  'Whitetail',
  'Golden Pond Road',
  'W 125th Street',
  'Greenbriar Lane',
  'Well Drive',
  'Cascade',
  'Wall Street',
  'Button Shop Road',
  'Ashley Oak Drive',
  'Ridge Drive, North',
  'W 121st Street',
  'W Fork Drive',
  'Silvertree Boulevard',
  'Copper Creek Circle',
  'Elm Drive 2',
  'Woodland Village Court',
  'Kay Lane',
  'Bill Hass',
  'Silver City Road',
  'Cross Brook Road',
  'Alton Boulevard',
  'Overlook Drive',
  'Rosespur Park',
  'W 12nd Street',
  'Lorraine Drive',
  'Callaway Park',
  'Stanton Street',
  'Zuehl',
  'Grand Place',
  'Aviation Avenue',
  'Assembly Circle',
  'Midwell',
  'Oak Street',
  'Sedor Lane',
  'Judith Ann Drive',
  'Lauran Park Drive',
  'W 18th Street',
  'W 21st Street',
  'Sanford Road',
  'W Houston Street',
  'Gemsbuck Falls',
  'Biltmore Manor',
  'Guy Guisborne',
  'W 218th Street',
  'W 150th Street',
  'Stuyvesant Loop E',
  'Windy Ridge Trail',
  'New Caverns Road',
  'Judd Road',
  'Cadey Lane',
  'Rock Ridge Road',
  'Dusty Lane',
  'Mount Laurel',
  'W 94th Street',
  'Hitfield Road',
  'Wards Is Road',
  'Ashley Meadow',
  'W 81st Street',
  'Crest Oak',
  'W Washington Place',
  'Old Hattertown Road',
  'Bridgemont Place',
  'Hastings Park',
  'Stampede Ranch',
  'Lee Trevino',
  'Richmond Drive',
  'Floral Hts',
  'Melody Lane',
  'Green Tee',
  'W 112nd Street',
  'Dearborn Drive',
  'W 164th Street',
  'W 213rd Street',
  'Borgfeld Road',
  'Graytown Road',
  'Cedar Hill Road',
  'W 206th Street',
  'W 8th Street',
  'Running Hollow',
  'Twin Branch',
  'Green Knolls Lane',
  'Gila Bend',
  'Willow Oak',
  'Crary Meadow',
  'Turncreek Lane',
  'Peridot',
  'Hawthorne Hill Road',
  'Berry Creek Drive',
  'W 44th Street',
  'Lantern Drive',
  'Mulberry Drive',
  'Arrowhead Lane',
  'Quiet Creek Drive',
  'W 111st Street',
  'Evans Road',
  'W End Avenue',
  'Old Bethel Road',
  'Cedar Brg',
  'Wooded Trail',
  'Boggs Hill Road',
  'Rock Hill Vw',
  'Brookwood Drive',
  'Nottingshire',
  'W 154th Street',
  'W 126th Street',
  'W 132nd Street',
  'Blue Moon Spring',
  'W 156th Street',
  'Interlachen',
  'Whisper Pt',
  'Commercial Place',
  'Putnam Drive',
  'W 136th Street',
  'Washington Place, West',
  'Split Rock Road',
  'N Evans Road',
  'Turquoise',
  'W 165th Street',
  'Canyon Oak',
  'Wadsworth Avenue',
  'Ridge Canyon Drive',
  'Stuyvesant Oval',
  'Susan Lane',
  'W 109th Street',
  'Sugar Lane',
  'Bent Tree Drive',
  'Partridge Lane',
  'Arlyn Ridge Road',
  'Echo Valley Road',
  'Pentonville Drive',
  'Vermilyea Avenue',
  'James Agee Drive',
  'W 55th Street',
  'Towns End Road',
  'Thomas Wolfe',
  'Taunton Lane',
  'Tates Drive',
  'W 68th Street',
  'Camaron Woods',
  'Hitch Road',
  'Shaefer Road',
  'Sutton Place',
  'William Scarbrough',
  'Arbor Dawn Lane',
  'St Johns Lane',
  'W 98th Street',
  'Chasefield Drive',
  'Laurel Lane',
  'E FM 78',
  'Hull Street',
  'W 76th Street',
  'Hiram Lane',
  'Fair Lane',
  'Huntingtown Road',
  'Franklin Court',
  'W 171st Street',
  'Deephaven Drive',
  'Papoose Hill Road',
  'Meadow Creek Drive',
  'River Road',
  'Laurel Road',
  'Sylvan Terrace',
  'McBride Brg',
  'Summit Drive',
  'Diamond Falls',
  'Sutton Square',
  'Phyllis Lane',
  'Zuehl Street',
  'Emerald Bluff',
  'Narragansett Trail',
  'Karen Boulevard',
  'W 215th Street',
  'Blue Sky Road',
  'Williams Lane',
  'Delaware Park',
  'Sunshine Falls Drive',
  'W 184th Street',
  'W 13th Street',
  'Old Castle Drive',
  'Ashley Park Circle',
  'Quaker Lane',
  'Pastors Walk',
  'Old Farm Road',
  'W 51st Street',
  'The Old Road',
  'W 74th Street',
  'Rhodius Lane',
  'Washington Square W',
  'Kenan Road',
  'Black Oak Drive',
  'Thomas Edison Drive',
  'Lake Road',
  'Woodland Village Place',
  'Varick Street',
  'Hawthorne Pass',
  'Ashley Meadows',
  'Chelsea Place',
  'Saratoga Place',
  'Patrick Henry',
  'Washbrook Road',
  'Currituck Road',
  'Kingsland Circle',
  'W 112th Street',
  'W 52nd Street',
  'Cherokee Hill',
  'Redbud Way',
  'Will Rogers Drive',
  'Ethan Allen Road',
  'Cactus Patch',
  'Vesey Street',
  'Street Viaduct, South',
  'Sherlock Lane',
  'W 142nd Street',
  'Covered Brg',
  'Idlewood',
  'Tree Crown',
  'Treeline Acres',
  'Head of Meadow Road',
  'Sherman Drive',
  'Gemsbuck Hill',
  'Olde Moss',
  'Phoenix Avenue',
  'Passerina Spring',
  'Brooks Avenue',
  'Mile Hill Road S',
  'W 196th Street',
  'FM 78',
  'Broughton',
  'W 4th Street',
  'Morningmist Lane',
  'Mount Nebo Road',
  'Liberty Horse',
  'W 42nd Street',
  'Ware Seguin Road',
  'Royal Horse',
  'Lazybrook Road',
  'Church Street',
  'W 220th Street',
  'Stallion Ranch',
  'Florence Grove',
  'Pleasant Hill Road',
  'Black Walnut Drive',
  'St Nicholas Place',
  'Lindberg Avenue',
  'Driftway Drive',
  'Flagstone Drive',
  'Flat Swamp Road',
  'Triangle Ranch',
  'Cottage Park',
  'Angora Trail',
  'W 203rd Street',
  'Windy Meadow Court',
  'W 113rd Street',
  'Star Light Lane',
  'Patricia Lane',
  'White Wing',
  'W 63rd Street',
  'Maltbie Road',
  'Walker Street',
  'Live Oak Road',
  'Taylor Made Circle',
  'Bushbuck Way',
  'Tri County Pkwy',
  'Taunton Lake Drive',
  'Birchwood Circle',
  'W 111th Street',
  'Washington Hill',
  'Summer Haven Lane',
  'Berry Patch',
  'W 11st Street',
  'W 102nd Street',
  'Tunnel Road',
  'Dover Circle',
  'Royal Palm',
  'Timber Lane',
  'Knollwood Drive',
  'W 201st Street',
  'FM 3009',
  'Silver Oak Road',
  'W 216th Street',
  'Marigold Lane',
  'Stone Street',
  'Drayton',
  'Willow Brook Lane',
  'W 138th Street',
  'W 108th Street',
  'Enchanted Farm',
  'Yucca Park',
  'Key Rock Road',
  'Cog Hill',
  'W 82nd Street',
  'Elm',
  'W 133rd Street',
  'Merlins Lane',
  'Gettysburg Drive',
  'Bridle Path Trail',
  'Primrose Lane',
  'W 166th Street',
  'Lincoln Road',
  'Vona Way',
  'W 61st Drive',
  'Beaver Dam Road',
  'Savannah Drive',
  'St Clair Place',
  'Toddy Hill Drive',
  'Vanderbilt Avenue',
  'Platts Hill Road',
  'W 88th Street',
  'Times Square Plaza',
  'Turfway Park',
  'Scenic View Drive',
  'Sylvan Court',
  'Triton',
  'Fresno Place',
  'W 182nd Street',
  'Morris Road',
  'W 79th Street',
  'Roosevelt Drive',
  'Old Tavern Road',
  'W 169th Street',
  'Daniel\'s Hill',
  'Meadow Ore',
  'Wendover Road',
  'Dartmoor Drive',
  'Doerr Lane',
  'Short Hill Road',
  'W 139th Street',
  'W 130th Street',
  'Tudor City Place',
  'Drummers Lane',
  'Fir Circle',
  'W 192nd Street',
  'Gamble',
  'Woodbridge Way',
  'Meadow Brook Road',
  'Old Purdy Station Road',
  'Colts Bay',
  'W 17th Street',
  'Farrell Road',
  'Parmalee Park Place',
  'Guada Coma Drive',
  'W 23rd Street',
  'Old Castle Hill Road',
  'Trumbull Drive',
  'Destiny Acres',
  'Cabana Drive',
  'Fallen Stone',
  'Arthurs Court',
  'Richmond Road',
  'W 39th Street',
  'Arroyo Dorado',
  'Antler Drive',
  'Plumtrees Road',
  'W 158th Street',
  'Stony Brook Road',
  'Olive Avenue',
  'Sycamore',
  'Sycamore Drive',
  'Summitt Road',
  'W 65th Street',
  'Prospect Drive',
  'W Farm Ridge Road',
  'Doggintown Road',
  'Thompson Street',
  'W 148th Street',
  'Jane Adams Drive',
  'Jasmine Drive',
  'Old Gate Lane',
  'Point O Rocks Road',
  'Pfeil Road',
  'Echo Lane',
  'Washington Mews',
  'Retama Crown',
  'Sawmill Road',
  'Rolling Brook Lane',
  'Dusty Fields',
  'John E Peterson Boulevard',
  'Berry Way',
  'W 41st Street',
  'Crosswind Court',
  'Crossbranch Drive',
  'N Ridge Drive',
  'Windway Creek',
  'Tory Lane',
  'Orchard Lane',
  'Nu Pecan Grove',
  'Thoreau Trail',
  'Mossy Lane',
  'Autumn Ridge Road',
  'Pebble Road',
  'Madison Square',
];

module.exports = streets;