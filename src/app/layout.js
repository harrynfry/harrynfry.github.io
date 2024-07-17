import "./globals.css";
import bg from '/public/images/shapelined-_JBKdviweXI-unsplash.jpg';
import MobileAlert from "./components/MobileAlert";
import Nav from "./components/Nav";
import PersonalBanner from "./components/PersonalBanner";
import Footer from "./components/Footer";

export const metadata = {
  title: "Harry Fry's Portfolio",
  description: "Portfolio site for Harry Fry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      
      <body style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%'
      }}
      >
        <MobileAlert/>
        <PersonalBanner/>
        <Nav />
              
        {children}

        <Footer/>
    
      
      </body>
    </html>
  );
}
