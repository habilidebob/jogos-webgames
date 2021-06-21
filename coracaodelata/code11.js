gdjs.PauseFase03Code = {};
gdjs.PauseFase03Code.GDPauseFase03Objects1_1final = [];

gdjs.PauseFase03Code.GDPauseFase03Objects1= [];
gdjs.PauseFase03Code.GDPauseFase03Objects2= [];
gdjs.PauseFase03Code.GDPauseFase03Objects3= [];

gdjs.PauseFase03Code.conditionTrue_0 = {val:false};
gdjs.PauseFase03Code.condition0IsTrue_0 = {val:false};
gdjs.PauseFase03Code.condition1IsTrue_0 = {val:false};
gdjs.PauseFase03Code.conditionTrue_1 = {val:false};
gdjs.PauseFase03Code.condition0IsTrue_1 = {val:false};
gdjs.PauseFase03Code.condition1IsTrue_1 = {val:false};


gdjs.PauseFase03Code.mapOfGDgdjs_46PauseFase03Code_46GDPauseFase03Objects2Objects = Hashtable.newFrom({"PauseFase03": gdjs.PauseFase03Code.GDPauseFase03Objects2});gdjs.PauseFase03Code.eventsList0x8f9e14 = function(runtimeScene) {

{


{
}

}


{


{
}

}


}; //End of gdjs.PauseFase03Code.eventsList0x8f9e14
gdjs.PauseFase03Code.eventsList0x898274 = function(runtimeScene) {

{


gdjs.PauseFase03Code.condition0IsTrue_0.val = false;
{
gdjs.PauseFase03Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseFase03Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Lost Woods 8-Bit Remix _ by Yuccatosis (FDS).mp3", true, 100, 1);
}
{ //Subevents
gdjs.PauseFase03Code.eventsList0x8f9e14(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.PauseFase03Code.eventsList0x898274
gdjs.PauseFase03Code.eventsList0xb43b0 = function(runtimeScene) {

{

gdjs.PauseFase03Code.GDPauseFase03Objects1.length = 0;


gdjs.PauseFase03Code.condition0IsTrue_0.val = false;
{
{gdjs.PauseFase03Code.conditionTrue_1 = gdjs.PauseFase03Code.condition0IsTrue_0;
gdjs.PauseFase03Code.GDPauseFase03Objects1_1final.length = 0;gdjs.PauseFase03Code.condition0IsTrue_1.val = false;
{
gdjs.PauseFase03Code.GDPauseFase03Objects2.createFrom(runtimeScene.getObjects("PauseFase03"));
gdjs.PauseFase03Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseFase03Code.mapOfGDgdjs_46PauseFase03Code_46GDPauseFase03Objects2Objects, runtimeScene, true, false);
if( gdjs.PauseFase03Code.condition0IsTrue_1.val ) {
    gdjs.PauseFase03Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PauseFase03Code.GDPauseFase03Objects2.length;j<jLen;++j) {
        if ( gdjs.PauseFase03Code.GDPauseFase03Objects1_1final.indexOf(gdjs.PauseFase03Code.GDPauseFase03Objects2[j]) === -1 )
            gdjs.PauseFase03Code.GDPauseFase03Objects1_1final.push(gdjs.PauseFase03Code.GDPauseFase03Objects2[j]);
    }
}
}
{
gdjs.PauseFase03Code.GDPauseFase03Objects1.createFrom(gdjs.PauseFase03Code.GDPauseFase03Objects1_1final);
}
}
}if (gdjs.PauseFase03Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PauseFase03Code.eventsList0x898274(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.PauseFase03Code.eventsList0xb43b0


gdjs.PauseFase03Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseFase03Code.GDPauseFase03Objects1.length = 0;
gdjs.PauseFase03Code.GDPauseFase03Objects2.length = 0;
gdjs.PauseFase03Code.GDPauseFase03Objects3.length = 0;

gdjs.PauseFase03Code.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['PauseFase03Code'] = gdjs.PauseFase03Code;
