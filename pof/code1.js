gdjs.MenuCode = {};
gdjs.MenuCode.GDPomboObjects1= [];
gdjs.MenuCode.GDPomboObjects2= [];
gdjs.MenuCode.GDPrincesaObjects1= [];
gdjs.MenuCode.GDPrincesaObjects2= [];
gdjs.MenuCode.GDPombohudObjects1= [];
gdjs.MenuCode.GDPombohudObjects2= [];
gdjs.MenuCode.GDTextoPombosObjects1= [];
gdjs.MenuCode.GDTextoPombosObjects2= [];
gdjs.MenuCode.GDCobraObjects1= [];
gdjs.MenuCode.GDCobraObjects2= [];
gdjs.MenuCode.GDLancheVidaObjects1= [];
gdjs.MenuCode.GDLancheVidaObjects2= [];
gdjs.MenuCode.GDZumbi1Objects1= [];
gdjs.MenuCode.GDZumbi1Objects2= [];
gdjs.MenuCode.GDVidaCObjects1= [];
gdjs.MenuCode.GDVidaCObjects2= [];
gdjs.MenuCode.GDPrincipeObjects1= [];
gdjs.MenuCode.GDPrincipeObjects2= [];
gdjs.MenuCode.GDChaoMorreObjects1= [];
gdjs.MenuCode.GDChaoMorreObjects2= [];
gdjs.MenuCode.GDLOGOObjects1= [];
gdjs.MenuCode.GDLOGOObjects2= [];
gdjs.MenuCode.GDBotaoObjects1= [];
gdjs.MenuCode.GDBotaoObjects2= [];
gdjs.MenuCode.GDSomObjects1= [];
gdjs.MenuCode.GDSomObjects2= [];
gdjs.MenuCode.GDRecordObjects1= [];
gdjs.MenuCode.GDRecordObjects2= [];
gdjs.MenuCode.GDSemSomObjects1= [];
gdjs.MenuCode.GDSemSomObjects2= [];
gdjs.MenuCode.GDFundoObjects1= [];
gdjs.MenuCode.GDFundoObjects2= [];
gdjs.MenuCode.GDIniciarObjects1= [];
gdjs.MenuCode.GDIniciarObjects2= [];
gdjs.MenuCode.GDOpcoesObjects1= [];
gdjs.MenuCode.GDOpcoesObjects2= [];
gdjs.MenuCode.GDRESTARTObjects1= [];
gdjs.MenuCode.GDRESTARTObjects2= [];
gdjs.MenuCode.GDSAIRObjects1= [];
gdjs.MenuCode.GDSAIRObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBotaoObjects1Objects = Hashtable.newFrom({"Botao": gdjs.MenuCode.GDBotaoObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBotaoObjects1Objects = Hashtable.newFrom({"Botao": gdjs.MenuCode.GDBotaoObjects1});gdjs.MenuCode.eventsList0x95eb6c = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Efeitos Sonoros\\Jason_Stephanie_s_8-Bit_Wedding-TS7xKnnePjc.mp3", true, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


}; //End of gdjs.MenuCode.eventsList0x95eb6c
gdjs.MenuCode.eventsList0x753c3c = function(runtimeScene) {

{

gdjs.MenuCode.GDBotaoObjects1.createFrom(runtimeScene.getObjects("Botao"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBotaoObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBotaoObjects1[i].timerElapsedTime("fade", 1) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBotaoObjects1[k] = gdjs.MenuCode.GDBotaoObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBotaoObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "botoes");
}}

}


}; //End of gdjs.MenuCode.eventsList0x753c3c
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSomObjects1Objects = Hashtable.newFrom({"Som": gdjs.MenuCode.GDSomObjects1});gdjs.MenuCode.eventsList0x75412c = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


}; //End of gdjs.MenuCode.eventsList0x75412c
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSomObjects1Objects = Hashtable.newFrom({"Som": gdjs.MenuCode.GDSomObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRecordObjects1Objects = Hashtable.newFrom({"Record": gdjs.MenuCode.GDRecordObjects1});gdjs.MenuCode.eventsList0x7a74f4 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Record", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0x7a74f4
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRecordObjects1Objects = Hashtable.newFrom({"Record": gdjs.MenuCode.GDRecordObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSemSomObjects1Objects = Hashtable.newFrom({"SemSom": gdjs.MenuCode.GDSemSomObjects1});gdjs.MenuCode.eventsList0x79bcf4 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7978964);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


}; //End of gdjs.MenuCode.eventsList0x79bcf4
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSemSomObjects1Objects = Hashtable.newFrom({"SemSom": gdjs.MenuCode.GDSemSomObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDIniciarObjects1Objects = Hashtable.newFrom({"Iniciar": gdjs.MenuCode.GDIniciarObjects1});gdjs.MenuCode.eventsList0x937a44 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Introdução", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0x937a44
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDIniciarObjects1Objects = Hashtable.newFrom({"Iniciar": gdjs.MenuCode.GDIniciarObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOpcoesObjects1Objects = Hashtable.newFrom({"Opcoes": gdjs.MenuCode.GDOpcoesObjects1});gdjs.MenuCode.eventsList0x8b25e4 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Opções", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0x8b25e4
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOpcoesObjects1Objects = Hashtable.newFrom({"Opcoes": gdjs.MenuCode.GDOpcoesObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRESTARTObjects1Objects = Hashtable.newFrom({"RESTART": gdjs.MenuCode.GDRESTARTObjects1});gdjs.MenuCode.eventsList0x760cbc = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Abertura", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0x760cbc
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRESTARTObjects1Objects = Hashtable.newFrom({"RESTART": gdjs.MenuCode.GDRESTARTObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSAIRObjects1Objects = Hashtable.newFrom({"SAIR": gdjs.MenuCode.GDSAIRObjects1});gdjs.MenuCode.eventsList0x761384 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.MenuCode.eventsList0x761384
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSAIRObjects1Objects = Hashtable.newFrom({"SAIR": gdjs.MenuCode.GDSAIRObjects1});gdjs.MenuCode.eventsList0xb43b0 = function(runtimeScene) {

{



}


{

gdjs.MenuCode.GDBotaoObjects1.createFrom(runtimeScene.getObjects("Botao"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBotaoObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBotaoObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBotaoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBotaoObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.MenuCode.GDBotaoObjects1.createFrom(runtimeScene.getObjects("Botao"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBotaoObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDBotaoObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBotaoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBotaoObjects1[i].setAnimation(0);
}
}}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x95eb6c(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDLOGOObjects1.createFrom(runtimeScene.getObjects("LOGO"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDLOGOObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLOGOObjects1[i].getVariableNumber(gdjs.MenuCode.GDLOGOObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDLOGOObjects1[k] = gdjs.MenuCode.GDLOGOObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDLOGOObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDLOGOObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDLOGOObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLOGOObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "botoes");
}}

}


{

gdjs.MenuCode.GDLOGOObjects1.createFrom(runtimeScene.getObjects("LOGO"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDLOGOObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLOGOObjects1[i].getX() <= -(160) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDLOGOObjects1[k] = gdjs.MenuCode.GDLOGOObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDLOGOObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDLOGOObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDLOGOObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLOGOObjects1[i].returnVariable(gdjs.MenuCode.GDLOGOObjects1[i].getVariables().getFromIndex(0)).setNumber(-(1));
}
}}

}


{

gdjs.MenuCode.GDLOGOObjects1.createFrom(runtimeScene.getObjects("LOGO"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDLOGOObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLOGOObjects1[i].getX() <= -(160) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDLOGOObjects1[k] = gdjs.MenuCode.GDLOGOObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDLOGOObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x753c3c(runtimeScene);} //End of subevents
}

}


{


{
}

}


{



}


{

gdjs.MenuCode.GDSomObjects1.createFrom(runtimeScene.getObjects("Som"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSomObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDSomObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSomObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSomObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x75412c(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDSomObjects1.createFrom(runtimeScene.getObjects("Som"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSomObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDSomObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSomObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSomObjects1[i].setAnimation(0);
}
}}

}


{



}


{

gdjs.MenuCode.GDRecordObjects1.createFrom(runtimeScene.getObjects("Record"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRecordObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDRecordObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDRecordObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRecordObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x7a74f4(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDRecordObjects1.createFrom(runtimeScene.getObjects("Record"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRecordObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDRecordObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDRecordObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRecordObjects1[i].setAnimation(0);
}
}}

}


{



}


{

gdjs.MenuCode.GDSemSomObjects1.createFrom(runtimeScene.getObjects("SemSom"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSemSomObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDSemSomObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSemSomObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSemSomObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x79bcf4(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDSemSomObjects1.createFrom(runtimeScene.getObjects("SemSom"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSemSomObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDSemSomObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSemSomObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSemSomObjects1[i].setAnimation(0);
}
}}

}


{



}


{

gdjs.MenuCode.GDIniciarObjects1.createFrom(runtimeScene.getObjects("Iniciar"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDIniciarObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDIniciarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDIniciarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDIniciarObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x937a44(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDIniciarObjects1.createFrom(runtimeScene.getObjects("Iniciar"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDIniciarObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDIniciarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDIniciarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDIniciarObjects1[i].setColor("144;19;254");
}
}}

}


{



}


{

gdjs.MenuCode.GDOpcoesObjects1.createFrom(runtimeScene.getObjects("Opcoes"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOpcoesObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDOpcoesObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDOpcoesObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDOpcoesObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x8b25e4(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDOpcoesObjects1.createFrom(runtimeScene.getObjects("Opcoes"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOpcoesObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDOpcoesObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDOpcoesObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDOpcoesObjects1[i].setColor("144;19;254");
}
}}

}


{



}


{

gdjs.MenuCode.GDRESTARTObjects1.createFrom(runtimeScene.getObjects("RESTART"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRESTARTObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDRESTARTObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDRESTARTObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRESTARTObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x760cbc(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDRESTARTObjects1.createFrom(runtimeScene.getObjects("RESTART"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRESTARTObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDRESTARTObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDRESTARTObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRESTARTObjects1[i].setColor("144;19;254");
}
}}

}


{



}


{

gdjs.MenuCode.GDSAIRObjects1.createFrom(runtimeScene.getObjects("SAIR"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSAIRObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDSAIRObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSAIRObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSAIRObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x761384(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDSAIRObjects1.createFrom(runtimeScene.getObjects("SAIR"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSAIRObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDSAIRObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSAIRObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSAIRObjects1[i].setColor("144;19;254");
}
}}

}


}; //End of gdjs.MenuCode.eventsList0xb43b0


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPomboObjects1.length = 0;
gdjs.MenuCode.GDPomboObjects2.length = 0;
gdjs.MenuCode.GDPrincesaObjects1.length = 0;
gdjs.MenuCode.GDPrincesaObjects2.length = 0;
gdjs.MenuCode.GDPombohudObjects1.length = 0;
gdjs.MenuCode.GDPombohudObjects2.length = 0;
gdjs.MenuCode.GDTextoPombosObjects1.length = 0;
gdjs.MenuCode.GDTextoPombosObjects2.length = 0;
gdjs.MenuCode.GDCobraObjects1.length = 0;
gdjs.MenuCode.GDCobraObjects2.length = 0;
gdjs.MenuCode.GDLancheVidaObjects1.length = 0;
gdjs.MenuCode.GDLancheVidaObjects2.length = 0;
gdjs.MenuCode.GDZumbi1Objects1.length = 0;
gdjs.MenuCode.GDZumbi1Objects2.length = 0;
gdjs.MenuCode.GDVidaCObjects1.length = 0;
gdjs.MenuCode.GDVidaCObjects2.length = 0;
gdjs.MenuCode.GDPrincipeObjects1.length = 0;
gdjs.MenuCode.GDPrincipeObjects2.length = 0;
gdjs.MenuCode.GDChaoMorreObjects1.length = 0;
gdjs.MenuCode.GDChaoMorreObjects2.length = 0;
gdjs.MenuCode.GDLOGOObjects1.length = 0;
gdjs.MenuCode.GDLOGOObjects2.length = 0;
gdjs.MenuCode.GDBotaoObjects1.length = 0;
gdjs.MenuCode.GDBotaoObjects2.length = 0;
gdjs.MenuCode.GDSomObjects1.length = 0;
gdjs.MenuCode.GDSomObjects2.length = 0;
gdjs.MenuCode.GDRecordObjects1.length = 0;
gdjs.MenuCode.GDRecordObjects2.length = 0;
gdjs.MenuCode.GDSemSomObjects1.length = 0;
gdjs.MenuCode.GDSemSomObjects2.length = 0;
gdjs.MenuCode.GDFundoObjects1.length = 0;
gdjs.MenuCode.GDFundoObjects2.length = 0;
gdjs.MenuCode.GDIniciarObjects1.length = 0;
gdjs.MenuCode.GDIniciarObjects2.length = 0;
gdjs.MenuCode.GDOpcoesObjects1.length = 0;
gdjs.MenuCode.GDOpcoesObjects2.length = 0;
gdjs.MenuCode.GDRESTARTObjects1.length = 0;
gdjs.MenuCode.GDRESTARTObjects2.length = 0;
gdjs.MenuCode.GDSAIRObjects1.length = 0;
gdjs.MenuCode.GDSAIRObjects2.length = 0;

gdjs.MenuCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['MenuCode'] = gdjs.MenuCode;
