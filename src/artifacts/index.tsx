import React, { useState } from 'react';

const InteractiveModule = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [availabilityAnswer, setAvailabilityAnswer] = useState("");
  const [showAvailabilityResult, setShowAvailabilityResult] = useState(false);
  const [biasAnswer, setBiasAnswer] = useState("");
  const [showBiasResult, setShowBiasResult] = useState(false);
  const [shiftExample, setShiftExample] = useState({ input: "QFX", shift: 3, solution: "" });
  const [userShiftAnswer, setUserShiftAnswer] = useState("");
  const [showShiftResult, setShowShiftResult] = useState(false);
  const [probabilityFactor, setProbabilityFactor] = useState(50);
  const [memorizedFactor, setMemorizedFactor] = useState(50);
  const [noiseLevel, setNoiseLevel] = useState(50);
  const [showSimulationResult, setShowSimulationResult] = useState(false);

  const sections = [
    { title: "Introduction", component: <Introduction /> },
    { title: "Human Thinking Shortcuts", component: <HumanThinking 
      availabilityAnswer={availabilityAnswer} 
      setAvailabilityAnswer={setAvailabilityAnswer}
      showAvailabilityResult={showAvailabilityResult}
      setShowAvailabilityResult={setShowAvailabilityResult}
      biasAnswer={biasAnswer}
      setBiasAnswer={setBiasAnswer}
      showBiasResult={showBiasResult}
      setShowBiasResult={setShowBiasResult}
    /> },
    { title: "LLM Reasoning Patterns", component: <LLMReasoning 
      shiftExample={shiftExample}
      userShiftAnswer={userShiftAnswer}
      setUserShiftAnswer={setUserShiftAnswer}
      showShiftResult={showShiftResult}
      setShowShiftResult={setShowShiftResult}
    /> },
    { title: "Factors Affecting LLM Reasoning", component: <FactorsAffectingReasoning 
      probabilityFactor={probabilityFactor}
      setProbabilityFactor={setProbabilityFactor}
      memorizedFactor={memorizedFactor}
      setMemorizedFactor={setMemorizedFactor}
      noiseLevel={noiseLevel}
      setNoiseLevel={setNoiseLevel}
      showSimulationResult={showSimulationResult}
      setShowSimulationResult={setShowSimulationResult}
    /> },
    { title: "Conclusion", component: <Conclusion /> }
  ];

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#EDECEE]">
      {/* Header */}
      <header className="bg-[#E2134E]/10 py-4 border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 bg-[#E2134E]/10">
          <h1 className="text-3xl font-bold text-[#232323]">AI Reasoning: Understanding How Large Language Models Think</h1>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-white h-2">
        <div 
          className="bg-[#E2134E] h-2 transition-all duration-500" 
          style={{ width: `${(currentSection / (sections.length - 1)) * 100}%` }}
        ></div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white py-2 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 flex overflow-x-auto">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`px-4 py-2 mx-1 rounded-t-lg font-medium whitespace-nowrap ${
                currentSection === index 
                  ? "bg-[#D7E9F6] text-[#E2134E] border-b-2 border-[#E2134E]" 
                  : "text-[#232323] hover:bg-[#D7E9F6]/50"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 bg-[#EDECEE]">
        <div className="bg-white rounded-lg shadow-md p-6">
          {sections[currentSection].component}
        </div>
      </main>

      {/* Navigation Buttons */}
      <div className="container mx-auto px-4 py-6 flex justify-between bg-[#EDECEE]">
        <button
          onClick={prevSection}
          disabled={currentSection === 0}
          className={`px-6 py-2 rounded-lg font-medium ${
            currentSection === 0
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-[#D7E9F6] text-[#232323] hover:bg-[#D7E9F6]/80 shadow-sm"
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextSection}
          disabled={currentSection === sections.length - 1}
          className={`px-6 py-2 rounded-lg font-medium ${
            currentSection === sections.length - 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-[#E2134E] text-white hover:bg-[#E2134E]/90 shadow-sm"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Introduction Section
const Introduction = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 p-6 bg-[#E2134E]/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#232323]">Understanding AI Reasoning</h2>
        <p className="mb-4 text-[#232323]">
          Recent studies have shown that Large Language Models (LLMs) like ChatGPT can reason step-by-step to solve problems. 
          But their reasoning, like ours, can get fuzzy or distorted.
        </p>
        <p className="mb-4 text-[#232323]">
          Researchers at Princeton and Yale found that LLMs do reason, but their reasoning might not always be precise. 
          They identified two main factors that can distort reasoning in an LLM:
        </p>
        <ul className="list-disc pl-6 mb-4 text-[#232323]">
          <li><strong>Probability</strong> - preferring answers they've seen more often</li>
          <li><strong>Memorization</strong> - relying on previously learned solutions</li>
        </ul>
        <p className="text-[#232323]">
          In this module, we'll explore how AI reasoning works, compare it to human thinking patterns, 
          and understand what this means for how we work with these systems.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center mb-8 gap-4">
        <div className="flex-1 p-6 bg-[#D7E9F6]/20 rounded-lg border border-[#D7E9F6] shadow">
          <div className="flex items-center justify-center w-full h-24 mb-4 bg-[#D7E9F6]/40 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#E2134E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 text-[#232323]">Human Reasoning</h3>
          <p className="text-[#232323]">
            Humans use mental shortcuts (heuristics) that can sometimes lead to systematic errors.
          </p>
        </div>
        <div className="flex-1 p-6 bg-[#E2134E]/10 rounded-lg border border-[#E2134E]/20 shadow">
          <div className="flex items-center justify-center w-full h-24 mb-4 bg-[#E2134E]/20 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#E2134E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 text-[#232323]">AI Reasoning</h3>
          <p className="text-[#232323]">
            LLMs can exhibit similar biases to humans, despite their different architecture.
          </p>
        </div>
      </div>

      <div className="p-6 bg-[#D7E9F6]/20 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-[#232323]">Key Questions We'll Explore</h3>
        <ul className="space-y-2 text-[#232323]">
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E2134E] text-white mr-2 flex-shrink-0 shadow">1</span>
            <span>How do cognitive shortcuts affect human reasoning?</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E2134E] text-white mr-2 flex-shrink-0 shadow">2</span>
            <span>What similar patterns appear in AI reasoning?</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E2134E] text-white mr-2 flex-shrink-0 shadow">3</span>
            <span>What factors affect the quality of AI reasoning?</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E2134E] text-white mr-2 flex-shrink-0 shadow">4</span>
            <span>How can we work effectively with AI reasoning capabilities?</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Human Thinking Section
const HumanThinking = ({ 
  availabilityAnswer, 
  setAvailabilityAnswer,
  showAvailabilityResult,
  setShowAvailabilityResult,
  biasAnswer,
  setBiasAnswer,
  showBiasResult,
  setShowBiasResult
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#232323]">How Humans Think: Shortcuts and Biases</h2>
      
      {/* Availability Heuristic */}
      <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-[#E2134E]">The Availability Heuristic</h3>
        <p className="mb-4 text-[#232323]">
          Humans often judge probability by how easily examples come to mind—a phenomenon psychologists 
          call the "availability heuristic."
        </p>
        
        <div className="p-4 bg-[#D7E9F6]/30 rounded-lg mb-4">
          <h4 className="font-bold mb-2 text-[#232323]">Famous Example: Tversky & Kahneman (1973)</h4>
          <p className="text-[#232323]">In this classic study, participants were asked:</p>
          <blockquote className="border-l-4 border-[#E2134E] pl-4 py-2 my-2 italic text-[#232323]">
            "What's more common: words beginning with 'K' or words with 'K' as the third letter?"
          </blockquote>
          <p className="text-[#232323]">
            People usually guess words beginning with "K" because examples come to mind quickly. 
            But actually, words with "K" as the third letter are more than twice as common!
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-[#D7E9F6]/10">
          <h4 className="font-bold mb-2 text-[#232323]">Try it yourself!</h4>
          <p className="mb-2 text-[#232323]">Which do you think causes more injuries annually in the US?</p>
          
          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <button 
              className={`flex-1 p-2 rounded-lg border ${availabilityAnswer === 'sharks' ? 'bg-[#E2134E] text-white border-[#E2134E]' : 'border-gray-300 hover:bg-[#EDECEE]'}`}
              onClick={() => setAvailabilityAnswer('sharks')}
            >
              Shark attacks & venomous snake bites
            </button>
            <button 
              className={`flex-1 p-2 rounded-lg border ${availabilityAnswer === 'toilets' ? 'bg-[#E2134E] text-white border-[#E2134E]' : 'border-gray-300 hover:bg-[#EDECEE]'}`}
              onClick={() => setAvailabilityAnswer('toilets')}
            >
              Falling off toilets
            </button>
          </div>
          
          <button 
            className="w-full p-2 bg-[#D7E9F6] rounded-lg font-medium text-[#232323] hover:bg-[#D7E9F6]/80 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!availabilityAnswer}
            onClick={() => setShowAvailabilityResult(true)}
          >
            Submit Answer
          </button>
          
          {showAvailabilityResult && (
            <div className="mt-4 p-4 bg-[#EDECEE] rounded-lg">
              <h5 className="font-bold mb-2 text-[#232323]">Result</h5>
              <p className="text-[#232323]">
                <strong>Falling off toilets</strong> causes significantly more injuries annually than shark attacks and venomous snake bites combined.
              </p>
              <p className="mt-2 text-[#232323]">
                Most people choose shark attacks and snake bites because they're dramatic, widely reported in the news, and make 
                a stronger impression in our minds. This is the availability heuristic in action!
              </p>
              <p className="mt-2 text-[#232323]">
                Approximately 84,600 people are injured from toilet falls annually in the US<sup>1</sup>, while there are only about 88 shark attacks globally<sup>2</sup> and under 8,000 venomous snake bites per year in the US<sup>3</sup>.
              </p>
              <div className="mt-4 text-xs text-gray-500">
                <p><sup>1</sup> <a href="https://www.cpsc.gov/s3fs-public/Consumer-Product-Related-Injuries-and-Deaths-Among-Adults-65-Years-of-Age-and-Older-December-2021.pdf" target="_blank" className="text-[#E2134E] hover:underline">Consumer Product Safety Commission</a></p>
                <p><sup>2</sup> <a href="https://www.floridamuseum.ufl.edu/shark-attacks/yearly-worldwide-summary/#:~:text=Consistent%20with%20long%2Dterm%20trends,60%25%20of%20the%20worldwide%20total." target="_blank" className="text-[#E2134E] hover:underline">Florida Museum of Natural History</a></p>
                <p><sup>3</sup> <a href="https://www.cdc.gov/niosh/outdoor-workers/about/venomous-snakes.html?CDC_AAref_Val=https://www.cdc.gov/niosh/topics/snakes/" target="_blank" className="text-[#E2134E] hover:underline">CDC - Venomous Snakes</a></p>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 bg-[#EDECEE] rounded-lg">
          <h4 className="font-bold mb-2 text-[#232323]">AI Connection</h4>
          <p className="text-[#232323]">
            Large language models can exhibit a similar bias. Trained on massive datasets, they often favor 
            statistically common or familiar responses, even if a less common answer is logically correct.
          </p>
          <p className="mt-2 text-[#232323]">
            For example, researchers found that when an AI model correctly identified an unusual word, such as 
            "STAZ," it would sometimes override its correct reasoning and substitute the more common but 
            incorrect word "STAY."
          </p>
        </div>
      </div>
      
      {/* Confirmation Bias */}
      <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-[#E2134E]">Confirmation Bias</h3>
        <p className="mb-4 text-[#232323]">
          Humans strongly prefer information that matches what we already believe—a bias known as "confirmation bias." 
          We tend to focus more on information that supports our existing beliefs or knowledge, ignoring evidence 
          that disagrees.
        </p>
        
        <div className="p-4 bg-[#D7E9F6]/30 rounded-lg mb-4">
          <h4 className="font-bold mb-2 text-[#232323]">Research Example: Hart et al. (2015)</h4>
          <p className="text-[#232323]">
            When given articles about controversial topics like climate change and gun control, participants 
            spent 36% more time reading information that matched their existing beliefs.
          </p>
          <p className="mt-2 text-[#232323]">
            Another study (Mercier and Sperber, 2013) demonstrated that participants critically examined arguments 
            against their views for 40% longer, actively searching for flaws, while readily accepting arguments 
            that supported their pre-existing beliefs.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 mb-4">
          <h4 className="font-bold mb-2 text-[#232323]">Test Your Bias</h4>
          <p className="mb-2 text-[#232323]">Do you think it's easier to find flaws in arguments that:</p>
          
          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <button 
              className={`flex-1 p-2 rounded-lg border ${biasAnswer === 'agree' ? 'bg-[#E2134E] text-white border-[#E2134E]' : 'border-gray-300 hover:bg-[#EDECEE]'}`}
              onClick={() => setBiasAnswer('agree')}
            >
              Agree with your views
            </button>
            <button 
              className={`flex-1 p-2 rounded-lg border ${biasAnswer === 'disagree' ? 'bg-[#E2134E] text-white border-[#E2134E]' : 'border-gray-300 hover:bg-[#EDECEE]'}`}
              onClick={() => setBiasAnswer('disagree')}
            >
              Disagree with your views
            </button>
            <button 
              className={`flex-1 p-2 rounded-lg border ${biasAnswer === 'equal' ? 'bg-[#E2134E] text-white border-[#E2134E]' : 'border-gray-300 hover:bg-[#EDECEE]'}`}
              onClick={() => setBiasAnswer('equal')}
            >
              Equally easy for both
            </button>
          </div>
          
          <button 
            className="w-full p-2 bg-[#D7E9F6] rounded-lg font-medium text-[#232323] hover:bg-[#D7E9F6]/80 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!biasAnswer}
            onClick={() => setShowBiasResult(true)}
          >
            Submit Answer
          </button>
          
          {showBiasResult && (
            <div className="mt-4 p-4 bg-[#EDECEE] rounded-lg">
              <h5 className="font-bold mb-2 text-[#232323]">Understanding Confirmation Bias</h5>
              <p className="text-[#232323]">
                Research consistently shows that most people find it much easier to spot flaws in arguments that 
                <strong> disagree</strong> with their existing views.
              </p>
              <p className="mt-2 text-[#232323]">
                We naturally apply more scrutiny and critical thinking to ideas that challenge our beliefs, 
                while often accepting supporting evidence with less examination.
              </p>
              <p className="mt-2 text-[#232323]">
                This is confirmation bias at work - we unconsciously filter information to reinforce what we 
                already believe.
              </p>
            </div>
          )}
        </div>
        
        <div className="p-4 bg-[#EDECEE] rounded-lg">
          <h4 className="font-bold mb-2 text-[#232323]">AI Connection</h4>
          <p className="text-[#232323]">
            Artificial intelligence models can also display confirmation bias. A 2024 study by Bergerot found 
            large language models (LLMs) were 26% more likely to generate outputs reflecting their original 
            training, even when provided with new, contradictory data.
          </p>
          <p className="mt-2 text-[#232323]">
            This means that AI systems can be resistant to changing their "mind" when presented with new 
            information, similar to how humans exhibit confirmation bias.
          </p>
        </div>
      </div>

      {/* Memorization */}
      <div className="p-6 bg-white rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-[#E2134E]">Effects of Memorization</h3>
        <p className="mb-4 text-[#232323]">
          Both humans and AI systems can become overly reliant on memorized patterns, even when they're not optimal.
        </p>
        
        <div className="p-4 bg-[#D7E9F6]/30 rounded-lg mb-4">
          <h4 className="font-bold mb-2 text-[#232323]">Example: Luchins' Water Jar Problems</h4>
          <p className="text-[#232323]">
            Researcher Abraham Luchins had participants solve water-jar problems requiring them to measure exact 
            amounts by filling jars. After repeatedly using one strategy, participants continued applying it even 
            when simpler or better solutions existed.
          </p>
          <p className="mt-2 text-[#232323]">
            Similarly, students trained on a routine approach to arithmetic word problems kept applying the same 
            steps to new problems requiring different approaches.
          </p>
        </div>
        
        <div className="p-4 bg-[#EDECEE] rounded-lg">
          <h4 className="font-bold mb-2 text-[#232323]">AI Connection</h4>
          <p className="text-[#232323]">
            The Princeton-Yale study showed that LLMs can be influenced by memorization. For example, if they've 
            seen a specific cipher pattern or logic puzzle repeated in training, they might simply recall the 
            solution to a very similar question—skipping the real step-by-step logic.
          </p>
          <p className="mt-2 text-[#232323]">
            For LLMs, the model's training may effectively "groove in" certain responses, so it quickly recycles 
            them. Sometimes that's helpful because repetition aids learning, but sometimes it fails when the 
            puzzle is only slightly changed.
          </p>
        </div>
      </div>
    </div>
  );
};

// LLM Reasoning Section
const LLMReasoning = ({ 
  shiftExample, 
  userShiftAnswer, 
  setUserShiftAnswer, 
  showShiftResult, 
  setShowShiftResult 
}) => {
  const correctAnswer = "NCU"; // QFX shifted backward by 3 letters
  
  const checkShiftAnswer = () => {
    setShowShiftResult(true);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#232323]">How LLMs Reason: Chain-of-Thought</h2>
      
      <div className="mb-8 p-6 bg-[#D7E9F6]/10 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-[#E2134E]">What is Chain-of-Thought Reasoning?</h3>
        <p className="mb-4 text-[#232323]">
          Chain-of-Thought (CoT) prompting is a technique that improves LLMs' ability to solve complex problems 
          by breaking them down into smaller steps.
        </p>
        
        <div className="flex flex-col md:flex-row mb-4">
          <div className="p-4 bg-[#EDECEE] rounded-t-lg md:rounded-t-none md:rounded-l-lg w-full md:w-1/2">
            <h4 className="font-bold mb-2 text-[#232323]">Standard Prompt</h4>
            <div className="p-3 bg-white/70 rounded border border-gray-200 text-sm text-[#232323]">
              What is the value of 15 × 27 + 13 × 27?
            </div>
            <div className="p-3 bg-white/70 rounded border border-gray-200 mt-2 text-sm text-[#232323]">
              <strong>LLM response:</strong> The value is 756.
            </div>
          </div>
          <div className="p-4 bg-[#D7E9F6]/30 rounded-b-lg md:rounded-b-none md:rounded-r-lg w-full md:w-1/2">
            <h4 className="font-bold mb-2 text-[#232323]">Chain-of-Thought Prompt</h4>
            <div className="p-3 bg-white/70 rounded border border-gray-200 text-sm text-[#232323]">
              What is the value of 15 × 27 + 13 × 27? Think step by step.
            </div>
            <div className="p-3 bg-white/70 rounded border border-gray-200 mt-2 text-sm text-[#232323]">
              <strong>LLM response:</strong><br />
              Step 1: Calculate 15 × 27 = 405<br />
              Step 2: Calculate 13 × 27 = 351<br />
              Step 3: Add the results: 405 + 351 = 756<br />
              The answer is 756.
            </div>
          </div>
        </div>
        
        <p className="mb-4 text-[#232323]">
          As the example shows, Chain-of-Thought prompting encourages the model to show its reasoning process 
          rather than just producing an answer. This approach has been shown to significantly improve performance 
          on complex reasoning tasks.
        </p>
        
        <div className="p-4 bg-[#EDECEE] rounded-lg">
          <h4 className="font-bold mb-2 text-[#232323]">How CoT Works</h4>
          <ol className="list-decimal pl-5 space-y-2 text-[#232323]">
            <li>The model is prompted to break down a complex task into sequential steps</li>
            <li>Each step builds upon the previous one in a logical sequence</li>
            <li>The model can "check its work" as it progresses</li>
            <li>The final answer is derived from the complete sequence of reasoning steps</li>
          </ol>
        </div>
      </div>
      
      <div className="mb-8 p-6 bg-[#E2134E]/5 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-[#E2134E]">Testing AI Reasoning: Shift Ciphers</h3>
        <p className="mb-4 text-[#232323]">
          Researchers at Princeton and Yale used shift ciphers to study how LLMs reason. A shift cipher 
          (also called a Caesar cipher) substitutes each letter with another letter a fixed number of 
          positions away in the alphabet.
        </p>
        
        <div className="p-4 bg-[#D7E9F6]/30 rounded-lg mb-4">
          <h4 className="font-bold mb-2 text-[#232323]">Example: Shift Cipher with Shift = 3</h4>
          <p className="text-[#232323]">
            With a shift of 3, each letter is replaced by the letter that is 3 positions ahead in the alphabet:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="p-2 bg-white rounded border border-gray-200">
              <h5 className="font-bold text-center text-[#232323]">Plain Alphabet</h5>
              <div className="flex flex-wrap justify-center gap-1 mt-2">
                {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter, i) => (
                  <span key={i} className="inline-flex items-center justify-center w-7 h-7 border border-gray-300 rounded">{letter}</span>
                ))}
              </div>
            </div>
            <div className="p-2 bg-white rounded border border-gray-200">
              <h5 className="font-bold text-center text-[#232323]">Shifted Alphabet (ROT-3)</h5>
              <div className="flex flex-wrap justify-center gap-1 mt-2">
                {Array.from('DEFGHIJKLMNOPQRSTUVWXYZABC').map((letter, i) => (
                  <span key={i} className="inline-flex items-center justify-center w-7 h-7 border border-gray-300 rounded">{letter}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white rounded border border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-bold text-center text-[#232323]">Plain Text</h5>
                <p className="text-center text-xl mt-2 text-[#232323]">CAT</p>
              </div>
              <div>
                <h5 className="font-bold text-center text-[#232323]">Encoded Text (ROT-3)</h5>
                <p className="text-center text-xl mt-2 text-[#232323]">FDW</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white">
          <h4 className="font-bold mb-2 text-[#232323]">Try It Yourself: Decode a Shift Cipher</h4>
          <p className="mb-2 text-[#232323]">
            The encoded message <strong>QFX</strong> was created using a shift of 3. 
            Can you decode it to find the original message?
          </p>
          
          <div className="mb-4">
            <label htmlFor="shift-answer" className="block mb-1 font-medium text-[#232323]">Your answer:</label>
            <input
              id="shift-answer"
              type="text"
              value={userShiftAnswer}
              onChange={(e) => setUserShiftAnswer(e.target.value.toUpperCase())}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter decoded message"
              maxLength={3}
            />
          </div>
          
          <button 
            className="w-full p-2 bg-[#D7E9F6] rounded-lg font-medium text-[#232323] hover:bg-[#D7E9F6]/80 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!userShiftAnswer}
            onClick={checkShiftAnswer}
          >
            Check Answer
          </button>
          
          {showShiftResult && (
            <div className="mt-4 p-4 bg-[#EDECEE] rounded-lg">
              <h5 className="font-bold mb-2 text-[#232323]">Result</h5>
              {userShiftAnswer === correctAnswer ? (
                <div className="text-green-600">
                  <p>Correct! NCU is the right answer.</p>
                  <p className="mt-2 text-[#232323]">Here's the reasoning:</p>
                </div>
              ) : (
                <div className="text-[#E2134E]">
                  <p>Not quite. The correct answer is NCU.</p>
                  <p className="mt-2 text-[#232323]">Here's the reasoning:</p>
                </div>
              )}
              <div className="mt-2 p-3 bg-white rounded border border-gray-200 text-[#232323]">
                <p>To decode the message QFX with a shift of 3, we shift each letter backward 3 positions:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Q → N (Q is at position 17, 17-3 = 14, which is N)</li>
                  <li>F → C (F is at position 6, 6-3 = 3, which is C)</li>
                  <li>X → U (X is at position 24, 24-3 = 21, which is U)</li>
                </ul>
                <p className="mt-2">Therefore, QFX decodes to NCU.</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 bg-[#EDECEE] rounded-lg">
          <h4 className="font-bold mb-2 text-[#232323]">How LLMs Perform on Shift Ciphers</h4>
          <p className="text-[#232323]">
            The Princeton-Yale study used shift ciphers as a test case to understand how Chain-of-Thought reasoning 
            works in LLMs. The researchers found that:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-[#232323]">
            <li>With standard prompting (just asking for an answer), LLMs performed poorly</li>
            <li>With Chain-of-Thought prompting, performance improved significantly</li>
            <li>Performance varied based on several factors that we'll explore in the next section</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Factors Affecting Reasoning Section
const FactorsAffectingReasoning = ({ 
  probabilityFactor, 
  setProbabilityFactor,
  memorizedFactor,
  setMemorizedFactor,
  noiseLevel,
  setNoiseLevel,
  showSimulationResult,
  setShowSimulationResult
}) => {
  
  const simulateAccuracy = () => {
    setShowSimulationResult(true);
  };
  
  // Calculate expected accuracy based on the sliders
  const calculateExpectedAccuracy = () => {
    // This is a simplified model for educational purposes
    const probEffect = (probabilityFactor / 100) * 0.4; // 40% weight
    const memEffect = (memorizedFactor / 100) * 0.3;    // 30% weight
    const noiseEffect = ((100 - noiseLevel) / 100) * 0.3; // 30% weight (inverted so less noise = higher accuracy)
    
    return Math.round((probEffect + memEffect + noiseEffect) * 100);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#232323]">Factors Affecting LLM Reasoning</h2>
      
      <div className="mb-8 p-6 bg-[#E2134E]/5 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-[#E2134E]">The Three Key Factors</h3>
        <p className="mb-4 text-[#232323]">
          The Princeton-Yale research identified three main factors that influence how well LLMs reason 
          when using Chain-of-Thought:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-[#D7E9F6]/30 rounded-lg">
            <h4 className="font-bold mb-2 text-[#232323]">1. Probability</h4>
            <p className="text-[#232323]">
              LLMs perform better when the correct answer is a common, high-probability word or phrase.
            </p>
          </div>
          <div className="p-4 bg-[#D7E9F6]/30 rounded-lg">
            <h4 className="font-bold mb-2 text-[#232323]">2. Memorization</h4>
            <p className="text-[#232323]">
              Performance improves on tasks the model has encountered frequently during training.
            </p>
          </div>
          <div className="p-4 bg-[#D7E9F6]/30 rounded-lg">
            <h4 className="font-bold mb-2 text-[#232323]">3. Complexity</h4>
            <p className="text-[#232323]">
              Accuracy decreases as the number of reasoning steps increases, showing limitations in the reasoning process.
            </p>
          </div>
        </div>
        
        <p className="text-[#232323]">
          Because of these three factors, the researchers in this study described LLM reasoning as "a noisy version of true reasoning."
        </p>
      </div>
      
      <div className="mb-8 p-6 bg-[#E2134E]/10 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-[#E2134E]">Evidence from the Shift Cipher Experiments</h3>
        
        <div className="mb-6">
          <h4 className="font-bold mb-3 text-[#232323]">Probability Effects</h4>
          <div className="p-4 bg-[#D7E9F6]/20 rounded-lg">
            <p className="text-[#232323]">
              When tested with common English words like "MARINER" vs. nonsense strings like "XCBROUW":
            </p>
            <ul className="list-disc pl-5 mt-2 text-[#232323]">
              <li>GPT-4's accuracy was 70% for high-probability words</li>
              <li>Accuracy dropped to 26% for low-probability words</li>
              <li>Sometimes the model would override its own correct reasoning steps to produce a more 
              common but incorrect answer</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-bold mb-3 text-[#232323]">Memorization Effects</h4>
          <div className="p-4 bg-[#D7E9F6]/20 rounded-lg">
            <p className="text-[#232323]">
              Performance varied dramatically based on how common certain shift levels are on the internet:
            </p>
            <ul className="list-disc pl-5 mt-2 text-[#232323]">
              <li>Models showed a distinct spike in performance for ROT-13 (shift level 13), which is 
              commonly used in internet forums</li>
              <li>ROT-1 and ROT-3 also showed better performance than other shift levels, matching their 
              frequency in online discussions</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-bold mb-3 text-[#232323]">Complexity Effects</h4>
          <div className="p-4 bg-[#D7E9F6]/20 rounded-lg">
            <p className="text-[#232323]">
              The accuracy of LLM reasoning decreased as the complexity of the task increased:
            </p>
            <ul className="list-disc pl-5 mt-2 text-[#232323]">
              <li>Performance was highest for shift levels requiring fewer steps (like 1-3)</li>
              <li>Performance decreased for shift levels requiring more steps (like 10-15)</li>
              <li>Interestingly, models sometimes found shortcuts (like shifting forward instead of backward 
              for large shift values)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-[#D7E9F6]/10 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-[#E2134E]">Interactive Simulator: LLM Reasoning Accuracy</h3>
        <p className="mb-6 text-[#232323]">
          Adjust the sliders below to see how different factors might affect an LLM's reasoning accuracy. 
          <em className="text-sm text-gray-600 block mt-1">*This simplified model illustrates the concepts from the research, not an actual representation of what the real accuracy would be given any hypothetical setting*</em>
        </p>
        
        <div className="mb-6">
          <label className="block mb-2 font-medium text-[#232323]">
            Output Probability: {probabilityFactor}%
            <span className="ml-2 text-sm text-gray-500">
              (How common/probable is the correct answer?)
            </span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={probabilityFactor}
            onChange={(e) => setProbabilityFactor(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Rare word</span>
            <span>Common word</span>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block mb-2 font-medium text-[#232323]">
            Memorization: {memorizedFactor}%
            <span className="ml-2 text-sm text-gray-500">
              (How often has the model seen this exact pattern before?)
            </span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={memorizedFactor}
            onChange={(e) => setMemorizedFactor(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Novel pattern</span>
            <span>Familiar pattern</span>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block mb-2 font-medium text-[#232323]">
            Complexity: {noiseLevel}%
            <span className="ml-2 text-sm text-gray-500">
              (How complex is the reasoning task?)
            </span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={noiseLevel}
            onChange={(e) => setNoiseLevel(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Simple task</span>
            <span>Complex task</span>
          </div>
        </div>
        
        <button 
          className="w-full p-3 bg-[#E2134E] text-white rounded-lg font-medium hover:bg-[#E2134E]/90"
          onClick={simulateAccuracy}
        >
          Simulate LLM Accuracy
        </button>
        
        {showSimulationResult && (
          <div className="mt-6 p-4 bg-[#EDECEE] rounded-lg">
            <h4 className="font-bold mb-3 text-[#232323]">Estimated LLM Accuracy</h4>
            
            <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div 
                className="absolute top-0 left-0 h-full bg-[#E2134E]"
                style={{ width: `${calculateExpectedAccuracy()}%` }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                {calculateExpectedAccuracy()}%
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h5 className="font-bold mb-2 text-[#232323]">Analysis</h5>
              <p className="text-[#232323]">
                Based on your selected factors:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[#232323]">
                {probabilityFactor > 70 && (
                  <li>The high probability of the correct answer is helping the model perform well</li>
                )}
                {probabilityFactor < 30 && (
                  <li>The low probability of the correct answer is making it harder for the model</li>
                )}
                {memorizedFactor > 70 && (
                  <li>The model has likely seen similar patterns during training, boosting performance</li>
                )}
                {memorizedFactor < 30 && (
                  <li>This pattern is relatively new to the model, reducing reliance on memorization</li>
                )}
                {noiseLevel > 70 && (
                  <li>The complex reasoning steps are introducing significant noise, reducing accuracy</li>
                )}
                {noiseLevel < 30 && (
                  <li>The simpler reasoning task reduces noise, allowing for better performance</li>
                )}
                {calculateExpectedAccuracy() > 80 && (
                  <li>Overall, these conditions are highly favorable for LLM reasoning</li>
                )}
                {calculateExpectedAccuracy() < 40 && (
                  <li>Overall, these conditions present significant challenges for LLM reasoning</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Conclusion Section
const Conclusion = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#232323]">Understanding AI Reasoning: Key Takeaways</h2>
      
      <div className="mb-8 p-6 bg-[#E2134E]/5 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-[#E2134E]">The Big Picture</h3>
        <p className="mb-4 text-[#232323]">
          The Princeton-Yale research shows that LLMs can indeed reason in a multi-step way. They can systematically 
          break down tasks, handle multiple sub-steps, and combine them.
        </p>
        <p className="mb-4 text-[#232323]">
          However, their reasoning is affected by three key factors:
        </p>
        <ul className="list-disc pl-6 mb-4 text-[#232323]">
          <li><strong>Probability</strong> - the pull of what "sounds right" based on frequency</li>
          <li><strong>Memorization</strong> - the lure of previously seen solutions</li>
          <li><strong>Complexity</strong> - increasing errors as complexity grows</li>
        </ul>
        <p className="text-[#232323]">
          In other words, LLMs sometimes fall into mental shortcuts, not entirely unlike how humans do. These shortcuts can save time 
          but sometimes lead to illogical or incorrect results.
        </p>
      </div>
      
      <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-[#E2134E]">Implications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-[#EDECEE] rounded-lg">
            <h4 className="font-bold mb-2 text-[#232323]">For Working with AI</h4>
            <ul className="list-disc pl-5 space-y-2 text-[#232323]">
              <li>We should approach AI outputs with "calibrated trust" - matching our trust level to the system's capabilities</li>
              <li>Chain-of-Thought prompting can improve results but doesn't guarantee perfect reasoning</li>
              <li>Results will be more reliable for common scenarios the model has likely encountered before</li>
              <li>Complex multi-step reasoning will generally be less reliable than simpler tasks</li>
            </ul>
          </div>
          
          <div className="p-4 bg-[#EDECEE] rounded-lg">
            <h4 className="font-bold mb-2 text-[#232323]">For AI Development</h4>
            <ul className="list-disc pl-5 space-y-2 text-[#232323]">
              <li>Understanding these limitations can help guide improvements in future AI systems</li>
              <li>Techniques to reduce the effects of probability and memorization biases could improve reasoning</li>
              <li>Reducing "noise" in multi-step reasoning processes could enhance complex problem-solving</li>
              <li>Hybrid approaches combining symbolic and neural methods might address some limitations</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-[#D7E9F6]/10 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-[#E2134E]">Final Thoughts</h3>
        <p className="mb-4 text-[#232323]">
          The study of AI reasoning helps us understand both AI and human cognition better. LLMs, not entirely unlike humans, rely on 
          patterns, associations, and shortcuts when solving problems.
        </p>
        <p className="mb-4 text-[#232323]">
          Understanding these similarities and differences can help us:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[#232323]">
          <li>Use AI tools more effectively by recognizing their strengths and limitations</li>
          <li>Design better prompts that guide AI systems toward more reliable reasoning</li>
          <li>Understand where human oversight remains essential</li>
          <li>Appreciate the complex nature of reasoning itself</li>
        </ul>
        
        <div className="p-5 bg-[#E2134E]/5 rounded-lg mb-5">
          <h4 className="font-bold mb-3 text-[#232323]">Rapid Advancement</h4>
          <p className="text-[#232323]">
            It's important to note that AI reasoning capabilities are advancing rapidly. Recent developments in LLM design, training techniques, and prompting strategies continue to push the boundaries of what these systems can achieve in terms of reasoning. As researchers better understand the factors that influence LLM reasoning, we may see significant improvements in their ability to handle complex reasoning tasks with greater reliability and accuracy.
          </p>
        </div>
        
        <div className="p-5 bg-[#D7E9F6]/30 rounded-lg">
          <h4 className="font-bold mb-3 text-[#232323]">Learn More</h4>
          <p className="mb-2 text-[#232323]">
            This module was based on recent research from Princeton and Yale:
          </p>
          <p className="italic text-[#232323]">
            "Deciphering the Factors Influencing the Efficacy of Chain-of-Thought: Probability, Memorization, and Noisy Reasoning" 
            by Akshara Prabhakar, Thomas L. Griffiths, and R. Thomas McCoy (2024)
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveModule;