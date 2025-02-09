const Home = () => {
    return (
      <div className="p-4 sm:p-6 text-center">
        {/* Hero Image Slider */}
        <div className="mt-16 sm:mt-20 mb-12 sm:mb-16">
          <img
            src="/logos/slide1.jpg"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
            alt="Campus"
          />
        </div>
  
        {/* College Info Section */}
        <section className="mt-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#245064]">
            Welcome to Trident Academy of Technology
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Trident Academy of Technology is a name that has become a brand in the field of technical education, synonymous with excellence. 
            Our campus is located in the heart of Bhubaneswar, providing top-class infrastructure and learning opportunities.
          </p>
        </section>
  
        {/* Vision & Mission */}
        <section className="mt-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-[#245064]">Our Vision</h3>
              <p className="mt-2 text-gray-700">
                To emerge as a center of excellence, imparting quality education and producing globally competent professionals.
              </p>
            </div>
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-[#245064]">Our Mission</h3>
              <p className="mt-2 text-gray-700">
                To provide students with an environment that fosters learning, innovation, and ethical leadership in the field of engineering and technology.
              </p>
            </div>
          </div>
        </section>
  
        {/* Additional UL List Styling Example */}
        <section className="mt-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold text-[#245064]">Core Values</h3>
          <ul className="mt-4 space-y-2 text-gray-700 text-left sm:text-center">
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✔</span> <span>Innovation & Research</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✔</span> <span>Ethical Leadership</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✔</span> <span>Quality Education</span>
            </li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default Home;
  