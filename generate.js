var docpadInstanceConfiguration = require('./docpad.js');

require('docpad').createInstance(docpadInstanceConfiguration, function(err, docpadInstance) {
    if (err)  return console.log(err.stack);

    docpadInstance.action('generate', function(err,result){
        if (err)  return console.log(err.stack);

        console.log('OK');
    });
});