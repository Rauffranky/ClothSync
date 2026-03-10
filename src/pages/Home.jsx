import { Helmet } from "@dr.pogodin/react-helmet";
import Button from "../components/UI/button";
import { useState } from "react";
import { SmartSelect } from "../components/UI/Form/Dropdown";
import HomeSection from "../section/Manager Dashboard/Home";

export default function HomePage() {
  const demoOptions = [
    { label: "Alpha", value: "alpha" },
    { label: "Beta", value: "beta" },
    { label: "Gamma (disabled)", value: "gamma", disabled: true },
    { label: "Delta", value: "delta" },
    { label: "Epsilon", value: "epsilon" },
    { label: "Zeta", value: "zeta" },
    { label: "Eta", value: "eta" },
    { label: "Theta", value: "theta" },
  ];

  const [single, setSingle] = useState(null);
  const [multi, setMulti] = useState(["alpha", "delta"]);
  return (
    <>
      <Helmet>
        <title>Home | My App</title>
        <meta name="description" content="This is the home page." />
      </Helmet>
      <HomeSection />

      <Button label="Learn More" variant="primary" />
      <div className="space-y-4">
        <SmartSelect
          options={demoOptions}
          value={single}
          onChange={setSingle}
          placeholder="Pick one"
          className=""
          name="single"
        />

        <SmartSelect
          multiple
          options={demoOptions}
          value={multi}
          onChange={setMulti}
          placeholder="Pick some options"
          className="w-full"
          name="multi[]"
        />
      </div>
    </>
  );
}
