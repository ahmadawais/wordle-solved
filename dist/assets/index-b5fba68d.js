(function () {
	'use strict';

	const importPath = /*@__PURE__*/JSON.parse('"../content/index.js"');

	import(chrome.runtime.getURL(importPath));

}());
