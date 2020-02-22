// Run on https://en.wikipedia.org/wiki/List_of_high_schools_in_Maryland

var school_names = [];
document.querySelectorAll('li').forEach((a)=>school_names.push(a.innerText.split(',')[0].split('[')[0]));
console.log(JSON.stringify(school_names));
