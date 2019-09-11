(function(models, undefined) {

	/**
	* @class TextOverImage
	* @this TextOverImage
	* @param {JSON} data
	* @param {bannerEditor.Models.MediaItem[]} data.media
    * @param {string} data.headline - A text headline that will overlap the 
    * image.
    * @param {string} data.height - "short", "mid", or "tall"; class names for 
    * the height of the banner div.
    * @param {string} data.subheadline - A text subheadline that will overlap 
    * the image.
	* @param {string} data.position - tl, tc, tr, ml, mc, mr, bl, bm, br.
    * @description Class defining a Text Over Image Editor, which displays a 
    * selectable image, headline, sub-headline, and text position.
	*/
	models.BannerEditor = function(data) {
		var self = this;
        self.headline = "Headline";
        self.headlineColor = "";
		self.height = "mid";
        self.link = new bannerEditor.Models.Link();
        self.linkColor = "";
        self.media = [
            new bannerEditor.Models.MediaItem({key: "desktop"}),
            new bannerEditor.Models.MediaItem({key: "tablet"}),
            new bannerEditor.Models.MediaItem({key: "mobile"})
        ];
        self.overlayColor = "";
        self.position = "mc";
        self.subheadline = "Sub-Headline";
        self.subheadlineColor = "";
        self.video = new bannerEditor.Models.Video();
		if (data !== undefined) {
			if (data.headline !== undefined) {
				self.headline = data.headline;
            }
            if (data.headlineColor !== undefined) {
                self.headlineColor = data.headlineColor;
            }
			if (data.height !== undefined) {
				self.height = data.height;
			}
			if (data.link !== undefined) {
				self.link = new bannerEditor.Models.Link(data.link);
            }
            if (data.linkColor !== undefined) {
                self.linkColor = data.linkColor;
            }
			if (data.media !== undefined) {
				self.media = [
                    new bannerEditor.Models.MediaItem(data.media[0]),
                    new bannerEditor.Models.MediaItem(data.media[1]),
                    new bannerEditor.Models.MediaItem(data.media[2])
                ];
            }
            if (data.overlayColor !== undefined) {
                self.overlayColor = data.overlayColor;
            }
			if (data.position !== undefined) {
				self.position = data.position;
            }
            if (data.subheadline !== undefined) {
				self.subheadline = data.subheadline;
            }
            if (data.subheadlineColor !== undefined) {
                self.subheadlineColor = data.subheadlineColor;
            }
            if (data.video !== undefined) {
                self.video = new bannerEditor.Models.Video(data.video);
            }
		}
    };
    
	/**
	 * @class Link
	 * @this Link
	 * @param {JSON} data
	 * @param {integer} data.id
	 * @param {string} data.url
	 */
	models.Link = function(data) {
		var self = this;
		self.id = 0;
		self.name = "";
		self.target = "_self";
		self.url = "";
		if (data !== undefined) {
			if (data.id !== undefined) {
				self.id = data.id;
			}
			if (data.name !== undefined) {
				self.name = data.name;
			}
			if (data.target !== undefined) {
				self.target = data.target;
			}
			if (data.url !== undefined) {
				self.url = data.url;
			}
		}
    };

	/**
	* @class MediaItem
	* @this Media
	* @param {JSON} data
	* @param {integer} data.id
	* @param {string} data.url
	* @param {integer} data.width
	* @param {integer} data.height
	* @param {string} data.altText
	* @description Class definining a media object for the text over image.
	*/
	models.MediaItem = function(data) {
		var self = this;
		self.altText = "";
        self.height = 0;
		self.id = 0;
        self.key = "";
		self.url = "";
		self.width = 0;
		if (data !== undefined) {
			if (data.altText !== undefined) {
				self.altText = data.altText;
			}
			if (data.height !== undefined) {
				self.height = data.height;
            }
			if (data.id !== undefined) {
				self.id = data.id;
            }
            if (data.key !== undefined) {
                self.key = data.key;
            }
			if (data.url !== undefined) {
				self.url = data.url;
			}
			if (data.width !== undefined) {
				self.width = data.width;
			}
		}
	};
    
    /**
     * @class Video
     * @this Video
     */
    models.Video = function(data) {
        var self = this;
        self.id = 0;
        self.name = "";
        self.url = "";
        if (data !== undefined) {
            if (data.id !== undefined) {
                self.id = data.id;
            }
            if (data.name !== undefined) {
                self.name = data.name;
            }
            if (data.url !== undefined) {
                self.url = data.url;
            }
        }
    };

}(window.bannerEditor.Models = window.bannerEditor.Models || {}));
