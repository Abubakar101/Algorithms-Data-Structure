// ** Python(Preferably) Or Javascript**

// FizzBuzz - Write a function that prints out numbers 1 though 50 except:
// - For multiples of 3 it prints out Fizz
// - For multiples of 5 it prints out Buzz
// - For multiples of 3 and 5 it prints out FizzBuzz

// If a second requirement comes up that we would like to print out Duck, Goose and DuckGoose instead of Fizz, Buzz and FizzBuzz and for numbers (2), (7) and (2,7) how would you handle it? Please answer with code.

function fizzBuzz(index, str, strArr) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log(str);
  } else if (index % 3 === 0) {
    console.log(strArr[0]);
  } else if (index % 5 === 0) {
    console.log(strArr[1]);
  }
}

function duckGoose(index, str, strArr) {
  if (index % 2 === 0 && index % 7 === 0) {
    console.log(str);
  } else if (index % 2 === 0) {
    console.log(strArr[0]);
  } else if (index % 7 === 0) {
    console.log(strArr[1]);
  }
}

function print(param) {
  const strArr = param.split(/(?=[A-Z])/);
  
  for (let index = 1; index <= 50; index++) {
    if (strArr[0] === "Fizz") {
      fizzBuzz(index, param, strArr);
    } else if (strArr[0] === "Duck") {
      duckGoose(index, param, strArr)
    }
  }
}

print("DuckGoose")
