import { useState } from "react";
import Details from "./Details";
import { detailType } from "./detailType";

interface SuggestionsListProps {
  loading: boolean;
  suggestions: string[];
  showSuggestions: boolean;
  userInput: string;
  compareList: detailType[];
  setShowSuggestions: React.Dispatch<React.SetStateAction<any>>;
  setUserInput: React.Dispatch<React.SetStateAction<any>>;
  setCompareList: React.Dispatch<React.SetStateAction<any>>;
}

const SuggestionsList = ({
  suggestions,
  showSuggestions,
  setShowSuggestions,

  compareList,
  setCompareList,
}: SuggestionsListProps) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<detailType>();

  const getDetails = (id: any) => {
    if (id) {
      fetch(`https://superheroapi.com/api.php/10223009321394258/${id}`)
        .then((response) => response.json())
        .then((json) => {
          let { durability, power, speed, strength } = json?.powerstats;
          let { gender, race, height, weight, eyeColor, hairColor } =
            json.appearance;

          let obj: detailType = {
            id: id,
            name: json.name,
            intelligence: json?.powerstats?.intelligence,
            strength: strength,
            speed: speed,
            durability: durability,
            power: power,
            fullName: json.biography["full-name"],
            birthPlace: json.biography["place-of-birth"],
            firstAppearance: json.biography["first-appearance"],
            gender: gender,
            race: race,
            height: height[0],
            weight: weight[0],
            eyeColor: eyeColor,
            hairColor: hairColor,
            occupation: json.work.occupation,
            publisher: json.publisher,
            image: json.image.url,
          };
          setData(obj);
        });
    }
  };

  const handleOpen = (id: any) => {
    getDetails(id);
    setOpen(true);
    setShowSuggestions(false);
  };

  return (
    <div className="div_suggestions">
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => {
            console.log(suggestion);
            let name = suggestion.split("-")[0];
            console.log(name);
            let id = suggestion.split("-")[1];
            console.log(id);
            return (
              <li
                key={suggestion + index}
                className="li_suggest"
                onClick={(event) => handleOpen(id)}
              >
                {name}
              </li>
            );
          })}
        </ul>
      )}
      {showSuggestions && suggestions.length == 0 && (
        <div className="no-suggestions">
          <em>No suggestions, you're on your own!</em>
        </div>
      )}

      {open && data && (
        <Details
          open={open}
          setOpen={setOpen}
          data={data}
          setCompareList={setCompareList}
          compareList={compareList}
        />
      )}
    </div>
  );
};

export default SuggestionsList;
