gdjs.TheEndCode = {};
gdjs.TheEndCode.GDNewObjectObjects1= [];
gdjs.TheEndCode.GDNewObjectObjects2= [];

gdjs.TheEndCode.conditionTrue_0 = {val:false};
gdjs.TheEndCode.condition0IsTrue_0 = {val:false};
gdjs.TheEndCode.condition1IsTrue_0 = {val:false};


gdjs.TheEndCode.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.TheEndCode.condition0IsTrue_0.val = false;
{
gdjs.TheEndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TheEndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Evidências - Chitãozinho e Xororó (8-bits).mp3", true, 100, 1);
}}

}


}; //End of gdjs.TheEndCode.eventsList0xb43b0


gdjs.TheEndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TheEndCode.GDNewObjectObjects1.length = 0;
gdjs.TheEndCode.GDNewObjectObjects2.length = 0;

gdjs.TheEndCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['TheEndCode'] = gdjs.TheEndCode;
