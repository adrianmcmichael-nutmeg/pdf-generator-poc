import ReactPDF from "@react-pdf/renderer";
import ReportDocument from "../ReportDocument";
import React from "react";

const renderReport = (message, path) => {
    ReactPDF.render(<ReportDocument message={message} />, path);
};

export default renderReport;