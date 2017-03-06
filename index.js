const UTIL = require('util');
const PostCss = require('postcss');
module.exports = PostCss.plugin('pplugin', options => css => {

    options = options || {};
    let rules = [];
    css.walkRules(rule => {
        if (rule.selector.trim() !== ':global') return;
        rules = rules.concat(rule.nodes);
        rule.remove();
    })
    rules.forEach(rule => css.prepend(rule))
})

function inspect(...args){
    args.push({
        // show non-enumerables
        showHidden: false,
        // The number of times to recurse in properties (null = infinity)
        depth: 1,
        // Style ouput with ANSI Color codes
        colors: true,
        // Max number of array elements to show (null = infinity)
        maxArrayLength: null,
        // The lenggth in which an object keys are split across multiple lines
        breakLength: 1,
    });
    process.stdout.write("\n\n\n" + UTIL.inspect(...args) + "\n\n\n");
}
