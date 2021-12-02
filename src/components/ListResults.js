import { useState } from "react";
import Modal from "./Modal.js";
import Card from "./Card.js";

const ListResults = (props) => {
  const [items, showItems] = useState(false);

  return (
    <article>
      <div
        className={items ? "card active" : "card"}
        onClick={() => {
          showItems(true);
        }}
      >
        <Card
          country={props.country}
          standardName={props.standardName}
          year={props.year}
          category={props.category}
          scope={props.scope}
          showItems={showItems}
        />
      </div>
      <div>
        {items && (
          <Modal
            country={props.country}
            standardName={props.standardName}
            year={props.year}
            category={props.category}
            scope={props.scope}
            authority={props.authority}
            manufacturing={props.manufacturing}
            materialTop={props.materialTop}
            materialMiddle={props.materialMiddle}
            materialBottom={props.materialBottom}
            standardLink={props.standardLink}
            sizeLength={props.sizeLength}
            sizeWidth={props.sizeWidth}
            absorbency={props.absorbency}
            absorbencyRate={props.absorbencyRate}
            phValue={props.phValue}
            pHDeterminationTest={props.pHDeterminationTest}
            microbiologicalRequirement={props.microbiologicalRequirement}
            microbiologicalRequirementTesting={
              props.microbiologicalRequirementTesting
            }
            biocompatibility={props.biocompatibility}
            biocompatibilityTesting={props.biocompatibilityTesting}
            usageInstructions={props.usageInstructions}
            unitsPack={props.unitsPack}
            packaging={props.packaging}
            labelling={props.labelling}
            disposal={props.disposal}
            biodegradabilityCompostability={
              props.biodegradabilityCompostability
            }
            colorFastness={props.colorFastness}
            colorFastnessTest={props.colorFastnessTest}
            usageDurability={props.usageDurability}
            dryingTime={props.dryingTime}
            closeModal={showItems}
          />
        )}
      </div>
    </article>
  );
};

export default ListResults;
