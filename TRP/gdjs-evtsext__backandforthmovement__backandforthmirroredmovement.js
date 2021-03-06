
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement || {};

/**
 * Behavior generated from Back and Forth (mirrored) Movement
 * @class BackAndForthMirroredMovement
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.SpeedX = behaviorData.SpeedX !== undefined ? behaviorData.SpeedX : Number("200") || 0;
    this._behaviorData.DistanceX = behaviorData.DistanceX !== undefined ? behaviorData.DistanceX : Number("300") || 0;
    this._behaviorData.InitialX = Number("0") || 0;
};

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.thisIsARuntimeBehaviorConstructor = "BackAndForthMovement::BackAndForthMirroredMovement";

// Properties:
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0xb41b0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX() == 0 ) {
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInitialX((gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getPointX("")));
}
}}

}


{



}


{

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCurrentAnimationName("GoLeft") ) {
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isFlippedX()) ) {
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForce(-((gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX())), 0, 0);
}
}}

}


{

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCurrentAnimationName("GoLeft") ) {
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isFlippedX() ) {
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForce(+((gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX())), 0, 0);
}
}}

}


{



}


{

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() > (gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX()) ) {
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX((gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX()));
}
}{for(var i = 0, len = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("TurnLeft");
}
}{for(var i = 0, len = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].flipX(false);
}
}}

}


{

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() < (gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX()) - (gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistanceX()) ) {
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX((gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX()) - (gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistanceX()));
}
}{for(var i = 0, len = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("TurnLeft");
}
}{for(var i = 0, len = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].flipX(true);
}
}}

}


{



}


{

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCurrentAnimationName("TurnLeft") ) {
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].hasAnimationEnded() ) {
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("GoLeft");
}
}}

}


}; //End of gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0xb41b0


gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0xb41b0(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype._getSpeedX = function() {
    return this._behaviorData.SpeedX !== undefined ? this._behaviorData.SpeedX : Number("200") || 0;
};
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype._setSpeedX = function(newValue) {
    this._behaviorData.SpeedX = newValue;
};
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype._getDistanceX = function() {
    return this._behaviorData.DistanceX !== undefined ? this._behaviorData.DistanceX : Number("300") || 0;
};
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype._setDistanceX = function(newValue) {
    this._behaviorData.DistanceX = newValue;
};
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype._getInitialX = function() {
    return this._behaviorData.InitialX !== undefined ? this._behaviorData.InitialX : Number("0") || 0;
};
gdjs.evtsExt__BackAndForthMovement__BackAndForthMirroredMovement.BackAndForthMirroredMovement.prototype._setInitialX = function(newValue) {
    this._behaviorData.InitialX = newValue;
};
