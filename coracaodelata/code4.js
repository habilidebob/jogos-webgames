gdjs.PauseFase01Code = {};
gdjs.PauseFase01Code.GDPauseFase01Objects1_1final = [];

gdjs.PauseFase01Code.GDPauseFase01Objects1= [];
gdjs.PauseFase01Code.GDPauseFase01Objects2= [];
gdjs.PauseFase01Code.GDPauseFase01Objects3= [];

gdjs.PauseFase01Code.conditionTrue_0 = {val:false};
gdjs.PauseFase01Code.condition0IsTrue_0 = {val:false};
gdjs.PauseFase01Code.condition1IsTrue_0 = {val:false};
gdjs.PauseFase01Code.conditionTrue_1 = {val:false};
gdjs.PauseFase01Code.condition0IsTrue_1 = {val:false};
gdjs.PauseFase01Code.condition1IsTrue_1 = {val:false};


gdjs.PauseFase01Code.mapOfGDgdjs_46PauseFase01Code_46GDPauseFase01Objects2Objects = Hashtable.newFrom({"PauseFase01": gdjs.PauseFase01Code.GDPauseFase01Objects2});gdjs.PauseFase01Code.eventsList0x8c8a94 = function(runtimeScene) {

{


{
}

}


{


{
}

}


}; //End of gdjs.PauseFase01Code.eventsList0x8c8a94
gdjs.PauseFase01Code.eventsList0x898274 = function(runtimeScene) {

{


gdjs.PauseFase01Code.condition0IsTrue_0.val = false;
{
gdjs.PauseFase01Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseFase01Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "musicas\\Castlevania 2 Simons Quest - Bloody Tears (Street - Day time BGM).mp3", true, 80, 1);
}
{ //Subevents
gdjs.PauseFase01Code.eventsList0x8c8a94(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.PauseFase01Code.eventsList0x898274
gdjs.PauseFase01Code.eventsList0xb43b0 = function(runtimeScene) {

{

gdjs.PauseFase01Code.GDPauseFase01Objects1.length = 0;


gdjs.PauseFase01Code.condition0IsTrue_0.val = false;
{
{gdjs.PauseFase01Code.conditionTrue_1 = gdjs.PauseFase01Code.condition0IsTrue_0;
gdjs.PauseFase01Code.GDPauseFase01Objects1_1final.length = 0;gdjs.PauseFase01Code.condition0IsTrue_1.val = false;
{
gdjs.PauseFase01Code.GDPauseFase01Objects2.createFrom(runtimeScene.getObjects("PauseFase01"));
gdjs.PauseFase01Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseFase01Code.mapOfGDgdjs_46PauseFase01Code_46GDPauseFase01Objects2Objects, runtimeScene, true, false);
if( gdjs.PauseFase01Code.condition0IsTrue_1.val ) {
    gdjs.PauseFase01Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PauseFase01Code.GDPauseFase01Objects2.length;j<jLen;++j) {
        if ( gdjs.PauseFase01Code.GDPauseFase01Objects1_1final.indexOf(gdjs.PauseFase01Code.GDPauseFase01Objects2[j]) === -1 )
            gdjs.PauseFase01Code.GDPauseFase01Objects1_1final.push(gdjs.PauseFase01Code.GDPauseFase01Objects2[j]);
    }
}
}
{
gdjs.PauseFase01Code.GDPauseFase01Objects1.createFrom(gdjs.PauseFase01Code.GDPauseFase01Objects1_1final);
}
}
}if (gdjs.PauseFase01Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PauseFase01Code.eventsList0x898274(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.PauseFase01Code.eventsList0xb43b0


gdjs.PauseFase01Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseFase01Code.GDPauseFase01Objects1.length = 0;
gdjs.PauseFase01Code.GDPauseFase01Objects2.length = 0;
gdjs.PauseFase01Code.GDPauseFase01Objects3.length = 0;

gdjs.PauseFase01Code.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['PauseFase01Code'] = gdjs.PauseFase01Code;
