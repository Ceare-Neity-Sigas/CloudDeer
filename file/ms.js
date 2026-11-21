const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
// 判断单个字符是否为 英文字母(不分大小写)
function isLetter(char) {
  if (char.length !== 1) return false; // 非单个字符直接返回false
  const code = char.charCodeAt(0);
  // 大写A-Z[65-90]  或  小写a-z[97-122]
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

// 判断单个字符是否为 大写英文字母(A-Z)
function isUpperCaseLetter(char) {
  if (char.length !== 1) return false;
  const code = char.charCodeAt(0);
  // 仅匹配大写字母字符码区间
  return code >= 65 && code <= 90;
}

// 判断单个字符是否为 小写英文字母(a-z)
function isLowerCase(char) {
  if (char.length !== 1) return false;
  const code = char.charCodeAt(0);
  // 仅匹配小写字母字符码区间
  return code >= 97 && code <= 122;
}
// 判断单个字符 是否为 数字 (0-9)，纯字符码实现，和你的其他函数格式一致
function isDigit(char) {
  if (char.length !== 1) return false; // 非单个字符直接返回false
  const code = char.charCodeAt(0);
  return code >= 48 && code <= 57;
}
function isChinese(char) {
  if (char.length !== 1) return false; // 非单个字符直接返回false
  const code = char.charCodeAt(0);
  return code >= 19968 && code <= 40869;
}
function randint(l,r)
{
    return Math.floor( Math.random() * (r-l+1) ) + l;
}