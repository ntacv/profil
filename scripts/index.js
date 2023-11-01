// import { val_const } from "./Code_text.js";

//If you write your own code, remember hex color shortcuts (eg., #fff, #000)
// returned value: (String) rgba(251,175,255,1)
function hexToRgbA(hex, alpha = 1) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      ", " +
      alpha +
      ")"
    );
  }
  throw new Error("Bad Hex");
}

function Title() {
  let input_text = "Title";
  var [title, setTitle] = React.useState(input_text);

  function handleClick() {
    console.log("handleClick");
    setTitle(document.getElementsByName("input_text")[0].value);
    //document.getElementById("updated").innerHTML = input_text;
  }
  return (
    <>
      <input type="text" name="input_text" />
      <button onClick={handleClick}>Update</button>
      <h1 id="updated">{title}</h1>
    </>
  );
}

function Lang_percent(props) {
  return (
    <>
      <div
        style={{
          width: "100%",
          fontFamily: "Courier",
          color: "white",
          background: hexToRgbA(props.color, 0.7), //0.15),
          display: "inline-block",
          padding: "10px 30px",
          position: "relative",
          fontWeight: "bold",

          margin: "20px 0px",
          borderRadius: "20px",
        }}
      >
        <div
          className="back_percent"
          style={{
            background: hexToRgbA(props.color, 1), //0.3),
            width: props.percent + "%",
          }}
        ></div>
        <p style={{}}>{props.children}</p>
      </div>
      <br />
    </>
  );
}
Lang_percent.defaultProps = {
  color: "#3498DB",
  percent: "50",
};

function Lang_list() {
  return (
    <>
      Type this <Code_text color="light">npm install</Code_text> command
      <br />
      <br />
      <Code_text>Languages I learned: </Code_text>
      <br />
      <br />
      <ul>
        <Lang_percent color="#e65127" percent="90">
          &lt;html&gt; pretty much a &lt;master/&gt; &lt;/html&gt;
        </Lang_percent>
        <Lang_percent color="#0c73b8" percent="20">
          css &#123; experience: intermediate expert; &#125;
        </Lang_percent>
        <Lang_percent color="#f7df1e" percent="50">
          if &#40; javascript &#41; &#123; it is kind of the easiest; &#125;
        </Lang_percent>
        <Lang_percent color="#8d96c0" percent="50">
          &lt;?php&gt; $_GLOBAL['EatCookies'] = "cause it's good"; ?&gt;
        </Lang_percent>
        <Lang_percent color="#0035FF" percent="50">
          from &#40; python &#41; import * ofMyKnowledge
        </Lang_percent>
        <Lang_percent color="#212121" percent="50" lang_code="react">
          function React&#40;&#41; &#123; return "can code this with react"
          &#125;
        </Lang_percent>
        <Lang_percent color="#813084" percent="50" lang_code="react">
          namespace C# &#123; class public default set static void
          Main&#40;&#41; &#125;
        </Lang_percent>
      </ul>
      <br />
      <br />
      <Code_text>What I like to do: </Code_text>
    </>
  );
}

function Code_text(props) {
  var color_text = props.color ? props.color : "black";
  var color_back = "lightgrey";
  function color_theme(prop) {
    if (prop == "light") {
      return "#ffffff";
    } else {
      return "#000000";
    }
  }
  return (
    <span
      style={{
        color: color_text,
        background: color_back,
        display: "inline-block",
        borderRadius: "10px",
        padding: "1px 10px",
        fontFamily: "Courier",
      }}
    >
      <p>{props.children}</p>
    </span>
  );
}
Code_text.defaultProps = {
  theme: "light",
};

//const app = document.getElementById("app");
//ReactDOM.render(<Title />, app);
const lang_list = document.querySelector(".lang_list");
ReactDOM.render(<Lang_list />, lang_list);
