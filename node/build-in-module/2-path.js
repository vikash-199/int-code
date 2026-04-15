/*
🔹 1. Why do we need path?
👉 Problem:
Different OS use different path formats:

Windows → C:\folder\file.txt
Linux/Mac → /folder/file.txt

👉 Solution:
path module normalizes and handles paths correctly so your code works everywhere.
*/

const path = require('path');
