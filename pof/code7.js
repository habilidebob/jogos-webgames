gdjs.FimCode = {};
gdjs.FimCode.GDPomboObjects1= [];
gdjs.FimCode.GDPomboObjects2= [];
gdjs.FimCode.GDPrincesaObjects1= [];
gdjs.FimCode.GDPrincesaObjects2= [];
gdjs.FimCode.GDPombohudObjects1= [];
gdjs.FimCode.GDPombohudObjects2= [];
gdjs.FimCode.GDTextoPombosObjects1= [];
gdjs.FimCode.GDTextoPombosObjects2= [];
gdjs.FimCode.GDCobraObjects1= [];
gdjs.FimCode.GDCobraObjects2= [];
gdjs.FimCode.GDLancheVidaObjects1= [];
gdjs.FimCode.GDLancheVidaObjects2= [];
gdjs.FimCode.GDZumbi1Objects1= [];
gdjs.FimCode.GDZumbi1Objects2= [];
gdjs.FimCode.GDVidaCObjects1= [];
gdjs.FimCode.GDVidaCObjects2= [];
gdjs.FimCode.GDPrincipeObjects1= [];
gdjs.FimCode.GDPrincipeObjects2= [];
gdjs.FimCode.GDChaoMorreObjects1= [];
gdjs.FimCode.GDChaoMorreObjects2= [];
gdjs.FimCode.GDNewObjectObjects1= [];
gdjs.FimCode.GDNewObjectObjects2= [];
gdjs.FimCode.GDchaumObjects1= [];
gdjs.FimCode.GDchaumObjects2= [];
gdjs.FimCode.GDNewObject3Objects1= [];
gdjs.FimCode.GDNewObject3Objects2= [];
gdjs.FimCode.GDNewObject2Objects1= [];
gdjs.FimCode.GDNewObject2Objects2= [];
gdjs.FimCode.GDNewObject4Objects1= [];
gdjs.FimCode.GDNewObject4Objects2= [];

gdjs.FimCode.conditionTrue_0 = {val:false};
gdjs.FimCode.condition0IsTrue_0 = {val:false};
gdjs.FimCode.condition1IsTrue_0 = {val:false};


gdjs.FimCode.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.FimCode.condition0IsTrue_0.val = false;
{
gdjs.FimCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FimCode.condition0IsTrue_0.val) {
gdjs.FimCode.GDPrincesaObjects1.createFrom(runtimeScene.getObjects("Princesa"));
gdjs.FimCode.GDPrincipeObjects1.createFrom(runtimeScene.getObjects("Principe"));
gdjs.FimCode.GDchaumObjects1.createFrom(runtimeScene.getObjects("chaum"));
{for(var i = 0, len = gdjs.FimCode.GDchaumObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDchaumObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Efeitos Sonoros\\A Praça é Nossa - Música Tema (8-bits remix).mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.FimCode.GDPrincesaObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDPrincesaObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.FimCode.GDPrincipeObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDPrincipeObjects1[i].setAnimationFrame(9);
}
}}

}


}; //End of gdjs.FimCode.eventsList0xb43b0


gdjs.FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FimCode.GDPomboObjects1.length = 0;
gdjs.FimCode.GDPomboObjects2.length = 0;
gdjs.FimCode.GDPrincesaObjects1.length = 0;
gdjs.FimCode.GDPrincesaObjects2.length = 0;
gdjs.FimCode.GDPombohudObjects1.length = 0;
gdjs.FimCode.GDPombohudObjects2.length = 0;
gdjs.FimCode.GDTextoPombosObjects1.length = 0;
gdjs.FimCode.GDTextoPombosObjects2.length = 0;
gdjs.FimCode.GDCobraObjects1.length = 0;
gdjs.FimCode.GDCobraObjects2.length = 0;
gdjs.FimCode.GDLancheVidaObjects1.length = 0;
gdjs.FimCode.GDLancheVidaObjects2.length = 0;
gdjs.FimCode.GDZumbi1Objects1.length = 0;
gdjs.FimCode.GDZumbi1Objects2.length = 0;
gdjs.FimCode.GDVidaCObjects1.length = 0;
gdjs.FimCode.GDVidaCObjects2.length = 0;
gdjs.FimCode.GDPrincipeObjects1.length = 0;
gdjs.FimCode.GDPrincipeObjects2.length = 0;
gdjs.FimCode.GDChaoMorreObjects1.length = 0;
gdjs.FimCode.GDChaoMorreObjects2.length = 0;
gdjs.FimCode.GDNewObjectObjects1.length = 0;
gdjs.FimCode.GDNewObjectObjects2.length = 0;
gdjs.FimCode.GDchaumObjects1.length = 0;
gdjs.FimCode.GDchaumObjects2.length = 0;
gdjs.FimCode.GDNewObject3Objects1.length = 0;
gdjs.FimCode.GDNewObject3Objects2.length = 0;
gdjs.FimCode.GDNewObject2Objects1.length = 0;
gdjs.FimCode.GDNewObject2Objects2.length = 0;
gdjs.FimCode.GDNewObject4Objects1.length = 0;
gdjs.FimCode.GDNewObject4Objects2.length = 0;

gdjs.FimCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['FimCode'] = gdjs.FimCode;
