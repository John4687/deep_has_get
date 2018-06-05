// extend underscore/lowdash with deepHas.
// takes a list of properties and sees if the are defined DEPTH wise
// ie to check of obj.a.b.c will work try _deepHas(obj, ['a','b','c'])
//

import _ from 'lodash';

function deepHas(object, props) {
    if (_.isUndefined(props)) return false;
    if (! _.isArray(props)) {
        return object.hasOwnProperty(props);
    }
    if (props.length < 1) return false;

    if (props.length == 1) {
        return object.hasOwnProperty(props[0]);
    } else {
        var prop = props.shift();
        if (object.hasOwnProperty(prop))
            return deepHas(object[prop], props);
        else
            return false;
    }

}
_.deepHas = deepHas;
function deepGet(object, props) {
	object = object || {};
    if (_.isUndefined(props)) return undefined;
    if (! _.isArray(props)) {
		props = [props];
    }
    if (props.length < 1) return undefined;
	var prop;
    if (props.length == 1) {
		prop = props[0];
        var result;
		if (_.has(object, prop)) result = object[prop];
		return result;
    } else {
        prop = props.shift();
        if (object.hasOwnProperty(prop))
            return deepGet(object[prop], props);
        else
            return undefined;
    }

}
_.deepGet = function (object, props) {
  var propArray = props;
  if (typeof(props) === 'string') {
    propArray = props.split('.');
  }
  propArray = _.clone(propArray);
  return deepGet(object, propArray);
};
