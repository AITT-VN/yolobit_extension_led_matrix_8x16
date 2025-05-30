const LEDMATRIX16x8ColorBlock = "#5d2c91";

var digitalPins = [
  [
    "P0",
    "pin0.pin"
  ],
  [
    "P1",
    "pin1.pin"
  ],
  [
    "P2",
    "pin2.pin"
  ],
  [
    "P3",
    "pin3.pin"
  ],
  [
    "P6",
    "pin6.pin"
  ],
  [
    "P10",
    "pin10.pin"
  ],
  [
    "P11",
    "pin11.pin"
  ],
  [
    "P12",
    "pin12.pin"
  ],
  [
    "P13",
    "pin13.pin"
  ],
  [
    "P14",
    "pin14.pin"
  ],
  [
    "P15",
    "pin15.pin"
  ],
  [
    "P16",
    "pin16.pin"
  ]
];

Blockly.Blocks["yolobit_led_matrix_create"] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      type: "yolobit_led_matrix_create",
      message0: "khởi tạo module led matrix chân DIO %1 chân CLK %2",
      args0: [
        {
          type: "field_dropdown",
          name: "DATA",
          options: digitalPins
        },
        {
          type: "field_dropdown",
          name: "CLK",
          options: digitalPins
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: LEDMATRIX16x8ColorBlock,
      tooltip: "",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["led_matrix"];
  },
};

Blockly.Blocks["yolobit_led_matrix_show_adv_image"] = {
  init: function () {
    this.jsonInit({
      colour: LEDMATRIX16x8ColorBlock,
      nextStatement: null,
      tooltip: 'Click vào để thay đổi hình ảnh',
      message0: 'led matrix hiện hình ảnh %1',
      previousStatement: null,
      args0: [
        {
          type: "field_matrix_image",
          name: "matrix_image",
          src: [0, 0, 0, 0, 60, 66, 149, 161, 161, 149, 66, 60, 0, 0, 0, 0],
          width: 50,
          height: 25,
          cols: 16,
          rows: 8,
          alt: "*",
        },
      ],
      helpUrl: ''
    });
  },
};

Blockly.Blocks["yolobit_led_matrix_show_image"] = {
  init: function () {
    this.jsonInit({
      colour: LEDMATRIX16x8ColorBlock,
      nextStatement: null,
      tooltip: '',
      message0: 'led matrix hiện hình ảnh %1 %2',
      previousStatement: null,
      args0: [
        { type: "input_value", name: "image", check: "yolobit_image" },
        { type: "input_dummy" }
      ],
      helpUrl: '',
    });
  }
};

Blockly.Blocks["yolobit_led_matrix_display"] = {
  init: function () {
    this.jsonInit({
      colour: LEDMATRIX16x8ColorBlock,
      nextStatement: null,
      tooltip: '',
      message0: 'led matrix hiện giá trị %1 %2',
      previousStatement: null,
      args0: [
        { type: "input_value", name: "value" },
        { type: "input_dummy" },
      ],
      helpUrl: ''
    });
  },
  getDeveloperVars: function () {
    return ["led_matrix"];
  },
};

// Python

Blockly.Python["yolobit_led_matrix_create"] = function (block) {
  var dropdown_clk = block.getFieldValue("CLK");
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  Blockly.Python.definitions_["import_tm1637"] = "from led_matrix import *";
  Blockly.Python.definitions_['create_tm1637'] = "led_matrix = LedMatrix(dio=" + dropdown_data + ", clk=" + dropdown_clk + ")";
  var code = '';
  return code;
};

Blockly.Python['yolobit_led_matrix_show_adv_image'] = function (block) {
  var matrix_image = block.getFieldValue('matrix_image');
  matrix_image = `[${matrix_image.toString()}]`;
  var code = 'led_matrix.show(' + matrix_image + ')\n';
  return code;
};

Blockly.Python['yolobit_led_matrix_show_image'] = function (block) {
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_MEMBER);
  var code = 'led_matrix.show(' + value_image + ')\n';
  return code;
};

Blockly.Python['yolobit_led_matrix_display'] = function (block) {
  var value_text = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_MEMBER);
  var code = 'led_matrix.show(' + value_text + ')\n';
  return code;
};