exports.hasAttribute = (player, attributeName) => player.attributes && player.attributes.findIndex(({ attribute }) => attribute === attributeName) !== -1;