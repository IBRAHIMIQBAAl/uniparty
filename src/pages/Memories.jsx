import { motion } from 'framer-motion';
import MemoriesGrid from '../components/MemoriesGrid';
import profile3 from '../../assets/m1.jpg';



const Memories = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn">
              University Memories
            </h1>
            <p className="text-xl opacity-90 mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Relive the amazing moments from our time at university
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate__animated animate__fadeIn animate__delay-2s"></div>
          </motion.div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-4 text-dark">
              Our Journey Through University
            </h2>
            <p className="text-gray-600">
              From freshmen orientation to graduation, we've shared countless unforgettable 
              moments together. Here's a collection of our favorite memories.
            </p>
          </motion.div>
          
          <MemoriesGrid />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-bold mb-4">Missing a Memory?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Have a photo or video from our university days that you'd like to share? 
              Send it to us and we'll add it to the collection!
            </p>
            <a 
              href="mailto:memories@university.edu" 
              className="btn btn-primary inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"></path>
              </svg>
              Submit a Memory
            </a>
          </motion.div>
        </div>
      </section>
      
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img 
                  className="h-full w-full object-cover md:w-48" 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="University campus"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                  Coming Soon
                </div>
                <h3 className="mt-1 text-xl font-bold text-dark">
                  Graduation Memories Collection
                </h3>
                <p className="mt-2 text-gray-600">
                  We're working on a special collection of graduation photos and videos. 
                  Stay tuned for updates!
                </p>
                <div className="mt-4">
                  <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                    Coming June 2025
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Memories; 