interface AboutProps {
  location : string,
  contact : number,
  map? : string,
  featured? : boolean
}

// २. Component (नयाँ तरिका - No React.FC)
const About = ({ location, contact, map, featured }: AboutProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
      {/* यदि featured को भ्यालु true छ भने नामको अगाडि स्टार (★) देखिन्छ */}
      <h1>
        ourshot location is: {location} {featured && "★"}
      </h1>
      
      <p>out contact number is {contact}</p>
      
      {/* यदि map प्रप पठाइएको छ भने मात्र यो लाइन देखिन्छ */}
      {map && <p>we do have map available: {map}</p>}
    </div>
  );
};
 export default About
  