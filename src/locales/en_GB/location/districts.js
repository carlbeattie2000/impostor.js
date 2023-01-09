const districts = [
  'Birmingham',
  'Leeds',
  'Sheffield',
  'Cornwall',
  'Manchester',
  'Buckinghamshire',
  'Bradford',
  'County Durham',
  'Wiltshire',
  'Liverpool',
  'Bristol',
  'Kirklees',
  'Barnet',
  'Bournemouth, Christchurch and Poole',
  'Croydon',
  'Cheshire East',
  'Dorset',
  'Coventry',
  'Leicester',
  'Newham',
  'Wakefield',
  'Cheshire West and Chester',
  'Ealing',
  'East Riding of Yorkshire',
  'Enfield',
  'Nottingham',
  'Bromley',
  'Brent',
  'Wandsworth',
  'Wigan',
  'Sandwell',
  'Lambeth',
  'Tower Hamlets',
  'Wirral',
  'Shropshire',
  'Northumberland',
  'Dudley',
  'Southwark',
  'Doncaster',
  'Hillingdon',
  'Lewisham',
  'Redbridge',
  'Newcastle upon Tyne',
  'Stockport',
  'Brighton & Hove',
  'Central Bedfordshire',
  'Greenwich',
  'Bolton',
  'Walsall',
  'South Gloucestershire',
  'Hackney',
  'Medway',
  'Sunderland',
  'Waltham Forest',
  'Sefton',
  'Hounslow',
  'Camden',
  'Milton Keynes',
  'Haringey',
  'Rotherham',
  'Wolverhampton',
  'Plymouth',
  'Westminster',
  'Kingston upon Hull',
  'Havering',
  'Salford',
  'Derby',
  'Stoke-on-Trent',
  'Southampton',
  'Harrow',
  'East Suffolk',
  'Bexley',
  'Barnsley',
  'Islington',
  'Trafford',
  'Oldham',
  'Tameside',
  'Rochdale',
  'Swindon',
  'Solihull',
  'North Somerset',
  'Portsmouth',
  'Luton',
  'Barking and Dagenham',
  'Calderdale',
  'York',
  'Warrington',
  'North Tyneside',
  'Merton',
  'Sutton',
  'Peterborough',
  'Gateshead',
  'Richmond upon Thames',
  'Stockton-on-Tees',
  'Colchester',
  'Bath and North East Somerset',
  'Herefordshire',
  'Bury',
  'Basildon',
  'Charnwood',
  'Hammersmith and Fulham',
  'Southend-on-Sea',
  'St Helens',
  'New Forest',
  'Telford and Wrekin',
  'West Suffolk',
  'Chelmsford',
  'Huntingdonshire',
  'Kingston upon Thames',
  'Basingstoke and Deane',
  'Thurrock',
  'Bedford',
  'North Lincolnshire',
  'Maidstone',
  'Wokingham',
  'South Somerset',
  'Canterbury',
  'Reading',
  'Wealden',
  'Harrogate',
  'Arun',
  'North East Lincolnshire',
  'South Cambridgeshire',
  'West Berkshire',
  'Kensington and Chelsea',
  'Somerset West and Taunton',
  'Dacorum',
  'Braintree',
  'Oxford',
  'Windsor and Maidenhead',
  'King\'s Lynn and West Norfolk',
  'Mid Sussex',
  'South Tyneside',
  'Knowsley',
  'Cherwell',
  'Swale',
  'East Hertfordshire',
  'Blackburn with Darwen',
  'Slough',
  'Guildford',
  'Reigate and Banstead',
  'St Albans',
  'Tendring',
  'East Devon',
  'Lancaster',
  'Horsham',
  'Warwick',
  'Preston',
  'South Kesteven',
  'South Oxfordshire',
  'Thanet',
  'Isle of Wight',
  'East Lindsey',
  'Middlesbrough',
  'South Norfolk',
  'Norwich',
  'Breckland',
  'Blackpool',
  'Stafford',
  'Redcar and Cleveland',
  'Ipswich',
  'Elmbridge',
  'Torbay',
  'Vale of White Horse',
  'Teignbridge',
  'Eastleigh',
  'North Hertfordshire',
  'Tonbridge and Malling',
  'Epping Forest',
  'Exeter',
  'Broadland',
  'Stratford-on-Avon',
  'Ashford',
  'Nuneaton and Bedworth',
  'Newcastle-under-Lyme',
  'Wychavon',
  'Halton',
  'Gloucester',
  'Amber Valley',
  'Ashfield',
  'Waverley',
  'Havant',
  'Test Valley',
  'Winchester',
  'Cambridge',
  'Sedgemoor',
  'Welwyn Hatfield',
  'Bracknell Forest',
  'Newark and Sherwood',
  'East Hampshire',
  'Chichester',
  'Sevenoaks',
  'Stroud',
  'East Staffordshire',
  'Rushcliffe',
  'Tunbridge Wells',
  'Chorley',
  'Dover',
  'Gedling',
  'Bassetlaw',
  'North Kesteven',
  'Cheltenham',
  'Fareham',
  'Mendip',
  'Erewash',
  'West Lancashire',
  'Broxtowe',
  'Hinckley and Bosworth',
  'Folkestone and Hythe',
  'Dartford',
  'South Staffordshire',
  'Crawley',
  'Wyre',
  'South Ribble',
  'West Oxfordshire',
  'Worthing',
  'Mansfield',
  'Rugby',
  'Scarborough',
  'Carlisle',
  'South Derbyshire',
  'Gravesham',
  'Darlington',
  'South Lakeland',
  'Hertsmere',
  'Chesterfield',
  'North Norfolk',
  'Lichfield',
  'Mid Suffolk',
  'Eastbourne',
  'North West Leicestershire',
  'Lewes',
  'Fenland',
  'Blaby',
  'North East Derbyshire',
  'Wyre Forest',
  'Worcester',
  'Woking',
  'Cannock Chase',
  'Bromsgrove',
  'Spelthorne',
  'Great Yarmouth',
  'Lincoln',
  'Staffordshire Moorlands',
  'Allerdale',
  'Broxbourne',
  'North Devon',
  'Hart',
  'Watford',
  'Rother',
  'West Lindsey',
  'South Holland',
  'Tewkesbury',
  'Rushmoor',
  'Harborough',
  'Hartlepool',
  'Three Rivers',
  'High Peak',
  'Hastings',
  'Pendle',
  'Babergh',
  'Hambleton',
  'Uttlesford',
  'Selby',
  'Castle Point',
  'Cotswold',
  'East Cambridgeshire',
  'Runnymede',
  'Surrey Heath',
  'Burnley',
  'Tandridge',
  'Stevenage',
  'Rochford',
  'Mole Valley',
  'Harlow',
  'South Hams',
  'Forest of Dean',
  'Redditch',
  'Gosport',
  'Mid Devon',
  'Hyndburn',
  'Fylde',
  'Epsom and Ewell',
  'Bolsover',
  'Malvern Hills',
  'Brentwood',
  'Tamworth',
  'Derbyshire Dales',
  'Rossendale',
  'Boston',
  'Torridge',
  'Copeland',
  'Barrow-in-Furness',
  'North Warwickshire',
  'Maldon',
  'Adur',
  'Ribble Valley',
  'Craven',
  'Oadby and Wigston',
  'West Devon',
  'Ryedale',
  'Richmondshire',
  'Eden',
  'Melton',
  'Rutland',
  'City of London',
  'Isles of Scilly',
];

module.exports = districts;