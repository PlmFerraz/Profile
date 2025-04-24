import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";

export default function CustomButton({ children, iconName, url }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "instagram":
        return faInstagram;
      case "github":
        return faGithub;
      case "linkedin":
        return faLinkedin;
      default:
        return faChrome;
    }
  };

  return (
    <button className="bg-[#333333] rounded-lg">
      <a
        className="w-full p-[10px]  flex justify-center items-center gap-2"
        href={url}
      >
        <FontAwesomeIcon icon={getIcon(iconName)} />
        {children}
      </a>
    </button>
  );
}
