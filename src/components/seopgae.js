import React from 'react';

export default function SEOServicesPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-96 bg-gradient-to-r from-blue-900 to-indigo-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-blue-400"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border-4 border-indigo-400"></div>
        </div>
        
        <div className="max-w-6xl mx-auto h-full flex items-center px-4 pt-[100px]">
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Expert SEO Services to Grow Your Business</h1>
            <p className="text-xl mb-8">Boost your online presence with data-driven SEO strategies</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
              Get a Free SEO Audit
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Why SEO Is Important */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why SEO Is Important</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Increase Visibility</h3>
              <p>93% of online experiences begin with a search engine. Higher rankings mean more visibility.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Drive Quality Traffic</h3>
              <p>SEO brings targeted visitors who are actively searching for your products or services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Long-Term Results</h3>
              <p>Unlike paid advertising, SEO provides sustainable growth and continuous returns over time.</p>
            </div>
          </div>
        </section>
        
        {/* Our Services */}
        <section className="py-16 bg-gray-50 -mx-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Our SEO Services</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600">Technical SEO Audit</h3>
                <p>Comprehensive analysis of your website's architecture, identifying technical issues.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600">On-Page SEO</h3>
                <p>Optimize individual pages to improve rankings and drive organic traffic.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600">Off-Page SEO</h3>
                <p>Build your site's authority through quality backlinks and strategic digital PR campaigns.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600">Local SEO</h3>
                <p>Dominate local search results and attract more customers from your geographic area.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600">Content Strategy</h3>
                <p>Create valuable, SEO-optimized content that ranks well and engages your target audience.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600">Analytics & Reporting</h3>
                <p>Track, measure, and analyze your SEO performance with detailed custom reports.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/api/placeholder/500/400" alt="SEO Team" className="rounded-lg shadow-lg" />
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data-Driven Approach</h3>
                  <p>We base our strategies on comprehensive data analysis to ensure maximum results.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                  <p>Our SEO specialists have over 10 years of experience across various industries.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Customized Strategies</h3>
                  <p>We develop tailored SEO plans aligned with your specific business goals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results */}
        <section className="py-16 bg-gray-50 -mx-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Our Results</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="font-bold text-5xl text-blue-600 mb-2">+187%</div>
                <p className="text-lg">Increase in organic traffic for a local retail business</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="font-bold text-5xl text-blue-600 mb-2">#1</div>
                <p className="text-lg">Ranking for 45+ high-value keywords for an e-commerce client</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="font-bold text-5xl text-blue-600 mb-2">+243%</div>
                <p className="text-lg">Increase in leads generated through organic search for a B2B company</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Simple, Transparent Pricing</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-4">$999<span className="text-lg font-normal text-gray-600">/mo</span></div>
              <p className="text-gray-600 mb-6">Perfect for small businesses</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Technical SEO audit
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  On-page optimization (5 pages)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Local SEO setup
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">
                Get Started
              </button>
            </div>
            
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-yellow-500 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
              <h3 className="text-2xl font-bold mb-4">Growth</h3>
              <div className="text-4xl font-bold mb-4">$1,999<span className="text-lg font-normal opacity-80">/mo</span></div>
              <p className="opacity-80 mb-6">For growing businesses</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Everything in Starter
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  On-page optimization (15 pages)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Content creation (4 articles/month)
                </li>
              </ul>
              
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 rounded-lg">
                Get Started
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-4">$3,499<span className="text-lg font-normal text-gray-600">/mo</span></div>
              <p className="text-gray-600 mb-6">For established businesses</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Everything in Growth
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Unlimited page optimization
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Dedicated SEO manager
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section className="py-16 bg-blue-900 text-white -mx-4 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Rankings?</h2>
            <p className="text-xl mb-8">Get in touch today for a free SEO audit and consultation</p>
            <button className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-8 rounded-lg">
              Contact Us Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}