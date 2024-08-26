// formatter.js
class Formatter {
  static capitalize(str) {
    if (typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    if (typeof str !== "string") return "";
    return str.replace(/[^a-zA-Z0-9-' ]/g, "");
  }

  static titleize(str) {
    if (typeof str !== "string") return "";
    const smallWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    return str
      .split(" ")
      .map((word, index) => {
        if (index === 0 || !smallWords.includes(word.toLowerCase())) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word.toLowerCase();
      })
      .join(" ");
  }
}
