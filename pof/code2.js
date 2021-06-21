gdjs.Introdu_231_227oCode = {};
gdjs.Introdu_231_227oCode.GDPomboObjects1= [];
gdjs.Introdu_231_227oCode.GDPomboObjects2= [];
gdjs.Introdu_231_227oCode.GDPrincesaObjects1= [];
gdjs.Introdu_231_227oCode.GDPrincesaObjects2= [];
gdjs.Introdu_231_227oCode.GDPombohudObjects1= [];
gdjs.Introdu_231_227oCode.GDPombohudObjects2= [];
gdjs.Introdu_231_227oCode.GDTextoPombosObjects1= [];
gdjs.Introdu_231_227oCode.GDTextoPombosObjects2= [];
gdjs.Introdu_231_227oCode.GDCobraObjects1= [];
gdjs.Introdu_231_227oCode.GDCobraObjects2= [];
gdjs.Introdu_231_227oCode.GDLancheVidaObjects1= [];
gdjs.Introdu_231_227oCode.GDLancheVidaObjects2= [];
gdjs.Introdu_231_227oCode.GDZumbi1Objects1= [];
gdjs.Introdu_231_227oCode.GDZumbi1Objects2= [];
gdjs.Introdu_231_227oCode.GDVidaCObjects1= [];
gdjs.Introdu_231_227oCode.GDVidaCObjects2= [];
gdjs.Introdu_231_227oCode.GDPrincipeObjects1= [];
gdjs.Introdu_231_227oCode.GDPrincipeObjects2= [];
gdjs.Introdu_231_227oCode.GDChaoMorreObjects1= [];
gdjs.Introdu_231_227oCode.GDChaoMorreObjects2= [];
gdjs.Introdu_231_227oCode.GDtextoObjects1= [];
gdjs.Introdu_231_227oCode.GDtextoObjects2= [];
gdjs.Introdu_231_227oCode.GDFundoObjects1= [];
gdjs.Introdu_231_227oCode.GDFundoObjects2= [];
gdjs.Introdu_231_227oCode.GDFundoTextObjects1= [];
gdjs.Introdu_231_227oCode.GDFundoTextObjects2= [];
gdjs.Introdu_231_227oCode.GDPularObjects1= [];
gdjs.Introdu_231_227oCode.GDPularObjects2= [];

gdjs.Introdu_231_227oCode.conditionTrue_0 = {val:false};
gdjs.Introdu_231_227oCode.condition0IsTrue_0 = {val:false};
gdjs.Introdu_231_227oCode.condition1IsTrue_0 = {val:false};
gdjs.Introdu_231_227oCode.condition2IsTrue_0 = {val:false};
gdjs.Introdu_231_227oCode.conditionTrue_1 = {val:false};
gdjs.Introdu_231_227oCode.condition0IsTrue_1 = {val:false};
gdjs.Introdu_231_227oCode.condition1IsTrue_1 = {val:false};
gdjs.Introdu_231_227oCode.condition2IsTrue_1 = {val:false};


gdjs.Introdu_231_227oCode.mapOfGDgdjs_46Introdu_95231_95227oCode_46GDPularObjects1Objects = Hashtable.newFrom({"Pular": gdjs.Introdu_231_227oCode.GDPularObjects1});gdjs.Introdu_231_227oCode.eventsList0x7a7794 = function(runtimeScene) {

{


gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
gdjs.Introdu_231_227oCode.condition1IsTrue_0.val = false;
{
gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Introdu_231_227oCode.condition0IsTrue_0.val ) {
{
{gdjs.Introdu_231_227oCode.conditionTrue_1 = gdjs.Introdu_231_227oCode.condition1IsTrue_0;
gdjs.Introdu_231_227oCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7977612);
}
}}
if (gdjs.Introdu_231_227oCode.condition1IsTrue_0.val) {
gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].returnVariable(gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].setOpacity(0);
}
}}

}


}; //End of gdjs.Introdu_231_227oCode.eventsList0x7a7794
gdjs.Introdu_231_227oCode.eventsList0xb43b0 = function(runtimeScene) {

{


gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {
gdjs.Introdu_231_227oCode.GDFundoTextObjects1.createFrom(runtimeScene.getObjects("FundoText"));
gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDFundoTextObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDFundoTextObjects1[i].setOpacity(200);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Efeitos Sonoros\\Vinheta Vale a Pena Ver De Novo + Rei do Gado (Sega Genesis remix).mp3", true, 100, 1);
}}

}


{

gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Introdu_231_227oCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getOpacity() <= 255 ) {
        gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = true;
        gdjs.Introdu_231_227oCode.GDtextoObjects1[k] = gdjs.Introdu_231_227oCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227oCode.GDtextoObjects1.length = k;}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Introdu_231_227oCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].setOpacity(gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getOpacity() + (60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Introdu_231_227oCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getOpacity() >= 255 ) {
        gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = true;
        gdjs.Introdu_231_227oCode.GDtextoObjects1[k] = gdjs.Introdu_231_227oCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227oCode.GDtextoObjects1.length = k;}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Introdu_231_227oCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].returnVariable(gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{

gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Introdu_231_227oCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariableNumber(gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = true;
        gdjs.Introdu_231_227oCode.GDtextoObjects1[k] = gdjs.Introdu_231_227oCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227oCode.GDtextoObjects1.length = k;}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Introdu_231_227oCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].setString("Era uma vez...");
}
}}

}


