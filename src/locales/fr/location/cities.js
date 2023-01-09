const cities = [
  'SAINT CHABRAIS',
  'CHATILLON-SUR-LOIRE',
  'LAQUEUILLE',
  'LA VILLE AUX BOIS LES PONT',
  'BARBONVILLE',
  'VINEUIL',
  'CROUY SUR COSSON',
  'GOURDON',
  'THISE',
  'MEGRIT',
  'QUESNOY-SUR-AIRAINES',
  'EPIAIS-RHUS',
  'MIJANES',
  'MALANDRY',
  'CAVRON-SAINT-MARTIN',
  'CHEVANNES CHANGY',
  'CHAURAY',
  'ETELFAY',
  'LA GARDE ADHEMAR',
  'ROTS',
  'DESTRY',
  'SELLE-CRAONNAISE (LA)',
  'PIERRE PERCEE',
  'FONTENELLE',
  'REMOIVILLE',
  'FEUGES',
  'NEOULES',
  'SAINTE-HELENE-DU-LAC',
  'AMATHAY-VESIGNEUX',
  'MARQUIXANES',
  'ETAIN',
  'SAINT-PIERRE-AZIF',
  'SAIN-BEL',
  'LIMEUX',
  'TISSEY',
  'TAVERS',
  'HUISSEAU EN BEAUCE',
  'CAUNES MINERVOIS',
  'SAINT MARTIN',
  'AUBOUE',
  'VILLERS-TOURNELLE',
  'LUCENAY',
  'VILLEFONTAINE',
  'CREUZIER-LE-NEUF',
  'BREMES',
  'DOMPIERRE-SUR-CHARENTE',
  'ERNOLSHEIM BRUCHE',
  'BRESSUIRE',
  'VERNEUIL',
  'MUR-DE-BARREZ',
  'ST-MARTIN-DE-SEIGNANX',
  'MONTARLOT',
  'COLLANDRES QUINCARNON',
  'PAS-DE-JEU',
  'LA FRANCHEVILLE',
  'LE VERGER',
  'BREILLY',
  'BOURG-DUN',
  'ONEUX',
  'MONTCEAUX LES MEAUX',
  'LA FERTE HAUTERIVE',
  'PRENOUVELLON',
  'COUPTRAIN',
  'AIZY-JOUY',
  'SEILHAC',
  'CONCEVREUX',
  'VIETHOREY',
  'COISE',
  'GRUISSAN',
  'SONNEVILLE',
  'VIEILLE-EGLISE-EN-YVELINES',
  'BOISMONT',
  'MENETOU-COUTURE',
  'CAVALAIRE-SUR-MER',
  'VUILLECIN',
  'CABRIERES-D AVIGNON',
  'GRAVAL',
  'VILLECHAUVE',
  'PUYLAGARDE',
  'LA CAPELLE',
  'FERCE',
  'LANCHERES',
  'BENNEY',
  'MONTBAZENS',
  'MONTALBA LE CHATEAU',
  'ST SYMPHORIEN DES BRUYERES',
  'NEUVILLE-LES-DAMES',
  'VILLERS DEVANT LE THOUR',
  'MONTRIEUX EN SOLOGNE',
  'LAY',
  'MONTAIGU-DE QUERCY',
  'FONTENERMONT',
  'GISSEY-SUR-OUCHE',
  'DOURDAN',
  'MARSONNAS',
  'NOUILLY',
  'LES NONIERES',
  'LA FREISSINOUSE',
  'MAISONNAIS',
  'SAINT-JUST-SAUVAGE',
  'SAUMERAY',
  'NEAUPHLETTE',
  'XAMONTARUPT',
  'LONGEVELLE',
  'BLOT-L EGLISE',
  'BERGERES-SOUS-MONTMIRAIL',
  'BATILLY',
  'ROUCOURT',
  'MOUAIS',
  'EPUISAY',
  'FEREBRIANGES',
  'PERIERS',
  'SAINT-JEAN-CAP-FERRAT',
  'ARRENES',
  'BEAUDEAN',
  'MONTMARTIN LE HAUT',
  'ETRUN',
  'ANNEBAULT',
  'LOON-PLAGE',
  'VILLEVAUDE',
  'THAROT',
  'CLINCHAMPS-SUR-ORNE',
  'LA CAUCHIE',
  'MERY SUR SEINE',
  'AZANNES ET SOUMAZANNES',
  'BUJALEUF',
  'CHATEL-MONTAGNE',
  'ROCQUEFORT',
  'GELAUCOURT',
  'MOYAUX',
  'LE BAR-SUR-LOUP',
  'COLLIAS',
  'DENEUVRE',
  'BUC',
  'SAINT-VITTE',
  'ALLEVES',
  'LA BREE LES BAINS',
  'ARFEUILLES',
  'MORLEY',
  'MESSEY-SUR-GROSNE',
  'MONTAGNAC',
  'LA CROIX EN CHAMPAGNE',
  'SAINS MORAINVILLERS',
  'SAGONNE',
  'VILLEMEREUIL',
  'YZOSSE',
  'AUBERTIN',
  'MALVILLE',
  'BREIDENBACH',
  'HUEZ',
  'VAULX-MILIEU',
  'UTTWILLER',
  'BAZOCHES LES BRAY',
  'VEZELAY',
  'TRUN',
  'BESSIERES',
  'LONGCOCHON',
  'THOREY',
  'AUBERMESNIL AUX ERABLES',
  'WILLERONCOURT',
  'SONGESON',
  'RETY',
  'SAINT GEORGES DE LA COUEE',
  'ASPRIERES',
  'SAINT-AMAND',
  'HARPONVILLE',
  'HINGES',
  'PONT-SAINT-MARTIN',
  'SALLES-DE-VILLEFAGNAN',
  'CHAULNES',
  'COMBLES',
  'CARLA-BAYLE',
  'SAINT-GERMAIN-DU-PUY',
  'PEAS',
  'APPENAI-SOUS-BELLEME',
  'BETTENCOURT-SAINT-OUEN',
  'NICEY SUR AIRE',
  'LA CHAPELLE BL ST MARTIN',
  'VAUDOUE (LE)',
  'ESPERAZA',
  'MONTSUZAIN',
  'MAROEUIL',
  'WASSY',
  'BELMESNIL',
  'TREMBLAY',
  'AMEUGNY',
  'CHATEAUBOURG',
  'AUTHON EBEON',
  'VARENNES-LES-NARCY',
  'AUBILLY',
  'EPANNES',
  'LIOMER',
  'QUINCY LANDZECOURT',
  'MUDAISON',
  'TREMOINS',
  'GRATTEPANCHE',
  'CHAPELLE-NAUDE (LA)',
  'MARIAC',
  'CHATEAUVIEUX LES FOSSES',
  'FRESNOIS-LA-MONTAGNE',
  'ANDAINVILLE',
  'BEAUTOR',
  'SANNES',
  'JARGEAU',
  'BARNAS',
  'SAINT-QUENTIN-DE-BARON',
  'RAON L ETAPE',
  'JUSSARUPT',
  'SAINT-LIN',
  'LA NEUVILLE-LES-WASIGNY',
  'SAINT-MACAIRE-EN-MAUGES',
  'SAINT-BLIN',
  'FRAQUELFING',
  'VAUNAVEYS LA ROCHETTE',
  'MORTEFONTAINE EN THELLE',
  'DELINCOURT',
  'MESNIL-VILLEMENT (LE)',
  'BETTANCOURT-LA-LONGUE',
  'ROUVIGNIES',
  'ESBARRES',
  'GOULIEN',
  'VITTEL',
  'VILLERS LES NANCY',
  'SOURCIEUX-LES-MINES',
  'VALLIERES',
  'BREUILLET',
  'MOIDIEU-DETOURBE',
  'MARQUEFAVE',
  'AYDIUS',
  'SAINT-PANCRACE',
  'LADIGNAC-LE-LONG',
  'LES ARCS',
  'AUBIN-SAINT-VAAST',
  'SAINT BRANCHS',
  'NEUVILLE-SUR-OISE',
  'SAINT-BENOIST-SUR-MER',
  'LANDEVANT',
  'VILLELONGUE D AUDE',
  'PLESSIS-FEU-AUSSOUS (LE)',
  'LE TREVOUX',
  'HIREL',
  'CERNION',
  'SAUVETERRE-DE-GUYENNE',
  'PETERSBACH',
  'ANGERVILLE-L ORCHER',
  'BAVILLIERS',
  'GINGSHEIM',
  'SAINT-ROMAIN-LE-PUY',
  'TAGNON',
  'BELLENGREVILLE',
  'LIEUCHE',
  'LANEUVILLE-AU-PONT',
  'POUDIS',
  'LE FUILET',
  'PEZE LE ROBERT',
  'DORANS',
  'DAMMARTIN-SUR-TIGEAUX',
  'DOMATS',
  'PORNIC',
  'VANDENESSE',
  'CASEFABRE',
  'PAYRE',
  'MHERE',
  'GRUCHET-SAINT-SIMEON',
  'SERANVILLE',
  'REMOULINS',
  'ESPARRON',
  'VIEVY',
  'BOUTTENCOURT',
  'ELLON',
  'LEMBACH',
  'PRECY NOTRE DAME',
  'DAMVILLE',
  'BEGARD',
  'SIBIVILLE',
  'MARTIGNY COURPIERRE',
  'TILLOY-LES-CONTY',
  'MOISSELLES',
  'SAINT-JUST',
  'MARSON',
  'VIUZ-EN-SALLAZ',
  'CERELLES',
  'BILLY-LES-CHANCEAUX',
  'MASSANGIS',
  'PISY',
  'PONT-SALOMON',
  'LAMOTTE BEUVRON',
  'CONIE MOLITARD',
  'EPIEZ SUR MEUSE',
  'CHAVEYRIAT',
  'WILLERWALD',
  'SAINT LO',
  'SAINT-ROMPHAIRE',
  'ISLES-LES-MELDEUSES',
  'ETRICOURT-MANANCOURT',
  'HARCANVILLE',
  'LAINVILLE-EN-VEXIN',
  'SAINT-NECTAIRE',
  'SAUJON',
  'LA CHAISE DIEU',
  'AUGNAT',
  'SAINT-PIERRE-QUIBERON',
  'CHOISEY',
  'ST-MAURICE-DE-CAZEVIEILLE',
  'JUZANVIGNY',
  'SOUVIGNY DE TOURAINE',
  'CRAONNE',
  'SAINT HONORE LES BAINS',
  'CHUELLES',
  'LA HOUSSAYE',
  'MONTMEDY',
  'JOBOURG',
  'CURTIL-SAINT-SEINE',
  'AUTHIEULE',
  'BLAISY-BAS',
  'LEAZ',
  'CHAMONIX MONT BLANC',
  'LA SUZE SUR SARTHE',
  'CASTELJALOUX',
  'ATTILLY',
  'UNCHAIR',
  'BREVILLY',
  'SAINT-GILDAS',
  'FRENELLE LA GRANDE',
  'MENSIGNAC',
  'TRELEVERN',
  'DESTORD',
  'HUCHENNEVILLE',
  'SAINT GERMAIN SUR SARTHE',
  'ST MARTIN AUX CHARTRAINS',
  'JOUDREVILLE',
  'BEYNOST',
  'CHEF-BOUTONNE',
  'NEGRONDES',
  'NEUFMANIL',
  'DONDAS',
  'MORVILLE',
  'PLOMION',
  'PLANCHES',
  'SEGRIE',
  'MORBECQUE',
  'PLUFUR',
  'DEHAULT',
  'BEAUREVOIR',
  'BREUX JOUY',
  'LINDRE-HAUTE',
  'CLEDEN-POHER',
  'BAZAUGES',
  'ROUVRAY ST DENIS',
  'SAINT-MICHEL-ET-CHANVEAUX',
  'MERLAS',
  'CHALEINS',
  'LE MAYET D ECOLE',
  'ORNACIEUX',
  'BRERY',
  'ROUSSY-LE-VILLAGE',
  'VERCEL VILLEDIEU LE CAMP',
  'DURENQUE',
  'FONTAINE-FOURCHES',
  'THOUARS',
  'VERGISSON',
  'ST QUENTIN LES ANGES',
  'JOURS-LES-BAIGNEUX',
  'LA RIXOUSE',
  'LA COUR MARIGNY',
  'POLEYMIEUX-AU-MONT-D OR',
  'RENAZE',
  'SAINT-FLORENT',
  'STE GEMMES SUR LOIRE',
  'GIROUX',
  'ECALLES-ALIX',
  'SAINT-DERRIEN',
  'AROFFE',
  'BEAUCHEMIN',
  'POMPS',
  'COURGEOUT',
  'SAINT-SEVER',
  'ANGLES-SUR-L ANGLIN',
  'LAHEYCOURT',
  'GRENOBLE',
  'FLAMMERANS',
  'RUFFIGNE',
  'AUXY',
  'ECHINGHEN',
  'SAINT-GERMAIN-LE-GAILLARD',
  'FROMELENNES',
  'PENNESIERES',
  'PONT CROIX',
  'CHISSAY EN TOURAINE',
  'ILLZACH',
  'SOUSPIERRE',
  'BAIGNOLET',
  'MERAL',
  'AUBIN',
  'BETHON',
  'SERMESSE',
  'MALAUZAT',
  'VILLEDIEU-LES-BAILLEUL',
  'THIAVILLE-SUR-MEURTHE',
  'BETTEMBOS',
  'MASSOGNES',
  'HOMBOURG',
  'LACAPELLE-MARIVAL',
  'ST MAURICE SUR VINGEANNE',
  'MONTUREUX-LES-BAULAY',
  'MANDEVILLE',
  'CABRIERES',
  'MALRAS',
  'MARCY',
  'LE GRAND LUCE',
  'ROSCANVEL',
  'SAINT-AMADOU',
  'LYE',
  'ST THURIEN',
  'PAULHAN',
  'WALBOURG',
  'MIEUSSY',
  'VINANTES',
  'SAINT-SAUVEUR-LE-VICOMTE',
  'PLOMBIERES-LES-DIJON',
  'HEURINGHEM',
  'LOUVATANGE',
  'CITERS',
  'VILLEFRANCHE DE LONCHAT',
  'LANAS',
  'VIEIL ARCY',
  'ARGOULES',
  'LAIFOUR',
  'MARIGNANA',
  'LANTAN',
  'BIENCOURT',
  'TOUFFREVILLE-LA-CABLE',
  'FLINS-NEUVE-EGLISE',
  'TREVILLE',
  'FORET-LE-ROI (LA)',
  'LA VRAIE CROIX',
  'BONZEE',
  'SAINT-MAMMES',
  'SAINT-OUEN-LE-MAUGER',
  'SAINT CAST LE GUILDO',
  'BREBAN',
  'SEVERAC-L EGLISE',
  'HEUGUEVILLE-SUR-SIENNE',
  'GAUCHIN-VERLOINGT',
  'AVILLY ST LEONARD',
  'CERON',
  'BANIOS',
  'LOCRONAN',
  'SAINT-OUEN-DOMPROT',
  'BOISSY-LE-CUTTE',
  'COURTRY',
  'MEYENHEIM',
  'TARTECOURT',
  'MESQUER',
  'RUPT DEVANT SAINT MIHIEL',
  'ALLAMPS',
  'BULGNEVILLE',
  'ANDOLSHEIM',
  'BALGAU',
  'CAUSSOLS',
  'BAIGNES-SAINTE-RADEGONDE',
  'FONTENAY-DE-BOSSERY',
  'CAMPBON',
  'SAUVOY',
  'SAINTE ANNE SUR BRIVET',
  'QUILLEBEUF-SUR-SEINE',
  'SAINT BASLEMONT',
  'COMBRET',
  'FOUENCAMPS',
  'VILLE-LE-MARCLET',
  'CAUMONT SUR GARONNE',
  'CHELIEU',
  'MARSSAC-SUR-TARN',
  'FONTAINE-LE-COMTE',
  'HALLIGNICOURT',
  'MONTHERLANT',
  'HAUTEVILLE',
  'SAINTE-ANASTASIE',
  'SERANON',
  'SAINT-MARTIN-LESTRA',
  'LA MADELEINE-BOUVET',
  'MUTZIG',
  'CONTIGNE',
  'NEUVILLE EN FERRAIN',
  'LILLEBONNE',
  'ST-CHRISTOPHE-LE-CHAUDRY',
  'SAINT MICHEL DE CHAVAIGNES',
  'LA BAZOUGE DE CHEMERE',
  'LA BATIE ROLLAND',
  'MONTGAUCH',
  'LACAUSSADE',
  'LIMETZ-VILLEZ',
  'LUNAY',
  'GUCHEN',
  'PISSOS',
  'ST MAURICE',
  'GRAYE-ET-CHARNAY',
  'CHAUVONCOURT',
  'BERNOUVILLE',
  'HAUTEROCHE',
  'MORIGNY-CHAMPIGNY',
  'POLIGNAC',
  'ERCKARTSWILLER',
  'MONTFORT SUR ARGENS',
  'OLLAINVILLE',
  'LOIRE-LES-MARAIS',
  'DAMPVALLEY-LES-COLOMBE',
  'JUIGNE-SUR-LOIRE',
  'LAVARE',
  'AGENCOURT',
  'NORROY-LE-SEC',
  'CERCOUX',
  'SAINT-RESTITUT',
  'MONTERTELOT',
  'CORMENON',
  'BOUSSIERES-EN-CAMBRESIS',
  'VIGNY',
  'LANDOS',
  'GUIGNICOURT SUR VENCE',
  'LA BAZOUGE DU DESERT',
  'BOISSEAUX',
  'LANDERROUAT',
  'LA FORESTIERE',
  'FAGNON',
  'SAINT-BROLADRE',
  'BAGNAC-SUR-CELE',
  'MONTDOUMERC',
  'MOURMELON LE GRAND',
  'BINSON ET ORQUIGNY',
  'MEILLY-SUR-ROUVRES',
  'EBERSVILLER',
  'MONTAUT-LES-CRENEAUX',
  'GOMELANGE',
  'CHANAY',
  'COURCHAMP',
  'ORBIGNY AU VAL',
  'SAINT-LARY-SOULAN',
  'BRUSSIEU',
  'BOUC-BEL-AIR',
  'CROCE',
  'HIERGES',
  'MONT DAUPHIN',
  'MAURECOURT',
  'CHAPELLE-HERMIER (LA)',
  'FUVEAU',
  'DURAVEL',
  'LA CHAPELLE-SAINT-ETIENNE',
  'SAINT-ROME-DE-TARN',
  'QUATRE CHAMPS',
  'FLEURY-SUR-ORNE',
  'LIESLE',
  'VANDELAINVILLE',
  'TANCARVILLE',
  'VANDELEVILLE',
  'DEZERT (LE)',
  'FALICON',
  'MONT-DORE',
  'SAINT-CASSIN',
  'METAIRIES-SAINT-QUIRIN',
  'CLUSSAIS-LA-POMMERAIE',
  'OUILLON',
  'LIGNY-LES-AIRE',
  'BRAINS SUR LES MARCHES',
  'BOLAZEC',
  'HUNDLING',
  'VERNEUIL SUR INDRE',
  'PECORADE',
  'SAINT MARTIN LES EAUX',
  'KERBORS',
  'CROIX-FONSOMME',
  'OSSUN',
  'FRANEY',
  'MONTPLONNE',
  'NOYANT-D ALLIER',
  'BOUGNEAU',
  'SANVIGNES LES MINES',
  'BORNE',
  'CHARNY LE BACHOT',
  'REVEL-TOURDAN',
  'PUY-DE-SERRE',
  'ST LEGER DE LA MARTINIERE',
  'UCKANGE',
  'LAGARDE-PAREOL',
  'BONNETAN',
  'RILLY SAINTE SYRE',
  'NEUVIREUIL',
  'LOGNES',
  'PRECY SUR VRIN',
  'BULHON',
  'CORROY',
  'TRAMBLY',
  'ARDELU',
  'EPPING',
  'SAIRES',
  'IVRY-EN-MONTAGNE',
  'SENONNES',
  'LANGOGNE',
  'VAUFREY',
  'BEAUVOIR EN ROYANS',
  'PRECY',
  'LE TRANGER',
  'SACHE',
  'TILLENAY',
  'SAINT-VIDAL',
  'CONDE SUR L ESCAUT',
  'LAILLY',
  'BOUCONVILLE VAUCLAIR',
  'MENESSAIRE',
  'LABEGUDE',
  'CHAMP-PRES-FROGES (LE)',
  'PUISEUX EN BRAY',
  'MOUSSON',
  'SAINT-GENIS-LAVAL',
  'BOIS-GRENIER',
  'NANTIAT',
  'VOUHENANS',
  'SAINT-OMER-CAPELLE',
  'LA GRIPPERIE ST SYMPHORIEN',
  'LACOMMANDE',
  'BARBAIRA',
  'ADELANGE',
  'FRETIN',
  'SAINT-TRIVIER-DE-COURTES',
  'LYS-SAINT-GEORGES',
  'BARTRES',
  'BELLEBRUNE',
  'LIGNAC',
  'JUILLAN',
  'ROUGIERS',
  'REMAISNIL',
  'UZEIN',
  'LIGNIERES ORGERES',
  'AUGA',
  'LES GRANGES',
  'AILLEVILLE',
  'NIEUL-LE-DOLENT',
  'BOQUEHO',
  'MAREUIL LA MOTTE',
  'NOUVION ET CATILLON',
  'DRUYE',
  'FONCINE-LE-BAS',
  'IFFENDIC',
  'VOUNEUIL-SUR-VIENNE',
  'PAUTAINES-AUGEVILLE',
  'SENLISSE',
  'SAVINS',
  'COMBLANCHIEN',
  'UZER',
  'VILLENEUVE LES BOULOC',
  'ST JOIRE',
  'MEDIS',
  'LURIECQ',
  'NOTRE DAME DE LA ROUVIERE',
  'LANOUEE',
  'FLEURY SUR ANDELLE',
  'ANNEMASSE',
  'FLAMMERECOURT',
  'SAINT-GERMAINMONT',
  'SEGREVILLE',
  'GAURE',
  'ORGERES',
  'ROLLEBOISE',
  'MONTMIREY-LA-VILLE',
  'BRIE-SOUS-ARCHIAC',
  'BERNE',
  'LA FORET SUR SEVRE',
  'SAINT-CLAR',
  'POISAT',
  'ARZON',
  'CENDREY',
  'MORINGHEM',
  'BREN',
  'VERLANS',
  'SAINT-PIERRE-SUR-DOUX',
  'LABASTIDE-DU-VERT',
  'SAINT OVIN',
  'SAINT LOUP DE BUFFIGNY',
  'MONTIGNY LE GANNELON',
  'AUTREY',
  'WARLUS',
  'HESDIN-L ABBE',
  'ST CHELY D APCHER',
  'BURCY',
  'SALLERTAINE',
  'ESSEY-ET-MAIZERAIS',
  'SAVOILLANS',
  'VELOSNES',
  'SAINT-MARCEL-L ECLAIRE',
  'BENESSE-MAREMNE',
  'BAUME LES DAMES',
  'GUINCOURT',
  'DISSE SOUS BALLON',
  'HERES',
  'ALTWILLER',
  'TORTEFONTAINE',
  'NANTOUILLET',
  'WAMIN',
  'BEAUVOIR-SUR-MER',
  'MAUREGNY EN HAYE',
  'MEZEROLLES',
  'SAINT-GALMIER',
  'ARDENTES',
  'TERCIS LES BAINS',
  'CHACENAY',
  'SAINTINES',
  'SAINT-LAURENT-DE-LA-PREE',
  'SAINT-SAUVEUR',
  'VOUGEOT',
  'LE MONTET',
  'LA JUMELLIERE',
  'SAINT-VINCENT-SUR-JARD',
  'BAIGTS DE BEARN',
  'TREFFLEAN',
  'BREBOTTE',
  'PLUSSULIEN',
  'ORMES',
  'FRASNE-LE-CHATEAU',
  'REYNES',
  'FAUVILLE-EN-CAUX',
  'CHANTES',
  'LE MELE SUR SARTHE',
  'ALLEREY',
  'SAINT-ANDRE-SUR-CAILLY',
  'SERRES-GASTON',
  'LE BOIS PLAGE EN RE',
  'MONTFLOURS',
  'VIALER',
  'BOURG-EN-BRESSE',
  'STRAZEELE',
  'VILLEMORIN',
  'CHATEAUMEILLANT',
  'LE FALGOUX',
  'LARRET',
  'SAINT-MACLOU-LA-BRIERE',
  'TOUSSAINT',
  'AILLIANVILLE',
  'CONCHIL-LE-TEMPLE',
  'LE BOUSCAT',
  'VENDAYS-MONTALIVET',
  'HOEDIC',
  'MONTGIROD',
  'SAINT-NIZIER-LE-BOUCHOUX',
  'DOMONT',
  'PAPAICHTON',
  'BEFFIA',
  'NORREY-EN-AUGE',
  'AOUSTE',
  'BELLES FORETS',
  'REAL',
  'SAINT-ALBAN-LES-EAUX',
  'JUMELLES',
  'QUEDILLAC',
  'SORBO OCAGNANO',
  'ESCALLES',
  'VERRIERE (LA)',
  'MESBRECOURT RICHECOURT',
  'MARSILLY',
  'SAINT-ALBAN-SUR-LIMAGNOLE',
  'COMPERTRIX',
  'LICOURT',
  'KILSTETT',
  'SAINT LEONARD DES BOIS',
  'VITRY LE CROISE',
  'MARTRIN',
  'MADIRAC',
  'BORNAY',
  'FOLLEVILLE',
  'BRISSAC-QUINCE',
  'FONTAINE-LES-DIJON',
  'CANNY SUR MATZ',
  'GUGNEY',
  'CHEVEUGES',
  'AIZECOURT-LE-BAS',
  'VAUX SUR EURE',
  'LES BORDES',
  'HIRSCHLAND',
  'SAINT-ALBAN-LEYSSE',
  'SAINT-JEAN-ROURE',
  'ORCEVAUX',
  'AUBERVILLE',
  'CHERRUEIX',
  'SAINT-MARTIN-SUR-COJEUL',
  'FRANKEN',
  'RISCLE',
  'JUIGNE SUR SARTHE',
  'LAGNY-SUR-MARNE',
  'CAMETOURS',
  'MONTFORT-CHALOSSE',
  'HESDIGNEUL-LES-BETHUNE',
  'COLLINE BEAUMONT',
  'SAULT SAINT REMY',
  'LA DIGNE D AVAL',
  'LAVOUTE-SUR-LOIRE',
  'GUETHARY',
  'SEVEUX',
  'CHARNOZ-SUR-AIN',
  'MARESMONTIERS',
  'BUVERCHY',
  'CHEU',
  'VENDEVILLE',
  'VAUX DEVANT DAMLOUP',
  'CHALONNES-SOUS-LE-LUDE',
  'CRAYWICK',
  'ALLONDANS',
  'MEURSAC',
  'FLEURINES',
  'SAVIGNY-SOUS-MALAIN',
  'EYWILLER',
  'CUSEY',
  'PLOUMOGUER',
  'MASSILLY',
  'CHENEHUTTE TREVES CUNAULT',
  'VILLEBAZY',
  'AIGNAN',
  'MARAINVILLER',
  'ISPOURE',
  'PEYPIN-D AIGUES',
  'PRATS DE SOURNIA',
  'LAUTREC',
  'JUILLY',
  'TROSLY LOIRE',
  'ALBAN',
  'RAILLICOURT',
  'LUNEVILLE',
  'TROYES',
  'NOROLLES',
  'LATRAPE',
  'INGUINIEL',
  'HUCLIER',
  'LURCY-LEVIS',
  'SIGOURNAIS',
  'MEURSANGES',
  'ST PRIEST',
  'MURVILLE',
  'MONT-DE-LANS',
  'BIVIERS',
  'PORTEL DES CORBIERES',
  'LE FRECHET',
  'BOISLEUX-AU-MONT',
  'LES ORMES',
  'LOUROUX-HODEMENT',
  'OMONVILLE-LA-ROGUE',
  'OSMERY',
  'ISLE AUBIGNY',
  'HERRY',
  'FRONTENEX',
  'BOISSY-SOUS-SAINT-YON',
  'PONSON DESSUS',
  'FARINOLE',
  'BAZIEGE',
  'THOMER LA SOGNE',
  'SEYSSUEL',
  'BERU',
  'TINQUEUX',
  'CHAPELLE-EN-VERCORS (LA)',
  'BAMBECQUE',
  'ISLAND',
  'THORIGNE SUR DUE',
  'ANVEVILLE',
  'SERRE LES SAPINS',
  'RICQUEBOURG',
  'CHANTELOUP LES BOIS',
  'BOUCHET',
  'TOUL',
  'MONCEAU LE NEUF FAUCOUZY',
  'SAMBOURG',
  'MILHAUD',
  'BECQUIGNY',
  'DINSHEIM SUR BRUCHE',
  'SCIENTRIER',
  'SAINT HUBERT',
  'ICHTRATZHEIM',
  'GARROSSE',
  'MERICOURT-SUR-SOMME',
  'ECURY-LE-REPOS',
  'CHAMBREY',
  'EMBREVILLE',
  'SAINT BARTHELEMY DE VALS',
  'BONNEE',
  'BAIZIEUX',
  'ROSSELANGE',
  'DANNEMOINE',
  'PLOUNEOUR-MENEZ',
  'BEAUCAMPS-LE-JEUNE',
  'CUGURON',
  'FESTUBERT',
  'SALVEZINES',
  'CLESSE',
  'CHANAC',
  'LOMONT',
  'DAIGNY',
  'BOUZONVILLE',
  'RUPT-SUR-MOSELLE',
  'PLOUHINEC',
  'ESTRABLIN',
  'LIGNY-SUR-CANCHE',
  'MONTILLIERS',
  'THOUARE-SUR-LOIRE',
  'GESTEL',
  'PLESCOP',
  'HONDSCHOOTE',
  'FOREST-MONTIERS',
  'MARNAY-SUR-MARNE',
  'TREVENEUC',
  'SAINT-LAURENT-DE-JOURDES',
  'BRIANCON',
  'LE PIN',
  'LOCHWILLER',
  'AULNAY SUR ITON',
  'MONTAIGUT',
  'PLOUMILLIAU',
  'VILLEBOUGIS',
  'LE TOUQUET PARIS PLAGE',
  'LA MONCELLE',
  'TIERCE',
  'MANNEVILLE LA PIPARD',
  'PRASLIN',
  'VERZE',
  'VILLENEUVE FROUVILLE',
  'VARENNES EN ARGONNE',
  'ARVILLERS',
  'SAINT-GEOIRE-EN-VALDAINE',
  'LINIERS',
  'FATOUVILLE-GRESTAIN',
  'BUSIGNY',
  'LA MAXE',
  'SAMPIGNY-LES-MARANGES',
  'LANGENSOULTZBACH',
  'CARANTEC',
  'FIENVILLERS',
  'SAINT-FERJEUX',
  'MAGNY-MONTARLOT',
  'ESTAVAR',
  'MONETEAU',
  'DOMLOUP',
  'WATTIGNIES-LA-VICTOIRE',
  'BOUGARBER',
  'BEGUEY',
  'BAULAY',
  'LACOSTE',
  'ASNELLES',
  'VASSONVILLE',
  'AULNAY-SUR-MARNE',
  'FOURQUES SUR GARONNE',
  'SAINT-PIERRE-EN-FAUCIGNY',
  'LEONCEL',
  'RIGNY LA SALLE',
  'SAINT PIERRE DES BOIS',
  'PLAISSAN',
  'BOUQUEVAL',
  'PLUGUFFAN',
  'PLEDELIAC',
  'NONVILLIERS GRANDHOUX',
  'JASSANS-RIOTTIER',
  'CHEMAUDIN',
  'MEHONCOURT',
  'BRADIANCOURT',
  'NESLE-LE-REPONS',
  'COUCHEY',
  'PESSAN',
  'OISLY',
  'LANEUVEVILLE-DERRIERE-FOUG',
  'AYSE',
  'BOUSSEVILLER',
  'REAUMUR',
  'SAINT-DIDIER-SUR-ROCHEFORT',
  'SAINTE-SOULLE',
  'LE GRAND-LEMPS',
  'MORIZECOURT',
  'LANDEVIEILLE',
  'SEMERIES',
  'GUILVINEC',
  'ROGECOURT',
  'BAULNE',
  'SAINT-QUENTIN-EN-MAUGES',
  'GELLAINVILLE',
  'ST-PHILBERT-SUR-BOISSEY',
  'MAREUIL-CAUBERT',
  'LAMECOURT',
  'SAINT-BENOIT-D HEBERTOT',
  'MESNULS (LES)',
  'DANNELBOURG',
  'GETIGNE',
  'BASSING',
  'ST-EGREVE',
  'SOULGE SUR OUETTE',
  'REBAIS',
  'LA WALCK',
  'MONESTIES',
  'BARVILLE-EN-GATINAIS',
  'TROUSSEY',
  'LA NEUVILLE GARNIER',
  'VILLERS-AU-BOIS',
  'TOULON',
  'VENDRESSE',
  'SAINS-EN-AMIENOIS',
  'REFFUVEILLE',
  'LA NEUVEVILLE-DVT-LEPANGES',
  'HUMBERCAMPS',
  'EVERLY',
];

module.exports = cities;
