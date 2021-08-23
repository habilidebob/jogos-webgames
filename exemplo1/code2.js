gdjs.op_231_245esCode = {};
gdjs.op_231_245esCode.GDdsaObjects1= [];
gdjs.op_231_245esCode.GDdsaObjects2= [];

gdjs.op_231_245esCode.conditionTrue_0 = {val:false};
gdjs.op_231_245esCode.condition0IsTrue_0 = {val:false};
gdjs.op_231_245esCode.condition1IsTrue_0 = {val:false};
gdjs.op_231_245esCode.condition2IsTrue_0 = {val:false};


gdjs.op_231_245esCode.mapOfGDgdjs_46op_95231_95245esCode_46GDdsaObjects1Objects = Hashtable.newFrom({"dsa": gdjs.op_231_245esCode.GDdsaObjects1});gdjs.op_231_245esCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("dsa"), gdjs.op_231_245esCode.GDdsaObjects1);

gdjs.op_231_245esCode.condition0IsTrue_0.val = false;
gdjs.op_231_245esCode.condition1IsTrue_0.val = false;
{
gdjs.op_231_245esCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.op_231_245esCode.mapOfGDgdjs_46op_95231_95245esCode_46GDdsaObjects1Objects, runtimeScene, true, false);
}if ( gdjs.op_231_245esCode.condition0IsTrue_0.val ) {
{
gdjs.op_231_245esCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.op_231_245esCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.op_231_245esCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.op_231_245esCode.GDdsaObjects1.length = 0;
gdjs.op_231_245esCode.GDdsaObjects2.length = 0;

gdjs.op_231_245esCode.eventsList0(runtimeScene);
return;

}

gdjs['op_231_245esCode'] = gdjs.op_231_245esCode;
