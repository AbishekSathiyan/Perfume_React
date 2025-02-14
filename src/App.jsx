import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Searchbar from "./Searchbar"; // Import the Searchbar component
import Perfume_1 from "./Assets/images/Perfume_1.jpg"; // Import the image
import Perfume_2 from "./Assets/images/Perfume_2.jpg"; // Import the image
import Perfume_3 from "./Assets/images/Perfume_3.jpg"; // Import the image
import ContactForm from "./contact"; // Correct import of ContactForm component

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <main>
        <div className="img_1">
          <img src={Perfume_1} alt="Perfume 1" />
          <h2>Hellenikon</h2>
          <p>Hellenikon is a luxurious fragrance that embodies the elegance of Greek heritage...</p>
        </div>

        <div className="img_2">
          <img src={Perfume_2} alt="Perfume 2" />
          <h2>Eau de Parfum</h2>
          <p>Eau de Parfum is a classic and elegant fragrance type...</p>
        </div>

        <div className="img_3">
          <img src={Perfume_3} alt="Perfume 3" />
          <h2>Brown Black Fragrance</h2>
          <p>Brown Black Fragrance is a deep, warm, and captivating scent...</p>
        </div>
      </main>

      <div className="about">
        <h1>About Us</h1>
        <p>Perfumes are complex mixtures of natural and synthetic ingredients used to create a pleasing fragrance.
          The art of perfumery has been practiced for centuries, with ancient civilizations using fragrances for rituals,
          personal adornment, and as a symbol of status. Modern perfumes typically consist of three key components:
          natural ingredients, synthetic compounds, and fixatives. Natural ingredients like flowers, fruits,
          and spices provide depth, while synthetics allow for unique, long-lasting scents. Fixatives help
          preserve the fragrance and enhance its longevity. A perfume is structured in three layers, known
          as the fragrance pyramid: the top notes (which are the first to be smelled), the middle or heart
          notes (which develop after the top notes fade), and the base notes (which provide lasting depth).
          With various types, from Parfum to Eau de Cologne, each perfume offers different levels of concentration and longevity.
          The creation of a perfume involves careful blending, aging, and refinement by skilled perfumers who aim to evoke
          emotions and memories through their scents.</p>
      </div>

      <div className="about_me">
        <h1>About Me</h1>
        <p>
          I’m Abishek S, a passionate developer currently pursuing my Master's in Computer Applications (MCA)
          at Karpagam Academy of Higher Education. I'm in my final year and have already completed my Bachelor's in Computer Applications (BCA).
          My focus is on full-stack development, and I'm actively learning MERN stack and Python through a course at ErrorMakes Clever.
          I have developed skills in various programming languages, including Python, JavaScript, React.js, Next.js, and Tailwind CSS.
          I'm working on several exciting web projects, such as a Todo app, Guess the Number game, and a student portfolio website.
          As part of my MERN stack course, I’ve also contributed to building the frontend of Udemy, Greenden, and Nostra clones.
          Beyond coding, I have taken on leadership roles in village cultural festivals, public speaking, and volunteer activities.
          I’m passionate about problem-solving, time management, and teamwork. I am actively seeking job opportunities in Web Development
          and related fields where I can apply and grow my skills.
        </p>
      </div>
      <div className="contact">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
