import React, {Component} from 'react';
import '../style/styles.css';
class App extends Component{
  render(){
    return(
      <div className="wraaper">
                <div className="header">
          <div className="navbar">
            <div className="logo">
              <img className="imgfluid" src={require('../logo/babastudio-logo.png')} />
            </div>
            <div className="menu">
              <ul>
                <li><a>Home</a></li>
                <li><a>Blogs</a></li>
                <li><a>Galery</a></li>
                <li><a>Kontak</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* end header */}
        <div className="slider">
          <div className="slidercontent">
            <img className="imageslinder" src={require('../images/banner-desktop.jpg')}/>

          </div>
      </div>
      {/*slinder */}
      <h2 className="dataprestasi">Prestasi Murid babastudio</h2>
      <div className="content">

        <div className="content-gambar">
          <div className="image">
            <img className="imageslinderr" src={require('../images/21cineplex.jpg')} />
            <div className="contentimage">
              <h2 className="fontimage">www.21cineplex</h2>
            </div>
        </div>
        <div className="image">
            <img className="imageslinderr" src={require('../images/bpn.jpg')} />
            <div className="contentimage">
              <h2 className="fontimage">www.bpn.go.id</h2>
            </div>
        </div>
        <div className="image">
            <img className="imageslinderr" src={require('../images/republika.jpg')} />
            <div className="contentimage">
              <h2 className="fontimage">www.republika.co.id</h2>
            </div>
        </div>

      </div>
      </div>
      
      {/*end cgambar */}
      <div className="content-gambar">
        <h2 className="dataprestasi">Tempat Kursus Babastudio</h2>
        <div className="content-yutube">
          <iframe width="560" height="315"  src ="https://www.youtube.com/embed/wfm56HvRQ40" frameBorder="0" allow="accelerometer; autoplay; encrypted-media;
          gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="content-map" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5071539281337!2d106.99472582913829!3d-6.259960966608225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dd1d502ed43%3A0x556565c2411f873!2sBABASTUDIO%20(Bekasi)!5e0!3m2!1sid!2sid!4v1574158191426!5m2!1sid!2sid" width="550" height="300 " frameBorder="0" allowFullScreen=""></iframe>

         </div>
      </div>
     
</div>

      
    )
  }
}
export default App;