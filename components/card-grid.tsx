import LinkCard from "./link-card";

export default function CardGrid() {
  return (
    <div className="grid text-center lg:max-w-6xl lg:w-full lg:mb-0 grid-cols-2 lg:grid-cols-4 lg:text-left">
      <LinkCard 
        href='/the-breach'
        title='The Breach'
        description='Read up on the breaking news without breaking any firewalls.'
      />
      <LinkCard 
        href='/phishing-school'
        title='Phishing School'
        description='Hook, line, and sinker! Learn how to protect yourself from evildoers!'
      />
      <LinkCard 
        href='/rate-a-tech'
        title='Rate-A-Tech'
        description=''
      />
      <LinkCard 
        href='/forums'
        title='Forums'
        description='Check out the code that runs the show behind the scenes.'
      />
    </div>
  )
}