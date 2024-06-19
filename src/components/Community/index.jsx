import { useState } from 'react';
import DropInfo from '../DropInfo';
import comuBack from '../../assets/images/comuBack.png';
import ReactMarkdown from 'react-markdown';
import './community.css';

const CustomLink = ({ href, children }) => (
  <a href={href} style={{ color: '#b0a6c5' }}>
    {children}
  </a>
);

const Community = () => {
  const [showAnswer, setShowAnswer] = useState(1);

  const markdown2 = `This is an invitation to collaborate. If you want to group test Kinera’s features or join the technical team coding the application, follow our [Socials](/#social) for updates and to engage with our community. Receive updates about new features by subscribing to the newsletter at the bottom of the page. Kinera is reaching out to social and technological communities, providing a platform where together we can reflect on understanding the complexities of the world we live in.`;

  const markdown3 = `Ambassadors are volunteer community members who wish to see the growth and success of the community. They play a crucial role as mediators, advocates, and guardians, fostering its expansion and protection, and organising or promoting initiatives that strengthen the ecosystem. To volunteer as an ambassador fill out the form [here](https://example.com/ambassador-form).`;

  const markdown4 = `At ***Kinera*** we create value through collective action. To promote and attract interested users to the platform, we will host special events with prizes and token airdrops. These incentives can come in the form of competitions that reward the most active participants, the users that submit meaningful, high-quality content, or the ones that promote the creation of constellations aligned with the platform's goals. Register for our newsletter with the updates if you're interested in participating.`;

  return (
    <div
      className="background-overlay3 w-full flex flex-col pt-20 pb-10 bg-center bg-cover bg-no-repeat bg-scroll text-white"
      style={{
        backgroundImage: `url(${comuBack})`
      }}
      id='community'
    >
      <h1 className="mt-6 sm:text-[70px] text-[38px] font-bold text-center -mb-10 text-[#351e2d]" data-aos="">COMMUNITY</h1>

      <div className="w-full flex md:flex-row flex-col justify-center md:gap-40 gap-10 lg:px-10 px-5 mt-32 pb-20" data-aos="">
        <div className="md:w-3/5 w-full gap-10">
          <DropInfo
            question={<ReactMarkdown>{"***1. Decentralisation is a core feature of Kinera.***"}</ReactMarkdown>}
            answer={<ReactMarkdown>{"***Kinera's*** strength lies in its community-driven approach, every participant playing a crucial role in its success. Each action taken on the platform contributes to the network's growth. Kinera aims to harness the power of decentralised networks as coordination systems, allowing users to create their media free from external influences, such as the control of major corporations and institutional manipulation."}</ReactMarkdown>}
            onClick={() => setShowAnswer(1)}
            showAnswer={showAnswer === 1}
          />
          <DropInfo
            question={<ReactMarkdown>{"***2. The community of participants is the backbone of Kinera.***"}</ReactMarkdown>}
            answer={
              <ReactMarkdown
                components={{
                  a: CustomLink,
                }}
              >
                {markdown2}
              </ReactMarkdown>
            }
            onClick={() => setShowAnswer(2)}
            showAnswer={showAnswer === 2}
          />
          <DropInfo
            question={<ReactMarkdown>{"***3. Ambassadors***"}</ReactMarkdown>}
            answer={
              <ReactMarkdown
                components={{
                  a: CustomLink,
                }}
              >
                {markdown3}
              </ReactMarkdown>
            }
            onClick={() => setShowAnswer(3)}
            showAnswer={showAnswer === 3}
          />
          <DropInfo
            question={<ReactMarkdown>{"***4. Token airdrops***"}</ReactMarkdown>}
            answer={
              <ReactMarkdown
                components={{
                  a: CustomLink,
                }}
              >
                {markdown4}
              </ReactMarkdown>
            }
            onClick={() => setShowAnswer(4)}
            showAnswer={showAnswer === 4}
          />
        </div>
      </div>
    </div>
  );
}

export default Community;