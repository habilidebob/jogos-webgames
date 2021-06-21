gdjs.MenuCode = {};
gdjs.MenuCode.GDAmagObjects1= [];
gdjs.MenuCode.GDAmagObjects2= [];
gdjs.MenuCode.GDHUDCoinObjects1= [];
gdjs.MenuCode.GDHUDCoinObjects2= [];
gdjs.MenuCode.GDCoinObjects1= [];
gdjs.MenuCode.GDCoinObjects2= [];
gdjs.MenuCode.GDZombie3Objects1= [];
gdjs.MenuCode.GDZombie3Objects2= [];
gdjs.MenuCode.GDZombie2Objects1= [];
gdjs.MenuCode.GDZombie2Objects2= [];
gdjs.MenuCode.GDZombieObjects1= [];
gdjs.MenuCode.GDZombieObjects2= [];
gdjs.MenuCode.GDHitboxObjects1= [];
gdjs.MenuCode.GDHitboxObjects2= [];
gdjs.MenuCode.GDSuedObjects1= [];
gdjs.MenuCode.GDSuedObjects2= [];
gdjs.MenuCode.GDTeleportObjects1= [];
gdjs.MenuCode.GDTeleportObjects2= [];
gdjs.MenuCode.GDHUDVidaObjects1= [];
gdjs.MenuCode.GDHUDVidaObjects2= [];
gdjs.MenuCode.GDHUDBarraObjects1= [];
gdjs.MenuCode.GDHUDBarraObjects2= [];
gdjs.MenuCode.GDEsquerdaObjects1= [];
gdjs.MenuCode.GDEsquerdaObjects2= [];
gdjs.MenuCode.GDDireitaObjects1= [];
gdjs.MenuCode.GDDireitaObjects2= [];
gdjs.MenuCode.GDPlatafloorObjects1= [];
gdjs.MenuCode.GDPlatafloorObjects2= [];
gdjs.MenuCode.GDPlatafloorMoveObjects1= [];
gdjs.MenuCode.GDPlatafloorMoveObjects2= [];
gdjs.MenuCode.GDCoinHUD2Objects1= [];
gdjs.MenuCode.GDCoinHUD2Objects2= [];
gdjs.MenuCode.GDCoinHUDObjects1= [];
gdjs.MenuCode.GDCoinHUDObjects2= [];
gdjs.MenuCode.GDTilefinalObjects1= [];
gdjs.MenuCode.GDTilefinalObjects2= [];
gdjs.MenuCode.GDTilefinalinvObjects1= [];
gdjs.MenuCode.GDTilefinalinvObjects2= [];
gdjs.MenuCode.GDpedrabulletObjects1= [];
gdjs.MenuCode.GDpedrabulletObjects2= [];
gdjs.MenuCode.GDTimerObjects1= [];
gdjs.MenuCode.GDTimerObjects2= [];
gdjs.MenuCode.GDwinObjects1= [];
gdjs.MenuCode.GDwinObjects2= [];
gdjs.MenuCode.GDwin3Objects1= [];
gdjs.MenuCode.GDwin3Objects2= [];
gdjs.MenuCode.GDwin2Objects1= [];
gdjs.MenuCode.GDwin2Objects2= [];
gdjs.MenuCode.GDbgMenuObjects1= [];
gdjs.MenuCode.GDbgMenuObjects2= [];
gdjs.MenuCode.GDtitTrpObjects1= [];
gdjs.MenuCode.GDtitTrpObjects2= [];
gdjs.MenuCode.GDtitTheRescueObjects1= [];
gdjs.MenuCode.GDtitTheRescueObjects2= [];
gdjs.MenuCode.GDtxtConfigObjects1= [];
gdjs.MenuCode.GDtxtConfigObjects2= [];
gdjs.MenuCode.GDtxtCreditosObjects1= [];
gdjs.MenuCode.GDtxtCreditosObjects2= [];
gdjs.MenuCode.GDtxtJogarObjects1= [];
gdjs.MenuCode.GDtxtJogarObjects2= [];
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};


