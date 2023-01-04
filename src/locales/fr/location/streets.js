const streets = [
  "DE ZINSWILLER, ROUTE",
  "DE L'ESTEREL, RUE",
  "DES BONNES GENS, RUE",
  "DES BRIQUES, RUE",
  "MANSART, RUE",
  "DU 1 DECEMBRE, RUE",
  "DES HAUTES TERRES, RUE",
  "DU BOULANGER, RUE",
  "PRINCIPALE, RUE",
  "DE HOELSCHLOCH, RUE",
  "SANDBUEHL, RUE",
  "DE LA FONTAINE GRIESBACH, RUE",
  "DR ALBERT SCHWEITZER, RUE",
  "DE ROSHEIM, ROUTE",
  "DE LA CREUSE, RUE",
  "NOUVELLE RTE, NTE",
  "DE NIEDERSOULTZBACH, RUE",
  "DES LIEVRES, RUE",
  "DU SPORT, RUE",
  "DES MOULINS, RUELLE",
  "DE ZOLLINGEN, RUE",
  "DE LA FORGE, IMPASSE",
  "DE LA FRAYERE, IMPASSE",
  "SAINTE MAISON, RUE",
  "WOLF, RUE",
  "HOPBACH, RUE",
  "DES CHENILLES, RUE",
  "DE LA PRISON, RUE",
  "DU GENERAL RAPP, RUE",
  "SCHOETTEL, RUE",
  "ST CHARLES, RUE",
  "DU BASTION, IMPASSE",
  "DE BAERENTHAL, RUE",
  "DE LA RONDELLE, RUE",
  "DE LA MARSEILLAISE, RUE",
  "DES NOYERS, RUE",
  "DES SAPINS, IMPASSE",
  "DU RIESLING, RUE",
  "VICTOR HUGO, IMPASSE",
  "DES FAUVETTES, RUE",
  "DES FRERES LUMIERE, RUE",
  "DES VIOLETTES, CHEMIN",
  "DU LIARD, RUE",
  "DU LIN SCHWABWILLER, RUE",
  "ST MAURICE, RUE",
  "D EBERSMUNSTER, RUE",
  "DE RUMERSHEIM, RUE",
  "DU RELAIS, RUE",
  "DES PIERRES, CHEMIN",
  "DES PATRES, COIN",
  "DE LA PYRAMIDE, RUE",
  "VORDERPFLOECK, RUE",
  "DE L ISCHERT, RUE",
  "CREUSE, RUE",
  "DES PYRENEES, RUE",
  "VIEUX CHENE, CHEMIN",
  "MIEG, RUE",
  "DES JARDINS, PASSAGE",
  "SAINT JACQUES, PASSAGE",
  "SAINT SAUVEUR LE VICOMTE, ALEE",
  "DU PUTOIS, RUE",
  "DU CANAL, CHEMIN",
  "GROETTEL, RUE",
  "DU BLANC NOYER, RUE",
  "DU PRESBYTERE, IMPASSE",
  "FLECKENSTEIN, RUE",
  "DES MARCHANDS, RUE",
  "DE WESTHOFFEN, RUE",
  "GRIESMATT, RUE",
  "DEBUSSY, RUE",
  "LOT LES ROSIERS ITTLENHEIM, VOIE COMMUNALE",
  "ERCKMANN CHATRIAN, RUE",
  "DIT BERGWEG, COUR",
  "DES ANTONINS, RUE",
  "DU COQ DE BRUYERE, RUE",
  "DU SCHNEEBERG, RUE",
  "DE NIEFFERN, RUE",
  "DE BRUMATH, ROUTE",
  "DU CARMEL MARIENTHAL, RUE",
  "DE MONTBRONN, ROUTE",
  "HILLMATT, RUE",
  "DU CIMETIERE, CHEMIN",
  "CONTY, RUE",
  "DES TEINTURIERS, RUE",
  "DU COMMANDANT LARIVIERE, RUE",
  "DES PELERINS MARIENTHAL, CHEMIN",
  "DU POELE, IMPASSE",
  "ROETTEL, RUE",
  "DU MARECHAL LYAUTEY, RUE",
  "MITTWEG, RUE",
  "HAUTE, RUE",
  "DU GEN DE GAULLE, AVENUE",
  "DE LA HOLZGASSE, RUE",
  "SAO JOAO DE LOURE, RUE",
  "DE LA ZORN, QUAI",
  "BALSTEINWEG, COUR",
  "IGNACE DERENDINGER, RUE",
  "DE LA CRECHE, IMPASSE",
  "DE BOERSCH, RUE",
  "DES CELTES REIMERSWILLER, RUE",
  "DE SURBOURG, ROUTE",
  "DES MALGRE NOUS, RUE",
  "DE LA HAUCHIRELLE, RUE",
  "DU BERGER, RUE",
  "GENERAL DE TASSIGNY, RUE",
  "SANDFELD, IMPASSE",
  "DES RUISSEAUX, RUE",
  "DE L'EUROPE, RUE",
  "DE WANGEN, RUE",
  "HAGELWEG, CHEMIN",
  "DE LA DIME GRIESBACH, RUE",
  "DE LA PETITE FORET, RUE",
  "DU GALGENBERG, RUE",
  "DES GALERIES, IMPASSE",
  "JEAN GONTHIER D ANDERNACH, RUE",
  "DU BISCHBERG, RUE",
  "RODIN, RUE",
  "DE LA LIBERTE (GIMBRETT), RUE",
  "DE L ALLIER, RUE",
  "DES ARCADES, RUE",
  "JOUAC, RUE",
  "DU REZE, RUE",
  "PRINCIPALE GRAUFTHAL, RUE",
  "DU WOLFENTHAL, RUE",
  "DE LA POMME D OR, RUE",
  "DE MUSSIG, IMPASSE",
  "DE LA FRAISE, RUE",
  "GROB, RUE",
  "DU PAST WILLIAM GUGGENBUHL, RUE",
  "MEDICO PEDAGOGIQUE, CENTRE",
  "DU FAUBOURG, RUE",
  "ICARE, RUE",
  "D ERNOLSHEIM, RUE",
  "DE LA COMMANDERIE, RUE",
  "JEAN ALBRECHT, RUE",
  "DE DAHLENHEIM, CHEMIN",
  "D OR, IMPASSE",
  "DU GENET, RUE",
  "DE WILDERSBACH, RUE",
  "DU HANAU, RUE",
  "DU FORTIN, RUE",
  "DES GIROLLES, RUE",
  "GOTHEY, RUE",
  "DES CHARASSES, ROUTE",
  "DE STE MARIE AUX MINES, ROUTE",
  "DE TRIEMBACH, RUE",
  "DE MAI, RUE",
  "DE BUHL, RUE",
  "PAUL DEGERMANN, RUE",
  "DE L EPINE, RUE",
  "DE HANGVILLER, RUE",
  "DE L ERABLE, RUE",
  "FUX, RUE",
  "DE RHINAU, ROUTE",
  "DE STURMECK, RUE",
  "DE LA SCIERIE, CHEMIN",
  "DEPARTEMENTALE 65, ROUTE",
  "PABLO PICASSO, RUE",
  "JEAN ALBERT RAISCH, RUE",
  "CHATEAUNEUF LA FORET, RUE",
  "DE LA LOUTRE, IMPASSE",
  "DU ELLER, RUE",
  "DE LUXEMBOURG, RUE",
  "DU MAL CLARKE, FG",
  "CV, CHV",
  "DES AULNES, RUE",
  "BISCHEL, IMPASSE",
  "DU CANTONNIER, RUE",
  "DU BROCARD, RUE",
  "DU CANAL, ROUTE",
  "D OFFENDORF, IMPASSE",
  "DU LOH, RUE",
  "DES COMTES DE LINANGE, RUE",
  "RUSTLACH, CHEMIN",
  "CHANOINE E. MERTIAN, RUE",
  "KLOSTER, RUE",
  "MUENZBERGWEG, COUR",
  "DE KEMBS, RUE",
  "ANDRE GIDE, RUE",
  "CHASSEPOT, RUE",
  "DES QUELLES, RUE",
  "DU PONT DU PEAGE, RUE",
  "DE NEUBOURG, PLACE",
  "DU LION, RUE",
  "GDE RUE HOHMANN, GRAND RUE",
  "POMMIERS, RUE",
  "DES SOEURS, IMPASSE",
  "DU JUNKERWAELDEL, RUE",
  "DU VIEUX MOULIN GRAUFTHAL, RUE",
  "KRITTWALD, RUE",
  "A 34, AUT",
  "DE PAYSANS, RUE",
  "PEUPLIERS, CHEMIN",
  "DE FLEXBOURG, ROUTE",
  "DE DAUENDORF, ROUTE",
  "DU HARAS, RUE",
  "DE NEUBOURG, ROUTE",
  "DU DIEBACH, RUE",
  "D ALSACE, RUE",
  "DU FORST, RUE",
  "SCHWAMMENEGERTHAL, RUE",
  "DES TANNEURS, RUE",
  "DE L ATOME, IMPASSE",
  "DE COPENHAGUE, RUE",
  "DU BOUC, RUE",
  "DU COUCOU, RUE",
  "DES ANEMONES, RUE",
  "JEAN PIERRE VIMILLE, RUE",
  "DE LA BOUCHERIE, IMPASSE",
  "DE BISCHWILLER, ROUTE",
  "PIERRE PFLIMLIN, ALEE",
  "DU RUEST, RUE",
  "KAPPEN, RUE",
  "TIERGAERTEL, RUE",
  "DU LANDSBERG, RUE",
  "DES POILUS, RUE",
  "BALZAC, RUE",
  "DE HOLTZHEIM, RUE",
  "PASTEUR, BOULEVARD",
  "DU ROSENMEER, RUE",
  "GATTER, RUE",
  "DU GENERAL STEHLIN, PLACE",
  "PRINCIPALE BOSSELSHAUSEN, RUE",
  "HENRI DUNANT, RUE",
  "PAUL GAUGUIN, RUE",
  "KLOSTERGRABEN, FOS",
  "DU CHATEAU D EAU NEUNHOFFE, RUE",
  "DE HERMOLSHEIM, RUE",
  "DE GAIL, AVENUE",
  "PETITE RUE DU VIGNOBLE, PETITE RUE",
  "A WIEDENKELLER, RUE",
  "DES GAULOIS, RUE",
  "DU MICHELBACH, RUE",
  "DU CENTRE, IMPASSE",
  "D OBERLAUTERBACH, RUE",
  "DU FURSTWEG, RUE",
  "DU SONDERBERG, RUE",
  "DES BRASSEURS, RUE",
  "PHILIPPE GRASS, RUE",
  "DE L OBERMATT, RUE",
  "DU GEN KOENIG, RUE",
  "HEDWIG, RUE",
  "LUCIEN PFLEGER MARIENTHAL, RUE",
  "DE LA SAVOIE, RUE",
  "DU BITZIG, RUE",
  "GALILEE, IMPASSE",
  "OHMETFELD, RUE",
  "DU LUHBERG, RUE",
  "CHEMIN RURAL GAULESWEG, COUR",
  "DES AFFLUENTS, RUE",
  "DES ARMES, PLACE",
  "DU MUNCHHOF, RUE",
  "DES JARDINS, RUE",
  "HANS ARP, PLACE",
  "DU BOIS, RUE",
  "DU CHAUDRON, RUE",
  "DES FORGERONS, ALEE",
  "PAUL APPELL, RUE",
  "DE LA BOURGOGNE, RUE",
  "DU MUHLBACH, RUE",
  "GRAND RUE, RUE",
  "DU TRIBUNAL, RUE",
  "LOUIS ET AUGUSTE LUMIERE, RUE",
  "DU TRAINEAU, RUE",
  "DE FELDBACH, RUE",
  "DES PERDRIX, RUE",
  "DES PERRUCHES, RUE",
  "DES COLCHIQUES, RUE",
  "DES FRERES, RUE",
  "DE STOTZHEIM, RUE",
  "DES SORBIERS, IMPASSE",
  "D INGWILLER, CHEMIN",
  "DE L AMIRAL RONARC H, RUE",
  "GAILLARDIN, RUE",
  "DES COLLINES, RUE",
  "DU GEN GERARD, RUE",
  "DU COLONEL WACK, RUE",
  "DU ROTFELS, CHEMIN",
  "D OR, RUE",
  "DU MOLLBERG, RUE",
  "PRINCIPALE SCHIRLENHOF, RUE",
  "DE HERRLISHEIM, ROUTE",
  "DE KUHLENDORF, RUE",
  "DE DIEFFENBACH AU VAL, RUE",
  "CHEMIN DE COMPOSTELLE, CHEMIN",
  "DU MUHLFELD, RUE",
  "DE MIETESHEIM, RUE",
  "MITTELBREIT, IMPASSE",
  "CHE RURAL DIEBOLSBERGWEG, COUR",
  "SCHWILGUE, RUE",
  "THOMAS D AQUIN, COURS",
  "ROHMER, RUE",
  "BURKEL, ROUTE",
  "DE WOERTH, ROUTE",
  "BAERENTHAL, RUE",
  "DU BEAU SITE, RUE",
  "CHAPPE, RUE",
  "DE STRASBOURG, AVENUE",
  "DE BAREMBACH, RUE",
  "DU LIESTAL, CHEMIN",
  "JONCS, RUE",
  "225, CD",
  "DES FLORALIES, RUE",
  "DES BIANCONS, RUE",
  "DES ROSELIERES, AVENUE",
  "SIMONE DE BEAUVOIR, RUE",
  "DU STADE, ALEE",
  "DES PRES VERTS, IMPASSE",
  "STOSSKOPF, RUE",
  "DU  FORGERON, RUE",
  "DE L ILL, QUAI",
  "MAISONNETTES, RUE",
  "LES BOSQUETS, RUE",
  "DU TARN, RUE",
  "DE LA CORDERIE, IMPASSE",
  "GEORGES HUMMEL, RUE",
  "DES MACONS, IMPASSE",
  "DES VANNEAUX, RUE",
  "PHILIPPE FRED BOEDECKER, RUE",
  "DE KERTZFELD, RUE",
  "DE SAVERNE, ROUTE",
  "DE NEUWILLER, RUE",
  "WELSCHINGER, RUE",
  "DE PICARDIE, RUE",
  "DE BLAESHEIM, RUE",
  "DES MOINES, IMPASSE",
  "DES CHEVAUX, RUE",
  "CHARLES GOUNOD, IMPASSE",
  "DE ZERMATT, RUE",
  "DU GEAI, RUE",
  "DE SAND, RUE",
  "DE L AQUITAINE, IMPASSE",
  "DE STRUTH, RUE",
  "DU GEN DE GAULLE, RUE",
  "DE SALMBACH, ROUTE",
  "DU CEDRE, RUE",
  "SPENNER, IMPASSE",
  "DES TAPIS, RUE",
  "DES ASPERGES, RUE",
  "DU LIEUTENANT LESPAGNOL, RUE",
  "DE LA HARDT, RUE",
  "DE SAINT NABOR, RUE",
  "D ASSOCIATION FONCIE, FOS",
  "SAINT THOMAS, RUE",
  "DES CYGNES, RUE",
  "DEPARTEMENTALE 52, ROUTE",
  "DES TOURNESOLS, PASSAGE",
  "DU DOC SULTZER, RUE",
  "DE GENEVE, RUE",
  "DES COQUELICOTS, IMPASSE",
  "DE LA BATTERIE, RUE",
  "DES ACACIAS, ALEE",
  "ECKHARD, RUE",
  "GEORGES SAND, RUE",
  "FREDERIC MISTRAL, RUE",
  "SCHAENZLI, IMPASSE",
  "DU CAPITAINE NORTH, IMPASSE",
  "DU MAIRE GEORGES WEISS, RUE",
  "COOPERATIVE, RUE",
  "PCE, PLACE",
  "DU FEU DE LA SAINT JEAN, RUE",
  "SCHABACH, RUE",
  "DE WINTZENHEIM, RUE",
  "DE BLIENSCHWILLER, ROUTE",
  "DU PFAFFENECK, RUE",
  "DE NEUNKIRCH, RUE",
  "DE DAMBACH, RUE",
  "MARGUERITE, RUE",
  "DU HT KOENIGSBOURG, RUE",
  "CONSTANTIN, RUE",
  "DE LA SOMME, RUE",
  "D EICHHOFFEN, ROUTE",
  "DU LANDSBERG, PLACE",
  "DE STUNDWILLER, RUE",
  "DE LA CROISETTE FRECONRUPT, CHEMIN",
  "DE LA CRUZE, RUE",
  "CURIE, RUE",
  "DES POULES, RUE",
  "DU CHARDONNERET, IMPASSE",
  "SCHUTZENTRECH, RUE",
  "LOUIS VEUILLOT MARIENTHAL, RUE",
  "DES COUTURIERES, RUE",
  "ALEXANDRE, RUE",
  "DES AULNES, IMPASSE",
  "DU PLAN D'EAU, ROUTE",
  "DU GENERAL LEBOCQ, RUE",
  "NESSEL, BOULEVARD",
  "DU HAUT KOENIGSBOURG, RUE",
  "DES CHANTERELLES, RUE",
  "DES VIEILLES VIGNES, RUE",
  "DE L'ARTISANAT, RUE",
  "SIMON, RUE",
  "ST ANDRE, RUE",
  "DU COL SCHWEISSGUTH, RUE",
  "FRANCOIS REMETTER, PROM.",
  "NIEDERGAESSEL, RUE",
  "DE WILSHOUSE, ROUTE",
  "JACQUES BREL, PLACE",
  "COMMUNAL, CHEMIN",
  "D ETTENHEIM, RUE",
  "DE PFAFFENBRONN, RUE",
  "DU FAUCON, RUE",
  "SAINTE MARIE, RUE",
  "DE LISBONNE, RUE",
  "DES BERGERS, IMPASSE",
  "BOLZEN, RUE",
  "MARCEL BUSSINGER, CHEMIN",
  "DE L ABRELLE, RUE",
  "DES OIES, IMPASSE",
  "DU COUVENT, PASSAGE",
  "A L'OREE DU BOIS, RUE",
  "DES VACHES, RUE",
  "HERDNER, RUE",
  "LOUIS ARMAND, PLACE",
  "DE REGEMORTE, RUE",
  "HOHLING, RUE",
  "CIDOU, RUE",
  "DES ESCARPINS, RUE",
  "BERNARD PALISSY, IMPASSE",
  "DU MAIRE XAVIER MOSSER, RUE",
  "DU TONNELIER, RUE",
  "DES CAPUCINS, RUE",
  "CHEMIN RURAL REBWEG, COUR",
  "FLOREAL, IMPASSE",
  "JOSEPH PASSERAT, RUE",
  "DE L AUVERGNE, RUE",
  "BUEHLMATT, RUE",
  "DE ROME, RUE",
  "CHEM RURAL SCHLAENGLINGWEG, COUR",
  "BALSTEIN, RUE",
  "DU TEMPLE NEUF, RUE",
  "MERCURE, RUE",
  "ANDRE SCHNEIDER, RUE",
  "DU BOULEAU, RUE",
  "MASSENET, PLACE",
  "FLORIVAL, RUE",
  "DE LA TRUELLE, RUE",
  "DU MINTZFELD, RUE",
  "DE LA PROMENADE, RUE",
  "DES NOBLES, ROUTE",
  "RESIDENCE LES AULNES, VOIE COMMUNALE",
  "DES ALOUETTES MITSCHDORF, RUE",
  "PIERRE VEYRON, RUE",
  "D ALLENWILLER, RUE",
  "SCHULTZ, RUE",
  "GAYLING, RUE",
  "DES MEUNIERS, RUE",
  "JOSEPH HEMMERLE, RUE",
  "DU RUTENBERG, CHEMIN",
  "PAUL WEISS, RUE",
  "DE SILTZHEIM, RUE",
  "DES POMPIERS, PLACE",
  "M F LUTZELHARDT, VOIE COMMUNALE",
  "DE LA SANDLACH, CHEMIN",
  "DU CHATEAU, COUR",
  "DU DIACONAT, RUE",
  "DES COLOMBES, IMPASSE",
  "AMPERE, RUE",
  "DES LAPINS, IMPASSE",
  "DE WEYER, RUE",
  "D INGWILLER, ROUTE",
  "ANDRE MESSAGER, RUE",
  "DU 1 FEVRIER, RUE",
  "PAUL  LANGEVIN, RUE",
  "DU ROTHBACH MARIENTHAL, RUE",
  "PAUL SPITZ, RUE",
  "DU COLLEGE, IMPASSE",
  "WEYERSHEIMERSTRAESSEL, COUR",
  "RUE DU PIEMONT, RUE",
  "HAESLEN, RUE",
  "DES SAVETIERS, RUE",
  "ZIEGELBERG, RUE",
  "D ENTZHEIM, RUE",
  "DU HOHWALD, ROUTE",
  "DES GOTTESHEIM, RUE",
  "DU SONNENBACH, RUE",
  "DE L EHN, RUE",
  "ASSOCIATION FONCIERE, FOS",
  "1ERE DIVISION FRANCE LIBRE, PLACE",
  "DE LA NONNENHARDT, RUE",
  "DE LA FORGE, RUE",
  "DE LA DISTILLERIE, RUE",
  "DE NORDHEIM, RUE",
  "DES LAVOIRS, RUE",
  "HEERWEG, CHEMIN",
  "DE LA MALTERIE, RUE",
  "LEOPOLD, IMPASSE",
  "DU LIEVRE, IMPASSE",
  "DU MUHLBERG, RUE",
  "DES JUIFS, RUE",
  "D'ISLANDE, RUE",
  "DE SELESTAT, ROUTE",
  "THOMAS BECQUET, RUE",
  "JOHN HEYWOOD, RUE",
  "ROMAINE, ROUTE",
  "DU GUIRBADEN, RUE",
  "DES GLYCINES, RUE",
  "OSTERMATT, RUE",
  "DE MITTELHAUSBERGEN, ROUTE",
  "DE LA FONTE, IMPASSE",
  "DE MARLENHEIM, RUE",
  "DE LA GARE LA CLAQUETTE, RUE",
  "DU CERF, IMPASSE",
  "DU JUNCKERSBERG, RUE",
  "LOUISE SCHEPPLER, RUE",
  "DES JUWELINES, IMPASSE",
  "DE LA GARE, QUA",
  "DE DABO, ROUTE",
  "DE LA BERGERIE, IMPASSE",
  "DU MILIEU, RUE",
  "D'ALSACE, RUE",
  "DE SCHOENECK, RUE",
  "PRINCIPALE KOENIGSBRUCK, RUE",
  "DES BOULEAUX, RUE",
  "DES CERISIERS, RUE",
  "PRINCESSE M LECZINSKA MAR, RUE",
  "DES MINIERES, RUE",
  "DU CIMETIERE, PASSAGE",
  "ANTOINE FREYERMUTH, RUE",
  "MAURICE BLIN, RUE",
  "D UBERACH, RUE",
  "DES SELLIERS, RUE",
  "DU CHARPENTIER, RUE",
  "DE SCHIRRHEIN, RUE",
  "SAINTE MARGUERITE, RUE",
  "TIERGARTEN, RUE",
  "DE XURPON, RUE",
  "BLERIOT, RUE",
  "DE L ECOLE, RUE",
  "DE LA REDOUTE, RUE",
  "MUNZHOF, RUE",
  "DE MOLSHEIM, RUE",
  "DE NEUHOF, ROUTE",
  "ZIEGELSCHEUER, RUE",
  "DU 22 NOVEMBRE, RUE",
  "DE L'HERMINE, RUE",
  "DE FRECONRUPT, ROUTE",
  "HENRY DUNANT, RUE",
  "BAUMGAERTEN, RUE",
  "YVAN SPANIEL, RUE",
  "LEO DELIBES, IMPASSE",
  "BORONUS, SAINT",
  "DES CHAMPS VERTS, AVENUE",
  "DU FALKENSTEIN, CHEMIN",
  "DE QUATZENHEIM, RUE",
  "JOFFRE, RUE",
  "PTE RUE, PETITE RUE",
  "DE PFAFFENHOFFEN, RUE",
  "DU PUITS II, PLACE",
  "DE LA VORDERMATT, RUE",
  "DU DOCTEUR DEUTSCH, RUE",
  "ZUNDELHUTTE, RUE",
  "PRINCIPALE MARIENTHAL, RUE",
  "DES ROCHERS, RUE",
  "DE BITCHE, ROUTE",
  "DE LA CHARMILLE, RUE",
  "HINTERGASSE, RUE",
  "DE SCHWEIGHOUSE, RUE",
  "DE REICHSHOFFEN, RUE",
  "NEUFELDGRABEN, FOS",
  "DE LA FAISANDERIE, RUE",
  "FRANZ LISZT, RUE",
  "DU TRIAGE, RUE",
  "LOUIS CHIRON, RUE",
  "VOGELHARDT, RUE",
  "DES FLEURS, IMPASSE",
  "DE HATTEN, RUE",
  "DE LA CHARTREUSE, RUE",
  "DES BUCHERONS, RUE",
  "GUTLENTLAECHELWEG, COUR",
  "DES NOISETIERS, RUE",
  "DU GEISBERG, RUE",
  "DE LA CROIX DE PIERRE, RUE",
  "DU SCHANGENBACH, RUE",
  "FERMES DE LA GRANDE BASSE, FRM",
  "DE L ISERE, RUE",
  "DES COCHERES, IMPASSE",
  "DU SOUVENIR FRANCAIS, SQUARE",
  "ST BERNARD, RUE",
  "DES ORPHELINS, RUE",
  "DE L INDUSTRIE, RUE",
  "DE L EGLISE ST GEORGES, PLACE",
  "DE L USINE A GAZ, RUE",
  "DU CORBILLARD, RUE",
  "KIRCHREBEN, CHEMIN",
  "DE ROSSFELD, RUE",
  "DU FLEXBOURG, RUE",
  "LUECK, RUE",
  "DES SABOTIERS, RUE",
  "DE L ATOME, RUE",
  "DE LA MAIRIE, RUE",
  "SCHLUESSEL, RUE",
  "HOFWEG, RUE",
  "DES PHILOSOPHES, IMPASSE",
  "NEBEL NEUNREUTHER, RUE",
  "DE LA SOUFFEL, CHEMIN",
  "VIEILLE FORGE, IMPASSE",
  "DE ROTHAU, ROUTE",
  "DE LA VERDURE, RUE",
  "DES TOURTERELLES, RUE",
  "JOSSET, RUE",
  "IRMENGARDE, RUE",
  "LOEMUHL, RUE",
  "DU HASELBACH, RUE",
  "DE METZ, RUE",
  "MAURICE TRINTIGNANT, RUE",
  "DES OEILLETS, PASSAGE",
  "DU VIGNOBLE, RPT",
  "ANTOINE DE SAINT EXUPERY, RUE",
  "DU MEYERHOF, RUE",
  "DE LA BLIETH, RUE",
  "DE KRAUTWILLER, RUE",
  "DU VIEHWEG, RUE",
  "DU KIRRWEG, RUE",
  "DU WESTDORF, CHEMIN",
  "QUINTENZ, RUE",
  "DE MOLIERES, RUE",
  "DES HETRES, RUE",
  "55, CD",
  "DE LA DIME, RUE",
  "DES QUILLES, RUE",
  "DE PAQUES, RUE",
  "HANAU, RUE",
  "DU MUCKENTHAL, CHEMIN",
  "DU PARC MUNICIPAL, PLACE",
  "DE GRIESHEIM, RUE",
  "DE L ALMA, RUE",
  "DU CHENE, RUE",
  "MONSEIGNEUR CORBET, RUE",
  "DES EGLANTINES, IMPASSE",
  "DU PRESBYTERE, RUE",
  "FOCH, RUE",
  "DES BAINS, ALEE",
  "DE LA LAUTER, RUE",
  "DU FUCHSBERG, RUE",
  "DU MOULIN, RUE",
  "CLAUDE, RUE",
  "DU KLINTZ, RUE",
  "DE LA MOUTARDE, RUE",
  "SAINT NICOLAS, IMPASSE",
  "DE LA CRUZ, RUE",
  "DU SEL, RUE",
  "PRINCIPALE BIRLENBACH, RUE",
  "DE L HERMINE, SQUARE",
  "WILLERLE, RUE",
  "FERME OBERWOERTH, VOIE COMMUNALE",
  "DES HORTICULTEURS, IMPASSE",
  "SAINT GEORGES, RUE",
  "DE SCHALBACH, RUE",
  "DE LA GARE, AVENUE",
  "DES FRUITS, IMPASSE",
  "DE BISSERT, ROUTE",
  "DU NEUBRUNNEN, CHEMIN",
  "DE LA GLOCKENGRUBE, RUE",
  "DU SYLVANER, RUE",
  "DE LA GRUNDGRUBE, RUE",
  "DU TRAM TRAIN, RUE",
  "PRINCIPALE HARTHOUSE, RUE",
  "DE L ABATTOIR, RUE",
  "DES ROSSIGNOLS, IMPASSE",
  "DES ALAMANS, SAINT",
  "D AVENHEIM, ROUTE",
  "MARC SEGUIN, RUE",
  "LOUIS PHILIPPE KAMM, RUE",
  "SAINTE FAMILLE, ALEE",
  "DE LA RONDELLE, IMPASSE",
  "GEORGES BIZET, RUE",
  "DU BODENFELD, CHEMIN",
  "DE ROHRLACH, CF",
  "D UHRWILLER, RUE",
  "DU STADE, CHEMIN",
  "GABRIELLE COLETTE, RUE",
  "DU DOMAINE DES ACACIAS, RUE",
  "STOSS, RUE",
  "DE LA CHANVRIERE, ALEE",
  "D ORLEANS, RUE",
  "DES JOHANNITES, IMPASSE",
  "D IMBSHEIM, RUE",
  "LYON, ROUTE",
  "D AVOLSHEIM, ROUTE",
  "EYERT, RUE",
  "DES ROSIERS, RUE",
  "DE L HOPITAL, IMPASSE",
  "DES MARRONNIERS, RUE",
  "DU GLANDON, RUE",
  "DE LA FERME STANGEN, IMPASSE",
  "DU WILLERHOF, RUE",
  "DES COMPAGNONS, RUE",
  "D OHLUNGEN KEFFENDORF, RUE",
  "TROST, RUE",
  "DES BAINS, RUE",
  "DU MOULIN   MITSCHDORF, RUE",
  "DU VIGNOBLE, RUE",
  "DES LIBELLULES, IMPASSE",
  "DU CONSEIL, RUE",
  "DES ENTREPRENEURS, RUE",
  "DU KREFFZEN, RUE",
  "DE SUNDHOUSE, RUE",
  "DU MAITRE, RUE",
  "DU VILLAGE KUHLENDORF, RUE",
  "DU TRAVAIL, RUE",
  "DE DUSENBACH MARIENTHAL, RUE",
  "PRALON, RUE",
  "DES ALISIERS, RUE",
  "DE CHERBOURG, RUE",
  "DE LA SCHLEIFFE, RUE",
  "DE VALFF, RUE",
  "DU VIVARAIS, RUE",
  "DU WIEDE, RUE",
  "DU GAZ, CHEMIN",
  "STIERMATT, RUE",
  "DES FRERES MATHIS, IMPASSE",
  "MEYER, IMPASSE",
  "DU MONT NATIONAL, RUE",
  "DES PATRES, RUE",
  "DU TORRENT, RUE",
  "DE L ALLMEND, RUE",
  "DU CHAMP DE TIR, RUE",
  "DU PERIGORD, IMPASSE",
  "CHEMIN RURAL LANGGASSE, COUR",
  "FROHMATT, IMPASSE",
  "BITZMATT, RUE",
  "DU MARECHAL DE LOGIS GILL, RUE",
  "DE BRETAGNE, RUE",
  "DE LA SOUPE, IMPASSE",
  "DE LA GARE AUX MARCHANDISE, RUE",
  "DE WEITBRUCH, ROUTE",
  "DES TRUITES, RUE",
  "DU FOSSE DES POIS, RUE",
  "DU DABO, RUE",
  "D ANJOU, RUE",
  "DE LA GRANDE BASSE, RUE",
  "DE LA BUTTE, RUE",
  "CD 151, CD",
  "DE  L EHN, RUE",
  "DU TROMPETTE, RUE",
  "FERME DES QUATRE VENTS, VOIE COMMUNALE",
  "FURCHGAESSEL, RUE",
  "DES CHARMES, PLACE",
  "DES PLATANES, SQUARE",
  "DE LUTZELBOURG, ROUTE",
  "DES COLCHIQUES, IMPASSE",
  "DU PRETEUR, RUE",
  "DE L OURSON, IMPASSE",
  "HOHLWEG, RUE",
  "DES OIES, COIN",
  "DU KOPPENBERG, RUE",
  "D'ESPAGNE, RUE",
  "DE L HUILERIE, IMPASSE",
  "MUHLBERG, RUE",
  "D ALBET, RUE",
  "DE COLMAR, ROUTE",
  "IRMA MERSIOL BURRUS, RUE",
  "DES PINS, RUE",
  "FORSTWEG, COUR",
  "JEAN SEBASTIEN BACH, RUE",
  "D INGENHEIM, RUE",
  "DE HANDSCHUHEIM, RUE",
  "DES SOURCES, RUE",
  "DANIEL JAILLIARD, AVENUE",
  "DES AMERICAINS, RUE",
  "DU TILLEUL, RUE",
  "PROSPER MERIMEE, RUE",
  "EDOUARD HERING, RUE",
  "DE L EXPANSION, RUE",
  "DE WANGENBOURG, RUE",
  "GRUN, RUE",
  "PRINCIPALE ZINSWILLER, RUE",
  "ARMAND BUSSE, RUE",
  "DES BOIS, RUE",
  "DU CHAT, RUE",
  "DU RAIN, RUE",
  "D OHLUNGEN, RUE",
  "DES ORCHIDEES, RUE",
  "DU GRAND BALLON, RUE",
  "DU SCHWAMMENEGERTHAL, RUE",
  "OSENLOH, RUE",
  "CHEMIN DES ECOLIERS, RUE",
  "DU VIN, ROUTE",
  "DE LA CARRIERE, RUE",
  "DES SUREAUX, PASSAGE",
  "DU GRAND RABBIN JOS BLOCH, RUE",
  "DE CHALONS, IMPASSE",
  "DES RAILS, CHEMIN",
  "DE L USINE, IMPASSE",
  "DE LA LAINE PEIGNEE, RUE",
  "D ARTOLSHEIM, RUE",
  "JULES VERNE, RUE",
  "SAINT PIERRE, RUE",
  "DU MUSCAT, RUE",
  "DE LA LOUTRE, RUE",
  "DE LA VIEILLE POSTE, RUE",
  "FORBIN, PLACE",
  "DE LA SERVA, RUE",
  "LE MOULIN DE JEAN CHARLES, VOIE COMMUNALE",
  "DE FROESCHWILLER, ROUTE",
  "KAGENECK, RUE",
  "DE LA FORET, RUE",
  "DES OEILLETS, IMPASSE",
  "D OFFENDORF, RUE",
  "GALGENHARDT, RUE",
  "DE RAHLING, RUE",
  "DE LOBSANN MERKWILLER, ROUTE",
  "JOSEPH HOERLE, RUE",
  "DE LA LOIRE, RUE",
  "DE LA ROSELIERE, RUE",
  "DES BERGERS, RUE",
  "LENZENGAESSEL, COUR",
  "OTZENBACH, RUE",
  "DU KURZGEWAND, RUE",
  "DES TROIS FONTAINES, RUE",
  "DES REMPARTS, RUE",
  "DES INCORPORES DES FORCE, PLACE",
  "DU PORTUGAL, RUE",
  "WITZWEG, RUE",
  "DU LICHTENBERG, RUE",
  "DES CARRIERES, RUE",
  "DU REMPART EST, RUE",
  "GEORGES BURGER, RUE",
  "DU SCHEIDSTEIN, RUE",
  "DU 28 NOVEMBRE, RUE",
  "DES SABLES, RUE",
  "DE LA MAIRIE, AVENUE",
  "QUARTIER DES GLACIERES, RUE",
  "DES ABEILLES, IMPASSE",
  "DE L ABBE STACKLER, RUE",
  "DE LOBSANN, RUE",
  "DES SARMENTS, RUE",
  "JACQUES TWINGER, RUE",
  "SPERBERBAECHEL, RUE",
  "DU CASINO, RUE",
  "ROECKLIN, RUE",
  "DES SITELLES, RUE",
  "ANDERSEN, RUE",
  "DE L ARCHE, IMPASSE",
  "DE COMMUNICATION, CHEMIN",
  "DU MAIRE FUCHS, RUE",
  "DU PIEMONT, ALEE",
  "DU LYNX, RUE",
  "DE LANGENSOULTZBACH, RUE",
  "DES TERRASSES, RUE",
  "DU GABON, RUE",
  "DES MIRABELLES, RUE",
  "CHARLES DIEMER, RUE",
  "DU BIETENWEG, RUE",
  "DE LA FONTAINE FRECONRUPT, RUE",
  "DE BENFELD, RUE",
  "DU MAIRE MEPPIEL, RUE",
  "SAINT ANTOINE, RUE",
  "DU BUHL, RUE",
  "DE LA GARE MARIENTHAL, RUE",
  "DU WITTHOR, IMPASSE",
  "DES MAGASINS, RUE",
  "DU GARAGE, RUE",
  "ERNWEIN, RUE",
  "DE POSTROFF, RUE",
  "DE LA TRUITE, RUE",
  "DU GENERAL LEVY, RUE",
  "250, CD",
  "DE SCHLEITHAL, ROUTE",
  "DES BALAIS, RUE",
  "DE LA CENSE FRECONRUPT, CHEMIN",
  "DES IMPRIMEURS, RUE",
  "DES NENUPHARS, RUE",
  "DU MAIRE WALDEJO, RUE",
  "JACQUES COULAUX, PLACE",
  "DE PFAFFENSCHLICK, ROUTE",
  "DU QUARTIER AIME, RUE",
  "KOCH, IMPASSE",
  "MONSEIGNEUR FREY, RUE",
  "DU PRINTEMPS, RUE",
  "DES BOUCHERS, IMPASSE",
  "DES NOBLES, PLACE",
  "DE LA KALTAU, RUE",
  "DE LA DIME, COURS",
  "DE LA ROMAINE, RUE",
  "DES TOURBIERES, RUE",
  "DU LINGBERG, RUE",
  "DE GRIESHEIM, ROUTE",
  "OBERPFLOECK, CHEMIN",
  "DE L'EUROPE, AVENUE",
  "DU TOKAY, RUE",
  "DES CERISES, IMPASSE",
  "DU FELDWASSER, RUE",
  "DE ZEHNACKER, RUE",
  "DEPARTEMENTALE 72, ROUTE",
  "BRUCHELMATT, CHEMIN",
  "DU MONT STE ODILE, ROUTE",
  "DU MARTELBERG, CHEMIN",
  "DE MARCKOLSHEIM, ROUTE",
  "BRANDT, RUE",
  "FELDGRAEBENWEG, COUR",
  "DU BELIER, RUE",
  "DU NEUF CHEMIN, RUE",
  "DU COL JEAN DE BENOIST, RUE",
  "LEHGASS, RUE",
  "DES RONDS PRES, RUE",
  "LAUGEL, RUE",
  "DE SCHIRLEN, RUE",
  "DES QUATRE MAISONS, RUE",
  "DU ZIELT, IMPASSE",
  "DES CLOCHERS, RUE",
  "DE KIENHEIM, RUE",
  "DE LA LIBERTE EBERBACH, RUE",
  "LOCHMUEHLWEG, COUR",
  "DE L UNGERSBERG, RUE",
  "DU RAIL, RUE",
  "FITZENZ, RUE",
  "MF ROTHSMATT, VOIE COMMUNALE",
  "PETITE ROUTE DE L EGLISE, PETITE RUE",
  "DU FRAMONT, RUE",
  "DE BOURGHEIM, CHEMIN",
  "ROTT, IMPASSE",
  "DU CHASSEUR, PASSAGE",
  "DE L HOTEL DE VILLE, PASSAGE",
  "DE RAUWILLER, RUE",
  "DE JOHANNESBURG, RUE",
  "GUILLAUME, RUE",
  "DU SENATEUR KISTLER, RUE",
  "DES BLES, RUE",
  "DES QUATRE HOMMES, RUE",
  "DE L ASILE, RUE",
  "DU BITZEN, CHEMIN",
  "BETZHEIM, RUE",
  "BALBACH, RUE",
  "DES GRILLONS, RUE",
  "BILDSTEIN, RUE",
  "DU VIEUX MARCHE, RUE",
  "DES MAITRES, RUE",
  "DE HOFFEN, RUE",
  "LACHSTEIN, CHEMIN",
  "DES AIGUILLES, RUE",
  "DU KRAUSBERG, RUE",
  "DU VAL FLEURI, RUE",
  "SEBASTIEN BRANT, BOULEVARD",
  "JOSEPH BUMB, ALEE",
  "CAMILLE CLAUDEL, RUE",
  "DU HETRE, RUE",
  "VICTOR FISCHER, PLACE",
  "DE HINDISHEIM, ROUTE",
  "DES ROCHERS, CHEMIN",
  "ZIEGLER, RUE",
  "DU LIBACH, RUE",
  "MARTER, IMPASSE",
  "DU GRIFFON, RUE",
  "DE RHINAU, RUE",
  "DES CHAMPS, IMPASSE",
  "LOUISE DE STEINBACH, PLACE",
  "IM SCHLOESSEL, IMPASSE",
  "FERME WEINUM, CHEMIN",
  "DES CONSULATS, PLACE",
  "DU MOULIN VOLLACH, RUE",
  "PRINCIPALE GRIESBACH, RUE",
  "DES COGNASSIERS, RUE",
  "DES BLEUETS, IMPASSE",
  "DE LA CEINTURE, RUE",
  "DE LA CHENAIE, PLACE",
  "DU MEUNIER, IMPASSE",
  "HANFBACH, RUE",
  "DES ROITELETS, RUE",
  "ERCKMAN CHATRIAN, RUE",
  "DE LA WACHT KUHLENDORF, RUE",
  "CHARLES SPINDLER, RUE",
  "GENETS, IMPASSE",
  "EHNWIHR, RUE",
  "DE NAIROBI, RUE",
  "DU MENHIR, RUE",
  "DE SPESBOURG, RUE",
  "DU LERCHENBERG, RUE",
  "DU VILLAGE, RUE",
  "DE DRULINGEN, RUE",
  "DE CHATENOIS, ROUTE",
  "DU TROUCHY, CHEMIN",
  "DES FAUCONS, RUE",
  "DE LA FRATERNITE, RUE",
  "WOLFSSCHENKEL, COUR",
  "DES GOUMIERS, RUE",
  "DU PETIT REMPART, RUE",
  "ALTE STRASSE, CF",
  "ROEMERSCHEID, RUE",
  "JEAN JAURES, AVENUE",
  "DU BANNHOLZ, RUE",
  "DEPARTEMENTALE 104, ROUTE",
  "DITE SCHLOSSRAINGASSE, RUE",
  "DU REBGARTEN, RUE",
  "LYAUTEY, IMPASSE",
  "DES DEUX FONTAINES, IMPASSE",
  "EMILE ZOLA, RUE",
  "DE MORSCHWILLER, RUE",
  "DU VERGER HERMERSWILLER, RUE",
  "DES CLEMATITES, RUE",
  "DE LA CLOUTERIE, RUE",
  "D OBERDORF SPACHBACH, ROUTE",
  "DE DUNTZENHEIM, RUE",
  "RONSARD, RUE",
  "DE LA PORTE FILSEN, RUE",
  "PRINCIPALE NEUNHOFFEN, RUE",
  "DU MAENNELSTEIN, ROUTE",
  "DES CASTORS, RUE",
  "DE BERNE, RUE",
];

module.exports = streets;