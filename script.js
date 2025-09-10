document.addEventListener('DOMContentLoaded', () => {
  const projects = [
  {
    title: "Autonomous Slambot <br><i>Personal Project</i>",
    language: "C++, Python",
    topic: "Robotics & AI",
    timeframe: "Q3 2025",
    description: "An autonomous robot employing a miniaturized visual SLAM system onboard to navigate and explore its environment, while broadcasting and communicating with a hub computer",
    detailedDescription: "<span class=\"clickable-button\"><a href=#project-highlight class=\"button\">See Project Highlight</a></div>",
    image_small: "images/auto_slambot.png",
    image_full: "images/auto_slambot_processing.png"
  },
  {
    title: "The Gilded Flame <br><i>Programmer Lead</i>",
    language: "Java",
    topic: "Game Design",
    timeframe: "Q1 2025 - Q2 2025",
    description: "A LibGDX powered puzzle platformer with the psychological thrill of the dark unknown",
    detailedDescription: "<div><strong>Long after the collapse</strong> of a once-great empire, a nameless treasure hunter stumbles upon an ancient ruin and is drawn by the promise of <strong>lost riches</strong>. Illuminating and cleverly hurling their way ahead with a flickering <strong>torch</strong>, the treasure hunter navigates the intricate corridors and scavenges <strong>gold</strong>, unaware of the <strong>unknown creatures</strong> lurking in the shadows.</div><br><div>The puzzle design of this game lies heavily on the <strong>light of the torch</strong> and how it can change the behavior of the monsters surrounding the player, as well as modify the environment — be it by burning or activating ancient mechanisms. For my particular contribution, I developed the majority of the game systems, from the <strong>fire spreading</strong> to the <strong>sound engine framework</strong> to the <strong>movement mechanics and interactions</strong>. I spared no detail, and even then, a majority of my work was behind the scenes in helpers and structuring such that my teammates could have an easier time overall developing.",
    image_small: "images/theGildedFlamemini.png",
    image_full: "images/theGildedFlame.png"
  },
  {
    title: "B.O.B. <br><i>Software Engineer</i>",
    language: "Python",
    topic: "Robotics & AI",
    timeframe: "Q3 2023 - Present",
    description: "A MuJoCo project to develop an autonomous system to self-propel a bipedal bot with reinforcment learning",
    detailedDescription: "<div>We aim to develop a cutting-edge protocol that will enable our quarter-scale bipedal exploration robot named <strong>Bipedal Operations Bot</strong>, or <strong>B.O.B.</strong> for short, to walk as <strong>smoothly and naturally</strong> as possible under remote control. B.O.B. will be operated by a <strong>human controller</strong> wearing a <strong>VR headset</strong>, using an intuitive, controller-like interface to direct its movements.</div><br><div>Anyone who has used a VR headset understands that <strong>misalignment</strong> between visual and physical cues can lead to severe <strong>nausea</strong> and discomfort. While we could mitigate this by securing the operator to an omnidirectional treadmill to simulate walking, this solution is not the most <strong>cost-effective</strong> or practical. Instead, our goal is to seamlessly merge <strong>human operator input</strong> with robot movements through <strong>reinforcement learning</strong>. This approach will ensure the most <strong>fluid, realistic interaction</strong> between the operator and the robot as B.O.B. walks, runs, jumps, or even climbs obstacles.</div><br><div>By training the robot to mimic human behaviors — from <strong>view bobbing</strong> to smooth, nuanced actions and <strong>subtle head movements</strong> — we can generate a <strong>semi-realistic experience</strong> that <strong>improves connection</strong> between the operator and the robot. This method enhances the <strong>efficiency</strong> of the entire experience, allowing the operator to feel as if they’re truly controlling the robot, even without physically being present.<br><br>This is a team project with: </div><div class=\"button-box\" style=\"display: flex;\"><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/in/bassem-elkhateeb\" target=\"_blank\" class=\"button\">Bassem Elkhateeb</a></span><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/in/msskhan\" target=\"_blank\" class=\"button\">Mohammad Khan</a></span><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/in/johnson-wang-612204217\" target=\"_blank\" class=\"button\">Johnson Wang</a></span></div>",
    image_small: "images/bobBackpack.png",
    image_full: "images/bobsteps.png"
  },
  {
    title: "Fishery <br><i>Personal Project</i>",
    language: "GDScript",
    topic: "Game Design",
    timeframe: "Q3 2024 - Present",
    description: "A grid-based puzzler game to manipulate the enviroment out of the way and catch that fish",
    detailedDescription: "<div><strong>Fishery</strong> is a grid-based puzzle game that blends physics-driven mechanics with strategic movement where players control a hook navigating a 9x4 underwater grid (potentially larger as levels are developed), constrained by terrain types like seaweed, impassable rocks, and open water. <strong>Gravity</strong> affects objects—rocks sink while pumice floats—requiring careful planning and terrain manipulation to capture fish. The treacherous terrain in conjunction with the fishing hook being limited to pull only in the direction it came from leads to unique puzzling limitations and strategic challenges.</div><br><div>Working on everything from save <strong>file creation</strong> to <strong>sound implementation</strong>, this project is a great way for me to dive into the <strong>module</strong> and <strong>signal</strong> based world of <strong>Godot</strong> while learning more advanced techniques to develop <strong>engaging puzzle designs</strong> and difficulty scaling. Everything from the <strong>JSON</strong> creation to the organization of the tile movement was created to give the player as smooth an experience as possible and something I am striving for in the future. Inspired by <strong>Kingdom</strong> and <strong>Subnautica</strong>, the game’s dynamic underwater world shifts with a <strong>day-night cycle</strong>, evolving scenery, and background wildlife creating a dynamic and enchanting world.</div><br><div>Designed for mobile and console, <strong>Fishery</strong> offers a free-to-play mobile version with optional ads for hints and a premium, ad-free experience for PC and consoles. <strong>Accessibility features</strong> like left-handed controls and colorblind-friendly visuals ensure inclusivity. With a focus on iterative design and player feedback, <strong>Fishery</strong> delivers an engaging, strategy-driven puzzle experience. But, hold on to your hooks because this project is still a <span class=\"highlight\"><strong>Work In Progress!</strong></span><br><br>This is a team project with: </div><div class=\"button-box\" style=\"display: flex;\"><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/in/shania-cabrera\" target=\"_blank\" class=\"button\">Shania Cabrera</a></div>",
    image_small: "images/quarter_fishery.png",
    image_full: "images/fishery.png"
  },
  {
    title: "Portfolio Website <br><i>Personal Project</i>",
    language: "HTML, CSS",
    topic: "Web Development",
    timeframe: "Q1 2025",
    description: "A sleek, minimal, portfolio website showcasing projects to appeal to recruiters as an ideal candidate",
    detailedDescription: "<div>By teaching myself <strong>HTML</strong>, <strong>JavaScript</strong>, and <strong>CSS</strong>, I was able to develop a <strong>portfolio website</strong> that effectively showcased my work, code, and personal projects in a concise and informative format that features a <strong>responsive design</strong> adapting seamlessly to various devices—from large monitors to smaller computer screens—thanks to carefully crafted <strong>CSS media queries</strong> and <strong>flexible layouts</strong>.</div><br><div><strong>Interactivity</strong> is enhanced using <strong>JavaScript</strong> to implement dynamic elements like <strong>card expansion</strong>, allowing each project card to expand on demand to provide the user with more information, keeping the website from getting too cluttered and ultimately prioritizing the <strong>user experience</strong> in communicating the works that I have done.</div>",
    image_small: "images/websitemini.png",
    image_full: "images/websitebiggie.png"
  },
  {
    title: "Advent of Code <br><i>Personal Project</i>",
    language: "Python, Java",
    topic: "Challenges & Class",
    timeframe: "2021 - 2024",
    description: "A collection of programming challenges, enhancing problem-solving skills and algorithmic thinking.",
    detailedDescription: "<div><strong>Advent of Code (AOC)</strong> is a world-renowned coding adventure with <strong>incrementally challenging puzzles</strong> that start as pure problem-solving exercises and later demand <strong>heavy optimization</strong> on larger datasets. I’ve been participating in this challenge since 2020, and with 2024 marking its 10th anniversary, this year was no different.</div><br><div>Using an <strong>inherently slower language</strong>, I had to emphasize <strong>optimizations</strong> to keep execution times reasonable. But even with <strong>memoization, Dijkstra’s algorithm, and set operations</strong>, the later problems pushed beyond raw speed improvements—they required a <strong>deep understanding of the problem itself</strong>.</div><br><div>For example, on <a href=\"https://adventofcode.com/2024/day/17\" class=\"embedded-link\">Day 17</a>, I had to decode unique assembly-esque instructions</strong> to reconstruct a sequence and generate any needed instructions, while <a href=\"https://adventofcode.com/2024/day/24\" class=\"embedded-link\">Day 24</a> required breaking down how a <strong>bit adder</strong> functioned to determine which <strong>logic gates</strong> to swap. Challenges like these go beyond conventional algorithmic thinking, demanding a unique approach to <strong>pattern recognition and problem deconstruction</strong>.</div><br><div>This <strong>annual challenge</strong> remains a fun and engaging tradition that continuously improves my <strong>algorithmic thinking and optimization strategies</strong>.</div>",
    image_small: "images/aocmini.png",
    image_full: "images/aocbiggie.png"
  },
  {
    title: "Mini Compiler <br><i>Software Engineer</i>",
    language: "OCaml",
    topic: "Challenges & Class",
    timeframe: "Q3 - Q4 2024",
    description: "A lightweight compiler built in OCaml, designed to process and optimize simple programs",
    detailedDescription: "<div><strong>I developed a lexer and parser</strong> – using OCaml's built-in lexer support, <strong>OCamllex</strong> – for a custom <strong>mini-SQL language</strong> which involved creating a new <strong>syntax</strong> and defining <strong>keywords</strong> tailored to SQL-like operations. <strong>Variable storage</strong> and <strong>expression parsing</strong> were just some of the aspects I added to create a streamlined <strong>grammar structure</strong> that could execute queries similar to SQL with a focus on <strong>relational operations</strong>.</div><br><div>By using <strong>relational algebra principles</strong>, I ensured that each operation in the language made logical sense and adhered to well-established <strong>relational theory</strong>, ultimately providing an accurate understanding of how the program would process. The result was a <strong>fully functional mini-SQL compiler</strong> capable of executing basic operations in a controlled environment, serving as a strong foundation for further <strong>compiler design</strong> exploration.</div>",
    image_small: "images/compilermini.png",
    image_full: "images/compilerbiggie.png"
  },
  {
    title: "Network Chatroom <br><i>Software Engineer</i>",
    language: "OCaml",
    topic: "Challenges & Class",
    timeframe: "Q3 - Q4 2024",
    description: "A real-time chatroom application written in OCaml, focusing on network communication and concurrency",
    detailedDescription: "<div>Working with <strong>network protocols</strong> and <strong>promises</strong>, I built an application that can host and run multiple users in a single chatroom. Fundamentally, though, the internet is unpredictable, and messages come on their own time or may not even come. Messages take time to send, confirmations are unreliable, and blocking a response that might never come is a great way to lock everything up.</div><br><div>To fix this issue, I leveraged <strong>promises</strong>, a system in which a value doesn’t exist yet but will resolve when it arrives. Now, the system ensures that a promise only returns when it actually has something. Since OCaml’s <strong>concurrency model</strong> is built directly on top of the OS, I took full advantage of <strong>Lwt (Lightweight Threads)</strong> (not actually threading) to handle <strong>network events</strong> asynchronously and keep everything running smoothly.</div><br><div>This <strong>event-driven</strong> approach allowed the chatroom to juggle multiple users, messages, and network events without deadlocks or forever waiting on an unresponsive client. Thus, it created a fully functional, non-blocking chat system that remains <strong>responsive</strong>, <strong>efficient</strong>, and <strong>scalable</strong>, even under unpredictable network conditions.</div>",
    image_small: "images/chatroommini.jpg",
    image_full: "images/chatroombiggie.png"
  },
  {
    title: "OCaml Terminal Game <br><i>Software Engineer</i>",
    language: "OCaml",
    topic: "Game Design",
    timeframe: "Q4 2024",
    description: "A terminal-based game built in OCaml, leveraging functional programming concepts for game logic",
    detailedDescription: "<div><strong>Moldy Ranger</strong> challenges players to strategically manage their ammo, adding complexity to the <strong>turn-based combat system</strong>. With ammo as a <strong>limited resource</strong>, careful decision-making is essential for victory—players must balance offensive actions with the need to conserve ammunition, introducing a <strong>resource management</strong> element that deepens gameplay and compels <strong>strategic planning</strong>.</div><br><div>We built every aspect of the game <strong>from scratch</strong>—from <strong>rendering</strong> and <strong>collision detection</strong> to <strong>enemy behavior</strong>—giving us full control over both the <strong>design</strong> and the underlying <strong>update mechanisms</strong>. The technical focus was on creating a dynamic, interactive environment using ASCII graphics. Every component, including <strong>level design</strong>, <strong>custom collision detection</strong>, and an informative, <strong>dynamic UI</strong>, was developed in-house to craft a truly immersive experience.</div><br><div>We structured the game around <strong>functional programming strategies</strong>, leveraging <strong>immutable data structures</strong> to represent the <strong>game state</strong> so it could be safely updated without side effects. <strong>Recursive state management</strong> was also implemented to control the game’s progression seamlessly. Ultimately, this culmination project reinforced my ability to design and implement <strong>complex systems from scratch</strong>, deepened my understanding of <strong>functional programming</strong> and <strong>OCaml</strong>, and sharpened my skills in <strong>algorithm design</strong>, <strong>game mechanics</strong>, and <strong>performance optimization</strong>.<br><br>This was a team project with: </div><div class=\"button-box\" style=\"display: flex;\"><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/in/sethdesilva\" target=\"_blank\" class=\"button\">Seth de Silva</a></span><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/\" target=\"_blank\" class=\"button\">Alan Chen</a></span><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/\" target=\"_blank\" class=\"button\">Aiden Coporaso </a></span></div>",
    image_small: "images/ocamlgamemini.png",
    image_full: "images/ocamlgamebiggie.png"
  },
  {
    title: "Midnight Smack <br><i>Software Engineer Lead</i>",
    language: "C++",
    topic: "Game Design",
    timeframe: "Q1 - Q2 2024",
    description: "A fast-paced action game developed in C++ with real-time mechanics and engaging gameplay",
    detailedDescription: "<div><strong>Sous Chef Su</strong> finds herself in <strong>hot water</strong> as her <strong>cooking fears</strong> boil over to her nightmares. Slash and master <strong>recipe combos</strong> as each <strong>nightfall</strong> approaches to escape the culinary chaos! Learn how to <strong>conquer ingredients</strong> before facing each dish in its entirety.</div><br><div><strong>Midnight Smack</strong> is an <strong>action-packed</strong> game developed for the <strong>Steam Deck</strong> that blends the <strong>intensity of the kitchen</strong> with the <strong>tactical precision</strong> of an <strong>action platformer</strong>. Every movement mechanic—from <strong>dashing</strong> and <strong>wall bouncing</strong> to <strong>boosts</strong>—is essential for cutting through levels at <strong>master-chef speed</strong>.</div><br><div>Brought on essentially as a <strong>contractor</strong> to the team, my limited role still was <strong>pivotal</strong> in shaping the game’s environment. I created the <strong>obstacles</strong> which in turn allowed for <strong>modular expansion</strong> and a variety of <strong>terrain types</strong>—<strong>damaging</strong>, <strong>moving</strong>, and <strong>breakable</strong> platforms—that added <strong>complexity</strong> and <strong>depth</strong> to each level. Additionally, I laid the groundwork for the game’s <strong>fluid movement mechanics</strong>, ensuring that every <strong>leap</strong>, <strong>dash</strong>, and <strong>rebound</strong> felt <strong>precise</strong> and <strong>responsive</strong>. Beyond the game’s development, <strong>Midnight Smack</strong> was an <strong>incredible introduction to C++</strong>, exposing me to <strong>high-performance game design</strong> as well as the intricacies of <strong>collaborative development</strong> with a large and talented team.<br><br>This was a team project with: </div><div class=\"button-box\" style=\"display: flex;\"><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/in/shania-cabrera\" target=\"_blank\" class=\"button\">Shania Cabrera</a></span><span class=\clickable-button\"><a href=\"https://www.linkedin.com/in/leon-abalos-carranza/\" target=\"_blank\" class=\"button\">Leon Carranza</a></span><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/in/mikaylalin\" target=\"_blank\" class=\"button\">Mikayla Lin</a></span><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/in/lian-liao\" target=\"_blank\" class=\"button\">Lian Liao</a></span><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/in/benjamin-lorence\" target=\"_blank\" class=\"button\">Benjamin Lorence</a></span><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/in/knguyen91939\" target=\"_blank\" class=\"button\">Kassandra Nguyen</a></span><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/in/corbin-stickley-362365253\" target=\"_blank\" class=\"button\">Corbin Stickley</a></span><span class=\"clickable-button\"><span class=\"clickable-button\"><a href=\"https://www.linkedin.com/in/jwang358\" target=\"_blank\" class=\"button\">John Wang</a></span><a href=\"https://www.linkedin.com/in/ashley-xiang\" target=\"_blank\" class=\"button\">Ashley Xiang</a></span></div>",
    image_small: "images/midnightsmackmini.png",
    image_full: "images/midnightsmackbiggie.png"
  },
  {
    title: "GUI Image Remover <br><i>Software Engineer</i>",
    language: "Java",
    topic: "Challenges & Class",
    timeframe: "Q2 2024",
    description: "A Java-based graphical application for removing backgrounds from images with an intuitive UI",
    detailedDescription: "<div>Java's <strong>GUI system</strong> and <strong>image analysis</strong> allowed for me to develop an application that could <strong>process an image</strong> and allow the user to <strong>trace out an outline</strong> of a shape of interest, move the <strong>vertices</strong> for optimal placement post-completion of a polygon, and then <strong>save the cutout polygon</strong> to a file for use.</div><br><div>The conjunction of the <strong>Java framework</strong> and the ease to iteratively developing the code allowed for a quick and straightforward development of <strong>classic algorithms</strong> such as <strong>Dijkstra's</strong>, but with a twist as the <strong>weights of arcs</strong> were dependent on the gradient of the pixel color they were from their neighbors. Not to mention the necessity of a <strong>state machine</strong> from switch between each phase from the smart scissor cutting step to allowing the user to manipulate the vertices in <strong>real time</strong>.</div>",
    image_small: "images/guimini.png",
    image_full: "images/guibiggie.png"
  },
  {
    title: "Stock-er <br><i>Personal Project</i>",
    language: "Python",
    topic: "Robotics & AI",
    timeframe: "Q4 2023 - Q1 2024",
    description: "An AI-powered stock tracking tool that analyzes market trends and provides investment insights",
    detailedDescription: "<div>Wanting to jump in and learn more about developmenting in <strong>AI</strong>, I took on a project to try and <strong>track the stock market</strong>. Using past <strong>closing and opening rates</strong> as well as general <strong>market trends</strong>, I was able to track the stock price of generally stable companies to <strong>± couple dollars</strong>. Yet, it is still important to remember that the difference in cents defines the day-to-day changes. Ultimately, this project gave me valuable insight into how to <strong>train and develop an AI</strong>, but it yielded no financial success.</div><br><div>The project itself was powered by <strong>TensorFlow</strong> and pulled <strong>5-year datasets</strong> from companies such as <strong>Apple, Google, and General Motors</strong>, as well as scraping the web for news regarding <strong>relevant financial trends</strong> in each economic sector. It combined general predictions and put the information through a multitude of <strong>processing layers</strong of the market to accomplish this <strong>delta-dollar accuracy</strong>. More data is everything in training AI, as larger sets provide more information, but I was starting to meet <strong>paywalls</strong> and had <strong>limited knowledge of stocks</strong>, so the project ended with my stable prediction of stable companies.</div>",
    image_small: "images/stockermini.jpg",
    image_full: "images/stockerbiggie.png"
  }
  ];
  const projectListTop = document.getElementById('project-list-top');
  const projectListBottom = document.getElementById('project-list-bottom');
  const projectListExpanded = document.getElementById('project-list-expanded');
  const cards = [];

  function collapseExpandedCard() {
    const current = document.querySelector('.project-card.expanded');
    if (current) {
      current.classList.remove('expanded');
      current.querySelector('.detailed-description').style.display = 'none';
      current.querySelector('.short-description').style.display = 'block';
      const small = current.querySelector(".project-header-image-small");
      const large = current.querySelector(".project-header-image-large");
      if (small && large) {
        small.style.display = "block";
        large.style.display = "none";
      }
    }
  }

  function renderProjects() {
    projectListTop.innerHTML = "";
    projectListBottom.innerHTML = "";
    projectListExpanded.innerHTML = "";
    cards.length = 0;
    projects.forEach((project, index) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-index", index);
      card.setAttribute("data-language", project.language);
      card.setAttribute("data-topic", project.topic);
      card.innerHTML = `
        <div class="project-header">
          <div class="project-header-text">
            <h3 style="margin-top: 0;">${project.title}</h3>
            <div><strong>Language:</strong> ${project.language}</div>
            <div><strong>Topic:</strong> ${project.topic}</div>
            <div><strong>Timeframe:</strong> ${project.timeframe}</div>
          </div>
          ${
            (project.image_small && project.image_full)
              ? `
                <div class="project-header-image-small">
                  <img src="${project.image_small}" alt="${project.title} small" class="project-image-small">
                </div>
                <div class="project-header-image-large">
                  <img src="${project.image_full}" alt="${project.title} large" class="project-image-large">
                </div>
              `
              : (project.image ? `
                <div class="project-header-image">
                  <img src="${project.image}" alt="${project.title} image" class="project-image">
                </div>
              ` : "")
          }
        </div>
        <div class="short-description">${project.description}</div>
        <div class="detailed-description">${project.detailedDescription || ""}</div>
      `;
      card.querySelector(".detailed-description").style.display = "none";
      if (project.image_small && project.image_full) {
        const smallImg = card.querySelector(".project-header-image-small");
        const largeImg = card.querySelector(".project-header-image-large");
        if (smallImg && largeImg) {
          smallImg.style.display = "block";
          largeImg.style.display = "none";
        }
      }
      cards.push(card);
      card.addEventListener("click", () => {
        if (card.classList.contains("expanded")) {
          collapseExpandedCard();
          renderProjects();
          return;
        }
        collapseExpandedCard();
        projectListExpanded.innerHTML = "";
        projectListExpanded.appendChild(card);
        card.classList.add("expanded");
        card.querySelector(".detailed-description").style.display = "block";
        card.querySelector(".short-description").style.display = "none";
        if (project.image_small && project.image_full) {
          const smallImg = card.querySelector(".project-header-image-small");
          const largeImg = card.querySelector(".project-header-image-large");
          if (smallImg && largeImg) {
            smallImg.style.display = "none";
            largeImg.style.display = "block";
          }
        }
        projectListTop.innerHTML = "";
        projectListBottom.innerHTML = "";
        const visibleCards = cards.filter(c => c.style.display !== "none")
          .sort((a, b) => parseInt(a.getAttribute("data-index")) - parseInt(b.getAttribute("data-index")));
        const expandedIndex = visibleCards.findIndex(c => c === card) + 1;
        const threshold = Math.floor(expandedIndex / 2) * 2;
        visibleCards.forEach((c, idx) => {
          if (c === card) return;
          const pos = idx + 1;
          if (pos <= threshold) {
            if (expandedIndex % 2 === 0 && pos === expandedIndex - 1) {
              projectListBottom.appendChild(c);
            } else {
              projectListTop.appendChild(c);
            }
          } else {
            projectListBottom.appendChild(c);
          }
        });
        updateProjectListVisibility();
        const topPadding = 120;
        const cardTop = card.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: cardTop - topPadding, behavior: "smooth" });
        header.classList.add('hidden-header');
      });
      projectListTop.appendChild(card);
    });
    updateProjectListVisibility();
  }

  function filterProjects() {
    collapseExpandedCard();
    const lang = document.getElementById('language').value;
    const topic = document.getElementById('topic').value;
    projectListTop.innerHTML = "";
    projectListBottom.innerHTML = "";
    projectListExpanded.innerHTML = "";
    const matching = [];
    cards.forEach(card => {
      const cardLang = card.getAttribute('data-language');
      const cardTopic = card.getAttribute('data-topic');
      const matches = (
        !lang || cardLang.split(',').map(l => l.trim()).includes(lang)
      ) && (
        !topic || cardTopic.split(',').map(t => t.trim()).includes(topic)
      );
      card.style.display = matches ? "block" : "none";
      if (matches) matching.push(card);
    });
    matching.sort((a, b) => parseInt(a.getAttribute('data-index')) - parseInt(b.getAttribute('data-index')));
    matching.forEach(card => projectListTop.appendChild(card));
    updateProjectListVisibility();
  }

  function updateProjectListVisibility() {
    [projectListTop, projectListExpanded, projectListBottom].forEach(container => {
      container.style.display = container.childElementCount === 0 ? 'none' : 'grid';
    });
  }

  document.getElementById('language').addEventListener('change', filterProjects);
  document.getElementById('topic').addEventListener('change', filterProjects);
  document.getElementById('reset-filters').addEventListener('click', () => {
    const langSelect = document.getElementById('language');
    const topicSelect = document.getElementById('topic');
    langSelect.value = "";
    topicSelect.value = "";
    langSelect.dispatchEvent(new Event('change'));
    topicSelect.dispatchEvent(new Event('change'));
  });

  renderProjects();
});

let lastScrollY = window.scrollY;
const header = document.querySelector('.site-header');
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (window.scrollY > lastScrollY + 3) {
        header.classList.add('hidden-header');
      } else if (window.scrollY < lastScrollY - 1.7) {
        header.classList.remove('hidden-header');
      }
      lastScrollY = window.scrollY;
      ticking = false;
    });
    ticking = true;
  }
});