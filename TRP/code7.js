gdjs.HistoriaCode = {};
gdjs.HistoriaCode.GDAmagObjects1= [];
gdjs.HistoriaCode.GDAmagObjects2= [];
gdjs.HistoriaCode.GDHUDCoinObjects1= [];
gdjs.HistoriaCode.GDHUDCoinObjects2= [];
gdjs.HistoriaCode.GDCoinObjects1= [];
gdjs.HistoriaCode.GDCoinObjects2= [];
gdjs.HistoriaCode.GDZombie3Objects1= [];
gdjs.HistoriaCode.GDZombie3Objects2= [];
gdjs.HistoriaCode.GDZombie2Objects1= [];
gdjs.HistoriaCode.GDZombie2Objects2= [];
gdjs.HistoriaCode.GDZombieObjects1= [];
gdjs.HistoriaCode.GDZombieObjects2= [];
gdjs.HistoriaCode.GDHitboxObjects1= [];
gdjs.HistoriaCode.GDHitboxObjects2= [];
gdjs.HistoriaCode.GDSuedObjects1= [];
gdjs.HistoriaCode.GDSuedObjects2= [];
gdjs.HistoriaCode.GDTeleportObjects1= [];
gdjs.HistoriaCode.GDTeleportObjects2= [];
gdjs.HistoriaCode.GDHUDVidaObjects1= [];
gdjs.HistoriaCode.GDHUDVidaObjects2= [];
gdjs.HistoriaCode.GDHUDBarraObjects1= [];
gdjs.HistoriaCode.GDHUDBarraObjects2= [];
gdjs.HistoriaCode.GDEsquerdaObjects1= [];
gdjs.HistoriaCode.GDEsquerdaObjects2= [];
gdjs.HistoriaCode.GDDireitaObjects1= [];
gdjs.HistoriaCode.GDDireitaObjects2= [];
gdjs.HistoriaCode.GDPlatafloorObjects1= [];
gdjs.HistoriaCode.GDPlatafloorObjects2= [];
gdjs.HistoriaCode.GDPlatafloorMoveObjects1= [];
gdjs.HistoriaCode.GDPlatafloorMoveObjects2= [];
gdjs.HistoriaCode.GDCoinHUD2Objects1= [];
gdjs.HistoriaCode.GDCoinHUD2Objects2= [];
gdjs.HistoriaCode.GDCoinHUDObjects1= [];
gdjs.HistoriaCode.GDCoinHUDObjects2= [];
gdjs.HistoriaCode.GDTilefinalObjects1= [];
gdjs.HistoriaCode.GDTilefinalObjects2= [];
gdjs.HistoriaCode.GDTilefinalinvObjects1= [];
gdjs.HistoriaCode.GDTilefinalinvObjects2= [];
gdjs.HistoriaCode.GDpedrabulletObjects1= [];
gdjs.HistoriaCode.GDpedrabulletObjects2= [];
gdjs.HistoriaCode.GDTimerObjects1= [];
gdjs.HistoriaCode.GDTimerObjects2= [];
gdjs.HistoriaCode.GDwinObjects1= [];
gdjs.HistoriaCode.GDwinObjects2= [];
gdjs.HistoriaCode.GDwin3Objects1= [];
gdjs.HistoriaCode.GDwin3Objects2= [];
gdjs.HistoriaCode.GDwin2Objects1= [];
gdjs.HistoriaCode.GDwin2Objects2= [];
gdjs.HistoriaCode.GDFundoHistoriaObjects1= [];
gdjs.HistoriaCode.GDFundoHistoriaObjects2= [];
gdjs.HistoriaCode.GDtxtHisObjects1= [];
gdjs.HistoriaCode.GDtxtHisObjects2= [];
gdjs.HistoriaCode.GDtxtProxHisObjects1= [];
gdjs.HistoriaCode.GDtxtProxHisObjects2= [];
gdjs.HistoriaCode.GDtxtPularHisObjects1= [];
gdjs.HistoriaCode.GDtxtPularHisObjects2= [];

gdjs.HistoriaCode.conditionTrue_0 = {val:false};
gdjs.HistoriaCode.condition0IsTrue_0 = {val:false};
gdjs.HistoriaCode.condition1IsTrue_0 = {val:false};


