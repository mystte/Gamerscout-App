/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import styles from './styles';
import Footer from '../footer/Footer';
import Localization from '../../../config/localization/Localization';
import { getTermsAndConditionsUrl } from '../../../config/routes';

const PrivacyPolicy = () => {
  const labels = Localization.Labels.footer;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Legal</h1>
      <div style={styles.tabContainer}>
        <div style={styles.selected}>{labels.privacyPolicy}</div>
        <Link to={getTermsAndConditionsUrl()} style={styles.link}>{labels.terms}</Link>
      </div>
      <div style={styles.textBloc}>
        <p>Protecting your private information is our priority. This Statement of Privacy applies to gamerscout.com and Gamerscout and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Gamerscout include gamerscout.com. The Gamerscout website is a The purpose of gamerscout.com is for gamers to find, connect with, and review peers so that they may have an improved social gaming experience on major gaming platforms. site. By using the Gamerscout website, you consent to the data practices described in this statement.</p>
        <p>Collection of your Personal Information</p>
        <p>In order to better provide you with products and services offered on our Site, Gamerscout may collect personally identifiable information, such as your:</p>
        <p>* E-mail Address</p>
        <p>Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through Gamerscout's public message boards, this information may be collected and used by others.</p>
        <p>We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services available on the Site. These may include: (a) registering for an account on our Site; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services on our Site. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.</p>
        <p>Use of your Personal Information</p>
        <p>Gamerscout collects and uses your personal information to operate its website(s) and deliver the services you have requested.</p>
        <p>Gamerscout may also use your personally identifiable information to inform you of other products or services available from Gamerscout and its affiliates.</p>
        <p>Sharing Information with Third Parties</p>
        <p>Gamerscout does not sell, rent or lease its customer lists to third parties.</p>
        <p>Gamerscout may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is not transferred to the third party. Gamerscout may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Gamerscout, and they are required to maintain the confidentiality of your information.</p>
        <p>Gamerscout may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Gamerscout or the site; (b) protect and defend the rights or property of Gamerscout; and/or (c) act under exigent circumstances to protect the personal safety of users of Gamerscout, or the public.</p>
        <p>Tracking User Behavior</p>
        <p>Gamerscout may keep track of the websites and pages our users visit within Gamerscout, in order to determine what Gamerscout services are the most popular. This data is used to deliver customized content and advertising within Gamerscout to customers whose behavior indicates that they are interested in a particular subject area.</p>
        <p>Automatically Collected Information</p>
        <p>Information about your computer hardware and software may be automatically collected by Gamerscout. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Gamerscout website.</p>
        <p>Use of Cookies</p>
        <p>The Gamerscout website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.</p>
        <p>One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Gamerscout pages, or register with Gamerscout site or services, a cookie helps Gamerscout to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same Gamerscout website, the information you previously provided can be retrieved, so you can easily use the Gamerscout features that you customized.</p>
        <p>You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Gamerscout services or websites you visit.</p>
        <p>Links</p>
        <p>This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>
        <p>Security of your Personal Information</p>
        <p>Gamerscout secures your personal information from unauthorized access, use, or disclosure. Gamerscout uses the following methods for this purpose:</p>
        <p>-SSL Protocol</p>
        <p>When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.</p>
        <p>We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.</p>
        <p>Children Under Thirteen</p>
        <p>Gamerscout does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.</p>
        <p>E-mail Communications</p>
        <p>From time to time, Gamerscout may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from Gamerscout or click on a link therein.</p>
        <p>If you would like to stop receiving marketing or promotional communications via email from Gamerscout, you may opt out of such communications by clicking on the UNSUBSCRIBE button..</p>
        <p>External Data Storage Sites</p>
        <p>We may store your data on servers provided by third party hosting vendors with whom we have contracted.</p>
        <p>Changes to this Statement</p>
        <p>Gamerscout reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our site, and/or by updating any privacy information on this page. Your continued use of the Site and/or Services available through this Site after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.</p>
        <p>Contact Information</p>
        <p>Gamerscout welcomes your questions or comments regarding this Statement of Privacy. If you believe that Gamerscout has not adhered to this Statement, please contact Gamerscout at:</p>
        <span>Gamerscout</span>
        <span>Delaware</span>
        <span>Email Address:</span>
        <span>gamerscout.team@gmail.com</span>
        <span>Telephone number:</span>
        <span>4087170180</span>
        <span>Effective as of April 23, 2018</span>
      </div>
      <Footer />
    </div>
  );
};

PrivacyPolicy.propTypes = {
};

PrivacyPolicy.defaultProps = {
};

export default PrivacyPolicy;
