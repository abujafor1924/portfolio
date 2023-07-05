import { Helmet } from "react-helmet";
// import ProgressBar from "@ramonak/react-progress-bar";

import "../../App";
const About = () => {
  return (
    <>
      <Helmet>
        <title>Home || Abu Jafor</title>
      </Helmet>
      <div className="bg-img pt-10" id="about">
        <div data-aos="fade-up" className="py-8 px-6  text-white text-center">
          <h1 className="text-center font-bold text-6xl mb-4">About section</h1>
          <h2 className="text-3xl font-semibold text-[#E09132]">
            A bit about me
          </h2>
          <p className="text-2xl">
            Hi , I am Abu jafor . I am a professional web developer . I can
            create professional web application with MERN stack . And I can also
            create awesome and creative front-end web site with REACT JS . React
            JS , Node JS , MongoDB and Express JS is my Hobby .
          </p>
        </div>
        <div
          data-aos="zoom-out-up"
          className="py-8 px-6  text-white text-center"
        >
          <h1 className="text-3xl font-semibold text-[#E09132]">
            Technologies and Tools
          </h1>
          <p className="text-2xl">
            Using a combination of cutting-edge technologies and reliable
            open-source software I build user-focused, performant websites for
            smartphones, tablets, and desktops.
          </p>
        </div>

        <div className="text-white md:flex text-center py-8">
          <div data-aos="fade-left" className="md:w-1/2 text-center">
            <h1 className="text-4xl font-bold  ">Skill</h1>
            <div className="grid grid-cols-2 gap-4 px-10 py-4">
              <div className="border-2 py-1 px-8 border-orange-500 flex">
                <img
                  src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png"
                  alt=""
                  className="w-[50px] h-[50px]"
                />
                <h1 className="text-2xl font-semibold mt-2">HTML</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/css-icon.png"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">CSS</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="https://media.licdn.com/dms/image/D4D12AQEL9aeB8WqRaw/article-cover_image-shrink_600_2000/0/1685204779306?e=2147483647&v=beta&t=jr7Um-vZDvcgCCzx0a48zCEr3RtUyRVqelGOzrpL4bs"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">Javascript</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">React Js</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">Express Js</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="data:image/jpeg;base64,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hU0oXDeQCF03ptNfd2gTWuGCWCoDjH07sQIwk7iWkKOBPH8ndtbOf7esDZPwgwYK6Y38qK9eIR9wV+2gsrJrNNE8Va6N4NfdOfZr2KB2s2XjvaKGVkhilaBJDIBmA4B2FwrXUA5GoI7+o3Xe08Rs09os7GOBY+WBkhlcwihoHUa1xHpdOQVkmskPDSI/yIPebA7F5omfg6i1hNPzE/Femf8AnLeof6JVpuy647HA2zwNAaxpDA4nN2Zq4jMkk1J6VWJ9mbc+0fa+VhEtQRhx4RQYaUIOVPFUmmklgtFptsvKoO0bftN5QQMz5MNMhHo0djdXsp2lTxs14vGF00EY3uiY9zuzEaBeu5bjjsoOCrnuzfI81e865nhXcpknLbkVT07kb5RP4Q++zxXruGwRPssIfGx1YmVxNaa80dC8m1F02q2AxNfE2KrXCuPGSBvNKUqTp0LjddgvGCNsIks5a0UaXCQuA3DKgNFG+tvBP8cZISyWf7JeghiJEb9W1JGEsLqHqIqOC0RQl0XA2GR1okeZZ3+c9wAA6GtGgoAOxTamnHCZE5ZYREXQoEREAREQBERAEREAREQBERAZrd923hdNptBhs32uyzyGXmyMZKxxJOeLU506aA1GYUtbrDar1Y2C0QCzWXEx8rXSNkmlwnEIwGc2NtQKmpOVABqroijHItq5nBjQAABQDIAbguaIpKhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf//Z"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">Mongo DB</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">Firebase</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">Tailwind CSS</h1>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className=" md:w-1/2 text-center">
            <h1 className="text-4xl font-bold  ">Tools</h1>
            <div className="grid grid-cols-2 gap-4 px-10 py-4">
              <div className="border-2 py-1 px-8 border-orange-500 flex">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
                  alt=""
                  className="w-[50px] h-[50px]"
                />
                <h1 className="text-2xl font-semibold mt-2 ml-2">VS Code</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">Git</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3030170.png"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">Netlify</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">MS word</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="https://w7.pngwing.com/pngs/54/524/png-transparent-figma-app-logo-tech-companies-thumbnail.png"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">Figma</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">Photoshop</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="https://www.freepnglogos.com/uploads/google-chrome-png-logo/google-chrome-logo-png-0.png"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">Dev Tools</h1>
              </div>
              <div className="border-2 py-2 px-8 border-orange-500 flex">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h1 className="text-2xl font-semibold ml-2">Firebase Host</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
