function createElement(data) {
    // Paragraph
    const paragraph = document.createElement("p");
    const newContent = document.createTextNode(data);
    paragraph.appendChild(newContent);
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  let oReq = new XMLHttpRequest();
  let url = new URL('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  oReq.open('GET', url);
  oReq.responseType = "json";
  oReq.send();

  oReq.onload = () => {
    if (oReq.status == 200) {
      callback(oReq.response.query.pages["21721040"].extract);
    }
  }
}

queryWikipedia(createElement);