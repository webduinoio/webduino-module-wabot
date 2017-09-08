Blockly.JavaScript['wabot_new'] = function(block) {
    var code = 'getwabot(board)';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['wabot_walk'] = function(block) {
    var variable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('wabot'), Blockly.Variables.NAME_TYPE);
    var value_ = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
    var code = variable_ + '.walk(' + value_ + ',function(){});\n';
    return code;
};

Blockly.JavaScript['wabot_step'] = function(block) {
    var variable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('wabot'), Blockly.Variables.NAME_TYPE);
    var dropdown_step = block.getFieldValue('step');
    var value_step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
    var code = variable_ + '.' + dropdown_step + '(' + value_step + ',function(){});\n';
    return code;
};

Blockly.JavaScript['wabot_backyard'] = function(block) {
    var variable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('wabot'), Blockly.Variables.NAME_TYPE);
    var dropdown_step = block.getFieldValue('step');
    var value_step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
    var code = variable_ + '.' + dropdown_step + '(' + value_step + ',function(){});\n';
    return code;
};

Blockly.JavaScript['wabot_turn'] = function(block) {
    var variable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('wabot'), Blockly.Variables.NAME_TYPE);
    var dropdown_step = block.getFieldValue('step');
    var value_step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
    var code = variable_ + '.' + dropdown_step + '(' + value_step + ',function(){});\n';
    return code;
};

Blockly.JavaScript['wabot_action'] = function(block) {
    var variable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('wabot'), Blockly.Variables.NAME_TYPE);
    var dropdown_step = block.getFieldValue('step');
    var value_step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
    var code = variable_ + '.' + dropdown_step + '(' + value_step + ',function(){});\n';
    return code;
};

Blockly.JavaScript['wabot_tempo'] = function(block) {
    var variable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('wabot'), Blockly.Variables.NAME_TYPE);
    var dropdown_step = block.getFieldValue('step');
    var value_step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
    var code = variable_ + '.' + dropdown_step + '(' + value_step + ',function(){});\n';
    return code;
};