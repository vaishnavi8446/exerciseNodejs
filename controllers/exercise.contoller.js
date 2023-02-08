let exercise = require("../models/exercise");

module.exports.palindrome = async (req, res) => {
  try {
    let result = "";
    let inputString = req.params.inputString;
    for (let i = 0; i < inputString.length; i++) {
      for (let j = i + 2; j < inputString.length; j++) {
        const tempStr = inputString.substring(i, j); //substring method will extract a part of a string with argument (startIndex,endIndex+1)
        const revTempStr = [...tempStr].reverse().join(""); // ... iterate through an array

        if (tempStr === revTempStr && tempStr.length > result.length)
          result = tempStr;
      }
    }

    return res.status(200).send({
      status_code: 200,
      "The largest possible substring is": result,
      "Length of substring": result.length,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status_code: 500,
      msg: "Internal server error!",
    });
  }
};

module.exports.roman = async (req, res) => {
  try {
    const letters = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
    };

    let digits = req.params.digits;
    let len = digits.length,
      ans = [];
    if (!len) {
      return [];
    }
      const bfs = (pos, str) => {
      if (pos === len) {
        ans.push(str);
      } else {
         let letterRes = letters[digits[pos]];
        for (let i = 0; i < letterRes.length; i++) {
          bfs(pos + 1, str + letterRes[i]);
        }
      }
    };
    bfs(0, "");
    return res.status(200).send({
      status_code: 200,
      output: ans,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status_code: 500,
      msg: "Internal server error!",
    });
  }
};
