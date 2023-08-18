import React, { useEffect, useState, useRef, createContext } from "react";
import { sizeToCSS } from "./utils/css";
import useDoenetRenderer from "../useDoenetRenderer";
import me from "math-expressions";
import VisibilitySensor from "react-visibility-sensor-v2";
import { cesc } from "../../_utils/url";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import TextTexture from "@seregpie/three.text-texture";

//https://github.com/SeregPie/THREE.TextSprite/blob/main/src/index.js
let TextSprite = class extends THREE.Sprite {
  constructor(
    { fontSize = 1, ...options } = {},
    material = new THREE.SpriteMaterial({
      depthWrite: false,
    }),
  ) {
    super(material);
    let texture = new TextTexture({
      fontSize,
      ...options,
    });
    this.material.map = texture;
  }

  onBeforeRender(renderer, scene, camera) {
    let { material } = this;
    let { map: texture } = material;
    if (texture.checkFontFace()) {
      let { scale } = this;
      let { height, width } = texture;
      if (width && height) {
        scale.setX(width).setY(height);
        texture.setOptimalPixelRatio(this, renderer, camera);
        texture.redraw();
      } else {
        scale.setScalar(1);
      }
    } else {
      texture.loadFontFace();
    }
  }

  dispose() {
    let { material } = this;
    let { map: texture } = material;
    texture.dispose();
    material.dispose();
  }
};

[
  "alignment",
  "backgroundColor",
  "color",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "lineGap",
  "padding",
  "strokeColor",
  "strokeWidth",
  "text",
].forEach((key) => {
  Object.defineProperty(TextSprite.prototype, key, {
    get() {
      return this.material.map[key];
    },
    set(value) {
      this.material.map[key] = value;
    },
  });
});

TextSprite.prototype.isTextSprite = true;

export default React.memo(function Graph(props) {
  let { name, id, SVs, children, actions, callAction } =
    useDoenetRenderer(props);
  // console.log({ name, id, SVs, children, actions })

  let onChangeVisibility = (isVisible) => {
    callAction({
      action: actions.recordVisibilityChange,
      args: { isVisible },
    });
  };

  if (SVs.haveGraphParent) {
    // have have graph parent, then don't render graph
    // but just render children so that will be inside parent graph
    return (
      <>
        <a name={id} />
        {children}
      </>
    );
  }

  var axesParams = {
    size: new THREE.Vector3(SVs.xmax, SVs.ymax, SVs.zmax),
    negSize: new THREE.Vector3(SVs.xmin, SVs.ymin, SVs.zmin),
    axisWidth: 10,
    showBoxAxes: false,
    showAxisTicks: true,
    showAxisTickLabels: true,
    axisTickIncrement: new THREE.Vector3(4, 4, 4),
    axisTickSize: 0.015,
    axisTickLabelFontSize: 30,
    labelFontSize: 40,
    labelScale: 6,
    labelz: "t",
  };

  var axes = Axes(axesParams);
  console.log(axes);

  let instance = new TextSprite({
    alignment: "left",
    color: "#24ff00",
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: 8,
    fontStyle: "italic",
    text: ["4"].join("\n"),
  });

  console.log(instance);
  console.log(axes.sprites[0]);

  return (
    <div style={{ width: "400px", height: "400px", border: "2px solid black" }}>
      <Canvas camera={{ position: [10, 10, 10] }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 4, 5]} />
        {children}
        <primitive object={axes.lines} />
        <primitive object={instance} />
        {axes.sprites.forEach((element) => {
          <primitive object={element} />;
        })}

        <OrbitControls />
        <cylinderGeometry attach="geometry" args={[2, 2, 2]} />
      </Canvas>
    </div>
  );
});

// https://mathinsight.org/static/js/three/TextLabel.js
// add text label

// still need to work on getting the text to show up at a good size
// If make font size small, then it shows up blurry.
// Haven't figured out why the fontsize/scale seem to have
// different effects in different contexts.

var TextLabel = function (message, parameters) {
  if (parameters === undefined) parameters = {};

  var fontFace = parameters.hasOwnProperty("fontFace")
    ? parameters["fontFace"]
    : "Arial";

  var fontSize = parameters.hasOwnProperty("fontSize")
    ? parameters["fontSize"]
    : 120;

  var scale = parameters.hasOwnProperty("scale") ? parameters["scale"] : 2;

  var textColor = parameters.hasOwnProperty("textColor")
    ? parameters["textColor"]
    : "#000000";

  var fontWeight = parameters.hasOwnProperty("fontWeight")
    ? parameters["fontWeight"]
    : "Bold ";

  console.log(message);
  console.log([message].join("\n"));
  return new TextSprite({
    alignment: "left",
    color: textColor,
    fontFamily: fontFace,
    fontSize: fontSize,
    fontStyle: "italic",
    text: [message].join("\n"),
  });
};

// change the text label to a new message
/*
TextLabel.prototype.set = (function (message) {
  //this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

  this.context.fillText(
    message,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width,
  );
  this.texture.needsUpdate = true;
})("use strict");
*/

// https://mathinsight.org/static/js/three/Axes.js
// This file contains options for standard 3D axes, box 3D axes, and 2D axes.
// Standard and box axes are accessed through Axes, 2D is accessed through Axes2D

