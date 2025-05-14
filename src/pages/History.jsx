import { motion } from 'framer-motion';
import StudentHistory from '../components/StudentHistory';

const History = () => {
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
              Your University Character
            </h1>
            <p className="text-xl opacity-90 mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Discover your legendary character type based on your university history
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full animate__animated animate__fadeIn animate__delay-2s"></div>
          </motion.div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <StudentHistory />
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
              Common University Characters
            </h2>
            <p className="text-gray-600">
              Every student falls into one of these legendary archetypes. Which one are you?
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CharacterCard 
              emoji="🦉"
              name="The Academic Ninja"
              description="Masters the art of acing exams while appearing to do no work at all. Can write a 20-page paper in a single night fueled only by energy drinks."
              color="bg-blue-50 text-blue-800"
            />
            <CharacterCard 
              emoji="🦊"
              name="The Social Butterfly"
              description="Knows everyone on campus and is invited to every party. Often seen recruiting people for 'the best event of the year' which is happening this weekend."
              color="bg-purple-50 text-purple-800"
            />
            <CharacterCard 
              emoji="🐢"
              name="The Resourceful Sleeper"
              description="Sleeps through half their classes but knows all the campus shortcuts. Can find free food anywhere within a 5-mile radius."
              color="bg-green-50 text-green-800"
            />
            <CharacterCard 
              emoji="🐼"
              name="The Organized Sweetheart"
              description="Color-coded notes, five different highlighters, and always brings homemade treats to study groups. Has never missed a deadline in their life."
              color="bg-pink-50 text-pink-800"
            />
            <CharacterCard 
              emoji="🦁"
              name="The Campus Activist"
              description="Passionate about at least three causes and can often be found organizing rallies or collecting signatures. Has strong opinions about everything."
              color="bg-red-50 text-red-800"
            />
            <CharacterCard 
              emoji="🐨"
              name="The Procrastination Master"
              description="Starts every assignment the night before it's due. Somehow still graduates with honors. Fueled by panic and caffeine."
              color="bg-yellow-50 text-yellow-800"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">University Timeline</h3>
              <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
                <TimelineItem 
                  year="2021" 
                  title="Freshman Year" 
                  description="The year of getting lost on campus, making new friends, and wondering if we made the right choice." 
                />
                <TimelineItem 
                  year="2022" 
                  title="Sophomore Slump" 
                  description="COVID hit, and we all became digital students overnight. Zoom University was born." 
                />
                <TimelineItem 
                  year="2023" 
                  title="Junior Resurgence" 
                  description="Back on campus! Everyone suddenly became very serious about their majors." 
                />
                <TimelineItem 
                  year="2024" 
                  title="Senior Excitement" 
                  description="The job hunt begins, thesis stress kicks in, but the end is in sight!" 
                />
                <TimelineItem 
                  year="2025" 
                  title="Graduation" 
                  description="We made it! Time to celebrate years of hard work with an epic party!" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CharacterCard = ({ emoji, name, description, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden h-full"
    >
      <div className={`p-4 ${color}`}>
        <span className="text-4xl">{emoji}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const TimelineItem = ({ year, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute -left-11 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-white"></div>
      </div>
      <div className="mb-1 flex items-center">
        <span className="text-sm font-semibold bg-primary/10 text-primary px-2 py-1 rounded mr-3">
          {year}
        </span>
        <h4 className="text-lg font-bold">{title}</h4>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default History; 