gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDPomboObjects1= [];
gdjs.Game_32OverCode.GDPomboObjects2= [];
gdjs.Game_32OverCode.GDPrincesaObjects1= [];
gdjs.Game_32OverCode.GDPrincesaObjects2= [];
gdjs.Game_32OverCode.GDPombohudObjects1= [];
gdjs.Game_32OverCode.GDPombohudObjects2= [];
gdjs.Game_32OverCode.GDTextoPombosObjects1= [];
gdjs.Game_32OverCode.GDTextoPombosObjects2= [];
gdjs.Game_32OverCode.GDCobraObjects1= [];
gdjs.Game_32OverCode.GDCobraObjects2= [];
gdjs.Game_32OverCode.GDLancheVidaObjects1= [];
gdjs.Game_32OverCode.GDLancheVidaObjects2= [];
gdjs.Game_32OverCode.GDZumbi1Objects1= [];
gdjs.Game_32OverCode.GDZumbi1Objects2= [];
gdjs.Game_32OverCode.GDVidaCObjects1= [];
gdjs.Game_32OverCode.GDVidaCObjects2= [];
gdjs.Game_32OverCode.GDPrincipeObjects1= [];
gdjs.Game_32OverCode.GDPrincipeObjects2= [];
gdjs.Game_32OverCode.GDChaoMorreObjects1= [];
gdjs.Game_32OverCode.GDChaoMorreObjects2= [];
gdjs.Game_32OverCode.GDGameoverObjects1= [];
gdjs.Game_32OverCode.GDGameoverObjects2= [];
gdjs.Game_32OverCode.GDSairObjects1= [];
gdjs.Game_32OverCode.GDSairObjects2= [];
gdjs.Game_32OverCode.GDVoltarObjects1= [];
gdjs.Game_32OverCode.GDVoltarObjects2= [];
gdjs.Game_32OverCode.GDChoroPrinceObjects1= [];
gdjs.Game_32OverCode.GDChoroPrinceObjects2= [];
gdjs.Game_32OverCode.GDChoroObjects1= [];
gdjs.Game_32OverCode.GDChoroObjects2= [];
gdjs.Game_32OverCode.GDBotaofase3Objects1= [];
gdjs.Game_32OverCode.GDBotaofase3Objects2= [];
gdjs.Game_32OverCode.GDBotaofase2Objects1= [];
gdjs.Game_32OverCode.GDBotaofase2Objects2= [];
gdjs.Game_32OverCode.GDBotaofase1Objects1= [];
gdjs.Game_32OverCode.GDBotaofase1Objects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDSairObjects1Objects = Hashtable.newFrom({"Sair": gdjs.Game_32OverCode.GDSairObjects1});gdjs.Game_32OverCode.eventsList0x975354 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.Game_32OverCode.eventsList0x975354
gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.Game_32OverCode.GDVoltarObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDBotaofase1Objects1Objects = Hashtable.newFrom({"Botaofase1": gdjs.Game_32OverCode.GDBotaofase1Objects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDBotaofase2Objects1Objects = Hashtable.newFrom({"Botaofase2": gdjs.Game_32OverCode.GDBotaofase2Objects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDBotaofase3Objects1Objects = Hashtable.newFrom({"Botaofase3": gdjs.Game_32OverCode.GDBotaofase3Objects1});gdjs.Game_32OverCode.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.Game_32OverCode.GDChoroObjects1.createFrom(runtimeScene.getObjects("Choro"));
{for(var i = 0, len = gdjs.Game_32OverCode.GDChoroObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDChoroObjects1[i].getBehavior("Tween").addObjectPositionYTween("cair", 270, "linear", 1000, false);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Efeitos Sonoros\\Game Over.mp3", true, 100, 1);
}}

}


{

gdjs.Game_32OverCode.GDChoroObjects1.createFrom(runtimeScene.getObjects("Choro"));

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32OverCode.GDChoroObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDChoroObjects1[i].getBehavior("Tween").hasFinished("cair") ) {
        gdjs.Game_32OverCode.condition0IsTrue_0.val = true;
        gdjs.Game_32OverCode.GDChoroObjects1[k] = gdjs.Game_32OverCode.GDChoroObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDChoroObjects1.length = k;}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDChoroObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDChoroObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDChoroObjects1[i].setY(234);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDChoroObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDChoroObjects1[i].getBehavior("Tween").addObjectPositionYTween("cair", 270, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDChoroObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDChoroObjects1[i].getBehavior("Tween").resumeTween("cair");
}
}}

}


