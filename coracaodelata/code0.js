gdjs.SplashScreenCode = {};
gdjs.SplashScreenCode.GDstartObjects1= [];
gdjs.SplashScreenCode.GDstartObjects2= [];
gdjs.SplashScreenCode.GDpindaObjects1= [];
gdjs.SplashScreenCode.GDpindaObjects2= [];
gdjs.SplashScreenCode.GDapresentaObjects1= [];
gdjs.SplashScreenCode.GDapresentaObjects2= [];

gdjs.SplashScreenCode.conditionTrue_0 = {val:false};
gdjs.SplashScreenCode.condition0IsTrue_0 = {val:false};
gdjs.SplashScreenCode.condition1IsTrue_0 = {val:false};
gdjs.SplashScreenCode.condition2IsTrue_0 = {val:false};
gdjs.SplashScreenCode.conditionTrue_1 = {val:false};
gdjs.SplashScreenCode.condition0IsTrue_1 = {val:false};
gdjs.SplashScreenCode.condition1IsTrue_1 = {val:false};
gdjs.SplashScreenCode.condition2IsTrue_1 = {val:false};


gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.SplashScreenCode.GDstartObjects1});gdjs.SplashScreenCode.eventsList0x898aec = function(runtimeScene) {

{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuPrincipal", false);
}}

}


}; //End of gdjs.SplashScreenCode.eventsList0x898aec
gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.SplashScreenCode.GDstartObjects1});gdjs.SplashScreenCode.eventsList0xb43b0 = function(runtimeScene) {

{



}


{



}


{

gdjs.SplashScreenCode.GDstartObjects1.createFrom(runtimeScene.getObjects("start"));

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDstartObjects1Objects, runtimeScene, true, false);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SplashScreenCode.eventsList0x898aec(runtimeScene);} //End of subevents
}

}


{

gdjs.SplashScreenCode.GDstartObjects1.createFrom(runtimeScene.getObjects("start"));

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
gdjs.SplashScreenCode.condition1IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SplashScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.SplashScreenCode.conditionTrue_1 = gdjs.SplashScreenCode.condition1IsTrue_0;
gdjs.SplashScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9015084);
}
}}
if (gdjs.SplashScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "efeitos sonoros\\Flash Frame 01.mp3", false, 100, 1);
}}

}


{



}


}; //End of gdjs.SplashScreenCode.eventsList0xb43b0


gdjs.SplashScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashScreenCode.GDstartObjects1.length = 0;
gdjs.SplashScreenCode.GDstartObjects2.length = 0;
gdjs.SplashScreenCode.GDpindaObjects1.length = 0;
gdjs.SplashScreenCode.GDpindaObjects2.length = 0;
gdjs.SplashScreenCode.GDapresentaObjects1.length = 0;
gdjs.SplashScreenCode.GDapresentaObjects2.length = 0;

gdjs.SplashScreenCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['SplashScreenCode'] = gdjs.SplashScreenCode;
