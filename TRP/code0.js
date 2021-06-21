gdjs.SplashMenuCode = {};
gdjs.SplashMenuCode.GDAmagObjects1= [];
gdjs.SplashMenuCode.GDAmagObjects2= [];
gdjs.SplashMenuCode.GDHUDCoinObjects1= [];
gdjs.SplashMenuCode.GDHUDCoinObjects2= [];
gdjs.SplashMenuCode.GDCoinObjects1= [];
gdjs.SplashMenuCode.GDCoinObjects2= [];
gdjs.SplashMenuCode.GDZombie3Objects1= [];
gdjs.SplashMenuCode.GDZombie3Objects2= [];
gdjs.SplashMenuCode.GDZombie2Objects1= [];
gdjs.SplashMenuCode.GDZombie2Objects2= [];
gdjs.SplashMenuCode.GDZombieObjects1= [];
gdjs.SplashMenuCode.GDZombieObjects2= [];
gdjs.SplashMenuCode.GDHitboxObjects1= [];
gdjs.SplashMenuCode.GDHitboxObjects2= [];
gdjs.SplashMenuCode.GDSuedObjects1= [];
gdjs.SplashMenuCode.GDSuedObjects2= [];
gdjs.SplashMenuCode.GDTeleportObjects1= [];
gdjs.SplashMenuCode.GDTeleportObjects2= [];
gdjs.SplashMenuCode.GDHUDVidaObjects1= [];
gdjs.SplashMenuCode.GDHUDVidaObjects2= [];
gdjs.SplashMenuCode.GDHUDBarraObjects1= [];
gdjs.SplashMenuCode.GDHUDBarraObjects2= [];
gdjs.SplashMenuCode.GDEsquerdaObjects1= [];
gdjs.SplashMenuCode.GDEsquerdaObjects2= [];
gdjs.SplashMenuCode.GDDireitaObjects1= [];
gdjs.SplashMenuCode.GDDireitaObjects2= [];
gdjs.SplashMenuCode.GDPlatafloorObjects1= [];
gdjs.SplashMenuCode.GDPlatafloorObjects2= [];
gdjs.SplashMenuCode.GDPlatafloorMoveObjects1= [];
gdjs.SplashMenuCode.GDPlatafloorMoveObjects2= [];
gdjs.SplashMenuCode.GDCoinHUD2Objects1= [];
gdjs.SplashMenuCode.GDCoinHUD2Objects2= [];
gdjs.SplashMenuCode.GDCoinHUDObjects1= [];
gdjs.SplashMenuCode.GDCoinHUDObjects2= [];
gdjs.SplashMenuCode.GDTilefinalObjects1= [];
gdjs.SplashMenuCode.GDTilefinalObjects2= [];
gdjs.SplashMenuCode.GDTilefinalinvObjects1= [];
gdjs.SplashMenuCode.GDTilefinalinvObjects2= [];
gdjs.SplashMenuCode.GDpedrabulletObjects1= [];
gdjs.SplashMenuCode.GDpedrabulletObjects2= [];
gdjs.SplashMenuCode.GDTimerObjects1= [];
gdjs.SplashMenuCode.GDTimerObjects2= [];
gdjs.SplashMenuCode.GDwinObjects1= [];
gdjs.SplashMenuCode.GDwinObjects2= [];
gdjs.SplashMenuCode.GDwin3Objects1= [];
gdjs.SplashMenuCode.GDwin3Objects2= [];
gdjs.SplashMenuCode.GDwin2Objects1= [];
gdjs.SplashMenuCode.GDwin2Objects2= [];
gdjs.SplashMenuCode.GDLogoBitgeekObjects1= [];
gdjs.SplashMenuCode.GDLogoBitgeekObjects2= [];
gdjs.SplashMenuCode.GDLogoSenacObjects1= [];
gdjs.SplashMenuCode.GDLogoSenacObjects2= [];
gdjs.SplashMenuCode.GDtxtCriadoObjects1= [];
gdjs.SplashMenuCode.GDtxtCriadoObjects2= [];
gdjs.SplashMenuCode.GDtxtOferecimentoObjects1= [];
gdjs.SplashMenuCode.GDtxtOferecimentoObjects2= [];
gdjs.SplashMenuCode.GDtxtProxSplashObjects1= [];
gdjs.SplashMenuCode.GDtxtProxSplashObjects2= [];

