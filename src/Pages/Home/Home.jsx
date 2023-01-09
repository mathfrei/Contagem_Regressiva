import { useState, useEffect } from 'react'
import './Styles.css'
import { default as topimage} from '../../assets/top-image.svg'
import { default as bottomimage} from '../../assets/bottom-image.svg'
import { default as rocket } from '../../assets/rocket.svg'

export function Home() {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  let deadline = "January, 12, 2023"
 
  const getTime = () => {
       const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));

  }


  useEffect(() => {
   const interval = setInterval(() => getTime(deadline), 1000);

   return () => clearInterval(interval);
 }, []);

  return (
    <div className="Main">
         <img id="borders"src={topimage} alt="top_image"/>
         <div className="infocontainer">
              <div className="countdownBox" id="countbox">    
                  <h1>READY TO LAUNCH IN ...</h1>
                  <div className="countdowncontainer">
                    <div className="TimerNames">
                       <p id="TText">Dias</p>
                       <p id="TText">Horas</p>
                       <p id="TText">minutos</p>
                       <p id="TText">Segundos</p>
                    </div> 
                    <div className="DeadlineMarquee">  
                       <div id="marquee">   
                          <p id="TNumber">{days}</p>
                       </div>
                       <div id="marquee">
                           <p id="TPoints">:</p>
                       </div>
                       <div id="marquee">
                          <p id="TNumber">{hours}</p>
                       </div>
                       <div id="marquee">
                           <p id="TPoints">:</p>
                       </div>
                      <div id="marquee">
                          <p id="TNumber">{minutes}</p>
                       </div>
                       <div id="marquee">
                           <p id="TPoints">:</p>
                       </div>
                       <div id="marquee">
                          <p id="TNumber">{seconds}</p>
                       </div>
                     </div>   
                    </div>   
                  <div className="subscribe-box">  
                      <p>Inscreva-se para saber mais do lançamento</p>
                      <button type="submit" name="submit">Inscreva-se</button>
                  </div>
              </div>
              <div className="countdownBox" id="logo">
                <img src={rocket} id="rocket" alt="rocket/foguete"/>
              </div>
        </div>      
         <img id="borders"src={bottomimage} alt="bottom_image"/>
        
    </div>
  )
}
