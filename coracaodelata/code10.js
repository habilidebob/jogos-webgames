gdjs.GameOverCode = {};
gdjs.GameOverCode.GDgameoverObjects1= [];
gdjs.GameOverCode.GDgameoverObjects2= [];
gdjs.GameOverCode.GDmenu_95inicialObjects1= [];
gdjs.GameOverCode.GDmenu_95inicialObjects2= [];
gdjs.GameOverCode.GDsairObjects1= [];
gdjs.GameOverCode.GDsairObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDmenu_9595inicialObjects1Objects = Hashtable.newFrom({"menu_inicial": gdjs.GameOverCode.GDmenu_95inicialObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDsairObjects1Objects = Hashtable.newFrom({"sair": gdjs.GameOverCode.GDsairObjects1});gdjs.GameOverCode.eventsList0xb43b0 = function(runtimeScene) {

{


{
}

}


{

gdjs.GameOverCode.GDmenu_95inicialObjects1.createFrom(runtimeScene.getObjects("menu_inicial"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDmenu_9595inicialObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuPrincipal", false);
}}

}


{

gdjs.GameOverCode.GDsairObjects1.createFrom(runtimeScene.getObjects("sair"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDsairObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


{
}

}


}; //End of gdjs.GameOverCode.eventsList0xb43b0


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDgameoverObjects1.length = 0;
gdjs.GameOverCode.GDgameoverObjects2.length = 0;
gdjs.GameOverCode.GDmenu_95inicialObjects1.length = 0;
gdjs.GameOverCode.GDmenu_95inicialObjects2.length = 0;
gdjs.GameOverCode.GDsairObjects1.length = 0;
gdjs.GameOverCode.GDsairObjects2.length = 0;

gdjs.GameOverCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['GameOverCode'] = gdjs.GameOverCode;