gdjs.SplashMenuCode.conditionTrue_0 = {val:false};
gdjs.SplashMenuCode.condition0IsTrue_0 = {val:false};
gdjs.SplashMenuCode.condition1IsTrue_0 = {val:false};
gdjs.SplashMenuCode.condition2IsTrue_0 = {val:false};
gdjs.SplashMenuCode.conditionTrue_1 = {val:false};
gdjs.SplashMenuCode.condition0IsTrue_1 = {val:false};
gdjs.SplashMenuCode.condition1IsTrue_1 = {val:false};
gdjs.SplashMenuCode.condition2IsTrue_1 = {val:false};


gdjs.SplashMenuCode.eventsList0x83400c = function(runtimeScene) {

{

gdjs.SplashMenuCode.GDtxtProxSplashObjects1.createFrom(runtimeScene.getObjects("txtProxSplash"));

gdjs.SplashMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashMenuCode.GDtxtProxSplashObjects1.length;i<l;++i) {
    if ( gdjs.SplashMenuCode.GDtxtProxSplashObjects1[i].getOpacity() < 255 ) {
        gdjs.SplashMenuCode.condition0IsTrue_0.val = true;
        gdjs.SplashMenuCode.GDtxtProxSplashObjects1[k] = gdjs.SplashMenuCode.GDtxtProxSplashObjects1[i];
        ++k;
    }
}
gdjs.SplashMenuCode.GDtxtProxSplashObjects1.length = k;}if (gdjs.SplashMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashMenuCode.GDtxtProxSplashObjects1 */
{for(var i = 0, len = gdjs.SplashMenuCode.GDtxtProxSplashObjects1.length ;i < len;++i) {
    gdjs.SplashMenuCode.GDtxtProxSplashObjects1[i].setOpacity(gdjs.SplashMenuCode.GDtxtProxSplashObjects1[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


}; //End of gdjs.SplashMenuCode.eventsList0x83400c
gdjs.SplashMenuCode.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.SplashMenuCode.condition0IsTrue_0.val = false;
{
gdjs.SplashMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SplashMenuCode.condition0IsTrue_0.val) {
gdjs.SplashMenuCode.GDtxtProxSplashObjects1.createFrom(runtimeScene.getObjects("txtProxSplash"));
{for(var i = 0, len = gdjs.SplashMenuCode.GDtxtProxSplashObjects1.length ;i < len;++i) {
    gdjs.SplashMenuCode.GDtxtProxSplashObjects1[i].setColor("68;150;247");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


gdjs.SplashMenuCode.condition0IsTrue_0.val = false;
gdjs.SplashMenuCode.condition1IsTrue_0.val = false;
{
gdjs.SplashMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SplashMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.SplashMenuCode.conditionTrue_1 = gdjs.SplashMenuCode.condition1IsTrue_0;
gdjs.SplashMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6951436);
}
}}
if (gdjs.SplashMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "..\\My project6\\elemento jogo\\Drawn_sword_sound_effects_free-U34MegCHlig (1).mp3", false, 45, 1);
}}

}


{


gdjs.SplashMenuCode.condition0IsTrue_0.val = false;
{
gdjs.SplashMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashMenuCode.condition0IsTrue_0.val) {
gdjs.SplashMenuCode.GDLogoBitgeekObjects1.createFrom(runtimeScene.getObjects("LogoBitgeek"));
gdjs.SplashMenuCode.GDLogoSenacObjects1.createFrom(runtimeScene.getObjects("LogoSenac"));
gdjs.SplashMenuCode.GDtxtCriadoObjects1.createFrom(runtimeScene.getObjects("txtCriado"));
gdjs.SplashMenuCode.GDtxtOferecimentoObjects1.createFrom(runtimeScene.getObjects("txtOferecimento"));
gdjs.SplashMenuCode.GDtxtProxSplashObjects1.createFrom(runtimeScene.getObjects("txtProxSplash"));
{for(var i = 0, len = gdjs.SplashMenuCode.GDLogoSenacObjects1.length ;i < len;++i) {
    gdjs.SplashMenuCode.GDLogoSenacObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.SplashMenuCode.GDLogoBitgeekObjects1.length ;i < len;++i) {
    gdjs.SplashMenuCode.GDLogoBitgeekObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.SplashMenuCode.GDtxtCriadoObjects1.length ;i < len;++i) {
    gdjs.SplashMenuCode.GDtxtCriadoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.SplashMenuCode.GDtxtOferecimentoObjects1.length ;i < len;++i) {
    gdjs.SplashMenuCode.GDtxtOferecimentoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.SplashMenuCode.GDtxtProxSplashObjects1.length ;i < len;++i) {
    gdjs.SplashMenuCode.GDtxtProxSplashObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.SplashMenuCode.GDLogoSenacObjects1.createFrom(runtimeScene.getObjects("LogoSenac"));

gdjs.SplashMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashMenuCode.GDLogoSenacObjects1.length;i<l;++i) {
    if ( gdjs.SplashMenuCode.GDLogoSenacObjects1[i].getOpacity() < 255 ) {
        gdjs.SplashMenuCode.condition0IsTrue_0.val = true;
        gdjs.SplashMenuCode.GDLogoSenacObjects1[k] = gdjs.SplashMenuCode.GDLogoSenacObjects1[i];
        ++k;
    }
}
gdjs.SplashMenuCode.GDLogoSenacObjects1.length = k;}if (gdjs.SplashMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashMenuCode.GDLogoSenacObjects1 */
{for(var i = 0, len = gdjs.SplashMenuCode.GDLogoSenacObjects1.length ;i < len;++i) {
    gdjs.SplashMenuCode.GDLogoSenacObjects1[i].setOpacity(gdjs.SplashMenuCode.GDLogoSenacObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.SplashMenuCode.GDLogoBitgeekObjects1.createFrom(runtimeScene.getObjects("LogoBitgeek"));

gdjs.SplashMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashMenuCode.GDLogoBitgeekObjects1.length;i<l;++i) {
    if ( gdjs.SplashMenuCode.GDLogoBitgeekObjects1[i].getOpacity() < 255 ) {
        gdjs.SplashMenuCode.condition0IsTrue_0.val = true;
        gdjs.SplashMenuCode.GDLogoBitgeekObjects1[k] = gdjs.SplashMenuCode.GDLogoBitgeekObjects1[i];
        ++k;
    }
}
gdjs.SplashMenuCode.GDLogoBitgeekObjects1.length = k;}if (gdjs.SplashMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashMenuCode.GDLogoBitgeekObjects1 */
{for(var i = 0, len = gdjs.SplashMenuCode.GDLogoBitgeekObjects1.length ;i < len;++i) {
    gdjs.SplashMenuCode.GDLogoBitgeekObjects1[i].setOpacity(gdjs.SplashMenuCode.GDLogoBitgeekObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.SplashMenuCode.GDLogoBitgeekObjects1.createFrom(runtimeScene.getObjects("LogoBitgeek"));

gdjs.SplashMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashMenuCode.GDLogoBitgeekObjects1.length;i<l;++i) {
    if ( gdjs.SplashMenuCode.GDLogoBitgeekObjects1[i].getOpacity() >= 254 ) {
        gdjs.SplashMenuCode.condition0IsTrue_0.val = true;
        gdjs.SplashMenuCode.GDLogoBitgeekObjects1[k] = gdjs.SplashMenuCode.GDLogoBitgeekObjects1[i];
        ++k;
    }
}
gdjs.SplashMenuCode.GDLogoBitgeekObjects1.length = k;}if (gdjs.SplashMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SplashMenuCode.eventsList0x83400c(runtimeScene);} //End of subevents
}

}


{

gdjs.SplashMenuCode.GDtxtProxSplashObjects1.createFrom(runtimeScene.getObjects("txtProxSplash"));

gdjs.SplashMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashMenuCode.GDtxtProxSplashObjects1.length;i<l;++i) {
    if ( gdjs.SplashMenuCode.GDtxtProxSplashObjects1[i].getOpacity() < 255 ) {
        gdjs.SplashMenuCode.condition0IsTrue_0.val = true;
        gdjs.SplashMenuCode.GDtxtProxSplashObjects1[k] = gdjs.SplashMenuCode.GDtxtProxSplashObjects1[i];
        ++k;
    }
}
gdjs.SplashMenuCode.GDtxtProxSplashObjects1.length = k;}if (gdjs.SplashMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashMenuCode.GDtxtProxSplashObjects1 */
{for(var i = 0, len = gdjs.SplashMenuCode.GDtxtProxSplashObjects1.length ;i < len;++i) {
    gdjs.SplashMenuCode.GDtxtProxSplashObjects1[i].setOpacity(gdjs.SplashMenuCode.GDtxtProxSplashObjects1[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.SplashMenuCode.GDtxtOferecimentoObjects1.createFrom(runtimeScene.getObjects("txtOferecimento"));

gdjs.SplashMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashMenuCode.GDtxtOferecimentoObjects1.length;i<l;++i) {
    if ( gdjs.SplashMenuCode.GDtxtOferecimentoObjects1[i].getOpacity() < 255 ) {
        gdjs.SplashMenuCode.condition0IsTrue_0.val = true;
        gdjs.SplashMenuCode.GDtxtOferecimentoObjects1[k] = gdjs.SplashMenuCode.GDtxtOferecimentoObjects1[i];
        ++k;
    }
}
gdjs.SplashMenuCode.GDtxtOferecimentoObjects1.length = k;}if (gdjs.SplashMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashMenuCode.GDtxtOferecimentoObjects1 */
{for(var i = 0, len = gdjs.SplashMenuCode.GDtxtOferecimentoObjects1.length ;i < len;++i) {
    gdjs.SplashMenuCode.GDtxtOferecimentoObjects1[i].setOpacity(gdjs.SplashMenuCode.GDtxtOferecimentoObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.SplashMenuCode.GDtxtCriadoObjects1.createFrom(runtimeScene.getObjects("txtCriado"));

gdjs.SplashMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashMenuCode.GDtxtCriadoObjects1.length;i<l;++i) {
    if ( gdjs.SplashMenuCode.GDtxtCriadoObjects1[i].getOpacity() < 255 ) {
        gdjs.SplashMenuCode.condition0IsTrue_0.val = true;
        gdjs.SplashMenuCode.GDtxtCriadoObjects1[k] = gdjs.SplashMenuCode.GDtxtCriadoObjects1[i];
        ++k;
    }
}
gdjs.SplashMenuCode.GDtxtCriadoObjects1.length = k;}if (gdjs.SplashMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashMenuCode.GDtxtCriadoObjects1 */
{for(var i = 0, len = gdjs.SplashMenuCode.GDtxtCriadoObjects1.length ;i < len;++i) {
    gdjs.SplashMenuCode.GDtxtCriadoObjects1[i].setOpacity(gdjs.SplashMenuCode.GDtxtCriadoObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


}; //End of gdjs.SplashMenuCode.eventsList0xb43b0


gdjs.SplashMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashMenuCode.GDAmagObjects1.length = 0;
gdjs.SplashMenuCode.GDAmagObjects2.length = 0;
gdjs.SplashMenuCode.GDHUDCoinObjects1.length = 0;
gdjs.SplashMenuCode.GDHUDCoinObjects2.length = 0;
gdjs.SplashMenuCode.GDCoinObjects1.length = 0;
gdjs.SplashMenuCode.GDCoinObjects2.length = 0;
gdjs.SplashMenuCode.GDZombie3Objects1.length = 0;
gdjs.SplashMenuCode.GDZombie3Objects2.length = 0;
gdjs.SplashMenuCode.GDZombie2Objects1.length = 0;
gdjs.SplashMenuCode.GDZombie2Objects2.length = 0;
gdjs.SplashMenuCode.GDZombieObjects1.length = 0;
gdjs.SplashMenuCode.GDZombieObjects2.length = 0;
gdjs.SplashMenuCode.GDHitboxObjects1.length = 0;
gdjs.SplashMenuCode.GDHitboxObjects2.length = 0;
gdjs.SplashMenuCode.GDSuedObjects1.length = 0;
gdjs.SplashMenuCode.GDSuedObjects2.length = 0;
gdjs.SplashMenuCode.GDTeleportObjects1.length = 0;
gdjs.SplashMenuCode.GDTeleportObjects2.length = 0;
gdjs.SplashMenuCode.GDHUDVidaObjects1.length = 0;
gdjs.SplashMenuCode.GDHUDVidaObjects2.length = 0;
gdjs.SplashMenuCode.GDHUDBarraObjects1.length = 0;
gdjs.SplashMenuCode.GDHUDBarraObjects2.length = 0;
gdjs.SplashMenuCode.GDEsquerdaObjects1.length = 0;
gdjs.SplashMenuCode.GDEsquerdaObjects2.length = 0;
gdjs.SplashMenuCode.GDDireitaObjects1.length = 0;
gdjs.SplashMenuCode.GDDireitaObjects2.length = 0;
gdjs.SplashMenuCode.GDPlatafloorObjects1.length = 0;
gdjs.SplashMenuCode.GDPlatafloorObjects2.length = 0;
gdjs.SplashMenuCode.GDPlatafloorMoveObjects1.length = 0;
gdjs.SplashMenuCode.GDPlatafloorMoveObjects2.length = 0;
gdjs.SplashMenuCode.GDCoinHUD2Objects1.length = 0;
gdjs.SplashMenuCode.GDCoinHUD2Objects2.length = 0;
gdjs.SplashMenuCode.GDCoinHUDObjects1.length = 0;
gdjs.SplashMenuCode.GDCoinHUDObjects2.length = 0;
gdjs.SplashMenuCode.GDTilefinalObjects1.length = 0;
gdjs.SplashMenuCode.GDTilefinalObjects2.length = 0;
gdjs.SplashMenuCode.GDTilefinalinvObjects1.length = 0;
gdjs.SplashMenuCode.GDTilefinalinvObjects2.length = 0;
gdjs.SplashMenuCode.GDpedrabulletObjects1.length = 0;
gdjs.SplashMenuCode.GDpedrabulletObjects2.length = 0;
gdjs.SplashMenuCode.GDTimerObjects1.length = 0;
gdjs.SplashMenuCode.GDTimerObjects2.length = 0;
gdjs.SplashMenuCode.GDwinObjects1.length = 0;
gdjs.SplashMenuCode.GDwinObjects2.length = 0;
gdjs.SplashMenuCode.GDwin3Objects1.length = 0;
gdjs.SplashMenuCode.GDwin3Objects2.length = 0;
gdjs.SplashMenuCode.GDwin2Objects1.length = 0;
gdjs.SplashMenuCode.GDwin2Objects2.length = 0;
gdjs.SplashMenuCode.GDLogoBitgeekObjects1.length = 0;
gdjs.SplashMenuCode.GDLogoBitgeekObjects2.length = 0;
gdjs.SplashMenuCode.GDLogoSenacObjects1.length = 0;
gdjs.SplashMenuCode.GDLogoSenacObjects2.length = 0;
gdjs.SplashMenuCode.GDtxtCriadoObjects1.length = 0;
gdjs.SplashMenuCode.GDtxtCriadoObjects2.length = 0;
gdjs.SplashMenuCode.GDtxtOferecimentoObjects1.length = 0;
gdjs.SplashMenuCode.GDtxtOferecimentoObjects2.length = 0;
gdjs.SplashMenuCode.GDtxtProxSplashObjects1.length = 0;
gdjs.SplashMenuCode.GDtxtProxSplashObjects2.length = 0;

gdjs.SplashMenuCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['SplashMenuCode'] = gdjs.SplashMenuCode;
