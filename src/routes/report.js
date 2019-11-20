import express from "express";
import React from "react";
import renderReport from "../pdfs/reportGenerator";

const router = express.Router();

router.get("/", async (req, res) => {
    const now = new Date();
    const timestamp = now.toLocaleString();
    const path = `${process.cwd()}/output/example-${now.getTime()}.pdf`;
    renderReport(timestamp, path);
    return res.status(201).json({path});
});

export default router;
