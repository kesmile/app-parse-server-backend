const _ = require('lodash');

Parse.Cloud.define('test', async () => {
    const words = ['sky', 'wood', 'forest', 'falcon',
    'pear', 'ocean', 'universe'];

    const fel = _.first(words);
    const lel = _.last(words);

    return {
        fel,
        lel
    }
});