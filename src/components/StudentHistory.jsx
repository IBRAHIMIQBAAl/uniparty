import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import studentHistoryData from '../data/studentHistory.json';

const StudentHistory = () => {
  const [name, setName] = useState('');
  const [studentInfo, setStudentInfo] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);
  const inputRef = useRef(null);
  
  // Handle clicks outside the suggestions box
  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target) && 
          inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle input change and filter suggestions
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    
    if (inputValue.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    
    const filteredSuggestions = studentHistoryData
      .filter(student => 
        student.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        student.name !== "Default Student"
      )
      .map(student => student.name);
    
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  // Select a suggestion and find student history
  const selectSuggestion = (selected) => {
    setName(selected);
    setSuggestions([]);
    setShowSuggestions(false);
    
    // Auto search after selection
    findStudentHistoryByName(selected);
  };
  
  const findStudentHistoryByName = (studentName) => {
    setIsSearching(true);
    setStudentInfo(null);
    
    // Simulate search delay
    setTimeout(() => {
      const foundStudent = studentHistoryData.find(
        student => student.name.toLowerCase() === studentName.trim().toLowerCase()
      ) || studentHistoryData.find(student => student.name === "Default Student");
      
      setStudentInfo(foundStudent);
      setIsSearching(false);
    }, 800);
  };
  
  const findStudentHistory = () => {
    if (!name.trim()) return;
    findStudentHistoryByName(name);
  };
  
  // Choose the right emoji based on character title
  const getCharacterEmoji = (character) => {
    if (character.includes("Gandu")) return "💩";
    if (character.includes("Code") || character.includes("Programmer")) return "👨‍💻";
    if (character.includes("Scholar") || character.includes("Academic")) return "🧠";
    if (character.includes("Navigator") || character.includes("Explorer")) return "🧭";
    if (character.includes("Translator")) return "🗣️";
    if (character.includes("Tech") || character.includes("Oracle")) return "🔮";
    if (character.includes("Genius")) return "☕";
    if (character.includes("Wizard")) return "✨";
    if (character.includes("Inquirer")) return "❓";
    if (character.includes("Survivor")) return "🎒";
    if (character.includes("Celebrity")) return "🌟";
    if (character.includes("Renaissance")) return "🎨";
    if (character.includes("Ally")) return "🤝";
    if (character.includes("Debater")) return "⚖️";
    if (character.includes("Entertainer")) return "🎭";
    if (character.includes("Engineer")) return "🛠️";
    if (character.includes("Intellect")) return "💪";
    if (character.includes("Comic")) return "😂";
    if (character.includes("Philosopher")) return "🧘";
    if (character.includes("Dynamo")) return "⚡";
    if (character.includes("Critic")) return "🍔";
    if (character.includes("Performer")) return "⏰";
    if (character.includes("Trendsetter")) return "👔";
    if (character.includes("Mastermind")) return "🎵";
    if (character.includes("Connector")) return "🌐";
    if (character.includes("Analyst")) return "📊";
    if (character.includes("Coder")) return "⌨️";
    if (character.includes("Troubleshooter")) return "🧘‍♂️";
    if (character.includes("Adventurer")) return "🧗";
    if (character.includes("Catalyst")) return "🔗";
    if (character.includes("Mentor")) return "👨‍🏫";
    return "🎓";
  };
  
  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-6 md:p-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Discover University Character</h2>
        
        <div className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={handleInputChange}
                onFocus={() => name.trim() !== '' && setShowSuggestions(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    findStudentHistory();
                    setShowSuggestions(false);
                  }
                }}
                placeholder="Type a student name..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                autoComplete="off"
              />
              
              {/* Autocomplete Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div 
                  ref={suggestionsRef}
                  className="absolute z-20 w-full mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm"
                >
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-primary hover:text-white"
                      onClick={() => selectSuggestion(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={findStudentHistory}
              disabled={isSearching || !name.trim()}
              className={`btn btn-primary py-2 px-4 whitespace-nowrap ${isSearching ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSearching ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching...
                </>
              ) : 'Reveal Character'}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Type a student name to discover their legendary university character!
          </p>
        </div>
        
        <AnimatePresence>
          {studentInfo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="border-t border-gray-200 pt-6"
            >
              <div className="text-center mb-4">
                <motion.h3 
                  className="text-xl font-bold text-primary"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {studentInfo.name}
                </motion.h3>
                <motion.p 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mt-2"
                >
                  {studentInfo.character}
                </motion.p>
              </div>
              
              <motion.div 
                className="bg-gray-50 rounded-lg p-6 mt-6 relative overflow-hidden"
                initial={{ backgroundColor: "#f9f9f9" }}
                animate={{ backgroundColor: ["#f9f9f9", "#f0f7ff", "#f9f9f9"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-5xl"
                >
                  {getCharacterEmoji(studentInfo.character)}
                </motion.div>
                
                <blockquote className="text-gray-700 font-medium text-center text-lg leading-relaxed mt-5 px-2 py-2 font-urdu">
                  "{studentInfo.description}"
                </blockquote>
                
                <div className="mt-8 flex justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary hover:text-primary-dark inline-flex items-center text-sm font-medium"
                    onClick={() => window.location.href = "/memories"}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                    </svg>
                    See Memories
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 hover:text-gray-900 inline-flex items-center text-sm font-medium"
                    onClick={() => {
                      setName('');
                      setStudentInfo(null);
                    }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
                    </svg>
                    Try Another Name
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <div className="max-w-2xl mx-auto mt-12 text-center">
        <h3 className="text-xl font-bold mb-4">About Character Profiles</h3>
        <p className="text-gray-600">
          These character profiles showcase the unique personalities of students from FAST National University.
          Each profile features an exaggerated but affectionate description in Urdu/Hindi slang!
        </p>
        <div className="mt-6">
          <div className="inline-flex items-center bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg text-sm">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
            Profiles contain humorous descriptions written in Urdu/Hindi mixed slang for entertainment purposes.
          </div>
        </div>
      </div>
      
      {/* Quick character finder buttons */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-lg font-bold text-center mb-5">Quick Character Finder</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {studentHistoryData
            .filter(student => student.name !== "Default Student")
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, 12) // Show first 12 students alphabetically
            .map((student, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: "#6366f1", color: "white" }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm transition-colors"
                onClick={() => {
                  setName(student.name);
                  findStudentHistoryByName(student.name);
                }}
              >
                {student.name}
              </motion.button>
            ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full text-sm transition-colors"
          >
            + More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default StudentHistory; 