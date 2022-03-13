import React from 'react';
import Card from 'react-bootstrap/Card';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import './Carouselpic.css';

function Home(props) {
    return (
        <div>
          <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="pic"
    src="./download.jpg"
    // /800x400?text=First slide&bg=f5f5f5"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>BECAUSE RECORDS MATTER</h5>
      <button className='learn-button'>LEARN MORE</button>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
    <Card>
    <Card.Body>
      <Card.Text className='card1'>
        <h1 className='title'>THE JOHN MERCURIO COLLECTION </h1>
        <h2 className= "scentence1">The most complete baseball record books ever written</h2>
        <p className='about'>JOHN A. MERCURIO — “The Professor of Chronology Research” – is the author of six previously published books on Major League Baseball records. More than 250,000 copies of his books have been sold.

His work honors the timelessness of our national pastime…marks the culmination of almost a half century of inspired research and profoundly good work…We invite you to be a part of this unfolding continuous and continual legacy…John Mercurio on Baseball…Records Matter!…Records, not “Stats.” Because Records honor not numbers; but the Person who created them…

Lawrence Jordan and Morning Star Books have a long history making successful sports books. We have been responsible for books such as My Life And The Beautiful Game, Pele, the international soccer star’s, autobiography; and books from Sparky Anderson, the Hall of Fame manager of the Cincinnati Reds and Detroit Tigers; Luis Tiant, then of the Boston Red Sox; and Ferdie Pacheco, “The Fight Doctor,” Muhammad Ali’s ringside physician.

As packager and publisher, Morning Star Books created sports books such as Shooting Star: The Bevo Francis Story, the story of the little known college basketball star who still holds the NCAA single game scoring record of 103 points; Heart Of A Lion: The Life, Death And Legacy of Hank Gathers, voted the Best Sports Biography of 2010; The Perfect Game: Villanova vs. Georgetown For The National Championship; Trophies And Tears: The Story of Evansville and the Aces, a book on University of Evansville basketball whose teams built a great winning tradition, only to have an entire team perish in a plane crash; and Incident In LA: Mary Decker, Zola Budd And The 1984 LA Olympics–Two Women, One Race, No Winner, to be published in 2016.</p>
      </Card.Text>
    </Card.Body>
  </Card>
  
        </div>
    );
}

export default Home;