/**
 * This is the standard Axes function, which shows standard 3D Axes by default,
 * and/or 3D box axes if specified by showBoxAxes.
 *
 * Parameters:
 * size: A number (or THREE.Vector3()) representing positive size x, y, and z, will ultimately be formed into a THREE.Vector3(), default is THREE.Vector3(1, 1, 1)
 * negSize: A number (or THREE.Vector3()) representing negative size x, y, and z, will ultimately be formed into a THREE.Vector3(), , default is THREE.Vector3(-1, -1, -1)
 * label: overall axis label, default is ''
 * labelx: label for x axis, default is 'x'
 * labely: label for y axis, default is 'y'
 * labelz: label for z axis, default is 'z'
 * showLabels: boolean determining visibility of x, y, and z labels, default is true
 * color: a color in hex
 * showBoxAxes: a boolean determining box axis, default is false, which means show standard axes
 * labelFontSize: Font size for labels, default is 120
 * labelScale: scale of font for labels, default is 2
 * labelColor: the color of the text for the labels in hex string, default is '#000000'
 * axisWidth: width of lines for axes
 * showAxisTicks: a boolean determining whether ticks will be displayed on each axis, default is false
 * axisTick: a number specifying the tick increment, default is proportional to axis size
 * axisTickSize: a number specifying the tick size in fraction of axis size, default is 0.03
 * axisTickIncrement: a number or vector specifying the spacing between ticks, default is 1
 * showAxisTickLabels: a boolean determining whether tick labels will be displayed on each axis, default is false
 * axisTickLabelFontSize: Font size for lables, defaults to labelFontSize
 * tickLabelSpace: spacing of tick labels from axes in fraction of axis size, default is 0.06
 * tickLabelDigits: number of digits to round tick labels, defaults to 1
 */

