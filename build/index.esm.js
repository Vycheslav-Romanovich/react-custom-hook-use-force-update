import t from"react";function n(){var n=t.useState({count:0})[1];return t.useCallback((function(){n((function(t){return{count:t.count+1}}))}),[])}export{n as useForceUpdate};
