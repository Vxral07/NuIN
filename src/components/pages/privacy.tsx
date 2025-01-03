import { useState } from "react";

const Privacy = () => {
  const [selectedPage, setSelectedPage] = useState("privacy"); // Default to Privacy Policy

  const renderContent = () => {
    switch (selectedPage) {
      case "terms":
        return <p>Use of this website is for eligible persons only, which includes Retail Clients, Professional Clients and Market Counterparties as defined in 2. Client classification of the Dubai International Financial Center (“DIFC”) Conduct of Business Rulebook (“Eligible Persons”). <br />

          Capitalised terms not defined in these Terms of Use shall have the same meaning attributed to them in the relevant Rules of the DIFC. <br />

          Nuqi Digital Wealth Ltd, including but not limited to its shareholders, directors, officers, employees, group members, affiliates, and assignees (collectively referred to as “Nuqi” or “We”), accepts no liability and offers no warranties concerning the documentation or information presented on this website, to the fullest extent permitted by law. The information contained on this website is subject to change without notice. <br /> <br />

          Nuqi has exercised all reasonable care in compiling the information provided on this website. Nevertheless, Nuqi does not guarantee or assert that the information will be promptly updated or that it will reveal all relevant details regarding the services mentioned herein. Additionally, Nuqi does not verify the authenticity of information obtained from third parties.<br /><br />

          No documentation or information provided on this website is intended to constitute a recommendation of any investment, financial advice, or any other advice by any party in any jurisdiction. Full details on the products and services are not available herein and may be provided by Nuqi upon additional request.<br /> <br />

          This website contains general information collected, maintained, and provided for the informative purposes and convenience of the eligible user only and shall not be relied upon to make any final business or investment decisions.

          No information contained on this website should be construed as an investment advertisement. Accordingly, nothing in this website is to be construed as providing financial advice, an offer or invitation made to any person to enter into any legal agreement of any kind or exercise any rights whatsoever, in relation to the offering of any security or a solicitation.<br /><br />

          Unauthorized use of the contents of this website is strictly prohibited. Under no circumstances should the information provided on this website be copied, disseminated, reproduced, or redistributed other than printing or downloading for personal non-commercial use by ‘eligible persons’ as defined in the DIFC Conduct of Business Rulebook. No rights of any kind are licensed or assigned or shall otherwise pass to persons accessing this website.<br /><br />

          Nuqi does not assume any liability and shall not be liable to you for any damages, including but not limited to, direct or indirect, special, incidental, or consequential damages, losses, or expenses arising in connection with this website and the information contained within, the use of, or the inability to use, the website by any party.<br />

          Any link within this website, except for any link to other Nuqi corporate sites, is included for information purposes only and for your convenience. Nuqi’s inclusion of such links does not imply any endorsement of the materials on such links. Nuqi does not accept any liability and shall not be liable to you for any loss or damage arising from or as a result of your acting upon the content of another website to which you may link from this website.<br />

          By proceeding into this website, you are representing and warranting that you are an Eligible Person as defined in the DIFC Conduct of Business Rulebook and agree to the use of the website subject to the terms and conditions stated herein..<br /> <br />

          <p className="font-bold text-xl text-white"> 1. Introduction</p>

          Nuqi is a DIFC-based company licensed and regulated by the Dubai Financial Services Authority, is a category 3C firm authorized to carry on regulated activities of managing assets, arranging custody, arranging Credit & Advising on Credit, advising on Financial Products and arranging Deals in Investments, with endorsement of retail and operating an Islamic Window, which is available online and through mobile applications. Nuqi’s Dubai Financial Services Authority’s reference number is F007613, and the full DFSA Register is available on the DFSA’s website which can be accessed here https://www.dfsa.ae/public-register/firms/nuqi-digital-wealth-ltd<br /> <br />
          <p className="font-bold text-xl text-white">1.1 Purpose </p>

          We offer traditional External Assets manager and an automated digital investment management service (the Services). Should you choose to become our client (“Client”), we will manage a diversified, continually rebalanced portfolio of securities on your behalf in a very low cost and diversified manner. When you use our website and mobile application you enter into a series of legally binding agreements. You also agree to our Privacy Policy which covers how we collect, use, share and store your personal information.<br /> <br />
          <p className="font-bold text-xl text-white"> 1.2 Binding Agreement </p>

          When you access our website at https://uae.nuqiwealth.com/ and/or our mobile application ("our website", "our App" or "Nuqi") as a user (“User”), you're agreeing to be bound by the following Terms of Use, and, if you've elected to become a Client, our Client Agreement. Please therefore take the time to read the following binding Terms of Use below. For the purpose of this Terms of Use, a User is an individual who uses our website or App to evaluate our Service, or for educational purposes and a Client is an individual who signs our Client Agreement that entitles the Client to have her or his investment portfolio managed by Nuqi on a discretionary basis and in accordance with an agreed investment mandate. This Terms of Use, as well as the Privacy Policy applies to both Users and Clients. If you elect to become a Client, you will be subject to these Terms of Use, our Client Agreement, our Privacy Policy and any additional terms to which you agree when you create and fund an investment account.<br /> <br />

          <p className="font-bold text-xl text-white"> 2. Clients  </p><br />
          <p className="font-bold text-xl text-white">2.1 Eligibility</p>

          Nuqi is intended solely for individuals who are 18 years or older. Any access to or use of Nuqi by anyone under 18 is unauthorized, unlicensed, and in violation of these Terms of Use. By accessing or using Nuqi, you represent and warrant that you are 18 or older, that you can form a binding contract with Nuqi, that you are not a person barred from using the Service under the laws of the United Arab Emirates, DIFC laws, or any other applicable jurisdiction, and that you will comply with these Terms of Use Agreement and all applicable local, state, national, and international laws, rules, and regulations..<br /> <br />
          You will keep your username and password safe. <br />
          You will not share your account with anyone else. <br /> <br />


          <p className="font-bold text-xl text-white">2.2 Your Access</p>
          To access certain features of Nuqi, you must register and create a User Account. During registration, you will choose a password, which you will need to access your User Account. Nuqi employs physical, electronic, and procedural safeguards that comply with DIFC standards to protect Users' and Clients' non-public personal information. You are responsible for safeguarding your password and User Account information. You agree not to disclose your password to any third party and to notify Nuqi immediately if your password is lost or stolen or if you suspect any unauthorized use of your User Account. As a User, you agree to be solely responsible for any activities or actions under your User Account,  whether or not you have authorized such activities or actions.  <br /><br />You agree that the information you provide during account registration through our website, app, or any other communication channel will be true, accurate, current, and complete. You are prohibited from scraping or copying information through any means (including crawlers, browser plugins, add-ons, and any other technology or manual work) as detailed in Section 6.2. The content of the site is protected by applicable copyright and trademark laws. Unauthorized use or exploitation of such content is strictly prohibited, including, but not limited to, unauthorized downloading, retransmission, storage in any medium, copying, redistribution, reproduction, or republication of the site, or any part thereof, for any purpose. Nuqi cannot guarantee complete confidentiality or security for information that is transmitted electronically. By accessing the site, you acknowledge that Nuqi is not responsible for any damages or losses you may suffer due to your electronic transmission of confidential or sensitive details. Please refer to Nuqi’s privacy policy for more information. We may send you communications that you are required to read. You may customize them according to your preferences.<br /><br />

          <p className="font-bold text-xl text-white">2.3 Alerts, Notifications and Service Communications</p>

          By creating a User Account, you automatically sign up for various types of alerts via e-mail and mobile notifications. When logged in, you may customize, modify, and in some cases, deactivate alerts by adjusting the settings accordingly. We never include your password in these communications; however, we may include your name, email address, and information about your portfolio(s) if you are a Client. Anyone with access to your email or mobile device will be able to view these alerts.<br /><br />

          <p className="font-bold text-xl text-white"> 3. TermsOfUse and Limit of Liability    </p>

          Nuqi cannot be held responsible for any financial insights or recommendations provided to Users. This website is only intended to provide you with general information and is neither considered to be a financial advice, an offer to sell nor a solicitation of an offer to purchase any security and may not rely on investment purposes.<br /><br />

          <p className="font-bold text-xl text-white"> 3.1 For a User who is not a Client   </p>

          You understand and acknowledge that the investment results you could obtain from investment information and financial insights provided by Nuqi cannot be guaranteed and that Nuqi cannot be held responsible. All investments entail a risk of loss and that you may lose all your money. Investment management services may be offered to individuals who become clients, at the sole discretion of Nuqi. Your election to engage our investment management services are subject to your explicit enrolment and acceptance of the separate Client Agreement and related fee schedule.<br /><br />
          You agree and understand that your use of Nuqi is for its intended purposes only and it is not intended to provide legal, tax or financial planning advice. You agree as a User that you are responsible for your own investment research and investment decisions, that Nuqi is only one of many tools you may use as part of a comprehensive investment education process, that you should not and will not rely on Nuqi as the primary basis of your investment decisions and, except as otherwise provided for herein, Nuqi will not be liable for decisions/ actions you take or authorize third parties to take on your behalf based on information you receive as a User of Nuqi or information you otherwise see on our website.<br /><br />

          Other sites accessed by hyperlinks appearing in the site may be independently developed by parties other than Nuqi. Nuqi does not guarantee the accuracy of the information contained in such sites.<br />
          Links to other sites should not be taken as Nuqi’s endorsement or approval of such sites, the third parties named therein, or their products and services, nor is any liability assumed for incompatibility, non-suitability, viral infection or other destructive components on or from such sites.<br /><br />
          This is our TermsOfUse of legal liability. <br /><br />
          <p className="font-bold text-xl text-white">
            3.2 Terms Of Use of Warranties </p>

          Your use of Nuqi's website, and the personal information you provide is at your sole discretion and risk. Nuqi's website and all materials, information, products and services included therein, are provided on an AS IS and AS AVAILABLE basis without any representations, warranties or conditions of any kind from Nuqi. Whether expressed or implied, and including without limitation implied representations, warranties or conditions of title, non-infringement, merchantability, fitness for a particular purpose, performance, durability, availability, timeliness, accuracy, or completeness, all of which are now disclaimed by Nuqi to the fullest extent permitted by law.<br /><br />
          Nuqi expressly disclaims all warranties of any kind, whether express, implied, or statutory, relating to nuqi's website, content, and user information, including but not limited to the warranties of title, merchantability, fitness for a particular purpose, non-infringement of proprietary rights, course of dealing, or course of performance. Nuqi disclaims any warranties, express or implied, including but not limited to: <br /><br /> - The availability, security, accuracy, reliability, timeliness, and performance of nuqi's website, content, and/or user information.<br /> - That nuqi's website will be error-free or that any errors will be corrected.<br /> - That nuqi's website will be free from electronic viruses.<br /> - The performance of or accuracy, quality, currency, completeness, or usefulness of any information provided by nuqi on its website, including but not limited to information obtained through social media.<br /><br />
          {/* NUQI EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, RELATING TO NUQI'S WEBSITE, CONTENT, AND USER INFORMATION, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OF PROPRIETARY RIGHTS, COURSE OF DEALING, OR COURSE OF PERFORMANCE. NUQI DISCLAIMS ANY WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO: <br /><br />
          - THE AVAILABILITY, SECURITY, ACCURACY, RELIABILITY, TIMELINESS, AND PERFORMANCE OF NUQI'S WEBSITE, CONTENT, AND/OR USER INFORMATION.<br />
          - THAT NUQI'S WEBSITE WILL BE ERROR-FREE OR THAT ANY ERRORS WILL BE CORRECTED.<br />
          - THAT NUQI'S WEBSITE WILL BE FREE FROM ELECTRONIC VIRUSES.<br />
          - THE PERFORMANCE OF OR ACCURACY, QUALITY, CURRENCY, COMPLETENESS, OR USEFULNESS OF ANY INFORMATION PROVIDED BY NUQI ON ITS WEBSITE, INCLUDING BUT NOT LIMITED TO INFORMATION OBTAINED THROUGH SOCIAL MEDIA.<br /><br /> */}


          No advice or information, whether oral or written, obtained by you from Nuqi's website, shall create any warranty not expressly stated in this Terms of Use. If you choose to rely on such information, you do so solely at your own risk.<br /><br />

          Some countries or jurisdictions do not allow the exclusion of certain warranties. Accordingly, some of the above exclusions may not apply to you. <br /><br />

          These are the limits of legal liability we may have to you. <br /> <br />

          <p className="font-bold text-xl text-white">  3.3 Limitation of Liability </p>

          {/* IN NO EVENT SHALL NUQI OR ANY OF ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU FOR ANY DAMAGES WHATSOEVER, INCLUDING WITHOUT LIMITATION INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF NUQI, CONTENT AND/OR USER INFORMATION, INCLUDING BUT NOT LIMITED TO THE QUALITY, ACCURACY, OR UTILITY OF THE INFORMATION PROVIDED AS PART OF OR THROUGH NUQI OR FOR ANY INVESTMENT DECISIONS MADE ON THE BASIS OF SUCH INFORMATION, WHETHER THE DAMAGES ARE FORESEEABLE AND WHETHER OR NOT NUQI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION AND IN NO EVENT SHALL NUQI'S CUMULATIVE LIABILITY TO YOU EXCEED U.S. AED250.<br /><br /> */}
          In no event shall nuqi or any of its officers, directors, employees, or agents be liable to you for any damages whatsoever, including without limitation indirect, incidental, special, punitive, or consequential damages, arising out of or in connection with your use of nuqi, content and/or user information, including but not limited to the quality, accuracy, or utility of the information provided as part of or through nuqi or for any investment decisions made on the basis of such information, whether the damages are foreseeable and whether or not nuqi has been advised of the possibility of such damages. The foregoing limitation of liability shall apply to the fullest extent permitted by law in the applicable jurisdiction and in no event shall nuqi's cumulative liability to you exceed U.S. AED250.<br /><br />
          Every effort has been made to ensure that the website's material is accurate at the time of publication. However, Nuqi will not under any circumstances be liable to you or any other person in any way for any loss or damages (direct, indirect, special, economic, incidental, consequential, punitive or exemplary, including without limitation loss of revenue, data, anticipated profits or lost business) in respect of the use of, or inability to use, or any reliance on, the website, any of its content or links (including without limitation any inaccuracies or viruses), or any web browser or other equipment.<br /><br />

          By accessing the website, you agree to indemnify and hold harmless Nuqi and its agents, suppliers and their respective directors, officers, and employees from and against all actions, proceedings, costs, claims, liabilities, damages, and expenses (including reasonable legal fees) arising from or in connection with a breach of these terms and conditions or the use of this website.<br /><br />

          <p className="font-bold text-xl text-white">4. Termination</p>

          Each of us can end this Terms of Use at any time.
          You may request termination of your User Account at any time and for any reason by sending an email to service@nuqiwealth.me or through the process specified in the App.
          We may terminate or suspend your access to Nuqi, in our sole discretion, at any time for any reason without notice to you. Further, if we believe, in our sole discretion, that a violation of these Terms of Use has occurred, we may take any other corrective action we deem appropriate. We reserve the right to investigate suspected violations of these Terms of Use. We may seek to gather information from a user who is suspected of violating these Terms of Use (or from any other user) and you agree to provide us with such information. We will fully cooperate with any law enforcement authorities or court order requesting or directing us to disclose the identity of anyone posting, publishing, or otherwise making available any User information, emails, or other materials that are believed to violate these Terms of Use. <br />

          Any suspension, termination, or cancellation shall not affect your obligations to Nuqi under these Terms of Use (including but not limited to ownership, indemnification, and limitation of liability), which by their sense and context are intended to survive such suspension, termination, or cancellation. <br /><br />

          <p className="font-bold text-xl text-white">5. Dispute Resolution   </p>

          You agree that these Terms of Use shall be governed by and interpreted in accordance with the laws of the DIFC excluding that body of law pertaining to conflict of laws.
          Any legal action or proceeding arising under these Terms of Use will be brought exclusively in courts of the DIFC, and the parties hereby irrevocably consent to the personal jurisdiction and venue therein.<br /><br />

          <p className="font-bold text-xl text-white"> 6. Nuqi "Dos" and "Don'ts"   </p>

          Nuqi grants you a license to use our website and App so long as you comply with all our rules.<br /> <br />

          <p className="font-bold text-xl text-white">  6.1 Dos.   </p><br />

          <p className="font-bold text-xl text-white">You agree you will: </p>
          Comply with all applicable laws, including, without limitation, privacy laws, intellectual property laws, export control laws, tax laws, and regulatory requirements;
          Provide accurate information to us, whether reported directly or through a third party who you authorize, and keep it updated;
          Use the services solely for your personal, non-commercial use;
          Use your real name on your profile and keep your password confidential; and
          Use the Services in a professional manner.<br /><br />


          <p className="font-bold text-xl text-white"> 6.2 Don'ts.  </p><br />

          <p className="font-bold text-xl text-white">    You agree you won't: </p>

          Circumvent, disable, or otherwise interfere with security-related features of Nuqi or features that prevent or restrict use or copying of any content or User information.
          Upload, email, transmit, provide, or otherwise make available:
          any User information which you do not have the lawful right to use, copy, transmit, display, or make available (including any User information that would violate any confidentiality or fiduciary obligations that you might have with respect to the User information); or any User information that infringes the intellectual property rights of, or violates the privacy rights of, any third-party (including without limitation copyright, trademark, patent, trade secret, or other intellectual property right, moral right, or right of publicity); or unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of solicitation; or any personal information that is unlawful, obscene, harmful, threatening, harassing, defamatory, or hateful, or that contain objects or symbols of hate, invade the privacy of any third-party, contain nudity, are deceptive, threatening, abusive, inciting of unlawful action, or are otherwise objectionable in the sole discretion of Nuqi; or any personal information that contains software viruses or any other computer code, files, or programs designed to (i) interrupt, destroy, or limit the functionality of any computer software; or (ii) interfere with the access of any user, host or network, including without limitation overloading, flooding, spamming, mail-bombing, or sending a virus to Nuqi; or any personal information that includes code that is hidden or otherwise surreptitiously contained within the User information. <br />
          Use any meta tags or other hidden text or metadata utilising a Nuqi name, trademark, URL or product name. <br />

          Forge any TCP/IP packet header or any part of the header information in any posting, or in any way use Nuqi to send altered, deceptive, or false source- identifying information. <br />
          Interfere with or disrupt (or attempt to interfere with or disrupt) any Nuqi web page, server, or network, or the technical delivery systems of Nuqi's providers, or disobey any requirements, procedures, policies, or regulations of networks connected to Nuqi.

          Attempt to probe, scan, or test the vulnerability of any Nuqi system or network or breach or impair or circumvent any security or authentication measures protecting Nuqi. <br /><br />
          Attempt to decipher, decompile, disassemble, or reverse-engineer any of the software used to provide Nuqi.

          Attempt to access, search, or meta-search Nuqi or content thereon with any engine, software, tool, agent, device, or mechanism other than software and/or search agents provided by Nuqi or other generally available third- party web browsers, including without limitation any software that sends queries to Nuqi to determine how a website or web page ranks.<br /><br />

          Violate the terms of service or any other rule or agreement applicable to you or Nuqi's inclusion in, reference to, or relationship with any third party or third-party site or service, or your use of any such third-party site or service. <br /><br />

          Collect or store personal information about other users without their express permission.
          Impersonate or misrepresent your affiliation with any person or entity, through pretexting or some other form of social engineering, or commit fraud. <br /> <br />

          Solicit any User for any investment or other commercial or promotional transaction. <br />

          Violate any applicable law and regulation.

          Scrape or copy information through any means (including crawlers, browser plugins and add-ons, <br /><br />
          and any other technology or manual work).

          Use, launch, or permit to be used any automated system, including without limitation "robots," "crawlers," or "spiders"; or <br />

          Copy or use the information, content or data on Nuqi in connection with a competitive service (as determined by Nuqi).<br /><br />

          Monitor Nuqi's availability, performance or functionality for any competitive purposes.<br />

          Use Nuqi or content thereon in any manner not permitted by these Terms of Use
          Copyrighted Materials.<br />

          If you become aware of any misuse of Nuqi or its content by any person, please contact Nuqi to report the abuse. Nuqi has adopted and implemented a policy that provides for the termination of Accounts of users who infringe the rights of copyright holders.<br /> <br />

          <p className="font-bold text-xl text-white"> 7. Account Information from Third Party Sites  </p>

          Users may link their accounts with third-party financial institutions with which they have customer relationships, maintain accounts or engage in financial transactions and direct Nuqi to retrieve and display information from these accounts (“Account Information”). Nuqi works with one or more third-party service providers to access this Account Information. By linking these accounts or directing Nuqi to retrieve your third-party Account Information, you are consenting to the processing of your Account Information, and other personal information you provide that is needed to retrieve your Account Information, such as credentials, by Nuqi and such service provider(s) in connection with providing this service in accordance with our Privacy Policy and as permitted by law, and, if you’ve elected to become a Client, you are consenting to the use of your Account Information by Nuqi and its affiliates in connection with the management of your Nuqi account. Nuqi does not review the Account Information for accuracy, legality or non-infringement. Nuqi is not responsible for the Account Information or products and services offered by or on third-party sites.<br /> <br />

          Nuqi cannot always foresee or anticipate technical or other difficulties which may result in failure to obtain data or loss of data, personalization settings or other service interruptions. Nuqi cannot assume responsibility for the timeliness, accuracy, deletion, non-delivery or failure to store any user data, communications or personalization settings. Displayed Account Information is only as fresh as the time shown, which reflects when the information was obtained from third-party sources. <br /> <br />

          <p className="font-bold text-xl text-white">   8. General Terms   </p>


          Some other important details about the Terms of Use:<br />


          In the event that any provision in these Terms of Use is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect. The failure of a party to enforce any right or provision of these Terms of Use will not be deemed a waiver of such right or provision. You may not assign this Terms of Use (by operation of law or otherwise) without the prior written consent of Nuqi, and any prohibited assignment will be null and void. <br />

          Nuqi may assign this Terms of Use or any rights hereunder without your consent. The relationship of the parties under these Terms of Use is that of independent contractors, and these Terms of Use will not be construed to imply that either party is the agent, employee, or joint venture of the other. Note that if you elect to become a Client, the relationship of the parties will be governed by these Terms of Use, Client Agreement, our Privacy Policy and any additional terms to which you agree when you create and fund an investment account. <br /><br />

          We may make changes to this Terms of Use and the Service from time to time. We may do this for various reasons, including to reflect changes in or requirements of the applicable law, new features, or changes in business practices.<br />

          The latest version of this Terms of Use will be posted on the website under Terms of Use, and you should regularly check for the latest version. The newest version is the version that applies. If you continue to use the Service after the changes become effective, you agree to the revised Terms of Use. You agree that this Terms of Use shall supersede any prior agreements (except as specifically stated herein) and shall govern your entire relationship with Nuqi, including but not limited to events, agreements, and conduct preceding your acceptance of this Terms of Use. We reserve the right to change this Terms of Use by posting a revised Terms of Use and we agree that changes cannot be retroactive. If you don't agree with these changes, you must stop using Nuqi.<br /><br />

          You agree the only way to provide us legal notice is at the address provided in Section 10.3. <br /><br />

          <p className="font-bold text-xl text-white"> 9. International Use </p>

          Nuqi does not make any representation that its services are appropriate or available for use outside the DIFC. Similarly, we make no representations that accessing Nuqi from locations outside the DIFC is legal or permissible under local laws. If you access Nuqi from areas outside of the DIFC, you do so at your own risk and are solely responsible for compliance with local laws.<br /><br />

          <p className="font-bold text-xl text-white ">     10. Miscellaneous      </p><br />


          <p className="font-bold text-xl text-white">10.1 Integration & Severability  </p>

          This Terms of Use is the entire agreement between you and us with respect to Nuqi, and your use of our website and App, and supersedes all prior or contemporaneous communications and proposals (whether oral, written or electronic) between you and us. If any provision of this Terms of Use is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that this Terms of Use will otherwise remain in full force and effect. The failure of either party to exercise in any respect any right provided for herein shall not be deemed a waiver of any further rights hereunder. Investment recommendations are made to Clients on an individual basis and may differ based on specific circumstances. <br /> <br />

          <p className="font-bold text-xl text-white"> 10.2 Advice may differ </p>

          We and our personnel may make recommendations and take action for Clients that may differ from the recommendations we give to you or the action we take on your behalf.
          In addition, our personnel may take actions for their own accounts based on their own investment situations that differ from the recommendations we give you or actions we take on your behalf.
          Any notice or communication will be in writing by email. <br /> <br />

          <p className="font-bold text-xl text-white">10.3 Communication </p>

          You agree that these Terms of Use and the rules, restrictions, and policies contained herein, and Nuqi's enforcement thereof, are not intended to confer and do not confer any rights or remedies on any person other than you and Nuqi. These Terms of Use together with Nuqi's Privacy Policy and Client Agreement (if applicable) constitute the entire agreement between Nuqi and you with respect to the subject matter hereof. Any notice or other communication to be given hereunder will be in writing and given by (a) Nuqi via email (in each case to the address that you provide), or (b) you via email to service@nuqiwealth.me or to such other addresses as Nuqi may specify in writing. The date of receipt shall be deemed the date on which such notice is transmitted. <br />
          We welcome your feedback! <br /><br />

          <p className="font-bold text-xl text-white"> 10.4 Feedback </p>

          Your feedback is welcome and encouraged. You may submit feedback by emailing us at service@nuqiwealth.me . You agree, however, that (i) by submitting unsolicited ideas to Nuqi or any of its employees or representatives, by any medium, including but not limited to email, written, or oral communication, you automatically forfeit your right to any intellectual property rights in such ideas; and (ii) such unsolicited ideas automatically become the property of Nuqi. You hereby assign and agree to assign all rights, title, and interest you have in such feedback and ideas to Nuqi together with all intellectual property rights therein. In addition, you warrant that all moral rights in any feedback have been waived, and you do hereby waive any such moral rights. <br /> <br />

          <p className="font-bold text-xl text-white">10.5 Questions  </p>

          This document constitutes Nuqi's complete Terms of Use for Nuqi and related services.
          If you have questions about these Terms of Use or about Nuqi or content thereon, please contact Nuqi at service@nuqiwealth.me.<br /> <br />

          <p className="font-bold text-xl text-white">11. Severance</p>
          No consent or waiver by either party, or of any breach or default by, the other party in its performance of its obligations under this Terms of Use will be deemed or construed to be a consent to, or a waiver of, a continuing breach or default or any other breach or default of those or any other obligations of that party. No consent or waiver will be effective unless in writing. <br />
          If any provision of these terms and conditions is unlawful, void, or for any reason is unenforceable. That provision shall be deemed to be severed from the rest of these terms and conditions and shall not affect the validity and enforceability of any remaining provisions. <br />


        </p>;
      case "privacy":
        return (
          <>
            {/* <h1 className="font-semibold text-lg py-4 text-cyan-400">
              Privacy Policy
            </h1> */}
            <p className=" font-poppins">
              This Privacy Policy (“Policy”) forms part of the terms and conditions (“Terms”) relating to the use of the website www.nuqiwealth.me or the app provided by Nuqi Digital Wealth Limited and (together with its parent, subsidiaries, affiliate companies and their respective directors, partners, officers, employees or agents (Hereafter referred as “NUQI”,“we”, “us”, “our”). NUQI is the data controller of any personal information provided to us, via this website or otherwise. <br /><br />
              NUQI is committed to safeguarding the privacy of the personal information that is provided to us or collected by us during the course of our business as well as the personal information we receive from you (“User”, “you” or “your”). This Policy, describes how and why we collect, store and use personal information, and provides information about your rights. Please read the following information carefully to understand our views and practices regarding how we handle personal information. <br /><br />
              For the purposes of applicable data protection law, NUQI is the “data controller” of your personal information.<br /> <br /> <br />
              <p className="font-bold text-xl text-white "> What information we collect </p>

              We may collect personal information from you through your use of the website, when you request information from us, when you engage us for our services, or as a result of your relationship with any of our clients. <br />
              We may request, and collect from you, personal information and other information. Depending on the information or services you request, we may ask you to provide your name, phone numbers, address, email address, passport details, and other such personal information.<br /><br />
              By providing us with any personal information, you are consenting to the use of your personal information as contemplated in this privacy notice. If you do not want us to use your personal information for any of these purposes, please do not provide us with your personal information.<br /><br />
              <p className="font-bold text-xl text-white">Why we collect the information</p>
              We will only use your personal information for our legitimate business purposes, including: <br />
              •	To process and respond to inquiries, and provide our services;<br />
              •	To manage our relationship with you and our clients;<br />
              •	To market our services;<br />
              •	To compile anonymous statistics, such as website usage statistics and statistics on the effectiveness of invitations and other emails; and<br />
              •	To allow our custodian and brokerage providers (through whom we are able to provide our services) to comply with the regulations of all jurisdictions in which they must comply in order to provide their services; and<br />
              •	Where otherwise required by law.  <br /> <br />
              <p className="font-bold text-xl text-white"> Relationship management</p>
              We operate a Relationship Management email mailing list program, which we use to inform clients and other contacts about our services, including our publications and events. Such marketing messages may contain tracking technologies in order to track subscriber activity relating to engagement, demographics and other data, and to build subscriber profiles.<br /><br />
              If you would like to cease receiving marketing materials from us at any time, please let our CRM management team know directly. You can also change your preferences for receiving our marketing emails and legal updates from us at any time, and you can unsubscribe by following the instructions specified in our marketing emails or via the websites. Please update your details by contacting our admin team by email at admin@nuqiwealth.me<br /><br />
              <p className="font-bold text-xl text-white">Distribution of your information</p>
              We may disclose your personal information to a recipient (i) for the purposes of outsourcing one or more of the purposes-related functions described above; (ii) to confirm or update information provided by you; (iii) to inform you of events, information about our services, and other important information, or (iv) for other purposes disclosed at or before the time the information is collected. <br /><br />
              If you tell us you wish to attend an event, your name and organization may appear on a list which we provide to other delegates at the event. We also take photographs and video of our events, and this may result in your image being captured and used while reporting on the event (e.g. via social media or other means). <br /> <br />
              In relation to any other third parties we will only disclose your information where you have given your consent or where we are required to do so by law, or where it is necessary for the purpose of, or in connection with legal proceedings or in order to exercise or defend legal rights. <br /><br />
              <p className="font-bold text-xl text-white">Cross-border transfer of your information</p>
              It may sometimes be necessary for us to share your personal information with other Entities around the world or for such Nuqi Digital Wealth Limited offices to share your information with Partner Offices in the DIFC. It may also be necessary for us to share your personal information with associated professional services firms around the world, who provide services to us or on our behalf (including data storage facilities or online storage located within or outside the United Arab Emirates, which may be operated by independent service contractors). This will entail a transfer of personal information from within the Dubai International Financial Centre to recipients outside the DIFC, and vice versa.<br /><br />
              The level of personal information protection in locations outside DIFC may be less than that offered within the DIFC or the country in which you reside and may not be recognized as providing an adequate level of protection, but we have procedures in place to ensure the protection of personal information. These procedures include putting steps in place to ensure that all such entities keep your personal information confidential and secure and only use it for the purposes that we have specified and communicated to you. When we transfer your information to other countries, we will use, share and safeguard that information as described in this privacy notice. We only transfer personal information to these countries, with your consent, when it is necessary for the services we provide you, or subject to appropriate safeguards that assure the protection of your personal information, such as standard contractual clauses. <br /><br />
              <p className=" text-xl font-bold text-white">Your rights</p>
              The DIFC Data Protection aims to give you more control of your data. It provides new and strengthened rights.<br /><br />
              <p className="font-bold text-xl text-white"> •Right to access:</p> you can ask us whether we’re processing your personal data, including where and for what purpose. You can also request an electronic copy of your personal data free of charge<br /><br />
              <p className="font-bold text-xl text-white"> • Right to restrict processing:</p> in certain circumstances, you can ask us to restrict our use of your personal data <br /><br />
              <p className="font-bold text-xl text-white"> • Right to rectification:</p> you can ask us to correct inaccurate personal data we hold about you<br /><br />
              <p className="font-bold text-xl text-white"> • Right be forgotten:</p> in certain circumstances, you can ask us to erase your personal data<br /><br />
              <p className="font-bold text-xl text-white">• Right to data portability:</p> you can ask us to provide you with a copy of your personal data in a commonly used electronic format, so that you can transfer it to other businesses<br /><br />
              <p className="font-bold text-xl text-white">• Right to object to automated decision-making:</p> in certain circumstances, you can ask us not to make automated decisions about you based on your personal data that produce significant legal effects<br /> <br />
              <p className="font-bold text-xl text-white"> • Right to lodge a complaint:</p>you can lodge a complaint with your local data protection authority<br /><br />
              If you would like to exercise any of the above rights, please contact us at compliance@nuqiwealth.me<br /><br />

              <p className=" text-xl font-bold text-white" >Keeping your data safe</p>
              The information you provide may be confidential, and we will maintain such confidentiality and protect your information in accordance with this privacy notice, our professional obligations and applicable law. We do not sell, rent, distribute, or otherwise make, personal information commercially available to any third party. We may share information with our service providers for the purposes set out in this privacy notice.  We have implemented reasonable administrative, technical and physical measures to protect your personal information against loss, misuse and alteration.<br /><br />
              <p className=" text-xl font-bold text-white">Changes to this privacy policy</p>
              This Privacy Policy is effective as of October 20th Dec 2023 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically.

            </p>
          </>
        );
      case "disclaimer":
        return <p>
          This disclaimer is intended for general informational purposes only. It is provided by Nuqi Digital Wealth Limited ("NUQI DIFC"), a company regulated by the Dubai Financial Services Authority ("DFSA") with offices located at, 501, Innovation One Building, DIFC, Dubai, UAE. <br /> <br />
          Please note that the information provided is not intended to be research material, investment advice, or a solicitation to buy or sell any securities or financial instruments. It is for general informational purposes only and does not take into account your specific investment objectives, financial situation, or individual needs. You should not rely solely on this information when making investment decisions.<br /><br />
          Before making any investment, you should carefully review the relevant offering documents and seek independent legal, tax, and regulatory advice. This includes consulting with a qualified advisor to determine if a particular investment is suitable for you, considering your unique circumstances.<br /><br />
          Opinions, forecasts, and estimates are those of Nuqi Digital Wealth Limited as of the date of this information and are subject to change without notice. Past performance is not indicative of future results, and no guarantee or warranty is made regarding future investment performance.<br /><br />
          Any forecasts included here regarding potential future movements in rates, prices, events, or occurrences are solely opinions and should not be taken as guarantees of actual future results. Neither the analysts who prepared this information nor their close associates have any material financial interest in the investments mentioned. Additionally, Nuqi Digital Wealth Limited do not hold shares in any of the recommended securities.<br /><br />
          Furthermore, Nuqi Digital Wealth Limited and its affiliates do not act as corporate brokers, market makers, or have any commercial relationships with the issuers of the securities mentioned in this material. Likewise, none of the issuers of these securities have any ownership stake in Nuqi Digital Wealth Limited or its affiliates.

        </p>;
      case "cookie":
        return <p>
          With each of your visits to our website or app, we may automatically collect the following information: <br /> <br />• Technical information, including the Internet protocol (IP) address used to connect your computer to the Internet, browser type and version, time zone setting, location; browser plug-in types and versions, operating system, as well as the admin system and aggregated data reports. That data is statistical in nature and tells us about the navigational behaviour and actions of our users and does not divulge any information about the identity of any individual; and <br /><br />• Information about your visit; services you viewed or searched for; page response times, download errors, length of visits, page interaction information (such as scrolling, clicks, and mouse-overs); and • In addition, we may use third party services such as Google Analytics that collect, monitor and analyze information about Demographics and Navigational Behaviour. Demographics may include information such as gender, country of provenance and age. Navigational Behaviour may include information such as pages viewed during a session, time spent on a given page and engagement with the Site's content such as clicks and form submissions (e.g. an email subscription to our newsletter). <br /><br />

          For that same reason, we can obtain information about your general use of the internet using cookie files, which are small files that are sent to us and which are stored in your computer or other device's hard drive. The cookies help us improve our Site as well as provide a better and more personalized service. They allow us to:<br /><br /> • Estimate the size and nature of our audience as well as its behavioural tendencies on our Site <br /><br /> • Store information about our users' preferences, which allows us to personalize our Site in conjunction with individual interests<br /><br /> • Accelerate your search<br /> <br />• Recognize you when you come back on our Site<br /><br />

          If you wish to remove cookies, you can deactivate cookies within your browser's parameters. However, if you deactivate your cookies, you might not be able to access some parts of our Site. We offer a free app for a variety of mobile devices. The app processes the personal details you give us in much the same way as our website does. With your consent, we may send you push notifications with information. You may grant us access to your location data or contact details in order to provide services requested by you. Please read the instructions of your mobile device to understand how to change the settings and enable the sharing of such data or the receipt of push notifications.
        </p>; <br />
      case "termsConditions":
        return (
          <p>
            Nuqi General Terms and Conditions <br/> <br/>

            These terms and conditions (the “General Terms and Conditions”) which include the Schedules, any express consents given by you from time to time, apply to the provision of certain services to you by Nuqi Digital Wealth Limited (“Nuqi”, “us”, “our”, “we”), in relation to the user’s (“Client”, “you”, “your”) Accounts. Nuqi is a company incorporated and registered in the Dubai International Financial Centre (“DIFC”) with company number CL3824, whose registered office is at office 501, Innovation One Building, DIFC, Dubai, United Arab Emirates and is authorized and regulated by the Dubai Financial Services Authority (“DFSA”). These Terms and Conditions contain important information regarding the services that we will provide to you for your own protection. You should read them carefully before accepting them. If you do not understand anything in these Terms and Conditions, please visit www.nuqiwealth.com and ask for further information. These Terms and Conditions form an agreement between you and Nuqi (the “Agreement”). This Agreement constitutes a client agreement for the purposes of the DFSA Conduct of Business Rulebook (“COB”) and will come into force when you indicate your acceptance of its terms, and we will also treat your access to and use of our Services as acceptance of the terms of the Agreement.<br/><br/>
            In this Agreement:<br/><br/>

            “Account/s” means each account opened with Nuqi by you pursuant to this Agreement.<br/><br/>

            “DFSA Rules” means the subsidiary legislation made under DIFC law or any other law applicable in the DIFC which is administered by the DFSA.<br/><br/>

            “Execution-Only Basis” means we will carry out your instructions to buy and sell securities on your behalf and at your own risk, without getting any guidance or advice about the securities from us.<br/><br/>
            “Risk Warnings” means the risk warnings set out on the Website as listed in Schedule 1.<br/><br/>

            “Services” means any service provided to you, be it access to the platform, or opening an account with us.<br/><br/>

            “Target Asset Allocation” means a portfolio strategy that involves setting target allocations for various asset classes and rebalancing periodically. The portfolio is rebalanced to the original allocations when they deviate significantly from the initial setting due to differing returns from the various assets.<br/><br/>
            “Website” means www.nuqiwealth.com.<br/><br/>

                          <p className="font-bold text-xl text-white">1.	Appointment</p> <br/>


            This Agreement will become legally binding and we will start providing our services to you once we have received confirmation of your completed Account and satisfactory anti-money laundering verification information. This Agreement supersedes all previous terms and conditions you have with us. In addition to this Agreement, which includes the Schedules, the terms of Nuqi’s Privacy Policy and the product specific terms apply to you. The privacy policy, and all other agreements entered into separately between you and Nuqi are deemed supplementary terms that are an integral part of these terms and shall have the same legal effect. Your use of Nuqi services is deemed your acceptance of these and the above supplementary terms.<br/><br/>
            1.1.	You represent and warrant to us that you are:<br/>
            a)	duly authorized to enter into this Agreement; and<br/>
            b)	over the age of 18; and<br/>
            c)	the sole owner of the funds invested into the Account and are the only person entitled to the funds     and/or assets held in your Account. (except for joint Accounts where the funds and/or assets are held and entitled to jointly); and<br/>
            d)	you are eligible to enter a legally binding agreement with us in accordance with the laws governing    the jurisdiction applicable to you; and
            e)	you will only access and use our Services for your own personal benefit; and<br/>
            f)	neither the entry into this Agreement, or use of the Services, or the giving of any other instruction will violate any law, rule, or regulation applicable to you; and<br/>
            g)	all money that you use and invest through the Services do not originate in any way from drug trafficking, abduction, terrorist activity or any other criminal activity that is unlawful or could be considered unlawful by any relevant authority; and<br/>
            h)	you have not and will not upload or transmit any malicious code to the Nuqi platform or otherwise use any electronic device, software, algorithm, and / or dealing method or strategy that aims to manipulate any aspect of the Nuqi platform or the Services; and<br/>
            i)	you will use the Services offered by us pursuant to this Agreement honestly, fairly and in good faith. You will promptly notify us if any of these representations and warranties ceases to be true.<br/><br/>

            1.2.	If you breach any warranty or representation made under this Agreement, we may close or freeze your Account. <br/><br/>

            1.3.	It is important that you read and ensure you understand the Risk Warnings notified to you. A non-exhaustive list of possible risks that might be encountered by you is made available in Schedule 1 of this Agreement. By using our services and creating a Account, you are considered informed of the Risk Warnings and expressly consent to use our services notwithstanding the possible risks detailed in Schedule 1.<br/><br/>

            1.4.	You acknowledge that an investment carries with it the risk of loss to your capital invested. Furthermore, Nuqi gives no assurance or guarantees that the value of investments in your Account will not go down or that the investment held in your Account will generate either profits or income, or that any investment or savings goals you may have (even where you notified us of them) will be achieved.<br/><br/>

            1.5.	Nuqi does not provide you with any taxation, administration, legal or accounting services or advice.<br/><br/>

                        <p className="font-bold text-xl text-white">2.	Our standard of care  </p>


            Nuqi shall provide the services under this Agreement in accordance with the degree of care, diligence and skill a reasonably prudent financial adviser/firm would exercise in the circumstances. <br/><br/>
                          <p className="font-bold text-xl text-white">3.	Client categorization</p>


            Nuqi will classify you and treat you as Retail Client for the purpose of the DFSA Rules. This means that you are entitled to the protections available to Retail Clients under the DFSA Rules.<br/><br/>
                          <p className="font-bold text-xl text-white">4.	Instructions to Nuqi</p> 


            4.1.	Nuqi will act on your instructions to undertake (on your behalf) such actions as may reasonably be required for Nuqi to pass orders on your behalf.<br/>

            4.2.	You will execute and deliver any authorizations and documents as may be reasonably necessary for Nuqi to carry out its services under this Agreement.<br/><br/>

                          <p className="font-bold text-xl text-white">5.	Your obligations</p><br/>


            5.1.	It is your responsibility to ensure that information or documentation provided by you to Nuqi is correct, accurate, complete, up- to-date and not misleading in any respect and that you have notified Nuqi of any information which could be relevant to the performance of Nuqi’s duties under this Agreement. You will indemnify us and hold us harmless from any liability arising out of any failure by you to provide us with any information or documents that we request, as well as for any error, omission, inadequacy or inaccuracy in any information and/or documents that you provide to us.<br/>

            5.2.	You acknowledge that Nuqi (without verification, further inquiry or investigation) will be relying on the information or documents provided by you to Nuqi. You will promptly advise Nuqi of any material change in your financial circumstances. Until such time that Nuqi is advised of these changes, you acknowledge that Nuqi shall rely on the existing information.<br/>

            5.3.	You will be responsible for all tax returns, filings and reports on any transactions undertaken pursuant to this Agreement and for the payment of all unpaid capital calls, taxes or other liability arising out of, or in connection with, the investments held in your Account.<br/>

            5.4.	You will provide Nuqi with any documents and information that it may require to comply with the requirements of relevant Anti- Money Laundering (“AML”) laws as well as for anti-fraud measures or any other related internal procedures) or clarifications to information and/or documents which you have provided to us. In the event that new AML regulations are enacted or that Nuqi changes its internal procedures, you may be asked to supply additional information and/or documentation. Failure to provide such documentation may lead to Nuqi suspending and/or terminating your Account until such time as you provide the requested information and/or documents.<br/>


            5.5.	We reserve the right to request additional information and/or documentation in order to be satisfied that your dealings with us, including, but not limited to deposits and withdrawals are legitimate and/or for any other reason to comply with our regulatory obligations. You understand and accept that under such circumstances there may be a delay with processing the transaction, and/or the transaction may be rejected.<br/><br/>

                          <p className="font-bold text-xl text-white">6.	Instructions and communication</p> <br/>


            6.1.	Instructions may be given through electronic communication, including but not limited to email or via your Account, or by scheduling a call via your Nuqi dashboard. All written communications should be directed to Nuqi’s registered office at the address set out at the head of this Agreement and on our website. Complaints should be notified to Nuqi in accordance with the complaints policy as stated below. <br/>

            6.2.	Nuqi shall be entitled to act on any instructions reasonably believed to be from you or an authorized representative of you. It is your responsibility to keep the security details applicable to your Account safe and not share them with any other person. Where you have any reason to suspect that your security details have or might be compromised, you must contact us immediately.<br/>
            6.3.	You acknowledge that: <br/> a) Nuqi may not accept instructions until it is able to satisfy itself that the instructions originated from you or an authorized representative of you; <br/> b) Nuqi will not be responsible for any losses or loss of opportunity due to any delays arising from Nuqi confirming the validity of instructions or the accuracy of instructions where they are in Nuqi’s reasonable opinion, unclear.<br/><br/>

            6.4.	Nuqi, in its sole discretion, may refuse to act on an instruction given by you or an authorized representative of you, where:<br/>
            a)	it has reason to doubt the validity of the instruction;<br/>
            b)	the instruction is not capable of being carried out on the Nuqi platform;<br/>

            6.5.	Nuqi will not be obliged to deal with any person to whom you may have disposed or otherwise assigned or transferred to or encumbered any funds, assets or other entitlements held in or under your Account.<br/>

            6.6.	Transaction statements, valuation reports and other summary reports on the Accounts and reports or investment commentary as Nuqi may choose to provide, will be provided electronically to you by email to the address provided by you or via your dashboard. You may request that Nuqi send you a paper copy of any documents delivered electronically. Nuqi may charge a reasonable fee for this service.<br/>

            6.7.	All communications between you and Nuqi must be in English. By entering into this Agreement, you confirm that you can read and understand the English language. If you are in doubt as to the meaning of any clause in any document that we provide to you, please seek independent advice.<br/><br/>



                        <p className="font-bold text-xl text-white"> 7.	Delegation and use of third parties </p> <br/>


            7.1.	Nuqi may appoint any affiliate or person, delegate or agent of a third party to perform part or all of any of Nuqi’s obligations under this Agreement, provided that in doing so Nuqi’s responsibility to you for these obligations shall not be reduced. <br/>

            7.2.	In performing its obligations to you, Nuqi may appoint or use the services of certain third-party service providers, including a) price, market or valuation information or assessment services and <br/>b) broking, dealing or registrar services. Nuqi shall not be responsible or liable to you for the performance by these parties or their services provided Nuqi has exercised reasonable care and diligence in their selection of the same.<br/><br/>


                         <p className="font-bold text-xl text-white">8.	Potential conflicts of interest and disclosures </p> <br/>


            8.1.	Nuqi and its affiliates (together, the “Group”) provide a number of services to a range of clients and there may be times when there is a conflict between the Group’s interest and the duty owed to a client, or a conflict between the differing interests of two or more clients to whom in each case the Group owes a duty. Nuqi and any affiliate may affect transactions in which Nuqi, any affiliate, another client of Nuqi or of an affiliate has, directly or indirectly, a material interest or a relationship of any description with another party, which involves or may involve a potential conflict with Nuqi’s duty to you. <br/>

            8.2.	Nuqi is required to have in place arrangements with a view to taking all reasonable steps to prevent such conflicts of interest constituting or giving rise to a material risk of damage to the interests of its clients. Nuqi will ensure that such transactions are affected on terms which are not materially less favourable to you than if the conflict or potential conflict of interest had not existed. Nuqi has a Conflicts of Interest Policy that sets out the types of actual or potential conflict of interest which affect our business and includes details of how these are managed. Nuqi’s regulatory obligations in respect of conflicts of interest is set out in Schedule 2. <br/><br/>

                      <p className="font-bold text-xl text-white">  9.	Fees and Charges </p><br/>


            9.1.	Fees payable for the services provided to you by Nuqi are exclusive of any VAT or other similar taxes, which if payable will be payable by you. <br/>

            9.2.	Any sums due to Nuqi or to any other person authorized in respect of fees or otherwise pursuant to these investment terms (including any applicable VAT) may be withdrawn from the Account and you authorize the Custodian/intermediary to make payment of fees to Nuqi. Further, we may deduct your Account with the full amount of any fees payable by you, or any other monies owed by you to us pursuant to any liability of any nature arising in respect of the Account or otherwise. For this purpose, we may withdraw and collect uninvested cash in your Account and/or sell your assets and collect the proceeds from sale for such purpose.<br/>

            9.3.	Nuqi may amend its fees in its sole discretion and provide you 7 days prior notice of the changes, unless it is impractical to do so as determined by Nuqi.<br/> <br/>

                         <p className="font-bold text-xl text-white">10.	Referrals</p>


            You may have been introduced to us by a third party. We do not accept responsibility for any conduct, action, representation or statement of such third party. We may share our fees with or provide such other benefit as we may deem appropriate to such third party or any other third party. <br/><br/>

                         <p className="font-bold text-xl text-white">11.	Taxation</p><br/>


            11.1.	You remain responsible for the management of your affairs for tax and accounting purposes. Nuqi shall not provide you with tax or accounting advice or services. Nuqi shall have no responsibility to consider your tax status in providing the services under this Agreement.<br/>

            11.2.	You will promptly provide to Nuqi all information or documents that are requested by any tax authority of Nuqi in respect of you. <br/><br/>  




                        <p className="font-bold text-xl text-white">12.	Hardware and Software Requirements </p> <br/><br/>


            12.1.	You understand that in order to receive electronic deliveries, you must have access to a computer or Mobile Device with Internet access, a valid e-mail address, and the ability to download such applications as Nuqi may specify and to which you have access. You also understand
            that if you wish to download, print, or save any information you wish to retain, you must have access to a printer or other device in order to do so. <br/><br/>

              <p className="font-bold text-xl text-white"> 13.	Liability</p> <br/>


            13.1.	Nuqi gives no assurance or guarantee that the value of investments in your Account will not go down or that the investment held in your Account will generate profits or income, or that any investment or savings goals you may have (even where you have notified us of them) will be achieved. <br/>

            13.2.	Nuqi shall not be liable for any error of judgement or any other loss suffered by you in connection with the services it provides to you under this Agreement (and in particular, but without limitation, Nuqi shall not be liable for any loss which may be sustained in the purchase, holding or sale of any investments in accordance with those services) unless such loss arises from negligence, willful default, dishonesty or fraud by it or any of its employees. Nuqi shall not be liable for any other losses suffered by you (which shall include loss of profits, income or capital, costs, expenses, claims or damages) including losses arising from:<br/>

            a)	Negligence, willful default, fraud or insolvency of any other person;
            b)	Nuqi carrying out or relying on instructions or on any information provided or made available to Nuqi by you, the Custodian, any appointed representative or agent of yours or any person duly appointed by Nuqi;
            c)	Market conditions or changes in market conditions; or
            d)	Any delayed receipt, non-receipt, loss or corruption of any information contained in email or for any breach of confidentiality resulting from email communication or any consequential loss arising from either of the foregoing.


            13.3.	Nuqi shall not be liable for any consequential, special, indirect or speculative loss or damage, or loss of profits, loss of opportunity, goodwill or reputation suffered by you or any other person.

            13.4.	In particular, but without limitation, Nuqi shall not be liable for any default of any counterparty, bank, subcustodian, or any other entity which holds money, investments or other documents of title on behalf of you or with or through whom transactions are conducted for you. Nuqi shall not be liable to you for any losses incurred by you as a result of the acts or omissions of the Custodian, save to the extent such losses are caused by Nuqi’s negligence, willful default or dishonesty in complying with 7.1.

            13.5.	The Website and/or your Nuqi dashboard are provided “AS IS” on an “IS AVAILABLE” basis without any representations or any kind of warranties whatsoever (whether expressed or implied by law). We and our licensors disclaim to the fullest extent permitted by law all express, implied and statutory warranties, including without limitation, the warranties as to functionality, operability, accessibility, accuracy, correctness, reliability, updatedness, timeliness, satisfactory quality, merchantability, fitness for a particular purpose, and non-infringement of proprietary rights. Without limiting the foregoing, we do not warrant that our services, functions contained in or access to the Website and/or your Nuqi dashboard or other content will be timely, uninterrupted or error-free without omission, that defects will be corrected, or that the Website and/or your Nuqi dashboard or their contents are free of infection by computer viruses and/or other harmful or corrupting code, programme, macro and such other unauthorized software, or that the download, installation or use of any systems or content of the Website and/or your Nuqi dashboard in or with any computer will not affect the functionality or performance of the computer. We are not responsible or liable for the deletion or failure to store any content maintained or posted by or through the Website and/or your Nuqi dashboard.

            13.6.	Third party sites. The Website and/or your Nuqi dashboard may contain links to other websites which are not maintained by us. Similarly, other websites may contain links to the Website and/or your Nuqi dashboard. We have no control over such sites and resources, and you acknowledge and agree that we are not responsible for the availability or contents of those websites and shall not be liable for any damages or injury arising from the availability or contents of those websites. Any links to other websites are provided as a convenience to you as a user of the Website and/or your Nuqi dashboard, and does not imply our endorsement of the linked website or association with their operators. We disclaim all responsibility and liability, direct or indirect, for any damage or losses (including any virus, spyware, malware, worms, errors or damaging materials contained in the linked sites) caused or alleged to be caused by or in connection with the use or reliance on any such content available on or through any such site or resource, which are accessed and used at your own risks.

            13.7.	To the maximum extent permitted by applicable law, in no event will Nuqi, its affiliates and their respective shareholders, members, directors, officers, employees, attorneys, agents, representatives, suppliers or contractors be liable for any incidental, indirect, special, punitive, consequential or similar damages or liabilities whatsoever (including, without limitation, damages for loss of data, information, revenue, profits or other businesses or financial benefits) arising out of Nuqi services, any performance or non-performance of Nuqi services, or any other product, service or other item provided by or on behalf of Nuqi and its affiliates, whether under contract, statute, strict liability or other theory even if Nuqi has been advised of the possibility of such damages except to the extent of a final judicial determination that such damages were a result of Nuqi’s gross negligence, fraud, wilful misconduct or intentional violation of law.

            13.8.	Notwithstanding the foregoing, in no event will the total liability of Nuqi, its affiliates and their respective shareholders, members, directors, officers, employees, attorneys, agents, representatives, suppliers or contractors arising out of services offered by or on behalf of Nuqi and its affiliates, any performance or non-performance of Nuqi services, or any other product, service or other item, whether under contract, statute, strict liability or other theory, exceed the amount of the fees paid by you to Nuqi under these terms in the twelve-month period immediately preceding the event giving rise to the claim for liability. In any case, Nuqi’s aggregate liability out of or related to this Agreement shall not exceed $500.00.

            13.9.	Nuqi and its respective affiliates may use automated systems or service bureaus in conjunction with your Account, including automated order entry and execution, record keeping, reporting and account reconciliation and risk management systems (collectively "Automated Systems"). You understand that the use of Automated Systems entails risks, such as interruption or delays of service, errors or omissions in the information provided, system failure, and errors in the design or functioning of such Automated Systems (collectively, a "System Failure") that could cause substantial damage, expense, or liability to you. You understand and agree that Indemnified Parties will not be responsible for any of your Losses arising out of or relating to a System Failure.

            13.10.	Nothing in this Agreement shall exclude or restrict any liability which cannot be excluded in accordance with applicable law.

            14.	Complaints              <p className="font-bold text-xl text-white"></p>


            14.1.	Should you have a complaint, kindly submit your complaint in writing to: grivances@nuqiwealth.me
            14.2.	We have procedures for handling your complaints fairly and promptly. Your complaint will be sent to the SEO (Senior Executive Officer) and the Compliance Officer and every reasonable endeavour will be made to resolve your complaint immediately.

            14.3.	If your complaint cannot be resolved within 24 hours, the SEO or the Compliance Officer will acknowledge receipt of the complaint in writing as soon as possible and at the very most within 7 days of receipt.

            14.4.	If we cannot provide you with a final response within 30 days, we will write to you explaining the reasons and include an estimate of when you can expect to receive a response.

            14.5.	Should we consider that another regulated financial institution is entirely or partly responsible for the matter complained of, we may refer your complaint to that institution. In this instance, we will firstly inform you that another financial institution is entirely or partly to blame and will obtain your consent in writing to refer the complaint to the relevant institution.

            14.6.	We will continue to handle any part of the complaint that is not referred.

            14.7.	We will try to resolve your complaint as quickly as possible and to your complete satisfaction. If we are unable to satisfactorily address your complaint, you may be able to refer your complaint to the DFSA for independent assessment. Should you wish to contact them you can do so in writing at: You may submit a complaint by completing the online Complaints Form available on the DFSA Complaints Portal on the DFSA website at: http://www.dfsa.ae/Pages/Complaints/Complaints.aspx  If you do not have access to a computer then you may submit a written complaint to the DFSA via facsimile to +971 4 362 0801 or by letter addressed to the DFSA attaching relevant documents and information. Complaints should be addressed to: DFSA Complaints PO Box 75850 Dubai.

            15.	Termination & Account Suspension              <p className="font-bold text-xl text-white"></p>


            15.1.	You may close your Account (and so terminate this Agreement) and redeem your invested funds at any time by instructing us to do so through the functions on the Nuqi mobile App.

            15.2.	Nuqi may terminate this Agreement and close your Account on 30 days’ notice, unless it is impractical to do so as determined by Nuqi.

            15.3.	This Agreement may be terminated immediately on written notice by either of us, which may be communicated by electronic mail, if the other commits a material breach of this Agreement and if capable of remedy shall not have remedied the same within 30 days after service of notice requiring it to be remedied.

            15.4.	Nuqi may suspend access to your Account without notice to you if:
            a)	we have reason to suspect any fraudulent behaviour from you or any person using your account. Any fraud, misrepresentation, omission, or concealment in the information and/or actions made by you in obtaining the Account or requesting services may render you ineligible to receive services from Nuqi, at Nuqi’s sole discretion. Nuqi will forfeit any services and be entitled to reimbursement, including attorney’s fees, for any services provided based on such statements and/or actions.
            b)	the Account’s security has been breached;
            c)	we have reason to suspect that the Account is being used in a way that is contrary to financial services and markets regulations, for market abuse, or for the furtherance of a financial crime including money laundering;
            d)	you fail to provide us with information that in our reasonable opinion we need to satisfy our obligations under rules and regulations, whether relating to the prevention of financial crime or otherwise;
            e)	we have reason to suspect that the Account is being used in a way that is contrary to sanctions related rules or regulations;
            f)	we have reason to believe that you are unlawfully taking advantage of any Nuqi event, temporary promotion, marketing campaign or manipulating or attempting to manipulate the platform to your own benefit in a way that contradicts the purpose for which they were established;
            g)	You exhibit any inappropriate behaviour to any member of the Nuqi staff; or
            h)	You are a resident of a sanctioned country or are sanctioned according to any international regulatory bodies or financial intelligence and enforcement agencies.

            15.5.	To the extent that we are permitted to do so by law and regulation, we will contact you on the suspension of your Account promptly and seek to satisfactorily resolve the issue and will remove the suspension when we do so resolve the issue. We may be prohibited by law from contacting you or discussing details with you.

            16.	Cancellation              <p className="font-bold text-xl text-white"></p>


            You have a period of 60 days, beginning on the date on which your Account is opened or the date on which you receive a copy of these General Terms and Conditions and other related documents, whichever is the latest, within which to cancel your Account. Upon your instruction, Nuqi will arrange to sell any investments made on your behalf but will not be responsible for any market loss that you may incur as a result.
            17.	Consequences of Termination              <p className="font-bold text-xl text-white"></p>


            17.1.	All outstanding transactions at the time of Account closure will be settled and the investments in your Account sold, with the funds and proceeds in your Account remitted to your designated current account.

            17.2.	Any termination shall be without prejudice to the rights and liabilities of either party in respect of transactions already initiated or to services already provided.



            18.	Inurement and Estate             <p className="font-bold text-xl text-white"></p>


            In the event of your death, disability or physical or mental incompetence, there will be no automatic termination or change to this Agreement. Your respective successors, executor, administrators, or guardians or controllers acting on your behalf, should contact us to determine the appropriate procedure for the ongoing administration or as appropriate closure of your Account.
            19.	Confidentiality              <p className="font-bold text-xl text-white"></p>


            19.1.	Both Nuqi and you will at all times keep confidential information acquired in consequence of this Agreement, except for information which they are bound to disclose under compulsion of law, or by request of regulatory agencies or to their professional advisers.

            19.2.	Nuqi is not obliged either to disclose to you, or, in taking any action in connection with the arrangement of the Account, to take into consideration information: a) where the disclosure of it to you would be a breach of duty or confidence to any other relevant person; or
            b) which comes to the notice of an employee, officer or agent of Nuqi but does not come to the actual notice of the individual managing the Account or taking the relevant action.

            Waiver of Interest: We and you hereby recognise and agree that the principle of payment of interest is not recognised under Shariah and any provisions for payment of interest will not be binding or enforceable between us, and accordingly, to the extent that any court would impose, whether by contract or by statute any obligation to pay interest, the parties hereby irrevocably and unconditionally expressly waive and reject any entitlement to recover interest from each other.

            20.	Data Protection              <p className="font-bold text-xl text-white"></p>


            20.1.	Nuqi may collect, use and store the personal information which you provide from time to time including Personal Data and Sensitive Personal Data within the meaning given to the terms in the DIFC Data Protection Regulations 2015 (as amended) (“Personal Data”). Personal Data may include information provided for the purpose of compliance with AML regulations and information deriving from transactions that Nuqi carries out on your behalf.

            20.2.	You consent to us using and holding your Personal Data in accordance with our Privacy Policy.

            20.3.	In particular, Nuqi may use the Personal Data that it collects: a) to process and implement the Plan and open your Account and enable related trading arrangements; b) to supply the services; c) to meet Nuqi’s obligations under DFSA Rules and other applicable law; d) for client service, analysis and market research purposes; e) to undertake credit and reference checks and/or to recover a debt or for the purposes of legal proceedings; and/or f) for general account administration purposes.

            20.4.	You agree that Nuqi may share your Personal Data in the following circumstances: a) where Nuqi uses your Personal Data to assess your eligibility for the services and to verify your identity; b) Nuqi may share Personal Data with its affiliates and with third parties who may administer and operate the Account from time to time. Nuqi will always take appropriate measures and meet its legal obligations to ensure that any Personal Data transferred to such third parties is kept securely; c) on an assignment of the obligation and rights under this Agreement, or if Nuqi restructures its business or the whole or any part of its business is sold then Nuqi may transfer your information to the relevant third party provided this is in line with statutory data protection requirements; and d) Nuqi may share your Personal Data with UAE and overseas law enforcement agencies or regulatory authorities and other relevant bodies for crime prevention purposes.

            20.5.	Nuqi will retain copy records for a period stipulated by us in accordance with DFSA Rules and other applicable law from the date of termination of your Agreement. Nuqi may scan and retain all hard copy documentation including Personal Data within our data storage system indefinitely. Retained data may be archived off-site and may usually be retrieved within three working days. Nuqi may seek to recover reasonable expenses for retrieval of any data after the termination date.




            21.	Recording             <p className="font-bold text-xl text-white"></p>


            You authorise us and any of our affiliates to record any telephone conversation or any electronic communication, activities, and transactions conducted between you and us or our personnel, to retain such recordings and use them in such manner as we consider appropriate. The recordings shall be admissible in evidence in legal proceedings and shall have the same probative value as a written original document. You shall not challenge or dispute the admissibility, reliability, accuracy or the authenticity of the contents of such records and you hereby waive any right (if any) to so challenge or dispute. You agree that the recordings made by us shall be conclusive evidence of the contents and shall be binding on you. These records will be our sole property.
            22.	Force Majeure              <p className="font-bold text-xl text-white"></p>


            In the event of any failure or delay in performance of Nuqi’s obligations under this Agreement resulting from acts or circumstances not reasonably within Nuqi’s control, including, but not limited to acts or regulations of any governmental bodies or authorities or securities exchanges, a custodian refusing to act on Nuqi’s instructions or the breakdown, failure or malfunction of any telecommunications or computer service, except for Nuqi’s own systems. Nuqi shall have no liability for any loss or change in the value of the assets in the Account or any opportunity lost incurred as a result of above failure or delay.
            23.	Power of Attorney              <p className="font-bold text-xl text-white"></p>


            You authorize us to be your attorney (with full rights of substitution) with full authority to be your true and lawful attorney and to in your name do on your behalf all things you could have done for the purposes of: (a) carrying out any transactions for your Account or any of your instructions; (b) discharging any of our obligations to you under the Agreement; and/or (c) doing anything which in our opinion is necessary or desirable to preserve our rights under the Agreement. You undertake to ratify and confirm, and hereby ratify and confirm, all that we may do pursuant to this power of attorney

            24.	Amendments and Assignments              <p className="font-bold text-xl text-white"></p>


            24.1.	Nuqi may amend this Agreement on 30 days’ written notice of the changes to you, – unless such delay is impractical, as determined by Nuqi, in which case we will tell you an effective date. If you do not close your Account prior to the date on which you are notified that the changes will come into effect, you will be deemed to have agreed to the changes and they shall apply to your Account therefrom.

            24.2.	This Agreement shall not be assignable by you without the express written consent of Nuqi.

            24.3.	Nuqi may on 30 day’s prior notice (which may be via email to the email address provided to Nuqi by you or through our website or App ), assign, novate and/or transfer its rights and/or obligations under this Agreement to a third party selected by Nuqi, including by way of merger, consolidation or the acquisition of all or substantially all of Nuqi’s business and assets relating to this Agreement, provided that;
            (i) doing so shall not adversely affect your rights or obligations under this Agreement; and (ii) the assignee is to Nuqi’s reasonable satisfaction able to provide an equivalent level of service and regulatory and commercial assurance.

            25.	Entirety of Agreement              <p className="font-bold text-xl text-white"></p>


            25.1.	This Agreement, any attachments hereto, other agreements and policies referred to in this Agreement (including the Product agreements and Risk Disclosures), and the terms and conditions contained in your Account statements and confirmations, contain the entire agreement between Nuqi and you and supersede all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between Nuqi and you, provided, however, that any and all other agreements between Nuqi and you, not inconsistent with this Agreement, will remain in full force and effect.




            26.	Language and translations              <p className="font-bold text-xl text-white"></p>


            26.1.	These Terms may, at Nuqi’s sole and absolute discretion, be translated into a language other than the English language. You agree that any such translation shall only be for your convenience and the English text shall prevail in the event of any ambiguity, discrepancy or omission as between the English text and any translated text.

            27.	General              <p className="font-bold text-xl text-white"></p>


            27.1.	No failure on the part of any party to exercise, and no delay in exercising, any right or remedy under this Agreement will operate as a waiver thereof nor will any single or partial exercise of any right or remedy preclude any other or further exercise thereof or the exercise of any other right or remedy. The rights and remedies provided in this Agreement are cumulative and not exclusive of any rights or remedies provided by law.

            27.2.	In the event any provision of this Agreement is adjudicated to be void, illegal, invalid, or unenforceable, the remaining terms and provisions of this Agreement shall not be affected, and each of such remaining terms and provisions shall be valid and enforceable to the fullest extent permitted by law.

            27.3.	A person who is not a party to this Agreement has no rights to enforce any term.

            27.4.	You and Nuqi agree that neither party will have any remedy in respect of any statement, representation, assurance or warranty (whether made innocently or negligently) that is not set out in this Agreement. Each party agrees that it shall have no claim for innocent or negligent misrepresentation or negligent misstatement based on any statement in this Agreement.

            28.	Governing Law              <p className="font-bold text-xl text-white"></p>


            28.1.	The provision of services to you under this Agreement will be governed by and construed in accordance with the laws of England. The exclusive place of jurisdiction for any disputes arising out of and/or in connection with this Agreement will be the courts of the DIFC.

            28.2.	However, we reserve the right to take legal action against you before the courts of the country in which you are resident or before any other competent authority.


            SCHEDULE 1              <p className="font-bold text-xl text-white"></p>


            Risk Warnings

            The following is a summary of some of the risks of investing. Please note that this list is not exhaustive and has been provided as an indication of the factors that can affect the value of your investments.

            You are voluntarily using our services at your own risk. You are aware of the possible risks associated with the use of our platform which may include but are not limited to the risks detailed below.
            Despite all known and unknown risks, you hereby expressly and voluntarily remise, release, acquit, satisfy and discharge us and agree to hold us harmless of and from all, and all manner of action and actions or omissions, cause and cause of action, suits, debts, dues, sums of money, accounts, bonds, sukuk, bills, damages, judgements, executions, claims and demands, including but not limited to, any and all claims which allege negligent acts and/or omissions committed by us, whether the action arises out of any damage or loss of capital invested while availing of any of the services provided by Nuqi platform or as a result of us executing your approved Plan/instructions:
            1.	General:             <p className="font-bold text-xl text-white"></p>


            All investment is subject to risk and the degree of risk is a matter of judgement and cannot be accurately pre-determined. The value of your investments can go down as well as up and positive returns of both capital and income are not guaranteed. Past performance is not a reliable guide to future performance. Nuqi gives no assurance or guarantees that the value of investments in your Account will not go down or that the investment held in your Account will generate either profits or income, or that any investment or savings goals you may have (even where you notified us of them) will be achieved. Nuqi does not guarantee any returns or positive results.

            2.	Equity Risk:             <p className="font-bold text-xl text-white"></p>


            Investors in equity securities may be exposed to a high level of risk because the prices of equity securities can rise and fall significantly in a short period of time. This could arise due to the fortunes of the companies that issue them or with general stock market or economic conditions.
            3.	Fund Risk:             <p className="font-bold text-xl text-white"></p>


            Funds are securities that closely resemble index funds, but can be bought and sold like common stocks:

            a)	a fund may fail to accurately track the market segment or index that underlies its investment objective, for example because the portfolio is not rebalanced often enough to keep up with changes in the index (possibly due to costs associated with trading), or because the fund may use sampling methodology rather than replicating the entire portfolio of the index;
            b)	the value of the fund is exposed to the volatility of the market which the fund tracks. In unfavourable market conditions (e.g. market correction or economic crisis) where the general level of stock, bond, or commodity prices decline, the value of funds will decline accordingly;
            c)	a fund may not be “actively” managed. Such funds would not necessarily sell a security because the security’s issuer was in financial trouble, unless the security is removed from the applicable index being replicated. Nor will the fund increase exposure to positions that it anticipates increasing in value. As a result, the performance of a fund may be lower than the performance of an actively managed fund;
            d)	some funds employ leverage, which can magnify the risk of the underlying market segment or index;
            e)	if the fund does not physically hold the assets but replicates the performance of the index using alternative Shariah compliant investments, there is a risk that the counterparty could default which could result in a loss to the value of the fund;
            f)	the market price of a fund’s units may trade at a discount to its net asset value;
            g)	an active trading market for a fund’s units may not develop or be maintained; and
            h)	there is no assurance that the requirements of the exchange necessary to maintain the listing of a fund will continue to be met or remain unchanged.
            4.	Credit Risk:             <p className="font-bold text-xl text-white"></p>


            A fixed income security, like a sukuk, is essentially a promise to pay profit/rent and pay a specified amount at a later time. The probability that the issuer of the fixed income security will fail to honour that promise is called credit risk. Credit rating agencies give investors an idea of how much of a credit risk an issuer represents. If a company or government has a high credit rating, the credit risk tends to be low. A lower credit rating means more credit risk.

            5.	Interest/Profit Rate Risk:             <p className="font-bold text-xl text-white"></p>


            A change in general interest/profit rates is one of the biggest factors affecting fixed-income securities. A sukuk for example, pays profit based on the level of interest/profit rates prevailing when the sukuk is issued. Generally, if interest rates fall, the value of the sukuk rises. This is because the interest/profit rate on the existing sukuk will be higher than the rate on newer sukuks. On the other hand, when general interest/profit rates rise, the price of existing sukuk is expected to drop because they pay less than newer sukuks.
            6.	Inflation Risk:             <p className="font-bold text-xl text-white"></p>


            This is the risk of decline in the purchasing power of your savings due to a general rise in prices.
            7.	Foreign Currency Risk:             <p className="font-bold text-xl text-white"></p>


            Investing in securities that are priced in foreign currencies involves foreign currency risk.

            a)	Securities that are priced in foreign currencies can lose value when the US dollar rises against the foreign currency. As well, foreign governments may impose currency exchange restrictions, which could limit the ability to buy and sell certain foreign investments and could reduce the value of the foreign securities that are held by investors.
            b)	Intermediary banks may impose fees on transactions in foreign currency including transactions in USD. Any amount paid by Nuqi in this respect will be deducted from your account.

            8.	Foreign Market Risk:             <p className="font-bold text-xl text-white"></p>


            Foreign investments involve additional risks because foreign financial markets (e.g. outside of the United States of America or United Kingdom) may be less liquid and companies may be less regulated and have lower standards of accounting and financial reporting. In some countries, an established stock market and legal system that adequately protects the rights of investors may be lacking. Foreign investments can also be affected by social, political, or economic instability. Foreign governments may impose investment restrictions.

            9.	Liquidity Risk:             <p className="font-bold text-xl text-white"></p>


            Liquidity refers to the speed and ease with which an asset can be sold and converted into cash.

            a)	Most securities can be sold easily and at a fair price. In highly volatile markets, certain securities may become less liquid, which means they cannot be sold as quickly or easily. Some securities may be illiquid because of legal restrictions, the nature of the investment, or certain other features such as guarantees, or a lack of buyers interested in the particular security or market. Difficulty in selling securities may result in a loss or reduced return for a client.
            b)	Limit orders set by Clients can sometimes remain unfilled or be partially filled despite the asset reaching the target price due to low liquidity of the asset. Nuqi does not control the market and is not liable in the event of lack of demand on the market for that specific asset.
            10.	Price Volatility:              <p className="font-bold text-xl text-white"></p>


            Price volatility is used to describe price fluctuations of an asset.

            a)	You acknowledge that the price of any asset can and does fluctuate, and that any individual asset may experience downward movements and may under some circumstances even become valueless. You appreciate therefore that there is an inherent risk that, as a result of buying and selling assets, losses may be incurred rather than profit made. This is a risk you are prepared to accept.
            b)	Unless otherwise indicated or agreed upon any prices shown on our platform are indicative at the time shown based on data that is subject to constant change. The execution price is that which is confirmed to you after your order is executed, although this price may in certain cases differ from the price appearing on the screen at the time the transaction was placed.
            c)	You acknowledge that any quotations published by us may deviate from the price of the underlying asset/instrument when the transaction goes through. In the event this price difference leads to a negative balance in your Account, then you would need to satisfy any deficiency or debt incurred within three (3) business days.
            d)	Any order made after the markets are closed will be filled on the next business day once the markets reopen. You acknowledge that the purchase or sell price of the asset as seen before the market close is not guaranteed to be the same once the market reopens. Note that our brokers endeavour to give you the best available bid/offer price on the market.
            11.	System Errors:              <p className="font-bold text-xl text-white"></p>


            System errors may result from the temporary malfunction of Nuqi’s system or that of the third-party intermediaries (“Intermediaries”, “Intermediary”) it collaborates with. Nuqi will endeavour to make the software and any other systems accessible when you need them, but we cannot always guarantee uninterrupted accessibility to them for various reasons including those listed below.
            a)	Failures and/or errors, including those of a technological nature which may affect the access to and the use of the software, and go beyond our reasonable control.
            b)	Service interruptions brought on by upkeep, maintenance, repairs, updates, developments, and other issues beyond our control. We will exercise reasonable efforts to conduct these activities outside regular business hours. If this proves to be difficult, we will try to inform you in advance.
            c)	Nuqi shall not be liable for your loss of earning and/or profits and/or losses caused by the interruptions or delays in the transmission of data due to reasons beyond our control and liability. In particular, you may not make a claim against us that due to a fault in the functioning of technical infrastructure you could not place the transaction order, submit the instruction, or obtain information regarding your Accounts.
            d)	Neither we nor any Intermediary or third-party software provider accept any liability in respect of any delays, inaccuracies, errors, or omissions in any data provided to you via our platform or any transactions completed pursuant to such data.
            e)	We shall not be liable for any claims, losses, damage, costs or expenses, caused directly or indirectly, by any breakdown or failure of any transmission or communication system or computer facility belonging to us (including, but not limited to transmission errors, technical faults, malfunctions, illegal intervention in network equipment, network overloads, malicious blocking of access by third parties, internet malfunctions, interruptions or other deficiencies on the part of internet service providers), nor for any loss, expense, cost or liability suffered or incurred by you as a result of instructions being given, or any other communications being made, via the internet. You acknowledge that access to our platform may be limited or unavailable due to such system errors, and that we reserve the right upon notice to suspend access to our trading platform for this reason.
            12.	Banks and payments:              <p className="font-bold text-xl text-white"></p>

            Please note that at Nuqi Digital Wealth Limited:
            1. We are not permitted under the DFSA Rules to receive or hold any funds on your behalf. You acknowledge and agree that any funds relating to your Transactions will be held with the Regulated Third Party Provider.
            2. Where you transfer your funds to a Regulated Third Party Provider, you acknowledge and agree that your funds will be held with a bank that is not approved under the Client Money rules of the DFSA and that your funds may therefore not be protected as effectively as had it been held in a client bank account in the DIFC.
            3. You acknowledge and agree that you are solely responsible for reading and accepting the terms and conditions of the Regulated Third Party Provider before sending your funds to the Regulated Third Party Provider.
            4. You can initiate a payment using a debit card through our platform and or bank transfer, after which the funds will be deposited into your account with the Regulated Third Party Provider. You acknowledge that Nuqi Digital Wealth Limited will incur card processing fees and charges and other administrative costs in providing you with the convenience of making a deposit using your debit card and agree that we shall be entitled to apply an additional fee on top of the amount funded using your debit card, which shall be added to the total value of the card transaction to be authorized. Prior to making a payment using a debit card, you will be presented with the total amount of such fee that will be added to the value of the card transaction and be required to consent to this fee. The same goes to Bank transfer, if there are any transfer charges whatsoever will be borne by you only.
            5. You acknowledge it is not Nuqi Digital Wealth Limited responsibility to check with your bank the status of your transaction. It is solely your responsibility and your bank’s to make sure the fund is sent to our Regulated Third Party Provider.
            6. Maximum to invest for a retail client in one calendar year is 100,000$
            Also,
            a)	You may experience delays in the receipt of local or international bank transfers as well as in withdrawal and deposit processing times. Nuqi shall not be responsible for such delays.
            b)	You may experience delays in the matching of funds received by the third party to your account if the data you have provided during the transfer does not match the data we have on you in our system.
            c)	Withdrawal requests will be rejected if your Account name does not match the name on your bank account or if the bank information provided is not accurate or complete. Your request may also be denied at the sole discretion of any of our partner banks in respect of their internal policies.
            d)	Deposit requests made by you may be rejected if your Account name does not match the name on your bank account or if the bank information provided is not accurate or complete.
            e)	Transfers from your Account to or from a bank account that is open under a different name will be rejected.
            f)	Fees may be charged from the wrong Account or funds may be matched to it i.e. the invest Account instead of the trade Account
            (a) if you have not provided us with clear instructions as to the destination of the funds (b) if an incorrect reference was made by you during the transfer (c) if multiple deposit slips were created by you (d) by system error.
            g)	Any transfers shall only be effective after our systems have made the relevant credit or debit of the funds to the relevant Account(s), and whilst we will make all reasonable efforts to ensure any transfers are made effective in a timely manner, we cannot guarantee how long this process may take. We will not be liable for any delays or other losses that may arise if, for instance, you provided us with wrong or incomplete information.

            13.	Third Party Information (including information provided by Intermediaries):              <p className="font-bold text-xl text-white"></p>


            Generally: Information provided in relation to values of securities, applicable exchange rates, NAV and dividends are obtained from Nuqi Global Ltd, brokers, fund managers and/or such other Intermediaries as we may select from time to time. Where such information is shared with you, do note that we are not responsible for errors or omissions in links from such non-affiliated websites or other publicly available third party material provided.
            14.	Website:              <p className="font-bold text-xl text-white"></p>


            The content of the Website and/or your Nuqi dashboard, and any Plan, is only intended to provide you with general information and is neither an offer to sell nor a solicitation of an offer to purchase any security and may not be relied upon for investment purposes. Any commentaries and information contained in the Website and/or your Nuqi dashboard, and any Plan, should not be considered personal investment advice.


            SCHEDULE 2              <p className="font-bold text-xl text-white"></p>


            Conflicts of Interest

            Introduction and Nuqi’s regulatory obligations              <p className="font-bold text-xl text-white"></p>


            1.	A conflict of interest arises when the interests of Nuqi (including its managers, employees or and appointed representatives) or another client conflict with the interests of its clients to whom Nuqi provides advisory and arranging services.
            2.	The DFSA Rules require Nuqi to manage conflicts of interest fairly, both between itself and its customers and between a customer and another client. These requirements include:
            2.1.	Identification of conflicts: Nuqi is required to take all reasonable steps to identify conflicts of interest between itself and its clients, and between a client and another customer, whose existence may entail a material risk of damage to the interest of that customer;
            2.2.	Managing conflicts: Nuqi is required to maintain and operate effective organisational and administrative arrangements with a view to taking all reasonable steps to prevent conflicts of interest from constituting or giving rise to a material risk of damage to the interests of its clients, including establishing and maintaining effective information barriers to restrict the communication of relevant information.;
            2.3.	Record of conflicts: Nuqi is required to keep and regularly update a record of the kinds of service or activity carried out by Nuqi or on Nuqi’s behalf in which a conflict of interest entailing a material risk of damage to the interests of one or more clients has arisen or, in the case of an ongoing service or activity, may arise;
            2.4.	Disclosure of conflicts: Before providing services to a client, Nuqi is required to disclose to clients on a durable medium the nature and source of any conflict of interest that risks damage to the interest of the client and which are not avoided by Nuqi’s organizational and administrative arrangements;
            2.5.	Conflicts Policy: Nuqi is required to establish, implement and maintain a effective conflict of interest policy that is set out in writing and is appropriate to the size and organisation of the Nuqi and the nature, scale and complexity of Nuqi’s business.






            SCHEDULE 3              <p className="font-bold text-xl text-white"></p>


            Fee

            Nuqi specifies the fee rate it charges a client (the “Fee”) and posts the current Fee terms at   www.nuqiwealth.com (fee section)
            Nuqi Invest agreement

            These terms and conditions (the “Nuqi Invest Agreement”) apply to the provision of certain investment services to you by Nuqi Digital Wealth Limited (“Nuqi”, “us”, “our”, “we”), in relation to the user’s (“Client”, “you”, “your”) Accounts. Nuqi is a company incorporated and registered in the Dubai International Financial Centre(“DIFC”) with company number CL3824, whose registered office is at office 501, Innovation One Building, DIFC, Dubai, United Arab Emirates and is authorized and regulated by the Dubai Financial Services Authority (“DFSA”) License number F007613. These Terms and Conditions contain important information regarding the services that we will provide to you for your own protection. You should read them carefully before accepting them. If you do not understand anything in these Terms and Conditions, please visit www.nuqiwealth.com and ask for further information.
            The terms in this apply to you in addition to the General Terms and Conditions, which apply to all of our services and not just Invest product

            Capitalised words in this Nuqi Invest Agreement will have the same meaning which are given to those word in the General Terms and Conditions. If a term of this Nuqi Invest agreement conflicts with or differs from a term in the General Terms and Conditions, this Nuqi Invest agreement will apply.
            Please take the time to read and understand these Terms before using these services so that you are aware of your legal rights and obligations. In this Agreement:
            “Account/s” means each account opened by you pursuant to this Agreement for investment in the plan set out in your approved Plan.

            “Custodian/ Broker” means Nuqi Global Limited (“Nuqi Global”), a broker/custodian, which a FSC regulated Firm with the registered address at 7A, Mayer Street, Port Louis, Republic of Mauritius

            “Custody Account” means the brokerage account opened by us in connection with this Agreement.

            “DFSA Rules” means the subsidiary legislation made under DIFC law or any other law applicable in the DIFC which is administered by the DFSA.

            “Execution-Only Basis” means we will carry out your instructions to buy and sell securities on your behalf and at your own risk, without getting any guidance or advice about the securities from us and is a client-driven investment decision, made without us providing advice, or against our advice;

            “Plan” means the investment policy, objectives and restrictions set out in Schedule 1.

            “Target Asset Allocation” means a portfolio strategy that involves setting target allocations for various asset classes and rebalancing periodically. The portfolio is rebalanced to the original allocations when they deviate significantly from the initial setting due to differing returns from the various assets.
            “Website” means www.nuqiwealth.com

            1.	Appointment              <p className="font-bold text-xl text-white"></p>


            This Agreement sets out the terms on which Nuqi may recommend a Plan to you and provide you with certain investment advice in relation to your Accounts. This Agreement will become legally binding and we will start providing our services to you once we have received confirmation of your completed Account and satisfactory anti-money laundering verification information. This Agreement supersedes all previous terms and conditions you have with us.
            1.1.	Nuqi provides you with an advisory service with a view to you investing your chosen lump sum and/or regular payments into one of our standard investment portfolios. We will ask you certain questions about your financial circumstances such as your level of debt and type of income, to help us identify which portfolio is suitable for you to invest in. We will not advise you on any existing investments you may currently hold, the efficiency of your approach to paying off any debts, tax efficiency or whether any particular income needs will be met. Should you need advice on your wider personal financial circumstances, you may contact an independent financial adviser.



            2.	Scope of the Service              <p className="font-bold text-xl text-white"></p>


            2.1.	Nuqi will assist in the set-up of an Account for you, and you authorize us to:
            a)	at your request/instruction, provide you with investment advisory and management services (within a range as may be specified by us) and accordance with the terms of the Agreement;
            b)	provide you with a personal recommendation as set out in your Plan. This recommends that savings made through your Account are allocated into a portfolio of investments balanced according to our assessment of what is suitable for you. This is based on our consideration of your responses to our questions and any other specific circumstances that you communicate to us;
            c)	transmit buy/sell trade orders on your behalf to our Custodian/Broker for execution, based on your instructions, including your approval of the Plan.

            2.2.	You will deposit your monies directly into a trust account as specified by us. This trust account will be held on our behalf by a licensed, registered financial institution, authorised to conduct banking business in the relevant jurisdiction. You understand that the laws and practices relating to trust accounts in the relevant jurisdiction may differ to those of others, and this may affect your ability to recover the funds deposited in the trust account.
            2.3.	We have opened the Custody Account. We will, in accordance with the terms of this Agreement, use your funds to buy and sell investments on your behalf through the Account, which is a consolidated account we use for all our clients.

            2.4.	We may hold monies received on your account in an omnibus client trust account together with monies that we hold for other clients. This means that such monies in the trust account will be commingled with the monies of our other clients.

            2.5.	In the event of insolvency of the bank, custodian or other relevant financial institution holding the omnibus client trust account, you understand that you may not be able to fully recover your monies. Further, as your monies are commingled with those of other clients in the same account, you may potentially be exposed to the losses of other clients.

            2.6.	You agree that:

            (a)	we may, whether directly or indirectly, hold investments purchased for you in the Custody Account which is an omnibus account, aggregated with other investments of our other clients, and/or the clients of the Custodian, and such investments may not be held in your name. This means that your investments will be commingled with the assets of our other clients and/or the clients of the Custodian. Given such commingling, the investments may be registered collectively in our name, the name of the Custodian, a sub-custodian and/or any other third party and your entitlements may not be identifiable as separate certificates, titles or electronic records. You agree that if there are any dividends, interests, rights, benefits or other proceeds in relation to your investments resulting from such commingling, we shall have full discretion as to the allotment of such dividends, interests, rights, benefits or other proceeds;
            (b)	In the event of insolvency or default of the Custodian, you understand that you may not be able to fully recover your investments held in the Custody Account. Any shortfall in the investments may be shared among you and our other clients and/or the clients of the Custodian pro rata. As your investments are commingled with those of other clients in the same account, you may potentially be exposed to the losses of other clients;

            (c)	provided that we have selected or engaged such Custodian in good faith, we shall not be liable to you for any and all loss suffered or incurred by you as a result of any act, omission or insolvency of such Custodian;
            (d)	where investments are denominated in a foreign currency, the investments may be held in an omnibus custody account with an entity which is licensed, registered or authorised to act as a custodian in the country or territory where such investments are held. In such case, you understand that the laws and practices relating to custody accounts in the relevant jurisdiction may differ. Depending on the jurisdiction, this may affect your ability to recover the investments deposited in the Custody Account;
            (e)	your investments may be treated as fungible with other investments in the Custody Account and therefore, we are not obliged to deliver any specific investments to you and may instead sell the investments on your behalf at your expense and transfer to your Account the proceeds of such sale (if any).
            3.	Scope of our advice              <p className="font-bold text-xl text-white"></p>


            3.1.	Unless otherwise agreed with you from time to time, Nuqi provides a restricted advice service in that we will only advise you on your Target Asset Allocation and not on other types of investments that might be relevant to a Retail Client investor. Examples of other investments will include life policies, structured products, or investment trusts. Unless otherwise agreed with you, we do not provide advice on direct investment in stocks and shares.

            3.2.	Following our assessment of your objectives and investor profile, we will recommend in your Plan the Target Asset Allocation that we consider suitable for you.

            3.3.	We will keep the Target Asset Allocation under review to ensure it remains suitable for you, given the investor profile set out in your Plan. Our recommended Target Asset Allocations may be made with a view to long term investment, taking into account your time horizon and risk tolerance for falls in the value of your investment, as recorded in your Plan. Nuqi may elect not to change your Target Asset Allocation to take account of short or medium term performance.

            3.4.	Subject to your prior consent, we may proceed to act on our recommended changes to a Plan without obtaining further consent from you, and you are deemed to have agreed to our recommended changes to the Plan.

            3.5.	You agree that you are not obliged to accept any advice provided by, or recommendation made by us (including any investment strategy) and unless otherwise provided for, you retain sole control and authority over your trading and investment decisions and shall be entitled to determine, in your sole discretion, whether to accept, reject or implement an advice, recommendation or opinion (including any investment strategy) made by us.

            3.6.	You may at any time request to vary the investment strategy recommended by us, provided that we are not obliged to agree to provide the services hereunder to you on the basis of your proposed investment strategy. You further understand that should you choose not to accept our recommendation, you shall be solely responsible for ensuring that your proposed investment strategy and investments entered into are suitable and appropriate for you, taking into account your specific objectives, financial situation, investment experience, knowledge and particular needs.

            3.7.	We will act on your instructions, indicated by your approval of the Plan, and pursuant thereto you agree that:
            a)	we may recommend Investments to you or otherwise manage your portfolio in accordance with the Plan and you authorize us to withdraw and invest monies in your Account, as your agent and at your sole risk and account, in the relevant investments;
            b)	we may effect transactions on any market, exchange and execute counterparty and account opening documentation on your behalf and take all routine or day-to-day decisions and otherwise act as we may consider appropriate in its sole and absolute discretion;
            c)	we may enter into any kind of transactions or arrangement for you and to invest in any types or investments or other assets and, without limitation, to close out transactions, deal with your assets including selling such assets or settling a sale order on your behalf;
            d)	you understand the additional risks of giving us discretionary powers to manage your assets and investments on your behalf;
            e)	all transactions, arrangements entered into and actions taken by us on your behalf, including the collection, delivery and receipt of funds or assets, all payments, closing out and unwinding or transactions, will be made by us as your agent, for your sole account and at your sole risk;
            f)	we may determine how transactions are to be carried out including investment timing and duration, or decide to use or refrain from using measures to Shariah compliant hedge against price, currency or interest/profit risks, choose investment instruments which appear appropriate for hedging and use any other measures to optimize returns on existing investments as we may in our absolute discretion, deem fit provided always that the Transactions, arrangements and actions taken on your behalf are within the relevant Investment Strategy;
            g)	Without prejudice to any other clause, you agree that we may at any time arrange to buy or sell investments on your behalf in your Account:
            i.	in order to re-balance your portfolio from time to time in accordance with the Target Asset Allocation recommended in your Plan; or
            ii.	to reflect an adjustment to your Target Asset Allocation for your Account as determined by Nuqi from time to time. Nuqi’s rebalancing methodology is detailed on www.nuqiwealth.com

            3.8.	We may amend your investment strategy, Plan and/or Target Asset Allocation to allow for general market and economic conditions, and/or any other factors which we consider to be relevant.

            We may pool together transactions executed on behalf of our other clients with transactions to be executed on your behalf. Therefore, the precise proportion of your assets allocated to each type of investment may vary slightly from any representations we made to you regarding such investments, save that under no circumstances, will the proportion of your assets allocated to each type of investments deviate by more than [20%] of what was represented to you, for more than seven (7) consecutive business days.

            4.	Your personal circumstances              <p className="font-bold text-xl text-white"></p>


            4.1.	We strongly recommend that you contact us if there is a change in your personal circumstances which would affect your investor profile. Please contact us if there is anything else that has changed which you think should be considered in terms of your Plan.

            4.2.	We will contact you every one to three years with a view to obtaining from you an update on your personal circumstances and investor profile. If you do not respond or provide us with the information we ask for, we will not be able to (and accordingly have no obligation) update your Account and/or Plan.

            4.3.	You may however, contact us at any time if you wish to discuss your Plan or the allocation to or performance of investments in your Account.

            4.4.	Should you contact us or respond to our request for an annual review, we may agree to provide you with a revised personal recommendation. In this event, we may issue you a revised recommended Plan.

            5.	Maintaining the balance of your Target Asset Allocation              <p className="font-bold text-xl text-white"></p>


            5.1.	The Target Asset Allocation percentages recommended in your Plan shall not be breached by the occurrence of any events or circumstances outside the control of Nuqi including, but not limited to, changes in the price or the value of the investments as a result of market movements, currency movements, lack of availability of investments or arising during a process of transitioning to an alternative investment or as a result of an agreed change in the Plan.

            5.2.	Should the Target Asset Allocation vary by a considerable amount for any reason, Nuqi shall notify you and buy or sell investments on your behalf with a view to rebalancing the Target Asset Allocation in accordance with the Plan. Nuqi’s rebalancing methodology can be found on www.nuqiwealth.com

            5.3.	An investment’s compliance with any specifications made in the Plan or otherwise communicated to you shall be determined as at the date of purchase of that investment. Any such specifications shall not be deemed breached as a result of changes in the value or status (including the credit rating) of an investment following purchase. Nuqi shall assess the need to change and/or replace its selection of an investment (whether exchange traded fund [ETF] or otherwise) as appropriate, considering any matters that appear to us to be relevant to the ongoing suitability of that investment for your Account.

            6.	Instructions to Nuqi             <p className="font-bold text-xl text-white"></p>


            6.1.	Nuqi will act on your instructions to undertake (on your behalf) such actions as may reasonably be required for Nuqi to pass orders on your behalf.

            6.2.	You will execute and deliver any authorizations and documents as may be reasonably necessary for Nuqi to carry out its services under this Agreement.

            7.	Execution-only services              <p className="font-bold text-xl text-white"></p>


            7.1.	If you receive execution-only services from us, we may, when we receive specific instructions from you, provide dealing services for (i) shares in foreign companies, (ii) sukuk, notes, certificates of deposit, commercial paper or other Shariah compliant instruments, including government, public agency, municipal and corporate shares traded on a stock exchange or organised trading facility
            (iii) depository receipts or other types of instrument relating to investments falling within (i) or (ii) above; or (iv) trusts, open-ended investment companies, mutual funds and similar schemes. If this is the case, the below terms will apply. We will not advise you about the merits of any transactions and you are solely responsible for the investment decisions made and for evaluating the suitability of any investments for your personal circumstance. We will be dealing on an Execution-Only Basis and you confirm that you have the necessary knowledge and experience to make informed investment decisions.

            7.2.	We shall not advise you about the merits of a particular transaction if we reasonably believe that, when you give us the order for that transaction, you are not expecting our advice and are dealing on an Execution-Only Basis. If the transaction relates to non-complex financial instruments such as shares and bond, we will tell you at the time that we will carry out your order on that basis and we will not have to make sure that the transaction is suitable or appropriate for you. Because of this, you will not benefit from the protections of the relevant DFSA Rules which dictate when we need to assess the suitability or appropriateness of the transaction for you.

            8.	Valuations and Reporting              <p className="font-bold text-xl text-white"></p>


            8.1.	Statements showing the composition and value of your Account and ongoing transactions will be provided in your secure Account area on our website.

            8.2.	Nuqi shall provide periodic statements and reports to you setting out transactions and the value and composition of the Account.

            8.3.	Valuation levels used in statements for the assets held in your Account shall reflect Nuqi’s good faith effort to ascertain fair market levels for the assets based on pricing and valuation information that Nuqi believes to be reliable and which may compromise and be based on valuation information provided by the Custodian. Variations in market conditions will mean that the prices shown in periodic statements and any other reports do not necessarily reflect realizable values.

            9.	Dealing and counterparties              <p className="font-bold text-xl text-white"></p>


            9.1.	In effecting transactions in your Account, Nuqi will pass your instructions to the Custodian to buy and sell shares on your behalf, initially based on your approval of the Plan and any further specific consents you may provide to Nuqi.

            9.2.	All transactions will be affected in accordance with the rules and regulations of the relevant market or exchange, and that Nuqi may take all such steps as may be required or permitted by such rules and regulations and/or by good market practice including, where appropriate, parting with possession of documents of title representing investments in the Account.


            10.	Liability              <p className="font-bold text-xl text-white"></p>


            10.1.	Nuqi gives no assurance or guarantee that the value of investments in your Account will not go down or that the investment held in your Account will generate profits or income, or that any investment or savings goals you may have (even where you have notified us of them) will be achieved.

            10.2.	Your objectives, as stated in your Plan, are to be considered only as goals, and while Nuqi will invest only in investments which, in its judgement, are suitable in accordance with the Plan, considering (among other things), your objectives, Nuqi does not guarantee the results of any investment and will not be responsible in the event that some or all of such objectives are not realized.

            10.3.	Nuqi shall not be liable for any error of judgement or any other loss suffered by you in connection with the services it provides to you under this Agreement (and in particular, but without limitation, Nuqi shall not be liable for any loss which may be sustained in the purchase, holding or sale of any investments in accordance with those services) unless such loss arises from negligence, willful default, dishonesty or fraud by it or any of its employees. Nuqi shall not be liable for any other losses.

            11.	General              <p className="font-bold text-xl text-white"></p>


            11.1.	No failure on the part of any party to exercise, and no delay in exercising, any right or remedy under this Agreement will operate as a waiver thereof nor will any single or partial exercise of any right or remedy preclude any other or further exercise thereof or the exercise of any other right or remedy. The rights and remedies provided in this Agreement are cumulative and not exclusive of any rights or remedies provided by law.

            11.2.	In the event any provision of this Agreement is adjudicated to be void, illegal, invalid, or unenforceable, the remaining terms and provisions of this Agreement shall not be affected, and each of such remaining terms and provisions shall be valid and enforceable to the fullest extent permitted by law.

            11.3.	A person who is not a party to this Agreement has no rights to enforce any term.

            11.4.	This Agreement, the Schedules and any other documents annexed to or incorporated by reference are to be construed as one document constituting the agreement of the parties as to the subject matter of this Agreement.

            11.5.	This Agreement constitutes the entire agreement between the parties and supersedes and extinguishes all previous agreements, promises, assurances, warranties, representations and understandings between them, whether written or oral, relating to its subject matter.

            11.6.	You and Nuqi agree that neither party will have any remedy in respect of any statement, representation, assurance or warranty (whether made innocently or negligently) that is not set out in this Agreement. Each party agrees that it shall have no claim for innocent or negligent misrepresentation or negligent misstatement based on any statement in this Agreement.



            12.	Governing Law              <p className="font-bold text-xl text-white"></p>


            12.1.	The provision of services to you under this Agreement will be governed by and construed in accordance with the laws of England. The exclusive place of jurisdiction for any disputes arising out of and/or in connection with this Agreement will be the courts of the DIFC.

            12.2.	However, we reserve the right to take legal action against you before the courts of the country in which you are resident or before any other competent authority.

            SCHEDULE 1              <p className="font-bold text-xl text-white"></p>


            Plan

            The plan, presented online during the summary of the terms & conditions, can also be found by logging in to your Nuqi application dashboard.

            Nuqi Save agreement              <p className="font-bold text-xl text-white"></p>


            These terms and conditions ( the “Nuqi Save agreement”) sets out the specific terms that will apply to you when using Nuqi Save on the Nuqi platform which is provided by Nuqi Digital Wealth Limited (“Nuqi”, “us”, “our”, “we”), in relation to the user (“Client”, “you”, “your”). Nuqi is a company incorporated and registered in the Dubai International Financial Centre(“DIFC”) with company number CL3824, whose registered office is , at office 501, Innovation One Building, DIFC, Dubai, United Arab Emirates and is authorized and regulated by the DUBAI Financial Services Authority (“DFSA”) with License number F007613.
            The terms in this apply to you in addition to the General Terms and Conditions, which apply to all of our services and not just our Save product.

            Capitalised words in this Nuqi Save agreement will have the same meaning which are given to those word in the General Terms and Conditions. If a term of this Nuqi Save agreement conflicts with or differs from a term in the General Terms and Conditions, this Nuqi Save agreement will apply.
            Please take the time to read and understand these Terms before using these services so that you are aware of your legal rights and obligations. In this Agreement:
            “Account/s” means each account opened by you pursuant to this Agreement.

            “Custodian/ Broker” means Nuqi Global Limited (“Nuqi Global”), a broker/custodian, which a FSC regulated Firm with the registered address at 7A, Mayer Street, Port Louis, Republic of Mauritius


            “Custody Account” means the securities brokerage account opened by us in connection with this Agreement.

            “DFSA Rules” means the subsidiary legislation made under DIFC law or any other law applicable in the DIFC which is administered by the DFSA.

            “Execution-Only Basis” means we will carry out your instructions to buy and sell securities on your behalf and at your own risk, without getting any guidance or advice about the securities from us.
            “Risk Warnings” means the risk warnings set out on the Website. “Website” means www.nuqiwealth.com
            1.	Appointment

            1.1.	Nuqi provides you with an advisory service with a view to you investing your chosen lump sum and/or regular payments into one of our standard investment portfolios. We will ask you certain questions about your financial circumstances such as your level of debt and type of income, to help us identify which portfolio is suitable for you to invest in. We will not advise you on any existing investments you may currently hold, the efficiency of your approach to paying off any debts, tax efficiency or whether any particular income needs will be met. Should you need advice on your wider personal financial circumstances, you may contact an independent financial adviser.

            2.	Scope of the Service              <p className="font-bold text-xl text-white"></p>


            2.1.	Nuqi will assist in the set-up of an Account for you, and you authorize us to:
            a)	at your request/instruction, provide you with investment advisory and management services (within a range as may be specified by us) and accordance with the terms of the Agreement;
            b)	provide you with a personal recommendation as set out in your Plan. This recommends that monies in your Account are allocated into a portfolio of investments suitable for you. This is based on our consideration of your responses to our questions and any other specific circumstances that you communicate to us;
            c)	transmit buy/sell trade orders on your behalf to our Custodian/Broker for execution, based on your instructions.


            2.2.	You will deposit your monies directly into a trust account as specified by us. This trust account will be held on our behalf by a licensed, registered financial institution, authorised to conduct banking business in the relevant jurisdiction. You understand that the laws and practices relating to trust accounts in the relevant jurisdiction may differ to those of others, and this may affect your ability to recover the funds deposited in the trust account.

            2.3.	We have opened the Custody Account. We will, in accordance with the terms of this Agreement, use your funds to buy and sell investments on your behalf through the Account, which is a consolidated account we use for all our clients.

            2.4.	We may hold monies received on your account in an omnibus client trust account together with monies that we hold for other clients. This means that such monies in the trust account will be commingled with the monies of our other clients
            2.5.	In the event of insolvency of the bank, custodian or other relevant financial institution holding the omnibus client trust account, you understand that you may not be able to fully recover your monies. Further, as your monies are commingled with those of other clients in the same account, you may potentially be exposed to the losses of other clients.

            2.6.	You agree that:
            (a)	we may, whether directly or indirectly, hold investments purchased for you in the Custody Account which is an omnibus account, aggregated with other investments of our other clients, and/or the clients of the Custodian, and such investments may not be held in your name. This means that your investments will be commingled with the assets of our other clients and/or the clients of the Custodian. Given such commingling, the investments may be registered collectively in our name, the name of the Custodian, a sub-custodian and/or any other third party and your entitlements may not be identifiable as separate certificates, titles or electronic records. You agree that if there are any dividends, interests, rights, benefits or other proceeds in relation to your investments resulting from such commingling, we shall have full discretion as to the allotment of such dividends, interests, rights, benefits or other proceeds;
            (b)	In the event of insolvency or default of the Custodian, you understand that you may not be able to fully recover your investments held in the Custody Account. Any shortfall in the investments may be shared among you and our other clients and/or the clients of the Custodian pro rata. As your investments are commingled with those of other clients in the same account, you may potentially be exposed to the losses of other clients;
            (c)	provided that we have selected or engaged such Custodian in good faith, we shall not be liable to you for any and all loss suffered or incurred by you as a result of any act, omission or insolvency of such Custodian;
            (d)	where investments are denominated in a foreign currency, the investments may be held in an omnibus custody account with an entity which is licensed, registered or authorised to act as a custodian in the country or territory where such investments are held. In such case, you understand that the laws and practices relating to custody accounts in the relevant jurisdiction may differ. Depending on the jurisdiction, this may affect your ability to recover the investments deposited in the Custody Account;
            (e)	your investments may be treated as fungible with other investments in the Custody Account and therefore, we are not obliged to deliver any specific investments to you and may instead sell the investments on your behalf at your expense and transfer to your Account the proceeds of such sale (if any).


            3.	Scope of our advice              <p className="font-bold text-xl text-white"></p>


            3.1.	Unless otherwise agreed with you from time to time, Nuqi provides a restricted advice service in that we will only advise you on your Target Asset Allocation and not on other types of investments that might be relevant to a Retail Client investor. Examples of other investments will include life policies, structured products, or investment trusts. Unless otherwise agreed with you, we do not provide advice on direct investment in stocks and shares.

            3.2.	Following our assessment of your objectives and investor profile, we will recommend in your Plan the Target Asset Allocation that we consider suitable for you.

            3.3.	We will keep the Target Asset Allocation under review to ensure it remains suitable for you, given the investor profile set out in your Plan. Our recommended Target Asset Allocations may be made with a view to long term investment, taking into account your time horizon and risk tolerance for falls in the value of your investment, as recorded in your Plan. Nuqi may elect not to change your Target Asset Allocation to take account of short or medium term performance.

            3.4.	Subject to your prior consent, we may proceed to act on our recommended changes to a Plan without obtaining further consent from you, and you are deemed to have agreed to our recommended changes to the Plan.

            3.5.	You agree that you are not obliged to accept any advice provided by, or recommendation made by us (including any investment strategy) and unless otherwise provided for, you retain sole control and authority over your trading and investment decisions and shall be entitled to determine, in your sole discretion, whether to accept, reject or implement an advice, recommendation or opinion (including any investment strategy) made by us.

            3.6.	You may at any time request to vary the investment strategy recommended by us, provided that we are not obliged to agree to provide the services hereunder to you on the basis of your proposed investment strategy. You further understand that should you choose not to accept our recommendation, you shall be solely responsible for ensuring that your proposed investment strategy and investments entered into are suitable and appropriate for you, taking into account your specific objectives, financial situation, investment experience, knowledge and particular needs.

            3.7.	We will act on your instructions, indicated by your approval of the Plan, and pursuant thereto you agree that:
            a)	we may recommend Investments to you or otherwise manage your portfolio in accordance with the Plan and you authorize us to withdraw and invest monies in your Account, as your agent and at your sole risk and account, in the relevant investments;
            b)	we may effect transactions on any market, exchange and execute counterparty and account opening documentation on your behalf and take all routine or day-to-day decisions and otherwise act as we may consider appropriate in its sole and absolute discretion; we may enter into any kind of transactions or arrangement for you and to invest in any types or investments or other assets and, without limitation, to close out transactions, deal with your assets including selling such assets or settling a sale order on your behalf;
            c)	you understand the additional risks of giving us discretionary powers to manage your assets and investments on your behalf;
            d)	all transactions, arrangements entered into and actions taken by us on your behalf, including the collection, delivery and receipt of funds or assets, all payments, closing out and unwinding or transactions, will be made by us as your agent, for your sole account and at your sole risk;
            e)	we may determine how transactions are to be carried out including investment timing and duration, or decide to use or refrain from using measures to Shariah Compliant hedge against price, currency or interest/profit risks, choose investment instruments which appear appropriate for hedging and use any other measures to optimize returns on existing investments as we may in our absolute discretion, deem fit provided always that the Transactions, arrangements and actions taken on your behalf are within the relevant Investment Strategy;
            f)	Without prejudice to any other clause, you agree that we may at any time arrange to buy or sell investments on your behalf in your Account:
            i.	in order to re-balance your portfolio from time to time in accordance with the Target Asset Allocation recommended in your Plan; or
            ii.	to reflect an adjustment to your Target Asset Allocation for your Account as determined by Nuqi from time to time. Nuqi’s rebalancing methodology is detailed on www.nuqiwealth.com

            3.8.	We may amend your investment strategy, Plan and/or Target Asset Allocation to allow for general market and economic conditions, and/or any other factors which we consider to be relevant.

            3.9.	We may pool together transactions executed on behalf of our other clients with transactions to be executed on your behalf. Therefore, the precise proportion of your assets allocated to each type of investment may vary slightly from any representations we made to you regarding such investments, save that under no circumstances, will the proportion of your assets allocated to each type of investments deviate by more than [20%] of what was represented to you, for more than 7 consecutive business days.

            4.	Your personal circumstances             <p className="font-bold text-xl text-white"></p>


            4.1.	We strongly recommend that you contact us if there is a change in your personal circumstances which would affect your investor profile. Please contact us if there is anything else that has changed which you think should be considered in terms of your Plan.
            4.2.	We will contact you every one to three years with a view to obtaining from you an update on your personal circumstances and investor profile. If you do not respond or provide us with the information we ask for, we will not be able to (and accordingly have no obligation) update your Account and/or Plan.
            4.3.	You may however, contact us at any time if you wish to discuss your Plan or the allocation to or performance of investments in your Account.
            4.4.	Should you contact us or respond to our request for an annual review, we may agree to provide you with a revised personal recommendation. In this event, we may issue you a revised recommended Plan.

            5.	Instructions to Nuqi              <p className="font-bold text-xl text-white"></p>


            5.1.	Nuqi will act on your instructions to undertake (on your behalf) such actions as may reasonably be required for Nuqi to pass orders on your behalf.

            5.2.	You will execute and deliver any authorizations and documents as may be reasonably necessary for Nuqi to carry out its services under this Agreement.

            6.	Execution-only services <p className="font-bold text-xl text-white">11. Severance</p>

            6.1.	If you receive execution-only services from us, we may, when we receive specific instructions from you, provide dealing services for (i) shares in foreign companies, (ii), sukuk, notes, certificates of deposit, commercial paper or other Shariah approved instruments, including government, public agency, municipal and corporate shares traded on a stock exchange or organised trading facility
            (iii) depository receipts or other types of instrument relating to investments falling within (i) or (ii) above; or (iv) trusts, open-ended investment companies, mutual funds and similar schemes. If this is the case, the below terms will apply. We will not advise you about the merits of any transactions and you are solely responsible for the investment decisions made and for evaluating the suitability of any investments for your personal circumstance. We will be dealing on an Execution-Only Basis and you confirm that you have the necessary knowledge and experience to make informed investment decisions.



            6.2.	We shall not advise you about the merits of a particular transaction if we reasonably believe that, when you give us the order for that transaction, you are not expecting our advice and are dealing on an Execution-Only Basis. If the transaction relates to non-complex financial instruments such as shares and bond, we will tell you at the time that we will carry out your order on that basis and we will not have to make sure that the transaction is suitable or appropriate for you. Because of this, you will not benefit from the protections of the relevant DFSA Rules which dictate when we need to assess the suitability or appropriateness of the transaction for you.
            7.	Valuations and Reporting <p className="font-bold text-xl text-white">11. Severance</p>

            7.1.	Statements showing the composition and value of your Account and ongoing transactions will be provided in your secure Account area on our website.

            7.2.	Nuqi shall provide periodic statements and reports to you setting out transactions and the value and composition of the Account.

            7.3.	Valuation levels used in statements for the assets held in your Account shall reflect Nuqi’s good faith effort to ascertain fair market levels for the assets based on pricing and valuation information that Nuqi believes to be reliable and which may compromise and be based on valuation information provided by the Custodian. Variations in market conditions will mean that the prices shown in periodic statements and any other reports do not necessarily reflect realizable values.

            8.	Dealing and counterparties <p className="font-bold text-xl text-white">11. Severance</p>

            8.1.	In effecting transactions in your Account, Nuqi will pass your instructions to the Custodian to buy and sell shares on your behalf, initially based on your approval of the Plan and any further specific consents you may provide to Nuqi.

            8.2.	All transactions will be affected in accordance with the rules and regulations of the relevant market or exchange, and that Nuqi may take all such steps as may be required or permitted by such rules and regulations and/or by good market practice including, where appropriate, parting with possession of documents of title representing investments in the Account.

            9.	Liability <p className="font-bold text-xl text-white">11. Severance</p>

            9.1.	Nuqi gives no assurance or guarantee that the value of investments in your Account will not go down or that the investment held in your Account will generate profits or income, or that any investment or savings goals you may have (even where you have notified us of them) will be achieved.

            9.2.	Your objectives, as stated in your Plan, are to be considered only as goals, and while Nuqi will invest only in investments which, in its judgement, are suitable in accordance with the Plan, considering (among other things), your objectives, Nuqi does not guarantee the results of any investment and will not be responsible in the event that some or all of such objectives are not realized.

            9.3.	Nuqi shall not be liable for any error of judgement or any other loss suffered by you in connection with the services it provides to you under this Agreement (and in particular, but without limitation, Nuqi shall not be liable for any loss which may be sustained in the purchase, holding or sale of any investments in accordance with those services) unless such loss arises from negligence, willful default, dishonesty or fraud by it or any of its employees. Nuqi shall not be liable for any other losses

             <p className="font-bold text-xl text-white">10.General</p>


            10.1.	No failure on the part of any party to exercise, and no delay in exercising, any right or remedy under this Agreement will operate as a waiver thereof nor will any single or partial exercise of any right or remedy preclude any other or further exercise thereof or the exercise of any other right or remedy. The rights and remedies provided in this Agreement are cumulative and not exclusive of any rights or remedies provided by law.


            10.2.	In the event any provision of this Agreement is adjudicated to be void, illegal, invalid, or unenforceable, the remaining terms and provisions of this Agreement shall not be affected, and each of such remaining terms and provisions shall be valid and enforceable to the fullest extent permitted by law.

            10.3.	A person who is not a party to this Agreement has no rights to enforce any term.

            10.4.	This Agreement, the Schedules and any other documents annexed to or incorporated by reference are to be construed as one document constituting the agreement of the parties as to the subject matter of this Agreement.

            10.5.	This Agreement constitutes the entire agreement between the parties and supersedes and extinguishes all previous agreements, promises, assurances, warranties, representations and understandings between them, whether written or oral, relating to its subject matter. You and Nuqi agree that neither party will have any remedy in respect of any statement, representation, assurance or warranty (whether made innocently or negligently) that is not set out in this Agreement. Each party agrees that it shall have no claim for innocent or negligent misrepresentation or negligent misstatement based on any statement in this Agreement.

            <p className="font-bold text-xl text-white"> 11.Governing Law</p><br/>

            11.1.	The provision of services to you under this Agreement will be governed by and construed in accordance with the laws of England. The exclusive place of jurisdiction for any disputes arising out of and/or in connection with this Agreement will be the courts of the DIFC.<br/><br/>

            11.2.	However, we reserve the right to take legal action against you before the courts of the country in which you are resident or before any other competent authority. 



          </p>
        );

      case "moneyDisclaimer":
        return (
          <p>
            Please note that at Nuqi Digital Wealth Limited: <br /><br />
            1. We are not permitted under the DFSA Rules to receive or hold any funds on your behalf. You acknowledge and agree that any funds relating to your Transactions will be held with the Regulated Third Party Provider.<br /><br />
            2. Where you transfer your funds to a Regulated Third Party Provider, you acknowledge and agree that your funds will be held with a bank that is not approved under the Client Money rules of the DFSA and that your funds may therefore not be protected as effectively as had it been held in a client bank account in the DIFC.<br /><br />
            3. You acknowledge and agree that you are solely responsible for reading and accepting the terms and conditions of the Regulated Third Party Provider before sending your funds to the Regulated Third Party Provider.<br /><br />
            4. You can initiate a payment using a debit card through our platform and or bank transfer, after which the funds will be deposited into your account with the Regulated Third Party Provider. You acknowledge that Nuqi Digital Wealth Limited will incur card processing fees and charges and other administrative costs in providing you with the convenience of making a deposit using your debit card and agree that we shall be entitled to apply an additional fee on top of the amount funded using your debit card, which shall be added to the total value of the card transaction to be authorized. Prior to making a payment using a debit card, you will be presented with the total amount of such fee that will be added to the value of the card transaction and be required to consent to this fee. The same goes to Bank transfer, if there are any transfer charges whatsoever will be borne by you only.<br /><br />
            5. You acknowledge it is not Nuqi Digital Wealth Limited responsibility to check with your bank the status of your transaction. It is solely your responsibility and your bank’s to make sure the fund is sent to our Regulated Third Party Provider.<br /><br />
            6. Maximum to invest for a retail client in one calendar year is 100,000$ <br /><br />
            Also, <br />
            a)	You may experience delays in the receipt of local or international bank transfers as well as in withdrawal and deposit processing times. Nuqi shall not be responsible for such delays. <br /><br />
            b)	You may experience delays in the matching of funds received by the third party to your account if the data you have provided during the transfer does not match the data we have on you in our system.<br /><br />
            c)	Withdrawal requests will be rejected if your Account name does not match the name on your bank account or if the bank information provided is not accurate or complete. Your request may also be denied at the sole discretion of any of our partner banks in respect of their internal policies.<br /><br />
            d)	Deposit requests made by you may be rejected if your Account name does not match the name on your bank account or if the bank information provided is not accurate or complete.<br /><br />
            e)	Transfers from your Account to or from a bank account that is open under a different name will be rejected.<br /><br />
            f)	Fees may be charged from the wrong Account or funds may be matched to it i.e. the invest Account instead of the trade Account<br />
            (a) if you have not provided us with clear instructions as to the destination of the funds (b) if an incorrect reference was made by you during the transfer (c) if multiple deposit slips were created by you (d) by system error.<br /> <br />
            g)	Any transfers shall only be effective after our systems have made the relevant credit or debit of the funds to the relevant Account(s), and whilst we will make all reasonable efforts to ensure any transfers are made effective in a timely manner, we cannot guarantee how long this process may take. We will not be liable for any delays or other losses that may arise if, for instance, you provided us with wrong or incomplete information.<br /><br />




          </p>
        );
      default:
        return <p>Privacy Policy content goes here...</p>;
    }
  };

  return (

    <section className="py-10 sm:py-16 -mt-16 text-white min-h-screen">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side Navigation */}
          <div className="lg:w-1/4 w-full p-4 rounded-lg shadow-lg">
            <ul className="space-y-4">
              <li>
                <button
                  className={`block py-2 px-4 w-full text-left rounded-3xl transition-colors duration-200 ${selectedPage === "terms"
                    ? "bg-cyan-400 text-black font-semibold"
                    : "hover:bg-cyan-400 text-white text-xl"
                    }`}
                  onClick={() => setSelectedPage("terms")}
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  className={`block py-2 px-4 w-full text-left rounded-3xl transition-colors duration-200 ${selectedPage === "termsConditions"
                    ? "bg-cyan-400 text-black font-semibold"
                    : "hover:bg-cyan-400 text-white text-xl"
                    }`}
                  onClick={() => setSelectedPage("termsConditions")}
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  className={`block py-2 px-4 w-full text-left rounded-3xl transition-colors duration-200 ${selectedPage === "moneyDisclaimer"
                    ? "bg-cyan-400 text-black font-semibold"
                    : "hover:bg-cyan-400 text-white text-xl"
                    }`}
                  onClick={() => setSelectedPage("moneyDisclaimer")} // Set the selected page to "moneyDisclaimer"
                >
                  Disclaimer for Money
                </button>
              </li>
              <li>
                <button
                  className={`block py-3 px-4 w-full text-left rounded-3xl transition-colors duration-200 ${selectedPage === "privacy"
                    ? "bg-cyan-400 text-black font-semibold"
                    : "hover:bg-cyan-400 text-white text-xl"
                    }`}
                  onClick={() => setSelectedPage("privacy")}
                >
                  Privacy Policy
                </button>
              </li>

              <li>
                <button
                  className={`block py-2 px-4 w-full text-left rounded-3xl transition-colors duration-200 ${selectedPage === "disclaimer"
                    ? "bg-cyan-400 text-black font-semibold"
                    : "hover:bg-cyan-400 text-white text-xl"
                    }`}
                  onClick={() => setSelectedPage("disclaimer")}
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button
                  className={`block py-2 px-4 w-full text-left rounded-3xl transition-colors duration-200 ${selectedPage === "cookie"
                    ? "bg-cyan-400 text-black font-semibold"
                    : "hover:bg-cyan-400 text-white text-xl"
                    }`}
                  onClick={() => setSelectedPage("cookie")}
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 w-full p-8 font-poppins rounded-lg shadow-lg ">
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl font-poppins font-medium leading-tight text-cyan-400 pb-6">
                {selectedPage === "privacy"
                  ? "Privacy Policy"
                  : selectedPage === "terms"
                    ? "Terms of Use"
                    : selectedPage === "disclaimer"
                      ? "Disclaimer"
                      : selectedPage === "cookie"
                        ? "Cookie Policy"
                        : selectedPage === "moneyDisclaimer"
                          ? "Disclaimer for Money" // New section added here
                          : "Terms & Conditions"}
              </h2>
            </div>
            <div className="mt-1 text-white text-base leading-relaxed">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Privacy;