function Axes(params) {
  if (params === undefined) {
    var params = {};
  }

  if (!isNaN(params)) {
    //i.e. if params is a number, convert it to object format
    var incomingSize = params;
    params = {};
    params.size = incomingSize;
  }

  if (params.size === undefined) {
    params.size = new THREE.Vector3(1, 1, 1);
  } else if (!(params.size instanceof THREE.Vector3)) {
    params.size = new THREE.Vector3(params.size, params.size, params.size);
  }

  if (params.negSize === undefined) {
    params.negSize = params.size.clone().negate();
  } else if (!(params.negSize instanceof THREE.Vector3)) {
    params.negSize = new THREE.Vector3(
      params.negSize,
      params.negSize,
      params.negSize,
    );
  }

  if (params.label === undefined) {
    params.label = "";
  }
  if (params.labelx === undefined) {
    params.labelx = "x";
  }
  if (params.labely === undefined) {
    params.labely = "y";
  }
  if (params.labelz === undefined) {
    params.labelz = "z";
  }
  if (params.showLabels === undefined) {
    params.showLabels = true;
  }
  if (params.color === undefined) {
    params.color = 0x000000;
  }
  if (params.showBoxAxes === undefined) {
    params.showBoxAxes = false;
  }
  if (params.labelFontSize === undefined) {
    params.labelFontSize = 120;
  }
  if (params.labelScale === undefined) {
    params.labelScale = 2;
  }
  if (params.labelColor === undefined) {
    params.labelColor = "#000000";
  }
  if (params.axisWidth === undefined) {
    if (params.showBoxAxes) {
      params.axisWidth = 2;
    } else {
      params.axisWidth = 5;
    }
  }
  if (params.showAxisTicks === undefined) {
    params.showAxisTicks = false;
  }
  if (params.axisTickSize === undefined) {
    params.axisTickSize = 0.03;
  }
  if (params.axisTickIncrement === undefined) {
    params.axisTickIncrement = new THREE.Vector3(1, 1, 1);
  } else if (!(params.axisTickIncrement instanceof THREE.Vector3)) {
    params.axisTickIncrement = new THREE.Vector3(
      params.axisTickIncrement,
      params.axisTickIncrement,
      params.axisTickIncrement,
    );
  }

  if (params.showAxisTickLabels === undefined) {
    params.showAxisTickLabels = false;
  }
  if (params.axisTickLabelFontSize === undefined) {
    params.axisTickLabelFontSize = params.labelFontSize;
  }
  if (params.tickLabelRescale === undefined) {
    params.tickLabelRescale = new THREE.Vector3(1, 1, 1);
  } else if (!(params.tickLabelRescale instanceof THREE.Vector3)) {
    params.tickLabelRescale = new THREE.Vector3(
      params.tickLabelRescale,
      params.tickLabelRescale,
      params.tickLabelRescale,
    );
  }
  if (params.tickLabelSpace === undefined) {
    params.tickLabelSpace = 0.06;
  }
  if (params.tickLabelDigits === undefined) {
    params.tickLabelDigits = 1;
  }

  var tickLabelRoundFactor = Math.pow(10, params.tickLabelDigits);

  if (params.boxAxisTicksXSide === undefined) {
    params.boxAxisTicksXSide = 1;
  }
  if (params.boxAxisTicksYSide === undefined) {
    params.boxAxisTicksYSide = 1;
  }
  if (params.boxAxisTicksZSide === undefined) {
    params.boxAxisTicksZSide = 1;
  }
  if (params.axisLabelSpace === undefined) {
    if (params.showAxisTickLabels) {
      params.axisLabelSpace = 0.15;
    } else {
      params.axisLabelSpace = 0.08;
    }
  }

  //Overall geometry, containing all vectors for standard and/or box axes
  var bufferGeometry = new THREE.BufferGeometry();
  let geometry = { vertices: [] };

  if (params.showBoxAxes === true) {
    console.log(geometry);
    geometry.vertices.push(
      //Axes Box--lines grouped by dimension spanned--"top"
      new THREE.Vector3(params.size.x, params.size.y, params.size.z),
      new THREE.Vector3(params.negSize.x, params.size.y, params.size.z),

      new THREE.Vector3(params.size.x, params.size.y, params.negSize.z),
      new THREE.Vector3(params.negSize.x, params.size.y, params.negSize.z),

      new THREE.Vector3(params.size.x, params.size.y, params.size.z),
      new THREE.Vector3(params.size.x, params.size.y, params.negSize.z),

      new THREE.Vector3(params.negSize.x, params.size.y, params.size.z),
      new THREE.Vector3(params.negSize.x, params.size.y, params.negSize.z),

      //Axes Box--lines grouped by dimension spanned--"bottom"
      new THREE.Vector3(params.size.x, params.negSize.y, params.size.z),
      new THREE.Vector3(params.negSize.x, params.negSize.y, params.size.z),

      new THREE.Vector3(params.size.x, params.negSize.y, params.negSize.z),
      new THREE.Vector3(params.negSize.x, params.negSize.y, params.negSize.z),

      new THREE.Vector3(params.size.x, params.negSize.y, params.size.z),
      new THREE.Vector3(params.size.x, params.negSize.y, params.negSize.z),

      new THREE.Vector3(params.negSize.x, params.negSize.y, params.size.z),
      new THREE.Vector3(params.negSize.x, params.negSize.y, params.negSize.z),

      //Axes Box--lines grouped by dimension spanned--"right"
      new THREE.Vector3(params.size.x, params.size.y, params.size.z),
      new THREE.Vector3(params.size.x, params.negSize.y, params.size.z),

      new THREE.Vector3(params.size.x, params.size.y, params.negSize.z),
      new THREE.Vector3(params.size.x, params.negSize.y, params.negSize.z),

      //Axes Box--lines grouped by dimension spanned--"left"
      new THREE.Vector3(params.negSize.x, params.size.y, params.size.z),
      new THREE.Vector3(params.negSize.x, params.negSize.y, params.size.z),

      new THREE.Vector3(params.negSize.x, params.size.y, params.negSize.z),
      new THREE.Vector3(params.negSize.x, params.negSize.y, params.negSize.z),
    );

    // box axis ticks
    if (params.showAxisTicks) {
      var tickMinInd = Math.ceil(params.negSize.x / params.axisTickIncrement.x);
      var tickMaxInd = Math.floor(params.size.x / params.axisTickIncrement.x);

      for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
        var x = i * params.axisTickIncrement.x;
        if (params.boxAxisTicksXSide == 1) {
          geometry.vertices.push(
            new THREE.Vector3(
              x,
              params.size.y -
                (params.size.y - params.negSize.y) * params.axisTickSize,
              params.size.z -
                (params.size.z - params.negSize.z) * params.axisTickSize,
            ),
            new THREE.Vector3(x, params.size.y, params.size.z),
          );
        } else if (params.boxAxisTicksXSide == 2) {
          geometry.vertices.push(
            new THREE.Vector3(
              x,
              params.negSize.y +
                (params.size.y - params.negSize.y) * params.axisTickSize,
              params.size.z -
                (params.size.z - params.negSize.z) * params.axisTickSize,
            ),
            new THREE.Vector3(x, params.negSize.y, params.size.z),
          );
        } else if (params.boxAxisTicksXSide == 3) {
          geometry.vertices.push(
            new THREE.Vector3(
              x,
              params.negSize.y +
                (params.size.y - params.negSize.y) * params.axisTickSize,
              params.negSize.z +
                (params.size.z - params.negSize.z) * params.axisTickSize,
            ),
            new THREE.Vector3(x, params.negSize.y, params.negSize.z),
          );
        } else if (params.boxAxisTicksXSide == 4) {
          geometry.vertices.push(
            new THREE.Vector3(
              x,
              params.size.y -
                (params.size.y - params.negSize.y) * params.axisTickSize,
              params.negSize.z +
                (params.size.z - params.negSize.z) * params.axisTickSize,
            ),
            new THREE.Vector3(x, params.size.y, params.negSize.z),
          );
        }
      }

      tickMinInd = Math.ceil(params.negSize.y / params.axisTickIncrement.y);
      tickMaxInd = Math.floor(params.size.y / params.axisTickIncrement.y);

      for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
        var y = i * params.axisTickIncrement.y;

        if (params.boxAxisTicksYSide == 1) {
          geometry.vertices.push(
            new THREE.Vector3(
              params.size.x -
                (params.size.x - params.negSize.x) * params.axisTickSize,
              y,
              params.size.z -
                (params.size.z - params.negSize.z) * params.axisTickSize,
            ),
            new THREE.Vector3(params.size.x, y, params.size.z),
          );
        } else if (params.boxAxisTicksYSide == 2) {
          geometry.vertices.push(
            new THREE.Vector3(
              params.negSize.x +
                (params.size.x - params.negSize.x) * params.axisTickSize,
              y,
              params.size.z -
                (params.size.z - params.negSize.z) * params.axisTickSize,
            ),
            new THREE.Vector3(params.negSize.x, y, params.size.z),
          );
        } else if (params.boxAxisTicksYSide == 3) {
          geometry.vertices.push(
            new THREE.Vector3(
              params.negSize.x +
                (params.size.x - params.negSize.x) * params.axisTickSize,
              y,
              params.negSize.z +
                (params.size.z - params.negSize.z) * params.axisTickSize,
            ),
            new THREE.Vector3(params.negSize.x, y, params.negSize.z),
          );
        } else if (params.boxAxisTicksYSide == 4) {
          geometry.vertices.push(
            new THREE.Vector3(
              params.size.x -
                (params.size.x - params.negSize.x) * params.axisTickSize,
              y,
              params.negSize.z +
                (params.size.z - params.negSize.z) * params.axisTickSize,
            ),
            new THREE.Vector3(params.size.x, y, params.negSize.z),
          );
        }
      }

      tickMinInd = Math.ceil(params.negSize.z / params.axisTickIncrement.z);
      tickMaxInd = Math.floor(params.size.z / params.axisTickIncrement.z);

      for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
        var z = i * params.axisTickIncrement.z;

        if (params.boxAxisTicksZSide == 1) {
          geometry.vertices.push(
            new THREE.Vector3(
              params.size.x -
                (params.size.x - params.negSize.x) * params.axisTickSize,
              params.size.y -
                (params.size.y - params.negSize.y) * params.axisTickSize,
              z,
            ),
            new THREE.Vector3(params.size.x, params.size.y, z),
          );
        } else if (params.boxAxisTicksZSide == 2) {
          geometry.vertices.push(
            new THREE.Vector3(
              params.negSize.x +
                (params.size.x - params.negSize.x) * params.axisTickSize,
              params.size.y -
                (params.size.y - params.negSize.y) * params.axisTickSize,
              z,
            ),
            new THREE.Vector3(params.negSize.x, params.size.y, z),
          );
        } else if (params.boxAxisTicksZSide == 3) {
          geometry.vertices.push(
            new THREE.Vector3(
              params.negSize.x +
                (params.size.x - params.negSize.x) * params.axisTickSize,
              params.negSize.y +
                (params.size.y - params.negSize.y) * params.axisTickSize,
              z,
            ),
            new THREE.Vector3(params.negSize.x, params.negSize.y, z),
          );
        } else if (params.boxAxisTicksZSide == 4) {
          geometry.vertices.push(
            new THREE.Vector3(
              params.size.x -
                (params.size.x - params.negSize.x) * params.axisTickSize,
              params.negSize.y +
                (params.size.y - params.negSize.y) * params.axisTickSize,
              z,
            ),
            new THREE.Vector3(params.size.x, params.negSize.y, z),
          );
        }
      }
    }
  }
  // standard axes
  else {
    geometry.vertices.push(
      new THREE.Vector3(),
      new THREE.Vector3(params.size.x, 0, 0),
      new THREE.Vector3(),
      new THREE.Vector3(0, params.size.y, 0),
      new THREE.Vector3(),
      new THREE.Vector3(0, 0, params.size.z),
      new THREE.Vector3(),
      new THREE.Vector3(params.negSize.x, 0, 0),
      new THREE.Vector3(),
      new THREE.Vector3(0, params.negSize.y, 0),
      new THREE.Vector3(),
      new THREE.Vector3(0, 0, params.negSize.z),
    );
    if (params.showAxisTicks) {
      var tickMinInd = Math.ceil(params.negSize.x / params.axisTickIncrement.x);
      var tickMaxInd = Math.floor(params.size.x / params.axisTickIncrement.x);

      for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
        var x = i * params.axisTickIncrement.x;
        geometry.vertices.push(
          new THREE.Vector3(
            x,
            -(params.size.y - params.negSize.y) * params.axisTickSize,
            0,
          ),
          new THREE.Vector3(
            x,
            (params.size.y - params.negSize.y) * params.axisTickSize,
            0,
          ),
        );
      }
      tickMinInd = Math.ceil(params.negSize.y / params.axisTickIncrement.y);
      tickMaxInd = Math.floor(params.size.y / params.axisTickIncrement.y);
      for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
        var y = i * params.axisTickIncrement.y;
        geometry.vertices.push(
          new THREE.Vector3(
            -(params.size.x - params.negSize.x) * params.axisTickSize,
            y,
            0,
          ),
          new THREE.Vector3(
            (params.size.x - params.negSize.x) * params.axisTickSize,
            y,
            0,
          ),
        );
      }
      tickMinInd = Math.ceil(params.negSize.z / params.axisTickIncrement.z);
      tickMaxInd = Math.floor(params.size.z / params.axisTickIncrement.z);
      for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
        var z = i * params.axisTickIncrement.z;
        geometry.vertices.push(
          new THREE.Vector3(
            0,
            -(params.size.y - params.negSize.y) * params.axisTickSize,
            z,
          ),
          new THREE.Vector3(
            0,
            (params.size.y - params.negSize.y) * params.axisTickSize,
            z,
          ),
        );
      }
    }
  }

  const material = new THREE.LineBasicMaterial({
    vertexColors: true,
    linewidth: params.axisWidth,
  });

  const positions = [];
  const colors = [];

  const r = 800;
  let t = 0;
  const segments = 200;
  for (const vertex of geometry.vertices) {
    console.log(vertex);
    positions.push(vertex.x, vertex.y, vertex.z);

    // colors

    colors.push(0.01);
    colors.push(0.01);
    colors.push(0.01);
  }

  bufferGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  bufferGeometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(colors, 3),
  );

  bufferGeometry.computeBoundingSphere();

  let lines = new THREE.LineSegments(bufferGeometry, material);

  let sprites = [];

  return { lines, sprites };

  if (params.showBoxAxes === true) {
    if (params.showAxisTickLabels) {
      var tickMinInd = Math.ceil(params.negSize.x / params.axisTickIncrement.x);
      var tickMaxInd = Math.floor(params.size.x / params.axisTickIncrement.x);

      for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
        var x = i * params.axisTickIncrement.x;
        var xRound =
          Math.round(x * params.tickLabelRescale.x * tickLabelRoundFactor) /
          tickLabelRoundFactor;
        var sprite = new TextLabel(xRound.toString(), {
          fontSize: params.axisTickLabelFontSize,
          scale: params.labelScale,
          textColor: params.labelColor,
          fontWeight: "",
        });
        sprites.push(sprite);

        if (params.boxAxisTicksXSide == 1) {
          sprite.position.set(
            x,
            params.size.y +
              (params.size.y - params.negSize.y) * params.tickLabelSpace,
            params.size.z +
              (params.size.z - params.negSize.z) * params.tickLabelSpace,
          );
        } else if (params.boxAxisTicksXSide == 2) {
          sprite.position.set(
            x,
            params.negSize.y -
              (params.size.y - params.negSize.y) * params.tickLabelSpace,
            params.size.z +
              (params.size.z - params.negSize.z) * params.tickLabelSpace,
          );
        } else if (params.boxAxisTicksXSide == 3) {
          sprite.position.set(
            x,
            params.negSize.y -
              (params.size.y - params.negSize.y) * params.tickLabelSpace,
            params.negSize.z -
              (params.size.z - params.negSize.z) * params.tickLabelSpace,
          );
        } else if (params.boxAxisTicksXSide == 4) {
          sprite.position.set(
            x,
            params.size.y +
              (params.size.y - params.negSize.y) * params.tickLabelSpace,
            params.negSize.z -
              (params.size.z - params.negSize.z) * params.tickLabelSpace,
          );
        }
      }

      tickMinInd = Math.ceil(params.negSize.y / params.axisTickIncrement.y);
      tickMaxInd = Math.floor(params.size.y / params.axisTickIncrement.y);

      for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
        var y = i * params.axisTickIncrement.y;
        var yRound =
          Math.round(y * params.tickLabelRescale.y * tickLabelRoundFactor) /
          tickLabelRoundFactor;

        var sprite = new TextLabel(yRound.toString(), {
          fontSize: params.axisTickLabelFontSize,
          scale: params.labelScale,
          textColor: params.labelColor,
          fontWeight: "",
        });
        sprites.push(sprite);

        if (params.boxAxisTicksYSide == 1) {
          sprite.position.set(
            params.size.x +
              (params.size.x - params.negSize.x) * params.tickLabelSpace,
            y,
            params.size.z +
              (params.size.z - params.negSize.z) * params.tickLabelSpace,
          );
        } else if (params.boxAxisTicksYSide == 2) {
          sprite.position.set(
            params.negSize.x -
              (params.size.x - params.negSize.x) * params.tickLabelSpace,
            y,
            params.size.z +
              (params.size.z - params.negSize.z) * params.tickLabelSpace,
          );
        } else if (params.boxAxisTicksYSide == 3) {
          sprite.position.set(
            params.negSize.x -
              (params.size.x - params.negSize.x) * params.tickLabelSpace,
            y,
            params.negSize.z -
              (params.size.z - params.negSize.z) * params.tickLabelSpace,
          );
        } else if (params.boxAxisTicksYSide == 4) {
          sprite.position.set(
            params.size.x +
              (params.size.x - params.negSize.x) * params.tickLabelSpace,
            y,
            params.negSize.z -
              (params.size.z - params.negSize.z) * params.tickLabelSpace,
          );
        }
      }

      tickMinInd = Math.ceil(params.negSize.z / params.axisTickIncrement.z);
      tickMaxInd = Math.floor(params.size.z / params.axisTickIncrement.z);

      for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
        var z = i * params.axisTickIncrement.z;
        var zRound =
          Math.round(z * params.tickLabelRescale.z * tickLabelRoundFactor) /
          tickLabelRoundFactor;

        var sprite = new TextLabel(zRound.toString(), {
          fontSize: params.axisTickLabelFontSize,
          scale: params.labelScale,
          textColor: params.labelColor,
          fontWeight: "",
        });
        sprites.push(sprite);

        if (params.boxAxisTicksZSide == 1) {
          sprite.position.set(
            params.size.x +
              (params.size.x - params.negSize.x) * params.tickLabelSpace,
            params.size.y +
              (params.size.y - params.negSize.y) * params.tickLabelSpace,
            z,
          );
        } else if (params.boxAxisTicksZSide == 2) {
          sprite.position.set(
            params.negSize.x -
              (params.size.x - params.negSize.x) * params.tickLabelSpace,
            params.size.y +
              (params.size.y - params.negSize.y) * params.tickLabelSpace,
            z,
          );
        } else if (params.boxAxisTicksZSide == 3) {
          sprite.position.set(
            params.negSize.x -
              (params.size.x - params.negSize.x) * params.tickLabelSpace,
            params.negSize.y -
              (params.size.y - params.negSize.y) * params.tickLabelSpace,
            z,
          );
        } else if (params.boxAxisTicksZSide == 4) {
          sprite.position.set(
            params.size.x +
              (params.size.x - params.negSize.x) * params.tickLabelSpace,
            params.negSize.y -
              (params.size.y - params.negSize.y) * params.tickLabelSpace,
            z,
          );
        }
      }
    }

    // labels for box axes
    if (params.showLabels) {
      var spritex = new TextLabel(params.labelx, {
        fontSize: params.labelFontSize,
        scale: params.labelScale,
        textColor: params.labelColor,
      });
      sprites.push(spritex);
      if (params.boxAxisTicksXSide == 1) {
        spritex.position.set(
          (params.size.x + params.negSize.x) / 2,
          params.size.y +
            (params.size.y - params.negSize.y) * params.axisLabelSpace,
          params.size.z +
            (params.size.z - params.negSize.z) * params.axisLabelSpace,
        );
      } else if (params.boxAxisTicksXSide == 2) {
        spritex.position.set(
          (params.size.x + params.negSize.x) / 2,
          params.negSize.y -
            (params.size.y - params.negSize.y) * params.axisLabelSpace,
          params.size.z +
            (params.size.z - params.negSize.z) * params.axisLabelSpace,
        );
      } else if (params.boxAxisTicksXSide == 3) {
        spritex.position.set(
          (params.size.x + params.negSize.x) / 2,
          params.negSize.y -
            (params.size.y - params.negSize.y) * params.axisLabelSpace,
          params.negSize.z -
            (params.size.z - params.negSize.z) * params.axisLabelSpace,
        );
      } else if (params.boxAxisTicksXSide == 4) {
        spritex.position.set(
          (params.size.x + params.negSize.x) / 2,
          params.size.y +
            (params.size.y - params.negSize.y) * params.axisLabelSpace,
          params.negSize.z -
            (params.size.z - params.negSize.z) * params.axisLabelSpace,
        );
      }

      var spritey = new TextLabel(params.labely, {
        fontSize: params.labelFontSize,
        scale: params.labelScale,
        textColor: params.labelColor,
      });
      sprites.push(spritey);

      if (params.boxAxisTicksYSide == 1) {
        spritey.position.set(
          params.size.x +
            (params.size.x - params.negSize.x) * params.axisLabelSpace,
          (params.size.y + params.negSize.y) / 2,
          params.size.z +
            (params.size.z - params.negSize.z) * params.axisLabelSpace,
        );
      } else if (params.boxAxisTicksYSide == 2) {
        spritey.position.set(
          params.negSize.x -
            (params.size.x - params.negSize.x) * params.axisLabelSpace,
          (params.size.y + params.negSize.y) / 2,
          params.size.z +
            (params.size.z - params.negSize.z) * params.axisLabelSpace,
        );
      } else if (params.boxAxisTicksYSide == 3) {
        spritey.position.set(
          params.negSize.x -
            (params.size.x - params.negSize.x) * params.axisLabelSpace,
          (params.size.y + params.negSize.y) / 2,
          params.negSize.z -
            (params.size.z - params.negSize.z) * params.axisLabelSpace,
        );
      } else if (params.boxAxisTicksYSide == 4) {
        spritey.position.set(
          params.size.x +
            (params.size.x - params.negSize.x) * params.axisLabelSpace,
          (params.size.y + params.negSize.y) / 2,
          params.negSize.z -
            (params.size.z - params.negSize.z) * params.axisLabelSpace,
        );
      }

      var spritez = new TextLabel(params.labelz, {
        fontSize: params.labelFontSize,
        scale: params.labelScale,
        textColor: params.labelColor,
      });
      sprites.push(spritez);

      if (params.boxAxisTicksZSide == 1) {
        spritez.position.set(
          params.size.x +
            (params.size.x - params.negSize.x) * params.axisLabelSpace,
          params.size.y +
            (params.size.y - params.negSize.y) * params.axisLabelSpace,
          (params.size.z + params.negSize.z) / 2,
        );
      } else if (params.boxAxisTicksZSide == 2) {
        spritez.position.set(
          params.negSize.x -
            (params.size.x - params.negSize.x) * params.axisLabelSpace,
          params.size.y +
            (params.size.y - params.negSize.y) * params.axisLabelSpace,
          (params.size.z + params.negSize.z) / 2,
        );
      } else if (params.boxAxisTicksZSide == 3) {
        spritez.position.set(
          params.negSize.x -
            (params.size.x - params.negSize.x) * params.axisLabelSpace,
          params.negSize.y -
            (params.size.y - params.negSize.y) * params.axisLabelSpace,
          (params.size.z + params.negSize.z) / 2,
        );
      } else if (params.boxAxisTicksZSide == 4) {
        spritez.position.set(
          params.size.x +
            (params.size.x - params.negSize.x) * params.axisLabelSpace,
          params.negSize.y -
            (params.size.y - params.negSize.y) * params.axisLabelSpace,
          (params.size.z + params.negSize.z) / 2,
        );
      }

      var spriteOverallLabel = new TextLabel(params.label, {
        fontSize: params.labelFontSize,
        scale: params.labelScale,
        textColor: params.labelColor,
      });
      spriteOverallLabel.position.set(
        params.size.x * 1.1,
        params.size.y * 1.1,
        params.size.z * 1.1,
      );
      sprites.push(spriteOverallLabel);
    }
  } else {
    // ticks for standard axes
    if (params.showAxisTickLabels) {
      var tickMinInd = Math.ceil(params.negSize.x / params.axisTickIncrement.x);
      var tickMaxInd = Math.floor(params.size.x / params.axisTickIncrement.x);

      for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
        var x = i * params.axisTickIncrement.x;
        var xRound =
          Math.round(x * tickLabelRoundFactor) / tickLabelRoundFactor;

        if (i != 0) {
          var sprite = new TextLabel(xRound.toString(), {
            fontSize: params.axisTickLabelFontSize,
            scale: params.labelScale,
            textColor: params.labelColor,
            fontWeight: "",
          });
          console.log(sprite);
          sprite.position.set(
            x,
            (params.size.y - params.negSize.y) * params.tickLabelSpace,
            0,
          );
          sprites.push(sprite);
        }
      }

      tickMinInd = Math.ceil(params.negSize.y / params.axisTickIncrement.y);
      tickMaxInd = Math.floor(params.size.y / params.axisTickIncrement.y);

      for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
        var y = i * params.axisTickIncrement.y;
        var yRound =
          Math.round(y * tickLabelRoundFactor) / tickLabelRoundFactor;
        if (i != 0) {
          var sprite = new TextLabel(yRound.toString(), {
            fontSize: params.axisTickLabelFontSize,
            scale: params.labelScale,
            textColor: params.labelColor,
            fontWeight: "",
          });
          sprite.position.set(
            (params.size.x - params.negSize.x) * params.tickLabelSpace,
            y,
            0,
          );
          sprites.push(sprite);
        }
      }

      tickMinInd = Math.ceil(params.negSize.z / params.axisTickIncrement.z);
      tickMaxInd = Math.floor(params.size.z / params.axisTickIncrement.z);

      for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
        var z = i * params.axisTickIncrement.z;
        var zRound =
          Math.round(z * tickLabelRoundFactor) / tickLabelRoundFactor;
        if (i != 0) {
          var sprite = new TextLabel(zRound.toString(), {
            fontSize: params.axisTickLabelFontSize,
            scale: params.labelScale,
            textColor: params.labelColor,
            fontWeight: "",
          });
          sprite.position.set(
            0,
            (params.size.y - params.negSize.y) * params.tickLabelSpace,
            z,
          );
          sprites.push(sprite);
        }
      }
    }

    // labels for standard axes
    if (params.showLabels) {
      var spritex = new TextLabel(params.labelx, {
        fontSize: params.labelFontSize,
        scale: params.labelScale,
        textColor: params.labelColor,
      });
      spritex.position.set(
        params.size.x + (params.size.x - params.negSize.x) * 0.05,
        0,
        0,
      );
      sprites.push(spritex);

      var spritey = new TextLabel(params.labely, {
        fontSize: params.labelFontSize,
        scale: params.labelScale,
        textColor: params.labelColor,
      });
      spritey.position.set(
        0,
        params.size.y + (params.size.y - params.negSize.y) * 0.05,
        0,
      );
      sprites.push(spritey);

      var spritez = new TextLabel(params.labelz, {
        fontSize: params.labelFontSize,
        scale: params.labelScale,
        textColor: params.labelColor,
      });
      spritez.position.set(
        0,
        0,
        params.size.z + (params.size.z - params.negSize.z) * 0.05,
      );
      sprites.push(spritez);

      var spriteOverallLabel = new TextLabel(params.label, {
        fontSize: params.labelFontSize,
        scale: params.labelScale,
        textColor: params.labelColor,
      });
      spriteOverallLabel.position.set(
        params.size.x * 1.1,
        params.size.y * 1.1,
        params.size.z * 1.1,
      );
      sprites.push(spriteOverallLabel);
    }
  }
  return { sprites, lines };
}