{

gdjs.Game_32OverCode.GDSairObjects1.createFrom(runtimeScene.getObjects("Sair"));

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDSairObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32OverCode.eventsList0x975354(runtimeScene);} //End of subevents
}

}


{

gdjs.Game_32OverCode.GDVoltarObjects1.createFrom(runtimeScene.getObjects("Voltar"));

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDVoltarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.Game_32OverCode.GDBotaofase1Objects1.createFrom(runtimeScene.getObjects("Botaofase1"));

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDBotaofase1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase 1", false);
}}

}


{

gdjs.Game_32OverCode.GDBotaofase2Objects1.createFrom(runtimeScene.getObjects("Botaofase2"));

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDBotaofase2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase 2", false);
}}

}


{

gdjs.Game_32OverCode.GDBotaofase3Objects1.createFrom(runtimeScene.getObjects("Botaofase3"));

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDBotaofase3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase 3", false);
}}

}


}; //End of gdjs.Game_32OverCode.eventsList0xb43b0


gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDPomboObjects1.length = 0;
gdjs.Game_32OverCode.GDPomboObjects2.length = 0;
gdjs.Game_32OverCode.GDPrincesaObjects1.length = 0;
gdjs.Game_32OverCode.GDPrincesaObjects2.length = 0;
gdjs.Game_32OverCode.GDPombohudObjects1.length = 0;
gdjs.Game_32OverCode.GDPombohudObjects2.length = 0;
gdjs.Game_32OverCode.GDTextoPombosObjects1.length = 0;
gdjs.Game_32OverCode.GDTextoPombosObjects2.length = 0;
gdjs.Game_32OverCode.GDCobraObjects1.length = 0;
gdjs.Game_32OverCode.GDCobraObjects2.length = 0;
gdjs.Game_32OverCode.GDLancheVidaObjects1.length = 0;
gdjs.Game_32OverCode.GDLancheVidaObjects2.length = 0;
gdjs.Game_32OverCode.GDZumbi1Objects1.length = 0;
gdjs.Game_32OverCode.GDZumbi1Objects2.length = 0;
gdjs.Game_32OverCode.GDVidaCObjects1.length = 0;
gdjs.Game_32OverCode.GDVidaCObjects2.length = 0;
gdjs.Game_32OverCode.GDPrincipeObjects1.length = 0;
gdjs.Game_32OverCode.GDPrincipeObjects2.length = 0;
gdjs.Game_32OverCode.GDChaoMorreObjects1.length = 0;
gdjs.Game_32OverCode.GDChaoMorreObjects2.length = 0;
gdjs.Game_32OverCode.GDGameoverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameoverObjects2.length = 0;
gdjs.Game_32OverCode.GDSairObjects1.length = 0;
gdjs.Game_32OverCode.GDSairObjects2.length = 0;
gdjs.Game_32OverCode.GDVoltarObjects1.length = 0;
gdjs.Game_32OverCode.GDVoltarObjects2.length = 0;
gdjs.Game_32OverCode.GDChoroPrinceObjects1.length = 0;
gdjs.Game_32OverCode.GDChoroPrinceObjects2.length = 0;
gdjs.Game_32OverCode.GDChoroObjects1.length = 0;
gdjs.Game_32OverCode.GDChoroObjects2.length = 0;
gdjs.Game_32OverCode.GDBotaofase3Objects1.length = 0;
gdjs.Game_32OverCode.GDBotaofase3Objects2.length = 0;
gdjs.Game_32OverCode.GDBotaofase2Objects1.length = 0;
gdjs.Game_32OverCode.GDBotaofase2Objects2.length = 0;
gdjs.Game_32OverCode.GDBotaofase1Objects1.length = 0;
gdjs.Game_32OverCode.GDBotaofase1Objects2.length = 0;

gdjs.Game_32OverCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
