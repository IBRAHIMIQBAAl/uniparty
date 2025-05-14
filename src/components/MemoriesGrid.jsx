import { useState } from 'react';
import { motion } from 'framer-motion';
import memories from '../data/memories.json';

const MemoriesGrid = () => {
  const [selectedMemory, setSelectedMemory] = useState(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  const openMemory = (memory) => {
    setSelectedMemory(memory);
    document.body.style.overflow = 'hidden';
  };
  
  const closeMemory = () => {
    setSelectedMemory(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {memories.map((memory) => (
          <motion.div
            key={memory.id}
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="cursor-pointer group"
            onClick={() => openMemory(memory)}
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                {memory.type === 'image' ? (
                  <img 
                    src={memory.url} 
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium">Click to view</p>
                </div>
                <div className="absolute top-2 right-2 bg-dark/80 text-white text-xs font-semibold px-2 py-1 rounded">
                  {memory.date}
                </div>
              </div>
              
              <div className="p-5 flex-grow">
                <h3 className="font-bold text-lg mb-2 text-dark">{memory.title}</h3>
                <p className="text-gray-600 text-sm">{memory.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Memory Modal */}
      {selectedMemory && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
          >
            <div className="p-4 flex items-center justify-between border-b">
              <h3 className="font-bold text-xl">{selectedMemory.title}</h3>
              <button 
                onClick={closeMemory}
                className="p-1 rounded-full hover:bg-gray-100"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="overflow-auto flex-grow">
              {selectedMemory.type === 'image' ? (
                <img 
                  src={selectedMemory.url} 
                  alt={selectedMemory.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              ) : (
                <div className="relative pt-[56.25%] h-0">
                  <iframe 
                    src={selectedMemory.url} 
                    title={selectedMemory.title}
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-primary/10 text-primary text-sm font-semibold px-2 py-1 rounded">
                    {selectedMemory.date}
                  </span>
                </div>
                <p className="text-gray-700">{selectedMemory.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default MemoriesGrid; 