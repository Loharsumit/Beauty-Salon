import './App.css'
import img from './assets/1.jpg'
import sl1 from './assets/slide1.jpeg'
import sl2 from './assets/slide2.jpg'
import sl3 from './assets/slide3.jpg'
import sl4 from './assets/slide4.jpeg'
import sl5 from './assets/slide5.jpg'
// import sl6 from './assets/slide6.jpg'
// import sl7 from './assets/slide7.jpeg'
// import sl8 from './assets/slide8.jpeg'
// import sl9 from './assets/slide9.jpg'
// import sl10 from './assets/slide10.jpg'
import style1 from './assets/style1.jpg'
import style2 from './assets/style2.jpg'


function App() {
  

  return (
    <>
        <h1 id='heading'>AboutUs</h1>
      <div className='container'>
       <div className="containt">
        <h1>Who We Are?</h1>
        <h2>We are a team of 10 certified beauty professionals with an extensive experience known to have covered major concerts and events in town.</h2>
        <p>We are known for the affordable and hassle-free services that we offer to all our clients who’ve been trusting us since years. So, if you are looking for a combination of reasonable and professional beauty services, you won’t regret coming to us. We’ve mastered the art of understanding client requirements and delivering the best.</p>
       </div>
       <div className="image">
        <img src={img} alt="" />
       </div>
      </div>


      <div class="hair-style">
        <div class="hair-style-image">
            <img src={style1} alt="" />
        </div>
        <div class="hair-style-section">
              <h2>HAIR CUTTING & STYLING</h2>
              <h1>Expert Hair Styling Services For Men</h1>
              <p>Sport the latest fashions and trends. Get your hair styled by our professional and expert hair stylists for men.</p>
              <button>BOOK NOW</button>
        </div>
    </div>
    
    <div class="hair-style">
        <div class="hair-style-section">
              <h2>BEARD TRIMMING & STYLING</h2>
              <h1>Professional Beard Styling Services For Men</h1>
              <p>Our professional barbers will provide you with the best beard styling services for you. Choose your look and express your style with fashionably trimmed beards.</p>
              <button>BOOK NOW</button>
        </div>
        <div class="hair-style-image2">
            <img src={style2} alt="" />
        </div>
    </div>
      
      <div id='team'><h1>Our Professionals</h1></div>
      <div class="logo-head"><h1>Meet The Team</h1></div>
      <div className="logos">
      
     
     <div className="logo-slide">
         <img src={sl1} alt=""/>
         <img src={sl2} alt=""/>
         <img src={sl3} alt=""/>
         <img src={sl4} alt=""/>
         <img src={sl5} alt=""/>
     </div>
     <div className="logo-slide">
         <img src={sl1} alt="" />
         <img src={sl2} alt=""/>
         <img src={sl3} alt=""/>
         <img src={sl4} alt=""/>
         <img src={sl5} alt=""/>
     </div>
     {/* <div className="logo-slide">
         <img src={sl6} alt=""/>
         <img src={sl7} alt=""/>
         <img src={sl8} alt=""/>
         <img src={sl9} alt=""/>
         <img src={sl10} alt=""/>
     </div> */}
  </div>

    </>
  )
}

export default App
