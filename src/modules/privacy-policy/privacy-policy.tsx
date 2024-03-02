import { Title } from '@/components/text/text.styled';
import sand from '@/assets/home/section4/sand.png';
import { Bubble } from '../home/components/bubbles/bubble';
import { Wrapper } from './privacy-policy.styled';

export const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <div className='bubble left'>
        <Bubble maxScale={1.4} />
      </div>
      <div className='bubble right'>
        <Bubble maxScale={1.4} />
      </div>

      <div className='sand'>
        <img src={sand} alt='' />
      </div>
      <div className='terms-of-service'>
        <Title>Privacy Policy</Title>
        <p>
          This Privacy Policy describes how Aquachilling collects, uses and shares personal information in connection
          with its websites and services (collectively, the “Services”).
        </p>
        <h3>Personal Information We Collect</h3>
        <h4>Information you provide to us:</h4>
        <ul>
          <li>
            Contact details and registration information, such as email address, username, and public contact
            information you provide.
          </li>
          <li>
            Payment and transaction information, such as your account information, ETH (Optimism) wallet information,
            payment information, and information regarding transaction amounts and history. Please note that to effect
            cryptocurrency transactions, we work with, among others, the third-party electronic wallet extension,
            MetaMask. Your interactions with MetaMask are governed by its own privacy policies.
          </li>
          <li>
            Communications that we exchange with you, including when you contact us with questions, feedback, or
            otherwise.
          </li>
          <li>
            Marketing data, such as your preferences for receiving our marketing communications, and details about your
            engagement with them.
          </li>
          <li>
            User generated content that you choose to post on the Services. Such content may be viewable publicly, and
            by other users of the Services
          </li>
          <li>
            Other data not specifically listed here, which we will use as described in this Privacy Policy or as
            otherwise disclosed at the time of collection.
          </li>
        </ul>
        <p>
          Third party sources. We may combine personal information we receive from you with personal information we
          obtain from other sources, such as:
          <ul>
            <li>
              Ethereum (ETH) (Optimism) wallet and crypto transaction information. When you connect your ETH wallet
              (Optimism) to our Services from third party services such as MetaMask, we will access information from
              such third parties, including the contents of your wallet, your cryptocurrencies, NFTs, and tokens.
            </li>
            <li>
              Third-party login information. When you link, connect, or login to the Services with a third party
              service, such as Twitter or Discord, you direct these services to send us information associated with your
              account, as controlled by them or as authorized by you via your privacy settings on their services.
            </li>
            <li>
              Social media information. We may maintain pages on social media platforms, such as Twitter, Medium,
              Discord, and YouTube. When you visit or interact with our pages on those platforms, the platform
              provider’s privacy policy will apply to your interactions and their collection, use and processing of your
              personal information. You or the platforms may provide us with information through the platform, and we
              will treat such information in accordance with this Privacy Policy.
            </li>
            <li>
              Other Sources. We may obtain your personal information from other third parties, such as
              publicly-available sources and data providers.
            </li>
          </ul>
        </p>
        <p>
          Automatic data collection. We and our service providers may automatically log information about you, your
          computer or mobile device, and your interaction over time with the Services, our communications and other
          online services, such as:
          <ul>
            <li>
              Device data, such as your computer’s or mobile device’s operating system type and version, manufacturer
              and model, browser type, screen resolution, RAM and disk size, CPU usage, device type (e.g., phone,
              tablet), IP address, unique identifiers (including identifiers used for advertising purposes), language
              settings, mobile device carrier, radio/network information (e.g., WiFi, LTE, 3G), and general location
              information such as city, state or geographic area.
            </li>
            <li>
              Online activity data, such as pages or screens you viewed, how long you spent on a page or screen, the
              website you visited before browsing to the Services, navigation paths between pages or screens,
              information about your activity on a page or screen, access times, and duration of access, and whether you
              have opened our marketing emails or clicked links within them.
            </li>
          </ul>
        </p>
        <h3>We use the following tools for automatic data collection:</h3>
        <ul>
          <li>
            Cookies, which are text files that websites store on a visitor’s device to uniquely identify the visitor’s
            browser or to store information or settings in the browser for the purpose of helping you navigate between
            pages efficiently, remembering your preferences, enabling functionality and helping us understand user
            activity and patterns.
          </li>
          <li>
            Local storage technologies, like HTML5, that provide cookie-equivalent functionality but can store larger
            amounts of data, including on your device outside of your browser in connection with specific applications.
          </li>
          <li>
            Web beacons, also known as pixel tags or clear GIFs, which are used to demonstrate that a webpage or email
            was accessed or opened, or that certain content was viewed or clicked.
          </li>
        </ul>
        <h3>How We Use Personal Information</h3>
        <p>
          We use your personal information for the following purposes:
          <ul>
            <li>To operate our Services</li>
            <li>Provide, operate, maintain, secure and improve our Services.</li>
            <li>Provide information about our Services.</li>
            <li>
              Communicate with you about our Services, including by sending you announcements, updates, security alerts,
              and support and administrative messages.
            </li>
            <li>
              Understand your needs and interests, and personalize your experience with our Services and our
              communications.
            </li>
            <li>Respond to your requests, questions and feedback.</li>
            <li>
              Research and development. As part of these activities, we may create aggregated, de-identified or other
              anonymous data from personal information we collect. We may use this anonymous data and share it with
              third parties for our lawful business purposes.
            </li>
          </ul>
        </p>
        <p>
          <strong> Marketing and advertising. </strong>We may collect and use your personal information for marketing
          purposes, including:
          <ul>
            <li>
              Direct marketing. We may send you direct marketing communications as permitted by law, including, but not
              limited to, notifying you of special promotions, offers and events. You may opt out of our email marketing
              communications as described in the “Opt out of marketing communications” section below
            </li>
          </ul>
        </p>
        <p>
          <strong>Compliance and protection </strong>. We may use your personal information to:
          <ul>
            <li>
              Comply with applicable laws, lawful requests, and legal process, such as to respond to subpoenas or
              requests from government authorities.
            </li>
            <li>
              Protect our, your or others’ rights, privacy, safety or property (including by making and defending legal
              claims).
            </li>
            <li>
              Audit our internal processes for compliance with legal and contractual requirements and internal policies.
            </li>
            <li>Enforce the terms and conditions that govern the Services.</li>
            <li>
              Prevent, identify, investigate and deter fraudulent, harmful, unauthorized, unethical or illegal activity,
              including cyberattacks and identity theft.
            </li>
          </ul>
        </p>
        <h3>How We Share Your Personal Information</h3>
        <p>
          We may share your personal information with:
          <ul>
            <li>Affiliates. Our corporate affiliates, for purposes consistent with this Privacy Policy.</li>
            <li>
              At your direction. When you use our Services to engage with third-parties, such as wallets, and other
              users, you direct us to share your information with them to provide the Services you request.
            </li>
            <li>
              Service providers. Companies and individuals that provide services on our behalf or help us operate our
              Services or our business (such as hosting, information technology, customer support, email delivery, and
              website analytics services).
            </li>
            <li>
              Professional advisors. Professional advisors, such as lawyers, auditors, bankers and insurers, where
              necessary in the course of the professional services that they render to us.
            </li>
            <li>
              Authorities and others. Law enforcement, government authorities, and private parties, as we believe in
              good faith to be necessary or appropriate for the compliance and protection purposes described above.
            </li>
            <li>
              Business transferees. Acquirers and other relevant participants in business transactions (or negotiations
              for such transactions) involving a corporate divestiture, merger, consolidation, acquisition,
              reorganization, sale or other disposition of all or any portion of the business or assets of, or equity
              interests in, Aquachilling or our affiliates (including, in connection with a bankruptcy or similar
              proceedings).
            </li>
          </ul>
        </p>
        <h3>How You Share Information on the Services</h3>
        <p>
          Third-party platforms. By enabling features or functionality that connect your account to a third-party
          platform (such as by logging in to the Services with your Twitter or Discord account), you chose to disclose
          certain of your personal information to those services. We do not control those third parties’ use of your
          personal information.
        </p>
        <p>
          Other Aquachilling users. When you use the Services, you may share certain information with the Aquachilling
          community. This information may include your profile information and other content you choose to submit on the
          Services.
        </p>
        <h3>Your Choices</h3>
        <ul>
          <li>
            Access or update your information. If you have created a profile with us, you may review and update certain
            personal information in your account profile by logging into the account.
          </li>
          <li>
            Opt out of marketing communications. You may opt out of marketing-related email communications by following
            the opt out or unsubscribe instructions contained in the marketing communications we send you.
          </li>
        </ul>
        <p>
          Online tracking opt-out. There are a number of ways to limit online tracking on our Services, which we have
          summarized below:
          <ul>
            <li>
              Blocking cookies in your browser. Most browsers let you remove or reject cookies. To do this, follow the
              instructions in your browser settings. Many browsers accept cookies by default until you change your
              settings. For more information about cookies, including how to see what cookies have been set on your
              device and how to manage and delete them, visit https://www.allaboutcookies.org/.
            </li>
            <li>
              Using privacy plug-ins or browsers. You can block our websites from setting cookies by using a browser
              with privacy features, like Brave, or installing browser plugins like Privacy Badger, Ghostery, or uBlock
              Origin, and configuring them to block third party cookies/trackers.
            </li>
          </ul>
        </p>
        <p>
          Note that because these opt out mechanisms are specific to the device or browser on which they are exercised,
          you will need to opt out on every browser and device that you use.
        </p>
        <p>
          Do Not Track. Some Internet browsers may be configured to send "Do Not Track" signals to the online services
          that you visit. We currently do not respond to "Do Not Track" or similar signals. To find out more about "Do
          Not Track", please visit http://www.allaboutdnt.com
        </p>
        <h3>Other Sites and Services</h3>
        <p>
          Our Services may contain links to websites and other online services operated by third parties. In addition,
          our content may be integrated into web pages or other online services that are not associated with us. These
          links and integrations are not an endorsement of, or representation that we are affiliated with, any third
          party. We do not control websites or online services operated by third parties, and we are not responsible for
          their actions.
        </p>
        <h3>Processing of Personal Information in the U.S.</h3>
        <p>
          By using our Services, you understand and acknowledge that your personal information will be transferred from
          your location to our facilities and servers in the United States.
        </p>
        <h3>Security</h3>
        <p>
          We employ a number of technical, organizational and physical safeguards designed to protect the personal
          information we collect. However, no security measures are failsafe and we cannot guarantee the security of
          your personal information.
        </p>
        <h3>Children</h3>
        <p>
          The Services are not intended for use by children under 13 years of age. If we learn that we have collected
          personal information through our Services from a child under 13 without the consent of the child’s parent or
          guardian as required by law, we will delete it.
        </p>
        <h3>Changes to this Privacy Policy</h3>
        <p>
          We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy
          Policy, we will notify you by email or updating the date of this Privacy Policy and posting it on the
          Services.
        </p>
        <h3>How to Contact Us</h3>
        <p>Please direct any questions or comments about this Policy or privacy practices to admin@aquachilling.com </p>
      </div>
    </Wrapper>
  );
};
