/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let common = "";
  let run = true;
  let j = 0;

  while (run) {
    let tempCommon = "";
    for (let i in strs) {
      if (strs[i][j] == null) {
        return common;
      }
      if (tempCommon === "") {
        tempCommon += strs[i][j];
      } else {
        if (tempCommon !== strs[i][j]) {
          tempCommon = null;
          run = false;
        }
      }
    }
    if (tempCommon !== null) {
      common += tempCommon;
    }

    j++;
  }
  return common;
};

strs = [""];

longestCommonPrefix(strs);
