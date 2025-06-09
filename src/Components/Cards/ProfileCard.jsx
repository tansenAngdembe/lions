import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, UserCircle, MapPin, AlertCircle, Loader2 } from "lucide-react";
import { useLocation } from "react-router";
import axios from "axios";
import { BASE_DOC, BASE_URL } from "../../config";

const ProfileCard = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        // Get the current path and map it to the appropriate API endpoint
        const path = location.pathname;
        let endpoint = ""; // default endpoint
      

        // Map routes to specific endpoints
        const routeToEndpoint = {
          "/currentDigiTeam": "CURRENTDIGITEAM",
          "/pastDigiTeam": "PASTEDDIGITEAM",
          "/seniorOfficials": "SENIORROFFICIALS",
          "/clusterHeadDeputyHead": "CLUSTERHEADDEPUTYHEAD",
          "/regionChairPerson": "REGIONCHAIRPERSON",
          "/zoneChairPerson": "ZONECHAIRPERSON",
          "/globalCausesTeam": "GLOBALCAUSESTEAM",
          "/digiProgramTeam": "DIGIPROGRAMTEAM",
          "/leoDistrict": "LEODISTRICT"
        };

        if (routeToEndpoint[path]) {
          endpoint = routeToEndpoint[path];
        }

        const response = await axios.post(`${BASE_URL}get-profiles-by-category`, {
          categoryName: endpoint
        });
        console.log(response.data)
        setMembers(response.data.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch members data");
        console.error("Error fetching members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [location.pathname]);
  if (loading) {
    return (
      <div className="h-[50vh] w-full flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <p className="mt-4 text-lg text-gray-600">Loading members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[50vh] w-full  flex flex-col items-center justify-center">
        <AlertCircle className="w-12 h-12 text-red-500" />
        <p className="mt-4 text-lg text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }


  if (members.length === 0) {
    return (
      <div className="h-[50vh] w-full flex flex-col items-center justify-center">
        <AlertCircle className="w-12 h-12 text-gray-400" />
        <p className="mt-4 text-lg text-gray-600">Currently there are no members</p>
      </div>
    );
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 bg-white rounded-lg '>
      {members.map(({ fullName, position, phoneNumber, email, memberNumber, address, image }) => (
        <motion.div
          key={memberNumber}
          className="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -5 }}
        >
          <div className="w-full">
            <img
              src={`${BASE_DOC}${image}`}
              alt="Profile"
              onError={(e) => (e.target.src = '/fallback.jpg')}
              className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-heading">{fullName}</h2>
                <p className="text-lg font-semibold text-primary">{position}</p>

              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{phoneNumber}</span>
                </div>

                <div className="flex  gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="break-all">{email}</span>
                </div>

                <div className="flex gap-2">
                  <UserCircle className="w-4 h-4" />
                  <span>{memberNumber}</span>
                </div>

                <div className="flex  gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{address}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProfileCard;
