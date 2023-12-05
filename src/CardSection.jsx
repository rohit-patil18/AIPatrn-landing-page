// import React from "react";
import Card from "./Card";
import bgCard1 from "./assets/images/card-1.jpg";
import bgCard2 from "./assets/images/card-2.jpg";
import bgCard3 from "./assets/images/card-3.jpg";
import person1 from "./assets/images/person-1.jpg";
import person2 from "./assets/images/person-2.jpg";
import person3 from "./assets/images/person-3.jpg";
import redirect from "./assets/icons/arrow_down_right_icon.svg";
import bird from "./assets/icons/bird.svg";
import Avatar from "./Avatar";
import GoToLink from "./GoToLink";

function CardSection() {
  return (
    <section className="flex gap-2 text-gray-50">
      <Card className="flex-1" number="01" bgImage={bgCard1}>
        <section>
          <div className="flex relative mb-12">
            <Avatar bgImage={person1} />
            <Avatar bgImage={person2} className="left-8" />
            <Avatar bgImage={person3} className="left-16" />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl">Learn from best mentors</h4>
            <button className="flex py-2 px-3 border border-gray-50 rounded-full text-sm items-center w-fit">
              <p className="text-white">START LEARNING</p>
              <img src={redirect} alt="start learning" />
            </button>
          </div>
        </section>
      </Card>
      <Card className="flex-1" number="02" bgImage={bgCard2}>
        <div>
          <GoToLink text="Free Edit" />
          <GoToLink text="Interactive" />
          <GoToLink text="Easy interface" />
          <GoToLink text="Compare to other" />
        </div>
      </Card>
      <Card className="flex-2" number="03" bgImage={bgCard3}>
        <div className="flex px-8 items-center">
          <h4 className="text-7xl">+20K</h4>
          <p className="text-2xl px-10">
            Glass Pattern generated this week in the first release.
          </p>
          <div>
            <img src={bird} alt="icon" className="w-5" />
            <img src={bird} alt="icon" className="w-5" />
          </div>
        </div>
      </Card>
    </section>
  );
}

export default CardSection;
