import { useMemo, useState } from "react";
import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";
import { Tab } from "../tab/tab";

const getSum = () => {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }

  return sum;
};

export const HeadphonesPage = ({ title }) => {
  const [activeHeadphoneId, setActiveHeadphoneId] = useState(headphones[0].id);

  const activeHeadphone = headphones.find(({ id }) => id === activeHeadphoneId);
  const result = useMemo(getSum, []);

  console.log(result);

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }

    setActiveHeadphoneId(id);
  };

  return (
    <div>
      <h1>{title}</h1>

      {headphones.map(({ name, id }) => (
        <Tab
          key={id}
          title={name}
          onClick={() => handleSetActiveHeadphoneId(id)}
          isActive={id === activeHeadphoneId}
        />
      ))}

      {activeHeadphone && (
        <>
          <Headphone
            key={activeHeadphone.id}
            name={activeHeadphone.name}
            brand={activeHeadphone.brand}
            reviews={activeHeadphone.reviews}
            codecs={activeHeadphone.codecs}
          />
          <Headphone
            key={activeHeadphone.id}
            name={activeHeadphone.name}
            brand={activeHeadphone.brand}
            reviews={activeHeadphone.reviews}
            codecs={activeHeadphone.codecs}
          />
          <Headphone
            key={activeHeadphone.id}
            name={activeHeadphone.name}
            brand={activeHeadphone.brand}
            reviews={activeHeadphone.reviews}
            codecs={activeHeadphone.codecs}
          />
          <Headphone
            key={activeHeadphone.id}
            name={activeHeadphone.name}
            brand={activeHeadphone.brand}
            reviews={activeHeadphone.reviews}
            codecs={activeHeadphone.codecs}
          />
        </>
      )}
    </div>
  );
};
