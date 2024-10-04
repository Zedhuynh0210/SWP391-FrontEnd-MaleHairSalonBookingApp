import { Check } from "lucide-react";
import cookie from "react-cookies";

var Common = {
  CheckToken: () => {
    var token = cookie.load("token");
    if (token) {
      return true;
    }
    return false;
  },
  RemoveToken: () => {
    cookie.remove("token");
    cookie.remove("refreshToken");
    cookie.remove("accountId");
    cookie.remove("role");
    cookie.remove("id");
  },
  CheckRole: () => {
    var role = cookie.load("role");
    if (role !== null && role !== undefined) {
      return role;
    } else {
      return null;
    }
  },
  GetRefreshToken: () => {
    return cookie.load("refreshToken");
  },
  GetInfo: (key) => {
    switch (key) {
      case "accountId":
        return cookie.load("accountId");
      case "role":
        return cookie.load("role");
      case "id":
        return cookie.load("id");
      default:
        return "";
    }
  },
  PagingModel: {
    page: 1,
    size: 10,
  },

  HeaderAccount: ["STT", "Full Name", "Phone", "Location", "Gender", "DOB"],
  excelSerialDateToJSDate(serial) {
    var excelEpoch = new Date(1900, 0, 1);
    var jsDate = new Date(
      excelEpoch.getTime() + (serial - 1) * 24 * 60 * 60 * 1000
    );
    return jsDate;
  },
  checkWord(word, example) {
    const wordCheck = word.toLowerCase();
    const exampleCheck = example.toLowerCase();
    if (exampleCheck.indexOf(wordCheck) !== -1) {
      const regex = new RegExp(`(\\b${wordCheck}\\b)`, "gi");

      const newExample = example.replace(regex, (match) => {
        if (match.charAt(0) === match.charAt(0).toUpperCase()) {
          return `<strong>${word.charAt(0).toUpperCase()}${word.slice(
            1
          )}</strong>`;
        } else {
          return `<strong>${word}</strong>`;
        }
      });
      return <span dangerouslySetInnerHTML={{ __html: newExample }} />;
    }

    return example;
  },
  renderColor(type) {
    switch (type) {
      case "noun":
        return "#FFCBCB";
      case "verb":
        return "#ACE1AF";
      case "adj":
        return "#FFCDEA";
      case "adverb":
        return "#E59BE9";
      case "pronoun":
        return "#B7C9F2";
      default:
        return "black";
    }
  },
};

export default Common;
