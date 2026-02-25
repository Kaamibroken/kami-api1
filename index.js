const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// --- IMPORT ALL PANELS ---
const roxy = require("./api/roxy");
const roxy1 = require("./api/roxy1");
const roxy2 = require("./api/roxy2");
const msi = require("./api/msi");
const msi1 = require("./api/msi1");
const np = require("./api/np");
const np0 = require("./api/np0");
const np1 = require("./api/np1");
const np2 = require("./api/np2");
const np3 = require("./api/np3");
const goat = require("./api/goat");
const goat1 = require("./api/goat1");
const goat2 = require("./api/goat2");  // <-- NEW

// --- ROUTES ---
app.use("/api/roxy", roxy);
app.use("/api/roxy1", roxy1);
app.use("/api/roxy2", roxy2);
app.use("/api/msi", msi);
app.use("/api/msi1", msi1);
app.use("/api/np", np);
app.use("/api/np0", np0);
app.use("/api/np1", np1);
app.use("/api/np2", np2);
app.use("/api/np3", np3);
app.use("/api/goat", goat);
app.use("/api/goat1", goat1);
app.use("/api/goat2", goat2); // <-- NEW

// --- HEALTH CHECK ---
app.get("/", (req,res)=> res.send("API RUNNING ✅"));

// --- START SERVER ---
app.listen(PORT, "0.0.0.0", ()=>console.log(`🚀 Server running on port ${PORT}`));