{

gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Introdu_231_227oCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariableNumber(gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = true;
        gdjs.Introdu_231_227oCode.GDtextoObjects1[k] = gdjs.Introdu_231_227oCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227oCode.GDtextoObjects1.length = k;}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Introdu_231_227oCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].setString("Uma princesa chamada Princes...");
}
}}

}


{

gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Introdu_231_227oCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariableNumber(gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = true;
        gdjs.Introdu_231_227oCode.GDtextoObjects1[k] = gdjs.Introdu_231_227oCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227oCode.GDtextoObjects1.length = k;}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Introdu_231_227oCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].setString("Que vivia um amor proibido pela familia.\nE isso os obrigava a se encontrarem \nescondido no bosque...");
}
}}

}


{

gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Introdu_231_227oCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariableNumber(gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = true;
        gdjs.Introdu_231_227oCode.GDtextoObjects1[k] = gdjs.Introdu_231_227oCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227oCode.GDtextoObjects1.length = k;}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Introdu_231_227oCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].setString("Para chegar ao local de encontro, ela \nusava um tunel secreto...");
}
}}

}


{

gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Introdu_231_227oCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariableNumber(gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = true;
        gdjs.Introdu_231_227oCode.GDtextoObjects1[k] = gdjs.Introdu_231_227oCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227oCode.GDtextoObjects1.length = k;}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Introdu_231_227oCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].setString("Esse túnel ligava o museu da cidade até o bosque...");
}
}}

}


{

gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Introdu_231_227oCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariableNumber(gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariables().getFromIndex(0)) == 5 ) {
        gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = true;
        gdjs.Introdu_231_227oCode.GDtextoObjects1[k] = gdjs.Introdu_231_227oCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227oCode.GDtextoObjects1.length = k;}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Introdu_231_227oCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].setString("Só que Princes não sabia que para viver\no seu amor...");
}
}}

}


{

gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Introdu_231_227oCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariableNumber(gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariables().getFromIndex(0)) == 6 ) {
        gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = true;
        gdjs.Introdu_231_227oCode.GDtextoObjects1[k] = gdjs.Introdu_231_227oCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227oCode.GDtextoObjects1.length = k;}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Introdu_231_227oCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].setString("Teria que enfrentar perigos inimagináveis \nno subsolo de Pindamonhangaba.");
}
}}

}


{

gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Introdu_231_227oCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariableNumber(gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariables().getFromIndex(0)) == 7 ) {
        gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = true;
        gdjs.Introdu_231_227oCode.GDtextoObjects1[k] = gdjs.Introdu_231_227oCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227oCode.GDtextoObjects1.length = k;}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Introdu_231_227oCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Introdu_231_227oCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227oCode.GDtextoObjects1[i].setString("Continua...");
}
}}

}


{

gdjs.Introdu_231_227oCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Introdu_231_227oCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariableNumber(gdjs.Introdu_231_227oCode.GDtextoObjects1[i].getVariables().getFromIndex(0)) == 8 ) {
        gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = true;
        gdjs.Introdu_231_227oCode.GDtextoObjects1[k] = gdjs.Introdu_231_227oCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227oCode.GDtextoObjects1.length = k;}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase 1", false);
}}

}


{



}


{

gdjs.Introdu_231_227oCode.GDPularObjects1.createFrom(runtimeScene.getObjects("Pular"));

gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = false;
{
gdjs.Introdu_231_227oCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Introdu_231_227oCode.mapOfGDgdjs_46Introdu_95231_95227oCode_46GDPularObjects1Objects, runtimeScene, true, false);
}if (gdjs.Introdu_231_227oCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Introdu_231_227oCode.eventsList0x7a7794(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Introdu_231_227oCode.eventsList0xb43b0


gdjs.Introdu_231_227oCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Introdu_231_227oCode.GDPomboObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDPomboObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDPrincesaObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDPrincesaObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDPombohudObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDPombohudObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDTextoPombosObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDTextoPombosObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDCobraObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDCobraObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDLancheVidaObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDLancheVidaObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDZumbi1Objects1.length = 0;
gdjs.Introdu_231_227oCode.GDZumbi1Objects2.length = 0;
gdjs.Introdu_231_227oCode.GDVidaCObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDVidaCObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDPrincipeObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDPrincipeObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDChaoMorreObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDChaoMorreObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDtextoObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDtextoObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDFundoObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDFundoObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDFundoTextObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDFundoTextObjects2.length = 0;
gdjs.Introdu_231_227oCode.GDPularObjects1.length = 0;
gdjs.Introdu_231_227oCode.GDPularObjects2.length = 0;

gdjs.Introdu_231_227oCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['Introdu_231_227oCode'] = gdjs.Introdu_231_227oCode;
