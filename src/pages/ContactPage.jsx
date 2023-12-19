//ContactPage
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import MyAvatar from "../assets/MyAvatar.jpg";

const ContactPage = () => {
  const creatorName = "James";
  const contactEmail =
    import.meta.env.VITE_CONTACT_EMAIL || process.env.VITE_CONTACT_EMAIL;
  const githubLink =
    import.meta.env.VITE_CONTACT_GITHUB || process.env.VITE_CONTACT_GITHUB;
  const mediumLink =
    import.meta.env.VITE_CONTACT_MEDIUM || process.env.VITE_CONTACT_MEDIUM;
  const linkedInLink =
    import.meta.env.VITE_CONTACT_LINKEDIN || process.env.VITE_CONTACT_LINKEDIN;
  const instagramLink =
    import.meta.env.VITE_CONTACT_INSTAGRAM ||
    process.env.VITE_CONTACT_INSTAGRAM;


  const [showAvatar, setShowAvatar] = useState(true);

  return (
    <div className="flex flex-1 flex-col bg-neutral-800 p-8 text-center">
      <h1 className="mb-6 text-3xl">Contact</h1>

      {/* 大頭照或替代圖示容器 */}
      <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full xs:h-60 xs:w-60">
        {/* 大頭照或替代圖示 */}
        {showAvatar ? (
          <img
            src={MyAvatar}
            alt={`${creatorName}'s Profile`}
            className="h-full w-full object-cover"
            onError={() => setShowAvatar(false)}
          />
        ) : (
          <FaUserLarge className="h-full w-full text-4xl text-gray-500" />
        )}
      </div>

      {/* 作者名稱 */}
      <p className="mb-2 text-xl font-bold">{creatorName}</p>

      {/* 聯絡email */}
      <p className="mb-6 text-gray-500">
        {contactEmail}
      </p>

      {/* 社交媒體連結 */}
      <div className="flex justify-center space-x-4">
        <a
          href={`mailto:${contactEmail}`}
        >
          <FaEnvelope className="h-8 w-8" />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-8 w-8" />
        </a>
        <a href={mediumLink} target="_blank" rel="noopener noreferrer">
          <FaMedium className="h-8 w-8" />
        </a>
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-8 w-8" />
        </a>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
}

export default ContactPage