gdjs.HistoriaCode.eventsList0x7efc4c = function(runtimeScene) {

{

gdjs.HistoriaCode.GDtxtProxHisObjects1.createFrom(runtimeScene.getObjects("txtProxHis"));

gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.HistoriaCode.GDtxtProxHisObjects1.length;i<l;++i) {
    if ( gdjs.HistoriaCode.GDtxtProxHisObjects1[i].getOpacity() <= 255 ) {
        gdjs.HistoriaCode.condition0IsTrue_0.val = true;
        gdjs.HistoriaCode.GDtxtProxHisObjects1[k] = gdjs.HistoriaCode.GDtxtProxHisObjects1[i];
        ++k;
    }
}
gdjs.HistoriaCode.GDtxtProxHisObjects1.length = k;}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HistoriaCode.GDtxtProxHisObjects1 */
{for(var i = 0, len = gdjs.HistoriaCode.GDtxtProxHisObjects1.length ;i < len;++i) {
    gdjs.HistoriaCode.GDtxtProxHisObjects1[i].setOpacity(gdjs.HistoriaCode.GDtxtProxHisObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


}; //End of gdjs.HistoriaCode.eventsList0x7efc4c
gdjs.HistoriaCode.mapOfGDgdjs_46HistoriaCode_46GDtxtProxHisObjects1Objects = Hashtable.newFrom({"txtProxHis": gdjs.HistoriaCode.GDtxtProxHisObjects1});gdjs.HistoriaCode.mapOfGDgdjs_46HistoriaCode_46GDtxtProxHisObjects1Objects = Hashtable.newFrom({"txtProxHis": gdjs.HistoriaCode.GDtxtProxHisObjects1});gdjs.HistoriaCode.mapOfGDgdjs_46HistoriaCode_46GDtxtProxHisObjects1Objects = Hashtable.newFrom({"txtProxHis": gdjs.HistoriaCode.GDtxtProxHisObjects1});gdjs.HistoriaCode.eventsList0x7efb14 = function(runtimeScene) {

{


gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
gdjs.HistoriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Historia2", false);
}}

}


}; //End of gdjs.HistoriaCode.eventsList0x7efb14
gdjs.HistoriaCode.mapOfGDgdjs_46HistoriaCode_46GDtxtPularHisObjects1Objects = Hashtable.newFrom({"txtPularHis": gdjs.HistoriaCode.GDtxtPularHisObjects1});gdjs.HistoriaCode.mapOfGDgdjs_46HistoriaCode_46GDtxtPularHisObjects1Objects = Hashtable.newFrom({"txtPularHis": gdjs.HistoriaCode.GDtxtPularHisObjects1});gdjs.HistoriaCode.eventsList0x9515e4 = function(runtimeScene) {

{


gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
gdjs.HistoriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Historia2", false);
}}

}


}; //End of gdjs.HistoriaCode.eventsList0x9515e4
gdjs.HistoriaCode.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
gdjs.HistoriaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {
gdjs.HistoriaCode.GDtxtHisObjects1.createFrom(runtimeScene.getObjects("txtHis"));
gdjs.HistoriaCode.GDtxtProxHisObjects1.createFrom(runtimeScene.getObjects("txtProxHis"));
{for(var i = 0, len = gdjs.HistoriaCode.GDtxtHisObjects1.length ;i < len;++i) {
    gdjs.HistoriaCode.GDtxtHisObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.HistoriaCode.GDtxtProxHisObjects1.length ;i < len;++i) {
    gdjs.HistoriaCode.GDtxtProxHisObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "..\\My project6\\elemento jogo\\musica\\fase 1.mp3", true, 70, 1);
}}

}


