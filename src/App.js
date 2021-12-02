import "./styles.css";
import React, { useState } from "react";
import Data from "./components/Data.json";
import Data2 from "./components/Data2.json";
import ListResults from "./components/ListResults";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [dataSource, changeDataSource] = useState(Data);
  const [title, changeTitle] = useState("Disposable Standards");
  const [buttonTitle, changbuttonTitle] = useState("Reusable Standards");

  function handleDataSource() {
    if (dataSource === Data) {
      changeDataSource(Data2);
      changeTitle("Reusable Standards");
      changbuttonTitle("Disposable Standards");
    } else {
      changeDataSource(Data);
      changeTitle("Disposable Standards");
      changbuttonTitle("Reusable Standards");
    }
  }

  const results = !searchTerm
    ? dataSource
    : dataSource.filter(
        (item) =>
          item.country.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          item.year.toString().includes(searchTerm) ||
          item.scope.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          item.standardName
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="xl">
            Search through <span className="switch-source">{title}</span> for
            menstrual health products
          </h1>

          <button className="switch-button" onClick={() => handleDataSource()}>
            <FontAwesomeIcon icon={faExchangeAlt} /> Want to search through{" "}
            {buttonTitle} instead?
          </button>
          <input
            onChange={handleChange}
            value={searchTerm}
            type="search"
            name="search"
            id="search"
            placeholder="Search by name of standard, organization, scope or year"
            className="search-box"
          ></input>
        </div>
      </header>
      <main className="list">
        <section className="container">
          {results
            .sort(function (a, b) {
              if (a.country.toLowerCase() < b.country.toLowerCase()) return -1;
              if (a.country.toLowerCase() > b.country.toLowerCase()) return 1;
              return 0;
            })
            .map((item, key) => {
              return (
                <ListResults
                  key={key}
                  standardName={item.standardName}
                  country={item.country}
                  category={item.category}
                  year={item.year}
                  authority={item.authority}
                  manufacturing={item.manufacturing}
                  scope={item.scope}
                  standardLink={item.standardLink}
                  materialTop={item.materialTop}
                  materialMiddle={item.materialMiddle}
                  materialBottom={item.materialBottom}
                  sizeLength={item.sizeLength}
                  sizeWidth={item.sizeWidth}
                  absorbency={item.absorbency}
                  absorbencyRate={item.absorbencyRate}
                  phValue={item.phValue}
                  pHDeterminationTest={item.pHDeterminationTest}
                  microbiologicalRequirement={item.microbiologicalRequirement}
                  microbiologicalRequirementTesting={
                    item.microbiologicalRequirementTesting
                  }
                  biocompatibility={item.biocompatibility}
                  biocompatibilityTesting={item.biocompatibilityTesting}
                  usageInstructions={item.usageInstructions}
                  unitsPack={item.unitsPack}
                  packaging={item.packaging.split("\n").map((t, key) => (
                    <p key={key}>{t}</p>
                  ))}
                  labelling={item.labelling}
                  disposal={item.disposal}
                  biodegradabilityCompostability={
                    item.biodegradabilityCompostability
                  }
                  colorFastness={item.colorFastness}
                  colorFastnessTest={item.colorFastnessTest}
                  usageDurability={item.usageDurability}
                  dryingTime={item.dryingTime}
                />
              );
            })}
        </section>
      </main>
    </>
  );
}
