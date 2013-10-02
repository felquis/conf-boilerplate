var docpadInstanceConfiguration = require('./docpad.js'),
    open = require('open');

// http://docpad.org/docs/troubleshoot#watching-doesn-t-work-works-only-some-of-the-time-or-i-get-eisdir-errors
docpadInstanceConfiguration.watchOptions = {
    preferredMethods: ['watchFile','watch']
}

require('docpad').createInstance(docpadInstanceConfiguration, function(err, docpadInstance) {
    if (err)  return console.log(err.stack);

    docpadInstance.action('generate watch server', function(err, result) {
        if (err)  return console.log(err.stack);

        open('http://localhost:' + docpadInstance.getPort());
    });
});