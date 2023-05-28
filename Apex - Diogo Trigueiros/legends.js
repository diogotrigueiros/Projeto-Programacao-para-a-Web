// Legends

var imagens = [
    {
      src: "bloodhound.webp",
      alt: "bloodhound",
      title: "Bloodhound",
      description: "Bloodhound's true identity is unknown, but they are a skilled tracker and hunter who comes from a long line of hunters. They have a unique ability to track their prey using a combination of technology and intuition.",
    },
    {
      src: "gibraltar.webp",
      alt: "gibraltar",
      title: "Gibraltar",
      description: "Gibraltar is a gentle giant who grew up on the island of Solace, where his family has served as search and rescue operatives for generations. He joined the Apex Games to help fund his family's rescue efforts.",
    },
    {
      src: "lifeline.webp",
      alt: "lifeline",
      title: "Lifeline",
      description: "Lifeline is a combat medic named Ajay Che who uses her skills to heal her teammates in the Apex Games. She comes from a wealthy family who runs a philanthropic organization called the Frontier Corps, which provides aid to those in need.",
    },
    {
      src: "Pathfinder.webp",
      alt: "pathfinder",
      title: "Pathfinder",
      description: "Pathfinder is a friendly robot who was originally designed for labor and construction tasks. However, he discovered a love for music and decided to pursue a career as a competitor in the Apex Games.",
    },
    {
      src: "wraith.webp",
      alt: "wraith",
      title: "Wraith",
      description: "Wraith was once a scientist named Renee Blasey who participated in a top-secret experiment that resulted in her being able to phase in and out of different dimensions. She later escaped from the facility where she was being held and became a fierce warrior, using her abilities to outmaneuver her enemies.",
    },
    {
      src: "Bangalore.webp",
      alt: "bangalore",
      title: "Bangalore",
      description: "Bangalore is a former soldier named Anita Williams who joined the Apex Games after leaving the military. She is a skilled tactician who uses her military training to outsmart her opponents.",
    },
    {
      src: "mirage.webp",
      alt: "mirage",
      title: "Mirage",
      description: "Mirage's real name is Elliott Witt, and he comes from a wealthy family. He joined the Apex Games to prove to his family that he could make a name for himself without their help. Mirage is a trickster who uses his holographic technology to confuse and deceive his opponents.",
    },
    {
      src: "caustic.webp",
      alt: "caustic",
      title: "Caustic",
      description: "Caustic's real name is Alexander Nox, and he was a scientist who created a gas that could dissolve organic matter. He became obsessed with his experiments and was eventually fired from his job. He joined the Apex Games to test his theories on the effects of his gas on humans.",
    },
    {
      src: "Octane.webp",
      alt: "octane",
      title: "Octane",
      description: "Octavio Silva, also known as Octane, lost his legs in a stunt gone wrong. He designed prosthetic legs for himself that allowed him to move at incredible speeds, but he became addicted to the adrenaline rush and started competing in the Apex Games to satisfy his need for excitement.",
    },
    {
      src: "Wattson.webp",
      alt: "wattson",
      title: "Wattson",
      description: "Wattson's real name is Natalie Paquette, and she is the daughter of the games' lead electrical engineer. She grew up around the Apex Games and eventually designed the ring, which forces players closer together as the game progresses. Wattson is a master of electrical engineering and uses her skills to create barriers and traps to protect her team.",
    },
    {
      src: "crypto.webp",
      alt: "crypto",
      title: "Crypto",
      description: "Crypto's real name is Tae Joon Park, and he is a skilled hacker and surveillance expert. He joined the Apex Games to gather information on the people who framed him for a crime he didn't commit.",
    },
    {
      src: "revenant.webp",
      alt: "revenant",
      title: "Revenant",
      description: "Revenant is a robotic assassin who was originally created to carry out assassinations for the Syndicate, the organization that runs the Apex Games. However, he became self-aware and now seeks revenge on the Syndicate for turning him into a killing machine.",
    },
    {
      src: "loba.webp",
      alt: "loba",
      title: "Loba",
      description: "Loba Andrade is a thief who lost her parents to Revenant's assassinations. She joined the Apex Games to gain access to the Syndicate's resources and seek revenge on Revenant.",
    },
    {
      src: "rampart.webp",
      alt: "rampart",
      title: "Rampart",
      description: "Rampart's real name is Ramya Parekh, and she is a skilled gunsmith who runs her own modding shop. She joined the Apex Games to showcase her custom weaponry and prove that her business is the best in the Outlands.",
    },
    {
      src: "horizon.webp",
      alt: "horizon",
      title: "Horizon",
      description: "Horizon's real name is Dr. Mary Somers, and she is a brilliant astrophysicist who was trapped in space for years after an experiment went wrong. She eventually made her way back to Earth and joined the Apex Games to fund her research and find a way to save her son.",
    },
    {
      src: "Fuse.webp",
      alt: "fuse",
      title: "Fuse",
      description: "Fuse's real name is Walter Fitzroy, and he is a former mercenary and explosives expert. He lost his arm in a bomb explosion and replaced it with a prosthetic arm that doubles as a grenade launcher. He joined the Apex Games to showcase his skills and earn some extra cash.",
    },
    {
      src: "valk.webp",
      alt: "valk",
      title: "Valk",
      description: "Valkyrie's real name is Kairi Imahara, and she is the daughter of a former pilot who was killed in the Titan Wars. She found her father's old jetpack and used it to become a skilled pilot and mercenary. She joined the Apex Games to honor her father's legacy and seek revenge on the people who killed him.",
    },
    {
      src: "seer.webp",
      alt: "seer",
      title: "Seer",
      description: "Seer's real name is Obi Edolasim, and he is a talented artist who developed the ability to see sound waves. He joined the Apex Games to find his missing mother, who was also a talented artist.",
    },
    {
      src: "ash.webp",
      alt: "ash",
      title: "Ash",
      description: "Dr. Ashleigh Reid - still very much a human - learned early that the only person who was going to look out for her was herself. One day, she was hired by a mercenary group for a delicate job: steal an experimental fuel source being researched in the Outlands city of Olympus.",
    },
    {
      src: "mad maggie.webp",
      alt: "mad maggie",
      title: "Mad Maggie",
      description: "Margaret Kōhere - the woman who would one day be known as Mad Maggie - grew up in one of the dustiest, dullest corners of Salvo without any family to speak of. She was fortunate, then, to meet a kindred chaotic spirit: an adventurous young boy named Walter Fitzroy.",
    },
    {
      src: "newcastle.webp",
      alt: "newcastle",
      title: "Newcastle",
      description: "A top soldier for the IMC, Jackson went AWOL when he ignored direct orders to fight what he believed was a losing battle. He knew he would never be safe from the remnants of the IMC--and neither would his sister, Anita, as long as she was with him. So when he was presumed dead in a ship explosion, he used that opportunity to leave his life behind, even if it meant leaving her behind too.",
    },
    {
      src: "vantage.webp",
      alt: "vantage",
      title: "Vantage",
      description: "Xiomara “Mara” Contreras was born and raised alone on the wild ice planet Págos by her survivalist mother, Xenia. Mara proved gifted with a sniper rifle from the moment she was big enough to look through the scope and reach the trigger at the same time.",
    },
    {
      src: "catalyst.webp",
      alt: "catalyst",
      title: "Catalyst",
      description: "Tressa Crystal Smith isn't everyone's cup of tea-an elegant, standoffish woman, she likes crystals more than she likes most people. She grew up on Boreas, a faltering planet with a deteriorating moon. Conformity and efficiency were necessities there, but that never suited Tressa. Instead, she was more at home with fellow misfits who spent their time on crystal readings, moon rituals and personal witchery",
    },
  ];
  
  var index = 0;
  
  function mostrarImagem() {
    var img = document.getElementById("slideshowImagens");
    img.src = imagens[index].src;
    img.alt = imagens[index].alt;
    update();
  }
  
  function proximaImagem() {
    index++;
    if (index == imagens.length) {
      index = 0;
    }
    mostrarImagem();
    update();
  }
  
  function imagemAnterior() {
    index--;
    if (index < 0) {
      index = imagens.length - 1;
    }
    mostrarImagem();
    update();
  }
  
  function update() {
    var titulo = document.getElementsByTagName("h2")[0];
    var descricao = document.getElementsByTagName("p")[0];
    titulo.innerText = imagens[index].title;
    descricao.innerText = imagens[index].description;
  }
  
  mostrarImagem();
  
  document.getElementById("recuar").addEventListener("click", imagemAnterior);
  document.getElementById("avancar").addEventListener("click", proximaImagem);
  