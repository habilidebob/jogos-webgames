gdjs.MenuCode = {};
gdjs.MenuCode.GDbtnconfigObjects1= [];
gdjs.MenuCode.GDbtnconfigObjects2= [];
gdjs.MenuCode.GDbtnconfigObjects3= [];
gdjs.MenuCode.GDbtnIniciarObjects1= [];
gdjs.MenuCode.GDbtnIniciarObjects2= [];
gdjs.MenuCode.GDbtnIniciarObjects3= [];
gdjs.MenuCode.GDplayObjects1= [];
gdjs.MenuCode.GDplayObjects2= [];
gdjs.MenuCode.GDplayObjects3= [];
gdjs.MenuCode.GDconfigObjects1= [];
gdjs.MenuCode.GDconfigObjects2= [];
gdjs.MenuCode.GDconfigObjects3= [];
gdjs.MenuCode.GDfundoObjects1= [];
gdjs.MenuCode.GDfundoObjects2= [];
gdjs.MenuCode.GDfundoObjects3= [];
gdjs.MenuCode.GDpratinmhoObjects1= [];
gdjs.MenuCode.GDpratinmhoObjects2= [];
gdjs.MenuCode.GDpratinmhoObjects3= [];
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];
gdjs.MenuCode.GDNewObjectObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{



}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbtnIniciarObjects1Objects = Hashtable.newFrom({"btnIniciar": gdjs.MenuCode.GDbtnIniciarObjects1});gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbtnconfigObjects1Objects = Hashtable.newFrom({"btnconfig": gdjs.MenuCode.GDbtnconfigObjects1});gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "opções", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbtnIniciarObjects1Objects = Hashtable.newFrom({"btnIniciar": gdjs.MenuCode.GDbtnIniciarObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbtnconfigObjects1Objects = Hashtable.newFrom({"btnconfig": gdjs.MenuCode.GDbtnconfigObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.MenuCode.GDplayObjects1});gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8674252);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "TUU.mp3", false, 100, 1);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.MenuCode.GDplayObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDconfigObjects1Objects = Hashtable.newFrom({"config": gdjs.MenuCode.GDconfigObjects1});gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "opções", false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8677036);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "TA.mp3", false, 100, 1);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDconfigObjects1Objects = Hashtable.newFrom({"config": gdjs.MenuCode.GDconfigObjects1});gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MenuCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewObjectObjects1[i].getBehavior("Tween").addObjectPositionYTween("descer", -(137), "linear", 1000, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "y2mate.com - Amiga da minha mulher - Seu Jorge (Karaokê)_CpkjpBfrK8k.mp3", true, 100, 1);
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnIniciar"), gdjs.MenuCode.GDbtnIniciarObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbtnIniciarObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDbtnIniciarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDbtnIniciarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbtnIniciarObjects1[i].setColor("255;0;0");
}
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnconfig"), gdjs.MenuCode.GDbtnconfigObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbtnconfigObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDbtnconfigObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDbtnconfigObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbtnconfigObjects1[i].setColor("255;0;0");
}
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnIniciar"), gdjs.MenuCode.GDbtnIniciarObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbtnIniciarObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDbtnIniciarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDbtnIniciarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbtnIniciarObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnconfig"), gdjs.MenuCode.GDbtnconfigObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbtnconfigObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDbtnconfigObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDbtnconfigObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDbtnconfigObjects1[i].setColor("255;255;255");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.MenuCode.GDplayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.MenuCode.GDplayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDplayObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("config"), gdjs.MenuCode.GDconfigObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDconfigObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDconfigObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDconfigObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDconfigObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("config"), gdjs.MenuCode.GDconfigObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDconfigObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDconfigObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDconfigObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDconfigObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDbtnconfigObjects1.length = 0;
gdjs.MenuCode.GDbtnconfigObjects2.length = 0;
gdjs.MenuCode.GDbtnconfigObjects3.length = 0;
gdjs.MenuCode.GDbtnIniciarObjects1.length = 0;
gdjs.MenuCode.GDbtnIniciarObjects2.length = 0;
gdjs.MenuCode.GDbtnIniciarObjects3.length = 0;
gdjs.MenuCode.GDplayObjects1.length = 0;
gdjs.MenuCode.GDplayObjects2.length = 0;
gdjs.MenuCode.GDplayObjects3.length = 0;
gdjs.MenuCode.GDconfigObjects1.length = 0;
gdjs.MenuCode.GDconfigObjects2.length = 0;
gdjs.MenuCode.GDconfigObjects3.length = 0;
gdjs.MenuCode.GDfundoObjects1.length = 0;
gdjs.MenuCode.GDfundoObjects2.length = 0;
gdjs.MenuCode.GDfundoObjects3.length = 0;
gdjs.MenuCode.GDpratinmhoObjects1.length = 0;
gdjs.MenuCode.GDpratinmhoObjects2.length = 0;
gdjs.MenuCode.GDpratinmhoObjects3.length = 0;
gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;
gdjs.MenuCode.GDNewObjectObjects3.length = 0;

gdjs.MenuCode.eventsList5(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
