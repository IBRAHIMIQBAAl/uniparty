import { motion } from 'framer-motion';
import 'animate.css';
import home from '../../assets/home.jpg';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        duration: 0.8
      }
    }
  };

  return (
    <div className="relative bg-dark text-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInUp"
              variants={itemVariants}
            >
              Welcome to the <span className="text-primary">Bachelor's</span> Party Portal!
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 animate__animated animate__fadeInUp animate__delay-1s"
              variants={itemVariants}
            >
              Ready for the most epic graduation celebration? Check if you've paid, see memories, and discover your university character!
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a 
                href="#student-check" 
                className="btn btn-primary animate__animated animate__bounceIn animate__delay-2s"
              >
                Check Your Payment
              </a>
              <a 
                href="/memories" 
                className="btn bg-white text-dark hover:bg-gray-200 animate__animated animate__bounceIn animate__delay-2s"
              >
                View Memories
              </a>
            </motion.div>
          </div>
          
          <motion.div
            variants={imageVariants}
            className="relative block w-full"
          >
            <div className="w-full h-64 md:h-96 lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={home} 
                className="w-full h-full object-cover"
                alt="Graduation Party Hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Class of 2025</h3>
                <p className="text-gray-200 text-base md:text-lg">Join us for the celebration of a lifetime!</p>
              </div>
              <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white text-xs md:text-sm font-semibold px-2 md:px-3 py-1 rounded-full">
                Coming Soon!
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 p-2 md:p-4 bg-white text-dark rounded-lg shadow-lg transform rotate-6 animate__animated animate__tada animate__delay-3s">
              <span className="font-bold text-xs md:text-base">Don't miss it! 🎉</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating elements animation */}
      <div className="absolute top-20 right-20 animate__animated animate__pulse animate__infinite">
        <div className="text-6xl">🎓</div>
      </div>
      <div className="absolute bottom-20 left-[10%] animate__animated animate__pulse animate__infinite animate__delay-2s">
        <div className="text-6xl">🎉</div>
      </div>
      <div className="absolute top-1/2 right-[5%] animate__animated animate__pulse animate__infinite animate__delay-1s">
        <div className="text-6xl">🎊</div>
      </div>
    </div>
  );
};

export default HeroSection; 