gdjs.Cutcene01Code = {};
gdjs.Cutcene01Code.GDcut01Objects1= [];
gdjs.Cutcene01Code.GDcut01Objects2= [];
gdjs.Cutcene01Code.GDcut01Objects3= [];
gdjs.Cutcene01Code.GDBtnNextObjects1= [];
gdjs.Cutcene01Code.GDBtnNextObjects2= [];
gdjs.Cutcene01Code.GDBtnNextObjects3= [];
gdjs.Cutcene01Code.GDback_95cutceneObjects1= [];
gdjs.Cutcene01Code.GDback_95cutceneObjects2= [];
gdjs.Cutcene01Code.GDback_95cutceneObjects3= [];

gdjs.Cutcene01Code.conditionTrue_0 = {val:false};
gdjs.Cutcene01Code.condition0IsTrue_0 = {val:false};
gdjs.Cutcene01Code.condition1IsTrue_0 = {val:false};
gdjs.Cutcene01Code.condition2IsTrue_0 = {val:false};
gdjs.Cutcene01Code.conditionTrue_1 = {val:false};
gdjs.Cutcene01Code.condition0IsTrue_1 = {val:false};
gdjs.Cutcene01Code.condition1IsTrue_1 = {val:false};
gdjs.Cutcene01Code.condition2IsTrue_1 = {val:false};


gdjs.Cutcene01Code.eventsList0x899d3c = function(runtimeScene) {

{


gdjs.Cutcene01Code.condition0IsTrue_0.val = false;
{
gdjs.Cutcene01Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), "tempo");
}if (gdjs.Cutcene01Code.condition0IsTrue_0.val) {
gdjs.Cutcene01Code.GDcut01Objects2.createFrom(gdjs.Cutcene01Code.GDcut01Objects1);

{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects2.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects2.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects2[i].returnVariable(gdjs.Cutcene01Code.GDcut01Objects2[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tempo");
}}

}


{



}


}; //End of gdjs.Cutcene01Code.eventsList0x899d3c
gdjs.Cutcene01Code.mapOfGDgdjs_46Cutcene01Code_46GDBtnNextObjects1Objects = Hashtable.newFrom({"BtnNext": gdjs.Cutcene01Code.GDBtnNextObjects1});gdjs.Cutcene01Code.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.Cutcene01Code.condition0IsTrue_0.val = false;
{
gdjs.Cutcene01Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Cutcene01Code.condition0IsTrue_0.val) {
gdjs.Cutcene01Code.GDcut01Objects1.createFrom(runtimeScene.getObjects("cut01"));
{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].returnVariable(gdjs.Cutcene01Code.GDcut01Objects1[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "musicas\\cutcene.mp3", true, 70, 1);
}}

}


{



}


{

gdjs.Cutcene01Code.GDcut01Objects1.createFrom(runtimeScene.getObjects("cut01"));

gdjs.Cutcene01Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Cutcene01Code.GDcut01Objects1.length;i<l;++i) {
    if ( gdjs.Cutcene01Code.GDcut01Objects1[i].getOpacity() <= 255 ) {
        gdjs.Cutcene01Code.condition0IsTrue_0.val = true;
        gdjs.Cutcene01Code.GDcut01Objects1[k] = gdjs.Cutcene01Code.GDcut01Objects1[i];
        ++k;
    }
}
gdjs.Cutcene01Code.GDcut01Objects1.length = k;}if (gdjs.Cutcene01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Cutcene01Code.GDcut01Objects1 */
{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].setOpacity(gdjs.Cutcene01Code.GDcut01Objects1[i].getOpacity() + (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.Cutcene01Code.GDcut01Objects1.createFrom(runtimeScene.getObjects("cut01"));

gdjs.Cutcene01Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Cutcene01Code.GDcut01Objects1.length;i<l;++i) {
    if ( gdjs.Cutcene01Code.GDcut01Objects1[i].getOpacity() >= 255 ) {
        gdjs.Cutcene01Code.condition0IsTrue_0.val = true;
        gdjs.Cutcene01Code.GDcut01Objects1[k] = gdjs.Cutcene01Code.GDcut01Objects1[i];
        ++k;
    }
}
gdjs.Cutcene01Code.GDcut01Objects1.length = k;}if (gdjs.Cutcene01Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Cutcene01Code.eventsList0x899d3c(runtimeScene);} //End of subevents
}

}


