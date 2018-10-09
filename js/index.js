var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}
var Credit = function Credit() {
  return React.createElement("p", { id: "cred" }, "\xA9 built in react.js by ", React.createElement("a", { href: "https://www.okiwebdesign.us" }, "tom landis"), " October 2018");
};var
DrumMachine = function (_React$Component) {_inherits(DrumMachine, _React$Component);
  function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));
    _this.state = { message: " " };
    _this.pushd = _this.pushd.bind(_this);return _this;
  }_createClass(DrumMachine, [{ key: "componentWillMount", value: function componentWillMount()
    {
      document.addEventListener("keydown", function (event) {
        var keyName = event.key;
        var keyName2 = keyName.toUpperCase();
        var check = ["A", "Q", "W", "E", "S", "D", "Z", "X", "C"];
        //if clause is just to avoid annoying error generation
        if (check.includes(keyName2)) {
          var targ = document.getElementById(keyName2);
          targ.parentNode.click();
        }

      });
    } }, { key: "pushd", value: function pushd(

    i) {
      var v = document.getElementById(i.target.id);
      var q = document.getElementById(i.target);
      var par = document.getElementById(i.target.id);
      var chil = par.firstElementChild;
      var sound = par.id;
      chil.play();
      this.setState({ message: sound });
    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "grido" },
          React.createElement("div", { id: "display" }, this.state.message, " \xA0"),
          React.createElement("div", { name: "bloop", onClick: this.pushd, className: "drum-pad", id: "bloop" },
            React.createElement("audio", {
              className: "clip",
              id: "Q",
              src: "https://www.dropbox.com/s/u8orl1hc0vxwsyc/strange-fx-kit-35.wav?dl=1" }), "Q"),



          React.createElement("div", { onClick: this.pushd, className: "drum-pad", id: "pooom" },
            React.createElement("audio", {
              className: "clip",
              id: "W",
              src: "https://www.dropbox.com/s/bd94kdin8nha5ud/strange-fx-kit-37.wav?dl=1" }), "W"),

          React.createElement("div", { onClick: this.pushd, className: "drum-pad", id: "ping" },
            React.createElement("audio", {
              className: "clip",
              id: "E",
              src: "https://www.dropbox.com/s/wnqehiavz2ahqzr/strange-fx-kit-39.wav?dl=1" }), "E"),


          React.createElement("div", { onClick: this.pushd, className: "drum-pad", id: "boo" },
            React.createElement("audio", {
              className: "clip",
              id: "A",
              src: "https://www.dropbox.com/s/bldytotimw4bspt/strange-fx-kit-40.wav?dl=1" }), "A"),


          React.createElement("div", { onClick: this.pushd, className: "drum-pad", id: "puhzz" },
            React.createElement("audio", {
              className: "clip",
              id: "S",
              src: "https://www.dropbox.com/s/ntv2rao7ygk4vmm/strange-fx-kit-44.wav?dl=1" }), "S"),


          React.createElement("div", { onClick: this.pushd, className: "drum-pad", id: "click" },
            React.createElement("audio", {
              className: "clip",
              id: "D",
              src: "https://www.dropbox.com/s/bma0kixl7as7x7h/strange-fx-kit-45.wav?dl=1" }), "D"),



          React.createElement("div", { onClick: this.pushd, className: "drum-pad", id: "pulse" },
            React.createElement("audio", {
              className: "clip",
              id: "Z",
              src: "https://www.dropbox.com/s/1rij1lwufpwsnut/strange-fx-kit-51.wav?dl=1" }), "Z"),


          React.createElement("div", { onClick: this.pushd, className: "drum-pad", id: "quack" },
            React.createElement("audio", {
              className: "clip",
              id: "X",
              src: "https://www.dropbox.com/s/zi1oa82zbuwpdg6/strange-fx-kit-65.wav?dl=1" }), "X"),

          React.createElement("div", { onClick: this.pushd, className: "drum-pad", id: "boing" },
            React.createElement("audio", {
              className: "clip",
              id: "C",
              src: "https://www.dropbox.com/s/yj8gxjyulyxidxk/strange-fx-kit-66.wav?dl=1" }), "C"),


          React.createElement(Credit, null)));


    } }]);return DrumMachine;}(React.Component);


ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById("drum-machine"));