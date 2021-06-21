gdjs.ControleCode = {};
gdjs.ControleCode.GDcontrolesObjects1= [];
gdjs.ControleCode.GDcontrolesObjects2= [];
gdjs.ControleCode.GDjogadorObjects1= [];
gdjs.ControleCode.GDjogadorObjects2= [];
gdjs.ControleCode.GDpuloObjects1= [];
gdjs.ControleCode.GDpuloObjects2= [];
gdjs.ControleCode.GDataqueObjects1= [];
gdjs.ControleCode.GDataqueObjects2= [];
gdjs.ControleCode.GDpauseObjects1= [];
gdjs.ControleCode.GDpauseObjects2= [];
gdjs.ControleCode.GDvoltarObjects1= [];
gdjs.ControleCode.GDvoltarObjects2= [];

gdjs.ControleCode.conditionTrue_0 = {val:false};
gdjs.ControleCode.condition0IsTrue_0 = {val:false};
gdjs.ControleCode.condition1IsTrue_0 = {val:false};
gdjs.ControleCode.condition2IsTrue_0 = {val:false};


gdjs.ControleCode.mapOfGDgdjs_46ControleCode_46GDvoltarObjects1Objects = Hashtable.newFrom({"voltar": gdjs.ControleCode.GDvoltarObjects1});gdjs.ControleCode.eventsList0xb43b0 = function(runtimeScene) {

{

gdjs.ControleCode.GDvoltarObjects1.createFrom(runtimeScene.getObjects("voltar"));

gdjs.ControleCode.condition0IsTrue_0.val = false;
gdjs.ControleCode.condition1IsTrue_0.val = false;
{
gdjs.ControleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ControleCode.mapOfGDgdjs_46ControleCode_46GDvoltarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ControleCode.condition0IsTrue_0.val ) {
{
gdjs.ControleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ControleCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuPrincipal", false);
}}

}


{


{
}

}


{


{
}

}


}; //End of gdjs.ControleCode.eventsList0xb43b0


gdjs.ControleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ControleCode.GDcontrolesObjects1.length = 0;
gdjs.ControleCode.GDcontrolesObjects2.length = 0;
gdjs.ControleCode.GDjogadorObjects1.length = 0;
gdjs.ControleCode.GDjogadorObjects2.length = 0;
gdjs.ControleCode.GDpuloObjects1.length = 0;
gdjs.ControleCode.GDpuloObjects2.length = 0;
gdjs.ControleCode.GDataqueObjects1.length = 0;
gdjs.ControleCode.GDataqueObjects2.length = 0;
gdjs.ControleCode.GDpauseObjects1.length = 0;
gdjs.ControleCode.GDpauseObjects2.length = 0;
gdjs.ControleCode.GDvoltarObjects1.length = 0;
gdjs.ControleCode.GDvoltarObjects2.length = 0;

gdjs.ControleCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['ControleCode'] = gdjs.ControleCode;