Axes.prototype = Object.create(THREE.Line.prototype);

// two-dimensional axes
var Axes2D = function (params) {
  if (params === undefined) {
    var params = {};
  }

  if (!isNaN(params)) {
    //i.e. if params is a number, convert it to object format
    var incomingSize = params;
    params = {};
    params.size = incomingSize;
  }

  if (params.size === undefined) {
    params.size = new THREE.Vector2(1, 1);
  } else if (!(params.size instanceof THREE.Vector2)) {
    params.size = new THREE.Vector2(params.size, params.size);
  }

  if (params.negSize === undefined) {
    params.negSize = params.size.clone().negate();
  } else if (!(params.negSize instanceof THREE.Vector2)) {
    params.negSize = new THREE.Vector3(params.negSize, params.negSize);
  }

  if (params.label === undefined) {
    params.label = "";
  }
  if (params.labelx === undefined) {
    params.labelx = "x";
  }
  if (params.labely === undefined) {
    params.labely = "y";
  }
  if (params.showLabels === undefined) {
    params.showLabels = true;
  }
  if (params.color === undefined) {
    params.color = 0x000000;
  }
  if (params.labelFontSize === undefined) {
    params.labelFontSize = 120;
  }
  if (params.labelScale === undefined) {
    params.labelScale = 2;
  }
  if (params.labelColor === undefined) {
    params.labelColor = "#000000";
  }
  if (params.axisWidth === undefined) {
    params.axisWidth = 5;
  }

  if (params.showAxisTicks === undefined) {
    params.showAxisTicks = false;
  }
  if (params.axisTickSize === undefined) {
    params.axisTickSize = 0.03;
  }
  if (params.axisTickIncrement === undefined) {
    params.axisTickIncrement = new THREE.Vector2(1, 1);
  } else if (!(params.axisTickIncrement instanceof THREE.Vector2)) {
    params.axisTickIncrement = new THREE.Vector2(
      params.axisTickIncrement,
      params.axisTickIncrement,
    );
  }
  if (params.showAxisTickLabels === undefined) {
    params.showAxisTickLabels = false;
  }
  if (params.axisTickLabelFontSize === undefined) {
    params.axisTickLabelFontSize = params.labelFontSize;
  }
  if (params.showZeroTickLabels === undefined) {
    params.showZeroTickLabels = false;
  }
  if (params.tickLabelDigits === undefined) {
    params.tickLabelDigits = 1;
  }
  var tickLabelRoundFactor = Math.pow(10, params.tickLabelDigits);

  var geometry = new THREE.Geometry();

  geometry.vertices.push(
    new THREE.Vector3(),
    new THREE.Vector3(params.size.x, 0, 0),
    new THREE.Vector3(),
    new THREE.Vector3(0, params.size.y, 0),
    new THREE.Vector3(),
    new THREE.Vector3(params.negSize.x, 0, 0),
    new THREE.Vector3(),
    new THREE.Vector3(0, params.negSize.y, 0),
  );

  if (params.showAxisTicks) {
    var tickMinInd = Math.ceil(params.negSize.x / params.axisTickIncrement.x);
    var tickMaxInd = Math.floor(params.size.x / params.axisTickIncrement.x);

    for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
      var x = i * params.axisTickIncrement.x;
      geometry.vertices.push(
        new THREE.Vector3(
          x,
          -(params.size.y - params.negSize.y) * params.axisTickSize,
          0,
        ),
        new THREE.Vector3(
          x,
          (params.size.y - params.negSize.y) * params.axisTickSize,
          0,
        ),
      );
    }
    tickMinInd = Math.ceil(params.negSize.y / params.axisTickIncrement.y);
    tickMaxInd = Math.floor(params.size.y / params.axisTickIncrement.y);
    for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
      var y = i * params.axisTickIncrement.y;
      geometry.vertices.push(
        new THREE.Vector3(
          -(params.size.x - params.negSize.x) * params.axisTickSize,
          y,
          0,
        ),
        new THREE.Vector3(
          (params.size.x - params.negSize.x) * params.axisTickSize,
          y,
          0,
        ),
      );
    }
  }
  var material = new THREE.LineBasicMaterial({
    color: params.color,
    linewidth: params.axisWidth,
  });

  THREE.Line.call(this, geometry, material, THREE.LinePieces);

  if (params.showLabels) {
    var spritex = new TextLabel(params.labelx, {
      fontSize: params.labelFontSize,
      scale: params.labelScale,
      textColor: params.labelColor,
    });
    spritex.position.set(
      params.size.x + (params.size.x - params.negSize.x) * 0.05,
      0,
      0,
    );
    sprites.push(spritex);

    var spritey = new TextLabel(params.labely, {
      fontSize: params.labelFontSize,
      scale: params.labelScale,
      textColor: params.labelColor,
    });
    spritey.position.set(
      0,
      params.size.y + (params.size.y - params.negSize.y) * 0.05,
      0,
    );
    sprites.push(spritey);
  }
  if (params.showAxisTickLabels) {
    var tickMinInd = Math.ceil(params.negSize.x / params.axisTickIncrement.x);
    var tickMaxInd = Math.floor(params.size.x / params.axisTickIncrement.x);

    for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
      var x = i * params.axisTickIncrement.x;
      var xRound = Math.round(x * tickLabelRoundFactor) / tickLabelRoundFactor;

      if (i != 0 || params.showZeroTickLabels) {
        var sprite = new TextLabel(xRound.toString(), {
          fontSize: params.axisTickLabelFontSize,
          scale: params.labelScale,
          textColor: params.labelColor,
          fontWeight: "",
        });
        sprite.position.set(
          x,
          -(params.size.y - params.negSize.y) * params.axisTickSize * 3,
          0,
        );
        sprites.push(sprite);
      }
    }

    tickMinInd = Math.ceil(params.negSize.y / params.axisTickIncrement.y);
    tickMaxInd = Math.floor(params.size.y / params.axisTickIncrement.y);

    for (var i = tickMinInd; i <= tickMaxInd; i += 1) {
      var y = i * params.axisTickIncrement.y;
      var yRound = Math.round(y * tickLabelRoundFactor) / tickLabelRoundFactor;
      if (i != 0 || params.showZeroTickLabels) {
        var sprite = new TextLabel(yRound.toString(), {
          fontSize: params.axisTickLabelFontSize,
          scale: params.labelScale,
          textColor: params.labelColor,
          fontWeight: "",
        });
        sprite.position.set(
          -(params.size.x - params.negSize.x) * params.axisTickSize * 3,
          y,
          0,
        );
        sprites.push(sprite);
      }
    }
  }
  let ret = { sprites: sprites, lines: lines };
  console.log(ret);
  return ret;
};
