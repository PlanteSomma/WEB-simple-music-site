module.exports = function(eleventyConfig) {
    // Copy `src/files` to `_site/files`
    eleventyConfig.addPassthroughCopy({"files": "files"});
  
    return {
      // other configuration...
    };
  };