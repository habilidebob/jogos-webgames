gdjs.PauseFase2Code = {};
gdjs.PauseFase2Code.GDPauseFase2Objects1_1final = [];

gdjs.PauseFase2Code.GDPauseFase2Objects1= [];
gdjs.PauseFase2Code.GDPauseFase2Objects2= [];
gdjs.PauseFase2Code.GDPauseFase2Objects3= [];

gdjs.PauseFase2Code.conditionTrue_0 = {val:false};
gdjs.PauseFase2Code.condition0IsTrue_0 = {val:false};
gdjs.PauseFase2Code.condition1IsTrue_0 = {val:false};
gdjs.PauseFase2Code.conditionTrue_1 = {val:false};
gdjs.PauseFase2Code.condition0IsTrue_1 = {val:false};
gdjs.PauseFase2Code.condition1IsTrue_1 = {val:false};


gdjs.PauseFase2Code.mapOfGDgdjs_46PauseFase2Code_46GDPauseFase2Objects2Objects = Hashtable.newFrom({"PauseFase2": gdjs.PauseFase2Code.GDPauseFase2Objects2});gdjs.PauseFase2Code.eventsList0x8f9f24 = function(runtimeScene) {

{


{
}

}


{


{
}

}


}; //End of gdjs.PauseFase2Code.eventsList0x8f9f24
gdjs.PauseFase2Code.eventsList0x898274 = function(runtimeScene) {

{


gdjs.PauseFase2Code.condition0IsTrue_0.val = false;
{
gdjs.PauseFase2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseFase2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Trilha_Sonora.2.mp3", false, 100, 1);
}
{ //Subevents
gdjs.PauseFase2Code.eventsList0x8f9f24(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.PauseFase2Code.eventsList0x898274
gdjs.PauseFase2Code.eventsList0xb43b0 = function(runtimeScene) {

{

gdjs.PauseFase2Code.GDPauseFase2Objects1.length = 0;


gdjs.PauseFase2Code.condition0IsTrue_0.val = false;
{
{gdjs.PauseFase2Code.conditionTrue_1 = gdjs.PauseFase2Code.condition0IsTrue_0;
gdjs.PauseFase2Code.GDPauseFase2Objects1_1final.length = 0;gdjs.PauseFase2Code.condition0IsTrue_1.val = false;
{
gdjs.PauseFase2Code.GDPauseFase2Objects2.createFrom(runtimeScene.getObjects("PauseFase2"));
gdjs.PauseFase2Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseFase2Code.mapOfGDgdjs_46PauseFase2Code_46GDPauseFase2Objects2Objects, runtimeScene, true, false);
if( gdjs.PauseFase2Code.condition0IsTrue_1.val ) {
    gdjs.PauseFase2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PauseFase2Code.GDPauseFase2Objects2.length;j<jLen;++j) {
        if ( gdjs.PauseFase2Code.GDPauseFase2Objects1_1final.indexOf(gdjs.PauseFase2Code.GDPauseFase2Objects2[j]) === -1 )
            gdjs.PauseFase2Code.GDPauseFase2Objects1_1final.push(gdjs.PauseFase2Code.GDPauseFase2Objects2[j]);
    }
}
}
{
gdjs.PauseFase2Code.GDPauseFase2Objects1.createFrom(gdjs.PauseFase2Code.GDPauseFase2Objects1_1final);
}
}
}if (gdjs.PauseFase2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PauseFase2Code.eventsList0x898274(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.PauseFase2Code.eventsList0xb43b0


gdjs.PauseFase2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseFase2Code.GDPauseFase2Objects1.length = 0;
gdjs.PauseFase2Code.GDPauseFase2Objects2.length = 0;
gdjs.PauseFase2Code.GDPauseFase2Objects3.length = 0;

gdjs.PauseFase2Code.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['PauseFase2Code'] = gdjs.PauseFase2Code;
