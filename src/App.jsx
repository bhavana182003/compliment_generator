import { useState } from "react";

// Mascot image imports
import mascot1 from "./assets/mascot.png";
import mascot2 from "./assets/cinn.png";
import mascot3 from "./assets/dore.png";

const compliments = [
  "You’re doing amazing sweetie 💖",
"You’re a pastel dream ☁️",
"You bring sunshine wherever you go ☀️",
"You make the code sparkle ✨",
"Your vibes are 100% aesthetic 🌸",
"You’re cuter than a baby panda 🐼",
"You're as soft as a cloud ☁️",
"You're the glitter in my glue ✨",
"You radiate cozy energy 🔆",
"You’re the reason flowers bloom 🌷",
"You debug with elegance 🛠️",
"Your logic is poetry in motion 🧠",
"You write cleaner code than VS Code format ✍️",
"You’re the syntax to my semicolon 💻",
"You're like a perfectly optimized algorithm ⚙️",
"Your brain is a beautifully wired neural net 🧬",
"You’re the human version of Stack Overflow ⭐",
"Even your pseudocode is elegant 💫",
"Your intelligence is only rivaled by your kindness 🧠💖",
"You’re enough exactly as you are 🌈",
"You make hard things look easy 🏆",
"You’ve got the kind of energy people want to be around ⚡",
"Your presence is calming, like soft lo-fi 🎵",
"You’re making progress even when it feels slow ⏳",
"Keep shining, the world needs your light 🌟",
"You’re stronger than yesterday 💪",
"You inspire without even trying 🌻",
"If vibes were currency, you’d be rich 💸✨",
"You’re the kind of person memes wish they could be 🖼️",
"You're the main character — even in NPC mode 🎮",
"You're more comforting than late-night snacks 🍕",
"If being awesome was illegal, you'd be in jail 🔒❤️",
"You’re like a stable internet connection — rare and essential 🛜",
"How do you look this good *and* write clean code? 😍",
"Are you made of HTML? Because you’ve got all the right tags 💅",
"You're basically my type — and I don't just mean data type 😉",
"If I had a heart emoji for every time I thought about you, I'd overflow the buffer ❤️",
"You’re the sparkle in my console log ✨",
"Did it hurt? When you fell from the top of the GitHub trending page? 👼",
"You’ve got more charm than a whole stack of stickers 💖",
"If confidence was a commit, you'd be the main branch 🫶",
"You must be a CSS class, because you make everything around you look better 😘",
"Are you an API? Because I keep wanting to call you 🧑‍💻📞",
"You're the 'wow' to my 'npm start' 🚀",
"You must use Tailwind, because you make basic look beautiful 💅",
"Are you always this charming, or is today special? 😉",
"I must be smiling because I just thought of you 😊",
"Are you secretly a poet? Because you just made my day rhyme 🎵",
"If good looks could debug my life, you'd fix everything 😍",
"You have this magical way of making everything feel lighter 🌤️",
"I should warn you — your smile has side effects 💘",
"You're the reason coffee isn't my only daily obsession ☕💖",
"You have that soft kind of confidence that’s impossible to ignore 😌",
"You just walked into the room and upgraded the whole vibe 🔥",
"If compliments were currency, you’d break the economy 💸",

];

const mascots = [mascot1, mascot2, mascot3];

function App() {
  const [compliment, setCompliment] = useState("");
  const [mascot, setMascot] = useState(mascot1);

  const handleGetCompliment = () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    const randomMascot = mascots[Math.floor(Math.random() * mascots.length)];
    setCompliment(randomCompliment);
    setMascot(randomMascot);
  };

  return (
   
  <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
    <div className="relative bg-pink-100 border-2 border-pink-200 rounded-sm shadow-md w-full max-w-md min-h-[400px] font-mono overflow-hidden">
      {/* Title bar */}
      <div className="bg-pink-300 text-pink-900 text-xl font-bold py-2 text-center border-b-2 border-pink-500">
        Compliment Window 💬
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-2xl font-bold text-pink-700">
          Hello cutie 💖
        </h1>

        <img
          src={mascot}
          alt="cute mascot"
          className="w-32 h-auto rounded-md shadow-md animate-float"
        />

        <button
          onClick={handleGetCompliment}
          className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-6 rounded-full shadow transition-all duration-200 text-base"
        >
          Get Compliment!
        </button>

        {compliment && (
          <h2 className="text-lg text-pink-700 bg-red-50 backdrop-blur p-4 rounded-md shadow animate-fadeIn max-w-xs">
            {compliment}
          </h2>
        )}
      </div>
    </div>
  </div>

  );
}

export default App;
