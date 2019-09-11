angular.module("umbraco").controller("orc.banner.editor.controller", function($scope, dialogService) {

	// Initialization Methods ////////////////////////////////////////////////////

	/**
	* @method init
    * @description Triggered on the controller loaded, kicks off any 
    * initialization functions.
	*/
	$scope.init = function() {
        console.info($scope.model);
        $scope.setVariables();
	};

    /**
    * @method setVariables
    * @description Sets up the initial variables for the view.
    */
    $scope.setVariables = function() {
        $scope.model.value = $scope.getPropertyValue();
        $scope.maxWidth = $scope.getMaxWidth();
		$scope.propertyEditorMode = "edit";
		$scope.shouldShowBannerWithoutImage = false;
    };

	// Event Handler Methods /////////////////////////////////////////////////////

	/**
	* @method changeHeight
    * @description Changes $scope.model.value.height in a rotation to the next 
    * of the three valid values for classNames: "short", "mid", "tall".
	*/
	$scope.changeHeight = function() {
		var height = $scope.model.value.height;
		switch (height) {
			case "short":
				height = "mid";
				break;
			case "mid":
				height = "tall";
				break;
			case "tall":
			default:
				height = "short";
				break;
		}
		$scope.model.value.height = height;
	};

	/**
	* @method changePos
	* @param {string} position - tl, tc, tr, ml, mc, mr, bl, bm, br
	* @description Changes the position of the text over the image.
	*/
	$scope.changePos = function(position) {
		if (position) {
			$scope.model.value.position = position;
		}
		$scope.toggleMode('edit');
    };

    $scope.createColorPicker = function(key) {
        var currentColor = $scope.model.value[key];
        var pickr = Pickr.create({
            default: !!currentColor ? 'rgba(' + currentColor + ')' : 'rgba(48,48,51,1)',
            el: '.pickr-container-' + key,
            theme: 'nano',
            swatches: [],
            defaultRepresentation: 'HEXA',
            components: {
                preview: true,
                opacity: true,
                hue: true,

                interaction: {
                    hex: false,
                    rgba: false,
                    hsva: false,
                    input: true,
                    clear: true,
                    save: true
                }
            }
        });
        pickr.on('save', function(color, instance) {
            var newColor = '';
            if (!!color) {
                newColor = color.toRGBA().join(',');
            }
            $scope.$apply(function() {
                $scope.model.value[key] = newColor;
                console.info($scope.model.value);
            });
        });
        if (key == "overlayColor") {
            $scope.overlayPicker = pickr;
        }
    };    
    
    $scope.deleteLink = function() {
        $scope.model.value.link.id = ''; 
        $scope.model.value.link.name = '';
        $scope.model.value.link.target = '';
        $scope.model.value.link.url = '';        
    };

    /**
    * @method $scope.handleMediaPickerSelection
    * @param {Object} data - modal object returned by dialogService.mediaPicker().
    * @description Event handler triggered by a media picker dialog. If there is 
    * an image selected, updates the $scope.model.value with the image's information.
    */
    $scope.handleMediaPickerSelection = function(data, index) {
        if (data && data.id && !!data.image) {
            var media = $scope.getMediaClone($scope.model.value.media);
            media[index].id = data.id;
            media[index].url = data.image;
            media[index].width = data.originalWidth;
            media[index].height = data.originalHeight;
            media[index].altText = data.name;
            $scope.shouldShowBannerWithoutImage = true;
            if (data.properties) {
                data.properties.forEach(function(property) {
                    if(property.alias == "altText") {
                        if(property.value != "") {
                            media[0].altText = property.value;
                        }
                    }
                });
            } else if (!!data.metaData) {
                if (!!data.metaData.Text) {
                    media[index].altText = data.metaData.Text;
                }
            }
            $scope.model.value.media = media;
        }
    };

	/**
	 * @method $scope.handleLinkPickerSelection
	 * @param {Object} data - modal object returned by dialogService.linkPicker()
	 * @description Event handler triggered by a link picker dialog. If there is 
     * a link selected, updates $scope.model.value with the link's information.
	 */
	$scope.handleLinkPickerSelection = function(data) {
		if (data) {
			$scope.model.value.link.id = data.id; 
			$scope.model.value.link.name = data.name;
			$scope.model.value.link.target = data.target;
			$scope.model.value.link.url = data.url;
        }
	};

	/**
	* @method onRemoveImageConfirmation
    * @description Handles callback from remove image confirmation dialog, 
    * deleting the media item from the model's value.
	*/
	$scope.onRemoveImageConfirmation = function(index) {
        var media = $scope.getMediaClone($scope.model.value.media);
        var key = "desktop";
        switch (index) {
            case 1:
                key = "tablet";
            case 2:
                key = "mobile";
        }
        media[index] = new bannerEditor.Models.MediaItem({key: key});
		$scope.model.value.media = media;
    };
    
	/**
	* @method openConfirmRemoveDialog
    * @description Using Umbraco's dialogService, opens confirmation dialog, 
    * asking user to confirm they want to remove the image from the banner. Dialog 
    * result is passed to $scope.onRemoveImageConfirmation
	*/
	$scope.openConfirmRemoveDialog = function(index) {
        dialogService.open({
			template: "/App_plugins/BannerEditor/views/ConfirmationDialogView.html",
			dialogData: {
                message: "Are you sure you want to remove the selected image?"
			},
			callback: function() {
                $scope.onRemoveImageConfirmation(index);
            }
        });
    };

    /**
    * @method openMediaPicker
    * @description Opens the media picker dialog, showing only images, and sends 
    * the data returned to $scope.handleMediaPickerSelection.
    */
    $scope.openMediaPicker = function(index) {
        var options = {
            onlyImages: true,
            callback: function(data) {
                $scope.handleMediaPickerSelection(data, index);
            }
        };
        dialogService.mediaPicker(options);
    };

	/**
    * @method openLinkPicker
    * @description Opens the content picker dialog, showing only images, and 
    * sends the data returned to $scope.handleLinkPickerSelection.
    */
    $scope.openLinkPicker = function () {
		var link = {
            name: $scope.model.value.link.name,
            url:  $scope.model.value.link.url,
            target: $scope.model.value.link.target,
             // Check to see if it's media and remove id as it attempts resolve 
             // as content causing error
            id: $scope.model.value.link.isMedia ? null : $scope.model.value.link.id
        }
        dialogService.linkPicker({
            currentTarget: link,
            callback: $scope.handleLinkPickerSelection
        });
    };

    $scope.openOverlayPicker = function() {
        if ($scope.overlayPicker) {
            $scope.overlayPicker.show();
        }
    }

    /**
     * @method renderAddLinkText
     * @returns {string}
     * @description If a link with a link name exists, returns the link name, 
     * otherwise returns '+ Add A Link'
     */
	$scope.renderAddLinkText = function() {
		return $scope.model.value.link.url == "" ? "+ Add a Link" : $scope.model.value.link.name == "" ? $scope.model.value.link.url : $scope.model.value.link.name;
	};

	/**
	* @method showBannerWithoutImage
    * @description Shows the banner without an image, for text on a single-color 
    * background.
	*/
	$scope.showBannerWithoutImage = function() {
		$scope.shouldShowBannerWithoutImage = true;
	};

	/**
	* @method toggleMode
	* @param {optional string} mode
    * @description If a mode is provided, switch to that. Otherwise, toggle 
    * between edit and select.
	*/
	$scope.toggleMode = function(mode) {
		if (mode) {
			$scope.propertyEditorMode = mode;
		} else {
			if ($scope.propertyEditorMode === "edit") {
				$scope.propertyEditorMode = "select";
			} else {
				$scope.propertyEditorMode = "edit";
			}
		}
	};

	// Helper Methods ////////////////////////////////////////////////////////////

    /**
    * @method getBackgroundStyle
    * @returns {array of styles}
    * @description Provides styles for the background image of the text over 
    * image editor view.
    */
    $scope.getBackgroundStyle = function() {
        var styles = {
            width: "800px",
            height: "400px",
            background: "#333"
        };
        var media = $scope.getMediaClone($scope.model.value.media);
        var mediaItem = media[0];

        if (mediaItem.url !== "") {
            // 1. Get natural dimensions
            var sizer = document.querySelector('.orc-be-media-item-sizer-' + mediaItem.id);
            width = !!sizer ? sizer.naturalWidth : mediaItem.width;
            height = !!sizer ? sizer.naturalHeight : mediaItem.height;
            var ratio = height / width;

            // 2. Adjust for selected height type.
            switch ($scope.model.value.height) {
                case "short":
                    height = 200;
                    break;
                case "mid":
                    height = 400;
                    break;
                case "tall":
                    height = 600;
                    break;
            }
            width = height / ratio; 

            // 3. Fix if too wide for container.
            if (width > $scope.maxWidth) {
                width = $scope.maxWidth;
                height = ratio * width;
            }

            styles = {
                width: width + "px",
                height: height + "px",
                background: "url(" + mediaItem.url + ") center center no-repeat",
                'background-size': "cover"
            };
        }
        return styles;
    };

	/**
	* @method getFrameStyle
	* @returns {array of styles}
	* @description Provides styles for the controller's div wrapper to set its width.
	*/
	$scope.getFrameStyle = function() {
		var styles = {
			width: "800px"
		}
		if ($scope.model.value.media) {
		    var media = $scope.getMediaClone($scope.model.value.media);
            if (media[0].width > 0) {
                var sizer = document.querySelector('.orc-be-media-item-sizer-' + media[0].id);
                width = !!sizer ? sizer.naturalWidth : media[0].width;
                if (width > $scope.maxWidth && $scope.maxWidth > 0) {
                    width = $scope.maxWidth;
                }
                styles = {
                    width: width + "px"
                };
            }
		}
		return styles;
	};

	/**
	* @method getImageWrapperClasses
	* @returns {string}
    * @description Provides the styles for the wrapper div that represents the 
    * banner for the property editor.
	*/
	$scope.getImageWrapperClasses = function() {
		var classes = "image " + $scope.model.value.height + " ";
		if ($scope.propertyEditorMode === "select") {
			classes += "selectMode";
		}
		return classes
	};

    /**
    * @method getMaxWidth
    * @returns {integer}
    * @description If $scope.model.config has a maxWidth value, return that. 
    * Otherwise, return 800.
    */
    $scope.getMaxWidth = function() {
        var value = 800;
        if ($scope.model && $scope.model.config) {
            if ($scope.model.config.maxWidth != undefined) {
                value = parseInt($scope.model.config.maxWidth, 10);
            }
        }
        return value;
    };

    $scope.getMediaClone = function(media) {
        return [
            new bannerEditor.Models.MediaItem(media[0]),
            new bannerEditor.Models.MediaItem(media[1]),
            new bannerEditor.Models.MediaItem(media[2])
        ];
    }

    /**
    * @method getPropertyValue
    * @returns {bannerEditor.Models.BannerEditor}
    * @description If the $scope.model.value already exists, filter it through 
    * the model and return it. Elsewise, create a new, default model.
    */
    $scope.getPropertyValue = function() {
        var value = new bannerEditor.Models.BannerEditor();
        if ($scope.model) {
            if ($scope.model.value != undefined) {
                value = new bannerEditor.Models.BannerEditor($scope.model.value);
            }
        }
        return value;
    };

    /**
    * @method hasImageSelected
    * @returns {bool}
    * @description Returns `true` if there is a selected media image, otherwise 
    * returns `false`.
    */
    $scope.hasImageSelected = function() {
        var hasImageSelected = false;
        if (($scope.model && $scope.model.value)) {
            var mediaItem = new bannerEditor.Models.MediaItem($scope.model.value.media[0]);
            if (mediaItem.id != 0) {
                hasImageSelected = true;
            }
			if (($scope.model.value.headline !== "" && $scope.model.value.headline !== "Headline") || ($scope.model.value.subheadline !== "" && $scope.model.value.subheadline !== "Sub-Headline")) {
				hasImageSelected = true;
			}
        }
		if ($scope.shouldShowBannerWithoutImage) {
			hasImageSelected = true;
		}
        return hasImageSelected;
    };

    /**
     * @method hasLinkSelected
     * @returns {bool}
     * @description Returns true if the user has selected a link.
     */
    $scope.hasLinkSelected = function() {
        return $scope.model && $scope.model.value && $scope.model.value.link.url !== '';
    };

	// Call $scope.init() ////////////////////////////////////////////////////////

	$scope.init();

});
