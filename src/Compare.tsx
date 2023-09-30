import * as React from "react";

import Button from "@mui/joy/Button";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { TableCell } from "@mui/material";
import { detailType } from "./detailType";

interface compareTypes {
  compareList: detailType[];
  setCompareList: React.Dispatch<React.SetStateAction<any>>;
}

function createData(name: string, array: string[]) {
  return {
    name,
    ...array,
  };
}

const createRows = (compareList: any) => {
  let name: string[] = [],
    fullName: string[] = [],
    gender: string[] = [],
    occupation: string[] = [],
    firstAppearance: string[] = [],
    height: string[] = [],
    weight: string[] = [],
    eyeColor: string[] = [],
    hairColor: string[] = [],
    intelligence: string[] = [],
    durability: string[] = [],
    strength: string[] = [],
    speed: string[] = [],
    power: string[] = [];

  compareList.map((item: any) => {
    name.push(item.name ? item.name : "-");
    fullName.push(item.fullName ? item.fullName : "-");
    occupation.push(item.occupation ? item.occupation : "-");
    gender.push(item.gender ? item.gender : "-");
    height.push(item.height ? item.height : "-");
    weight.push(item.weight ? item.weight : "-");
    firstAppearance.push(item.firstAppearance ? item.firstAppearance : "-");
    intelligence.push(item.intelligence ? item.intelligence : "-");
    durability.push(item.durability ? item.durability : "-");
    strength.push(item.strength ? item.strength : "-");
    speed.push(item.speed ? item.speed : "-");
    power.push(item.power ? item.power : "-");
  });

  let rows = [
    createData("Name", name),
    createData("Full Name", fullName),
    createData("Gender", gender),
    // createData("Occupation", occupation),
    // createData("First Appearance", firstAppearance),
    createData("Height", height),
    createData("Weight", weight),
    createData("Eye color", eyeColor),
    createData("Hair color", hairColor),
    createData("Intelligence", intelligence),
    createData("Speed", speed),
    createData("Durability", durability),
    createData("Strength", strength),
    createData("Power", power),
  ];

  return rows;
};

export default function Compare({ compareList, setCompareList }: compareTypes) {
  const [stripe, setStripe] = React.useState("odd");
  const [load, setLoad] = React.useState(false);

  const rows = createRows(compareList);

  React.useEffect(() => {
    setLoad(true);
  }, [compareList]);
  const handleRemove = (id: any) => {
    let updatedData = compareList.filter((item) => item.id != id);
    setCompareList(updatedData);
  };
  return (
    <section id="compare" className="compare">
      <Sheet>
        <Table
          aria-label="striped table"
          sx={(theme) => ({
            bgcolor: "white",
          })}
        >
          <TableCell />
          {compareList.map((row: any, index) => (
            <TableCell>
              <Button
                sx={{
                  ml: 12,
                  bgcolor: "#007F82",
                  "&:hover": { bgcolor: "#00A8A8" },
                  "@media screen and (max-width: 750px)": {
                    ml: 0,
                    p: 1,
                    fontSize: "x-small",
                    fontWeight: "normal",
                  },
                  "@media screen and (max-width: 500px)": {
                    ml: 0,
                    p: 1,
                    fontSize: "x-small",
                    fontWeight: "normal",
                  },
                }}
                onClick={(event) => handleRemove(row.id)}
              >
                Remove
              </Button>
            </TableCell>
          ))}
          <tbody>
            {rows.map((row: any, index) => (
              <tr key={row.name}>
                <td>
                  <b>{row.name}</b>
                </td>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
                <td>{row[5]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </section>
  );
}
