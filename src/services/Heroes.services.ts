import { Hero } from "src/interfaces/IHero";
import { v4 as uuidv4 } from 'uuid';

export const HEROES: Hero[] = [
  {
    id: uuidv4(),
    name: 'Captain Boomerang',
    description: "Difficile d'avoir un nom aussi ridicule... même si nous allons voir dans le reste du classement qu'il y a toujours pire. Apparu pour la première fois dans l'univers de Flash en 1960, ce personnage est devenu un ennemi récurrent du Bolide Écarlate, mais aussi de Batman ou Green Arrow. Mais il faut bien avouer que menacer tout le monde avec des boomerangs est difficile à prendre au sérieux. Apparu au cinéma ou sur petit écran, le personnage sera aussi dans le prochain jeu consacré à la Suicide Squad.",
    image: '../../assets/img/captain-boomerang.jpg',
  },
  {
    id: uuidv4(),
    name: 'Onomatopoeia',
    description: "Voilà un personnage qui a l'avantage d'annoncer la couleur rien qu'en évoquant son nom. D’abord introduit pour la première fois en 2002 dans Green Arrow #12, le personnage ensuite réapparu en ennemi de Batman. Onomatopoeia est un fin tacticien, il a notamment organisé l’évasion du Joker et il est aussi une athlète et un artiste martial respectable. Mais il a la fâcheuse manie de s'exprimer 99,9% du temps en onomatopées...",
    image: '../../assets/img/onomatopoeia.jpg',
  },
  {
    id: uuidv4(),
    name: 'Arm Fall Off Boy',
    description: "Au jeu du personnage le plus ridicule, il serait sans doute parmi les premiers... et il faut bien avouer qu'on donnerait difficilement tort aux votants. Capable de détacher son bras gauche pour s'en servir comme une arme, Arm Fall Off Boy a souvent été élu comme le personnage le plus ridicule de l'univers des comics.",
    image: '../../assets/img/arm-fall-off-boy.jpg',
  },
  {
    id: uuidv4(),
    name: 'Matter Eater Lad',
    description: "On l'a bien compris, l'univers DC regorge de personnages aussi variés que loufoques. Et chaque fois que l'on pense qu'on ne peut pas aller plus loin, la Distinguée Concurrence nous surprend toujours. Voici donc Matter Eater Lad, un héros qui peut manger n’importe quelle matière. Lorsqu'il a été emprisonné, il n'a eu qu'à manger les grilles et les différents obstacles devant lui... Soit vous trouvez ça cool, soit on passe à autre chose !",
    image: '../../assets/img/matter-eater-lad.jpg',
  },
  {
    id: uuidv4(),
    name: 'Bouncing Boy',
    description: "Bouncing Boy est un personnage de l'univers DC apparu pour la première fois en 1961, pendant l'âge d'argent des comics. Si le nom du personnage ne vous dira pas grand-chose, c'est parce qu'il faut bien reconnaître qu'il n'a rien de très attirant en termes de super-pouvoirs. Le personnage a en effet la possibilité de se transformer en boule. Un pouvoir certes utile pour écraser, mais encore faut-il pouvoir toucher ses ennemis avant qu'il aient le temps d'esquiver.",
    image: '../../assets/img/bouncing-boy.jpg',
  },
  {
    id: uuidv4(),
    name: 'Dogwelder',
    description: "Dans la longue liste des équipes au sein de l'univers DC, parlons un peu de la Section 8. Basée dans un quartier bien précis de Gotham City, disons pour faire simple qu'il s'agit de la Suicide Squad du pauvre. Parmi les membres dont il faut parler, voici Dogwelder. Un personnage qui se cache derrière un masque de soudeur et combat le crime de manière très simple : . On vous avait dit que ça valait le coup...",
    image: '../../assets/img/dogwelder.jpg',
  },
  {
    id: uuidv4(),
    name: 'Zeep, The Living Sponge',
    description: "Difficile de faire plus ridicule que Zeep, l'Eponge Vivante ! Lorsque les super-héros comme Superman ou Batman ne sont pas disponibles, il existe la Hero Hotline, un groupe de héros aux pouvoirs divers prêts à passer à l'action. Et au milieu de cette équipe, il y a Zeep... qui a donc toutes les capacités d'une éponge mais à taille humaine. Quitte à absorber de l'eau en cas de danger, autant appeler Aquaman, non ? ",
    image: '../../assets/img/zeep-the-living-sponge.jpg',
  },
  {
    id: uuidv4(),
    name: 'Color Kid',
    description: "Pas la peine d'aller plus loin dans le détail : Color Kid est un super-héros qui a le pouvoir de changer de couleur n'importe quel objet à volonté. Si l'on peut peut-être trouver cool le fait qu'il puisse aussi modifier la couleur du ciel, il faut bien avouer que l'utilité d'un tel personnage dans un combat décisif pour la survie de l'Humanité pose question...",
    image: '../../assets/img/color-kid.jpg',
  },
  {
    id: uuidv4(),
    name: 'The Defenestrator',
    description: "Dans l'équipe de la Section 8, vous pensiez qu'il ne pouvait pas y avoir pire que Dogwelder ? Détrompez-vous, voici The Defenestrator, un personnage qui se balade toujours avec une fenêtre sur lui pour la briser sur un ennemi et ainsi le faire passer à travers.Honnêtement, on adorerait pouvoir voyager dans le temps et assister à la création de ce personnage, savoir qui a eu une telle idée et surtout qui a validé le concept... ",
    image: '../../assets/img/the-defenestrator.jpg',
  },
  {
    id: uuidv4(),
    name: 'Codpiece',
    description: "Il n'est certes pas le méchant le plus connu de l'univers DC, mais l'on se dit qu'il mériterait presque de l'être. Devenu un ennemi récurrent de la Doom Patrol, Codpiece est un adversaire de taille avec son armure high-tech et sa puissance de feu. Mais le gros problème, c'est son canon situé à l'entrejambe. Comme si la localisation de l'arme ne contribuait pas assez au ridicule de la situation, ce canon possède aussi un gant de boxe, des ciseaux, un grappin, un lance-roquette et autres armes à feu. Et le plus drôle dans tout ça, c'est l'origine d'une telle arme... Au temps du lycée, une fille avait rejeté ses avances, affirmant qu’il n’était pas assez grand (on parle bien de la taille). Croyant que c’était une insulte à ses organes génitaux, il a formé un grand complexe tout au long de sa vie d’adulte pour finir par créer ce costume bien équipé. À quand le film sur Codpiece désormais ?",
    image: '../../assets/img/codpiece.jpg',
  },

];
