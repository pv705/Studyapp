import React, { useState, useEffect } from "react";

const subjects = ["Agronomy", "Genetics", "Soil Science"];

/* ---------------- DATA ---------------- */
const quizData = {
  Agronomy: {
    easy: [
      {
        q: "Kharif crop?",
        options: ["Wheat", "Rice", "Gram", "Barley"],
        answer: "Rice",
        topic: "crops",
      },
      {
        q: "Rabi crop?",
        options: ["Rice", "Wheat", "Maize", "Cotton"],
        answer: "Wheat",
        topic: "crops",
      },
      {
        q: "Zaid crop?",
        options: ["Watermelon", "Wheat", "Rice", "Mustard"],
        answer: "Watermelon",
        topic: "crops",
      },
      {
        q: "Green revolution crop?",
        options: ["Wheat", "Cotton", "Tea", "Coffee"],
        answer: "Wheat",
        topic: "history",
      },
      {
        q: "Seed rate affects?",
        options: ["Yield", "Soil", "Water", "None"],
        answer: "Yield",
        topic: "seed",
      },
      {
        q: "Crop rotation improves?",
        options: ["Soil fertility", "Water", "Air", "None"],
        answer: "Soil fertility",
        topic: "cropping",
      },
      {
        q: "Intercropping means?",
        options: ["Two crops", "One crop", "None", "Random"],
        answer: "Two crops",
        topic: "cropping",
      },
      {
        q: "Dryland farming rainfall?",
        options: ["<750mm", "1000mm", "1500mm", "None"],
        answer: "<750mm",
        topic: "climate",
      },
    ],
    medium: [
      {
        q: "Best irrigation?",
        options: ["Flood", "Drip", "Furrow", "None"],
        answer: "Drip",
        topic: "irrigation",
      },
      {
        q: "CRI stage wheat?",
        options: ["Crown root", "Flowering", "Harvest", "None"],
        answer: "Crown root",
        topic: "irrigation",
      },
      {
        q: "C4 plant?",
        options: ["Maize", "Wheat", "Rice", "Barley"],
        answer: "Maize",
        topic: "physiology",
      },
      {
        q: "Weedicide?",
        options: ["Glyphosate", "Urea", "DAP", "None"],
        answer: "Glyphosate",
        topic: "weed",
      },
      {
        q: "Transplanting is done in?",
        options: ["Rice", "Wheat", "Maize", "None"],
        answer: "Rice",
        topic: "methods",
      },
      {
        q: "Critical irrigation stage maize?",
        options: ["Knee high", "Flowering", "None", "Harvest"],
        answer: "Knee high",
        topic: "irrigation",
      },
    ],
    hard: [
      {
        q: "C3 plant?",
        options: ["Wheat", "Maize", "Sugarcane", "None"],
        answer: "Wheat",
        topic: "physiology",
      },
      {
        q: "Harvest index?",
        options: ["Economic/Biological", "Yield/time", "None", "Weight"],
        answer: "Economic/Biological",
        topic: "yield",
      },
      {
        q: "Allelopathy?",
        options: ["Plant inhibition", "Growth boost", "Photosynthesis", "None"],
        answer: "Plant inhibition",
        topic: "weed",
      },
      {
        q: "Cropping intensity?",
        options: ["Gross/Net area", "Yield/time", "None", "Weight"],
        answer: "Gross/Net area",
        topic: "cropping",
      },
      {
        q: "Evapotranspiration?",
        options: ["Loss of water", "Gain water", "None", "Soil"],
        answer: "Loss of water",
        topic: "climate",
      },
    ],
  },

  Genetics: {
    easy: [
      {
        q: "Father of genetics?",
        options: ["Mendel", "Darwin", "Morgan", "Watson"],
        answer: "Mendel",
        topic: "history",
      },
      {
        q: "Monohybrid ratio?",
        options: ["3:1", "1:2:1", "9:3:3:1", "2:1"],
        answer: "3:1",
        topic: "ratios",
      },
      {
        q: "Phenotype?",
        options: ["Visible trait", "DNA", "Gene", "None"],
        answer: "Visible trait",
        topic: "basics",
      },
      {
        q: "Genotype?",
        options: ["Genetic makeup", "Physical", "Both", "None"],
        answer: "Genetic makeup",
        topic: "basics",
      },
      {
        q: "Gene is?",
        options: ["DNA unit", "Protein", "Cell", "None"],
        answer: "DNA unit",
        topic: "basics",
      },
      {
        q: "Allele is?",
        options: ["Variant gene", "Protein", "Cell", "None"],
        answer: "Variant gene",
        topic: "basics",
      },
    ],
    medium: [
      {
        q: "Dihybrid ratio?",
        options: ["9:3:3:1", "3:1", "1:2:1", "None"],
        answer: "9:3:3:1",
        topic: "ratios",
      },
      {
        q: "DNA replication?",
        options: ["Semi", "Full", "Random", "None"],
        answer: "Semi",
        topic: "dna",
      },
      {
        q: "Homozygous?",
        options: ["Same alleles", "Different", "None", "Both"],
        answer: "Same alleles",
        topic: "basics",
      },
      {
        q: "Law of segregation?",
        options: ["Alleles separate", "Combine", "None", "Random"],
        answer: "Alleles separate",
        topic: "laws",
      },
      {
        q: "RNA role?",
        options: ["Protein synthesis", "Energy", "Structure", "None"],
        answer: "Protein synthesis",
        topic: "rna",
      },
    ],
    hard: [
      {
        q: "Crossing over stage?",
        options: ["Prophase I", "Metaphase", "Anaphase", "None"],
        answer: "Prophase I",
        topic: "meiosis",
      },
      {
        q: "Mutation?",
        options: ["DNA change", "Protein", "Cell", "None"],
        answer: "DNA change",
        topic: "mutation",
      },
      {
        q: "Operon model?",
        options: ["Gene regulation", "DNA replication", "None", "Energy"],
        answer: "Gene regulation",
        topic: "regulation",
      },
      {
        q: "Linkage?",
        options: ["Genes together", "Separate", "None", "Random"],
        answer: "Genes together",
        topic: "linkage",
      },
      {
        q: "Codon codes?",
        options: ["Amino acid", "DNA", "Cell", "None"],
        answer: "Amino acid",
        topic: "protein",
      },
    ],
  },

  "Soil Science": {
    easy: [
      {
        q: "Neutral pH?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        topic: "ph",
      },
      {
        q: "Top soil layer?",
        options: ["A", "B", "C", "O"],
        answer: "A",
        topic: "profile",
      },
      {
        q: "Loamy soil?",
        options: ["Balanced", "Sandy", "Clay", "None"],
        answer: "Balanced",
        topic: "soil",
      },
      {
        q: "Water holding highest?",
        options: ["Clay", "Sand", "Loam", "None"],
        answer: "Clay",
        topic: "soil",
      },
      {
        q: "Soil color due to?",
        options: ["Organic matter", "Water", "Air", "None"],
        answer: "Organic matter",
        topic: "properties",
      },
    ],
    medium: [
      {
        q: "Sandy soil?",
        options: ["High drainage", "Low drainage", "High retention", "None"],
        answer: "High drainage",
        topic: "soil",
      },
      {
        q: "Clay soil?",
        options: ["High retention", "Low retention", "None", "Dry"],
        answer: "High retention",
        topic: "soil",
      },
      {
        q: "CEC?",
        options: ["Cation Exchange Capacity", "Carbon Cycle", "None", "Energy"],
        answer: "Cation Exchange Capacity",
        topic: "chemistry",
      },
      {
        q: "Nitrogen deficiency?",
        options: ["Yellow leaves", "Blue", "Red", "None"],
        answer: "Yellow leaves",
        topic: "nutrients",
      },
      {
        q: "Phosphorus helps?",
        options: ["Root growth", "Leaf color", "Water", "None"],
        answer: "Root growth",
        topic: "nutrients",
      },
    ],
    hard: [
      {
        q: "Soil texture?",
        options: ["Particle size", "Color", "Water", "None"],
        answer: "Particle size",
        topic: "texture",
      },
      {
        q: "pH <7?",
        options: ["Acidic", "Basic", "Neutral", "None"],
        answer: "Acidic",
        topic: "ph",
      },
      {
        q: "Micronutrient?",
        options: ["Zn", "N", "P", "K"],
        answer: "Zn",
        topic: "nutrients",
      },
      {
        q: "Humus?",
        options: ["Organic matter", "Mineral", "Water", "None"],
        answer: "Organic matter",
        topic: "organic",
      },
      {
        q: "Soil structure?",
        options: ["Arrangement", "Color", "Water", "None"],
        answer: "Arrangement",
        topic: "structure",
      },
    ],
  },
};

