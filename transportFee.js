module.exports = function transportFee(shift) {
    switch (shift) {
      case "morning":
        return "R20.00";
      case "afternoon":
        return "R10.00";
     // case "nightshift":
       // return "free";
      default:
        return "free";
    }
  }


  //if 