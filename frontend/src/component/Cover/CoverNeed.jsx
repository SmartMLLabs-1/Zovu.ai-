import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CoverNeed = () => {
  return (
    <div className="bg-[#EFF6FE] py-16 px-4">
      <div className="max-w-[1400px] mx-auto text-center">
        <div className="max-w-[800px] mx-auto text-center pb-20">
          <h2 className="text-3xl font-bold mb-4 text-left text-[#1F284F]">
            Why Write a Professional Cover Letter?
          </h2>
          <p className="text-lg mb-6 max-w-[800px] mx-auto text-left text-[#575757]">
            A well-crafted cover letter is your chance to make a great first
            impression and set yourself apart from other candidates. Here are a
            few key reasons why you need a professional cover letter:
          </p>
          <div className="max-w-[800px] mx-auto mb-6 text-left">
            <p className="text-lg mb-2 text-[#575757]">
              <strong className="text-[#1F284F]">
                Personalizes Your Application:
              </strong>{" "}
              A cover letter allows you to introduce yourself and explain why
              you are interested in the position.
            </p>
            <p className="text-lg mb-2 text-[#575757]">
              <strong className="text-[#1F284F]">
                Highlights Your Qualifications:
              </strong>{" "}
              It provides an opportunity to emphasize your most relevant skills
              and experiences.
            </p>
            <p className="text-lg mb-2 text-[#575757]">
              <strong className="text-[#1F284F]">Shows Your Enthusiasm:</strong>{" "}
              Demonstrates your interest in the role and the company, showing
              that you are genuinely motivated to join the team.
            </p>
          </div>
          <div className="max-w-[800px] mx-auto text-left">
            <button className="bg-[#0070F0] text-white py-2 px-4 rounded-[30px] mb-8">
              Start Now
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-around items-center mb-16">
          <div className="flex flex-col items-center">
            <img
              src="/cover/input.webp"
              alt="Step 1"
              className="w-40 h-40 md:w-64 md:h-64 object-contain rounded-md mb-2"
            />
            <div className="bg-[#3CBA79] text-white w-10 h-10 rounded-full flex items-center justify-center mb-2">
              1
            </div>
            <p className="text-center">Input Your Information</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/cover/preferences.webp"
              alt="Step 2"
              className="w-40 h-40 md:w-64 md:h-64 object-contain rounded-md mb-2"
            />
            <div className="bg-[#3CBA79] text-white w-10 h-10 rounded-full flex items-center justify-center mb-2">
              2
            </div>
            <p className="text-center">Adjust to Your Preferences</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/cover/adjust.webp"
              alt="Step 3"
              className="w-40 h-40 md:w-64 md:h-64 object-contain rounded-md mb-2"
            />
            <div className="bg-[#3CBA79] text-white w-10 h-10 rounded-full flex items-center justify-center mb-2">
              3
            </div>
            <p className="text-center">Personalize Your Layout</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/cover/review.webp"
              alt="Step 4"
              className="w-40 h-40 md:w-64 md:h-64 object-contain rounded-md mb-2"
            />
            <div className="bg-[#3CBA79] text-white w-10 h-10 rounded-full flex items-center justify-center mb-2">
              4
            </div>
            <p className="text-center">Review and Download</p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden ">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            interval={4000}
            transitionTime={500}
            showIndicators={false}
            swipeable={true}
            renderIndicator={(clickHandler, isSelected, index, label) => (
              <li
                style={{
                  marginTop: "20px",
                  background: isSelected ? "#3CBA79" : "#ccc",
                  width: 10,
                  height: 10,
                  display: "inline-block",
                  borderRadius: "50%",
                  margin: "0 8px",
                  cursor: "pointer",
                }}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              />
            )}
          >
            <div className="flex flex-col items-center">
              <img
                src="/cover/input.webp"
                alt="Step 1"
                className="w-80 h-80 object-contain rounded-md mb-2"
              />
              <div className="bg-[#3CBA79] text-white w-10 h-10 rounded-full flex items-center justify-center mb-2">
                1
              </div>
              <p className="text-center">Input Your Information</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/cover/preferences.webp"
                alt="Step 2"
                className="w-80 h-80 object-contain rounded-md mb-2"
              />
              <div className="bg-[#3CBA79] text-white w-10 h-10 rounded-full flex items-center justify-center mb-2">
                2
              </div>
              <p className="text-center">Adjust to Your Preferences</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/cover/adjust.webp"
                alt="Step 3"
                className="w-80 h-80 object-contain rounded-md mb-2"
              />
              <div className="bg-[#3CBA79] text-white w-10 h-10 rounded-full flex items-center justify-center mb-2">
                3
              </div>
              <p className="text-center">Personalize Your Layout</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/cover/review.webp"
                alt="Step 4"
                className="w-80 h-80 object-contain rounded-md mb-2"
              />
              <div className="bg-[#3CBA79] text-white w-10 h-10 rounded-full flex items-center justify-center mb-2">
                4
              </div>
              <p className="text-center">Review and Download</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CoverNeed;
