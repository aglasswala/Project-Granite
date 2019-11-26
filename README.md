# Welcome To Project-Granite
## Setup
* Clone the Repository in your workspace 
`git clone https://github.com/aglasswala/Project-Granite.git`
* `npm install` at the server level
* `cd client` and `npm install`

---
`npm start` to run the application
## Description
* Input image file and submit.
* Image file is encoded in UTF-8 and sent to AWS Rekognition.
* Rekognition defines the image labels and outputs a max limit of 20 labels.
* The labels are sent to Google Translate API and appear on the screen.
