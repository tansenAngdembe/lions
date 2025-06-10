import React from 'react';
import { Heart, Eye, Users, Globe, TreePine, Droplets, GraduationCap, HandHeart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LionsAboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen mt-33 bg-gray-50">
      {/* Hero Section */}
      <div style={{ backgroundColor: '#00529B' }} className="text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
            alt="Community service" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">{t("aboutUs.serve.title")}</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t("aboutUs.serve.discription")}
            </p>
            <div 
              style={{ backgroundColor: '#F8A22B', color: '#00529B' }} 
              className="px-8 py-3 rounded-lg inline-block font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t("aboutUs.serve.buttonText")}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div style={{ backgroundColor: '#00529B' }} className="text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("aboutUs.serve.title2")}</h2>
          <p className="text-lg mb-6">
            {t("aboutUs.serve.discription2")}
          </p>
        </div>
      </div>

      {/* Organization Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div style={{ backgroundColor: '#00529B' }} className="text-white p-6 rounded-lg mb-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">{t("aboutUs.serve.clubCards.card1")}</h3>
                <p className="text-sm leading-relaxed">
                  {t("aboutUs.serve.clubCards.discription")}
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Lions club meeting" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Community service volunteers" 
                className="w-full h-48 object-cover rounded-lg shadow-md mb-8"
              />
              <div style={{ backgroundColor: '#F8A22B', color: '#00529B' }} className="p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">{t("aboutUs.serve.clubCards.card2")}</h3>
                <p className="text-sm leading-relaxed">
                  {t("aboutUs.serve.clubCards.discription2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Service Areas */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#00529B' }}>{t("aboutUs.globalCauses.title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <Eye className="w-12 h-12 mx-auto mb-4" style={{ color: '#00529B' }} />
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#00529B' }}>{t("aboutUs.globalCauses.vision")}</h3>
              <p className="text-sm text-gray-600">
                {t("aboutUs.globalCauses.visionDiscription")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <Droplets className="w-12 h-12 mx-auto mb-4" style={{ color: '#00529B' }} />
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#00529B' }}>{t("aboutUs.globalCauses.hunger")}</h3>
              <p className="text-sm text-gray-600">
                {t("aboutUs.globalCauses.hungerDiscription")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <TreePine className="w-12 h-12 mx-auto mb-4" style={{ color: '#F8A22B' }} />
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#00529B' }}>{t("aboutUs.globalCauses.environment")}</h3>
              <p className="text-sm text-gray-600">
                {t("aboutUs.globalCauses.environmentDescription")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: '#F8A22B' }} />
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#00529B' }}>Diabetes</h3>
              <p className="text-sm text-gray-600">
                {t("aboutUs.globalCauses.diabetes")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Images Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80" 
                alt="Eye care service" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-bold text-lg">{t("aboutUs.globalCauses.card.visionCare")}</h3>
                <p className="text-white text-sm">{t("aboutUs.globalCauses.card.visionCareDis")}</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1593113616828-6f22bca04804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Food distribution" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-bold text-lg">{t("aboutUs.globalCauses.card.hungerRelief")}</h3>
                <p className="text-white text-sm">{t("aboutUs.globalCauses.card.hungerReliefDis")}</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80" 
                alt="Environmental cleanup" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-bold text-lg">{t("aboutUs.globalCauses.card.env")}</h3>
                <p className="text-white text-sm">{t("aboutUs.globalCauses.card.envDes")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We're Looking For */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#00529B' }}>{t("aboutUs.peopleLooking.title")}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div 
                  style={{ backgroundColor: '#F8A22B' }} 
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                >
                  <Users className="w-8 h-8" style={{ color: '#00529B' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#00529B' }}>{t("aboutUs.peopleLooking.card.card1.title")}</h3>
                  <p className="text-gray-600">{t("aboutUs.peopleLooking.card.card1.text")}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-6">
                {t("aboutUs.peopleLooking.card.card1.discription")}
              </p>
              <button 
                style={{ backgroundColor: '#F8A22B', color: '#00529B' }}
                className="px-6 py-2 rounded font-semibold hover:opacity-90 transition-opacity"
              >
                {t("aboutUs.peopleLooking.card.card1.buttonText")}
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div 
                  style={{ backgroundColor: '#00529B' }} 
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                >
                  <HandHeart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#00529B' }}>{t("aboutUs.peopleLooking.card.card2.title")}</h3>
                  <p className="text-gray-600">{t("aboutUs.peopleLooking.card.card2.text")}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-6">
                {t("aboutUs.peopleLooking.card.card2.discription")}
              </p>
              <button 
                style={{ backgroundColor: '#00529B' }}
                className="text-white px-6 py-2 rounded font-semibold hover:opacity-90 transition-opacity"
              >
                {t("aboutUs.peopleLooking.card.card2.buttonText")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How We Serve */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div 
                  style={{ backgroundColor: '#F8A22B' }} 
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                >
                  <Globe className="w-8 h-8" style={{ color: '#00529B' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#00529B' }}>{t("aboutUs.peopleLooking.card.card3.title")}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-6">
                {t("aboutUs.peopleLooking.card.card3.discription")}
              </p>
              <button 
                style={{ backgroundColor: '#F8A22B', color: '#00529B' }}
                className="px-6 py-2 rounded font-semibold hover:opacity-90 transition-opacity"
              >
                {t("aboutUs.peopleLooking.card.card3.buttonText")}
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div 
                  style={{ backgroundColor: '#00529B' }} 
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#00529B' }}>{t("aboutUs.peopleLooking.card.card4.title")}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-6">
                {t("aboutUs.peopleLooking.card.card4.discription")}
              </p>
              <button 
                style={{ backgroundColor: '#00529B' }}
                className="text-white px-6 py-2 rounded font-semibold hover:opacity-90 transition-opacity"
              >
                {t("aboutUs.peopleLooking.card.card4.buttonText")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stories */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#00529B' }}>{t("aboutUs.lives.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Vision care professional" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-bold mb-2" style={{ color: '#00529B' }}>{t("aboutUs.lives.card.card1.title")}</h4>
              <p className="text-sm text-gray-600">
                {t("aboutUs.lives.card.card1.text")}
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Disaster response volunteer" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-bold mb-2" style={{ color: '#00529B' }}>{t("aboutUs.lives.card.card2.title")}</h4>
              <p className="text-sm text-gray-600">
                {t("aboutUs.lives.card.card2.text")}
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80" 
                alt="Youth volunteer" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-bold mb-2" style={{ color: '#00529B' }}>{t("aboutUs.lives.card.card3.title")}</h4>
              <p className="text-sm text-gray-600">
                {t("aboutUs.lives.card.card3.text")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainable Development Goals */}
      <div className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#00529B' }}>Supporting UN Sustainable Development Goals</h2>
          <p className="text-lg text-center mb-12 max-w-4xl mx-auto" style={{ color: '#4a5565' }}>
            Lions Clubs International is committed to supporting the United Nations Sustainable Development Goals 
            through our global service framework and local community action.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f2f3f5] backdrop-blur-sm p-6 rounded-lg  shadow-md">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#00529B' }}>Good Health and Well-being</h3>
              <p className="text-sm" style={{ color: '#4a5565' }}>
                Supporting healthcare initiatives, vision programs, and health education in underserved communities.
              </p>
            </div>
            <div className="bg-[#f2f3f5] backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#00529B' }}>Quality Education</h3>
              <p className="text-sm" style={{ color: '#4a5565' }}>
                Providing educational opportunities, literacy programs, and scholarship support for youth worldwide.
              </p>
            </div>
            <div className="bg-[#f2f3f5] backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#00529B' }}>Clean Water and Sanitation</h3>
              <p className="text-sm" style={{ color: '#4a5565' }}>
                Ensuring access to clean water and sanitation facilities in communities that need them most.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="py-16" style={{ backgroundColor: '#F8A22B' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#00529B' }}>Ready to Make a Difference?</h2>
          <p className="text-lg mb-8" style={{ color: '#00529B' }}>
            Join over 1.4 million Lions worldwide who are working together to serve communities and change lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              style={{ backgroundColor: '#00529B' }}
              className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Find a Club Near You
            </button>
            <button 
              className="bg-white px-8 py-3 rounded-lg font-semibold border-2 hover:opacity-90 transition-opacity"
              style={{ color: '#00529B', borderColor: '#00529B' }}
            >
              Start a New Club
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}