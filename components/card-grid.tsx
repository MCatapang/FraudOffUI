import ForumIcon from '@mui/icons-material/Forum';
import LinkCard from "./link-card";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SchoolIcon from '@mui/icons-material/School';

export default function CardGrid() {
  const cards: LinkCardParams[] = [
    {
      href: "/the-breach",
      icon: <NewspaperIcon />,
      title: "The Breach",
      description: "Read up on the breaking news without breaking any firewalls."
    },
    {
      href: "/phishing-school",
      icon: <SchoolIcon />,
      title: "Phishing School",
      description: "Hook, line, and sinker! Learn how to protect yourself from evildoers."
    },
    {
      href: "/rate-a-risk",
      icon: <RateReviewIcon />,
      title: "Rate-A-Risk",
      description: "Check out what's hot - and what's not - with regards to cybersecurity."
    },
    {
      href: "/tech-threads",
      icon: <ForumIcon />,
      title: "Tech Threads",
      description: "See what the community has to say about various topics."
    }
  ]

  return (
    <div className="grid text-center lg:max-w-6xl lg:w-full lg:mb-0 grid-cols-2 lg:grid-cols-4 lg:text-left">
      {cards.map((c, i) =>
        <LinkCard
          key={i}
          href={c.href}
          title={c.title}
          icon={c.icon}
          description={c.description}
        />
      )}
    </div>
  )
}