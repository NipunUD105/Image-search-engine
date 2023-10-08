const accessKey = "foLLPodwmDjN8HWmQthtVw6WMR-X3xA3Od5lCWkoZUA";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchBtn = document.getElementById("show-more-btn");

// foLLPodwmDjN8HWmQthtVw6WMR-X3xA3Od5lCWkoZUA
// eRkUdhZz7yoXYgqTejM4bVwe4eFpKD2CXZwA1dBQOpM

let keyword = "";
let page = "1";

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
}