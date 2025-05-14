import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import paidStudents from '../data/paidStudents.json';

const StudentCheck = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);
  const inputRef = useRef(null);
  const ticketRef = useRef(null);

  // Generate a random ticket number
  // Using React state to track the counter
const [ticketCounter, setTicketCounter] = useState(2701);

const generateTicketNumber = () => {
  const ticketNumber = 'BP-' + ticketCounter + '-2025';
  setTicketCounter(prevCounter => prevCounter + 1);
  return ticketNumber;
}

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

  // Filter suggestions based on input
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    
    if (inputValue.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    
    const filteredSuggestions = paidStudents.filter(student => 
      student.toLowerCase().includes(inputValue.toLowerCase())
    );
    
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  // Select a suggestion
  const selectSuggestion = (selected) => {
    setName(selected);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  // Print ticket function
  const printTicket = () => {
    const originalContent = document.body.innerHTML;
    const ticketContent = ticketRef.current.innerHTML;
    const style = `
      <style>
        @media print {
          body {
            font-family: 'Inter', sans-serif;
            padding: 20px;
          }
          .ticket-print {
            max-width: 500px;
            margin: 0 auto;
            border: 2px solid #6366f1;
            border-radius: 12px;
            padding: 16px;
            background-color: white;
          }
          .ticket-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 12px;
          }
          .ticket-title {
            font-weight: bold;
            font-size: 1.25rem;
            color: #1f2937;
          }
          .ticket-subtitle {
            color: #6366f1;
            font-size: 0.75rem;
            font-weight: 500;
          }
          .ticket-emoji {
            font-size: 1.75rem;
          }
          .ticket-details {
            border-top: 1px solid #e5e7eb;
            border-bottom: 1px solid #e5e7eb;
            padding: 12px 0;
            margin: 8px 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .ticket-detail-label {
            color: #4b5563;
            font-size: 0.875rem;
          }
          .ticket-detail-value {
            font-weight: 500;
            color: #1f2937;
            font-size: 0.875rem;
          }
          .ticket-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 12px;
          }
          .ticket-instructions {
            font-size: 0.75rem;
            color: #4b5563;
            text-align: right;
          }
          .no-print {
            display: none;
          }
        }
      </style>
    `;
    const printContent = `
      <html>
        <head>
          <title>Bachelor's Party Ticket - ${name}</title>
          ${style}
        </head>
        <body>
          <div class="ticket-print">
            ${ticketContent}
          </div>
        </body>
      </html>
    `;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    if (result) {
      setTimeout(() => {
        setResult({...result});
      }, 100);
    }
  };

  const checkPayment = () => {
    if (!name.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const hasMatch = paidStudents.some(
        student => student.toLowerCase() === name.trim().toLowerCase()
      );
      const ticketNumber = generateTicketNumber();
      setResult({
        paid: hasMatch,
        message: hasMatch 
          ? "Congratulations! 🎉 You've paid for the Bachelor's Party. Get ready for an epic celebration!"
          : "Oops! 😕 It looks like we don't have a record of your payment yet. Please contact the organizer.",
        ticketNumber: hasMatch ? ticketNumber : null
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="student-check" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Have You Paid for the Bachelor's Party?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Enter your full name below to check if your payment has been received.
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6">
            <div className="relative">
              <label htmlFor="student-name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Full Name
              </label>
              <input
                ref={inputRef}
                type="text"
                id="student-name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder="Type your name..."
                value={name}
                onChange={handleInputChange}
                onFocus={() => name.trim() !== '' && setShowSuggestions(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    checkPayment();
                    setShowSuggestions(false);
                  }
                }}
                autoComplete="off"
              />
              
              {/* Autocomplete Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div 
                  ref={suggestionsRef}
                  className="absolute z-10 w-full mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm"
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
              onClick={checkPayment}
              disabled={loading || !name.trim()}
              className={`w-full btn btn-primary py-3 flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Checking...
                </>
              ) : 'Check Payment Status'}
            </button>
            
            {result && (
              <motion.div 
                className={`mt-6 p-4 rounded-lg ${result.paid ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    {result.paid ? (
                      <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{result.message}</p>
                    
                    {result.paid && (
                      <motion.div 
                        className="mt-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <div className="border-2 border-primary rounded-lg p-4 bg-white" ref={ticketRef}>
                          <div className="ticket-header flex justify-between items-start mb-3">
                            <div>
                              <h3 className="ticket-title font-bold text-lg text-gray-800">Official Ticket</h3>
                              <p className="ticket-subtitle text-primary text-xs font-medium">Bachelor's Party 2025</p>
                            </div>
                            <div className="ticket-emoji text-3xl">🎓</div>
                          </div>
                          
                          <div className="ticket-details border-t border-b border-gray-200 py-3 my-2 grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="ticket-detail-label text-gray-500">Attendee</p>
                              <p className="ticket-detail-value font-medium text-gray-800">{name}</p>
                            </div>
                            <div>
                              <p className="ticket-detail-label text-gray-500">Ticket #</p>
                              <p className="ticket-detail-value font-medium text-gray-800">{result.ticketNumber}</p>
                            </div>
                            <div>
                              <p className="ticket-detail-label text-gray-500">Date</p>
                              <p className="ticket-detail-value font-medium text-gray-800">May 16, 2025</p>
                            </div>
                            <div>
                              <p className="ticket-detail-label text-gray-500">Location</p>
                              <p className="ticket-detail-value font-medium text-gray-800">Dada Farm House</p>
                            </div>
                          </div>
                          
                          <div className="ticket-footer flex justify-between items-center mt-3">
                            <div className="ticket-instructions text-right w-full">
                              <p className="text-xs text-gray-500 mb-1">Present this ticket at the entrance</p>
                              <button 
                                className="no-print text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center"
                                onClick={printTicket}
                              >
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
                                </svg>
                                Print Ticket
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="no-print mt-3 text-center">
                          <a href="/memories" className="text-primary hover:text-primary-dark font-medium text-sm inline-flex items-center">
                            View party memories
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentCheck; 
