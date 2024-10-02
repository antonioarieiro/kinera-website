import { useState } from 'react';
import DropInfo from '../DropInfo';
import comuBack from '../../assets/images/comuBack.png';
import ReactMarkdown from 'react-markdown';
import './community.css';

const CustomLink = ({ href, children }) => (
  <a href={href} style={{ color: '#da6d9e' }}>
    {children}
  </a>
);

const CustomParagraph = ({ children }) => (
  <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
    {children}
  </p>
);

const Community = () => {
  const [showAnswer, setShowAnswer] = useState(1);

  const markdown2 = `Kinera is very close to its pre-alpha release, and this is an invitation to collaborate.  You can start building your DAO or community and offering your services on our platform. If you want to group test Kinera’s features, join the [Kinera Community Testers](https://discord.gg/qCN64mNDU5). Follow our [X/Twitter](https://twitter.com/KineraNetwork).
  Kinera combines content creation tools, collective wisdom, and token incentives. We create value through collective action, pursue shared goals, support common rules and take risks together.
To receive updates about the release, subscribe to the newsletter at the bottom of the page. 
 [Newsletter](#newsletter).  Check our [Socials](/#social).`;

  const markdown3 = `**Ambassadors** are volunteer community members who wish to help build a strong and engaged community. They play a central role in our project. On some occasions, they are mediators and guardians, organising or promoting initiatives that strengthen the ecosystem and contribute to its success. At other times, they act as passionate advocates and agents between the project team and the wider public, facilitating communication and engagement.
  If you want to volunteer as an ambassador, fill out the form here 
   [here](https://kine.foundation/applicants/project-grants/apply).`;

  const markdown4 = `***Kinera*** is an open and resilient curation ecosystem that unites a diverse community of viewers and independent media creators. To attract new members, we will host special events featuring prizes and token airdrops. These events may include competitions that reward the most active participants, users submitting meaningful, high-quality content, or creating Constellations aligned with our platform's goals. If you're interested in participating, please register for our [Newsletter](#newsletter) to receive updates. `;

  return (
    <div
      className="background-overlay3 w-full flex flex-col pt-20 pb-10 bg-center bg-cover bg-no-repeat bg-scroll text-white"
      id='community'
    >
      <h1 className="mt-6 sm:text-[70px] text-[38px] font-bold text-center -mb-10 text-[#3c1e11]" data-aos="">
        COMMUNITY
      </h1>

      <div className="w-full flex md:flex-row flex-col justify-center md:gap-40 gap-10 lg:px-10 px-5 mt-32 pb-20" data-aos="">
        <div className="md:w-3/5 w-full gap-10">
          <DropInfo
            question={<ReactMarkdown>{`**1. Decentralisation is a core feature.**`}</ReactMarkdown>}
            answer={
              <CustomParagraph>
                <ReactMarkdown>{`***Kinera's*** strength lies in our community-driven approach, with every participant playing a crucial role in the network's success. Each action taken on the platform contributes to our growth. We harness the power of decentralised networks to coordinate users, allowing them to create content free from external influences. We curate content without relying on algorithms, ensuring authenticity and quality. Moderation is conducted by the community and reinforced through our platform's design. We aim to be the first media distribution network to provide uniform content access to all users, regardless of their location.`}</ReactMarkdown>
              </CustomParagraph>
            }
            onClick={() => setShowAnswer(1)}
            showAnswer={showAnswer === 1}
          />
          <DropInfo
            question={<ReactMarkdown>{`**2. And you're getting an invitation to join!**`}</ReactMarkdown>}
            answer={
              <CustomParagraph>
                <ReactMarkdown components={{ a: CustomLink }}>{markdown2}</ReactMarkdown>
              </CustomParagraph>
            }
            onClick={() => setShowAnswer(2)}
            showAnswer={showAnswer === 2}
          />
          <DropInfo
            question={<ReactMarkdown>{`**3. Ambassadors**`}</ReactMarkdown>}
            answer={
              <CustomParagraph>
                <ReactMarkdown components={{ a: CustomLink }}>{markdown3}</ReactMarkdown>
              </CustomParagraph>
            }
            onClick={() => setShowAnswer(3)}
            showAnswer={showAnswer === 3}
          />
          <DropInfo
            question={<ReactMarkdown>{`**4. Token airdrops**`}</ReactMarkdown>}
            answer={
              <CustomParagraph>
                <ReactMarkdown components={{ a: CustomLink }}>{markdown4}</ReactMarkdown>
              </CustomParagraph>
            }
            onClick={() => setShowAnswer(4)}
            showAnswer={showAnswer === 4}
          />
        </div>
      </div>
    </div>
  );
};

export default Community;