/* ---------------- APP ---------------- */
export default function App() {
  const todayIndex = new Date().getDate() % subjects.length;
  const todaysSubject = subjects[todayIndex];

  const [subject, setSubject] = useState(todaysSubject);
  const [difficulty, setDifficulty] = useState("easy");
  const [streak, setStreak] = useState(0);
  const [mistakes, setMistakes] = useState(
    JSON.parse(localStorage.getItem("mistakes")) || []
  );

  const [currentQ, setCurrentQ] = useState(null);
  const [attempts, setAttempts] = useState(
    JSON.parse(localStorage.getItem("attempts")) || 0
  );
  const [correct, setCorrect] = useState(
    JSON.parse(localStorage.getItem("correct")) || 0
  );

  const [weakMode, setWeakMode] = useState(false);

  /* SAVE */
  useEffect(() => {
    localStorage.setItem("mistakes", JSON.stringify(mistakes));
    localStorage.setItem("attempts", attempts);
    localStorage.setItem("correct", correct);
  }, [mistakes, attempts, correct]);

  /* QUESTION ENGINE */
  const getQuestion = () => {
    let pool = quizData[subject][difficulty];

    if (weakMode && mistakes.length > 0) {
      const weakPool = pool.filter((q) => mistakes.includes(q.topic));
      if (weakPool.length > 0) pool = weakPool;
    }

    const random = pool[Math.floor(Math.random() * pool.length)];
    setCurrentQ(random);
  };

  useEffect(() => {
    getQuestion();
  }, [subject, difficulty, weakMode]);

  /* ANSWER */
  const handleAnswer = (opt) => {
    setAttempts(attempts + 1);

    if (opt === currentQ.answer) {
      setCorrect(correct + 1);
      setStreak(streak + 1);

      if (streak >= 3 && difficulty === "easy") setDifficulty("medium");
      if (streak >= 6 && difficulty === "medium") setDifficulty("hard");
    } else {
      setStreak(0);
      setMistakes((prev) => [...prev, currentQ.topic]);
    }

    getQuestion();
  };

  const accuracy = attempts ? ((correct / attempts) * 100).toFixed(0) : 0;

  return (
    <div style={container}>
      <div style={wrapper}>
        <h1>🚀 Study Space</h1>

        {/* TODAY */}
        <div style={card}>
          <h2>🎯 Today’s Focus</h2>
          <h3>{todaysSubject}</h3>
          <button style={mainBtn} onClick={() => setSubject(todaysSubject)}>
            Start Study
          </button>
        </div>

        {/* SUBJECT */}
        <div style={card}>
          <h2>📚 Subjects</h2>
          {subjects.map((s) => (
            <button key={s} style={button} onClick={() => setSubject(s)}>
              {s}
            </button>
          ))}
        </div>

        {/* QUIZ */}
        <div style={card}>
          <h2>🧠 Quiz ({difficulty})</h2>

          <p>
            <b>{currentQ?.q}</b>
          </p>

          {currentQ?.options.map((opt, i) => (
            <div key={i} style={option} onClick={() => handleAnswer(opt)}>
              {opt}
            </div>
          ))}

          <p>🔥 Streak: {streak}</p>
        </div>

        {/* PROGRESS */}
        <div style={card}>
          <h2>📊 Progress</h2>
          <p>Attempts: {attempts}</p>
          <p>Accuracy: {accuracy}%</p>
        </div>

        {/* WEAK MODE */}
        <div style={card}>
          <h2>🎯 Focus Mode</h2>
          <button style={mainBtn} onClick={() => setWeakMode(!weakMode)}>
            {weakMode ? "Disable Weak Mode" : "Practice Weak Topics"}
          </button>
        </div>

        {/* MESSAGE */}
        <div style={card}>
          <p>Just show up today. You’re doing better than you think ❤️</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- STYLE ---------------- */

const container = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #5f6af2, #8f5cf7, #d946ef)",
  padding: 20,
  color: "#fff",
  fontFamily: "Poppins",
};

const wrapper = {
  maxWidth: 500,
  margin: "0 auto",
};

const card = {
  background: "rgba(255,255,255,0.12)",
  padding: 20,
  borderRadius: 20,
  marginBottom: 15,
};

const option = {
  padding: 10,
  marginTop: 5,
  background: "rgba(255,255,255,0.2)",
  borderRadius: 10,
  cursor: "pointer",
};

const button = {
  margin: 5,
  padding: 10,
  borderRadius: 10,
  border: "none",
  cursor: "pointer",
};

const mainBtn = {
  marginTop: 10,
  padding: 12,
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};
