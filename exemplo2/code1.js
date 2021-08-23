gdjs.MeenuCode = {};
gdjs.MeenuCode.GDFundoObjects1= [];
gdjs.MeenuCode.GDFundoObjects2= [];
gdjs.MeenuCode.GDFundoObjects3= [];
gdjs.MeenuCode.GDLogoObjects1= [];
gdjs.MeenuCode.GDLogoObjects2= [];
gdjs.MeenuCode.GDLogoObjects3= [];
gdjs.MeenuCode.GDStartObjects1= [];
gdjs.MeenuCode.GDStartObjects2= [];
gdjs.MeenuCode.GDStartObjects3= [];
gdjs.MeenuCode.GDConfiObjects1= [];
gdjs.MeenuCode.GDConfiObjects2= [];
gdjs.MeenuCode.GDConfiObjects3= [];
gdjs.MeenuCode.GDCreditoObjects1= [];
gdjs.MeenuCode.GDCreditoObjects2= [];
gdjs.MeenuCode.GDCreditoObjects3= [];

gdjs.MeenuCode.conditionTrue_0 = {val:false};
gdjs.MeenuCode.condition0IsTrue_0 = {val:false};
gdjs.MeenuCode.condition1IsTrue_0 = {val:false};
gdjs.MeenuCode.conditionTrue_1 = {val:false};
gdjs.MeenuCode.condition0IsTrue_1 = {val:false};
gdjs.MeenuCode.condition1IsTrue_1 = {val:false};


gdjs.MeenuCode.mapOfGDgdjs_46MeenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.MeenuCode.GDStartObjects1});gdjs.MeenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
gdjs.MeenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}}

}


{


gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MeenuCode.conditionTrue_1 = gdjs.MeenuCode.condition0IsTrue_0;
gdjs.MeenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8770244);
}
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "448080__breviceps__wet-click.wav", false, 100, 1);
}}

}


};gdjs.MeenuCode.mapOfGDgdjs_46MeenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.MeenuCode.GDStartObjects1});gdjs.MeenuCode.eventsList1 = function(runtimeScene) {

{



}


};gdjs.MeenuCode.mapOfGDgdjs_46MeenuCode_46GDConfiObjects1Objects = Hashtable.newFrom({"Confi": gdjs.MeenuCode.GDConfiObjects1});gdjs.MeenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
gdjs.MeenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Opçoes", false);
}}

}


{


gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MeenuCode.conditionTrue_1 = gdjs.MeenuCode.condition0IsTrue_0;
gdjs.MeenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8773180);
}
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "448080__breviceps__wet-click.wav", false, 100, 1);
}}

}


};gdjs.MeenuCode.mapOfGDgdjs_46MeenuCode_46GDConfiObjects1Objects = Hashtable.newFrom({"Confi": gdjs.MeenuCode.GDConfiObjects1});gdjs.MeenuCode.mapOfGDgdjs_46MeenuCode_46GDCreditoObjects1Objects = Hashtable.newFrom({"Credito": gdjs.MeenuCode.GDCreditoObjects1});gdjs.MeenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
gdjs.MeenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credito", false);
}}

}


{


gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MeenuCode.conditionTrue_1 = gdjs.MeenuCode.condition0IsTrue_0;
gdjs.MeenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8776220);
}
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "448080__breviceps__wet-click.wav", false, 100, 1);
}}

}


};gdjs.MeenuCode.mapOfGDgdjs_46MeenuCode_46GDCreditoObjects1Objects = Hashtable.newFrom({"Credito": gdjs.MeenuCode.GDCreditoObjects1});gdjs.MeenuCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
gdjs.MeenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.MeenuCode.GDLogoObjects1);
{for(var i = 0, len = gdjs.MeenuCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.MeenuCode.GDLogoObjects1[i].getBehavior("Tween").addObjectPositionYTween("descerlogo", -(1), "linear", 1000, false);
}
}}

}


{



}


{


gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
gdjs.MeenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "9- Nillow nepolitan dreams.mp3", true, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MeenuCode.GDStartObjects1);

gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
gdjs.MeenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MeenuCode.mapOfGDgdjs_46MeenuCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MeenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.MeenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.MeenuCode.GDStartObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MeenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MeenuCode.GDStartObjects1);

gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
gdjs.MeenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MeenuCode.mapOfGDgdjs_46MeenuCode_46GDStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MeenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.MeenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.MeenuCode.GDStartObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.MeenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Confi"), gdjs.MeenuCode.GDConfiObjects1);

gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
gdjs.MeenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MeenuCode.mapOfGDgdjs_46MeenuCode_46GDConfiObjects1Objects, runtimeScene, true, false);
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MeenuCode.GDConfiObjects1 */
{for(var i = 0, len = gdjs.MeenuCode.GDConfiObjects1.length ;i < len;++i) {
    gdjs.MeenuCode.GDConfiObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MeenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Confi"), gdjs.MeenuCode.GDConfiObjects1);

gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
gdjs.MeenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MeenuCode.mapOfGDgdjs_46MeenuCode_46GDConfiObjects1Objects, runtimeScene, true, true);
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MeenuCode.GDConfiObjects1 */
{for(var i = 0, len = gdjs.MeenuCode.GDConfiObjects1.length ;i < len;++i) {
    gdjs.MeenuCode.GDConfiObjects1[i].setAnimation(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Credito"), gdjs.MeenuCode.GDCreditoObjects1);

gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
gdjs.MeenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MeenuCode.mapOfGDgdjs_46MeenuCode_46GDCreditoObjects1Objects, runtimeScene, true, false);
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MeenuCode.GDCreditoObjects1 */
{for(var i = 0, len = gdjs.MeenuCode.GDCreditoObjects1.length ;i < len;++i) {
    gdjs.MeenuCode.GDCreditoObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MeenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credito"), gdjs.MeenuCode.GDCreditoObjects1);

gdjs.MeenuCode.condition0IsTrue_0.val = false;
{
gdjs.MeenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MeenuCode.mapOfGDgdjs_46MeenuCode_46GDCreditoObjects1Objects, runtimeScene, true, true);
}if (gdjs.MeenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MeenuCode.GDCreditoObjects1 */
{for(var i = 0, len = gdjs.MeenuCode.GDCreditoObjects1.length ;i < len;++i) {
    gdjs.MeenuCode.GDCreditoObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.MeenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MeenuCode.GDFundoObjects1.length = 0;
gdjs.MeenuCode.GDFundoObjects2.length = 0;
gdjs.MeenuCode.GDFundoObjects3.length = 0;
gdjs.MeenuCode.GDLogoObjects1.length = 0;
gdjs.MeenuCode.GDLogoObjects2.length = 0;
gdjs.MeenuCode.GDLogoObjects3.length = 0;
gdjs.MeenuCode.GDStartObjects1.length = 0;
gdjs.MeenuCode.GDStartObjects2.length = 0;
gdjs.MeenuCode.GDStartObjects3.length = 0;
gdjs.MeenuCode.GDConfiObjects1.length = 0;
gdjs.MeenuCode.GDConfiObjects2.length = 0;
gdjs.MeenuCode.GDConfiObjects3.length = 0;
gdjs.MeenuCode.GDCreditoObjects1.length = 0;
gdjs.MeenuCode.GDCreditoObjects2.length = 0;
gdjs.MeenuCode.GDCreditoObjects3.length = 0;

gdjs.MeenuCode.eventsList4(runtimeScene);
return;

}

gdjs['MeenuCode'] = gdjs.MeenuCode;
