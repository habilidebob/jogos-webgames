gdjs.SplashscreenCode = {};
gdjs.SplashscreenCode.GDNewObjectObjects1= [];
gdjs.SplashscreenCode.GDNewObjectObjects2= [];
gdjs.SplashscreenCode.GDNewObject2Objects1= [];
gdjs.SplashscreenCode.GDNewObject2Objects2= [];
gdjs.SplashscreenCode.GDnomeAlunoObjects1= [];
gdjs.SplashscreenCode.GDnomeAlunoObjects2= [];

gdjs.SplashscreenCode.conditionTrue_0 = {val:false};
gdjs.SplashscreenCode.condition0IsTrue_0 = {val:false};
gdjs.SplashscreenCode.condition1IsTrue_0 = {val:false};
gdjs.SplashscreenCode.condition2IsTrue_0 = {val:false};


gdjs.SplashscreenCode.mapOfGDgdjs_46SplashscreenCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.SplashscreenCode.GDNewObjectObjects1});gdjs.SplashscreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.SplashscreenCode.GDNewObjectObjects1);

gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
gdjs.SplashscreenCode.condition1IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashscreenCode.mapOfGDgdjs_46SplashscreenCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SplashscreenCode.condition0IsTrue_0.val ) {
{
gdjs.SplashscreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SplashscreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


{
}

}


};

gdjs.SplashscreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashscreenCode.GDNewObjectObjects1.length = 0;
gdjs.SplashscreenCode.GDNewObjectObjects2.length = 0;
gdjs.SplashscreenCode.GDNewObject2Objects1.length = 0;
gdjs.SplashscreenCode.GDNewObject2Objects2.length = 0;
gdjs.SplashscreenCode.GDnomeAlunoObjects1.length = 0;
gdjs.SplashscreenCode.GDnomeAlunoObjects2.length = 0;

gdjs.SplashscreenCode.eventsList0(runtimeScene);
return;

}

gdjs['SplashscreenCode'] = gdjs.SplashscreenCode;
