// // // Type Search
// match the characters of those words √
// Short words first √
//  If not beginning then show them last √


const checkParams = (arr, input) => {
  if (!arr || !Array.isArray(arr) || arr.length < 1 || input.length === 0 || typeof input !== "string") {
    return true;
  };
  return false;
}

const typeHead = (arr, input) => {
  if (checkParams(arr, input)) return false;
  const wordIndexArr = [];

  for (let i = 0, leng = arr.length; i < leng; i++) {
    const word = arr[i].toLowerCase();
    const wordIndex = word.indexOf(input.toLowerCase());

    if (wordIndex >= 0) {
      wordIndexArr.push([word, wordIndex]);
    }
  }
  wordIndexArr.sort((a, b) => a[1] - b[1] || a[0].length - b[0].length);
  return wordIndexArr.map(a => a[0].split(" ").map(e => e[0].toUpperCase() + e.substring(1)).join(" "));
};



const words = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];
const inputValue = "m"
typeHead(words, inputValue)
