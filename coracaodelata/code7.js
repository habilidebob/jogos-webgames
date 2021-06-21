gdjs.Op_231oesCode = {};
gdjs.Op_231oesCode.GDmaisObjects1= [];
gdjs.Op_231oesCode.GDmaisObjects2= [];
gdjs.Op_231oesCode.GDmenosObjects1= [];
gdjs.Op_231oesCode.GDmenosObjects2= [];
gdjs.Op_231oesCode.GDbarravolumeObjects1= [];
gdjs.Op_231oesCode.GDbarravolumeObjects2= [];
gdjs.Op_231oesCode.GDVolumeAtualObjects1= [];
gdjs.Op_231oesCode.GDVolumeAtualObjects2= [];

gdjs.Op_231oesCode.conditionTrue_0 = {val:false};
gdjs.Op_231oesCode.condition0IsTrue_0 = {val:false};
gdjs.Op_231oesCode.condition1IsTrue_0 = {val:false};
gdjs.Op_231oesCode.conditionTrue_1 = {val:false};
gdjs.Op_231oesCode.condition0IsTrue_1 = {val:false};
gdjs.Op_231oesCode.condition1IsTrue_1 = {val:false};


gdjs.Op_231oesCode.eventsList0x8f6e04 = function(runtimeScene) {

{


gdjs.Op_231oesCode.condition0IsTrue_0.val = false;
{
{gdjs.Op_231oesCode.conditionTrue_1 = gdjs.Op_231oesCode.condition0IsTrue_0;
gdjs.Op_231oesCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9400188);
}
}if (gdjs.Op_231oesCode.condition0IsTrue_0.val) {
gdjs.Op_231oesCode.GDbarravolumeObjects1.createFrom(runtimeScene.getObjects("barravolume"));
{for(var i = 0, len = gdjs.Op_231oesCode.GDbarravolumeObjects1.length ;i < len;++i) {
    gdjs.Op_231oesCode.GDbarravolumeObjects1[i].setWidth(gdjs.Op_231oesCode.GDbarravolumeObjects1[i].getWidth() - (40));
}
}{runtimeScene.getGame().getVariables().get("volume").sub(10);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("volume")));
}}

}


}; //End of gdjs.Op_231oesCode.eventsList0x8f6e04
gdjs.Op_231oesCode.eventsList0x8f6cfc = function(runtimeScene) {

{


gdjs.Op_231oesCode.condition0IsTrue_0.val = false;
{
gdjs.Op_231oesCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("volume")) > 0;
}if (gdjs.Op_231oesCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Op_231oesCode.eventsList0x8f6e04(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Op_231oesCode.eventsList0x8f6cfc
gdjs.Op_231oesCode.eventsList0x8f73ac = function(runtimeScene) {

{


gdjs.Op_231oesCode.condition0IsTrue_0.val = false;
{
{gdjs.Op_231oesCode.conditionTrue_1 = gdjs.Op_231oesCode.condition0IsTrue_0;
gdjs.Op_231oesCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9401636);
}
}if (gdjs.Op_231oesCode.condition0IsTrue_0.val) {
gdjs.Op_231oesCode.GDbarravolumeObjects1.createFrom(runtimeScene.getObjects("barravolume"));
{for(var i = 0, len = gdjs.Op_231oesCode.GDbarravolumeObjects1.length ;i < len;++i) {
    gdjs.Op_231oesCode.GDbarravolumeObjects1[i].setWidth(gdjs.Op_231oesCode.GDbarravolumeObjects1[i].getWidth() + (40));
}
}{runtimeScene.getGame().getVariables().get("volume").add(10);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("volume")));
}}

}


}; //End of gdjs.Op_231oesCode.eventsList0x8f73ac
gdjs.Op_231oesCode.eventsList0x8f72cc = function(runtimeScene) {

{


gdjs.Op_231oesCode.condition0IsTrue_0.val = false;
{
gdjs.Op_231oesCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("volume")) < 100;
}if (gdjs.Op_231oesCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Op_231oesCode.eventsList0x8f73ac(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Op_231oesCode.eventsList0x8f72cc
gdjs.Op_231oesCode.eventsList0xb43b0 = function(runtimeScene) {

{


{
}

}


{



}


{


{
gdjs.Op_231oesCode.GDVolumeAtualObjects1.createFrom(runtimeScene.getObjects("VolumeAtual"));
{for(var i = 0, len = gdjs.Op_231oesCode.GDVolumeAtualObjects1.length ;i < len;++i) {
    gdjs.Op_231oesCode.GDVolumeAtualObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("volume")));
}
}}

}


{


gdjs.Op_231oesCode.condition0IsTrue_0.val = false;
{
gdjs.Op_231oesCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Op_231oesCode.condition0IsTrue_0.val) {
gdjs.Op_231oesCode.GDbarravolumeObjects1.createFrom(runtimeScene.getObjects("barravolume"));
{gdjs.evtTools.sound.playSound(runtimeScene, "musicas\\Our-Mountain_v003_Looping.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Op_231oesCode.GDbarravolumeObjects1.length ;i < len;++i) {
    gdjs.Op_231oesCode.GDbarravolumeObjects1[i].setWidth(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("volume")) * 4);
}
}}

}


{


gdjs.Op_231oesCode.condition0IsTrue_0.val = false;
{
gdjs.Op_231oesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Op_231oesCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Op_231oesCode.eventsList0x8f6cfc(runtimeScene);} //End of subevents
}

}


{


gdjs.Op_231oesCode.condition0IsTrue_0.val = false;
{
gdjs.Op_231oesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Op_231oesCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Op_231oesCode.eventsList0x8f72cc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Op_231oesCode.eventsList0xb43b0


gdjs.Op_231oesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Op_231oesCode.GDmaisObjects1.length = 0;
gdjs.Op_231oesCode.GDmaisObjects2.length = 0;
gdjs.Op_231oesCode.GDmenosObjects1.length = 0;
gdjs.Op_231oesCode.GDmenosObjects2.length = 0;
gdjs.Op_231oesCode.GDbarravolumeObjects1.length = 0;
gdjs.Op_231oesCode.GDbarravolumeObjects2.length = 0;
gdjs.Op_231oesCode.GDVolumeAtualObjects1.length = 0;
gdjs.Op_231oesCode.GDVolumeAtualObjects2.length = 0;

gdjs.Op_231oesCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['Op_231oesCode'] = gdjs.Op_231oesCode;
