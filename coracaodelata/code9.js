gdjs.CreditosCode = {};
gdjs.CreditosCode.GDceuObjects1= [];
gdjs.CreditosCode.GDceuObjects2= [];
gdjs.CreditosCode.GDvoltarObjects1= [];
gdjs.CreditosCode.GDvoltarObjects2= [];
gdjs.CreditosCode.GDcreditosObjects1= [];
gdjs.CreditosCode.GDcreditosObjects2= [];

gdjs.CreditosCode.conditionTrue_0 = {val:false};
gdjs.CreditosCode.condition0IsTrue_0 = {val:false};
gdjs.CreditosCode.condition1IsTrue_0 = {val:false};
gdjs.CreditosCode.condition2IsTrue_0 = {val:false};


gdjs.CreditosCode.mapOfGDgdjs_46CreditosCode_46GDvoltarObjects1Objects = Hashtable.newFrom({"voltar": gdjs.CreditosCode.GDvoltarObjects1});gdjs.CreditosCode.eventsList0xb43b0 = function(runtimeScene) {

{

gdjs.CreditosCode.GDvoltarObjects1.createFrom(runtimeScene.getObjects("voltar"));

gdjs.CreditosCode.condition0IsTrue_0.val = false;
gdjs.CreditosCode.condition1IsTrue_0.val = false;
{
gdjs.CreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditosCode.mapOfGDgdjs_46CreditosCode_46GDvoltarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditosCode.condition0IsTrue_0.val ) {
{
gdjs.CreditosCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.CreditosCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuPrincipal", true);
}}

}


}; //End of gdjs.CreditosCode.eventsList0xb43b0


gdjs.CreditosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditosCode.GDceuObjects1.length = 0;
gdjs.CreditosCode.GDceuObjects2.length = 0;
gdjs.CreditosCode.GDvoltarObjects1.length = 0;
gdjs.CreditosCode.GDvoltarObjects2.length = 0;
gdjs.CreditosCode.GDcreditosObjects1.length = 0;
gdjs.CreditosCode.GDcreditosObjects2.length = 0;

gdjs.CreditosCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['CreditosCode'] = gdjs.CreditosCode;
