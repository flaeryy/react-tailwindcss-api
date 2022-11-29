import React, { useState } from "react";
import fatherDaugther from "../../assets/fatherDaugther.jpg";
import whyImportant from "../../assets/whyImportant.jpg";
import healthBenefits from "../../assets/healthBenefits.jpg";

function FruitDose() {
  document.title = "Fruits | FruitDose";
  return (
    <div>
      <section className="flex flex-col lg:m-auto lg:w-2/3 lg:flex-row-reverse py-10 m-4">
        <div className="lg:w-1/2">
          <img src={healthBenefits} className="max-w-full m-auto" />{" "}
        </div>
        <div className="px-3 py-6 lg:w-1/2">
          <h1 className="text-3xl font-bold my-4">Health Benefits</h1>
          <p className="text-lg my-4">
            All food and beverage choices matter. Focus on variety, amount, and
            nutrition.
          </p>
          <ul className="ml-4 text-lg list-disc">
            <li>
              Eating foods such as fruits that are lower in calories per cup,
              instead of other higher calorie foods, may help lower overall
              calorie intake.
            </li>
            <li>
              Eating a diet rich in fruits and vegetables as part of an overall
              healthy diet may reduce the risk for heart disease, including
              heart attack and stroke.
            </li>
            <li>
              Eating a diet rich in fruits and vegetables as part of an overall
              healthy diet may protect against certain types of cancers.
            </li>
            <li>
              Adding fruit can help increase the amount of fiber and potassium
              we eat. These are important nutrients that many people do not get
              enough of.
            </li>
          </ul>
        </div>
      </section>

      <section id="cup" className="bg-life-stages-bg dark:bg-slate-500  py-20">
        <div className="flex flex-col lg:flex-row lg:w-full justify-center">
          <div className="lg:w-1/2">
            <img src={fatherDaugther} className="m-auto max-w-full" />
          </div>
          <div className="relative bg-white dark:bg-slate-700 m-5 px-3 py-6 lg:w-1/3 lg:right-40">
            <h1 className="text-3xl font-bold my-4">
              How much fruit should I eat each day?
            </h1>
            <p className="text-lg my-4">
              Your fruit needs depend on your age, sex, height, weight, and
              physical activity. This amount can also depend on whether you are
              pregnant or breastfeeding. Find the right amount for you by
              getting your MyPlate Plan. For general guidance by age, see the
              table below.
            </p>
            <h1 className="text-3xl font-bold my-4">
              What counts as a cup of fruit?
            </h1>
            <p className="text-lg my-4">
              In general, the following counts as 1 cup from the Fruit Group:
            </p>
            <ul className="ml-4 text-lg list-disc">
              <li>1 cup of fruit ½ cup of dried fruit</li>
              <li>½ cup of dried fruit</li>
              <li>1 cup of 100% fruit juice</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="heart"
        className="bg-life-stages-bg dark:bg-slate-500 flex flex-col w-full lg:flex-row-reverse py-20"
      >
        <div className="lg:w-1/2">
          <img src={whyImportant} className="m-auto w-full" />
        </div>
        <div className="m-5 px-3 py-6 lg:w-1/3">
          <h1 className="text-3xl font-bold my-4">
            Why is it important to eat fruit?
          </h1>
          <p className="text-lg my-4">
            Fruit is nutritious, colorful and flavorful. Most fruits are
            naturally low in fat, sodium and calories. Fruit provides many
            essential nutrients that often are underconsumed, including vitamins
            C and A and folate, as well as potassium and dietary fiber. Eating
            more fiber-rich, low-calorie fresh fruit in place of higher-calorie
            foods can help decrease your overall calorie intake. Eating fruit
            has many health benefits. People who eat fruits and vegetables as
            part of an overall diet may lower their risk for certain diseases.
            Fruits provide nutrients needed to maintain your health and body.
            Whole or cut-up fruits are sources of dietary fiber, but fruit juice
            provides little to no fiber. Make most of your choices whole or
            cut-up fruit for the benefits dietary fiber provides. Eating enough
            fiber can help with weight management, and can help prevent chronic
            diseases, including heart disease and diabetes. Many fruits provide
            “soluble fiber” that can help reduce blood cholesterol levels and
            decrease the risk of heart disease when paired with an overall
            healthful diet. Fiber-rich foods help give you a feeling of fullness
            while providing fewer calories. Adequate fiber in your diet may
            reduce constipation and promote healthful gut bacteria.
          </p>
        </div>
      </section>
    </div>
  );
}

export default FruitDose;
