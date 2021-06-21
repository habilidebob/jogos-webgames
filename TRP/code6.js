gdjs.Historia2Code = {};
gdjs.Historia2Code.GDAmagObjects1= [];
gdjs.Historia2Code.GDAmagObjects2= [];
gdjs.Historia2Code.GDHUDCoinObjects1= [];
gdjs.Historia2Code.GDHUDCoinObjects2= [];
gdjs.Historia2Code.GDCoinObjects1= [];
gdjs.Historia2Code.GDCoinObjects2= [];
gdjs.Historia2Code.GDZombie3Objects1= [];
gdjs.Historia2Code.GDZombie3Objects2= [];
gdjs.Historia2Code.GDZombie2Objects1= [];
gdjs.Historia2Code.GDZombie2Objects2= [];
gdjs.Historia2Code.GDZombieObjects1= [];
gdjs.Historia2Code.GDZombieObjects2= [];
gdjs.Historia2Code.GDHitboxObjects1= [];
gdjs.Historia2Code.GDHitboxObjects2= [];
gdjs.Historia2Code.GDSuedObjects1= [];
gdjs.Historia2Code.GDSuedObjects2= [];
gdjs.Historia2Code.GDTeleportObjects1= [];
gdjs.Historia2Code.GDTeleportObjects2= [];
gdjs.Historia2Code.GDHUDVidaObjects1= [];
gdjs.Historia2Code.GDHUDVidaObjects2= [];
gdjs.Historia2Code.GDHUDBarraObjects1= [];
gdjs.Historia2Code.GDHUDBarraObjects2= [];
gdjs.Historia2Code.GDEsquerdaObjects1= [];
gdjs.Historia2Code.GDEsquerdaObjects2= [];
gdjs.Historia2Code.GDDireitaObjects1= [];
gdjs.Historia2Code.GDDireitaObjects2= [];
gdjs.Historia2Code.GDPlatafloorObjects1= [];
gdjs.Historia2Code.GDPlatafloorObjects2= [];
gdjs.Historia2Code.GDPlatafloorMoveObjects1= [];
gdjs.Historia2Code.GDPlatafloorMoveObjects2= [];
gdjs.Historia2Code.GDCoinHUD2Objects1= [];
gdjs.Historia2Code.GDCoinHUD2Objects2= [];
gdjs.Historia2Code.GDCoinHUDObjects1= [];
gdjs.Historia2Code.GDCoinHUDObjects2= [];
gdjs.Historia2Code.GDTilefinalObjects1= [];
gdjs.Historia2Code.GDTilefinalObjects2= [];
gdjs.Historia2Code.GDTilefinalinvObjects1= [];
gdjs.Historia2Code.GDTilefinalinvObjects2= [];
gdjs.Historia2Code.GDpedrabulletObjects1= [];
gdjs.Historia2Code.GDpedrabulletObjects2= [];
gdjs.Historia2Code.GDTimerObjects1= [];
gdjs.Historia2Code.GDTimerObjects2= [];
gdjs.Historia2Code.GDwinObjects1= [];
gdjs.Historia2Code.GDwinObjects2= [];
gdjs.Historia2Code.GDwin3Objects1= [];
gdjs.Historia2Code.GDwin3Objects2= [];
gdjs.Historia2Code.GDwin2Objects1= [];
gdjs.Historia2Code.GDwin2Objects2= [];
gdjs.Historia2Code.GDFundoHistoria2Objects1= [];
gdjs.Historia2Code.GDFundoHistoria2Objects2= [];
gdjs.Historia2Code.GDtxtHis2Objects1= [];
gdjs.Historia2Code.GDtxtHis2Objects2= [];
gdjs.Historia2Code.GDtxtProxHis2Objects1= [];
gdjs.Historia2Code.GDtxtProxHis2Objects2= [];
gdjs.Historia2Code.GDtxtPularHis2Objects1= [];
gdjs.Historia2Code.GDtxtPularHis2Objects2= [];

gdjs.Historia2Code.conditionTrue_0 = {val:false};
gdjs.Historia2Code.condition0IsTrue_0 = {val:false};
gdjs.Historia2Code.condition1IsTrue_0 = {val:false};


gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDtxtProxHis2Objects1Objects = Hashtable.newFrom({"txtProxHis2": gdjs.Historia2Code.GDtxtProxHis2Objects1});gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDtxtProxHis2Objects1Objects = Hashtable.newFrom({"txtProxHis2": gdjs.Historia2Code.GDtxtProxHis2Objects1});gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDtxtProxHis2Objects1Objects = Hashtable.newFrom({"txtProxHis2": gdjs.Historia2Code.GDtxtProxHis2Objects1});gdjs.Historia2Code.eventsList0x75e8ac = function(runtimeScene) {

{


gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Historia2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase1", false);
}}

}


}; //End of gdjs.Historia2Code.eventsList0x75e8ac
gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDtxtPularHis2Objects1Objects = Hashtable.newFrom({"txtPularHis2": gdjs.Historia2Code.GDtxtPularHis2Objects1});gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDtxtPularHis2Objects1Objects = Hashtable.newFrom({"txtPularHis2": gdjs.Historia2Code.GDtxtPularHis2Objects1});gdjs.Historia2Code.eventsList0x6a2d5c = function(runtimeScene) {

{


gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Historia2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase1", false);
}}

}


}; //End of gdjs.Historia2Code.eventsList0x6a2d5c
gdjs.Historia2Code.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Historia2Code.condition0IsTrue_0.val) {
gdjs.Historia2Code.GDtxtHis2Objects1.createFrom(runtimeScene.getObjects("txtHis2"));
gdjs.Historia2Code.GDtxtProxHis2Objects1.createFrom(runtimeScene.getObjects("txtProxHis2"));
{for(var i = 0, len = gdjs.Historia2Code.GDtxtHis2Objects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDtxtHis2Objects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.Historia2Code.GDtxtProxHis2Objects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDtxtProxHis2Objects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "..\\My project6\\elemento jogo\\musica\\fase 1.mp3", true, 70, 1);
}}

}


{

gdjs.Historia2Code.GDtxtProxHis2Objects1.createFrom(runtimeScene.getObjects("txtProxHis2"));

gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Historia2Code.GDtxtProxHis2Objects1.length;i<l;++i) {
    if ( gdjs.Historia2Code.GDtxtProxHis2Objects1[i].getOpacity() <= 255 ) {
        gdjs.Historia2Code.condition0IsTrue_0.val = true;
        gdjs.Historia2Code.GDtxtProxHis2Objects1[k] = gdjs.Historia2Code.GDtxtProxHis2Objects1[i];
        ++k;
    }
}
gdjs.Historia2Code.GDtxtProxHis2Objects1.length = k;}if (gdjs.Historia2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Historia2Code.GDtxtProxHis2Objects1 */
{for(var i = 0, len = gdjs.Historia2Code.GDtxtProxHis2Objects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDtxtProxHis2Objects1[i].setOpacity(gdjs.Historia2Code.GDtxtProxHis2Objects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.Historia2Code.GDtxtProxHis2Objects1.createFrom(runtimeScene.getObjects("txtProxHis2"));

gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDtxtProxHis2Objects1Objects, runtimeScene, true, true);
}if (gdjs.Historia2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Historia2Code.GDtxtProxHis2Objects1 */
{for(var i = 0, len = gdjs.Historia2Code.GDtxtProxHis2Objects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDtxtProxHis2Objects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.Historia2Code.GDtxtProxHis2Objects1.createFrom(runtimeScene.getObjects("txtProxHis2"));

gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDtxtProxHis2Objects1Objects, runtimeScene, true, false);
}if (gdjs.Historia2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Historia2Code.GDtxtProxHis2Objects1 */
{for(var i = 0, len = gdjs.Historia2Code.GDtxtProxHis2Objects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDtxtProxHis2Objects1[i].setColor("94;94;94");
}
}}

}


{

gdjs.Historia2Code.GDtxtProxHis2Objects1.createFrom(runtimeScene.getObjects("txtProxHis2"));

gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDtxtProxHis2Objects1Objects, runtimeScene, true, false);
}if (gdjs.Historia2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Historia2Code.eventsList0x75e8ac(runtimeScene);} //End of subevents
}

}


