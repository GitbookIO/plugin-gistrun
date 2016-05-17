////
// Utility functions
////
function embedUrl(id) {
    return "https://gist.run/embed.html?id="+id;
}

function embedHTML(id) {
    // Get the embed url for our given ID
    var url = embedUrl(id);
    // Build our HTML
    return [
        '<div class="gistrun-embed" style="border: 1px solid #ddd; border-radius: 3px;">',
            '<iframe ref="gistrun-embed" frameborder="0" height="400" width="100%" src="'+url+'"></iframe>',
        '</div>',
    ].join('\n');
}

module.exports = {
    blocks: {
        gistrun: {
            process: function(block) {
                // Use id="..." or first argument
                var id = block.kwargs.id || block.args[0];

                return embedHTML(id);
            }
        }
    }
};
