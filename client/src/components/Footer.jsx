import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  // Previous footer UI (kept for reference)
  // return (
  //   <div className="footer">
  //     <div className="footer_left">
  //       <a href="/"><img src="/assets/logo.png" alt="logo" /></a>
  //     </div>
  //
  //     <div className="footer_center">
  //       <h3>Useful Links</h3>
  //       <ul>
  //         <li>About Us</li>
  //         <li>Terms and Conditions</li>
  //         <li>Return and Refund Policy</li>
  //       </ul>
  //     </div>
  //
  //     <div className="footer_right">
  //       <h3>Contact</h3>
  //       <div className="footer_right_info">
  //         <LocalPhone />
  //         <p>+1 234 567 890</p>
  //       </div>
  //       <div className="footer_right_info">
  //         <Email />
  //         <p>dreamnest@support.com</p>
  //       </div>
  //       <img src="/assets/payment.png" alt="payment" />
  //     </div>
  //   </div>
  // )

  return (
    <footer className="footer">
      <div className="footer_left">
        <a href="/">
          <img src="/assets/logo.png" alt="logo" />
        </a>
        <p className="footer_tagline">
          DreamNest connects travelers with unique homes and memorable stays
          across the globe.
        </p>
      </div>

      <div className="footer_center">
        <h3>Explore</h3>
        <ul>
          <li>About DreamNest</li>
          <li>Terms &amp; Conditions</li>
          <li>Cancellation Policy</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+1 234 567 890</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>dreamnest@support.com</p>
        </div>
        <div className="footer_right_note">
          <p>Secure payments powered by leading providers.</p>
          <img src="/assets/payment.png" alt="payment" />
        </div>
      </div>
    </footer>
  )
}

export default Footer