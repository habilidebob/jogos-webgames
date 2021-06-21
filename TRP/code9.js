gdjs.gameoverCode = {};
gdjs.gameoverCode.GDAmagObjects1= [];
gdjs.gameoverCode.GDAmagObjects2= [];
gdjs.gameoverCode.GDAmagObjects3= [];
gdjs.gameoverCode.GDHUDCoinObjects1= [];
gdjs.gameoverCode.GDHUDCoinObjects2= [];
gdjs.gameoverCode.GDHUDCoinObjects3= [];
gdjs.gameoverCode.GDCoinObjects1= [];
gdjs.gameoverCode.GDCoinObjects2= [];
gdjs.gameoverCode.GDCoinObjects3= [];
gdjs.gameoverCode.GDZombie3Objects1= [];
gdjs.gameoverCode.GDZombie3Objects2= [];
gdjs.gameoverCode.GDZombie3Objects3= [];
gdjs.gameoverCode.GDZombie2Objects1= [];
gdjs.gameoverCode.GDZombie2Objects2= [];
gdjs.gameoverCode.GDZombie2Objects3= [];
gdjs.gameoverCode.GDZombieObjects1= [];
gdjs.gameoverCode.GDZombieObjects2= [];
gdjs.gameoverCode.GDZombieObjects3= [];
gdjs.gameoverCode.GDHitboxObjects1= [];
gdjs.gameoverCode.GDHitboxObjects2= [];
gdjs.gameoverCode.GDHitboxObjects3= [];
gdjs.gameoverCode.GDSuedObjects1= [];
gdjs.gameoverCode.GDSuedObjects2= [];
gdjs.gameoverCode.GDSuedObjects3= [];
gdjs.gameoverCode.GDTeleportObjects1= [];
gdjs.gameoverCode.GDTeleportObjects2= [];
gdjs.gameoverCode.GDTeleportObjects3= [];
gdjs.gameoverCode.GDHUDVidaObjects1= [];
gdjs.gameoverCode.GDHUDVidaObjects2= [];
gdjs.gameoverCode.GDHUDVidaObjects3= [];
gdjs.gameoverCode.GDHUDBarraObjects1= [];
gdjs.gameoverCode.GDHUDBarraObjects2= [];
gdjs.gameoverCode.GDHUDBarraObjects3= [];
gdjs.gameoverCode.GDEsquerdaObjects1= [];
gdjs.gameoverCode.GDEsquerdaObjects2= [];
gdjs.gameoverCode.GDEsquerdaObjects3= [];
gdjs.gameoverCode.GDDireitaObjects1= [];
gdjs.gameoverCode.GDDireitaObjects2= [];
gdjs.gameoverCode.GDDireitaObjects3= [];
gdjs.gameoverCode.GDPlatafloorObjects1= [];
gdjs.gameoverCode.GDPlatafloorObjects2= [];
gdjs.gameoverCode.GDPlatafloorObjects3= [];
gdjs.gameoverCode.GDPlatafloorMoveObjects1= [];
gdjs.gameoverCode.GDPlatafloorMoveObjects2= [];
gdjs.gameoverCode.GDPlatafloorMoveObjects3= [];
gdjs.gameoverCode.GDCoinHUD2Objects1= [];
gdjs.gameoverCode.GDCoinHUD2Objects2= [];
gdjs.gameoverCode.GDCoinHUD2Objects3= [];
gdjs.gameoverCode.GDCoinHUDObjects1= [];
gdjs.gameoverCode.GDCoinHUDObjects2= [];
gdjs.gameoverCode.GDCoinHUDObjects3= [];
gdjs.gameoverCode.GDTilefinalObjects1= [];
gdjs.gameoverCode.GDTilefinalObjects2= [];
gdjs.gameoverCode.GDTilefinalObjects3= [];
gdjs.gameoverCode.GDTilefinalinvObjects1= [];
gdjs.gameoverCode.GDTilefinalinvObjects2= [];
gdjs.gameoverCode.GDTilefinalinvObjects3= [];
gdjs.gameoverCode.GDpedrabulletObjects1= [];
gdjs.gameoverCode.GDpedrabulletObjects2= [];
gdjs.gameoverCode.GDpedrabulletObjects3= [];
gdjs.gameoverCode.GDTimerObjects1= [];
gdjs.gameoverCode.GDTimerObjects2= [];
gdjs.gameoverCode.GDTimerObjects3= [];
gdjs.gameoverCode.GDwinObjects1= [];
gdjs.gameoverCode.GDwinObjects2= [];
gdjs.gameoverCode.GDwinObjects3= [];
gdjs.gameoverCode.GDwin3Objects1= [];
gdjs.gameoverCode.GDwin3Objects2= [];
gdjs.gameoverCode.GDwin3Objects3= [];
gdjs.gameoverCode.GDwin2Objects1= [];
gdjs.gameoverCode.GDwin2Objects2= [];
gdjs.gameoverCode.GDwin2Objects3= [];
gdjs.gameoverCode.GDNewObjectObjects1= [];
gdjs.gameoverCode.GDNewObjectObjects2= [];
gdjs.gameoverCode.GDNewObjectObjects3= [];
gdjs.gameoverCode.GDbtnRestartObjects1= [];
gdjs.gameoverCode.GDbtnRestartObjects2= [];
gdjs.gameoverCode.GDbtnRestartObjects3= [];
gdjs.gameoverCode.GDbtnMenuObjects1= [];
gdjs.gameoverCode.GDbtnMenuObjects2= [];
gdjs.gameoverCode.GDbtnMenuObjects3= [];

