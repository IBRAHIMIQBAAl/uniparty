import { motion } from 'framer-motion';
import StudentHistory from '../components/StudentHistory';

const History = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Your University Character
              </span>
            </h1>
            <p className="text-xl opacity-90 mb-6">
              Discover your legendary character through poetry and memories
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Student History Section */}
      <section className="py-16">
        <div className="container-custom">
          <StudentHistory />
        </div>
      </section>
      
      {/* Character Archetypes Section */}
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

const CharacterCard = ({ emoji, name, description, color, poetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
          <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="text-sm font-semibold text-primary mb-2">Urdu Poetry</h4>
            <div className="font-urdu text-lg leading-relaxed whitespace-pre-line text-right">
              {poetry}
            </div>
          </div>
        )}
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
