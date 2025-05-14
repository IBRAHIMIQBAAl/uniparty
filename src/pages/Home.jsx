import HeroSection from '../components/HeroSection';
import StudentCheck from '../components/StudentCheck';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <div>
      <HeroSection />
      <StudentCheck />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Join the Epic Bachelor's Party!
            </h2>
            <p className="text-lg text-gray-600">
              Our journey through university is coming to an end, but not before we have one last legendary celebration!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl mb-4 mx-auto">🎮</div>
              <h3 className="text-xl font-bold mb-2">Gaming Tournament</h3>
              <p className="text-gray-600">
                Show off your skills in our multi-game tournament with prizes for the champions!
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl mb-4 mx-auto">🎵</div>
              <h3 className="text-xl font-bold mb-2">Live DJ & Dancing</h3>
              <p className="text-gray-600">
                Dance the night away with our amazing DJ playing all your favorite tracks!
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl mb-4 mx-auto">🍕</div>
              <h3 className="text-xl font-bold mb-2">Food & Drinks</h3>
              <p className="text-gray-600">
                Unlimited food and drinks to keep the energy high throughout the night!
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#student-check" className="btn btn-primary inline-block animate__animated animate__pulse animate__infinite">
              Check Your Payment Status
            </a>
          </motion.div>
        </div>
      </section>
      
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Party Details</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 text-2xl">📅</div>
                  <div>
                    <h3 className="font-bold text-xl">Date & Time</h3>
                    <p>May Friday, 2025 at 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 text-2xl">📍</div>
                  <div>
                    <h3 className="font-bold text-xl">Location</h3>
                    <p>Shadbag Dadha , Farm House</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 text-2xl">💰</div>
                  <div>
                    <h3 className="font-bold text-xl">Payment</h3>
                    <p>Rs. 1000 per person (includes food, drinks, and entertainment)</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="md:w-1/2 bg-white text-dark p-6 rounded-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
              <p className="mb-4">
                If you have any questions about the event or your payment, please contact the party organizers:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>partycommittee@university.edu</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>(+92) 326-4416-796</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 