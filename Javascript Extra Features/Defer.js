//Defer - causes the HTML to download the javascript asynchronously in the background along wihile downloading the HTML Page and then runs the script only after finishing loading of the DOM page.
<script defer src="xyz.js"></script>;

//Normal Execution
/*
HTML Parsing
                Javascript File Download
                                JavaScript File Execution
                                                HTML Parsing
________________                                 ________________
                ________________ ________________
*/

//Async Execution
/*
HTML Parsing
        Javascript File Download
                JavaScript File Execution
                                HTML Parsing
________________                 ________________
        ________ ________________
*/

//Defer Execution
/*
HTML Parsing
        Javascript File Download
                                JavaScript File Execution
________________________________
        _____________           _____________
*/

// Adding script tag to the end of the body tag will run the script at the end but it will cause the script to access the DOM elements at the last and will be executed after the DOM is loaded.
// Script is downloaded after the DOM is loaded, which decreases the performance of the page due to other downloads.
