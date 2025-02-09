const Home = () => {
    return (
      <div className="p-6 text-center">
        {/* Hero Image Slider */}
        <div className="mt-20 mb-16">
          <img
            src="/logos/slide1.jpg"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
  
        {/* College Info Section */}
        <section className="mt-12 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#245064]">
            Welcome to Trident Academy of Technology
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Trident Academy of Technology is a name that has become a brand in the field of technical education, synonymous with excellence. 
            Our campus is located in the heart of Bhubaneswar, providing top-class infrastructure and learning opportunities.
          </p>
        </section>
  
        {/* Vision & Mission */}
        <section className="mt-12 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#245064]">Our Vision</h3>
              <p className="mt-2 text-gray-700">
                To emerge as a center of excellence, imparting quality education and producing globally competent professionals.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#245064]">Our Mission</h3>
              <p className="mt-2 text-gray-700">
                To provide students with an environment that fosters learning, innovation, and ethical leadership in the field of engineering and technology.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;
  