{

gdjs.Cutcene01Code.GDcut01Objects1.createFrom(runtimeScene.getObjects("cut01"));

gdjs.Cutcene01Code.condition0IsTrue_0.val = false;
gdjs.Cutcene01Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Cutcene01Code.GDcut01Objects1.length;i<l;++i) {
    if ( gdjs.Cutcene01Code.GDcut01Objects1[i].getVariableNumber(gdjs.Cutcene01Code.GDcut01Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Cutcene01Code.condition0IsTrue_0.val = true;
        gdjs.Cutcene01Code.GDcut01Objects1[k] = gdjs.Cutcene01Code.GDcut01Objects1[i];
        ++k;
    }
}
gdjs.Cutcene01Code.GDcut01Objects1.length = k;}if ( gdjs.Cutcene01Code.condition0IsTrue_0.val ) {
{
{gdjs.Cutcene01Code.conditionTrue_1 = gdjs.Cutcene01Code.condition1IsTrue_0;
gdjs.Cutcene01Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9020292);
}
}}
if (gdjs.Cutcene01Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Cutcene01Code.GDcut01Objects1 */
{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].setString("Em 1868 foi inaugurado o Bosque da Princesa.\nInicialmente criado para receber a família real com o passar do tempo o local se tornou ponto de encontro de casais apaixonados.");
}
}}

}


{

gdjs.Cutcene01Code.GDcut01Objects1.createFrom(runtimeScene.getObjects("cut01"));

gdjs.Cutcene01Code.condition0IsTrue_0.val = false;
gdjs.Cutcene01Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Cutcene01Code.GDcut01Objects1.length;i<l;++i) {
    if ( gdjs.Cutcene01Code.GDcut01Objects1[i].getVariableNumber(gdjs.Cutcene01Code.GDcut01Objects1[i].getVariables().getFromIndex(0)) == 2 ) {
        gdjs.Cutcene01Code.condition0IsTrue_0.val = true;
        gdjs.Cutcene01Code.GDcut01Objects1[k] = gdjs.Cutcene01Code.GDcut01Objects1[i];
        ++k;
    }
}
gdjs.Cutcene01Code.GDcut01Objects1.length = k;}if ( gdjs.Cutcene01Code.condition0IsTrue_0.val ) {
{
{gdjs.Cutcene01Code.conditionTrue_1 = gdjs.Cutcene01Code.condition1IsTrue_0;
gdjs.Cutcene01Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9021140);
}
}}
if (gdjs.Cutcene01Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Cutcene01Code.GDcut01Objects1 */
{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].setString("Todas as noites a princesa Isabel se encontrava com seu amado no bosque, era um amor proibido pois ela era prometida a um temível Lorde alquimista.\n");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(7);
}}

}


{

gdjs.Cutcene01Code.GDcut01Objects1.createFrom(runtimeScene.getObjects("cut01"));

gdjs.Cutcene01Code.condition0IsTrue_0.val = false;
gdjs.Cutcene01Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Cutcene01Code.GDcut01Objects1.length;i<l;++i) {
    if ( gdjs.Cutcene01Code.GDcut01Objects1[i].getVariableNumber(gdjs.Cutcene01Code.GDcut01Objects1[i].getVariables().getFromIndex(0)) == 3 ) {
        gdjs.Cutcene01Code.condition0IsTrue_0.val = true;
        gdjs.Cutcene01Code.GDcut01Objects1[k] = gdjs.Cutcene01Code.GDcut01Objects1[i];
        ++k;
    }
}
gdjs.Cutcene01Code.GDcut01Objects1.length = k;}if ( gdjs.Cutcene01Code.condition0IsTrue_0.val ) {
{
{gdjs.Cutcene01Code.conditionTrue_1 = gdjs.Cutcene01Code.condition1IsTrue_0;
gdjs.Cutcene01Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9022204);
}
}}
if (gdjs.Cutcene01Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Cutcene01Code.GDcut01Objects1 */
{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].setString("Uma certa noite o alquimista descobriu sobre o romance; consumido pelo ciúmes, transformou o homem em lata e a princesa em uma estátua de pedra.");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(7);
}}

}


{

gdjs.Cutcene01Code.GDcut01Objects1.createFrom(runtimeScene.getObjects("cut01"));

gdjs.Cutcene01Code.condition0IsTrue_0.val = false;
gdjs.Cutcene01Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Cutcene01Code.GDcut01Objects1.length;i<l;++i) {
    if ( gdjs.Cutcene01Code.GDcut01Objects1[i].getVariableNumber(gdjs.Cutcene01Code.GDcut01Objects1[i].getVariables().getFromIndex(0)) == 4 ) {
        gdjs.Cutcene01Code.condition0IsTrue_0.val = true;
        gdjs.Cutcene01Code.GDcut01Objects1[k] = gdjs.Cutcene01Code.GDcut01Objects1[i];
        ++k;
    }
}
gdjs.Cutcene01Code.GDcut01Objects1.length = k;}if ( gdjs.Cutcene01Code.condition0IsTrue_0.val ) {
{
{gdjs.Cutcene01Code.conditionTrue_1 = gdjs.Cutcene01Code.condition1IsTrue_0;
gdjs.Cutcene01Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9023308);
}
}}
if (gdjs.Cutcene01Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Cutcene01Code.GDcut01Objects1 */
{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].setString("O alquimista não sabia mas o bosque era mágico e todas as noites a princesa voltava a vida e sonhava com o dia que iria se reencontrar com seu amado.");
}
}{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].setTextAlignment("center");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(7);
}}

}


