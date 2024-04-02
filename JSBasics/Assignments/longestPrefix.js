

var longestCommonPrefix = function (strs) {

    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1]
    let ans = "";
    for (i = 0; i < Math.min(first.length, last.length); i++) {
        if (first.charAt(i) != last.charAt(i)) {
            return ans;
        }
        ans+=first.charAt(i);
    }
    return ans;
};

Example = ["Geeks","GeeksForGeeks"]

console.log(longestCommonPrefix(Example))