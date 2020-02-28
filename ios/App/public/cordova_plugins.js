
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-appboy.AppboyPlugin",
          "file": "plugins/cordova-plugin-appboy/www/AppboyPlugin.js",
          "pluginId": "cordova-plugin-appboy",
        "clobbers": [
          "AppboyPlugin"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-appboy": "2.11.2"
    };
    // BOTTOM OF METADATA
    });
    