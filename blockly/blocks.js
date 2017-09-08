Blockly.Blocks['wabot_new'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.WEBDUINO_WABOT, "瓦寶機器人");
        this.setOutput(true);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('https://webduino.io');
    }
};


Blockly.Blocks['wabot_step'] = {
    init: function() {
        this.appendValueInput("step")
            .setCheck("Number")
            .appendField(new Blockly.FieldVariable("wabot"), "wabot")
            .appendField("動作")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["往前走", "walk"],
                    ["跑步", "run"]
                ]), "step");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('https://webduino.io');
    }
};



Blockly.Blocks['wabot_backyard'] = {
    init: function() {
        this.appendValueInput("step")
            .setCheck("Number")
            .appendField(new Blockly.FieldVariable("wabot"), "wabot")
            .appendField("動作")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["向後轉", "backyard"],
                    ["慢慢向後轉", "backyardSlow"]
                ]), "step");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('https://webduino.io');
    }
};



Blockly.Blocks['wabot_turn'] = {
    init: function() {
        this.appendValueInput("step")
            .setCheck("Number")
            .appendField(new Blockly.FieldVariable("wabot"), "wabot")
            .appendField("動作")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["向左轉", "turnLeft"],
                    ["向右轉", "turnRight"]
                ]), "step");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('https://webduino.io');
    }
};



Blockly.Blocks['wabot_action'] = {
    init: function() {
        this.appendValueInput("step")
            .setCheck("Number")
            .appendField(new Blockly.FieldVariable("wabot"), "wabot")
            .appendField("動作")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["立正", "standard"],
                    ["墊腳尖", "goingUp"],
                    ["踢左腳", "kickLeft"],
                    ["踢右腳", "kickRight"],
                    ["向左月球漫步", "moonWalkLeft"],
                    ["向右月球漫步", "moonWalkRight"],
                    ["玻璃舞", "crusaito"],
                    ["裝可愛", "swing"],
                    ["上下跳動", "upDown"],
                    ["快樂向前", "flapping"]
                ]), "step");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('https://webduino.io');
    }
};



Blockly.Blocks['wabot_tempo'] = {
    init: function() {
        this.appendValueInput("step")
            .setCheck("Number")
            .appendField(new Blockly.FieldVariable("wabot"), "wabot")
            .appendField("動作")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["跳舞", "dance"],
                    ["酒醉", "drunk"],
                    ["跌倒", "noGravity"],
                ]), "step");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('https://webduino.io');
    }
};



Blockly.Blocks['wabot_walk'] = {
    init: function() {
        this.appendValueInput("step")
            .setCheck("Number")
            .appendField(new Blockly.FieldVariable("wabot"), "wabot")
            .appendField(Blockly.Msg.WEBDUINO_WABOT_WALK);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip('');
    }
};