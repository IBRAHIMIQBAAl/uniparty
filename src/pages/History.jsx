import { motion } from 'framer-motion';
import StudentHistory from '../components/StudentHistory';

const History = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Enhanced Animation */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/path/to/uni-pattern.svg')] bg-repeat opacity-10"
        />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Your University Character
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl opacity-90 mb-6"
            >
              Discover your legendary character through poetry and memories
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ delay: 1.2 }}
              className="h-1 bg-white/50 mx-auto rounded-full overflow-hidden"
            >
              <motion.div 
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.4, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Student History Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/path/to/note-pattern.svg')] opacity-5 pointer-events-none"></div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-3 text-dark">
              Find Your Character Poem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each student has a unique poetic tribute capturing their university essence. 
              Search below to discover yours.
            </p>
          </motion.div>
          <StudentHistory />
        </div>
      </section>
      
      {/* Character Archetypes Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Legendary Archetypes
            </div>
            <h2 className="text-3xl font-bold mb-4 text-dark">
              Common University Characters
            </h2>
            <p className="text-gray-600">
              Every student falls into one of these legendary archetypes. Which one are you?
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CharacterCard 
              emoji="🦉"
              name="The Academic Ninja"
              description="Masters the art of acing exams while appearing to do no work at all. Can write a 20-page paper in a single night fueled only by energy drinks."
              color="from-blue-100 to-blue-50"
              poetry="چپکے سے امتحان میں نمبر لے جاتا ہوں\nرات بھر میں پیپر لکھ کے سب کو حیران کرتا ہوں\nکافی کے کپوں کا رکھوالا ہوں میں\nبغیر پڑھے بھی ٹاپ کر کے دکھاتا ہوں"
            />
            <CharacterCard 
              emoji="🦊"
              name="The Social Butterfly"
              description="Knows everyone on campus and is invited to every party. Often seen recruiting people for 'the best event of the year' which is happening this weekend."
              color="from-purple-100 to-purple-50"
              poetry="ہر پارٹی میں موجود میرا ہی تو نام ہے\nکیمپس کی ہر گلی میں میرا ہی کام ہے\nتم بھی آ جاؤ یارو ایونٹ میں\nورنہ زندگی بے مزہ ہے یہ میرا پیغام ہے"
            />
            <CharacterCard 
              emoji="🐢"
              name="The Resourceful Sleeper"
              description="Sleeps through half their classes but knows all the campus shortcuts. Can find free food anywhere within a 5-mile radius."
              color="from-green-100 to-green-50"
              poetry="کلاس میں سوتا ہوں مگر نمبر لے آتا ہوں\nکھانے کی جگہوں کا میں رازداں ہوں\nپانچ میل کے دائرے میں مفت کا کھانا\nمیں ڈھونڈ کر سب کو بتاتا ہوں"
            />
            <CharacterCard 
              emoji="🐼"
              name="The Organized Sweetheart"
              description="Color-coded notes, five different highlighters, and always brings homemade treats to study groups. Has never missed a deadline in their life."
              color="from-pink-100 to-pink-50"
              poetry="رنگ برنگے نوٹس میری پہچان ہے\nہر سبق کے لیے الگ ہائی لائیٹر ہے\nڈیڈ لائن سے پہلے مکمل کرتی ہوں\nمیٹھی میٹھی ٹریٹس سب کی جان ہے"
            />
            <CharacterCard 
              emoji="🦁"
              name="The Campus Activist"
              description="Passionate about at least three causes and can often be found organizing rallies or collecting signatures. Has strong opinions about everything."
              color="from-red-100 to-red-50"
              poetry="ہر تحریک میں آگے رہتا ہوں میں\nتین سے زیادہ مقاصد کا پرچارک ہوں\nدنیا کو بدلنے کا عزم ہے میرا\nہر معاملے پر میری رائے واضح ہو"
            />
            <CharacterCard 
              emoji="🐨"
              name="The Procrastination Master"
              description="Starts every assignment the night before it's due. Somehow still graduates with honors. Fueled by panic and caffeine."
              color="from-yellow-100 to-yellow-50"
              poetry="کل پر چھوڑ کر گزارتا ہوں میں\nرات بھر جاگ کر پیپر لکھتا ہوں\nپھر بھی آنرز کے ساتھ گریجویٹ\nکیفین اور گھبراہٹ میرا سہارا ہے"
            />
          </div>
        </div>
      </section>
      
      {/* University Timeline Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 text-primary p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary">University Timeline</h3>
              </div>
              <div className="relative pl-8 border-l-2 border-primary/20 space-y-10">
                <TimelineItem 
                  year="2021" 
                  title="Freshman Year" 
                  description="The year of getting lost on campus, making new friends, and wondering if we made the right choice."
                  emoji="🎒"
                />
                <TimelineItem 
                  year="2022" 
                  title="Sophomore Slump" 
                  description="COVID hit, and we all became digital students overnight. Zoom University was born."
                  emoji="💻"
                />
                <TimelineItem 
                  year="2023" 
                  title="Junior Resurgence" 
                  description="Back on campus! Everyone suddenly became very serious about their majors."
                  emoji="📚"
                />
                <TimelineItem 
                  year="2024" 
                  title="Senior Excitement" 
                  description="The job hunt begins, thesis stress kicks in, but the end is in sight!"
                  emoji="🎓"
                />
                <TimelineItem 
                  year="2025" 
                  title="Graduation" 
                  description="We made it! Time to celebrate years of hard work with an epic party!"
                  emoji="🎉"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Poetry Call-to-Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-5xl mb-6">📜</div>
            <h2 className="text-3xl font-bold mb-4">Missing Your Poetry?</h2>
            <p className="text-xl opacity-90 mb-8">
              If we haven't captured your unique university character in verse yet, request your personalized poem today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Request My Poem
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const CharacterCard = ({ emoji, name, description, color, poetry }) => {
  const [showPoetry, setShowPoetry] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100"
    >
      <div className={`bg-gradient-to-r ${color} p-6 flex justify-center`}>
        <span className="text-6xl">{emoji}</span>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {poetry && (
          <div className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowPoetry(!showPoetry)}
              className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${showPoetry ? 'bg-gray-100 text-gray-800' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
            >
              {showPoetry ? 'Hide Urdu Poetry' : 'Show Urdu Poetry'}
            </motion.button>
            
            <AnimatePresence>
              {showPoetry && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="font-urdu text-lg leading-relaxed whitespace-pre-line text-right">
                      {poetry}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const TimelineItem = ({ year, title, description, emoji }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pb-10 last:pb-0"
    >
      <div className="absolute -left-[2.35rem] top-0 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
        <span className="text-lg">{emoji}</span>
      </div>
      <div className="mb-2 flex items-center">
        <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mr-3">
          {year}
        </span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      </div>
      <p className="text-gray-600 pl-16">{description}</p>
      <div className="absolute -left-[2px] bottom-0 top-10 w-0.5 bg-primary/20"></div>
    </motion.div>
  );
};

export default History;