{

gdjs.Cutcene01Code.GDcut01Objects1.createFrom(runtimeScene.getObjects("cut01"));

gdjs.Cutcene01Code.condition0IsTrue_0.val = false;
gdjs.Cutcene01Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Cutcene01Code.GDcut01Objects1.length;i<l;++i) {
    if ( gdjs.Cutcene01Code.GDcut01Objects1[i].getVariableNumber(gdjs.Cutcene01Code.GDcut01Objects1[i].getVariables().getFromIndex(0)) == 5 ) {
        gdjs.Cutcene01Code.condition0IsTrue_0.val = true;
        gdjs.Cutcene01Code.GDcut01Objects1[k] = gdjs.Cutcene01Code.GDcut01Objects1[i];
        ++k;
    }
}
gdjs.Cutcene01Code.GDcut01Objects1.length = k;}if ( gdjs.Cutcene01Code.condition0IsTrue_0.val ) {
{
{gdjs.Cutcene01Code.conditionTrue_1 = gdjs.Cutcene01Code.condition1IsTrue_0;
gdjs.Cutcene01Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9024412);
}
}}
if (gdjs.Cutcene01Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Cutcene01Code.GDcut01Objects1 */
{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].setString("Anos depois, um pombo banhado pela lágrima da princesa pousa no homem de lata e o trás de volta a vida com a esperança de salvar a princesa da maldição. Em sua difícil missão ele terá que atravessar a cidade combatendo ordas de inimigos para chegar ao bosque e derrotar o alquimista.");
}
}{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].setTextAlignment("center");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(13);
}}

}


{

gdjs.Cutcene01Code.GDcut01Objects1.createFrom(runtimeScene.getObjects("cut01"));

gdjs.Cutcene01Code.condition0IsTrue_0.val = false;
gdjs.Cutcene01Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Cutcene01Code.GDcut01Objects1.length;i<l;++i) {
    if ( gdjs.Cutcene01Code.GDcut01Objects1[i].getVariableNumber(gdjs.Cutcene01Code.GDcut01Objects1[i].getVariables().getFromIndex(0)) == 6 ) {
        gdjs.Cutcene01Code.condition0IsTrue_0.val = true;
        gdjs.Cutcene01Code.GDcut01Objects1[k] = gdjs.Cutcene01Code.GDcut01Objects1[i];
        ++k;
    }
}
gdjs.Cutcene01Code.GDcut01Objects1.length = k;}if ( gdjs.Cutcene01Code.condition0IsTrue_0.val ) {
{
{gdjs.Cutcene01Code.conditionTrue_1 = gdjs.Cutcene01Code.condition1IsTrue_0;
gdjs.Cutcene01Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9025420);
}
}}
if (gdjs.Cutcene01Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase01", false);
}}

}


{



}


{

gdjs.Cutcene01Code.GDBtnNextObjects1.createFrom(runtimeScene.getObjects("BtnNext"));

gdjs.Cutcene01Code.condition0IsTrue_0.val = false;
gdjs.Cutcene01Code.condition1IsTrue_0.val = false;
{
gdjs.Cutcene01Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Cutcene01Code.mapOfGDgdjs_46Cutcene01Code_46GDBtnNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Cutcene01Code.condition0IsTrue_0.val ) {
{
gdjs.Cutcene01Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Cutcene01Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Cutcene01Code.GDBtnNextObjects1 */
gdjs.Cutcene01Code.GDcut01Objects1.createFrom(runtimeScene.getObjects("cut01"));
{for(var i = 0, len = gdjs.Cutcene01Code.GDcut01Objects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDcut01Objects1[i].returnVariable(gdjs.Cutcene01Code.GDcut01Objects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Cutcene01Code.GDBtnNextObjects1.length ;i < len;++i) {
    gdjs.Cutcene01Code.GDBtnNextObjects1[i].setTextAlignment("center");
}
}}

}


{


{
}

}


}; //End of gdjs.Cutcene01Code.eventsList0xb43b0


gdjs.Cutcene01Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cutcene01Code.GDcut01Objects1.length = 0;
gdjs.Cutcene01Code.GDcut01Objects2.length = 0;
gdjs.Cutcene01Code.GDcut01Objects3.length = 0;
gdjs.Cutcene01Code.GDBtnNextObjects1.length = 0;
gdjs.Cutcene01Code.GDBtnNextObjects2.length = 0;
gdjs.Cutcene01Code.GDBtnNextObjects3.length = 0;
gdjs.Cutcene01Code.GDback_95cutceneObjects1.length = 0;
gdjs.Cutcene01Code.GDback_95cutceneObjects2.length = 0;
gdjs.Cutcene01Code.GDback_95cutceneObjects3.length = 0;

gdjs.Cutcene01Code.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['Cutcene01Code'] = gdjs.Cutcene01Code;