gdjs.gameoverCode.conditionTrue_0 = {val:false};
gdjs.gameoverCode.condition0IsTrue_0 = {val:false};
gdjs.gameoverCode.condition1IsTrue_0 = {val:false};
gdjs.gameoverCode.condition2IsTrue_0 = {val:false};


gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDbtnRestartObjects1Objects = Hashtable.newFrom({"btnRestart": gdjs.gameoverCode.GDbtnRestartObjects1});gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDbtnRestartObjects1Objects = Hashtable.newFrom({"btnRestart": gdjs.gameoverCode.GDbtnRestartObjects1});gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDbtnMenuObjects1Objects = Hashtable.newFrom({"btnMenu": gdjs.gameoverCode.GDbtnMenuObjects1});gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDbtnMenuObjects1Objects = Hashtable.newFrom({"btnMenu": gdjs.gameoverCode.GDbtnMenuObjects1});gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDbtnRestartObjects1Objects = Hashtable.newFrom({"btnRestart": gdjs.gameoverCode.GDbtnRestartObjects1});gdjs.gameoverCode.eventsList0x88cba4 = function(runtimeScene) {

{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("fase")) == 1;
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase1", false);
}}

}


{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("fase")) == 2;
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase2", false);
}}

}


{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("fase")) == 3;
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase3", false);
}}

}


{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("fase")) == 4;
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bonus", false);
}}

}


}; //End of gdjs.gameoverCode.eventsList0x88cba4
gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDbtnMenuObjects1Objects = Hashtable.newFrom({"btnMenu": gdjs.gameoverCode.GDbtnMenuObjects1});gdjs.gameoverCode.eventsList0xb43b0 = function(runtimeScene) {

{

gdjs.gameoverCode.GDbtnRestartObjects1.createFrom(runtimeScene.getObjects("btnRestart"));

gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDbtnRestartObjects1Objects, runtimeScene, true, true);
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameoverCode.GDbtnRestartObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDbtnRestartObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDbtnRestartObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.gameoverCode.GDbtnRestartObjects1.createFrom(runtimeScene.getObjects("btnRestart"));

gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDbtnRestartObjects1Objects, runtimeScene, true, false);
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameoverCode.GDbtnRestartObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDbtnRestartObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDbtnRestartObjects1[i].setColor("209;23;23");
}
}}

}


