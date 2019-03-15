parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"mOOU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CST={SCENES:{LOAD:"LOAD",MENU:"MENU",PLAY:"PLAY"},IMAGE:{LOGO:"logo.png",OPTIONS:"options_button.png",PLAY:"play_button.png",TITLE:"title_bg.jpg"},AUDIO:{TITLE:"shuinvy-childhood.mp3"},SPRITE:{CAT:"cat.png"}};
},{}],"G1z3":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function n(t,o){return!o||"object"!==e(o)&&"function"!=typeof o?a(t):o}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(exports,"__esModule",{value:!0});var c=require("../CST"),u=function(e){function o(){return t(this,o),n(this,i(o).call(this,{key:c.CST.SCENES.LOAD}))}return s(o,Phaser.Scene),r(o,[{key:"init",value:function(){}},{key:"loadImages",value:function(){for(var e in this.load.setPath("./assets/image"),c.CST.IMAGE)this.load.image(c.CST.IMAGE[e],c.CST.IMAGE[e])}},{key:"loadAudio",value:function(){for(var e in this.load.setPath("./assets/audio"),c.CST.AUDIO)this.load.audio(c.CST.AUDIO[e],c.CST.AUDIO[e])}},{key:"loadSprites",value:function(e){for(var t in this.load.setPath("./assets/sprite"),c.CST.SPRITE)this.load.spritesheet(c.CST.SPRITE[t],c.CST.SPRITE[t],e)}},{key:"preload",value:function(){var e=this;this.load.spritesheet("anna","./assets/sprite/anna.png",{frameHeight:64,frameWidth:64}),this.load.atlas("characters","./assets/sprite/characters.png","./assets/sprite/characters.json"),this.load.atlas("daze","./assets/sprite/daze.png","./assets/sprite/daze.json"),this.load.spritesheet("rapier","./assets/sprite/WEAPON_rapier.png",{frameHeight:192,frameWidth:192}),this.loadAudio(),this.loadSprites({frameHeight:32,frameWidth:32}),this.loadImages();var t=this.add.graphics({fillStyle:{color:16777215}});this.load.on("progress",function(o){t.fillRect(e.game.renderer.width/2,0,50,e.game.renderer.height*o),console.log(o)}),this.load.on("complete",function(){}),this.load.on("load",function(e){console.log(e.src)})}},{key:"create",value:function(){this.scene.start(c.CST.SCENES.MENU)}}]),o}();exports.LoadScene=u;
},{"../CST":"mOOU"}],"OuK+":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?o(t):n}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(exports,"__esModule",{value:!0});var c=require("../CST"),f=function(e){function n(){return t(this,n),i(this,s(n).call(this,{key:c.CST.SCENES.MENU}))}return u(n,Phaser.Scene),r(n,[{key:"init",value:function(){}},{key:"create",value:function(){var e=this;this.add.image(this.game.renderer.width/2,.2*this.game.renderer.height,c.CST.IMAGE.LOGO).setDepth(1),this.add.image(0,0,c.CST.IMAGE.TITLE).setOrigin(0).setDepth(0);var t=this.add.image(this.game.renderer.width/2,this.game.renderer.height/2,c.CST.IMAGE.PLAY).setDepth(1),n=this.add.image(this.game.renderer.width/2,this.game.renderer.height/2+100,c.CST.IMAGE.OPTIONS).setDepth(1),r=this.add.sprite(100,100,c.CST.SPRITE.CAT);r.setScale(2),r.setVisible(!1),this.sound.pauseOnBlur=!1,this.anims.create({key:"walk",frameRate:4,repeat:-1,frames:this.anims.generateFrameNumbers(c.CST.SPRITE.CAT,{frames:[0,1,2,3]})}),t.setInteractive(),t.on("pointerover",function(){r.setVisible(!0),r.play("walk"),r.x=t.x-t.width,r.y=t.y}),t.on("pointerout",function(){r.setVisible(!1)}),t.on("pointerup",function(){e.scene.start(c.CST.SCENES.PLAY)}),n.setInteractive(),n.on("pointerover",function(){r.setVisible(!0),r.play("walk"),r.x=n.x-n.width,r.y=n.y}),n.on("pointerout",function(){r.setVisible(!1)}),n.on("pointerup",function(){})}}]),n}();exports.MenuScene=f;
},{"../CST":"mOOU"}],"HOPQ":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(e,o){return!o||"object"!==t(o)&&"function"!=typeof o?c(e):o}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}Object.defineProperty(exports,"__esModule",{value:!0});var u=function(t){function i(t,n,u,s,f){var p;return e(this,i),p=o(this,r(i).call(this,t,n,u,s,f)),t.sys.updateList.add(c(c(p))),t.sys.displayList.add(c(c(p))),p.setScale(2),t.physics.world.enableBody(c(c(p))),p.setImmovable(!0),p.hp=10,p}return n(i,Phaser.Physics.Arcade.Sprite),i}();exports.CharacterSprite=u;
},{}],"SRgO":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function s(e,t,s){return t&&a(e.prototype,t),s&&a(e,s),e}function i(t,a){return!a||"object"!==e(a)&&"function"!=typeof a?n(t):a}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(exports,"__esModule",{value:!0});var h=require("../CST"),d=require("../CharacterSprite"),c=function(e){function a(){return t(this,a),i(this,r(a).call(this,{key:h.CST.SCENES.PLAY}))}return o(a,Phaser.Scene),s(a,[{key:"preload",value:function(){this.anims.create({key:"left",frameRate:10,frames:this.anims.generateFrameNumbers("anna",{start:9,end:17})}),this.anims.create({key:"down",frameRate:10,frames:this.anims.generateFrameNumbers("anna",{start:18,end:26})}),this.anims.create({key:"up",frameRate:10,frames:this.anims.generateFrameNumbers("anna",{start:0,end:8})}),this.anims.create({key:"right",frameRate:10,frames:this.anims.generateFrameNumbers("anna",{start:27,end:35})}),this.anims.create({key:"blaze",duration:50,frames:this.anims.generateFrameNames("daze",{prefix:"fire0",suffix:".png",end:55}),showOnStart:!0,hideOnComplete:!0}),this.textures.addSpriteSheetFromAtlas("hooded",{frameHeight:64,frameWidth:64,atlas:"characters",frame:"hooded"}),this.textures.addSpriteSheetFromAtlas("mandy",{frameHeight:64,frameWidth:64,atlas:"characters",frame:"mandy"}),this.load.image("terrain","./assets/image/terrain_atlas.png"),this.load.image("items","./assets/image/items.png"),this.load.tilemapTiledJSON("mappy","./assets/maps/mappy.json"),this.anims.create({key:"mandyswordleft",frameRate:5,frames:this.anims.generateFrameNumbers("mandy",{start:169,end:174})}),this.anims.create({key:"sword_left",frameRate:5,frames:this.anims.generateFrameNumbers("rapier",{start:6,end:11}),showOnStart:!0,hideOnComplete:!0})}},{key:"create",value:function(){var e=this;this.player=this.add.container(200,200,[this.add.sprite(0,0,"mandy",26),this.add.sprite(0,0,"rapier").setVisible(!1)]).setDepth(1).setScale(2),window.player=this.player,this.input.keyboard.on("keydown-F",function(){e.player.list[0].play("mandyswordleft"),e.player.list[1].play("sword_left")}),this.anna=new d.CharacterSprite(this,400,400,"anna",26),this.hooded=this.physics.add.sprite(200,200,"hooded",26).setScale(2).setImmovable(!0),this.fireAttacks=this.physics.add.group(),this.assassins=this.physics.add.group({immovable:!0}),this.assassins.add(this.hooded),window.hooded=this.hooded,window.anna=this.anna,this.anna.setSize(40,50).setOffset(10,10),this.anna.setCollideWorldBounds(!0),this.keyboard=this.input.keyboard.addKeys("W, A, S, D"),this.input.on("pointermove",function(t){if(t.isDown){var a=e.add.sprite(t.worldX,t.worldY,"daze","fire00.png").play("blaze");e.fireAttacks.add(a),a.on("animationcomplete",function(){a.destroy()})}}),this.physics.world.addCollider(this.anna,this.assassins,function(e,t){e.hp--,e.hp<=0&&e.destroy(),t.destroy()}),this.physics.world.addCollider(this.fireAttacks,this.assassins,function(t,a){t.destroy(),a.destroy();var s=0,i=0;switch(Phaser.Math.Between(0,1)){case 0:s=Phaser.Math.Between(0,e.game.renderer.width);break;case 1:i=Phaser.Math.Between(0,e.game.renderer.height)}for(var n=0;n<2;n++)e.assassins.add(e.physics.add.sprite(s,i,"hooded",26).setScale(2).setImmovable(!0))});var t=this.add.tilemap("mappy"),a=t.addTilesetImage("terrain_atlas","terrain"),s=(t.addTilesetImage("items"),t.createStaticLayer("bot",[a],0,0).setDepth(-1),t.createStaticLayer("top",[a],0,0));this.physics.add.collider(this.anna,s),s.setCollisionByProperty({collides:!0}),s.setCollision([269,270,271,301,302,303,333,334,335]),s.setTileLocationCallback(10,8,1,1,function(){alert("the sword calls to you!!!!"),s.setTileLocationCallback(10,8,1,1,null)}),s.setTileIndexCallback([272,273,274,304,305,306,336,337,338],function(){console.log("STOP STEPPING ON LAVA >:(")});t.createFromObjects("pickup",1114,{key:h.CST.SPRITE.CAT}).map(function(e){e.setScale(2),e.setInteractive()});this.input.on("gameobjectdown",function(e,t){t.destroy()}),this.input.on("pointerdown",function(e){var a=t.getTileAt(t.worldToTileX(e.x),t.worldToTileY(e.y));a&&console.log(a)}),this.cameras.main.startFollow(this.anna),this.physics.world.setBounds(0,0,t.widthInPixels,t.heightInPixels),s.renderDebug(this.add.graphics(),{tileColor:null,collidingTileColor:new Phaser.Display.Color(243,134,48,200),faceColor:new Phaser.Display.Color(40,39,37,255)})}},{key:"update",value:function(e,t){for(var a=0;a<this.assassins.getChildren().length;a++)this.physics.accelerateToObject(this.assassins.getChildren()[a],this.anna);!0===this.anna.active&&(!0===this.keyboard.D.isDown&&this.anna.setVelocityX(128),!0===this.keyboard.W.isDown&&this.anna.setVelocityY(-128),!0===this.keyboard.S.isDown&&this.anna.setVelocityY(128),!0===this.keyboard.A.isDown&&this.anna.setVelocityX(-128),this.keyboard.A.isUp&&this.keyboard.D.isUp&&this.anna.setVelocityX(0),this.keyboard.W.isUp&&this.keyboard.S.isUp&&this.anna.setVelocityY(0),this.anna.body.velocity.x>0?this.anna.play("right",!0):this.anna.body.velocity.x<0?this.anna.anims.playReverse("left",!0):this.anna.body.velocity.y<0?this.anna.play("up",!0):this.anna.body.velocity.y>0&&this.anna.play("down",!0))}}]),a}();exports.PlayScene=c;
},{"../CST":"mOOU","../CharacterSprite":"HOPQ"}],"jP6t":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./scenes/LoadScene"),r=require("./scenes/MenuScene"),a=require("./scenes/PlayScene"),c=new Phaser.Game({width:800,height:600,scene:[e.LoadScene,r.MenuScene,a.PlayScene],render:{pixelArt:!0},physics:{default:"arcade",arcade:{debug:!0}},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH}});
},{"./scenes/LoadScene":"G1z3","./scenes/MenuScene":"OuK+","./scenes/PlayScene":"SRgO"}]},{},["jP6t"], null)
//# sourceMappingURL=/main.89f0aa81.map