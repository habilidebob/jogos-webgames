gdjs.AberturaCode = {};
gdjs.AberturaCode.GDPomboObjects1= [];
gdjs.AberturaCode.GDPomboObjects2= [];
gdjs.AberturaCode.GDPrincesaObjects1= [];
gdjs.AberturaCode.GDPrincesaObjects2= [];
gdjs.AberturaCode.GDPombohudObjects1= [];
gdjs.AberturaCode.GDPombohudObjects2= [];
gdjs.AberturaCode.GDTextoPombosObjects1= [];
gdjs.AberturaCode.GDTextoPombosObjects2= [];
gdjs.AberturaCode.GDCobraObjects1= [];
gdjs.AberturaCode.GDCobraObjects2= [];
gdjs.AberturaCode.GDLancheVidaObjects1= [];
gdjs.AberturaCode.GDLancheVidaObjects2= [];
gdjs.AberturaCode.GDZumbi1Objects1= [];
gdjs.AberturaCode.GDZumbi1Objects2= [];
gdjs.AberturaCode.GDVidaCObjects1= [];
gdjs.AberturaCode.GDVidaCObjects2= [];
gdjs.AberturaCode.GDPrincipeObjects1= [];
gdjs.AberturaCode.GDPrincipeObjects2= [];
gdjs.AberturaCode.GDChaoMorreObjects1= [];
gdjs.AberturaCode.GDChaoMorreObjects2= [];
gdjs.AberturaCode.GDLOGOSENACObjects1= [];
gdjs.AberturaCode.GDLOGOSENACObjects2= [];
gdjs.AberturaCode.GDNewObjectObjects1= [];
gdjs.AberturaCode.GDNewObjectObjects2= [];
gdjs.AberturaCode.GDCliqueAquiObjects1= [];
gdjs.AberturaCode.GDCliqueAquiObjects2= [];

gdjs.AberturaCode.conditionTrue_0 = {val:false};
gdjs.AberturaCode.condition0IsTrue_0 = {val:false};
gdjs.AberturaCode.condition1IsTrue_0 = {val:false};
gdjs.AberturaCode.condition2IsTrue_0 = {val:false};
gdjs.AberturaCode.conditionTrue_1 = {val:false};
gdjs.AberturaCode.condition0IsTrue_1 = {val:false};
gdjs.AberturaCode.condition1IsTrue_1 = {val:false};
gdjs.AberturaCode.condition2IsTrue_1 = {val:false};


gdjs.AberturaCode.mapOfGDgdjs_46AberturaCode_46GDCliqueAquiObjects1Objects = Hashtable.newFrom({"CliqueAqui": gdjs.AberturaCode.GDCliqueAquiObjects1});gdjs.AberturaCode.mapOfGDgdjs_46AberturaCode_46GDCliqueAquiObjects1Objects = Hashtable.newFrom({"CliqueAqui": gdjs.AberturaCode.GDCliqueAquiObjects1});gdjs.AberturaCode.eventsList0x95ed44 = function(runtimeScene) {

{


gdjs.AberturaCode.condition0IsTrue_0.val = false;
{
gdjs.AberturaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.AberturaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.AberturaCode.eventsList0x95ed44
gdjs.AberturaCode.eventsList0xb43b0 = function(runtimeScene) {

{

gdjs.AberturaCode.GDCliqueAquiObjects1.createFrom(runtimeScene.getObjects("CliqueAqui"));

gdjs.AberturaCode.condition0IsTrue_0.val = false;
gdjs.AberturaCode.condition1IsTrue_0.val = false;
{
gdjs.AberturaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AberturaCode.mapOfGDgdjs_46AberturaCode_46GDCliqueAquiObjects1Objects, runtimeScene, false, false);
}if ( gdjs.AberturaCode.condition0IsTrue_0.val ) {
{
{gdjs.AberturaCode.conditionTrue_1 = gdjs.AberturaCode.condition1IsTrue_0;
gdjs.AberturaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9825228);
}
}}
if (gdjs.AberturaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Efeitos Sonoros\\Som de Clique.mp3", false, 100, 1);
}}

}


{

gdjs.AberturaCode.GDCliqueAquiObjects1.createFrom(runtimeScene.getObjects("CliqueAqui"));

gdjs.AberturaCode.condition0IsTrue_0.val = false;
{
gdjs.AberturaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AberturaCode.mapOfGDgdjs_46AberturaCode_46GDCliqueAquiObjects1Objects, runtimeScene, false, false);
}if (gdjs.AberturaCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.AberturaCode.eventsList0x95ed44(runtimeScene);} //End of subevents
}

}


{


gdjs.AberturaCode.condition0IsTrue_0.val = false;
{
gdjs.AberturaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.AberturaCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


}; //End of gdjs.AberturaCode.eventsList0xb43b0


gdjs.AberturaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AberturaCode.GDPomboObjects1.length = 0;
gdjs.AberturaCode.GDPomboObjects2.length = 0;
gdjs.AberturaCode.GDPrincesaObjects1.length = 0;
gdjs.AberturaCode.GDPrincesaObjects2.length = 0;
gdjs.AberturaCode.GDPombohudObjects1.length = 0;
gdjs.AberturaCode.GDPombohudObjects2.length = 0;
gdjs.AberturaCode.GDTextoPombosObjects1.length = 0;
gdjs.AberturaCode.GDTextoPombosObjects2.length = 0;
gdjs.AberturaCode.GDCobraObjects1.length = 0;
gdjs.AberturaCode.GDCobraObjects2.length = 0;
gdjs.AberturaCode.GDLancheVidaObjects1.length = 0;
gdjs.AberturaCode.GDLancheVidaObjects2.length = 0;
gdjs.AberturaCode.GDZumbi1Objects1.length = 0;
gdjs.AberturaCode.GDZumbi1Objects2.length = 0;
gdjs.AberturaCode.GDVidaCObjects1.length = 0;
gdjs.AberturaCode.GDVidaCObjects2.length = 0;
gdjs.AberturaCode.GDPrincipeObjects1.length = 0;
gdjs.AberturaCode.GDPrincipeObjects2.length = 0;
gdjs.AberturaCode.GDChaoMorreObjects1.length = 0;
gdjs.AberturaCode.GDChaoMorreObjects2.length = 0;
gdjs.AberturaCode.GDLOGOSENACObjects1.length = 0;
gdjs.AberturaCode.GDLOGOSENACObjects2.length = 0;
gdjs.AberturaCode.GDNewObjectObjects1.length = 0;
gdjs.AberturaCode.GDNewObjectObjects2.length = 0;
gdjs.AberturaCode.GDCliqueAquiObjects1.length = 0;
gdjs.AberturaCode.GDCliqueAquiObjects2.length = 0;

gdjs.AberturaCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['AberturaCode'] = gdjs.AberturaCode;
