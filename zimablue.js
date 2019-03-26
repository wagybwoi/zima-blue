const ZimaBlue = () => {
  const zb = document.createElement("div");
  document.body.appendChild(zb);
  zb.id = "zimablue";
  Object.assign(zb.style, {
    backgroundColor: "#5BC2E7",
    width: "50px",
    height: "50px",
    position: "fixed",
    zIndex: "9999999999999999",
    margin: "auto",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    cursor: "pointer",
    webkitTransition: "all 600ms cubic-bezier(0.645, 0.045, 0.355, 1)",
    transition: "all 600ms cubic-bezier(0.645, 0.045, 0.355, 1)"
  });
  zb.onmousedown = () => {
    Object.assign(zb.style, {
    width: `${zb.clientWidth * (1 + Math.random() + (((zb.clientWidth < zb.clientHeight) && 1) || 0))}px`,
    height: `${zb.clientHeight * (1 + Math.random() + (((zb.clientWidth > zb.clientHeight) && 1) || 0))}px`
    });
  };
};