{

gdjs.Historia2Code.GDtxtPularHis2Objects1.createFrom(runtimeScene.getObjects("txtPularHis2"));

gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDtxtPularHis2Objects1Objects, runtimeScene, true, true);
}if (gdjs.Historia2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Historia2Code.GDtxtPularHis2Objects1 */
{for(var i = 0, len = gdjs.Historia2Code.GDtxtPularHis2Objects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDtxtPularHis2Objects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.Historia2Code.GDtxtPularHis2Objects1.createFrom(runtimeScene.getObjects("txtPularHis2"));

gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDtxtPularHis2Objects1Objects, runtimeScene, true, false);
}if (gdjs.Historia2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Historia2Code.GDtxtPularHis2Objects1 */
{for(var i = 0, len = gdjs.Historia2Code.GDtxtPularHis2Objects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDtxtPularHis2Objects1[i].setColor("94;94;94");
}
}
{ //Subevents
gdjs.Historia2Code.eventsList0x6a2d5c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Historia2Code.eventsList0xb43b0


gdjs.Historia2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Historia2Code.GDAmagObjects1.length = 0;
gdjs.Historia2Code.GDAmagObjects2.length = 0;
gdjs.Historia2Code.GDHUDCoinObjects1.length = 0;
gdjs.Historia2Code.GDHUDCoinObjects2.length = 0;
gdjs.Historia2Code.GDCoinObjects1.length = 0;
gdjs.Historia2Code.GDCoinObjects2.length = 0;
gdjs.Historia2Code.GDZombie3Objects1.length = 0;
gdjs.Historia2Code.GDZombie3Objects2.length = 0;
gdjs.Historia2Code.GDZombie2Objects1.length = 0;
gdjs.Historia2Code.GDZombie2Objects2.length = 0;
gdjs.Historia2Code.GDZombieObjects1.length = 0;
gdjs.Historia2Code.GDZombieObjects2.length = 0;
gdjs.Historia2Code.GDHitboxObjects1.length = 0;
gdjs.Historia2Code.GDHitboxObjects2.length = 0;
gdjs.Historia2Code.GDSuedObjects1.length = 0;
gdjs.Historia2Code.GDSuedObjects2.length = 0;
gdjs.Historia2Code.GDTeleportObjects1.length = 0;
gdjs.Historia2Code.GDTeleportObjects2.length = 0;
gdjs.Historia2Code.GDHUDVidaObjects1.length = 0;
gdjs.Historia2Code.GDHUDVidaObjects2.length = 0;
gdjs.Historia2Code.GDHUDBarraObjects1.length = 0;
gdjs.Historia2Code.GDHUDBarraObjects2.length = 0;
gdjs.Historia2Code.GDEsquerdaObjects1.length = 0;
gdjs.Historia2Code.GDEsquerdaObjects2.length = 0;
gdjs.Historia2Code.GDDireitaObjects1.length = 0;
gdjs.Historia2Code.GDDireitaObjects2.length = 0;
gdjs.Historia2Code.GDPlatafloorObjects1.length = 0;
gdjs.Historia2Code.GDPlatafloorObjects2.length = 0;
gdjs.Historia2Code.GDPlatafloorMoveObjects1.length = 0;
gdjs.Historia2Code.GDPlatafloorMoveObjects2.length = 0;
gdjs.Historia2Code.GDCoinHUD2Objects1.length = 0;
gdjs.Historia2Code.GDCoinHUD2Objects2.length = 0;
gdjs.Historia2Code.GDCoinHUDObjects1.length = 0;
gdjs.Historia2Code.GDCoinHUDObjects2.length = 0;
gdjs.Historia2Code.GDTilefinalObjects1.length = 0;
gdjs.Historia2Code.GDTilefinalObjects2.length = 0;
gdjs.Historia2Code.GDTilefinalinvObjects1.length = 0;
gdjs.Historia2Code.GDTilefinalinvObjects2.length = 0;
gdjs.Historia2Code.GDpedrabulletObjects1.length = 0;
gdjs.Historia2Code.GDpedrabulletObjects2.length = 0;
gdjs.Historia2Code.GDTimerObjects1.length = 0;
gdjs.Historia2Code.GDTimerObjects2.length = 0;
gdjs.Historia2Code.GDwinObjects1.length = 0;
gdjs.Historia2Code.GDwinObjects2.length = 0;
gdjs.Historia2Code.GDwin3Objects1.length = 0;
gdjs.Historia2Code.GDwin3Objects2.length = 0;
gdjs.Historia2Code.GDwin2Objects1.length = 0;
gdjs.Historia2Code.GDwin2Objects2.length = 0;
gdjs.Historia2Code.GDFundoHistoria2Objects1.length = 0;
gdjs.Historia2Code.GDFundoHistoria2Objects2.length = 0;
gdjs.Historia2Code.GDtxtHis2Objects1.length = 0;
gdjs.Historia2Code.GDtxtHis2Objects2.length = 0;
gdjs.Historia2Code.GDtxtProxHis2Objects1.length = 0;
gdjs.Historia2Code.GDtxtProxHis2Objects2.length = 0;
gdjs.Historia2Code.GDtxtPularHis2Objects1.length = 0;
gdjs.Historia2Code.GDtxtPularHis2Objects2.length = 0;

gdjs.Historia2Code.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['Historia2Code'] = gdjs.Historia2Code;
