import React from "react";

const SideBar = () => {
  return (
    <div className="mx-auto px-4 md:px-8 mt-3 flex-col  md:flex-row mb-6">
      <div className="bg-gray-200 p-2 rounded-lg text-justify">
        <h1 className="bg-[#2c540e] text-center py-2 text-white font-bold text-lg">
          Climate Change
        </h1>
        <p className=" text-black p-2">
          Climate change is when the average long-term weather patterns of a
          region are altered for an extended period of time, typically decades
          or longer. Examples include shifts in wind patterns, the average
          {/* temperature or the amount of precipitation. These changes can affect
          one region, many regions or the whole planet. Climate changes are
          caused by changes in the total amount of energy that is kept within
          the Earth's atmosphere. This change in energy is then spread out
          around the globe mainly by ocean currents as well as wind and weather
          patterns to affect the climates of different regions. */}
        </p>
      </div>
      <div className="bg-gray-200 p-2 rounded-lg text-justify mt-6">
        <h1 className="bg-[#2c540e] text-center py-2 text-white font-bold text-lg">
          Strategies
        </h1>
        <p className=" text-black p-2">
          Maximising the horizon of GPSD with state-of-the-art thinking,
          developments, innovations and perspectives in the areas of Environment
          and Sustainble Development. Adaptability to different geographic,
          {/* cultural, social and economic contexts. Partnerships utilising
          complementary strengths of other organisations to avoid duplication of
          effort, and to network effectively for synergistic convergence of
          ideas and goals. GPSD tries to ensure that its programmes do not
          re-invent the wheel. Developing programmes and materials to build on
          existing strategic opportunities and facilities for EE. Encouraging
          and supporting other agencies in the field of Environmental Education
          and Education for Sustainable Development to develop similar materials
          and programmes based on their specific needs and situations. Building
          synergies between NGOs and CBOs for comprehensive impact. Identifying
          key entry points for different thrust areas, and key targets for
          initiating and consolidating gains, to achieve a multiplier effect.
          Facilitating networks at local and national level through a number of
          tools such as dialogues, directories, newsletters, etc. */}
        </p>
      </div>
      <div className="bg-gray-200 p-2 rounded-lg mt-6">
            <h1 className="bg-[#2c540e] text-center py-2 text-white font-bold text-lg">
              Biodiversity Conservation
            </h1>
            <div className=" text-black text-justify ">
              <p className="">
                Biodiversity offers multiple opportunities for development and
                improving human well-being. It is the basis for essential
                environmental services upon which life on Earth depends. Thus,
                its conservation and sustainable use are of critical importance.
                {/* Nepal consists of more than 5,000 species of flowering plants,
                181 species of mammals, 844 species of birds, 185 species of
                fishes, about 635 species of butterflies and more than 2252
                moths. Many active efforts for the conservation of bio-diversity
                started about 35 years ago. Nowadays, many efforts have been
                applied for the conservation of biodiversity. The various
                efforts include protected areas, zoo, different types of law,
                conventions, nongovernmental organizations (NGOs), local and
                national authorities, national and international organizations,
                etc. Among them the protected areas is main. The protected areas
                conserve the biological things in their original place which is
                called in situ conservation. The protected areas has covered
                26,695 km. square (18.32%) of the total area of Nepal. The
                National Parks and Wildlife Conservation Act 1973 provides the
                legal basis for the management of protected areas. The protected
                areas include nine national parks, three wildlife reserves, one
                hunting reserve, three conservation areas and six buffer zones. */}
              </p>
            </div>
            
          </div>
          <div className="bg-gray-200 p-2 rounded-lg text-justify mt-6">
              <h1 className="bg-[#2c540e] text-center py-2 text-white font-bold text-lg">
                Code of Conduct
              </h1>
              <p className=" text-black p-2">
                GPSD strives to resolve local and national social issues as a
                member of civil society contributing to public interests. GPSD
                cooperates with the Government, Non Government, Public, Private
                Organizations and individuals as necessary to maximize the
                effect of assistance; GPSD strives to assist the people in need
                regardless of their religion, political affiliation or belief;
                {/* GPSD aims to provide prompt and effective humanitarian
                assistance and to implement participatory reconstruction in line
                with local needs; GPSD utilizes its funds effectively and
                produces detailed program and financial reports; GPSD values
                communication with its individual and institutional supporters,
                volunteers, government and public institutions, other aid
                organizations and media in an effort to foster favorable
                partnership; GPSD respects the privacy of its supporters and
                protects personal information; GPSD strives to secure the safety
                of its staff members; GPSD pursues professionalism while valuing
                innovation and creativity, untied to conventionalism; GPSD does
                not discriminate against its staff members to sex, religion,
                caste and political interest; */}
              </p>
            </div>
      {/* Section 3: Latest Facebook */}
      <div className=" bg-gray-200  rounded-lg mt-6">
        <h1 className="bg-[#2c540e] text-center py-2 text-white font-bold text-lg">
          Latest Facebook
        </h1>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fithome.com.np&tabs=timeline&width=340&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="250"
          height="410"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default SideBar;
