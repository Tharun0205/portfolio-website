import logo from './logo.svg';
import React from 'react';
import './App.css';
import profilePic from './profilePic.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {motion,inView, useInView} from 'framer-motion';
import { useState,useEffect } from 'react';
import { useRef } from 'react';
function App() {
  const [color,setColor]=useState("blue");
  const [contactColor,setContact]=useState("blue");
  function changeContact(){
    setContact("lightblue");
  }
  function handleColor(){
    setContact("blue");
  }
  function changeColor(){
    setColor("lightblue");
  }
  function applyColor(){
    setColor("blue");
  }
  
    const aboutRef =useRef(null);
    const isAboutInView=useInView(aboutRef,{once:false,margin:'-100px'})
  
  const [scroll,isScroll]=useState(false);
  useEffect(()=>{

    const handleScroll=()=>{
      const offset=window.scrollY;
      if(offset>500){
        isScroll(true);
      }else{
        isScroll(false);
      }
    };
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[]);
  

  return (
    <div className="App">
      <section className='firstPage' id="home">
      <header className='header'>
        <div className='title-line'>
        <h1 style={{color:'darkblue'}}>Madhav Tarun</h1>
        <h2 style={{color:'white'}}> / Data Analyst</h2>
        </div>
        <div className={`section-navigation ${isScroll?'scrolled':''}`} style={{color:'lightgray'}}>
        <a href="#About-me">About Me</a>
        <a href='#Skills'>Skills</a>
        <a href='#projects'>Projects</a>
        <a href='#'>Certificates</a>
        </div>
      </header>
      {/* <motion.div className="full-profile"
       initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      > */}
        <motion.div
        className="full-profile"
        style={{ paddingTop: '120px' }}
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        
        transition={{ duration: 2, ease: 'easeOut' }}
>

        <img src={profilePic} alt='Madhav-Tarun' className='profile-pic' width={400} height={400}></img>
        <div className='profile-text'>
        <h1 className="Hi-there">
        <div>Hi I'm</div>
        </h1>


        <h1 className='name'>Madhav Tarun</h1>
        <h1 className='role'>Data Analyst</h1>
        <div className='infoButtons'>
          <button className='cv' onMouseEnter={changeColor} style={{backgroundColor:color}} onMouseLeave={applyColor}>Download CV</button>
          <button className='contactInfo'onMouseEnter={changeContact} style={{backgroundColor:contactColor}} onMouseLeave={handleColor}>Contact Info</button>
        </div>
        <div className='social-icons' style={{display:'flex',gap:'20px'}}>
          <a href='https://www.linkedin.com/in/atmakuru-madhav-tarun/' target='blank' rel='noopener noreferencer'>
          <FaLinkedin size={30} color="#0e76a8" />
          </a>
          <a href="https://github.com/Tharun0205/" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color="#333" />
          </a>
        </div>
        </div>
      </motion.div>
      </section>
      <section className='aboutMe' id="About-me">
        <h1 style={{color:'white', textAlign:'center'}} className='about-me' >About Me!</h1>
        <motion.p
        ref={aboutRef}
        initial={{ opacity: 0, y: 30 }}
        animate={ isAboutInView? {opacity: 1, y: 0 }:{}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="intro"
    >Hi! I'm Atmakuru Madhav Tarun, a Computer Science Engineering student at Lovely Professional University with a passion for building intelligent and user-friendly applications. Deeply interested in data analysis, software development, and emerging technologies like AI and cloud computing. Whether it's crafting interactive Java GUIs, creating data-driven dashboards in Tableau, or building backend systems with Node.js, the goal is always to turn ideas into functional, real-world solutions. Currently exploring full-stack development and working on projects that combine data science, design, and user experience. The aim is to become a data scientist who not only understands numbers but also builds tools that make those numbers meaningful.</motion.p>
        
      </section>
      <section className='skills' id='Skills'>
        <h1 className='skills-tag'>Skills & Tools</h1>
        <div className='information'>
          <div className='languages'>
            <h1>Programming Languages</h1>
            <div className='language-images'>
              <img src='https://5.imimg.com/data5/ECOM/Default/2022/7/DE/KI/QX/142053378/python-sticker-faab5659-3223-4a11-949f-8f817dbc3c2a.jpg' alt='Python' className='logo1'></img>  
              <img src='https://lanetechnologysolutions.com/wp-content/uploads/2023/01/SqlServerless-5.png' className='logo2' alt='Sql'></img>
              <img src='https://ih1.redbubble.net/image.4960534135.8363/st,small,507x507-pad,600x600,f8f8f8.webp' className='logo3' alt='R'></img>
            </div>
          </div>
          <div className='data-analysis'>
              <h1>Data Analysis tools</h1>
              <div className='language-images'>
                <img src='https://img.freepik.com/premium-vector/microsoft-excel-logo-spreadsheet-program-microsoft-office-365-logotype-microsoft-corporation-software-editorial_661108-17045.jpg?semt=ais_hybrid&w=740' className='logo1'></img>
                <img src='https://seeklogo.com/images/P/pandas-logo-776F6D45BB-seeklogo.com.png' alt='Pandas' className='logo1'></img>
                <img src='https://www.artificial-intelligence.store/cdn/shop/files/numpy-stacked-logo-mouse-pad-545.webp?v=1748271618&width=533' className='logo1' alt='Numpy'></img>
              </div>
          </div>
          <div className='data-visualization'>
              <h1>Data Visualization</h1>
              <div className='language-images'>
                <img src='https://www.snti.in/images/Tableau.jpg' className='logo1' alt='Tableau'></img>
                <img src='https://ml2quantum.com/wp-content/uploads/2020/05/Microsoft-Power-BI-Symbol.png' alt='Powerbi' className='logo1'></img>
                <img src='https://images.seeklogo.com/logo-png/42/1/matplotlib-logo-png_seeklogo-428048.png' className='logo1' alt='Matplot-lib'></img>
              </div>
          </div>
          <div className='data-bases'>
              <h1>Databases</h1>
              <div className='language-images'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqU8iicsor7d9NFNKIYuL7kICI_lcaU5dff2HqDISwK6P2V2RQ_weZUzIMzsmkEPPU6g&usqp=CAU' className='logo1' alt='Tableau'></img>
                <img src='https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png' alt='Powerbi' className='logo1'></img>
                
              </div>
          </div>
        </div>
      </section>
      <section id='projects' className='projects'>
        <h1 className='project-headings'>Projects</h1>
        <div className='project-1'>
          <div className='leftBox'>
            <div className='projectheading'>
          <div className='rectanglebox'></div>
          <h1 className='projectTitle' >Movie Recommendation System</h1>
          </div>
          <h4 className='subtech'>Python, HTML, CSS</h4>
          <p style={{color:'white'}} className='para'>This project involved developing a personalized movie recommendation system using collaborative filtering techniques in R. The recommendation logic was built based on user preferences and integrated into a web application using Flask. Responsibilities included data preprocessing, similarity calculations, and designing a smooth user interface that accepts movie input and returns relevant suggestions. The project showcases the ability to combine data science, machine learning, and web development to deliver intelligent and user-friendly solutions.</p>
          </div>
          <img src='https://static.wixstatic.com/media/1fd479_992288c3a97f49b582fb83811f3e876a~mv2.jpg/v1/crop/x_482,y_0,w_1085,h_2048/fill/w_644,h_850,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gemini_Generated_Image_5oohrc5oohrc5ooh.jpg' className='project1-image'></img>
          
        </div>
        <div className='project-1' >
          <div className='leftBox'>
            <div className='projectheading'>
          <div className='rectanglebox'></div>
          <h1 className='projectTitle' >Breaking Bad Dashboard</h1>
          </div>
          <h4 className='subtech'>Tableau</h4>
          <p style={{color:'white'}} className='para'>This project involved creating an interactive and visually appealing dashboard using Tableau to analyze data from the popular TV show Breaking Bad. Various visualizations were designed to highlight key metrics such as character screen time, episode ratings, and season trends. Filters, KPIs, and dynamic visual elements were implemented to provide a comprehensive view of the data. The project demonstrated the ability to turn raw data into actionable insights and showcased skills in data visualization, dashboard design, and storytelling with data.</p>
          </div>
        <a href='https://public.tableau.com/app/profile/madhav.tarun.atmakuru/viz/BreakingBadDashBoard/Dashboard1' target='_blank'>  <img src='https://static.wixstatic.com/media/1fd479_8f6949f31b354f818dd7e976afa2c047~mv2.jpg/v1/crop/x_208,y_0,w_1632,h_2048/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gemini_Generated_Image_egaj36egaj36egaj.jpg' className='project1-image' ></img></a>
          
        </div>
        <div className='project-1'>
          <div className='leftBox'>
            <div className='projectheading'>
          <div className='rectanglebox'></div>
          <h1 className='projectTitle' >YOLOv5 object detection</h1>
          </div>
          <h4 className='subtech'>Python</h4>
          <p style={{color:'white'}} className='para'>This project involved developing a custom object detection system using YOLOv5, a state-of-the-art deep learning model for real-time object detection. The goal was to accurately identify and localize objects within images and video streams. The workflow included data collection, annotation, model training, and fine-tuning on a specific dataset to achieve high precision and recall. Advanced techniques such as data augmentation, transfer learning, and hyperparameter optimization were applied to improve model performance. The project demonstrated proficiency in computer vision, deep learning, and model deployment, showcasing the ability to build and implement practical AI solutions for object detection tasks.</p>
          </div>
          <img src='https://ik.imagekit.io/ivoctzzovm/Gemini_Generated_Image_sndoensndoensndo.png?updatedAt=1750827036819' className='project1-image'></img>
          
        </div>
      </section>
      
    </div>
  );
}

export default App;
