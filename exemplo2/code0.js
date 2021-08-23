gdjs.SplashscreenCode = {};
gdjs.SplashscreenCode.GDIniciarObjects1= [];
gdjs.SplashscreenCode.GDIniciarObjects2= [];
gdjs.SplashscreenCode.GDmmeObjects1= [];
gdjs.SplashscreenCode.GDmmeObjects2= [];
gdjs.SplashscreenCode.GDDeObjects1= [];
gdjs.SplashscreenCode.GDDeObjects2= [];
gdjs.SplashscreenCode.GDLogosenacObjects1= [];
gdjs.SplashscreenCode.GDLogosenacObjects2= [];

gdjs.SplashscreenCode.conditionTrue_0 = {val:false};
gdjs.SplashscreenCode.condition0IsTrue_0 = {val:false};
gdjs.SplashscreenCode.condition1IsTrue_0 = {val:false};


gdjs.SplashscreenCode.mapOfGDgdjs_46SplashscreenCode_46GDIniciarObjects1Objects = Hashtable.newFrom({"Iniciar": gdjs.SplashscreenCode.GDIniciarObjects1});gdjs.SplashscreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Meenu", false);
}}

}


};gdjs.SplashscreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Iniciar"), gdjs.SplashscreenCode.GDIniciarObjects1);

gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashscreenCode.mapOfGDgdjs_46SplashscreenCode_46GDIniciarObjects1Objects, runtimeScene, true, false);
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashscreenCode.GDIniciarObjects1 */
{for(var i = 0, len = gdjs.SplashscreenCode.GDIniciarObjects1.length ;i < len;++i) {
    gdjs.SplashscreenCode.GDIniciarObjects1[i].setColor("255;150;150");
}
}
{ //Subevents
gdjs.SplashscreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.SplashscreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashscreenCode.GDIniciarObjects1.length = 0;
gdjs.SplashscreenCode.GDIniciarObjects2.length = 0;
gdjs.SplashscreenCode.GDmmeObjects1.length = 0;
gdjs.SplashscreenCode.GDmmeObjects2.length = 0;
gdjs.SplashscreenCode.GDDeObjects1.length = 0;
gdjs.SplashscreenCode.GDDeObjects2.length = 0;
gdjs.SplashscreenCode.GDLogosenacObjects1.length = 0;
gdjs.SplashscreenCode.GDLogosenacObjects2.length = 0;

gdjs.SplashscreenCode.eventsList1(runtimeScene);
return;

}

gdjs['SplashscreenCode'] = gdjs.SplashscreenCode;
