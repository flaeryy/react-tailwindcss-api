import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import useFetchApi from "./useFetchApi";
import "./Details.css";
import { useParams } from "react-router-dom";
import downloadArrows from "../assets/downloadArrows.svg";
import clockSvg from "../assets/clockSvg.svg";
import veganSvg from "../assets/veganSvg.svg";
import plateSvg from "../assets/plateSvg.svg";
import glutenSvg from "../assets/glutenSvg.svg";
import Category from "./Category";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
function Details() {
  //const [details, setDetails] = useState({});
  const printRef = React.useRef();

  let params = useParams();
  console.log(params);

  const { error, data, loading } = useFetchApi(params.id, true);
  console.log("details loading");
  console.log(loading);
  console.log(data);
  console.log(error);

  const printDocument = async () => {
    const input = document.getElementById("report");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

  const handleDownloadPdf = async () => {
    console.log(printRef);
    console.log(printRef.current);
    /*
    html2canvas(document.querySelector("#report")).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    }); */

    const report = new jsPDF("portrait", "px", "a4");
    report.html(document.querySelector("#report")).then(() => {
      report.save("report.pdf");
    });

    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    console.log(data);

    const pdf = new jsPDF();
    /*  
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;  

    pdf.addImage(data, "PNG", 0, 0);
    pdf.save("print.pdf"); */
  };

  return (
    <div>
      {error ? (
        <ErrorPage />
      ) : (
        <div className="lg:w-3/4 lg:m-auto">
          <div className="mx-4">
            <Category />
          </div>

          <div className="flex w-full">
            {loading ? (
              <div
                id="report"
                className="flex flex-col w-full"
                ref={printRef}
                style={{
                  backgroundColor: "#f5f5f5",
                  width: "210mm",
                  minHeight: "297mm",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div className="w-full my-5">
                  <h2 className="text-center my-3 text-2xl font-bold">
                    {data.title}
                  </h2>
                  <img
                    className="w-full m-auto max-w-3xl object-cover rounded-md"
                    src={data.image}
                    alt=""
                  />
                  <div
                    onClick={printDocument}
                    className="m-auto flex  max-w-sm bg-yellow-500 justify-center my-2 py-2 rounded-md  cursor-pointer"
                  >
                    <img className="m-auto w-6 h-6 mx-2" src={downloadArrows} />

                    <div className="text-base font-semibold">I MAKE THIS</div>
                  </div>

                  <div className="flex flex-col items-left my-2">
                    <div className="flex gap-2">
                      <img src={clockSvg} className="w-6 h-6" />
                      Ready in:
                      <span className="font-bold">
                        {`${data.readyInMinutes} mins`}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <img src={plateSvg} className="w-6 h-6" />
                      Serves:{" "}
                      <span className="font-bold">{`${data.servings}`}</span>
                    </div>

                    <div className="flex gap-2">
                      <img src={glutenSvg} className="w-6 h-6" />
                      Gluten Free:{" "}
                      <span className="font-bold">{`${
                        data.glutenFree ? "Yes" : "No"
                      }`}</span>
                    </div>
                    <div className="flex gap-2">
                      <img src={veganSvg} className="w-6 h-6" />
                      Vegan:
                      <span className="font-bold">{`${
                        data.vegan ? "Yes" : "No"
                      }`}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full">
                  <div className="lg:w-1/2">
                    <h2 className="text-left my-3 text-2xl font-bold">
                      INGREDIENTS UNITS?
                    </h2>
                    <ul className="ml-5">
                      {data.extendedIngredients.map((ingredients) => (
                        <li
                          className="list-disc lg:my-4"
                          key={
                            ingredients.id *
                              Math.floor(Math.random() * (1 - 9999 + 1)) +
                            9999
                          }
                        >
                          {ingredients.original}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2">
                    <div>
                      <h2 className="text-left my-3 text-2xl font-bold">
                        DIRECTIONS
                      </h2>

                      <h3
                        className="my-4"
                        dangerouslySetInnerHTML={{ __html: data.summary }}
                      ></h3>
                      <h3
                        className="bullet"
                        dangerouslySetInnerHTML={{ __html: data.instructions }}
                      ></h3>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