{

gdjs.gameoverCode.GDbtnMenuObjects1.createFrom(runtimeScene.getObjects("btnMenu"));

gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDbtnMenuObjects1Objects, runtimeScene, true, true);
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameoverCode.GDbtnMenuObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDbtnMenuObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDbtnMenuObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.gameoverCode.GDbtnMenuObjects1.createFrom(runtimeScene.getObjects("btnMenu"));

gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDbtnMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameoverCode.GDbtnMenuObjects1 */
{for(var i = 0, len = gdjs.gameoverCode.GDbtnMenuObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDbtnMenuObjects1[i].setColor("209;23;23");
}
}}

}


{

gdjs.gameoverCode.GDbtnRestartObjects1.createFrom(runtimeScene.getObjects("btnRestart"));

gdjs.gameoverCode.condition0IsTrue_0.val = false;
gdjs.gameoverCode.condition1IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDbtnRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.gameoverCode.condition0IsTrue_0.val ) {
{
gdjs.gameoverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.gameoverCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.gameoverCode.eventsList0x88cba4(runtimeScene);} //End of subevents
}

}


{

gdjs.gameoverCode.GDbtnMenuObjects1.createFrom(runtimeScene.getObjects("btnMenu"));

gdjs.gameoverCode.condition0IsTrue_0.val = false;
gdjs.gameoverCode.condition1IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDbtnMenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.gameoverCode.condition0IsTrue_0.val ) {
{
gdjs.gameoverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.gameoverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


}; //End of gdjs.gameoverCode.eventsList0xb43b0


gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDAmagObjects1.length = 0;
gdjs.gameoverCode.GDAmagObjects2.length = 0;
gdjs.gameoverCode.GDAmagObjects3.length = 0;
gdjs.gameoverCode.GDHUDCoinObjects1.length = 0;
gdjs.gameoverCode.GDHUDCoinObjects2.length = 0;
gdjs.gameoverCode.GDHUDCoinObjects3.length = 0;
gdjs.gameoverCode.GDCoinObjects1.length = 0;
gdjs.gameoverCode.GDCoinObjects2.length = 0;
gdjs.gameoverCode.GDCoinObjects3.length = 0;
gdjs.gameoverCode.GDZombie3Objects1.length = 0;
gdjs.gameoverCode.GDZombie3Objects2.length = 0;
gdjs.gameoverCode.GDZombie3Objects3.length = 0;
gdjs.gameoverCode.GDZombie2Objects1.length = 0;
gdjs.gameoverCode.GDZombie2Objects2.length = 0;
gdjs.gameoverCode.GDZombie2Objects3.length = 0;
gdjs.gameoverCode.GDZombieObjects1.length = 0;
gdjs.gameoverCode.GDZombieObjects2.length = 0;
gdjs.gameoverCode.GDZombieObjects3.length = 0;
gdjs.gameoverCode.GDHitboxObjects1.length = 0;
gdjs.gameoverCode.GDHitboxObjects2.length = 0;
gdjs.gameoverCode.GDHitboxObjects3.length = 0;
gdjs.gameoverCode.GDSuedObjects1.length = 0;
gdjs.gameoverCode.GDSuedObjects2.length = 0;
gdjs.gameoverCode.GDSuedObjects3.length = 0;
gdjs.gameoverCode.GDTeleportObjects1.length = 0;
gdjs.gameoverCode.GDTeleportObjects2.length = 0;
gdjs.gameoverCode.GDTeleportObjects3.length = 0;
gdjs.gameoverCode.GDHUDVidaObjects1.length = 0;
gdjs.gameoverCode.GDHUDVidaObjects2.length = 0;
gdjs.gameoverCode.GDHUDVidaObjects3.length = 0;
gdjs.gameoverCode.GDHUDBarraObjects1.length = 0;
gdjs.gameoverCode.GDHUDBarraObjects2.length = 0;
gdjs.gameoverCode.GDHUDBarraObjects3.length = 0;
gdjs.gameoverCode.GDEsquerdaObjects1.length = 0;
gdjs.gameoverCode.GDEsquerdaObjects2.length = 0;
gdjs.gameoverCode.GDEsquerdaObjects3.length = 0;
gdjs.gameoverCode.GDDireitaObjects1.length = 0;
gdjs.gameoverCode.GDDireitaObjects2.length = 0;
gdjs.gameoverCode.GDDireitaObjects3.length = 0;
gdjs.gameoverCode.GDPlatafloorObjects1.length = 0;
gdjs.gameoverCode.GDPlatafloorObjects2.length = 0;
gdjs.gameoverCode.GDPlatafloorObjects3.length = 0;
gdjs.gameoverCode.GDPlatafloorMoveObjects1.length = 0;
gdjs.gameoverCode.GDPlatafloorMoveObjects2.length = 0;
gdjs.gameoverCode.GDPlatafloorMoveObjects3.length = 0;
gdjs.gameoverCode.GDCoinHUD2Objects1.length = 0;
gdjs.gameoverCode.GDCoinHUD2Objects2.length = 0;
gdjs.gameoverCode.GDCoinHUD2Objects3.length = 0;
gdjs.gameoverCode.GDCoinHUDObjects1.length = 0;
gdjs.gameoverCode.GDCoinHUDObjects2.length = 0;
gdjs.gameoverCode.GDCoinHUDObjects3.length = 0;
gdjs.gameoverCode.GDTilefinalObjects1.length = 0;
gdjs.gameoverCode.GDTilefinalObjects2.length = 0;
gdjs.gameoverCode.GDTilefinalObjects3.length = 0;
gdjs.gameoverCode.GDTilefinalinvObjects1.length = 0;
gdjs.gameoverCode.GDTilefinalinvObjects2.length = 0;
gdjs.gameoverCode.GDTilefinalinvObjects3.length = 0;
gdjs.gameoverCode.GDpedrabulletObjects1.length = 0;
gdjs.gameoverCode.GDpedrabulletObjects2.length = 0;
gdjs.gameoverCode.GDpedrabulletObjects3.length = 0;
gdjs.gameoverCode.GDTimerObjects1.length = 0;
gdjs.gameoverCode.GDTimerObjects2.length = 0;
gdjs.gameoverCode.GDTimerObjects3.length = 0;
gdjs.gameoverCode.GDwinObjects1.length = 0;
gdjs.gameoverCode.GDwinObjects2.length = 0;
gdjs.gameoverCode.GDwinObjects3.length = 0;
gdjs.gameoverCode.GDwin3Objects1.length = 0;
gdjs.gameoverCode.GDwin3Objects2.length = 0;
gdjs.gameoverCode.GDwin3Objects3.length = 0;
gdjs.gameoverCode.GDwin2Objects1.length = 0;
gdjs.gameoverCode.GDwin2Objects2.length = 0;
gdjs.gameoverCode.GDwin2Objects3.length = 0;
gdjs.gameoverCode.GDNewObjectObjects1.length = 0;
gdjs.gameoverCode.GDNewObjectObjects2.length = 0;
gdjs.gameoverCode.GDNewObjectObjects3.length = 0;
gdjs.gameoverCode.GDbtnRestartObjects1.length = 0;
gdjs.gameoverCode.GDbtnRestartObjects2.length = 0;
gdjs.gameoverCode.GDbtnRestartObjects3.length = 0;
gdjs.gameoverCode.GDbtnMenuObjects1.length = 0;
gdjs.gameoverCode.GDbtnMenuObjects2.length = 0;
gdjs.gameoverCode.GDbtnMenuObjects3.length = 0;

gdjs.gameoverCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['gameoverCode'] = gdjs.gameoverCode;
