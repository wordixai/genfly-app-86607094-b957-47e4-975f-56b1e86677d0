import { Coffee, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Cafe barista" 
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Crafting Perfect Moments Since 2010</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Brew Haven began with a simple passion: to create a space where coffee isn't just served, but celebrated. Our journey started in a small corner of the city, with nothing but a dream and a vintage espresso machine.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Today, we source our beans directly from sustainable farms around the world, roast them in-house to perfection, and serve them with the care and attention they deserve. Every cup tells a story - of the farmers who grew the beans, the roasters who perfected them, and the baristas who craft them into liquid art.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                  <Coffee className="h-7 w-7 text-amber-800" />
                </div>
                <h4 className="font-medium text-gray-900">Premium Beans</h4>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                  <Clock className="h-7 w-7 text-amber-800" />
                </div>
                <h4 className="font-medium text-gray-900">Fresh Daily</h4>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                  <Award className="h-7 w-7 text-amber-800" />
                </div>
                <h4 className="font-medium text-gray-900">Award Winning</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;