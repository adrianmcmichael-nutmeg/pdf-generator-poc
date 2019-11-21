import express from "express";
import React from "react";
import generatePDf from "../pdfs/generatePDF";

const router = express.Router();

router.get("/", async (req, res) => {
    return generatePDf(res);
});

export default router;
