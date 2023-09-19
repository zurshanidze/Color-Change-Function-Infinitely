let body = document.body;

function test(color1, color2, color3) {
  let red1 = color1[0];
  let green1 = color1[1];
  let blue1 = color1[2];
  let copyOfcolor1 = color1;

  let red2 = color2[0];
  let green2 = color2[1];
  let blue2 = color2[2];
  let copyOfcolor2 = color2;

  let red3 = color3[0];
  let green3 = color3[1];
  let blue3 = color3[2];
  let copyOfcolor3 = color3;

  function increaseDecrease() {
    // console.log(copyOfcolor1, "copyOfcolor1", red1, "red1")
    copyOfcolor1 = [red1, green1, blue1];
    copyOfcolor2 = [red2, green2, blue2];
    copyOfcolor3 = [red3, green3, blue3];

    if (JSON.stringify(copyOfcolor1) !== JSON.stringify(color2)) {
      console.log(copyOfcolor1, "copyOfcolor1");

      let intervalId = setInterval(() => {
        if (red1 < color2[0]) {
          red1++;
        }
        if (green1 < color2[1]) {
          green1++;
        }
        if (blue1 < color2[2]) {
          blue1++;
        }
        if (red1 > color2[0]) {
          red1--;
        }
        if (green1 > color2[1]) {
          green1--;
        }
        if (blue1 > color2[2]) {
          blue1--;
        }

        body.style.background = `rgb(${copyOfcolor1})`;
        red2 = color2[0];
        green2 = color2[1];
        blue2 = color2[2];

        clearInterval(intervalId);
        increaseDecrease();
      }, 100);
    } else if (JSON.stringify(copyOfcolor2) !== JSON.stringify(color3)) {
      console.log(copyOfcolor2, "copyOfcolor2");
      // copyOfcolor2 = [red2, green2, blue2]

      let intervalId = setInterval(() => {
        if (red2 < color3[0]) {
          red2++;
        }
        if (green2 < color3[1]) {
          green2++;
        }
        if (blue2 < color3[2]) {
          blue2++;
        }
        if (red2 > color3[0]) {
          red2--;
        }
        if (green2 > color3[1]) {
          green2--;
        }
        if (blue2 > color3[2]) {
          blue2--;
        }

        body.style.background = `rgb(${copyOfcolor2})`;
        red3 = color3[0];
        green3 = color3[1];
        blue3 = color3[2];

        clearInterval(intervalId);
        increaseDecrease();
      }, 100);
    } else if (JSON.stringify(copyOfcolor3) !== JSON.stringify(color1)) {
      console.log(copyOfcolor3, "copyOfcolor3");
      // copyOfcolor3 = [red3, green3, blue3]

      let intervalId = setInterval(() => {
        if (red3 < color1[0]) {
          red3++;
        }
        if (green3 < color1[1]) {
          green3++;
        }
        if (blue3 < color1[2]) {
          blue3++;
        }
        if (red3 > color1[0]) {
          red3--;
        }
        if (green3 > color1[1]) {
          green3--;
        }
        if (blue3 > color1[2]) {
          blue3--;
        }

        body.style.background = `rgb(${copyOfcolor3})`;

        clearInterval(intervalId);
        increaseDecrease();
      }, 100);
    } else if (JSON.stringify(copyOfcolor3) === JSON.stringify(color1)) {
      red1 = color1[0];
      green1 = color1[1];
      blue1 = color1[2];
      copyOfcolor1 = [red1, green1, blue1];
      increaseDecrease();
    }
  }
  increaseDecrease();
}
test([27, 52, 77], [108, 140, 172], [70, 185, 76]);
