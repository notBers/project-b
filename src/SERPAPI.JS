const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("4f45f6a96a8a853416e71a86a3c38cb229f8a3348fc1e53780285d178db67f24");

var back = '<-'
function BasicSearch(q, ln){
  const params = {
    engine: "google_scholar",
    hl: ln,
    q: q
  };

  var tempdata;
  var results;
  var endr;
  var endrr;

  const callback = function(data) {
    results = [];
    
    
    data["organic_results"].map((result)=>{
      tempdata = {title: '', summary : '', link: ''}
      tempdata.title =  result.title;
      tempdata.summary = result['publication_info']['summary']
      tempdata.summary = result['publication_info']['summary']
      tempdata.link = result['link']
      results.push(tempdata)
      endr = results;
    })
    
  };


  search.json(params, callback);
  
  

}

export default BasicSearch;