{

gdjs.HistoriaCode.GDtxtHisObjects1.createFrom(runtimeScene.getObjects("txtHis"));

gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.HistoriaCode.GDtxtHisObjects1.length;i<l;++i) {
    if ( gdjs.HistoriaCode.GDtxtHisObjects1[i].getY() >= 197 ) {
        gdjs.HistoriaCode.condition0IsTrue_0.val = true;
        gdjs.HistoriaCode.GDtxtHisObjects1[k] = gdjs.HistoriaCode.GDtxtHisObjects1[i];
        ++k;
    }
}
gdjs.HistoriaCode.GDtxtHisObjects1.length = k;}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HistoriaCode.GDtxtHisObjects1 */
{for(var i = 0, len = gdjs.HistoriaCode.GDtxtHisObjects1.length ;i < len;++i) {
    gdjs.HistoriaCode.GDtxtHisObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{

gdjs.HistoriaCode.GDtxtHisObjects1.createFrom(runtimeScene.getObjects("txtHis"));

gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.HistoriaCode.GDtxtHisObjects1.length;i<l;++i) {
    if ( gdjs.HistoriaCode.GDtxtHisObjects1[i].getY() <= 197 ) {
        gdjs.HistoriaCode.condition0IsTrue_0.val = true;
        gdjs.HistoriaCode.GDtxtHisObjects1[k] = gdjs.HistoriaCode.GDtxtHisObjects1[i];
        ++k;
    }
}
gdjs.HistoriaCode.GDtxtHisObjects1.length = k;}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HistoriaCode.eventsList0x7efc4c(runtimeScene);} //End of subevents
}

}


{

gdjs.HistoriaCode.GDtxtProxHisObjects1.createFrom(runtimeScene.getObjects("txtProxHis"));

gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
gdjs.HistoriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HistoriaCode.mapOfGDgdjs_46HistoriaCode_46GDtxtProxHisObjects1Objects, runtimeScene, true, true);
}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HistoriaCode.GDtxtProxHisObjects1 */
{for(var i = 0, len = gdjs.HistoriaCode.GDtxtProxHisObjects1.length ;i < len;++i) {
    gdjs.HistoriaCode.GDtxtProxHisObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.HistoriaCode.GDtxtProxHisObjects1.createFrom(runtimeScene.getObjects("txtProxHis"));

gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
gdjs.HistoriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HistoriaCode.mapOfGDgdjs_46HistoriaCode_46GDtxtProxHisObjects1Objects, runtimeScene, true, false);
}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HistoriaCode.GDtxtProxHisObjects1 */
{for(var i = 0, len = gdjs.HistoriaCode.GDtxtProxHisObjects1.length ;i < len;++i) {
    gdjs.HistoriaCode.GDtxtProxHisObjects1[i].setColor("94;94;94");
}
}}

}


{

gdjs.HistoriaCode.GDtxtProxHisObjects1.createFrom(runtimeScene.getObjects("txtProxHis"));

gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
gdjs.HistoriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HistoriaCode.mapOfGDgdjs_46HistoriaCode_46GDtxtProxHisObjects1Objects, runtimeScene, true, false);
}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HistoriaCode.eventsList0x7efb14(runtimeScene);} //End of subevents
}

}


