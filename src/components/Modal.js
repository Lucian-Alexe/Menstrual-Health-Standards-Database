import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faExternalLinkSquareAlt,
  faPrint
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Modal = ({
  country,
  standardName,
  year,
  category,
  scope,
  authority,
  manufacturing,
  materialTop,
  materialMiddle,
  materialBottom,
  closeModal,
  standardLink,
  sizeLength,
  sizeWidth,
  absorbency,
  absorbencyRate,
  phValue,
  pHDeterminationTest,
  microbiologicalRequirement,
  microbiologicalRequirementTesting,
  biocompatibility,
  biocompatibilityTesting,
  usageInstructions,
  unitsPack,
  packaging,
  labelling,
  disposal,
  biodegradabilityCompostability,
  colorFastness,
  colorFastnessTest,
  usageDurability,
  dryingTime
}) => {
  const printModal = () => {
    let divContents = document.getElementById("modal").innerHTML;
    let a = window.open("", "", "max-height=100%, max-width=100%");
    a.document.write(
      "<html><head><style>.noPrint{display:none}</style></head><body style='font-family:Montserrat, sans-serif;' class='printWindow'>"
    );
    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.close();
    a.print();
  };

  const errorWord = <span className="errorWord">Not Available</span>;

  const errorWordReusable = (
    <span className="errorWord">
      Not Applicable - Reusable product criteria
    </span>
  );

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  });

  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <header className="modal-header">
          <div className="modal-header-left">
            <h1>{country}</h1>
            <h2>
              <span className="bold dark-blue">Standard Name:</span>{" "}
              {standardName}
            </h2>
            <h2>
              <span className="bold dark-blue">Authority:</span> {authority}
            </h2>
            <div className="modal-header-meta">
              <p>
                <span>Year:</span> {year} • <span>Category:</span> {category} •{" "}
                <span>Scope:</span> {scope}
              </p>
              <p>
                {standardLink !== "" ? (
                  <a
                    href={standardLink}
                    target="_blank"
                    rel="noreferrer"
                    className="noPrint modal-header-buttons modal-header-buttons-blue"
                  >
                    <FontAwesomeIcon icon={faExternalLinkSquareAlt} /> Link to
                    standard
                  </a>
                ) : null}
                <button
                  className="noPrint noMobile modal-header-buttons modal-header-buttons-white"
                  onClick={() => printModal()}
                >
                  <FontAwesomeIcon icon={faPrint} /> Print
                </button>
              </p>
            </div>
          </div>
          <div className="modal-header-right">
            <button
              className="close-button noPrint"
              onClick={() => closeModal()}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </header>
        <section className="modal-body">
          <div className="modal-body-section">
            <h3>Manufacturing</h3>
            {manufacturing !== "" ? <p>{manufacturing}</p> : <p>{errorWord}</p>}
          </div>
          <div className="modal-body-section">
            <h3>Materials</h3>
            <div className="modal-body-row">
              <div className="modal-body-col">
                <h4>Top Material:</h4>
                {materialTop !== "" ? <p>{materialTop}</p> : <p>{errorWord}</p>}
              </div>
              <div className="modal-body-col">
                <h4>Middle Material:</h4>
                {materialMiddle !== "" ? (
                  <p>{materialMiddle}</p>
                ) : (
                  <p>{errorWord}</p>
                )}
              </div>
              <div className="modal-body-col">
                <h4>Bottom Material:</h4>
                {materialBottom !== "" ? (
                  <p>{materialBottom}</p>
                ) : (
                  <p>{errorWord}</p>
                )}
              </div>
            </div>
          </div>

          <div className="modal-body-section">
            <div className="modal-body-row">
              <div className="modal-body-col">
                <h3>Size</h3>
                <h4>Size Length</h4>
                {sizeLength !== "" ? <p>{sizeLength}</p> : <p>{errorWord}</p>}
                <h4>Size Width</h4>
                {sizeWidth !== "" ? <p>{sizeWidth}</p> : <p>{errorWord}</p>}
              </div>
              <div className="modal-body-col">
                <h3>Absorbency</h3>
                <h4>Absorbency</h4>
                {absorbency !== "" ? <p>{absorbency}</p> : <p>{errorWord}</p>}
                <h4>Absorbency Rate</h4>
                {absorbencyRate !== "" ? (
                  <p>{absorbencyRate}</p>
                ) : (
                  <p>{errorWord}</p>
                )}
              </div>
              <div className="modal-body-col">
                <h3>ph</h3>
                <h4>ph Value</h4>
                {phValue !== "" ? <p>{phValue}</p> : <p>{errorWord}</p>}
                <h4>ph Test</h4>
                {pHDeterminationTest !== "" ? (
                  <p>{pHDeterminationTest}</p>
                ) : (
                  <p>{errorWord}</p>
                )}
              </div>
            </div>
          </div>

          <div className="modal-body-section">
            <div className="modal-body-row">
              <div className="modal-body-col">
                <h3>Microbiological</h3>
                <h4>Microbiological Requirement</h4>
                {microbiologicalRequirement !== "" ? (
                  <p>{microbiologicalRequirement}</p>
                ) : (
                  <p>{errorWord}</p>
                )}
                <h4>Microbiological Testing</h4>
                {microbiologicalRequirementTesting !== "" ? (
                  <p>{microbiologicalRequirementTesting}</p>
                ) : (
                  <p>{errorWord}</p>
                )}
              </div>
              <div className="modal-body-col">
                <h3>Biocompatibility</h3>
                <h4>Biocompatibility</h4>
                {biocompatibility !== "" ? (
                  <p>{biocompatibility}</p>
                ) : (
                  <p>{errorWord}</p>
                )}
                <h4>Biocompatibility Testing</h4>
                {biocompatibilityTesting !== "" ? (
                  <p>{biocompatibilityTesting}</p>
                ) : (
                  <p>{errorWord}</p>
                )}
              </div>
              <div className="modal-body-col">
                <h3>Color Fastness</h3>
                <h4>Color Fastness</h4>
                {colorFastness !== undefined ? (
                  <p>{colorFastness}</p>
                ) : (
                  <p>{errorWordReusable}</p>
                )}
                <h4>Color Fastness Test</h4>
                {colorFastness !== undefined ? (
                  <p>{colorFastnessTest}</p>
                ) : (
                  <p>{errorWordReusable}</p>
                )}
              </div>
            </div>
          </div>

          <div className="modal-body-section">
            <div className="modal-body-row">
              <div className="modal-body-col">
                <h3>Packaging</h3>
                <h4>Units/Pack</h4>
                {unitsPack !== "" ? <p>{unitsPack}</p> : <p>{errorWord}</p>}
                <h4>Packaging</h4>
                {packaging !== "" ? <p>{packaging}</p> : <p>{errorWord}</p>}
              </div>
              <div className="modal-body-col">
                <h3>Labelling</h3>
                {labelling !== "" ? <p>{labelling}</p> : <p>{errorWord}</p>}
              </div>
              <div className="modal-body-col">
                <h3>Usage Instructions</h3>
                {usageInstructions !== "" ? (
                  <p>{usageInstructions}</p>
                ) : (
                  <p>{errorWord}</p>
                )}
              </div>
            </div>
          </div>

          <div className="modal-body-section">
            <div className="modal-body-row">
              <div className="modal-body-col">
                <h3>Usage and Durability</h3>
                {usageDurability !== undefined ? (
                  <p>{usageDurability}</p>
                ) : (
                  <p>{errorWordReusable}</p>
                )}
              </div>
              <div className="modal-body-col">
                <h3>Drying Time</h3>
                {dryingTime !== undefined ? (
                  <p>{dryingTime}</p>
                ) : (
                  <p>{errorWordReusable}</p>
                )}
              </div>
              <div className="modal-body-col">
                <h3>Disposal</h3>
                {disposal !== "" ? <p>{disposal}</p> : <p>{errorWord}</p>}
              </div>
            </div>
          </div>

          <div className="modal-body-section">
            <div className="modal-body-row">
              <div className="modal-body-col">
                <h3>Biodegradability & Compostability</h3>
                {biodegradabilityCompostability !== "" ? (
                  <p>{biodegradabilityCompostability}</p>
                ) : (
                  <p>{errorWord}</p>
                )}
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-footer">
          <button
            onClick={() => closeModal()}
            className="noPrint modal-header-buttons modal-header-buttons-blue"
          >
            <FontAwesomeIcon icon={faTimes} /> Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
