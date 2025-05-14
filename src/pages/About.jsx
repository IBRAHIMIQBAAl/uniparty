import { motion } from 'framer-motion';
import profile1 from '../../assets/1.png';
import profile2 from '../../assets/2.png';
import profile3 from '../../assets/3.png';
import profile4 from '../../assets/4.png';

const About = () => {
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
              About This Website
            </h1>
            <p className="text-xl opacity-90 mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Learn more about our graduation celebration portal
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate__animated animate__fadeIn animate__delay-2s"></div>
          </motion.div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-dark">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                This website was created to celebrate our time at university and to coordinate our epic
                bachelor's graduation party. After years of hard work, late nights studying, and unforgettable 
                memories, we deserve a proper send-off!
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our goal is to create a platform where all graduating students can:
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Check if they've paid for the bachelor's party</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Browse and share memories from our university years</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Discover their unique university character profile</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Get all the information about our upcoming graduation celebration</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="University graduates celebrating" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-dark">
              Meet the Team
            </h2>
            <p className="text-gray-600">
              This website was created by a dedicated team of graduating students who
              wanted to make our final celebration truly memorable.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMember 
              name="Muhammad Zubair"
              role="Lead Organizer"
              image={profile1}
              delay={0.1}
            />
            <TeamMember 
              name="Abdul Hameed"
              role="Finance Manager"
              image={profile2}
              delay={0.2}
            />
            <TeamMember 
              name="Muhammad Ibrahim"
              role="Web Developer"
              image={profile3}
              delay={0.3}
            />
            <TeamMember 
              name="Muzamil Mushtaq"
              role="Event Coordinator"
              image={profile4}
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <FAQ 
                    question="How can I pay for the bachelor's party?"
                    answer="You can pay using the payment link that was sent to your university email. If you haven't received it, contact the finance manager at payment@university.edu."
                  />
                  <FAQ 
                    question="Can I bring a plus one to the party?"
                    answer="Yes! Plus ones are welcome, but they'll need to pay the same entry fee. Please register them by emailing their details to plusone@university.edu."
                  />
                  <FAQ 
                    question="What should I wear to the party?"
                    answer="The dress code is semi-formal. Please avoid sneakers and jeans, but you don't need to wear a full suit or gown either."
                  />
                  <FAQ 
                    question="How can I contribute to the memories page?"
                    answer="Send your photos and videos to memories@university.edu with a brief description, and we'll add them to the collection!"
                  />
                  <FAQ 
                    question="Is there transportation arranged for the party?"
                    answer="Yes, we'll have shuttle buses running from the main campus to the venue starting at 7:30 PM. Return shuttles will run until 2 AM."
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-dark">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Have questions, suggestions, or want to help with the party planning? 
              Get in touch with us!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:party@university.edu" 
                className="btn btn-primary inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Email Us
              </a>
              
              <a 
                href="https://instagram.com/universityparty" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const TeamMember = ({ name, role, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="aspect-w-1 aspect-h-1">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-dark">{name}</h3>
        <p className="text-primary font-medium">{role}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-primary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-primary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.2v4.26H8.014v-8.6h2.557v1.18h.037c.355-.67 1.227-1.38 2.535-1.38 2.7 0 3.21 1.8 3.21 4.12v4.68zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.6H3.667v8.6z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-primary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3.5 3.5a1 1 0 010 1.414l-3.5 3.5a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const FAQ = ({ question, answer }) => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h4 className="text-lg font-bold mb-2 text-dark">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default About; 