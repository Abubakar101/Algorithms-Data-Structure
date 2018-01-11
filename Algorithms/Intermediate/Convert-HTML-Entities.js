// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let value = '';

  for (let i in str) {
    console.log(str[i]);

    if (str[i] === '<') {
      value += '&lt;';
    } else if (str[i] === '>') {
      value += '&gt;';
    } else if (str[i] === "'") {
      value += '&apos;';
    } else if (str[i] === '"') {
      value += '&quot;';
    } else if (str[i] === '&') {
      value += '&amp;';
    } else {
      value += str[i];
    }
  }

  return value;
}


// Using Replace method
function convertHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

convertHTML('Dolce & Gabbana');
// should return Dolce &amp; Gabbana.

convertHTML("Hamburgers < Pizza < Tacos")
// should return Hamburgers &lt; Pizza &lt; Tacos.

convertHTML("Sixty > twelve")
// should return Sixty &gt; twelve.

convertHTML('Stuff in "quotation marks"')
// should return Stuff in &quot;quotation marks&quot;.

convertHTML("Schindler's List")
// should return Schindler&apos;s List.

convertHTML("<>")
// should return &lt;&gt;.

convertHTML("abc")
// should return abc.
