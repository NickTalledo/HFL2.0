import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 justify-items-center pt-10">
        <div className="text-center md:text-left md:pl-16">
          <p className="text-5xl font-bold mx-4">A little about us</p>
          <br />
          <p className="mx-4">
            Welcome to our vibrant and passionate flag football league!
            We&apos;re a group of friends who decided to take our love for
            football to another level, creating an exciting space where we could
            compete, build bonds, and make unforgettable memories. This league
            was born out of our collective desire to stay active, embrace the
            spirit of sportsmanship, and nurture our shared love for the game of
            football.
            <br />
            <br />
            A special thanks goes to our founder, Nick Belli, whose leadership,
            determination, and drive was the cornerstone of this league&apos;s
            inception. His vision of creating a fun-filled and engaging
            community is a testament to his dedication and love for flag
            football. From its humble beginnings, our league has now grown into
            a lively community, fostering camaraderie, competition, and above
            all, a passion for football. We are proud to say that every yard
            gained and every touchdown scored, has been the result of our
            collective effort.
            <br />
            <br />
            As we move forward, we hold onto our foundational spirit of
            friendship, competition, and love for the game. We&apos;re thrilled
            to be back, celebrating the spirit of flag football, fostering
            community connections, and igniting the competitive spark that makes
            this game so exciting. Whether you&apos;re a seasoned veteran, a
            rookie player, or a supportive fan, we&apos;re glad you&apos;re
            here. This season promises nail-biting matches, sportsmanship at its
            finest, and above all, an amazing time on and off the field. We
            invite you to join us in this journey filled with athletic prowess,
            teamwork, and plenty of thrilling moments. Let&apos;s make this
            season the best one yet! Welcome to our league, and here&apos;s to
            many more seasons of fantastic flag football!
          </p>
          <br />
        </div>
        <div className="mx-4 flex justify-center items-center lg:mb-0 mb-2">
          <video className="w-full h-auto" controls>
            <source src="/Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Layout>
  );
}

export default About;
