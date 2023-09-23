import { useState } from "react";
import SuggestionsList from "./SuggestionsList";
import "./Search.css";
const debounce = require("lodash.debounce");

type detailType = {
  id: string;
  name: string;
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  fullName: string;
  birthPlace: string;
  firstAppearance: string;
  gender: string;
  race: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
  occupation: string;
  publisher: string;
  image: string;
};

interface searchTypes {
  compareList: detailType[];
  setCompareList: React.Dispatch<React.SetStateAction<any>>;
}
const Search = ({ compareList, setCompareList }: searchTypes) => {
  const [userInput, setUserInput] = useState<string>();
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const getApiSuggestions = async (userInput: string) => {
    let strResponse: string[] = [];
    if (userInput) {
      setLoading(true);
      fetch(
        `https://superheroapi.com/api.php/10223009321394258/search/${userInput}`
      )
        .then((response) => response.json())
        .then((json) => {
          if (json?.results) {
            json.results.map((item: any) => {
              strResponse.push(item.name + "-" + item.id);
            });
          }
          setOptions(strResponse);
          setLoading(false);
          setShowSuggestions(true);
        });
    }
  };

  const debouncedSave = debounce(
    (input: any) => getApiSuggestions(input),
    1000
  );

  const updateUserInput = (input: string) => {
    setUserInput(input);
    debouncedSave(input);
  };

  return (
    <section id="search" className="search">
      <div className="search_main">
        {" "}
        <input
          type="text"
          placeholder="Search your Superheroes here!!"
          onChange={(event) => updateUserInput(event.target.value)}
          className="input"
          value={userInput}
        ></input>
        {userInput && (
          <SuggestionsList
            loading={loading}
            suggestions={options}
            userInput={userInput}
            showSuggestions={showSuggestions}
            setShowSuggestions={setShowSuggestions}
            setUserInput={setUserInput}
            compareList={compareList}
            setCompareList={setCompareList}
          ></SuggestionsList>
        )}
      </div>
    </section>
  );
};

export default Search;
