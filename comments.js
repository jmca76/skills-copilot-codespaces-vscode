// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Use express to serve static files
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

// Data
const comments = [
  {
    id: 1
  }];