import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Home.css";
import Kiwi from "../../assets/Kiwi.jpg";
import Lemon from "../../assets/Lemon.jpg";
import Mandarin from "../../assets/Mandarin.jpg";
import Pineapple from "../../assets/Pineapple.jpg";
import banana_men from "../../assets/banana_men.png";
import Pineapple_men from "../../assets/Pineapple_men.jpg";
import lub from "../../assets/lub.jpg";
import homeFruits from "../../assets/homeFruits.png";
import iconHeart from "../../assets/iconHeart.png";
import Cup from "../../assets/Cup.png";
import png_pineapple from "../../assets/png_pineapple.png";
import png_banana from "../../assets/png_banana.png";
import apple_men from "../../assets/apple_men.png";
import pineapple_men from "../../assets/pineapple_men.png";
import pineappleHomeSection from "../../assets/sliced-pineapple-with-juice.jpg";
import png_apple from "../../assets/png_apple.png";
function Home() {
  const delay = 2500;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const refBanana = React.useRef(null);
  const refApple = React.useRef(null);
  const refPineapple = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function handleScroll(id) {
    if (id == 1) refPineapple.current?.scrollIntoView({ behavior: "smooth" });
    else if (id == 2) refBanana.current?.scrollIntoView({ behavior: "smooth" });
    else refApple.current?.scrollIntoView({ behavior: "smooth" });
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === sliderMenu.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  const sliderMenu = [
    {
      id: 1,
      title: "Pineapple",
      content: "Find More",
      img: "pineapple_men",
    },
    {
      id: 2,
      title: "Banana",
      content: "Find More",
      img: "banana_men",
    },
    {
      id: 3,
      title: "Apple",
      content: "Find More",
      img: "apple_men",
    },
  ];

  const content = sliderMenu.map((post) => (
    <div
      className="my-4 inline-block items-center text-center w-full h-full whitespace-normal"
      key={post.id}
    >
      <h1 className="text-2xl">{post.title}</h1>
      <img
        className="m-auto w-60 h-60"
        src={require("../../assets/" + post.img + ".png")}
      />
      <button
        onClick={() => handleScroll(post.id)}
        className="my-4 hover:bg-gray-300 hover:font-bold rounded-full p-2 border-2 bg-white "
      >
        {post.content}
      </button>
    </div>
  ));
  return (
    <div className="p-4">
      <section className="flex flex-col items-center text-center lg:w-1/2 lg:m-auto">
        {/*First section */}
        <div className="text-center p-7">
          <h3 className="text-2xl font-bold py-5">Focus on whole fruits.</h3>
          <h1 className=" text-4xl font-bold py-5">
            What foods are in the Fruit Group
          </h1>
          <p className=" text-lg py-5">
            Any fruit or 100% fruit juice counts as part of the Fruit Group.
            Fruits may be fresh, frozen, canned, or dried/dehydrated, and may be
            whole, cut-up, pureed, or cooked. At least half of the recommended
            amount of fruit should come from whole fruit, rather than 100% fruit
            juice.
          </p>
        </div>
        <div className="flex flex-col items-center text-center py-10 px-7 w-full  lg:flex-row lg:justify-between">
          <div className="p-7">
            <img src={iconHeart} className="h-14 m-auto" />
            <h3 className="text-xl font-bold">
              Why is it important
              <br /> to eat fruits?
            </h3>
            <div className="my-4">
              <HashLink
                className="text-lg text-green-underline underline cursor-pointer"
                smooth
                to="/fruit-dose#heart"
              >
                Learn More
              </HashLink>
            </div>
          </div>
          <div className="p-7">
            <img src={Cup} className="h-14 m-auto" />
            <h3 className="text-xl font-bold ">
              How much fruit <br /> do you need?
            </h3>
            <div className="my-4">
              <HashLink
                className="text-lg text-green-underline underline cursor-pointer"
                smooth
                to="/fruit-dose#cup"
              >
                Learn More
              </HashLink>
            </div>
          </div>
        </div>
      </section>
      {/*End First section */}

      <section className="my-5">
        {/*Second section slider images */}
        <h1 className="text-3xl font-bold text-center">
          Facts About Fruit Juice
        </h1>
        {/*Images slider logic */}
        <div className="flex flex-col justify-center overflow-hidden text-center w-full">
          <div
            className="whitespace-nowrap"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {content}
          </div>
          <div className="text-center">
            {" "}
            {sliderMenu.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>
      {/*End Second section slider images */}

      <section className="my-5 ">
        {/*Thirt section */}
        <div className="w-full p-7 flex flex-col items-center text-center lg:flex-row lg:m-auto lg:flex-wrap">
          <div className="flex flex-col items-center lg:w-1/2">
            <h1 className="text-2xl font-bold text-center">
              Whats counts as a <br /> cup of fruit?
            </h1>
            <p className="text-lg my-8 lg:w-1/2">
              In general, 1 cup of fruit or 100% fruit juice, or ½ cup of dried
              fruit can be considered as 1 cup from the Fruit Group. The table
              below shows specific amounts that count as 1 cup of fruit towards
              your daily recommended intake.
            </p>
          </div>

          <div className="flex flex-col items-center lg:w-1/2">
            <h1 className="text-2xl font-bold text-center">
              How much fruit is <br /> needed daily?
            </h1>
            <p className="text-lg my-8 lg:w-1/2">
              The amount of fruit you need to eat depends on your age, sex,
              height, weight, and level of physical activity. For women, the
              amount can also depend on whether you are pregnant or
              breastfeeding. Find the right amount for you by getting your
              MyPlate Plan. For general recommendations by age, see the table
              below.
            </p>
          </div>

          <div className="flex flex-col items-center lg:w-1/2">
            <h1 className="text-2xl font-bold text-center">
              Why is it important <br /> to eat fruit?
            </h1>
            <p className="text-lg my-8 lg:w-1/2">
              Eating fruit provides health benefits — people who eat more fruits
              and vegetables as part of an overall healthy diet are likely to
              have a reduced risk of some chronic diseases. Fruits provide
              nutrients vital for health and maintenance of your body.
            </p>
          </div>

          <div className="flex flex-col items-center lg:w-1/2">
            <h1 className="text-2xl font-bold text-center">
              Why is it important <br /> to eat fruit?
            </h1>
            <p className="text-lg my-8 lg:w-1/2">
              Eating fruit provides health benefits — people who eat more fruits
              and vegetables as part of an overall healthy diet are likely to
              have a reduced risk of some chronic diseases. Fruits provide
              nutrients vital for health and maintenance of your body.
            </p>
          </div>

          <div className="w-full justify-center">
            <img src={homeFruits} className="m-auto w-60 h-60" />
          </div>
        </div>
        {/*End thirt section */}
      </section>

      <section className="my-5 bg-grey-bg lg:w-1/2" ref={refPineapple}>
        {/*Fourt Section Fruits facts*/}
        <div className="relative">
          <h1 className="text-4xl font-bold overline decoration-yellow-600 py-4">
            Pineapple
          </h1>
          <div className="relative text-base">
            <div className="absolute left-0 -ml-0.5 w-0.5 h-full bg-gray-600"></div>
            <p className="m-4 text-lg lg:w-1/2">
              Eating fruits and vegetables of all types has long been associated
              with a reduced risk of many lifestyle-related health conditions.
              Many studies have suggested that increasing consumption of plant
              foods like pineapples decreases the risk of obesity, overall
              mortality, diabetes, and heart disease.
            </p>
          </div>
          <div className="m-4 lg:absolute lg:left-1/2">
            <div className="flex ">
              <div className="flex  bg-slate-200 w-28 h-28 justify-center items-center rounded-br-3xl">
                <p>Anti-Cancer</p>
              </div>
              <div className="flex bg-yellow-600 w-28 h-28 justify-center items-center rounded-br-3xl">
                Protect Teeth
              </div>
            </div>
            <div className="flex">
              <div className="flex bg-yellow-600 w-28 h-28 justify-center items-center rounded-br-3xl">
                Weight Loss
              </div>
              <div className="flex bg-slate-200  w-28 h-28 justify-center items-center rounded-br-3xl">
                Boost Immunity
              </div>
            </div>
          </div>
          <div className=" lg:w-1/2">
            <img src={png_pineapple} className="m-auto w-60 h-60" />
          </div>
          <div className="relative text-base">
            <div className="absolute left-0 -ml-0.5 w-0.5 h-full bg-gray-600"></div>
            <p className="m-4 text-lg lg:w-1/2">
              It also promotes a healthy complexion and hair, increased energy,
              and an overall lower weight. The following are possible benefits
              of eating pineapple.
            </p>
          </div>
        </div>
      </section>
      {/*end Four Section Fruits facts*/}

      <section
        className="my-4 bg-grey-bg flex lg:w-1/2 lg:relative lg:left-1/2"
        ref={refBanana}
      >
        {/*Five Section Fruits facts*/}
        <div className="relative">
          <h1 className="text-4xl font-bold overline decoration-yellow-300 py-4">
            Banana
          </h1>
          <div className="relative text-base">
            <div className="absolute left-0 -ml-0.5 w-0.5 h-full bg-gray-600"></div>
            <p className="m-4 text-lg lg:w-1/2">
              Did you know that in old English, the word “apple” meant “fruit”?
              Fruits are an indispensable part of a balanced diet and bananas
              are the most readily available and widely consumed fruit in the
              world.
            </p>
          </div>
          <div className="m-4 lg:absolute lg:left-1/2">
            <div className="flex ">
              <div className="flex  bg-slate-200 w-28 h-28 justify-center items-center rounded-br-3xl">
                <p>Reduces Stress</p>
              </div>
              <div className="flex bg-yellow-300 w-28 h-28 justify-center items-center rounded-br-3xl">
                Protein
              </div>
            </div>
            <div className="flex">
              <div className="flex bg-yellow-300 w-28 h-28 justify-center items-center rounded-br-3xl">
                Skin Conditions
              </div>
              <div className="flex bg-slate-200  w-28 h-28 justify-center items-center rounded-br-3xl">
                Prevent Anemia
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={png_banana} className="m-auto w-60 h-60" />
          </div>
          <div className="relative text-base">
            <div className="absolute left-0 -ml-0.5 w-0.5 h-full bg-gray-600"></div>
            <p className="m-4 text-lg lg:w-1/2">
              Bananas are packed with important nutrients that are needed for a
              healthy body and mind. In addition to being an excellent source of
              potassium, bananas also provide micronutrients like Vitamin A,
              Vitamin C, Vitamin B6, iron, magnesium and sodium.
            </p>
          </div>
        </div>
      </section>
      {/*end Five Section Fruits facts*/}

      <section className="my-4 bg-grey-bg lg:w-1/2" ref={refApple}>
        {/*Six Section Fruits facts*/}
        <div className="relative">
          <h1 className="text-4xl font-bold overline decoration-green-500 py-4">
            Apple
          </h1>
          <div className="relative text-base">
            <div className="absolute left-0 -ml-0.5 w-0.5 h-full bg-gray-600"></div>
            <p className="m-4 text-lg lg:w-1/2">
              Apples are the fruit of the tree known as Malus domestica. Today,
              many different types are grown worldwide, but they first
              originated in Asia thousands of years ago. In fact, they are
              considered to be perhaps the earliest tree to be cultivated by
              humans!
            </p>
          </div>
          <div className="m-4 lg:absolute lg:left-1/2">
            <div className="flex ">
              <div className="flex  bg-slate-200 w-28 h-28 justify-center items-center rounded-br-3xl">
                <p>Weight Loss</p>
              </div>
              <div className="flex bg-green-500 w-28 h-28 justify-center items-center rounded-br-3xl">
                Hydrates Skin
              </div>
            </div>
            <div className="flex">
              <div className="flex bg-green-500 w-28 h-28 justify-center items-center rounded-br-3xl">
                Brightnes Skin
              </div>
              <div className="flex bg-slate-200  w-28 h-28 justify-center items-center rounded-br-3xl">
                Heart Health
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={png_apple} className="m-auto w-60 h-60" />
          </div>
          <div className="relative text-base">
            <div className="absolute left-0 -ml-0.5 w-0.5 h-full bg-gray-600"></div>
            <p className="m-4 text-lg lg:w-1/2">
              What is the main nutrition found in apples? They’re are a good
              source of fiber, particularly the soluble, gelatinous
              polysaccharide called pectin that binds to cholesterol in the
              gastrointestinal tract and slows glucose absorption. They also
              provide a surprising amount of antioxidants.
            </p>
          </div>
        </div>
      </section>
      {/*end Six Section Fruits facts*/}
    </div>
  );
}

const slideshowDot = {
  display: "inline-block",
  height: "20px",
  width: "20px",
};

export default Home;