gdjs.MenuCode.eventsList0x8212b4 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "..\\My project6\\elemento jogo\\musica\\menu bom_mixagem.mp3", 1, false, 60, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


}; //End of gdjs.MenuCode.eventsList0x8212b4
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtxtJogarObjects1Objects = Hashtable.newFrom({"txtJogar": gdjs.MenuCode.GDtxtJogarObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtxtJogarObjects1Objects = Hashtable.newFrom({"txtJogar": gdjs.MenuCode.GDtxtJogarObjects1});gdjs.MenuCode.eventsList0x8b86cc = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Historia", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x8b86cc
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtxtCreditosObjects1Objects = Hashtable.newFrom({"txtCreditos": gdjs.MenuCode.GDtxtCreditosObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtxtCreditosObjects1Objects = Hashtable.newFrom({"txtCreditos": gdjs.MenuCode.GDtxtCreditosObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtxtConfigObjects1Objects = Hashtable.newFrom({"txtConfig": gdjs.MenuCode.GDtxtConfigObjects1});gdjs.MenuCode.eventsList0x69cc2c = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menuConfig", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0x69cc2c
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtxtConfigObjects1Objects = Hashtable.newFrom({"txtConfig": gdjs.MenuCode.GDtxtConfigObjects1});gdjs.MenuCode.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDtitTheRescueObjects1.createFrom(runtimeScene.getObjects("titTheRescue"));
gdjs.MenuCode.GDtitTrpObjects1.createFrom(runtimeScene.getObjects("titTrp"));
gdjs.MenuCode.GDtxtConfigObjects1.createFrom(runtimeScene.getObjects("txtConfig"));
gdjs.MenuCode.GDtxtCreditosObjects1.createFrom(runtimeScene.getObjects("txtCreditos"));
gdjs.MenuCode.GDtxtJogarObjects1.createFrom(runtimeScene.getObjects("txtJogar"));
{for(var i = 0, len = gdjs.MenuCode.GDtitTrpObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtitTrpObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtitTheRescueObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtitTheRescueObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtxtJogarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtJogarObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtxtCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtCreditosObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtxtConfigObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtConfigObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtitTrpObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtitTrpObjects1[i].setGradient("LINEAR_VERTICAL", "121;121;121", "158;158;158", "121;121;121", "158;158;158");
}
}{for(var i = 0, len = gdjs.MenuCode.GDtitTrpObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtitTrpObjects1[i].setOutline("100;100;100", 3);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtitTheRescueObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtitTheRescueObjects1[i].setOutline("100;100;100", 3);
}
}{for(var i = 0, len = gdjs.MenuCode.GDtitTheRescueObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtitTheRescueObjects1[i].setGradient("LINEAR_VERTICAL", "121;121;121", "158;158;158", "121;121;121", "158;158;158");
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x8212b4(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "..\\My project6\\elemento jogo\\musica\\menu bom_mixagem.mp3", 1, false, 60, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.MenuCode.GDtitTheRescueObjects1.createFrom(runtimeScene.getObjects("titTheRescue"));
gdjs.MenuCode.GDtitTrpObjects1.createFrom(runtimeScene.getObjects("titTrp"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDtitTrpObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDtitTrpObjects1[i].getOpacity() < 255 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDtitTrpObjects1[k] = gdjs.MenuCode.GDtitTrpObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDtitTrpObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDtitTheRescueObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDtitTheRescueObjects1[i].getOpacity() < 255 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDtitTheRescueObjects1[k] = gdjs.MenuCode.GDtitTheRescueObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDtitTheRescueObjects1.length = k;}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDtitTheRescueObjects1 */
/* Reuse gdjs.MenuCode.GDtitTrpObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDtitTrpObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtitTrpObjects1[i].setOpacity(gdjs.MenuCode.GDtitTrpObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.MenuCode.GDtitTheRescueObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtitTheRescueObjects1[i].setOpacity(gdjs.MenuCode.GDtitTheRescueObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.MenuCode.GDtxtConfigObjects1.createFrom(runtimeScene.getObjects("txtConfig"));
gdjs.MenuCode.GDtxtCreditosObjects1.createFrom(runtimeScene.getObjects("txtCreditos"));
gdjs.MenuCode.GDtxtJogarObjects1.createFrom(runtimeScene.getObjects("txtJogar"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDtxtCreditosObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDtxtCreditosObjects1[i].getOpacity() < 255 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDtxtCreditosObjects1[k] = gdjs.MenuCode.GDtxtCreditosObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDtxtCreditosObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDtxtJogarObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDtxtJogarObjects1[i].getOpacity() < 255 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDtxtJogarObjects1[k] = gdjs.MenuCode.GDtxtJogarObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDtxtJogarObjects1.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDtxtConfigObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDtxtConfigObjects1[i].getOpacity() < 255 ) {
        gdjs.MenuCode.condition2IsTrue_0.val = true;
        gdjs.MenuCode.GDtxtConfigObjects1[k] = gdjs.MenuCode.GDtxtConfigObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDtxtConfigObjects1.length = k;}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDtxtConfigObjects1 */
/* Reuse gdjs.MenuCode.GDtxtCreditosObjects1 */
/* Reuse gdjs.MenuCode.GDtxtJogarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDtxtCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtCreditosObjects1[i].setOpacity(gdjs.MenuCode.GDtxtCreditosObjects1[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.MenuCode.GDtxtJogarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtJogarObjects1[i].setOpacity(gdjs.MenuCode.GDtxtJogarObjects1[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.MenuCode.GDtxtConfigObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtConfigObjects1[i].setOpacity(gdjs.MenuCode.GDtxtConfigObjects1[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.MenuCode.GDtxtJogarObjects1.createFrom(runtimeScene.getObjects("txtJogar"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtxtJogarObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDtxtJogarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDtxtJogarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtJogarObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.MenuCode.GDtxtJogarObjects1.createFrom(runtimeScene.getObjects("txtJogar"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtxtJogarObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDtxtJogarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDtxtJogarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtJogarObjects1[i].setColor("94;94;94");
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x8b86cc(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDtxtCreditosObjects1.createFrom(runtimeScene.getObjects("txtCreditos"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtxtCreditosObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDtxtCreditosObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDtxtCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtCreditosObjects1[i].setColor("94;94;94");
}
}}

}


{

gdjs.MenuCode.GDtxtCreditosObjects1.createFrom(runtimeScene.getObjects("txtCreditos"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtxtCreditosObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDtxtCreditosObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDtxtCreditosObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtCreditosObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.MenuCode.GDtxtConfigObjects1.createFrom(runtimeScene.getObjects("txtConfig"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtxtConfigObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDtxtConfigObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDtxtConfigObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtConfigObjects1[i].setColor("94;94;94");
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x69cc2c(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDtxtConfigObjects1.createFrom(runtimeScene.getObjects("txtConfig"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtxtConfigObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDtxtConfigObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDtxtConfigObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxtConfigObjects1[i].setColor("0;0;0");
}
}}

}


}; //End of gdjs.MenuCode.eventsList0xb43b0


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDAmagObjects1.length = 0;
gdjs.MenuCode.GDAmagObjects2.length = 0;
gdjs.MenuCode.GDHUDCoinObjects1.length = 0;
gdjs.MenuCode.GDHUDCoinObjects2.length = 0;
gdjs.MenuCode.GDCoinObjects1.length = 0;
gdjs.MenuCode.GDCoinObjects2.length = 0;
gdjs.MenuCode.GDZombie3Objects1.length = 0;
gdjs.MenuCode.GDZombie3Objects2.length = 0;
gdjs.MenuCode.GDZombie2Objects1.length = 0;
gdjs.MenuCode.GDZombie2Objects2.length = 0;
gdjs.MenuCode.GDZombieObjects1.length = 0;
gdjs.MenuCode.GDZombieObjects2.length = 0;
gdjs.MenuCode.GDHitboxObjects1.length = 0;
gdjs.MenuCode.GDHitboxObjects2.length = 0;
gdjs.MenuCode.GDSuedObjects1.length = 0;
gdjs.MenuCode.GDSuedObjects2.length = 0;
gdjs.MenuCode.GDTeleportObjects1.length = 0;
gdjs.MenuCode.GDTeleportObjects2.length = 0;
gdjs.MenuCode.GDHUDVidaObjects1.length = 0;
gdjs.MenuCode.GDHUDVidaObjects2.length = 0;
gdjs.MenuCode.GDHUDBarraObjects1.length = 0;
gdjs.MenuCode.GDHUDBarraObjects2.length = 0;
gdjs.MenuCode.GDEsquerdaObjects1.length = 0;
gdjs.MenuCode.GDEsquerdaObjects2.length = 0;
gdjs.MenuCode.GDDireitaObjects1.length = 0;
gdjs.MenuCode.GDDireitaObjects2.length = 0;
gdjs.MenuCode.GDPlatafloorObjects1.length = 0;
gdjs.MenuCode.GDPlatafloorObjects2.length = 0;
gdjs.MenuCode.GDPlatafloorMoveObjects1.length = 0;
gdjs.MenuCode.GDPlatafloorMoveObjects2.length = 0;
gdjs.MenuCode.GDCoinHUD2Objects1.length = 0;
gdjs.MenuCode.GDCoinHUD2Objects2.length = 0;
gdjs.MenuCode.GDCoinHUDObjects1.length = 0;
gdjs.MenuCode.GDCoinHUDObjects2.length = 0;
gdjs.MenuCode.GDTilefinalObjects1.length = 0;
gdjs.MenuCode.GDTilefinalObjects2.length = 0;
gdjs.MenuCode.GDTilefinalinvObjects1.length = 0;
gdjs.MenuCode.GDTilefinalinvObjects2.length = 0;
gdjs.MenuCode.GDpedrabulletObjects1.length = 0;
gdjs.MenuCode.GDpedrabulletObjects2.length = 0;
gdjs.MenuCode.GDTimerObjects1.length = 0;
gdjs.MenuCode.GDTimerObjects2.length = 0;
gdjs.MenuCode.GDwinObjects1.length = 0;
gdjs.MenuCode.GDwinObjects2.length = 0;
gdjs.MenuCode.GDwin3Objects1.length = 0;
gdjs.MenuCode.GDwin3Objects2.length = 0;
gdjs.MenuCode.GDwin2Objects1.length = 0;
gdjs.MenuCode.GDwin2Objects2.length = 0;
gdjs.MenuCode.GDbgMenuObjects1.length = 0;
gdjs.MenuCode.GDbgMenuObjects2.length = 0;
gdjs.MenuCode.GDtitTrpObjects1.length = 0;
gdjs.MenuCode.GDtitTrpObjects2.length = 0;
gdjs.MenuCode.GDtitTheRescueObjects1.length = 0;
gdjs.MenuCode.GDtitTheRescueObjects2.length = 0;
gdjs.MenuCode.GDtxtConfigObjects1.length = 0;
gdjs.MenuCode.GDtxtConfigObjects2.length = 0;
gdjs.MenuCode.GDtxtCreditosObjects1.length = 0;
gdjs.MenuCode.GDtxtCreditosObjects2.length = 0;
gdjs.MenuCode.GDtxtJogarObjects1.length = 0;
gdjs.MenuCode.GDtxtJogarObjects2.length = 0;
gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;

gdjs.MenuCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['MenuCode'] = gdjs.MenuCode;
