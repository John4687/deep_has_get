# deep_has_get
Some functions I like to keep around
Extend underscore/lowdash with deepHas and deepGet
_.deepHas takes a list of properties and sees if the are defined DEPTH wise. ie to check of obj.a.b.c will work try _deepHas(obj, ['a','b','c']);
It does not error or throw when keys are undefined.

_.deepGet tests with deepHas before returning your data, great for JSON that that leaves out keys in certain circumstances.

NEW: deepGet takes a string dot query also ie:   _.deepGet(myObj, 'response.data') is equivalent to _deepGet(myObj, ['response']['data']);
