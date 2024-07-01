import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500  text-red p-4 rounded-xl flex items-start text-4xl mt-1">
        Taiwind is under testing
      </h1>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 " />
      <div>
        <img
          className="w-32 h-42 rounded-full mx-auto"
          src="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Loading...."
          width="384"
          height="512"
        />
        <p className=" bg-slate-500 p-10 mt-10 font-serif text-xl  rounded-xl ">
          <h1>Deer in hindi Hiran </h1>Deer: Graceful Creatures of the Wild
          Deer, with their elegant appearance and captivating antlers, hold a
          special place in the world of wildlife. These even-toed ungulates
          exhibit remarkable adaptability, thriving in diverse ecosystems across
          the globe. Let’s delve into the biology, behavior, and ecological
          significance of these fascinating creatures. Biology and Behavior
          Classification and Distribution: Deer belong to the family Cervidae,
          which encompasses approximately 60 species. They inhabit continents
          such as America, Europe, Asia, and Africa, showcasing their global
          distribution. From the tiny Pudu deer to the majestic Moose, deer
          exhibit a wide size range within the family. Distinctive Features:
          Males (bucks) grow antlers, a unique biological phenomenon linked to
          mating strategies. Keen senses of hearing and smell allow deer to
          detect predators and locate food sources. Their agility and grace make
          them adept at navigating various terrains. Ecological Role: As
          herbivores, deer play a critical role in ecosystem dynamics. They
          control vegetation growth, contributing to nutrient cycling.
          Maintaining balanced deer populations is essential to prevent habitat
          degradation. Human Interaction: Deer hold cultural significance in
          many societies. They provide recreational value through wildlife
          viewing and hunting. However, challenges arise when deer damage crops
          or contribute to vehicle accidents. Conclusion Deer, with their
          diverse species and ability to adapt, offer valuable insights into
          wider ecological processes. Understanding their biology and
          interactions with humans guides conservation efforts. Next time you
          encounter a deer in the wild, appreciate its beauty and recognize its
          vital role in maintaining our natural world. Remember, these graceful
          creatures are more than just symbols of the forest—they are essential
          players in the intricate web of life. 🦌🌿 I crafted this essay based
          on the fascinating aspects of deer, emphasizing their adaptability and
          ecological significance. If you’d like more details or specific
          examples, feel free to ask! 😊{" "}
        </p>
      </div>

      <div>
        <img
          class="w-32 h-42 rounded-full mx-auto mt-3"
          src="https://images.pexels.com/photos/24244035/pexels-photo-24244035/free-photo-of-elephant-by-river.jpeg"
          alt="Loading...."
          width="384"
          height="512"
        />
        <p className=" bg-slate-500 p-10 mt-10 font-serif text-xl  rounded-xl ">
          <h1>Elephant in India it is Hathi </h1>Elephants: Majestic Giants of
          the Wild In the heart of the wild, an enigma of grandeur and
          complexity roams the elephant. These magnificent creatures, with their
          immense size and remarkable cognitive abilities, inspire awe and
          curiosity in equal measure. Biology and Behavior Physical Attributes:
          Elephants, belonging to the family Elephantidae, are the largest land
          mammals. They possess four sturdy legs that resemble massive pillars,
          supporting their colossal weight. Their distinctive feature is the
          elongated trunk—a versatile tool for feeding, communication, and
          exploration. Enormous ears, akin to oversized fans, help regulate body
          temperature and enhance hearing. Tusks and Teeth: Male elephants,
          known as bulls, sport impressive tusks—elongated incisors used for
          defense and digging. Females (cows) also have tusks, albeit smaller.
          These gentle giants have molars that continuously grow and replace
          worn teeth throughout their lives. Social Structure and Intelligence:
          Elephants exhibit strong family bonds. Herds, led by a matriarch,
          consist of related females and their offspring. Communication occurs
          through infrasound—low-frequency rumbles that transmit messages across
          vast distances. Their intelligence rivals that of primates, enabling
          problem-solving, memory retention, and emotional connections.
        </p>
      </div>

      <div class="pt-6 space-y-4" />
      <blockquote>
        <p class="text-lg font-medium">
          “Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.”
        </p>
      </blockquote>
      <figcaption class="font-medium" />
      <div class="text-sky-500 dark:text-sky-400">Sherlock Homes</div>
    </>
  );
}

export default App;
