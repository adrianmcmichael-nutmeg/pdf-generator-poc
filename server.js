import React from "react";
import renderReport from "./components/pdfs/reportGenerator";

const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Custom request handlers
    // =======================
    server.get('/report', (req, res) => {
        const now = new Date();
        const timestamp = now.toLocaleString();
        const path = `/Users/adrianmcmichael/workspace/pdf-generator-poc/output/example-${now.getTime()}.pdf`;
        renderReport(timestamp, path);
        return res.status(201).json({path});
    });

    // Fallback to Next.js handling all other requests
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});