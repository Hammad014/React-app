import React from 'react';
import './App.css';
import MainSection from './components/MainSection';
import MainSection1 from './components/MainSection1';
import MainSection2 from './components/MainSection2';
import BackgroundImage from './components/BackgroundImage';
import FooterMenus,{FooterMenuData} from './components/FooterMenus';



function App() {
  const cards=[
    {
      h1:"FHA 203K Full/Standard.",
      image: "/Frame 8 (4).png",
      detail:"FHA 203k Full/Standard is designed to provide financing for modernization of older properties,  covering structural repairs and major renovations. Some examples include repairs to plumbing, electric, roofing, flooring, or all of the above."
    },
    {
      h1:"FHA 203K Limited.",
      image: "/Frame 9.png",
      detail:"For smaller projects that do not require major renovation, a FHA 203K limited loan is designed for just that. This covers minor changes of up to $35,000. This loan can be used for minor repairs such as painting, weatherizing, and appliance replacements."
    }
  ]


  const data = [
    {
      h1: "Financial Strategy & Contribution.",
      p: "Boost Your Portfolio. Explore Tax Incentives 1.",
      image: "/Frame 8.png",
      reverse: false, 
    },
    {
      h1: "Taking Advantage of Charitable Real Estate Donation",
      p: "Take part in philanthropy by donating your property. By donating your property through the federally approved 501c3 tax law provision, you can give others the gift of home ownership.",
      image: "/Frame 8 (1).png",
      reverse: true, 
    },
    {
      h1: "Understanding The Tax Benefits.",
      p: "Section 501c3 is a tax law provision that grants exemption from income taxes by donating your property to a nonprofit organization. The provision allows a property owner to offset capital gains over the course of 5 years.",
      image: "/Frame 8 (2).png",
      reverse: false, 
    },
    {
      h1: "What Types of Properties Qualify?",
      p: "Most charities are lenient on the types of properties that can be donated. Categories include residential, commercial, industrial, vacant land, and international property. The property must b free of debts or liens, and meets environmental standards.",
      image: "/Frame 8 (3).png",
      reverse: true, 
    }
  ];



const footMenus: FooterMenuData[] = [
  {
    p0: "Buyer",
    p: "Property Listings",
    p1: "Interactive Map",
    p2: "Monmouth Ocean MLS",
    p3: "Garden State MLS",
    p4: "Bright MLS",
    p5: "Forms",
  },
  {
    p0: "Seller",
    p: "Forms",
    p1: "Checklists",
    p2: "Selling Resources",
    p3: "Listing Photography",
    p4: "Sellers Disclosure Form",
    p5: ''
  },
  {
    p0: "Investor",
    p: "Investor Resources",
    p1: "501c3 Information",
    p2: "Donating a Property",
    p3: "Property Management ",
    p4: "Tax Attorney",
    p5: "Blog Articles",
  },
  {
    p0: "Information",
    p: "Testimonials",
    p1: "Contact Us",
    p2: "Careers",
    p3: "Agents ",
    p4: "About Us",
    p5: "Search",
  },

];


  return (
    <>
    <div>
    {data.map((item, index) => (
  <MainSection key={index} h1={item.h1} p={item.p} image={item.image} reverse={item.reverse} index={index}/>
))}

      <MainSection1/>
      <div className='d-flex flex-row justify-content-center flex-wrap'>
      {cards.map((item,index)=>(
        <MainSection2 key={index} h1={item.h1} image={item.image} detail={item.detail}
          />
      ))}
      </div>
    <BackgroundImage
      backgroundImage="/Frame%2019.png"
      title="Donating a Property?"
      buttonText="Explore The Tax Benefits"
      />
      <FooterMenus footMenus={footMenus} />
    </div>
    </>
  );
};


export default App;