{

gdjs.HistoriaCode.GDtxtPularHisObjects1.createFrom(runtimeScene.getObjects("txtPularHis"));

gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
gdjs.HistoriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HistoriaCode.mapOfGDgdjs_46HistoriaCode_46GDtxtPularHisObjects1Objects, runtimeScene, true, true);
}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HistoriaCode.GDtxtPularHisObjects1 */
{for(var i = 0, len = gdjs.HistoriaCode.GDtxtPularHisObjects1.length ;i < len;++i) {
    gdjs.HistoriaCode.GDtxtPularHisObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.HistoriaCode.GDtxtPularHisObjects1.createFrom(runtimeScene.getObjects("txtPularHis"));

gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
gdjs.HistoriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HistoriaCode.mapOfGDgdjs_46HistoriaCode_46GDtxtPularHisObjects1Objects, runtimeScene, true, false);
}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HistoriaCode.GDtxtPularHisObjects1 */
{for(var i = 0, len = gdjs.HistoriaCode.GDtxtPularHisObjects1.length ;i < len;++i) {
    gdjs.HistoriaCode.GDtxtPularHisObjects1[i].setColor("94;94;94");
}
}
{ //Subevents
gdjs.HistoriaCode.eventsList0x9515e4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.HistoriaCode.eventsList0xb43b0


gdjs.HistoriaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HistoriaCode.GDAmagObjects1.length = 0;
gdjs.HistoriaCode.GDAmagObjects2.length = 0;
gdjs.HistoriaCode.GDHUDCoinObjects1.length = 0;
gdjs.HistoriaCode.GDHUDCoinObjects2.length = 0;
gdjs.HistoriaCode.GDCoinObjects1.length = 0;
gdjs.HistoriaCode.GDCoinObjects2.length = 0;
gdjs.HistoriaCode.GDZombie3Objects1.length = 0;
gdjs.HistoriaCode.GDZombie3Objects2.length = 0;
gdjs.HistoriaCode.GDZombie2Objects1.length = 0;
gdjs.HistoriaCode.GDZombie2Objects2.length = 0;
gdjs.HistoriaCode.GDZombieObjects1.length = 0;
gdjs.HistoriaCode.GDZombieObjects2.length = 0;
gdjs.HistoriaCode.GDHitboxObjects1.length = 0;
gdjs.HistoriaCode.GDHitboxObjects2.length = 0;
gdjs.HistoriaCode.GDSuedObjects1.length = 0;
gdjs.HistoriaCode.GDSuedObjects2.length = 0;
gdjs.HistoriaCode.GDTeleportObjects1.length = 0;
gdjs.HistoriaCode.GDTeleportObjects2.length = 0;
gdjs.HistoriaCode.GDHUDVidaObjects1.length = 0;
gdjs.HistoriaCode.GDHUDVidaObjects2.length = 0;
gdjs.HistoriaCode.GDHUDBarraObjects1.length = 0;
gdjs.HistoriaCode.GDHUDBarraObjects2.length = 0;
gdjs.HistoriaCode.GDEsquerdaObjects1.length = 0;
gdjs.HistoriaCode.GDEsquerdaObjects2.length = 0;
gdjs.HistoriaCode.GDDireitaObjects1.length = 0;
gdjs.HistoriaCode.GDDireitaObjects2.length = 0;
gdjs.HistoriaCode.GDPlatafloorObjects1.length = 0;
gdjs.HistoriaCode.GDPlatafloorObjects2.length = 0;
gdjs.HistoriaCode.GDPlatafloorMoveObjects1.length = 0;
gdjs.HistoriaCode.GDPlatafloorMoveObjects2.length = 0;
gdjs.HistoriaCode.GDCoinHUD2Objects1.length = 0;
gdjs.HistoriaCode.GDCoinHUD2Objects2.length = 0;
gdjs.HistoriaCode.GDCoinHUDObjects1.length = 0;
gdjs.HistoriaCode.GDCoinHUDObjects2.length = 0;
gdjs.HistoriaCode.GDTilefinalObjects1.length = 0;
gdjs.HistoriaCode.GDTilefinalObjects2.length = 0;
gdjs.HistoriaCode.GDTilefinalinvObjects1.length = 0;
gdjs.HistoriaCode.GDTilefinalinvObjects2.length = 0;
gdjs.HistoriaCode.GDpedrabulletObjects1.length = 0;
gdjs.HistoriaCode.GDpedrabulletObjects2.length = 0;
gdjs.HistoriaCode.GDTimerObjects1.length = 0;
gdjs.HistoriaCode.GDTimerObjects2.length = 0;
gdjs.HistoriaCode.GDwinObjects1.length = 0;
gdjs.HistoriaCode.GDwinObjects2.length = 0;
gdjs.HistoriaCode.GDwin3Objects1.length = 0;
gdjs.HistoriaCode.GDwin3Objects2.length = 0;
gdjs.HistoriaCode.GDwin2Objects1.length = 0;
gdjs.HistoriaCode.GDwin2Objects2.length = 0;
gdjs.HistoriaCode.GDFundoHistoriaObjects1.length = 0;
gdjs.HistoriaCode.GDFundoHistoriaObjects2.length = 0;
gdjs.HistoriaCode.GDtxtHisObjects1.length = 0;
gdjs.HistoriaCode.GDtxtHisObjects2.length = 0;
gdjs.HistoriaCode.GDtxtProxHisObjects1.length = 0;
gdjs.HistoriaCode.GDtxtProxHisObjects2.length = 0;
gdjs.HistoriaCode.GDtxtPularHisObjects1.length = 0;
gdjs.HistoriaCode.GDtxtPularHisObjects2.length = 0;

gdjs.HistoriaCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['HistoriaCode'] = gdjs.HistoriaCode;
