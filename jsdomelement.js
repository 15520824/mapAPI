'use strict';
var DOMElement = {

    idcount : 0,
    hiddendiv: null,
    bodyElement: null,
    stylesList: [
        "alignContent", "borderBlockStart", "borderInlineStyle", "clip-path", "float", "gridRow", "marginBlock", "minWidth", "-moz-column-rule", "-moz-transition-duration", "paddingLeft", "scroll-margin-right", "textCombineUpright", "webkitAlignItems", "-webkit-border-top-right-radius", "WebkitMaskImage", "webkitTransitionProperty",
        "align-content", "border-block-start", "border-inline-style", "clipRule", "floodColor", "grid-row", "margin-block", "min-width", "MozColumnRuleColor", "MozTransitionProperty", "padding-left", "scrollMarginTop", "text-combine-upright", "-webkit-align-items", "WebkitBoxAlign", "webkitMaskImage", "-webkit-transition-property",
        "alignItems", "borderBlockStartColor", "borderInlineWidth", "clip-rule", "flood-color", "gridRowEnd", "marginBlockEnd", "mixBlendMode", "-moz-column-rule-color", "-moz-transition-property", "paddingRight", "scroll-margin-top", "textDecoration", "WebkitAlignSelf", "webkitBoxAlign", "-webkit-mask-image", "WebkitTransitionTimingFunction",
        "align-items", "border-block-start-color", "border-inline-width", "color", "floodOpacity", "grid-row-end", "margin-block-end", "mix-blend-mode", "MozColumnRuleStyle", "MozTransitionTimingFunction", "padding-right", "scrollPadding", "text-decoration", "webkitAlignSelf", "-webkit-box-align", "WebkitMaskOrigin", "webkitTransitionTimingFunction",
        "alignSelf", "borderBlockStartStyle", "borderLeft", "colorAdjust", "flood-opacity", "gridRowGap", "marginBlockStart", "MozAnimation", "-moz-column-rule-style", "-moz-transition-timing-function", "paddingTop", "scroll-padding", "textDecorationColor", "-webkit-align-self", "WebkitBoxDirection", "webkitMaskOrigin", "-webkit-transition-timing-function",
        "align-self", "border-block-start-style", "border-left", "color-adjust", "font", "grid-row-gap", "margin-block-start", "MozAnimationDelay", "MozColumnRuleWidth", "MozUserFocus", "padding-top", "scrollPaddingBlock", "text-decoration-color", "WebkitAnimation", "webkitBoxDirection", "-webkit-mask-origin", "WebkitUserSelect",
        "all", "borderBlockStartWidth", "borderLeftColor", "colorInterpolation", "fontFamily", "gridRowStart", "marginBottom", "-moz-animation-delay", "-moz-column-rule-width", "-moz-user-focus", "pageBreakAfter", "scroll-padding-block", "textDecorationLine", "webkitAnimation", "-webkit-box-direction", "WebkitMaskPosition", "webkitUserSelect",
        "animation", "border-block-start-width", "border-left-color", "color-interpolation", "font-family", "grid-row-start", "margin-bottom", "MozAnimationDirection", "MozColumns", "MozUserInput", "page-break-after", "scrollPaddingBlockEnd", "text-decoration-line", "-webkit-animation", "WebkitBoxFlex", "webkitMaskPosition", "-webkit-user-select",
        "animationDelay", "borderBlockStyle", "borderLeftStyle", "colorInterpolationFilters", "fontFeatureSettings", "gridTemplate", "marginInline", "-moz-animation-direction", "-moz-columns", "-moz-user-input", "pageBreakBefore", "scroll-padding-block-end", "textDecorationStyle", "WebkitAnimationDelay", "webkitBoxFlex", "-webkit-mask-position", "whiteSpace",
        "animation-delay", "border-block-style", "border-left-style", "color-interpolation-filters", "font-feature-settings", "grid-template", "margin-inline", "MozAnimationDuration", "MozColumnWidth", "MozUserModify", "page-break-before", "scrollPaddingBlockStart", "text-decoration-style", "webkitAnimationDelay", "-webkit-box-flex", "WebkitMaskPositionX", "white-space",
        "animationDirection", "borderBlockWidth", "borderLeftWidth", "columnCount", "fontKerning", "gridTemplateAreas", "marginInlineEnd", "-moz-animation-duration", "-moz-column-width", "-moz-user-modify", "pageBreakInside", "scroll-padding-block-start", "textEmphasis", "-webkit-animation-delay", "WebkitBoxOrdinalGroup", "webkitMaskPositionX", "width",
        "animation-direction", "border-block-width", "border-left-width", "column-count", "font-kerning", "grid-template-areas", "margin-inline-end", "MozAnimationFillMode", "MozFloatEdge", "MozUserSelect", "page-break-inside", "scrollPaddingBottom", "text-emphasis", "WebkitAnimationDirection", "webkitBoxOrdinalGroup", "-webkit-mask-position-x", "willChange",
        "animationDuration", "borderBottom", "borderRadius", "columnFill", "fontLanguageOverride", "gridTemplateColumns", "marginInlineStart", "-moz-animation-fill-mode", "-moz-float-edge", "-moz-user-select", "paintOrder", "scroll-padding-bottom", "textEmphasisColor", "webkitAnimationDirection", "-webkit-box-ordinal-group", "WebkitMaskPositionY", "will-change",
        "animation-duration", "border-bottom", "border-radius", "column-fill", "font-language-override", "grid-template-columns", "margin-inline-start", "MozAnimationIterationCount", "MozFontFeatureSettings", "MozWindowDragging", "paint-order", "scrollPaddingInline", "text-emphasis-color", "-webkit-animation-direction", "WebkitBoxOrient", "webkitMaskPositionY", "wordBreak",
        "animationFillMode", "borderBottomColor", "borderRight", "columnGap", "fontOpticalSizing", "gridTemplateRows", "marginLeft", "-moz-animation-iteration-count", "-moz-font-feature-settings", "-moz-window-dragging", "parentRule", "scroll-padding-inline", "textEmphasisPosition", "WebkitAnimationDuration", "webkitBoxOrient", "-webkit-mask-position-y", "word-break",
        "animation-fill-mode", "border-bottom-color", "border-right", "column-gap", "font-optical-sizing", "grid-template-rows", "margin-left", "MozAnimationName", "MozFontLanguageOverride", "objectFit", "perspective", "scrollPaddingInlineEnd", "text-emphasis-position", "webkitAnimationDuration", "-webkit-box-orient", "WebkitMaskRepeat", "wordSpacing",
        "animationIterationCount", "borderBottomLeftRadius", "borderRightColor", "columnRule", "fontSize", "height", "marginRight", "-moz-animation-name", "-moz-font-language-override", "object-fit", "perspectiveOrigin", "scroll-padding-inline-end", "textEmphasisStyle", "-webkit-animation-duration", "WebkitBoxPack", "webkitMaskRepeat", "word-spacing",
        "animation-iteration-count", "border-bottom-left-radius", "border-right-color", "column-rule", "font-size", "hyphens", "margin-right", "MozAnimationPlayState", "MozForceBrokenImageIcon", "objectPosition", "perspective-origin", "scrollPaddingInlineStart", "text-emphasis-style", "WebkitAnimationFillMode", "webkitBoxPack", "-webkit-mask-repeat", "wordWrap",
        "animationName", "borderBottomRightRadius", "borderRightStyle", "columnRuleColor", "fontSizeAdjust", "imageOrientation", "marginTop", "-moz-animation-play-state", "-moz-force-broken-image-icon", "object-position", "placeContent", "scroll-padding-inline-start", "textIndent", "webkitAnimationFillMode", "-webkit-box-pack", "WebkitMaskSize", "word-wrap",
        "animation-name", "border-bottom-right-radius", "border-right-style", "column-rule-color", "font-size-adjust", "image-orientation", "margin-top", "MozAnimationTimingFunction", "MozHyphens", "opacity", "place-content", "scrollPaddingLeft", "text-indent", "-webkit-animation-fill-mode", "WebkitBoxShadow", "webkitMaskSize", "writingMode",
        "animationPlayState", "borderBottomStyle", "borderRightWidth", "columnRuleStyle", "fontStretch", "imageRendering", "marker", "-moz-animation-timing-function", "-moz-hyphens", "order", "placeItems", "scroll-padding-left", "textJustify", "WebkitAnimationIterationCount", "webkitBoxShadow", "-webkit-mask-size", "writing-mode",
        "animation-play-state", "border-bottom-style", "border-right-width", "column-rule-style", "font-stretch", "image-rendering", "markerEnd", "MozAppearance", "MozImageRegion", "outline", "place-items", "scrollPaddingRight", "text-justify", "webkitAnimationIterationCount", "-webkit-box-shadow", "WebkitOrder", "x",
        "animationTimingFunction", "borderBottomWidth", "borderSpacing", "columnRuleWidth", "fontStyle", "imeMode", "marker-end", "-moz-appearance", "-moz-image-region", "outlineColor", "placeSelf", "scroll-padding-right", "textOrientation", "-webkit-animation-iteration-count", "WebkitBoxSizing", "webkitOrder", "y",
        "animation-timing-function", "border-bottom-width", "border-spacing", "column-rule-width", "font-style", "ime-mode", "markerMid", "MozBackfaceVisibility", "MozMarginEnd", "outline-color", "place-self", "scrollPaddingTop", "text-orientation", "WebkitAnimationName", "webkitBoxSizing", "-webkit-order", "zIndex",
        "backfaceVisibility", "borderCollapse", "borderStartEndRadius", "columns", "fontSynthesis", "inlineSize", "marker-mid", "-moz-backface-visibility", "-moz-margin-end", "outlineOffset", "pointerEvents", "scroll-padding-top", "textOverflow", "webkitAnimationName", "-webkit-box-sizing", "WebkitPerspective", "z-index",
        "backface-visibility", "border-collapse", "border-start-end-radius", "columnWidth", "font-synthesis", "inline-size", "markerStart", "MozBorderEnd", "MozMarginStart", "outline-offset", "pointer-events", "scrollSnapAlign", "text-overflow", "-webkit-animation-name", "WebkitFilter", "webkitPerspective",
        "background", "borderColor", "borderStartStartRadius", "column-width", "fontVariant", "inset", "marker-start", "-moz-border-end", "-moz-margin-start", "outlineStyle", "position", "scroll-snap-align", "textRendering", "WebkitAnimationPlayState", "webkitFilter", "-webkit-perspective",
        "backgroundAttachment", "border-color", "border-start-start-radius", "contain", "font-variant", "insetBlock", "mask", "MozBorderEndColor", "MozOrient", "outline-style", "quotes", "scrollSnapType", "text-rendering", "webkitAnimationPlayState", "-webkit-filter", "WebkitPerspectiveOrigin",
        "background-attachment", "borderEndEndRadius", "borderStyle", "content", "fontVariantAlternates", "inset-block", "maskClip", "-moz-border-end-color", "-moz-orient", "outlineWidth", "r", "scroll-snap-type", "textShadow", "-webkit-animation-play-state", "WebkitFlex", "webkitPerspectiveOrigin",
        "backgroundBlendMode", "border-end-end-radius", "border-style", "counterIncrement", "font-variant-alternates", "insetBlockEnd", "mask-clip", "MozBorderEndStyle", "MozOutlineRadius", "outline-width", "resize", "shapeImageThreshold", "text-shadow", "WebkitAnimationTimingFunction", "webkitFlex", "-webkit-perspective-origin",
        "background-blend-mode", "borderEndStartRadius", "borderTop", "counter-increment", "fontVariantCaps", "inset-block-end", "maskComposite", "-moz-border-end-style", "-moz-outline-radius", "overflow", "right", "shape-image-threshold", "textTransform", "webkitAnimationTimingFunction", "-webkit-flex", "WebkitTextFillColor",
        "backgroundClip", "border-end-start-radius", "border-top", "counterReset", "font-variant-caps", "insetBlockStart", "mask-composite", "MozBorderEndWidth", "MozOutlineRadiusBottomleft", "overflowAnchor", "rowGap", "shapeMargin", "text-transform", "-webkit-animation-timing-function", "WebkitFlexBasis", "webkitTextFillColor",
        "background-clip", "borderImage", "borderTopColor", "counter-reset", "fontVariantEastAsian", "inset-block-start", "maskImage", "-moz-border-end-width", "-moz-outline-radius-bottomleft", "overflow-anchor", "row-gap", "shape-margin", "top", "WebkitAppearance", "webkitFlexBasis", "-webkit-text-fill-color",
        "backgroundColor", "border-image", "border-top-color", "counterSet", "font-variant-east-asian", "insetInline", "mask-image", "MozBorderImage", "MozOutlineRadiusBottomright", "overflowBlock", "rubyAlign", "shapeOutside", "touchAction", "webkitAppearance", "-webkit-flex-basis", "WebkitTextSizeAdjust",
        "background-color", "borderImageOutset", "borderTopLeftRadius", "counter-set", "fontVariantLigatures", "inset-inline", "maskMode", "-moz-border-image", "-moz-outline-radius-bottomright", "overflow-block", "ruby-align", "shape-outside", "touch-action", "-webkit-appearance", "WebkitFlexDirection", "webkitTextSizeAdjust",
        "backgroundImage", "border-image-outset", "border-top-left-radius", "cssFloat", "font-variant-ligatures", "insetInlineEnd", "mask-mode", "MozBorderStart", "MozOutlineRadiusTopleft", "overflowInline", "rubyPosition", "shapeRendering", "transform", "WebkitBackfaceVisibility", "webkitFlexDirection", "-webkit-text-size-adjust",
        "background-image", "borderImageRepeat", "borderTopRightRadius", "cursor", "fontVariantNumeric", "inset-inline-end", "maskOrigin", "-moz-border-start", "-moz-outline-radius-topleft", "overflow-inline", "ruby-position", "shape-rendering", "transformBox", "webkitBackfaceVisibility", "-webkit-flex-direction", "WebkitTextStroke",
        "backgroundOrigin", "border-image-repeat", "border-top-right-radius", "cx", "font-variant-numeric", "insetInlineStart", "mask-origin", "MozBorderStartColor", "MozOutlineRadiusTopright", "overflowWrap", "rx", "stopColor", "transform-box", "-webkit-backface-visibility", "WebkitFlexFlow", "webkitTextStroke",
        "background-origin", "borderImageSlice", "borderTopStyle", "cy", "fontVariantPosition", "inset-inline-start", "maskPosition", "-moz-border-start-color", "-moz-outline-radius-topright", "overflow-wrap", "ry", "stop-color", "transformOrigin", "WebkitBackgroundClip", "webkitFlexFlow", "-webkit-text-stroke",
        "backgroundPosition", "border-image-slice", "border-top-style", "direction", "font-variant-position", "isolation", "mask-position", "MozBorderStartStyle", "MozPaddingEnd", "overflowX", "scrollbarColor", "stopOpacity", "transform-origin", "webkitBackgroundClip", "-webkit-flex-flow", "WebkitTextStrokeColor",
        "background-position", "borderImageSource", "borderTopWidth", "display", "fontVariationSettings", "justifyContent", "maskPositionX", "-moz-border-start-style", "-moz-padding-end", "overflow-x", "scrollbar-color", "stop-opacity", "transformStyle", "-webkit-background-clip", "WebkitFlexGrow", "webkitTextStrokeColor",
        "backgroundPositionX", "border-image-source", "border-top-width", "dominantBaseline", "font-variation-settings", "justify-content", "mask-position-x", "MozBorderStartWidth", "MozPaddingStart", "overflowY", "scrollbarWidth", "stroke", "transform-style", "WebkitBackgroundOrigin", "webkitFlexGrow", "-webkit-text-stroke-color",
        "background-position-x", "borderImageWidth", "borderWidth", "dominant-baseline", "fontWeight", "justifyItems", "maskPositionY", "-moz-border-start-width", "-moz-padding-start", "overflow-y", "scrollbar-width", "strokeDasharray", "transition", "webkitBackgroundOrigin", "-webkit-flex-grow", "WebkitTextStrokeWidth",
        "backgroundPositionY", "border-image-width", "border-width", "emptyCells", "font-weight", "justify-items", "mask-position-y", "MozBoxAlign", "MozPerspective", "overscrollBehavior", "scrollBehavior", "stroke-dasharray", "transitionDelay", "-webkit-background-origin", "WebkitFlexShrink", "webkitTextStrokeWidth",
        "background-position-y", "borderInline", "bottom", "empty-cells", "gap", "justifySelf", "maskRepeat", "-moz-box-align", "-moz-perspective", "overscroll-behavior", "scroll-behavior", "strokeDashoffset", "transition-delay", "WebkitBackgroundSize", "webkitFlexShrink", "-webkit-text-stroke-width",
        "backgroundRepeat", "border-inline", "boxDecorationBreak", "fill", "grid", "justify-self", "mask-repeat", "MozBoxDirection", "MozPerspectiveOrigin", "overscrollBehaviorX", "scrollMargin", "stroke-dashoffset", "transitionDuration", "webkitBackgroundSize", "-webkit-flex-shrink", "WebkitTransform",
        "background-repeat", "borderInlineColor", "box-decoration-break", "fillOpacity", "gridArea", "left", "maskSize", "-moz-box-direction", "-moz-perspective-origin", "overscroll-behavior-x", "scroll-margin", "strokeLinecap", "transition-duration", "-webkit-background-size", "WebkitFlexWrap", "webkitTransform",
        "backgroundSize", "border-inline-color", "boxShadow", "fill-opacity", "grid-area", "letterSpacing", "mask-size", "MozBoxFlex", "MozStackSizing", "overscrollBehaviorY", "scrollMarginBlock", "stroke-linecap", "transitionProperty", "WebkitBorderBottomLeftRadius", "webkitFlexWrap", "-webkit-transform",
        "background-size", "borderInlineEnd", "box-shadow", "fillRule", "gridAutoColumns", "letter-spacing", "maskType", "-moz-box-flex", "-moz-stack-sizing", "overscroll-behavior-y", "scroll-margin-block", "strokeLinejoin", "transition-property", "webkitBorderBottomLeftRadius", "-webkit-flex-wrap", "WebkitTransformOrigin",
        "blockSize", "border-inline-end", "boxSizing", "fill-rule", "grid-auto-columns", "lightingColor", "mask-type", "MozBoxOrdinalGroup", "MozTabSize", "padding", "scrollMarginBlockEnd", "stroke-linejoin", "transitionTimingFunction", "-webkit-border-bottom-left-radius", "WebkitJustifyContent", "webkitTransformOrigin",
        "block-size", "borderInlineEndColor", "box-sizing", "filter", "gridAutoFlow", "lighting-color", "maxBlockSize", "-moz-box-ordinal-group", "-moz-tab-size", "paddingBlock", "scroll-margin-block-end", "strokeMiterlimit", "transition-timing-function", "WebkitBorderBottomRightRadius", "webkitJustifyContent", "-webkit-transform-origin",
        "border", "border-inline-end-color", "breakAfter", "flex", "grid-auto-flow", "lineBreak", "max-block-size", "MozBoxOrient", "MozTextSizeAdjust", "padding-block", "scrollMarginBlockStart", "stroke-miterlimit", "unicodeBidi", "webkitBorderBottomRightRadius", "-webkit-justify-content", "WebkitTransformStyle",
        "borderBlock", "borderInlineEndStyle", "break-after", "flexBasis", "gridAutoRows", "line-break", "maxHeight", "-moz-box-orient", "-moz-text-size-adjust", "paddingBlockEnd", "scroll-margin-block-start", "strokeOpacity", "unicode-bidi", "-webkit-border-bottom-right-radius", "WebkitLineClamp", "webkitTransformStyle",
        "border-block", "border-inline-end-style", "breakBefore", "flex-basis", "grid-auto-rows", "lineHeight", "max-height", "MozBoxPack", "MozTransform", "padding-block-end", "scrollMarginBottom", "stroke-opacity", "userSelect", "WebkitBorderImage", "webkitLineClamp", "-webkit-transform-style",
        "borderBlockColor", "borderInlineEndWidth", "break-before", "flexDirection", "gridColumn", "line-height", "maxInlineSize", "-moz-box-pack", "-moz-transform", "paddingBlockStart", "scroll-margin-bottom", "strokeWidth", "user-select", "webkitBorderImage", "-webkit-line-clamp", "WebkitTransition",
        "border-block-color", "border-inline-end-width", "breakInside", "flex-direction", "grid-column", "listStyle", "max-inline-size", "MozBoxSizing", "MozTransformOrigin", "padding-block-start", "scrollMarginInline", "stroke-width", "vectorEffect", "-webkit-border-image", "WebkitMask", "webkitTransition",
        "borderBlockEnd", "borderInlineStart", "break-inside", "flexFlow", "gridColumnEnd", "list-style", "maxWidth", "-moz-box-sizing", "-moz-transform-origin", "paddingBottom", "scroll-margin-inline", "tableLayout", "vector-effect", "WebkitBorderRadius", "webkitMask", "-webkit-transition",
        "border-block-end", "border-inline-start", "captionSide", "flex-flow", "grid-column-end", "listStyleImage", "max-width", "MozColumnCount", "MozTransformStyle", "padding-bottom", "scrollMarginInlineEnd", "table-layout", "verticalAlign", "webkitBorderRadius", "-webkit-mask", "WebkitTransitionDelay",
        "borderBlockEndColor", "borderInlineStartColor", "caption-side", "flexGrow", "gridColumnGap", "list-style-image", "minBlockSize", "-moz-column-count", "-moz-transform-style", "paddingInline", "scroll-margin-inline-end", "textAlign", "vertical-align", "-webkit-border-radius", "WebkitMaskClip", "webkitTransitionDelay",
        "border-block-end-color", "border-inline-start-color", "caretColor", "flex-grow", "grid-column-gap", "listStylePosition", "min-block-size", "MozColumnFill", "MozTransition", "padding-inline", "scrollMarginInlineStart", "text-align", "visibility", "WebkitBorderTopLeftRadius", "webkitMaskClip", "-webkit-transition-delay",
        "borderBlockEndStyle", "borderInlineStartStyle", "caret-color", "flexShrink", "gridColumnStart", "list-style-position", "minHeight", "-moz-column-fill", "-moz-transition", "paddingInlineEnd", "scroll-margin-inline-start", "textAlignLast", "WebkitAlignContent", "webkitBorderTopLeftRadius", "-webkit-mask-clip", "WebkitTransitionDuration",
        "border-block-end-style", "border-inline-start-style", "clear", "flex-shrink", "grid-column-start", "listStyleType", "min-height", "MozColumnGap", "MozTransitionDelay", "padding-inline-end", "scrollMarginLeft", "text-align-last", "webkitAlignContent", "-webkit-border-top-left-radius", "WebkitMaskComposite", "webkitTransitionDuration",
        "borderBlockEndWidth", "borderInlineStartWidth", "clip", "flexWrap", "gridGap", "list-style-type", "minInlineSize", "-moz-column-gap", "-moz-transition-delay", "paddingInlineStart", "scroll-margin-left", "textAnchor", "-webkit-align-content", "WebkitBorderTopRightRadius", "webkitMaskComposite", "-webkit-transition-duration",
        "border-block-end-width", "border-inline-start-width", "clipPath", "flex-wrap", "grid-gap", "margin", "min-inline-size", "MozColumnRule", "MozTransitionDuration", "padding-inline-start", "scrollMarginRight", "text-anchor", "WebkitAlignItems", "webkitBorderTopRightRadius", "-webkit-mask-composite", "WebkitTransitionProperty"
    ],
    getid : function () {
        return DOMElement.idcount++;
    },

    genCSSName : function () {
        return "DOMElement_css_" + DOMElement.getid();
    },

    genClassName : function () {
        return "DOMElement_class_" + DOMElement.getid();
    },

    head : function () {
        return document.getElementsByTagName("HEAD")[0];
    },

    body : function () {
        var x = document.getElementsByTagName("BODY");
        if (x == null) return null;
        return x[0];
        //return document.body;
    },

    value : function (id) {
        var x = document.getElementById(id);
        if (x == null) return null;
        return x.value;
    },

    getClipboardData : function (event) {
        var clipboardData;
        if (event !== undefined) {
            clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData;
        }
        else {
            clipboardData = window.clipboardData;
        }
        clipboardData.getData("Text");
    },

    setClipboardData : function (event, value) {
        var clipboardData;
        if (value !== undefined) {
            clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData;
        }
        else {
            clipboardData = window.clipboardData;
            value = event;
        }
        clipboardData.setData('text/html', value);
    },

    focus : function (id, retry) {
        var x = document.getElementById(id);
        if (x == null) {
            if (retry == true) {
                setTimeout(function (id) {
                    return function () {
                        DOMElement.focus(id);
                    }
                } (id), 100);
            }
            return;
        }
        x.focus();
        return x;
    },

    emptyParam : function () {
        var x = {
            attrs: {style: {}},
            children: []
        };
        return x;
    },

    removeAllChildren : function (element) {
        if (element === undefined) return true;
        if (element == null) return true;
        if (EncodingClass.type.isString(element)) return DOMElement.removeAllChildren(document.getElementById(element));
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }
        return true;
    },

    cssText : function (classList, tagName, content) {
        var i, st = "";
        if (tagName === undefined) {
            content = classList;
            classList = [];
            tagName = "";
        }
        else if (content === undefined) {
            content = tagName;
            if (EncodingClass.type.isArray(classList)) {
                tagName = "";
            }
            else {
                tagName = classList;
                classList = [];
            }
        }
        if (content === undefined) return "";
        for (i = 0; i < classList.length; i++) {
            st += "." + classList[i] + " ";
        }
        st += tagName + " { ";
        for (i = 0; i < content.length; i++) {
            if (EncodingClass.type.isArray(content[i])) {
                st += content[i][0] + ": " + content[i][1] + "; ";
            }
            else if (EncodingClass.type.isString(content[i])) {
                st += content[i] + "\r\n";
            }
        }
        st += "}\r\n";
        return st;
    },

    loadCSS : function (text) {
        var i, st;
        if (EncodingClass.type.isArray(text)) {
            st = "";
            for (i = 0; i < text.length; i++) {
                st += text[i];
            }
            return DOMElement.loadCSS(st);
        }
        var xurl = window.URL || window.webkitURL;
        if (xurl == null) return false;
        var blob = new Blob([text], {type: 'text/css'});
        if (blob == null) return false;
        var link  = document.createElement('link');
        link.rel  = "stylesheet";
        link.type = "text/css";
        link.href = xurl.createObjectURL(blob);
        link.media = 'all';
        DOMElement.head().appendChild(link);
        return true;
    },

    loadScript : function (text) {
        var i, st;
        if (EncodingClass.type.isArray(text)) {
            st = "";
            for (i = 0; i < text.length; i++) {
                st += text[i];
            }
            return DOMElement.loadScript(st);
        }
        var xurl = window.URL || window.webkitURL;
        if (xurl == null) return false;
        var blob = new Blob([text], {type: 'text/javascript'});
        if (blob == null) return false;
        var link  = document.createElement('script');
        link.src  = xurl.createObjectURL(blob);
        DOMElement.head().appendChild(link);
        return true;
    },

    svg2img: function (element, type) {
        var svgString = new XMLSerializer().serializeToString(element);

        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var DOMURL = self.URL || self.webkitURL || self;
        var img = new Image();
        var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
        var url = DOMURL.createObjectURL(svg);
        img.src = url;
        if (type == "image") {
            return img;
        }
        else {
            ctx.drawImage(img, 0, 0);
            var png = canvas.toDataURL("image/png");
            DOMURL.revokeObjectURL(png);
            return png;
        }
    },

    print : function (params) {
        var st = "<!DOCTYPE html><html><head>";
        var i, x;
        var alink = document.createElement("a");
        var absolutePath = function(href) {
            if (href.substr(0, 4).toLowerCase() == "data") return href;
            alink.href = href;
            return (alink.protocol+"//"+alink.host+alink.pathname+alink.search+alink.hash);
        }
        st += "<meta charset=\"utf-8\"/>";
        if (params.title !== undefined) st += "<title>" + params.title  + "</title>";
        if (params.css !== undefined) {
            for (i = 0; i < params.css.length; i++) {
                st += "<link src=\"" + params.css[i] + "\">\r\n";
            }
        }
        else {
            for (i = 0; i < document.head.childNodes.length; i++) {
                if (EncodingClass.type.isString(document.head.childNodes[i].localName)) {
                    if (document.head.childNodes[i].localName.toLowerCase() == "link") st += document.head.childNodes[i].outerHTML + "\r\n";
                }
            }
        }
        if (params.style !== undefined) {

        }
        else {
            for (i = 0; i < document.head.childNodes.length; i++) {
                if (EncodingClass.type.isString(document.head.childNodes[i].localName)) {
                    if (document.head.childNodes[i].localName.toLowerCase() == "style") st += document.head.childNodes[i].outerHTML + "\r\n";
                }
            }
        }
        st += "<style>\r\n@page { size: auto;  margin: 0mm; }\r\n</style>\r\n";
        st += "<script type=\"text/javascript\">\r\n";
        st += "function init() {\r\nvar stacks = [];\r\n";
        var gencode = function (element, gencode) {
            var i, j, m, n = element.childNodes.length;
            var st = "stacks.push(document.createElement('" + element.tagName + "'));\r\n";
            var x;
            /*
            if (element.style !== undefined) {
                m = DOMElement.stylesList.length;
                for (j = 0; j < m; j++) {
                    x = element.style[DOMElement.stylesList[j]];
                    if ((x !== undefined) && (x != "")) {
                        if (EncodingClass.type.isString(x)) {
                            st += "stacks[stacks.length - 1].style[\"" + DOMElement.stylesList[j] + "\"] = " + "\"" + EncodingClass.string.addslashes(x) + "\";\r\n";
                        }
                        else {
                            st += "stacks[stacks.length - 1].style[\"" + DOMElement.stylesList[j] + "\"] = " + x + ";\r\n";
                        }
                    }
                }
            }
            */
            if (element.attributes !== undefined) {
                m = element.attributes.length;
                for (j = 0; j < m; j++) {
                    x = element.attributes[j].value;
                    switch (element.attributes[j].name) {
                        case "src":
                        case "href":
                            st += "stacks[stacks.length - 1].setAttribute(\"" + element.attributes[j].name + "\", " + "\"" + EncodingClass.string.addslashes(absolutePath(x)) + "\");\r\n";
                            break;
                        default:
                            if (EncodingClass.type.isString(x)) {
                                st += "stacks[stacks.length - 1].setAttribute(\"" + element.attributes[j].name + "\", " + "\"" + EncodingClass.string.addslashes(x) + "\");\r\n";
                            }
                            else {
                                st += "stacks[stacks.length - 1].setAttribute(\"" + element.attributes[j].name + "\", " + x + ");\r\n";
                            }
                    }
                }
            }
            if (element.classList.length > 0) {
                for (i = 0; i < element.classList.length; i++) {
                    st += "stacks[stacks.length - 1].classList.add(\"" + element.classList[i] + "\");\r\n";
                }
            }
            if (element.tagName.toLowerCase() == "svg") {
                /*
                x = DOMElement.svg2img(element);
                st += "stacks[stacks.length - 1] = document.createElement(\"img\");\r\n";
                st += "stacks[stacks.length - 1].src = \"" + EncodingClass.string.addslashes(x) + "\";\r\n";
                */
                x = element.outerHTML;
                st += "stacks[stacks.length - 1].innerHTML = \"" + EncodingClass.string.addslashes(x) + "\";\r\n";
                st += "stacks[stacks.length - 1] = stacks[stacks.length - 1].childNodes[0];\r\n";
            }
            else if (n > 0) {
                for (i = 0; i < n; i++) {
                    if (element.childNodes[i].nodeType == Node.TEXT_NODE) {
                        st += "stacks[stacks.length - 1].appendChild(document.createTextNode(\"" + EncodingClass.string.addslashes(element.childNodes[i].nodeValue) + "\"));\r\n";
                    }
                    else {
                        st += gencode(element.childNodes[i], gencode);
                        st += "stacks[stacks.length - 2].appendChild(stacks[stacks.length - 1]);\r\n";
                        st += "stacks.pop();\r\n";
                    }
                }
            }
            return st;
        };
        st += gencode(params.element, gencode);
        st += "document.getElementsByTagName(\"BODY\")[0].appendChild(stacks[0]);\r\n";
        st += "setTimeout(\"window.print();\", 500);\r\n";
        st += "}\r\n";
        st += "</" + "script></head><body onload=\"init();\" style=\"overflow: visible;\"></body></html>\r\n";
        var xurl = window.URL || window.webkitURL;
        if (xurl == null) return false;
        var blob = new Blob([st], {type: 'text/html'});
        if (blob == null) return false;
        var link  = document.createElement('iframe');
        if (params.debug === undefined) {
            link.style.display = "none";
        }
        else {
            link.style.width = "1920px";
            link.style.height = "1080px";
        }
        link.src = xurl.createObjectURL(blob);
        DOMElement.body().appendChild(link);
        if (params.debug === undefined) {
            setTimeout(function (link) {
                return function () {
                    DOMElement.body().removeChild(link);
                }
            } (link), 10000);
        }
    },

    create : function (params) {
        var r, f, i, j, n, n2, keys, keys2, t, x, cn;
        if (EncodingClass.type.isString(params)) return DOMElement.textNode(params);
        r = document.createElement(params.elementType);
        // type, attrs, children
        if (params.attrs != undefined) {
            if (EncodingClass.type.isArray(params.attrs)) {
                n = params.attrs.length;
                for (i = 0; i < n; i++) {
                    r[params.attrs[i].name] = params.attrs[i].value;
                }
            }
            else {
                keys = Object.keys(params.attrs);
                n = keys.length;
                for (i = 0; i < n; i++) {
                    switch (keys[i]) {
                        case "className":
                            if (EncodingClass.type.isString(params.attrs.className)) {
                                r.className = params.attrs.className;
                            }
                            else if (EncodingClass.type.isArray(params.attrs.className)) {
                                cn = "";
                                for (j = 0; j < params.attrs.className.length; j++) {
                                    if (j > 0) cn += " ";
                                    cn += params.attrs.className[j];
                                }
                                if (cn != "") r.className = cn;
                            }
                            break;
                        case "style":
                            keys2 = Object.keys(params.attrs.style);
                            n2 = keys2.length;
                            for (j = 0; j < n2; j++) {
                                r.style[keys2[j]] = params.attrs.style[keys2[j]];
                            }
                            break;
                        case "dataset":
                            keys2 = Object.keys(params.attrs.dataset);
                            n2 = keys2.length;
                            for (j = 0; j < n2; j++) {
                                r.dataset[keys2[j]] = params.attrs.dataset[keys2[j]];
                            }
                            break;
                        case "onclick":
                        case "oncontextmenu":
                        case "ondblclick":
                        case "onmousedown":
                        case "onmouseenter":
                        case "onmouseleave":
                        case "onmousemove":
                        case "onmouseover":
                        case "onmouseout":
                        case "onmouseup":
                        case "onkeydown":
                        case "onkeypress":
                        case "onkeyup":
                        case "onabort":
                        case "onbeforeunload":
                        case "onerror":
                        case "onhashchange":
                        case "onload":
                        case "onpageshow":
                        case "onpagehide":
                        case "onresize":
                        case "onscroll":
                        case "onunload":
                        case "onblur":
                        case "onchange":
                        case "onfocus":
                        case "onfocusin":
                        case "onfocusout":
                        case "oninput":
                        case "oninvalid":
                        case "onreset":
                        case "onsearch":
                        case "onselect":
                        case "onsubmit":
                        case "ondrag":
                        case "ondragend":
                        case "ondragenter":
                        case "ondragleave":
                        case "ondragover":
                        case "ondragstart":
                        case "ondrop":
                        case "oncopy":
                        case "oncut":
                        case "onpaste":
                        case "onafterprint":
                        case "onbeforeprint":
                        case "onabort":
                        case "oncanplay":
                        case "oncanplaythrough":
                        case "ondurationchange":
                        case "onemptied":
                        case "onended":
                        case "onerror":
                        case "onloadeddata":
                        case "onloadedmetadata":
                        case "onloadstart":
                        case "onpause":
                        case "onplay":
                        case "onplaying":
                        case "onprogress":
                        case "onratechange":
                        case "onseeked":
                        case "onseeking":
                        case "onstalled":
                        case "onsuspend":
                        case "ontimeupdate":
                        case "onvolumechange":
                        case "onwaiting":
                        case "animationend":
                        case "animationiteration":
                        case "animationstart":
                        case "transitionend":
                        case "onerror":
                        case "onmessage":
                        case "onopen":
                        case "onmessage":
                        case "onmousewheel":
                        case "ononline":
                        case "onoffline":
                        case "onpopstate":
                        case "onshow":
                        case "onstorage":
                        case "ontoggle":
                        case "onwheel":
                        case "ontouchcancel":
                        case "ontouchend":
                        case "ontouchmove":
                        case "ontouchstart":
                        // Extra defined event
                        case "onleave":
                        case "oninterval":
                            if (EncodingClass.type.isString(params.attrs[keys[i]])) {
                                f = new Function ("event", "me", params.attrs[keys[i]]);
                                r[keys[i]] = function (func, me, type) {
                                    return function (event) {
                                        if ((event !== undefined) && (event !== null)) {
                                            return func(event, me)
                                        }
                                        else {
                                            return func({
                                                bubbles: false,
                                                cancelBubble: false,
                                                cancelable: false,
                                                composed: false,
                                                currentTarget: me,
                                                defaultPrevented: false,
                                                eventPhase: 2,
                                                isTrusted: true,
                                                path: me,
                                                returnValue: true,
                                                srcElement: me,
                                                target: me,
                                                timeStamp: (new Date()).getTime() - DOMElement.startTimeStamp,
                                                type: type
                                            }, me);
                                        }
                                    }
                                } (f, r, keys[i].substr(2));
                            }
                            else if (EncodingClass.type.isFunction(params.attrs[keys[i]])) {
                                r[keys[i]] = function (func, me, type) {
                                    return function (event) {
                                        if ((event !== undefined) && (event !== null)) {
                                            return func(event, me)
                                        }
                                        else {
                                            return func({
                                                bubbles: false,
                                                cancelBubble: false,
                                                cancelable: false,
                                                composed: false,
                                                currentTarget: me,
                                                defaultPrevented: false,
                                                eventPhase: 2,
                                                isTrusted: true,
                                                path: me,
                                                returnValue: true,
                                                srcElement: me,
                                                target: me,
                                                timeStamp: (new Date()).getTime() - DOMElement.startTimeStamp,
                                                type: type
                                            }, me);
                                        }
                                    }
                                } (params.attrs[keys[i]], r, keys[i].substr(2));
                            }
                            else {
                                r[keys[i]] = params.attrs[keys[i]];
                            }
                            break;
                        case "properties":
                            keys2 = Object.keys(params.attrs.properties);
                            n2 = keys2.length;
                            for (j = 0; j < n2; j++) {
                                Object.defineProperty(r, keys2[j], {
                                    set : function (me, func) {
                                        if (EncodingClass.type.isFunction(func)) {
                                            return function (value) {
                                                func(value, me);
                                            }
                                        }
                                        else {
                                            return function (value) { // do nothing
                                            }
                                        }
                                    } (r, params.attrs.properties[keys2[j]].setter),
                                    get: function (me, func) {
                                        if (EncodingClass.type.isFunction(func)) {
                                            return function () {
                                                return func(me);
                                            }
                                        }
                                        else {
                                            return function() {
                                                return null;
                                            }
                                        }
                                    } (r, params.attrs.properties[keys2[j]].getter)
                                });
                            }
                            break;
                        default:
                            r[keys[i]] = params.attrs[keys[i]];
                            break;
                    }
                }
            }
        }
        if (params.events !== undefined) {
            keys2 = Object.keys(params.events);
            n2 = keys.length;
            for (j = 0; j < n2; j++) {
                if (EncodingClass.type.isString(params.events[keys2[j]])) {
                    x = new Function(params.events[keys2[j]]);
                }
                else {
                    x = params.events[keys2[j]];
                }
                t = function (host, f) {
                    return function (e) {
                        e.eventOwner = host;
                        return f(e);
                    }
                } (r, x);
                if (r.addEventListener) {
                    r.addEventListener(keys2[j], t);
                }
                else if (r.attachEvent) {
                    r.attachEvent("on" + keys2[j], t);
                }
            }
        }
        if (params.children !== undefined) {
            if (!EncodingClass.type.isArray(params.children)) {
                params.children = [params.children];
            }
            n = params.children.length;
            for (i = 0; i < n; i++) {
                if (EncodingClass.type.isString(params.children[i])) {
                    if (n == 1) {
                        r.innerHTML = params.children[i];
                    }
                    else {
                        x = DOMElement.span({innerHTML: params.children[i]});
                        for (j = 0; j < x.childNodes.length; j++) {
                            r.appendChild(x.childNodes[j]);
                        }
                        x = null;
                    }
                }
                else {
                    r.appendChild(params.children[i]);
                }
            }
        }
        else if (params.innerHTML !== undefined) {
            r.innerHTML = params.innerHTML;
        }
        else if (params.code !== undefined) {
            if (params.elementType.toLowerCase() != "textarea") {
                x = (params.code + "")
                .split(" ").join("\xa0")
                .split("\t").join(String.fromCharCode(8195))
                .split("\r").join("")
                .split("\n");
                for (i = 0; i < x.length; i++) {
                    if (i > 0) r.appendChild(DOMElement.br());
                    r.appendChild(document.createTextNode(x[i]));
                }
            }
            else {
                r.appendChild(document.createTextNode(params.code + ""));
            }
        }
        else if (params.text !== undefined) {
            if (params.elementType.toLowerCase() != "textarea") {
                x = (params.text + "")
                .split("\t").join(String.fromCharCode(8195))
                .split("\r").join("")
                .split("\n");
                for (i = 0; i < x.length; i++) {
                    if (i > 0) r.appendChild(DOMElement.br());
                    r.appendChild(document.createTextNode(x[i]));
                }
            }
            else {
                r.appendChild(document.createTextNode(params.text + ""));
            }
        }
        r.localData = {
            resizeParams : {
                w: r.offsetWidth,
                h: r.offsetHeight
            }
        };
        r.toggle = function (me) {
            return function () {
                me.classList.toggle("hiddenElementClass");
            }
        } (r);
        return r;
    },

    textNode : function (text) {
        return document.createTextNode(text);
    },

    duplicateObj : function (obj, exceptionKeys) {
        var x = {};
        var i, j, k, n, m, keys;
        if (exceptionKeys === undefined) exceptionKeys = [];
        m = exceptionKeys.length;
        keys = Object.keys(obj);
        n = keys.length;
        for (i = 0; i < n; i++) {
            k = 1;
            for (j = 0; j < m; j++) {
                if (keys[i] == exceptionKeys[j]) {
                    k = 0;
                    break;
                }
            }
            if (k == 1) x[keys[i]] = obj[keys[i]];
        }
        return x;
    },

    inputdate : function (params) {
        var r = DOMElement.input(params);
        var m, d;
        r.type = "date";
        if (params.timevalue !== undefined) {
            m = (params.timevalue.getMonth() + 1) + "";
            if (m.length < 2) m = "0" + m;
            d = params.timevalue.getDate() + "";
            if (d.length < 2) d = "0" + d;
            r.value = params.timevalue.getFullYear() + "-" + m + "-" + d;
        }
        return r;
    },

    checkbox : function (params) {
        var x, z, rv;
        z = DOMElement.duplicateObj(params, ["text", "textcolor", "checked", "id"]);
        if (z.attrs === undefined) z.attrs = {};
        z.attrs.type = "checkbox";
        if (params.id !== undefined) z.attrs.id = params.id;
        if (params.checked !== undefined) z.attrs.checked = params.checked;
        if (z.attrs.style === undefined) z.attrs.style = {};
        if (z.attrs.style.cursor === undefined) z.attrs.style.cursor = "pointer";
        x = DOMElement.input(z);
        if (params.text === undefined) return x;
        if (params.textcolor === undefined) {
            z = {
                attrs: {
                    className: DOMElement.treetableclass.noselect,
                    style: {
                        border: 0,
                        padding: 0,
                        cursor: "pointer"
                    },
                    onclick: function (me) {
                        return function (event) {
                            me.click();
                            DOMElement.cancelEvent(event);
                            return false;
                        }
                    } (x)
                },
                text: params.text
            };
        }
        else {
            z = {
                attrs: {
                    className: DOMElement.treetableclass.noselect,
                    style: {
                        border: 0,
                        padding: 0,
                        textcolor: params.textcolor,
                        whiteSpace: "nowrap",
                        cursor: "pointer"
                    },
                    onclick: function (me) {
                        return function (event) {
                            me.click();
                            DOMElement.cancelEvent(event);
                            return false;
                        }
                    } (x)
                },
                text: params.text
            };
        }
        rv = DOMElement.table({
            attrs: {
                style: {
                    border: "0",
                    padding: "0",
                },
            },
            data: [[
                DOMElement.td({
                    attrs: {
                        style: {
                            border: "0",
                            padding: "0",
                        },
                    },
                    children: [x]
                }),
                {attrs: {style: {width: "5px", border: 0, padding: 0}}},
                 z
             ]]
        });
        rv.localData.content = x;
        Object.defineProperty(rv, "checked", {
            set: function (me) {
                return function (value) {
                    me.checked = value;
                }
            } (x),
            get: function (me) {
                return function () {
                    return me.checked;
                }
            } (x)
        });
        return rv;
    },

    resetClass : function (childrenList) {
        if (childrenList === undefined) return DOMElement.div({attrs: {className: "resetClass"}});
        if (EncodingClass.type.isArray(childrenList)) return DOMElement.div({attrs: {className: "resetClass"}, children: childrenList});
        if (EncodingClass.type.isString(childrenList)) return DOMElement.div({attrs: {className: "resetClass"}, text: childrenList});
        if (EncodingClass.type.isNumber(childrenList)) return DOMElement.div({attrs: {className: "resetClass"}, text: childrenList});
        if (childrenList.tagName !== undefined) return DOMElement.div({attrs: {className: "resetClass"}, children: [childrenList]});
        return DOMElement.div({attrs: {className: "resetClass"}});
    },

    combobox : function (params) {
        var x, i, k, sel = undefined, z;
        x = DOMElement.select(DOMElement.duplicateObj(params, ["list", "selectedvalue"]));
        sel = params.selectedvalue + "";
        if (params.list !== undefined) {
            for (i = 0; i < params.list.length; i++) {
                z = {attrs: {value: params.list[i].value + ""}};
                if (sel !== undefined) {
                    if (sel == (params.list[i].value + "")) z.attrs.selected = true;
                }
                z = DOMElement.option(z);
                if (params.list[i].text !== undefined) z.appendChild(DOMElement.textNode(params.list[i].text));
                x.appendChild(z);
            }
        }
        return x;
    },

    combobox2 : function (params) {
        //var orc = DOMElement.combobox(DOMElement.duplicateObj(params, ["width", "height", "searchbox"]));
        var x, viewDiv, dropdownDiv, contentDiv, textView, symbol, button, sb, rowlist = [], content = [], selectedText = "", selectedIndex = -1, value = "";
        var width = 150, height = 120, searchbox = false, hassymbol = false, lineheight = 24;
        var toptions = [];
        var i, t, h;
        DOMElement.initSearchComboboxClass();
        if (params.width !== undefined) width = params.width;
        if (params.height !== undefined) height = params.height;
        if (params.searchbox !== undefined) searchbox = params.searchbox;
        if (params.lineheight !== undefined) lineheight = params.lineheight;
        for (i = 0; i < params.list.length; i++) {
            if (params.list[i].symbol !== undefined) {
                hassymbol = true;
                break;
            }
        }
        if (params.selectedIndex !== undefined) {
            selectedIndex = params.selectedIndex;
            selectedText = params.list[selectedIndex].text;
            value = params.list[selectedIndex].value;
        }

        for (i = 0; i < params.list.length; i++) {
            toptions.push({
                value: params.list[i].value,
                text:  params.list[i].text
            });
            if (params.selectedvalue !== undefined) {
                if ((params.selectedvalue + "") == (params.list[i].value + "")) {
                    selectedIndex = i;
                    selectedText = params.list[i].text;
                    value = params.list[i].value;
                }
            }
        }
        if ((params.selectedIndex === undefined) && (selectedIndex == -1) && (params.list.length > 0)) {
            selectedIndex = 0;
            selectedText = params.list[0].text;
            value = params.list[0].value;
        }
        for (i = 0; i < params.list.length; i++) {
            t = {
                attrs: {
                    className: [DOMElement.treetableclass.noselect, DOMElement.searchcomboboxclass.line],
                    style: {
                        width: width + "px",
                        height: lineheight + "px",
                        overflow: "visible",
                        cursor: "pointer",
                    }
                },
                children: []
            };
            if (hassymbol) {
                if (params.list[i].symbol !== undefined) {
                    if (params.list[i].symbol.tagName !== undefined) {
                        if (params.list[i].symbol.tagName.toLowerCase() == "td") {
                            t.children.push(params.list[i].symbol);
                        }
                        else {
                            t.children.push(DOMElement.td({children: [params.list[i].symbol]}));
                        }
                    }
                    else
                        t.children.push(DOMElement.td({children: [params.list[i].symbol]}));
                }
                else {
                    t.children.push(DOMElement.td());
                }
            }
            t.children.push(DOMElement.td({
                attrs: {style: {
                    paddingLeft: "5px",
                    whiteSpace: "nowrap",
                    overflowX: "visible",
                    font: "14px Helvetica, Arial, sans-serif",
                    textAlign: "left",
                }},
                text: params.list[i].text
            }));
            if (i == selectedIndex) t.attrs.className.push(DOMElement.searchcomboboxclass.selected);
            rowlist.push(DOMElement.tr(t));
        }
        t = [];
        textView = DOMElement.td({
            attrs: {
                className: DOMElement.treetableclass.noselect,
                style: {
                    overflow: "hidden",
                    border: "0",
                    height: lineheight + "px",
                    paddingLeft: "5px",
                    textAlign: "left"
                }
            },
            text: selectedText
        });
        t.push(textView);
        button = DOMElement.td({
            attrs: {
                className: [DOMElement.treetableclass.noselect],
                style: {
                    width: "16px",
                    border: "0",
                    whiteSpace: "nowrap",
                    position: "relative",
                    verticalAlign: "middle"
                },
            },
            children: [DOMElement.i({
                attrs: {
                    className: ["material-icons", DOMElement.treetableclass.rotate90],
                    style: {
                        fontSize: "16px",
                        position: "absolute",
                        marginTop: "-5px",
                        marginLeft: "3px",
                        left: 0
                    }
                },
                text: "play_arrow"
            })]
        });
        t.push(button);
        viewDiv = DOMElement.div({
            attrs: {
                style: {
                    border: "1px solid #aaa",
                    width: width + "px",
                    height: lineheight + "px",
                    paddingLeft: "2px",
                    paddingRight: "0px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    borderRadius: "2px",
                    cursor: "pointer",
                }
            },
            children: [DOMElement.table({
                attrs: {
                    style: {
                        width: (width-6) + "px",
                        height: (lineheight-2) + "px",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        border: "0"
                    }
                },
                data: [t]
            })]
        });
        if (searchbox) {
            sb = DOMElement.input({
                attrs: {
                    type: "text",
                    placeholder: "type here to search...",
                    value: "",
                    style: {
                        width: (width - 40) + "px",
                        height: (lineheight - 2) + "px",
                        font: "14px Helvetica, Arial, sans-serif",
                        border: "0",
                        outline: "0",
                        textIndent: "5px"
                    },
                },
            });
            contentDiv = DOMElement.div({
                attrs: {
                    style: {
                        padding: "0",
                        border: "0",
                        width: width + "px",
                        maxHeight: (height-lineheight - 16) + "px",
                        overflowX: "hidden",
                        overflowY: "auto",
                        backgroundColor: "white"
                    }
                },
                children: [DOMElement.table({
                    attrs: {
                        style: {
                            border: "0",
                            padding: "0",
                            width: width + "px",
                        }
                    },
                    data: rowlist
                })]
            });
            dropdownDiv = DOMElement.div({
                attrs: {
                    className: [DOMElement.searchcomboboxclass.hidden, DOMElement.searchcomboboxclass.holder],
                    style: {
                        width: width + "px",
                        maxHeight: height + "px",
                        overflow: "hidden",
                        border: "1px solid #aaa",
                        backgroundColor: "white",
                    }
                },
                children: [DOMElement.table({
                    data: [
                        [{attrs: {style: {
                            fontSize: "4px",
                            height: "6px",
                            border: "0px 1px 1px 1px solid #aaa",
                        }}}],
                        [DOMElement.div({
                            attrs: {
                                style: {
                                    marginLeft: "10px",
                                    padding: "0px 0px 0px 2px",
                                    border: "1px solid #003f7f",
                                    borderRadius: "2px",
                                    width: (width-20) + "px",
                                    height: lineheight + "px",
                                }
                            },
                            children: [DOMElement.table({
                                attrs: {
                                    width: "100%",
                                    style: {
                                        border: "0",
                                        padding: "0",
                                    }
                                },
                                data: [[

                                    {
                                        attrs: {
                                            style: {
                                                paddingRight: "2px",
                                                border: "0"
                                            }
                                        },
                                        children: [sb]
                                    },
                                    {
                                        attrs: {style: {width: "22px"}},
                                        children: [DOMElement.i({
                                            attrs: {
                                                className: ["fa fa-search", DOMElement.treetableclass.noselect],
                                                style: {
                                                    fontSize: "12px",
                                                    color: "#4f4f4f"
                                                }
                                            },
                                        })]
                                    }]]
                            })]
                        })],
                        [{attrs: {style: {
                            fontSize: "4px",
                            height: "6px"
                        }}}],
                        [contentDiv],
                    ]
                })]
            });
            sb.onclick = function (me) {
                return function (event) {
                    DOMElement.searchcomboboxclass.lastshown = me;
                }
            } (dropdownDiv);
            dropdownDiv.localData.searchbox = sb;
        }
        else {
            dropdownDiv = contentDiv = DOMElement.div({
                attrs: {
                    className: [DOMElement.searchcomboboxclass.hidden, DOMElement.searchcomboboxclass.holder],
                    style: {
                        padding: "0",
                        border: "1px solid #aaa",
                        width: width + "px",
                        maxHeight: height + "px",
                        overflowX: "hidden",
                        overflowY: "auto",
                        backgroundColor: "white",
                    }
                },
                children: [DOMElement.table({
                    attrs: {
                        style: {
                            border: "0",
                            padding: "0",
                            width: width + "px",
                        }
                    },
                    data: rowlist
                })]
            });
        }
        content = [viewDiv, dropdownDiv];
        x = DOMElement.div({
            attrs: {
                style: {
                    width: width + "px",
                    height: "24px",
                    overflow: "visible",
                    position: "relative"
                }
            },
            children: content
        });
        if (params.id !== undefined) x.id = params.id;
        x.options = toptions;
        x.localData.selectedIndex = selectedIndex;
        x.localData.textView = textView;
        Object.defineProperty(x, "selectedIndex", {
            set: function (me) {
                return function (value) {
                    var changed = false;
                    if (me.localData.selectedIndex != value) {
                        changed = true;
                    }
                    me.localData.selectedIndex = value;
                }
            } (x),
            get: function (me) {
                return function () {
                    return me.localData.selectedIndex;
                }
            } (x)
        });
        Object.defineProperty(x, "value", {
            set: function (me) {
                return function (value) {
                    var i;
                    value = value + "z";
                    for (i = 0; i < me.options.length; i++) {
                        if (me.options[i].value + "z" == value) {
                            me.selectedIndex = i;
                            return;
                        }
                    }
                }
            } (x),
            get: function (me) {
                return function () {
                    if (me.localData.selectedIndex == -1) return "";
                    return me.options[me.localData.selectedIndex].value;
                }
            } (x)
        });
        Object.defineProperty(x, "selectedText", {
            set: function (me) {
                return function (value) {
                }
            } (x),
            get: function (me) {
                return function () {
                    return me.options[me.localData.selectedIndex].text;
                }
            } (x)
        });
        x.setValue = function (me) {
            return function (value) {
                me.value = value;
            }
        } (x);

        x.localData.selectedIndex = selectedIndex;
        x.localData.rowlist = rowlist;
        x.localData.content = contentDiv;
        viewDiv.onclick = function (root, me) {
            return function (event) {
                var i;
                me.classList.toggle(DOMElement.searchcomboboxclass.display);
                me.classList.toggle(DOMElement.searchcomboboxclass.hidden);
                if (me.classList.contains(DOMElement.searchcomboboxclass.display)) {
                    DOMElement.searchcomboboxclass.lastshown = me;
                    if (me.localData.searchbox !== undefined) {
                        me.localData.searchbox.value = "";
                        me.localData.searchbox.focus();
                        for (i = 0; i < root.options.length; i++) {
                            if (root.localData.rowlist[i].classList.contains(DOMElement.searchcomboboxclass.hidden))
                                root.localData.rowlist[i].classList.remove(DOMElement.searchcomboboxclass.hidden);
                        }
                    }
                    if (root.localData.selectedIndex != -1) {
                        root.localData.content.scrollTop = root.localData.rowlist[root.localData.selectedIndex].offsetTop;
                    }
                }
                DOMElement.cancelEvent(event);
                return false;
            }
        } (x, dropdownDiv);
        if (params.onchange !== undefined) {
            if (EncodingClass.type.isString(params.onchange)) {
                x.localData.onchange = new Function ("event", params.onchange);
            }
            else if (EncodingClass.type.isFunction(params.onchange)) {
                x.localData.onchange = params.onchange;
            }
            x.localData.onchange = function (me, func) {
                return function (event) {
                    return func(event, me);
                }
            } (x, x.localData.onchange);
        }
        for (i = 0; i < rowlist.length; i++) {
            rowlist[i].onclick = function (me, dropdown, index) {
                return function (event) {
                    var r = false, changed = false;
                    dropdown.classList.toggle(DOMElement.searchcomboboxclass.display);
                    dropdown.classList.toggle(DOMElement.searchcomboboxclass.hidden);
                    if (index != me.selectedIndex) {
                        if (me.selectedIndex != -1) {
                            me.localData.rowlist[me.selectedIndex].classList.toggle(DOMElement.searchcomboboxclass.selected);
                            changed = true;
                        }
                        me.selectedIndex = index;
                        //me.value = me.options[index].value;
                        //me.selectedText = me.options[index].text;
                        me.localData.rowlist[index].classList.toggle(DOMElement.searchcomboboxclass.selected);
                        DOMElement.searchcomboboxclass.lastshown = null;
                        if (changed) {
                            DOMElement.removeAllChildren(me.localData.textView);
                            me.localData.textView.appendChild(DOMElement.textNode(me.selectedText));
                            if (me.localData.onchange !== undefined) {
                                r = me.localData.onchange(event);
                            }
                            if (r !== undefined) return r;
                        }
                        return false;
                    }
                }
            } (x, dropdownDiv, i)
        }
        if (searchbox) {
            sb.onpaste =
            sb.onchange =
            sb.onkeyup = function(me) {
                return function (event) {
                    var keyword = sb.value.trim().toLowerCase();
                    var i, t;
                    for (i = 0; i < me.localData.rowlist.length; i++) {
                        t = me.options[i].text + "";
                        t = t.trim().toLowerCase();
                        if (t.indexOf(keyword) != -1) {
                            if (me.localData.rowlist[i].classList.contains(DOMElement.searchcomboboxclass.hidden)) me.localData.rowlist[i].classList.remove(DOMElement.searchcomboboxclass.hidden);
                        }
                        else {
                            if (!me.localData.rowlist[i].classList.contains(DOMElement.searchcomboboxclass.hidden)) me.localData.rowlist[i].classList.add(DOMElement.searchcomboboxclass.hidden);
                        }
                    }
                }
            } (x);
        }
        return x;
    },

    tr : function (params) {
        var i;
        if (params === undefined) return DOMElement.create({elementType: "tr"});
        if (params.children !== undefined) {
            for (i = 0; i < params.children.length; i++) {
                if (EncodingClass.type.isString(params.children[i])) {
                    params.children[i] = DOMElement.td({children: [DOMElement.textNode(params.children[i])]});
                }
                else if (params.children[i].tagName !== undefined) {
                    if (params.children[i].tagName.toLowerCase() != "td")
                        params.children[i] = DOMElement.td({children: [params.children[i]]});
                }
                else {
                    params.children[i] = DOMElement.td(params.children[i]);
                }
            }
        }
        else if (EncodingClass.type.isArray(params)) {
            return DOMElement.tr({children: params});
        }
        params.elementType = "tr";
        return DOMElement.create(params);
    },

    table : function (params) {
        var i, j, k, x, y, z, t, tx, tcells, st, sb, cb;
        if (params === undefined) params = {};
        if ((params.header === undefined) && (params.data === undefined) && (params.footer === undefined)) {
            params.elementType = "table";
            return DOMElement.create(params);
        }
        x = DOMElement.table(DOMElement.duplicateObj(params, ["header", "data", "footer", "searchbox"]));
        x.localData.filter = [];
        if (params.headers !== undefined) {
            tx = DOMElement.thead();
            for (k = 0; k < params.headers.length; k++) {
                tcells = params.headers[k];
                if (EncodingClass.type.isArray(tcells)) {
                    y = DOMElement.tr();
                    for (i = 0; i < tcells.length; i++) {
                        if (EncodingClass.type.isString(tcells[i])) {
                            z = DOMElement.th({
                                attrs: {style: {whiteSpace: "nowrap"}},
                                text: tcells[i]
                            });
                        }
                        else if (EncodingClass.type.isNumber(tcells[i])) {
                            z = DOMElement.th({
                                attrs: {style: {whiteSpace: "nowrap"}},
                                text: tcells[i].toString()
                            });
                        }
                        else if (EncodingClass.type.isDate(tcells[i])) {
                            z = DOMElement.th({
                                attrs: {style: {whiteSpace: "nowrap"}},
                                text: tcells[i].toString()
                            });
                        }
                        else if (EncodingClass.type.isArray(tcells[i])) {
                            z = DOMElement.th({
                                attrs: {style: {whiteSpace: "nowrap"}},
                                children: tcells[i]
                            });
                        }
                        else if (tcells[i].tagName === undefined) {
                            z = DOMElement.th(tcells[i]);
                        }
                        else if (tcells[i].tagName.toLowerCase() == "th") {
                            z = tcells[i];
                        }
                        else {
                            z = DOMElement.th({
                                attrs: {style: {whiteSpace: "nowrap"}},
                                children: [tcells[i]]
                            });
                        }
                        y.appendChild(z);
                    }
                    tx.appendChild(y);
                }
                else {
                    tx.appendChild(tcells);
                }
            }
            x.appendChild(tx);
        }
        else if (params.header !== undefined) {
            tx = DOMElement.thead();
            tcells = params.header;
            if (EncodingClass.type.isArray(tcells)) {
                y = DOMElement.tr();
                for (i = 0; i < tcells.length; i++) {
                    if (EncodingClass.type.isString(tcells[i])) {
                        z = DOMElement.th({
                            attrs: {style: {whiteSpace: "nowrap"}},
                            text: tcells[i]
                        });
                    }
                    else if (EncodingClass.type.isNumber(tcells[i])) {
                        z = DOMElement.th({
                            attrs: {style: {whiteSpace: "nowrap"}},
                            text: tcells[i].toString()
                        });
                    }
                    else if (EncodingClass.type.isDate(tcells[i])) {
                        z = DOMElement.th({
                            attrs: {style: {whiteSpace: "nowrap"}},
                            text: tcells[i].toString()
                        });
                    }
                    else if (EncodingClass.type.isArray(tcells[i])) {
                        z = DOMElement.th({
                            attrs: {style: {whiteSpace: "nowrap"}},
                            children: tcells[i]
                        });
                    }
                    else if (tcells[i].tagName === undefined) {
                        z = DOMElement.th(tcells[i]);
                    }
                    else if (tcells[i].tagName.toLowerCase() == "th") {
                        z = tcells[i];
                    }
                    else {
                        z = DOMElement.th({
                            attrs: {style: {whiteSpace: "nowrap"}},
                            children: [tcells[i]]
                        });
                    }
                    y.appendChild(z);
                }
                tx.appendChild(y);
            }
            else {
                tx.appendChild(tcells);
            }
            x.appendChild(tx);
        }
        if (params.data !== undefined) {
            if (EncodingClass.type.isArray(params.data)) {
                tx = DOMElement.tbody();
                for (k = 0; k < params.data.length; k++) {
                    if (params.data[k].tagName !== undefined) {
                        st = params.data[k].tagName.toLowerCase();
                    }
                    else {
                        st = "";
                    }
                    if (st != "tr") {
                        if (EncodingClass.type.isArray(params.data[k])) {
                            y = DOMElement.tr();
                            tcells = params.data[k];
                            for (i = 0; i < tcells.length; i++) {
                                if (EncodingClass.type.isString(tcells[i])) {
                                    z = DOMElement.td({text: tcells[i]});
                                }
                                else if (EncodingClass.type.isNumber(tcells[i])) {
                                    z = DOMElement.td({attrs: {align: "right"}, text: tcells[i].toString()});
                                }
                                else if (EncodingClass.type.isDate(tcells[i])) {
                                    z = DOMElement.td({text: tcells[i].toString()});
                                }
                                else if (EncodingClass.type.isArray(tcells[i])) {
                                    z = DOMElement.td({children: tcells[i]});
                                }
                                else if (tcells[i].tagName === undefined) {
                                    z = DOMElement.td(tcells[i]);
                                }
                                else if (tcells[i].tagName.toLowerCase() == "td") {
                                    z = tcells[i];
                                }
                                else {
                                    z = DOMElement.td({children: [tcells[i]]});
                                }
                                y.appendChild(z);
                            }
                        }
                        else {
                            y = DOMElement.tr(params.data[k]);
                        }
                        x.localData.filter.push({
                            value: true,
                            element: y,
                        });
                        tx.appendChild(y);
                    }
                    else {
                        x.localData.filter.push({
                            value: true,
                            element: params.data[k],
                        });
                        tx.appendChild(params.data[k]);
                    }
                }
                x.appendChild(tx);
            }
            else {
                x.appendChild(params.data);
            }
        }
        if (params.footer !== undefined) {
            tx = DOMElement.tfoot();
            tcells = params.footer;
            if (EncodingClass.type.isArray(tcells)) {
                y = DOMElement.tr();
                for (i = 0; i < tcells.length; i++) {
                    if (EncodingClass.type.isString(tcells[i])) {
                        z = DOMElement.td({text: tcells[i]});
                    }
                    else if (EncodingClass.type.isArray(tcells[i])) {
                        z = DOMElement.td({children: tcells[i]});
                    }
                    else if (tcells[i].tagName === undefined) {
                        z = DOMElement.td(tcells[i]);
                    }
                    else if (tcells[i].tagName.toLowerCase() == "td") {
                        z = tcells[i];
                    }
                    else {
                        z = DOMElement.td({children: [tcells[i]]});
                    }
                    y.appendChild(z);
                }
                tx.appendChild(y);
            }
            else {
                tx.appendChild(tcells);
            }
            x.appendChild(tx);
        }
        x.addSearchBox = function (x) {
            return function (sb) {
                sb.onchange = sb.onkeyup = sb.onpaste = function (me, host) {
                    return function (event) {
                        var text = me.value.toLowerCase();
                        var i, st, c = false, t, p, c = false, oldfilter = [];
                        for (i = 0; i < host.localData.filter.length; i++) {
                            st = host.localData.filter[i].element.textContent.toLowerCase();
                            oldfilter.push(host.localData.filter[i].value);
                            t = (st.indexOf(text) >= 0);
                            if (host.localData.filter[i].value != t) {
                                host.localData.filter[i].value = t;
                                c = true;
                            }
                        }
                        if (c) {
                            for (i = 0; i < host.localData.filter.length; i++) {
                                if (host.localData.filter[i].value != oldfilter[i]) {
                                    if (host.localData.filter[i].value) {
                                        host.localData.filter[i].element.style.display = "table-row";
                                    }
                                    else {
                                        host.localData.filter[i].element.style.display = "none";
                                    }
                                }
                            }
                        }
                    }
                } (sb, x);
            }
        } (x);
        if (params.searchbox == true) {
            sb = DOMElement.input({
                attrs: {
                    type: "text",
                    placeholder: "type here to search...",
                    value: "",
                    style: {
                        height: "22px",
                        font: "14px Helvetica, Arial, sans-serif",
                        width: "calc(100% - 8px)",
                        border: "0",
                        outline: "0",
                        textIndent: "5px"
                    }
                }
            });
            cb = DOMElement.td({
                attrs: {
                    align: "center",
                    style: {
                        width: "22px",
                        height: "34px",
                        border: "0",
                        padding: "0",
                        cursor: "pointer",
                        color: "#4f4f4f",
                        backgroundColor: "rgba(0, 0, 0, 0)"
                    },
                    onclick: function (host, searchbox) {
                        return function (event) {
                            var i, c = false;
                            searchbox.value = "";
                            searchbox.onchange();
                        }
                    } (x, sb)
                },
                children: [DOMElement.i({
                    attrs: {
                        className: ["fa fa-close", DOMElement.treetableclass.noselect],
                        style: {
                            fontSize: "12px",
                        }
                    },
                })]
            });
            cb.onmouseover = function (me) {
                return function (event) {
                    me.style.color = "red";
                }
            } (cb);
            cb.onmouseout = function (me) {
                return function (event) {
                    me.style.color = "#4f4f4f";
                }
            } (cb);
            tx = DOMElement.table({
                attrs: {
                    style: {
                        border: "0",
                        padding: "0",
                    }
                },
                data: [
                    [
                        {
                            attrs: {style: {
                                width: "100%",
                                border: "1px solid #ddd",
                                padding: "0",
                                backgroundColor: "rgba(0, 0, 0, 0)"
                            }},
                            children: [DOMElement.table({
                                attrs: {style: {
                                    width: "100%",
                                    border: "0",
                                    padding: "0",
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                }},
                                data: [[
                                    {
                                        attrs: {style: {
                                            border: "0",
                                            padding: "0px 0px 0px 4px",
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                        }},
                                        children: [sb]
                                    },
                                    cb,
                                    {attrs: {style: {
                                        width: "8px",
                                        border: "0",
                                        padding: "0",
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }}},
                                    {
                                        attrs: {style: {
                                            width: "22px",
                                            height: "34px",
                                            border: "0",
                                            padding: "0",
                                            backgroundColor: "rgba(0, 0, 0, 0)"
                                        }},
                                        children: [DOMElement.i({
                                            attrs: {
                                                className: ["fa fa-search", DOMElement.treetableclass.noselect],
                                                style: {
                                                    fontSize: "12px",
                                                    color: "#4f4f4f",
                                                }
                                            },
                                        })]
                                    }
                                ]]
                            })]
                        }
                    ],
                    [{
                        attrs: {style: {
                            border: "0",
                            padding: "0",
                            textSize: "4px",
                            height: "6px",
                            backgroundColor: "rgba(0, 0, 0, 0)"
                        }}
                    }],
                    [{
                        attrs: {style: {
                            border: "0",
                            padding: "0",
                            backgroundColor: "rgba(0, 0, 0, 0)"
                        }},
                        children: [x]
                    }]
                ]
            });
            tx.localData = x.localData;
            tx.localData.searchbox = sb;
            if (x.addSearchBox !== undefined) tx.addSearchBox = x.addSearchBox;
            x = tx;
            x.addSearchBox(sb);
        }
        return x;
    },

    dropdownbox : function (params) {
        var xparams = DOMElement.duplicateObj(params, ["align", "valign", "x", "y"]);
        var px = 0, py = 0, x, xc;
        if (xparams.attrs === undefined) xparams.attrs = {};
        if (xparams.attrs.className === undefined) {
            xparams.attrs.className = DOMElement.dropdownclass.content;
        }
        else {
            xparams.attrs.className = DOMElement.dropdownclass.content + " " + xparams.attrs.className;
        }
        if (xparams.attrs.style === undefined) xparams.attrs.style = {};
        if (xparams.attrs.style.position === undefined) xparams.attrs.style.position = "absolute";
        if (params.align !== undefined)
            if (params.align.toLowerCase() == "right")  xparams.attrs.style.right = "100%";
        if (params.valign !== undefined)
        if (params.valign.toLowerCase() == "bottom")  xparams.attrs.style.bottom = "100%";
        if (params.x !== undefined) xparams.attrs.style.marginLeft = params.x + "px";
        if (params.y !== undefined) xparams.attrs.style.marginTop = params.y + "px";
        xc = DOMElement.div(xparams);
        x = DOMElement.div({
            attrs: {
                className: DOMElement.dropdownclass.holder,
                style: {zIndex: 10000}
            },
            children: [xc]
        });
        x.toggle = function (content) {
            return function () {
                content.classList.toggle(DOMElement.dropdownclass.show);
                if (content.classList.contains(DOMElement.dropdownclass.show)) DOMElement.dropdownclass.lastshown = content;
            }
        } (xc);
        xc.toggle = function (content) {
            return function () {
                content.classList.toggle(DOMElement.dropdownclass.show);
                if (content.classList.contains(DOMElement.dropdownclass.show)) DOMElement.dropdownclass.lastshown = content;
            }
        } (xc);
        x.show = function (content) {
            return function () {
                if (!content.classList.contains(DOMElement.dropdownclass.show)) {
                    content.classList.toggle(DOMElement.dropdownclass.show);
                    DOMElement.dropdownclass.lastshown = content;
                }
            }
        } (xc);
        xc.show = function (content) {
            return function () {
                if (!content.classList.contains(DOMElement.dropdownclass.show)) {
                    content.classList.toggle(DOMElement.dropdownclass.show);
                    DOMElement.dropdownclass.lastshown = content;
                }
            }
        } (xc);
        x.hide = function (content) {
            return function () {
                if (content.classList.contains(DOMElement.dropdownclass.show)) {
                    content.classList.toggle(DOMElement.dropdownclass.show);
                }
            }
        } (xc);
        xc.hide = function (content) {
            return function () {
                if (content.classList.contains(DOMElement.dropdownclass.show)) {
                    content.classList.toggle(DOMElement.dropdownclass.show);
                }
            }
        } (xc);
        return x;
    },

    choicelist : function (params) {
        var xparams = DOMElement.duplicateObj(params, ["list", "contentattrs", "symbolattrs", "color", "color2", "textcolor", "textcolor2"]);
        var x, y, z, i, j, f, bc1 = "white", bc2 = "#f1f1f1", hassymbol = false, c1, c2, tc1 = null, tc2 = null;
        var sattrs = {style: {border: 0}}, cattrs = {style: {border: 0}}, tcattrs = {style: {border: 0}};
        x = [];
        if (params.color !== undefined) bc1 = params.color;
        if (params.color2 !== undefined) bc2 = params.color2;
        if (params.textcolor !== undefined) {
            tc1 = params.textcolor;
            if (params.textcolor2 !== undefined) tc2 = params.textcolor2;
        }
        if (params.symbolattrs !== undefined) sattrs = params.symbolattrs;
        if (sattrs.style === undefined) sattrs.style = {};
        sattrs.style.border = "0";
        if (params.contentattrs !== undefined) cattrs = params.contentattrs;
        if (cattrs.style === undefined) cattrs.style = {};
        cattrs.style.border = "0";
        if (cattrs.style.textAlign === undefined) cattrs.style.textAlign = "left";
        tcattrs = DOMElement.duplicateObj(cattrs);
        tcattrs.style.whiteSpace = "nowrap";
        tcattrs.style.border = "0";
        for (i = 0; i < params.list.length; i++) {
            if (params.list[i].symbol !== undefined) hassymbol = true;
        }
        for (i = 0; i < params.list.length; i++) {
            if (params.list[i].content !== undefined) {
                if (EncodingClass.type.isString(params.list[i].content)) {
                    c2 = DOMElement.td({
                        attrs: tcattrs,
                        text: params.list[i].content
                    });
                }
                else if (params.list[i].content.localData !== undefined) {
                    c2 = DOMElement.td({
                        attrs: cattrs,
                        children: [params.list[i].content]
                    });
                }
                else {
                    c2 = DOMElement.td(params.list[i].content);
                }
            }
            else {
                c2 = DOMElement.td({attrs: sattrs});
            }
            if (!c2.classList.contains(DOMElement.dropdownclass.choicelistline)) c2.classList.add(DOMElement.dropdownclass.choicelistline);
            c2.classList.add(DOMElement.treetableclass.noselect);
            if (hassymbol) {
                if (params.list[i].symbol !== undefined) {
                    if (EncodingClass.type.isString(params.list[i].symbol)) {
                        c1 = DOMElement.td({
                            attrs: sattrs,
                            text: params.list[i].symbol
                        });
                    }
                    else if (params.list[i].symbol.localData !== undefined) {
                        c1 = DOMElement.td({
                            attrs: sattrs,
                            children: [params.list[i].symbol]
                        });
                    }
                    else {
                        c1 = DOMElement.td(params.list[i].symbol);
                    }
                }
                else {
                    c1 = DOMElement.td({attrs: sattrs});
                }
                if (!c1.classList.contains(DOMElement.dropdownclass.choicelistline)) c1.classList.add(DOMElement.dropdownclass.choicelistline);
                c1.classList.add(DOMElement.treetableclass.noselect);
                c1 = [c1, c2];
            }
            else {
                c1 = [c2];
            }
            z = {style: {
                backgroundColor: bc1,
                border: 0,
                cursor: "pointer"
            }};
            if (tc1 != null) z.style.color = tc1;
            z = DOMElement.tr({
                attrs: z,
                children: c1
            });
            z.onmouseover = function (me, color, tcolor) {
                return function () {
                    me.style.backgroundColor = color;
                    if (tcolor != null) me.style.color = tcolor;
                }
            }(z, bc2, tc2);
            z.onmouseout = function (me, color, tcolor) {
                return function () {
                    me.style.backgroundColor = color;
                    if (tcolor != null) me.style.color = tcolor;
                }
            }(z, bc1, tc1);
            if (params.list[i].onclick !== undefined) {
                if (EncodingClass.type.isString(params.list[i].onclick)) {
                    f = new Function("event", params.list[i].onclick);
                }
                else {
                    f = params.list[i].onclick;
                }
                z.onclick = function (me, func) {
                    return function (event) {
                        var dropdowns;
                        dropdowns = document.getElementsByClassName(DOMElement.dropdownclass.content);
                        for (i = 0; i < dropdowns.length; i++) {
                            if (dropdowns[i].classList.contains(DOMElement.dropdownclass.show)) {
                                dropdowns[i].classList.remove(DOMElement.dropdownclass.show);
                            };
                        }
                        func(event);
                    }
                } (z, f);
            }
            x.push(z);
        }
        xparams.children = [DOMElement.table({
            attrs: {
                style: {
                    border: 0
                }
            },
            children: x
        })];
        return DOMElement.dropdownbox(xparams);
    },

    init_css : function () {
        if (DOMElement.dropdownclass === undefined) DOMElement.dropdownclass = {};
        DOMElement.dropdownclass.button = DOMElement.genClassName();
        DOMElement.dropdownclass.holder = DOMElement.genClassName();
        DOMElement.dropdownclass.content = DOMElement.genClassName();
        DOMElement.dropdownclass.show = DOMElement.genClassName();
        DOMElement.dropdownclass.choicelistline = DOMElement.genClassName();
        if (DOMElement.treetableclass === undefined) DOMElement.treetableclass = {};
        DOMElement.treetableclass.rotate90 = DOMElement.genClassName();
        DOMElement.treetableclass.noselect = DOMElement.genClassName();
        DOMElement.loadCSS([
            DOMElement.cssText([DOMElement.dropdownclass.button], "", [
                ["border", "none"],
                ["cursor", "pointer"],
            ]),
            DOMElement.cssText([DOMElement.dropdownclass.holder], "", [
                ["display", "inline-block"],
                ["position", "relative"],
            ]),
            DOMElement.cssText([DOMElement.dropdownclass.content], "", [
                ["display", "none"],
                ["overflow", "visible"],
                ["box-shadow", "0px 8px 16px 0px rgba(0, 0, 0, 0.2)"],
            ]),
            DOMElement.cssText([DOMElement.dropdownclass.show], "", [
                ["display", "block"],
            ]),
            DOMElement.cssText([DOMElement.dropdownclass.choicelistline], "", [
                ["padding", "5px"]
            ]),
            DOMElement.cssText([DOMElement.treetableclass.rotate90], "", [
                "-webkit-transform: rotate(90deg) translate(-3px, 3px);",
                "transform: rotate(90deg) translate(-3px, 3px);",
            ]),
            DOMElement.cssText([DOMElement.treetableclass.noselect], "", [
                "-webkit-touch-callout: none;",
                  "-webkit-user-select: none;",
                   "-khtml-user-select: none;",
                     "-moz-user-select: none;",
                      "-ms-user-select: none;",
                          "user-select: none;"
            ]),
        ]);
    },

    init_dropdownbox : function () {
        if (DOMElement.dropdownclass === undefined) DOMElement.dropdownclass = {};
        DOMElement.dropdownclass.lastshown = null;
        DOMElement.dropdownclass.onclickeventFunction = function (event) {
            var i, x = event.target, ok = 0;
            var dropdowns, openDropdown;
            while (x != null) {
                if (x.classList.contains(DOMElement.dropdownclass.button)) {
                    ok = 1;
                    break;
                }
                if (x.classList.contains(DOMElement.dropdownclass.content)) {
                    ok = 1;
                    break;
                }
                if (x.parentElement != null) {
                    x = x.parentElement;
                }
                else {
                    if (x.nodeName.toLowerCase() != "html") ok = 1;
                    x = null;
                }
            }
            if (ok == 0) {
                dropdowns = document.getElementsByClassName(DOMElement.dropdownclass.content);
                for (i = 0; i < dropdowns.length; i++) {
                    openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains(DOMElement.dropdownclass.show)) openDropdown.classList.remove(DOMElement.dropdownclass.show);
                }
            }
            else if (event.target.classList.contains(DOMElement.dropdownclass.button)) {
                dropdowns = document.getElementsByClassName(DOMElement.dropdownclass.content);
                for (i = 0; i < dropdowns.length; i++) {
                    openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains(DOMElement.dropdownclass.show)) {
                        x = openDropdown;
                        ok = 0;
                        while (x != null) {
                            if (x == DOMElement.dropdownclass.lastshown) {
                                ok = 1;
                                break;
                            }
                            x = x.parentElement;
                        }
                        if (ok == 0) openDropdown.classList.remove(DOMElement.dropdownclass.show);
                    };
                }
            }
        };
        window.addEventListener("click", DOMElement.dropdownclass.onclickeventFunction);
    },

    radio : function (params) {
        var t = {attrs: params.attrs}, h;
        if (t.attrs === undefined) t.attrs = {};
        t.attrs.type = "radio";
        t = DOMElement.input(t);
        if (params.text !== undefined) {
            h = {
                attrs : {
                    href: "#",
                    style: {
                        paddingRight: "5px;",
                        textDecoration: "none"
                    },
                    onclick: function (r) {
                        return function (event) {
                            r.click();
                            DOMElement.cancelEvent(event);
                            return false;
                        }
                    } (t)
                },
                text: params.text
            };
            if (params.textcolor !== undefined) h.attrs.style.color = params.textcolor;
            h = DOMElement.a(h);
            return DOMElement.table({
                attrs: {
                    style : {
                        border: "0px",
                        padding: "0px",
                        height: "initial",
                        backgroundColor: "rgba(255,255,255,0)"
                    }
                },
                data: [[
                    {
                        attrs: {style: {
                            paddingLeft: "5px",
                            paddingRight: "5px",
                            border: "0px"
                        }},
                        children: [t]
                    },
                    {
                        attrs: {style: {
                            paddingRight: "5px",
                            border: "0px"
                        }},
                        children: [h]
                    },
                    ]]
            });
        }
        else {
            return t;
        }
    },

    getRadioValue : function (name) {
        var i, e = document.getElementsByName(name);
        for (i = 0; i < e.length; i++) {
            if (e[i].checked) return e[i].value;
        }
        return null;
    },

    image : function (params) {
        var xparams = {
            attrs : {
                src: params.src,
                style: {}
            }
        };
        var src2;
        if (params.id !== undefined) xparams.attrs.id = params.id;
        if (EncodingClass.type.isArray(params.src)) {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            canvas.width = params.width;
            canvas.height = params.height;

            // create imageData object
            var idata = ctx.createImageData(params.width, params.height);

            // set our buffer as source
            idata.data.set(params.src);

            // update canvas with new data
            ctx.putImageData(idata, 0, 0);
            xparams.attrs.src = canvas.toDataURL();
        }
        if (params.width !== undefined) xparams.attrs.width = params.width;
        if (params.height !== undefined) xparams.attrs.height = params.height;
        if (params.class !== undefined) xparams.attrs.className = params.class;
        var x = DOMElement.img(xparams);
        if (params.src2 !== undefined) {
            src2 = params.src2;
            if (EncodingClass.type.isArray(src2)) {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');

                canvas.width = params.width;
                canvas.height = params.height;

                // create imageData object
                var idata = ctx.createImageData(params.width, params.height);

                // set our buffer as source
                idata.data.set(params.src);

                // update canvas with new data
                ctx.putImageData(idata, 0, 0);
                src2 = canvas.toDataURL();
            }
            x.onmouseover = function (me, src) {
                return function (event) {
                    me.src = src;
                }
            } (x, src2);
            x.onmouseout = function (me, src) {
                return function (event) {
                    me.src = src;
                }
            } (x, xparams.attrs.src);
            x.onload = function (src) {
                return function (event) {
                    DOMElement.loadImage(src);
                }
            } (src2);
        }
        if (params.onclick !== undefined) {
            x = DOMElement.a({
                attrs: {
                    href: "#",
                    onclick: function (func) {
                        return function (event) {
                            var r = func(event);
                            return false;
                        }
                    } (params.onclick)
                },
                children: [x]
            });
        }
        else if (params.link !== undefined) {
            x = DOMElement.a({
                attrs: {
                    href: params.link
                },
                children: [x]
            });
        }
        return x;
    },

    fabutton : function (params) {
        var class1, class2, size, text, xparams, color, color2, bnode;
        if (params.class === undefined) return null;
        class1 = params.class;
        if (params.class2 !== undefined) {
            class2 = params.class2;
        }
        else {
            class2 = class1;
        }
        if (params.size !== undefined) {
            size = params.size;
        }
        else {
            size = 16;
        }
        if (params.color !== undefined) {
            color = params.color;
        }
        else {
            color = "black";
        }
        if (params.color2 !== undefined) {
            color2 = params.color2;
        }
        else {
            color2 = color;
        }
        if (params.attrs !== undefined) {
            xparams = {
                attrs: params.attrs
            };
            if (xparams.attrs.style === undefined) xparams.attrs.style = {};
            xparams.attrs.style.fontSize = size + "px";
            xparams.attrs.style.color = color;
        }
        else {
            xparams = {
                attrs: {style: {
                    fontSize: size + "px",
                    color: color
                }}
            };
        }
        var x = DOMElement.button(xparams);
        bnode = DOMElement.i({
            attrs: {
                className: class1,
                style: {
                    color: color
                }
            }
        });
        x.appendChild(bnode);
        if (params.text !== undefined) {
            x.appendChild(DOMElement.textNode(" "));
            x.appendChild(DOMElement.textNode(params.text));
        }
        if (class2 != class1) {
            x.onmouseover = function (me, text, className, color) {
                return function (event) {
                    DOMElement.removeAllChildren(me);
                    x.appendChild(DOMElement.i({
                        attrs: {
                            className: className,
                            style: {color: color}
                        }
                    }));
                    if (text !== undefined) {
                        x.appendChild(DOMElement.textNode(" "));
                        x.appendChild(DOMElement.textNode(text));
                    }
                }
            } (x, params.text, class2, color2);
            x.onmouseout = function (me, text, className, color) {
                return function (event) {
                    DOMElement.removeAllChildren(me);
                    if (text !== undefined) {
                        x.appendChild(DOMElement.textNode(text + " "));
                    }
                    x.appendChild(DOMElement.i({
                        attrs: {
                            className: className,
                            style: {color: color}
                        }
                    }));
                }
            } (x, params.text, class1, color);
        }
        else if (color2 != color){
            x.onmouseover = function (me, color) {
                return function (event) {
                    me.style.color = color;
                }
            } (bnode, color2);
            x.onmouseout = function (me, color) {
                return function (event) {
                    me.style.color = color;
                }
            } (bnode, color);
        }
        if (params.onclick !== undefined) {
            x.onclick = params.onclick;
        }
        return x;
    },

    spinner : {
        beads : function (params) {
            var size = 64, color = "black", i, t, n;
            if (params !== undefined) {
                if (params.size !== undefined) size = params.size;
                if (params.color !== undefined) color = params.color;
            }
            if (DOMElement.beadsspinnerclass === undefined) {
                DOMElement.beadsspinnerclass = {
                    orbit : DOMElement.genCSSName(),
                    ani : DOMElement.genCSSName(),
                }
                DOMElement.loadCSS([
                    DOMElement.cssText([DOMElement.beadsspinnerclass.orbit], "", [
                        ["position", "absolute"],
                        ["margin", "0 auto"],
                        ["border-radius", "50%"],
                        ["animation", DOMElement.beadsspinnerclass.ani + " 1500ms linear infinite"],
                    ]),
                    DOMElement.cssText([], " @keyframes " + DOMElement.beadsspinnerclass.ani, [
                        "0% {transform: translateX(20%) translateY(20%) rotate(0deg);}",
                        "100% {transform: translateX(20%) translateY(20%) rotate(360deg);}",
                    ]),
                ]);
            }
            t = [];
            n = ~~(Math.sqrt(size));
            for (i = 0; i < n; i++) {
                t.push(DOMElement.div({
                    attrs: {
                        className: DOMElement.beadsspinnerclass.orbit,
                        style: {
                            animationDelay: "calc(-1500ms * " + (n-i) + " / " + n + ")",
                            width: size + "px",
                            height: size + "px",
                            paddingLeft: ~~(size*i/n/8) + "px",
                            paddingTop: ~~(size*i/n/8) + "px",
                        }
                    },
                    children: [DOMElement.div({
                        attrs: {
                            style: {
                                backgroundColor: color,
                                borderRadius: "50%",
                                width: ~~(size*(n-i) / n / 4) + "px",
                                height: ~~(size*(n-i) / n / 4) + "px",
                            }
                        }
                    })]
                }));
            }
            return DOMElement.div({
                attrs: {
                    style: {
                        width: ~~(size*1.42) + "px",
                        height: ~~(size*1.42) + "px",
                    }
                },
                children: t
            });
        },
        beads2 : function (params) {
            var size = 64, color = "black";
            if (params !== undefined) {
                if (params.size !== undefined) size = params.size;
                if (params.color !== undefined) color = params.color;
            }
            return DOMElement.i({
                attrs: {
                    className: "fa fa-spinner fa-spin",
                    style: {
                        color: color,
                        fontSize: size + "px"
                    }
                }
            });
        },
        dot : function (params) {
            var size = 15, color = "#ff1d5e";
            if (params !== undefined) {
                if (params.size !== undefined) size = params.size;
                if (params.color !== undefined) color = params.color;
            }
            if (DOMElement.dotspinnerclass === undefined) {
                DOMElement.dotspinnerclass = {
                    orbit : DOMElement.genCSSName(),
                    ani : DOMElement.genCSSName(),
                }
                DOMElement.loadCSS([
                    DOMElement.cssText([DOMElement.dotspinnerclass.orbit], "", [
                        ["position", "absolute"],
                        ["margin", "0 auto"],
                        ["border-radius", "2px"],
                        ["transform", "translateY(0) rotate(45deg) scale(0)"],
                        ["animation", DOMElement.dotspinnerclass.ani + " 2500ms linear infinite"]
                    ]),
                    DOMElement.cssText([], " @keyframes " + DOMElement.dotspinnerclass.ani, [
                        "0% { transform: translateX(0) rotate(45deg) scale(0); }",
                        "50% { transform: translateX(-233%) rotate(45deg) scale(1); }",
                        "100% { transform: translateX(-466%) rotate(45deg) scale(0); }"
                    ]),
                ]);
            }
            return DOMElement.div({
                attrs: {
                    style: {
                        width: "calc(" + size + "px * 4)",
                        height: size + "px",
                        position: "relative"
                    }
                },
                children: [
                    DOMElement.div({
                        attrs: {
                            className: DOMElement.dotspinnerclass.orbit,
                            style: {
                                animationDelay: "calc(2500ms * 1 / -1.5)",
                                width: size + "px",
                                height: size + "px",
                                backgroundColor: color,
                                left: "calc(" + size + "px * 4)"
                            }
                        }
                    }),
                    DOMElement.div({
                        attrs: {
                            className: DOMElement.dotspinnerclass.orbit,
                            style: {
                                animationDelay: "calc(2500ms * 2 / -1.5)",
                                width: size + "px",
                                height: size + "px",
                                backgroundColor: color,
                                left: "calc(" + size + "px * 4)"
                            }
                        }
                    }),
                    DOMElement.div({
                        attrs: {
                            className: DOMElement.dotspinnerclass.orbit,
                            style: {
                                animationDelay: "calc(2500ms * 3 / -1.5)",
                                width: size + "px",
                                height: size + "px",
                                backgroundColor: color,
                                left: "calc(" + size + "px * 4)"
                            }
                        }
                    }),
                ]
            });
        },
        orbit : function (params) {
            var size = 64, color = "#ff1d5e";
            if (params !== undefined) {
                if (params.size !== undefined) size = params.size;
                if (params.color !== undefined) color = params.color;
            }
            if (DOMElement.orbitspinnerclass === undefined) {
                DOMElement.orbitspinnerclass = {
                    orbit : DOMElement.genCSSName(),
                    ani1 : DOMElement.genCSSName(),
                    ani2 : DOMElement.genCSSName(),
                    ani3 : DOMElement.genCSSName(),
                }
                DOMElement.loadCSS([
                    DOMElement.cssText([DOMElement.orbitspinnerclass.orbit], "", [
                        ["box-sizing", "border-block"],
                        ["position", "absolute"],
                        ["height", "100%"],
                        ["width", "100%"],
                        ["border-radius", "50%"],
                    ]),
                    DOMElement.cssText([], " @keyframes " + DOMElement.orbitspinnerclass.ani1, [
                        "0% { transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg); }",
                        "100% { transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg); }"
                    ]),
                    DOMElement.cssText([], " @keyframes " + DOMElement.orbitspinnerclass.ani2, [
                        "0% { transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg); }",
                        "100% { transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg); }"
                    ]),
                    DOMElement.cssText([], " @keyframes " + DOMElement.orbitspinnerclass.ani3, [
                        "0% { transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg); }",
                        "100% { transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg); }"
                    ]),
                ]);
            }
            return DOMElement.div({
                attrs: {
                    style: {
                        width: size + "px",
                        height: size + "px",
                        borderRadius: "50%",
                        perspective: "800px"
                    }
                },
                children: [
                    DOMElement.div({attrs: {
                        className: DOMElement.orbitspinnerclass.orbit,
                        style : {
                            left: "0%",
                            top: "0%",
                            animation: DOMElement.orbitspinnerclass.ani1 + " 1200ms linear infinite",
                            borderBottom: "3px solid " + color
                        }
                    }}),
                    DOMElement.div({attrs: {
                        className: DOMElement.orbitspinnerclass.orbit,
                        style: {
                            right: "0%",
                            top: "0%",
                            animation: DOMElement.orbitspinnerclass.ani2 + " 1200ms linear infinite",
                            borderRight: "3px solid " + color
                        }
                    }}),
                    DOMElement.div({attrs: {
                        className: DOMElement.orbitspinnerclass.orbit,
                        style: {
                            right: "0%",
                            bottom: "0%",
                            animation: DOMElement.orbitspinnerclass.ani3 + " 1200ms linear infinite",
                            borderTop: "3px solid " + color
                        }
                    }}),
                ]
            });
        },
    },

    treetable : function (params) {
        var i, j, k, n, x, y, z, t, tx, ty, tz, tp, tcells, trows, sb, cb;
        var stacks, buffer, bc, bc1, bc2, bc3, hover = true, longswitch = false;
        if (params === undefined) params = {};
        if (params.hover !== undefined) hover = params.hover;
        if (params.longswitch !== undefined) longswitch = params.longswitch;
        if (params.data === undefined) return DOMElement.table(params);
        x = DOMElement.table(DOMElement.duplicateObj(params, ["header", "data", "footer"]));
        if (params.headers !== undefined) {
            tx = DOMElement.thead();
            trows = params.headers;
            for (k = 0; k < trows.length; k++) {
                tcells = trows[k];
                if (EncodingClass.type.isArray(tcells)) {
                    y = DOMElement.tr();
                    for (i = 0; i < tcells.length; i++) {
                        if (EncodingClass.type.isString(tcells[i])) {
                            z = DOMElement.th({
                                attrs: {style: {whiteSpace: "nowrap"}},
                                text: tcells[i]});
                        }
                        else if (EncodingClass.type.isArray(tcells[i])) {
                            z = DOMElement.th({
                                attrs: {style: {whiteSpace: "nowrap"}},
                                children: tcells[i]});
                        }
                        else if (tcells[i].tagName === undefined) {
                            z = DOMElement.th(tcells[i]);
                        }
                        else if (tcells[i].tagName.toLowerCase() !== "th") {
                            z = DOMElement.th({
                                attrs: {style: {whiteSpace: "nowrap"}},
                                children: [tcells[i]]});
                        }
                        else {
                            z = tcells[i];
                        }
                        y.appendChild(z);
                    }
                    tx.appendChild(y);
                }
                else {
                    tx.appendChild(tcells);
                }
            }
            x.appendChild(tx);
        }
        else if (params.header !== undefined) {
            tx = DOMElement.thead();
            tcells = params.header;
            if (EncodingClass.type.isArray(tcells)) {
                y = DOMElement.tr();
                for (i = 0; i < tcells.length; i++) {
                    if (EncodingClass.type.isString(tcells[i])) {
                        z = DOMElement.th({
                            attrs: {style: {whiteSpace: "nowrap"}},
                            text: tcells[i]});
                    }
                    else if (EncodingClass.type.isArray(tcells[i])) {
                        z = DOMElement.th({
                            attrs: {style: {whiteSpace: "nowrap"}},
                            children: tcells[i]});
                    }
                    else if (tcells[i].tagName === undefined) {
                        z = DOMElement.th(tcells[i]);
                    }
                    else if (tcells[i].tagName.toLowerCase() !== "th") {
                        z = DOMElement.th({
                            attrs: {style: {whiteSpace: "nowrap"}},
                            children: [tcells[i]]});
                    }
                    else {
                        z = tcells[i];
                    }
                    y.appendChild(z);
                }
                tx.appendChild(y);
            }
            else {
                tx.appendChild(tcells);
            }
            x.appendChild(tx);
        }
        bc1 = "white";
        bc2 = "#EFEFEF";
        bc3 = "#BFBFBF";
        if (params.backgroundcolor !== undefined) bc1 = params.backgroundcolor;
        if (params.backgroundcolor2 !== undefined) bc2 = params.backgroundcolor2;
        if (params.backgroundcolor3 !== undefined) bc3 = params.backgroundcolor3;
        stacks = [];
        buffer = [];
        n = params.data.length;
        for (i = n - 1; i >= 0; i--) {
            t = {
                level: 0,
                content: params.data[i],
                parent: null,
                key: null,
                status: "expanded"
            };
            if (params.data[i].key !== undefined) t.key = params.data[i].key;
            stacks.push(t);
        }
        x.localData.content = [];
        x.localData.keys = [];
        while (n > 0) {
            n--;
            t = stacks[n];
            buffer.push({
                level: t.level,
                content: t.content,
                row: null,
                key: t.key,
                parent: t.parent,
                status: t.status,
                children: []
            });
            if (t.content.children !== undefined) {
                for (i = t.content.children.length-1; i >= 0; i--) {
                    k = {
                        level: t.level + 1,
                        content: t.content.children[i],
                        parent: buffer[buffer.length-1],
                        key: null,
                        status: "expanded"
                    };
                    if (t.content.children[i].key !== undefined) k.key = t.content.children[i].key;
                    if (n == stacks.length) {
                        stacks.push(k);
                        n++;
                    }
                    else {
                        stacks[n++] = k;
                    }
                }
            }
        }
        for (k = 0; k < buffer.length; k++) {
            x.localData.keys.push(buffer[k].key);
            if (buffer[k].parent != null) buffer[k].parent.children.push(buffer[k]);
        }
        tx = DOMElement.tbody();
        for (k = 0; k < buffer.length; k++) {
            if (hover) {
                if ((k & 1) == 0) {
                    bc = bc1;
                }
                else {
                    bc = bc2;
                }
                y = DOMElement.tr({attrs: {style: {backgroundColor: bc}}});
            }
            else {
                y = DOMElement.tr();
            }
            if (EncodingClass.type.isArray(buffer[k].content)) {
                tcells = buffer[k].content;
            }
            else {
                tcells = buffer[k].content.cells;
            }
            for (i = 0; i < tcells.length; i++) {
                if (EncodingClass.type.isString(tcells[i])) {
                    if (i > 0) {
                        z = DOMElement.td({text: tcells[i]});
                    }
                    else {
                        z = DOMElement.td({
                            attrs: {
                                style: {
                                    border: "0px",
                                    height: "initial",
                                }
                            },
                            text: tcells[i]
                        });
                    }
                }
                else if (EncodingClass.type.isArray(tcells[i])) {
                    if (i > 0) {
                        z = DOMElement.td({
                            attrs: {
                                style: {
                                    border: "0px",
                                }
                            },
                            children: tcells[i]
                        });
                    }
                    else {
                        z = DOMElement.td({
                            attrs: {
                                style: {
                                    border: "0px",
                                    height: "initial",
                                }
                            },
                            children: tcells[i]
                        });
                    }
                }
                else if (tcells[i].tagName === undefined) {
                    if (i == 0) {
                        if (tcells[i].attrs === undefined) tcells[i].attrs = {};
                        if (tcells[i].attrs.style === undefined) tcells[i].attrs.style = {};
                        tcells[i].attrs.style.border = "0px";
                        tcells[i].attrs.style.height = "initial";
                    }
                    z = DOMElement.td(tcells[i]);
                }
                else {
                    if (tcells[i].tagName.toLowerCase() != "td") {
                        z = DOMElement.td({
                            children: [tcells[i]]
                        });
                    }
                    else {
                        z = tcells[i];
                    }
                    if (i == 0) {
                        z.style.border = "0";
                        z.style.height = "initial";
                    }
                }
                if (i > 0) {
                    y.appendChild(z);
                }
                else {
                    if (buffer[k].children.length > 0) {
                        ty = DOMElement.i({
                            attrs: {
                                className: "material-icons",
                                style: {fontSize: "16px"}
                            },
                            text: "play_arrow"
                        });
                        if (buffer[k].level == 0) {
                            tp = DOMElement.td({
                                attrs: {
                                    style: {
                                        height: "initial",
                                        display: "none"
                                    }
                                }
                            });
                        }
                        else {
                            tp = DOMElement.td({
                                attrs: {style: {
                                    border: "0px",
                                    width: (buffer[k].level * 16) + "px",
                                    height: "initial"
                                }}
                            })
                        }
                        tz = DOMElement.td({
                            attrs: {
                                className: DOMElement.treetableclass.rotate90 + " " + DOMElement.treetableclass.noselect,
                                style: {
                                    border: "0px",
                                    paddingTop: "3px",
                                    width: "30px",
                                    verticalAlign: "middle",
                                    paddingLeft: "5px",
                                    paddingRight: "5px",
                                    paddingBottom: "5px",
                                    cursor: "pointer",
                                    transition: "0.4s",
                                    height: "initial"
                                }
                            },
                            children: [ty]
                        });
                        buffer[k].arrowcell = tz;
                        tz.onclick = function (me, line) {
                            return function (event) {
                                me.toggle(line);
                            }
                        } (x, k);
                        if (longswitch) {
                            z.style.cursor = "pointer";
                            z.onclick = function (me, line) {
                                return function (event) {
                                    me.toggle(line);
                                }
                            } (x, k);
                        }
                        z.style.border = "0px";
                        y.appendChild(DOMElement.td({children: [DOMElement.table({
                            attrs: {
                                style: {
                                    border: "0px",
                                    padding: "0px",
                                }
                            },
                            children: [DOMElement.tr({
                                attrs: {style: {border: "0px"}},
                                children: [tp, tz, z]
                        })]})]}));
                    }
                    else {
                        y.appendChild(DOMElement.td({
                            attrs: {
                            },
                            children: [DOMElement.table({
                                attrs: {
                                    style: {
                                        border: "0px",
                                        padding: "0px",
                                    }
                                },
                                children: [DOMElement.tr({
                                    attrs: {style: {border: "0px"}},
                                    children: [
                                        DOMElement.td({
                                            attrs: {
                                                style: {
                                                    border: "0px",
                                                    paddingLeft: "0px 6px 0px 0px",
                                                    height: "initial",
                                                    width: ((buffer[k].level+1)*16) + "px",
                                                    textAlign: "right",
                                                    verticalAlign: "middle",
                                                }
                                            },
                                        }),
                                        DOMElement.td({
                                            attrs: {
                                                className: DOMElement.treetableclass.noselect,
                                                style: {
                                                    border: "0px",
                                                    width: "30px",
                                                    height: "initial"
                                                }
                                            }
                                        }),
                                        z
                                    ]
                                })]
                            })]
                        }));
                    }
                }
            }
            buffer[k].row = y;
            if (hover) {
                y.onmouseover = function (me, color) {
                    return function (event) {
                        me.style.backgroundColor = color;
                    }
                } (y, bc3);
                y.onmouseout = function (me, color) {
                    return function (event) {
                        me.style.backgroundColor = color;
                    }
                } (y, bc);
            }
            tx.appendChild(y);
        }
        x.appendChild(tx);
        if (params.footer !== undefined) {
            tx = DOMElement.tfoot();
            tcells = params.footer;
            if (EncodingClass.type.isArray(tcells)) {
                y = DOMElement.tr();
                for (i = 0; i < tcells.length; i++) {
                    if (EncodingClass.type.isString(tcells[i])) {
                        z = DOMElement.td({text: tcells[i]});
                    }
                    else if (EncodingClass.type.isArray(tcells[i])) {
                        z = DOMElement.td({children: tcells[i]});
                    }
                    else if (tcells[i].tagName === undefined) {
                        z = DOMElement.td(tcells[i]);
                    }
                    else if (tcells[i].tagName.toLowerCase() !== "td") {
                        z = DOMElement.td({children: [tcells[i]]});
                    }
                    else {
                        z = tcells[i];
                    }
                    y.appendChild(z);
                }
                tx.appendChild(y);
            }
            else {
                tx.appendChild(tcells);
            }
            x.appendChild(tx);
        }
        x.localData.filter = [];
        x.localData.externalfilter = [];
        for (i = 0; i < buffer.length; i++) {
            buffer[i].index = i;
        }
        for (i = 0; i < buffer.length; i++) {
            if (buffer[i].parent != null) {
                buffer[i].parentIndex = buffer[i].parent.index;
            }
            else {
                buffer[i].parentIndex = -1;
            }
        }
        for (i = 0; i < buffer.length; i++) {
            x.localData.filter.push(true);
            x.localData.externalfilter.push(true);
            delete buffer[i].index;
            delete buffer[i].parent;
            delete buffer[i].children;
            delete buffer[i].content;
        }
        x.localData.data = buffer;
        x.localData.bc1 = bc1;
        x.localData.bc2 = bc2;
        x.localData.hover = hover;
        x.toggle = function (me) {
            return function (line) {
                var i, l, n, s = [{level: -1, value: true}], t, c;
                if (line !== undefined) {
                    x.localData.data[line].arrowcell.classList.toggle(DOMElement.treetableclass.rotate90);
                    if (x.localData.data[line].status == "expanded") {
                        x.localData.data[line].status = "collapse";
                    }
                    else {
                        x.localData.data[line].status = "expanded";
                    }
                }
                l = s[0];
                n = 1;
                for (i = c = 0; i < x.localData.data.length; i++) {
                    while (x.localData.data[i].level <= l.level) {
                        n--;
                        l = s[n - 1];
                    }
                    if (l.value && x.localData.filter[i] && x.localData.externalfilter[i]) {
                        x.localData.data[i].row.style.display = "table-row";
                        if (x.localData.hover) {
                            if ((c & 1) == 0) {
                                x.localData.data[i].row.style.backgroundColor = x.localData.bc1;
                                x.localData.data[i].row.onmouseout = function (me, color) {
                                    return function (event) {
                                        me.style.backgroundColor = color;
                                    }
                                } (x.localData.data[i].row, x.localData.bc1);
                            }
                            else {
                                x.localData.data[i].row.style.backgroundColor = x.localData.bc2;
                                x.localData.data[i].row.onmouseout = function (me, color) {
                                    return function (event) {
                                        me.style.backgroundColor = color;
                                    }
                                } (x.localData.data[i].row, x.localData.bc2);
                            }
                            c++;
                        }
                        if (x.localData.data[i].arrowcell !== undefined) {
                            t = {
                                level: x.localData.data[i].level,
                                value: x.localData.data[i].status == "expanded"
                            }
                            if (n < s.length) {
                                s[n++] = t;
                            }
                            else {
                                s.push(t);
                                n++;
                            }
                            l = t;
                        }
                    }
                    else {
                        x.localData.data[i].row.style.display = "none";
                    }
                }
            }
        }(x);
        if (params.searchbox == true) {
            sb = DOMElement.input({
                attrs: {
                    type: "text",
                    placeholder: "type here to search...",
                    value: "",
                    style: {
                        height: "22px",
                        font: "14px Helvetica, Arial, sans-serif",
                        width: "calc(100% - 4px)",
                        border: "0",
                        outline: "0",
                        textIndent: "5px"
                    }
                }
            });
            sb.onchange = sb.onkeyup = sb.onpaste = function (me, host) {
                return function (event) {
                    var text = me.value.toLowerCase();
                    var i, st, c = false, t, p, oldfilter = [];
                    for (i = 0; i < host.localData.filter.length; i++) oldfilter.push(host.localData.filter[i]);
                    for (i = 0; i < host.localData.data.length; i++) {
                        st = host.localData.data[i].row.textContent.toLowerCase();
                        t = (st.indexOf(text) >= 0);
                        if (host.localData.filter[i] != t) {
                            host.localData.filter[i] = t;
                        }
                        if (t) {
                            p = i;
                            while (host.localData.data[p].parentIndex != -1) {
                                p = host.localData.data[p].parentIndex;
                                host.localData.filter[p] = true;
                            }
                        }
                    }
                    for (i = 0; i < host.localData.filter.length; i++) {
                        if (host.localData.filter[i] != oldfilter[i]) {
                            c = true;
                            break;
                        }
                    }
                    if (c) host.toggle();
                }
            } (sb, x);
            cb = DOMElement.td({
                attrs: {
                    align: "center",
                    style: {
                        width: "22px",
                        height: "34px",
                        border: "0",
                        padding: "0",
                        cursor: "pointer",
                        color: "#4f4f4f",
                        backgroundColor: "rgba(0, 0, 0, 0)"
                    },
                    onclick: function (host, searchbox) {
                        return function (event) {
                            var i, c = false;
                            searchbox.value = "";
                            for (i = 0; i < host.localData.data.length; i++) {
                                if (!host.localData.filter[i]) {
                                    host.localData.filter[i] = true;
                                    c = true;
                                }
                            }
                            if (c) host.toggle();
                        }
                    } (x, sb)
                },
                children: [DOMElement.i({
                    attrs: {
                        className: ["fa fa-close", DOMElement.treetableclass.noselect],
                        style: {
                            fontSize: "12px",
                        }
                    },
                })]
            });
            cb.onmouseover = function (me) {
                return function (event) {
                    me.style.color = "red";
                }
            } (cb);
            cb.onmouseout = function (me) {
                return function (event) {
                    me.style.color = "#4f4f4f";
                }
            } (cb);
            tx = DOMElement.table({
                attrs: {
                    style: {
                        border: "0",
                        padding: "0",
                    }
                },
                data: [
                    [
                        {
                            attrs: {style: {
                                width: "100%",
                                border: "1px solid #ddd",
                                padding: "0",
                                backgroundColor: "rgba(0, 0, 0, 0)"
                            }},
                            children: [DOMElement.table({
                                attrs: {style: {
                                    width: "100%",
                                    border: "0",
                                    padding: "0",
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                }},
                                data: [[
                                    {
                                        attrs: {style: {
                                            border: "0",
                                            padding: "0",
                                            backgroundColor: "rgba(0, 0, 0, 0)"
                                        }},
                                        children: [sb]
                                    },
                                    cb,
                                    {attrs: {style: {
                                        width: "8px",
                                        border: "0",
                                        padding: "0",
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }}},
                                    {
                                        attrs: {style: {
                                            width: "22px",
                                            height: "34px",
                                            border: "0",
                                            padding: "0",
                                            backgroundColor: "rgba(0, 0, 0, 0)"
                                        }},
                                        children: [DOMElement.i({
                                            attrs: {
                                                className: ["fa fa-search", DOMElement.treetableclass.noselect],
                                                style: {
                                                    fontSize: "12px",
                                                    color: "#4f4f4f",
                                                }
                                            },
                                        })]
                                    }
                                ]]
                            })]
                        }
                    ],
                    [{
                        attrs: {style: {
                            border: "0",
                            padding: "0",
                            textSize: "4px",
                            height: "6px",
                            backgroundColor: "rgba(0, 0, 0, 0)"
                        }}
                    }],
                    [{
                        attrs: {style: {
                            border: "0",
                            padding: "0",
                            backgroundColor: "rgba(0, 0, 0, 0)"
                        }},
                        children: [x]
                    }]
                ]
            });
            tx.toggle = x.toggle;
            tx.localData = x.localData;
            tx.localData.searchbox = sb;
            x = tx;
        }
        return x;
    },

    initSearchComboboxClass : function () {
        if (DOMElement.searchcomboboxclass === undefined) {
            DOMElement.searchcomboboxclass = {
                line: DOMElement.genClassName(),
                selected: DOMElement.genClassName(),
                display: DOMElement.genClassName(),
                hidden: DOMElement.genClassName(),
                holder: DOMElement.genClassName(),
                tableHover: DOMElement.genClassName(),
                lastshown: null
            };
            DOMElement.loadCSS([
                DOMElement.cssText([DOMElement.searchcomboboxclass.holder], "", [
                    ["z-index", "1000000000"],
                    ["position", "absolute"]
                ]),
                DOMElement.cssText([DOMElement.searchcomboboxclass.hidden], "", [
                    ["display", "none"],
                ]),
                DOMElement.cssText([DOMElement.searchcomboboxclass.display], "", [
                    ["display", "block"],
                ]),
                DOMElement.cssText([DOMElement.searchcomboboxclass.line], "", [
                    ["background-color", "white"],
                ]),
                DOMElement.cssText([DOMElement.searchcomboboxclass.line], ":hover", [
                    ["background", "#efefef"],
                ]),
                DOMElement.cssText([DOMElement.searchcomboboxclass.tableHover], " tr:hover td", [
                    ["background", "#efefef"],
                ]),
                DOMElement.cssText([DOMElement.searchcomboboxclass.selected], "", [
                    ["background-color", "#dfdfdf"],
                ]),
                /*
                DOMElement.cssText([DOMElement.searchcomboboxclass.selector], "", [
                    "-webkit-transform: rotate(90deg) translate(-3px, 3px);",
                    "transform: rotate(90deg) translate(-3px, 3px);",
                ]),
                */
            ]);
            DOMElement.searchcomboboxclass.clickFunction = function (event) {
                var i, t;
                t = document.getElementsByClassName(DOMElement.searchcomboboxclass.holder);
                if (t != null) {
                    for (i = 0; i < t.length; i++) {
                        if (t[i] != DOMElement.searchcomboboxclass.lastshown) {
                            if (t[i].classList.contains(DOMElement.searchcomboboxclass.display)) {
                                t[i].classList.toggle(DOMElement.searchcomboboxclass.display);
                                t[i].classList.toggle(DOMElement.searchcomboboxclass.hidden);
                            }
                        }
                    }
                }
                DOMElement.searchcomboboxclass.lastshown = null;
            };
            window.addEventListener("click", DOMElement.searchcomboboxclass.clickFunction);
        }
    },

    selectTable : function (params) {
        var x, viewDiv, dropdownDiv, contentDiv, textView, symbol, button, sb, rowlist = [], content = [], selectedIndex = -1, value = "";
        var width = 150, height = 120, searchbox = false, hassymbol = false;
        var toptions = [];
        var i, j, t, h, f;
        DOMElement.initSearchComboboxClass();
        if (params.width !== undefined) width = params.width;
        if (params.height !== undefined) height = params.height;
        if (params.searchbox !== undefined) searchbox = params.searchbox;
        if (params.selectedIndex !== undefined) {
            selectedIndex = params.selectedIndex;
            value = params.list[selectedIndex].value;
        }

        for (i = 0; i < params.list.length; i++) {
            toptions.push({
                value: params.list[i].value,
                cells:  params.list[i].cells
            });
            if (params.selectedvalue !== undefined) {
                if ((params.selectedvalue + "") == (params.list[i].value + "")) {
                    selectedIndex = i;
                    value = params.list[i].value;
                }
            }
        }
        if ((params.selectedIndex === undefined) && (selectedIndex == -1) && (params.list.length > 0)) {
            selectedIndex = 0;
            value = params.list[0].value;
        }
        for (i = 0; i < params.list.length; i++) {
            t = {
                attrs: {
                    className: [DOMElement.treetableclass.noselect],
                    style: {
                        width: width + "px",
                        height: "24px",
                        overflow: "visible",
                        cursor: "pointer",
                    }
                },
                children: []
            };
            if (EncodingClass.type.isArray(params.list[i].cells)) {
                for (j = 0; j < params.list[i].cells.length; j++) {
                    if (params.list[i].cells[j].tagName !== undefined) {
                       if (params.list[i].cells[j].tagName.toLowerCase() == "td") {
                           t.children.push(params.list[i].cells[j]);
                       }
                       else {
                           t.children.push(DOMElement.td({
                               attrs: {style: {
                                   paddingLeft: "5px",
                                   whiteSpace: "nowrap",
                                   overflowX: "visible",
                                   font: "14px Helvetica, Arial, sans-serif",
                                   textAlign: "left",
                               }},
                               children: [params.list[i].cells[j]]
                           }));
                       }
                   }
                   else if (EncodingClass.type.isString(params.list[i].cells[j])) {
                       t.children.push(DOMElement.td({
                           attrs: {style: {
                               paddingLeft: "5px",
                               whiteSpace: "nowrap",
                               overflowX: "visible",
                               font: "14px Helvetica, Arial, sans-serif",
                               textAlign: "left",
                           }},
                           text: params.list[i].cells[j]
                       }));
                   }
                   else {
                       t.children.push(DOMElement.td({
                           attrs: {style: {
                               paddingLeft: "5px",
                               whiteSpace: "nowrap",
                               overflowX: "visible",
                               font: "14px Helvetica, Arial, sans-serif",
                               textAlign: "left",
                           }},
                           text: params.list[i].cells[j].toString()
                       }));
                   }
                }
            }
            else if (params.list[i].cells.tagName !== undefined) {
                if (params.list[i].cells.tagName.toLowerCase() == "td") {
                    t.children.push(params.list[i].cells);
                }
                else {
                    t.children.push(DOMElement.td({
                        attrs: {style: {
                            paddingLeft: "5px",
                            whiteSpace: "nowrap",
                            overflowX: "visible",
                            font: "14px Helvetica, Arial, sans-serif",
                            textAlign: "left",
                        }},
                        children: [params.list[i].cells]
                    }));
                }
            }
            else if (EncodingClass.type.isString(params.list[i].cells)) {
                t.children.push(DOMElement.td({
                    attrs: {style: {
                        paddingLeft: "5px",
                        whiteSpace: "nowrap",
                        overflowX: "visible",
                        font: "14px Helvetica, Arial, sans-serif",
                        textAlign: "left",
                    }},
                    text: params.list[i].cells
                }));
            }
            else {
                t.children.push(DOMElement.td({
                    attrs: {style: {
                        paddingLeft: "5px",
                        whiteSpace: "nowrap",
                        overflowX: "visible",
                        font: "14px Helvetica, Arial, sans-serif",
                        textAlign: "left",
                    }},
                    text: params.list[i].cells.toString()
                }));
            }
            if (i == selectedIndex) t.attrs.className.push(DOMElement.searchcomboboxclass.selected);
            rowlist.push(DOMElement.tr(t));
        }
        if (searchbox) {
            sb = DOMElement.input({
                attrs: {
                    type: "text",
                    placeholder: "type here to search...",
                    value: "",
                    style: {
                        width: (width - 40) + "px",
                        height: "22px",
                        font: "14px Helvetica, Arial, sans-serif",
                        border: "0",
                        outline: "0",
                        textIndent: "5px"
                    },
                },
            });
            contentDiv = DOMElement.div({
                attrs: {
                    style: {
                        padding: "0",
                        border: "0",
                        width: width + "px",
                        maxHeight: (height-40) + "px",
                        overflowX: "hidden",
                        overflowY: "auto",
                        backgroundColor: "white"
                    }
                },
                children: [DOMElement.table({
                    attrs: {
                        className: DOMElement.searchcomboboxclass.tableHover,
                        style: {
                            border: "0",
                            padding: "0",
                            width: width + "px",
                        }
                    },
                    data: rowlist
                })]
            });
            dropdownDiv = DOMElement.div({
                attrs: {
                    style: {
                        width: width + "px",
                        maxHeight: height + "px",
                        overflow: "hidden",
                        border: "1px solid #ddd",
                        backgroundColor: "white",
                    }
                },
                children: [DOMElement.table({
                    data: [
                        [{attrs: {style: {
                            fontSize: "4px",
                            height: "6px",
                            border: "0px 1px 1px 1px solid #ddd",
                        }}}],
                        [DOMElement.div({
                            attrs: {
                                style: {
                                    marginLeft: "10px",
                                    padding: "0px 0px 0px 2px",
                                    border: "1px solid #003f7f",
                                    borderRadius: "4px",
                                    width: (width-20) + "px",
                                    height: "24px",
                                }
                            },
                            children: [DOMElement.table({
                                attrs: {
                                    width: "100%",
                                    style: {
                                        border: "0",
                                        padding: "0",
                                    }
                                },
                                data: [[

                                    {
                                        attrs: {
                                            style: {
                                                paddingRight: "2px",
                                                border: "0"
                                            }
                                        },
                                        children: [sb]
                                    },
                                    {
                                        attrs: {style: {width: "22px"}},
                                        children: [DOMElement.i({
                                            attrs: {
                                                className: ["fa fa-search", DOMElement.treetableclass.noselect],
                                                style: {
                                                    fontSize: "12px",
                                                    color: "#4f4f4f"
                                                }
                                            },
                                        })]
                                    }]]
                            })]
                        })],
                        [{attrs: {style: {
                            fontSize: "4px",
                            height: "6px"
                        }}}],
                        [contentDiv],
                    ]
                })]
            });
            sb.onclick = function (me) {
                return function (event) {
                    DOMElement.searchcomboboxclass.lastshown = me;
                }
            } (dropdownDiv);
            dropdownDiv.localData.searchbox = sb;
        }
        else {
            dropdownDiv = contentDiv = DOMElement.div({
                attrs: {
                    style: {
                        padding: "0",
                        border: "1px solid #ddd",
                        width: width + "px",
                        maxHeight: height + "px",
                        overflowX: "hidden",
                        overflowY: "auto",
                        backgroundColor: "white",
                    }
                },
                children: [DOMElement.table({
                    attrs: {
                        className: DOMElement.searchcomboboxclass.tableHover,
                        style: {
                            border: "0",
                            padding: "0",
                            width: width + "px",
                        }
                    },
                    data: rowlist
                })]
            });
        }
        content = [dropdownDiv];
        x = DOMElement.div({
            attrs: {
                style: {
                    width: width + "px",
                    height: height + "px",
                    overflow: "visible",
                }
            },
            children: content
        });
        if (params.id !== undefined) x.id = params.id;
        x.options = toptions;
        x.localData.selectedIndex = selectedIndex;
        x.localData.textView = textView;
        Object.defineProperty(x, "selectedIndex", {
            set: function (me) {
                return function (value) {
                    var changed = false;
                    if (me.localData.selectedIndex != value) {
                        changed = true;
                    }
                    me.localData.selectedIndex = value;
                }
            } (x),
            get: function (me) {
                return function () {
                    return me.localData.selectedIndex;
                }
            } (x)
        });
        Object.defineProperty(x, "value", {
            set: function (me) {
                return function (value) {
                    var i, si = -1;
                    for (i = 0; i < me.options.length; i++) {
                        if (me.options[i].value + "" == value + "") {
                            si = i;
                            break;
                        }
                    }
                    if (me.localData.selectedIndex != si) me.localData.selectedIndex = value;
                }
            } (x),
            get: function (me) {
                return function () {
                    if (me.localData.selectedIndex != -1) return me.options[me.localData.selectedIndex].value;
                    return null;
                }
            } (x)
        });
        x.localData.selectedIndex = selectedIndex;
        x.localData.rowlist = rowlist;
        x.localData.content = contentDiv;

        if (params.onchange !== undefined) {
            if (EncodingClass.type.isString(params.onchange)) {
                f = new Function ("event", "me", params.onchange);
            }
            else if (EncodingClass.type.isFunction(params.onchange)) {
                f = params.onchange;
            }
            x.localData.onchange = f;
        }
        for (i = 0; i < rowlist.length; i++) {
            rowlist[i].onclick = function (me, dropdown, index) {
                return function (event) {
                    var r = false, changed = false;
                    if (index != me.selectedIndex) {
                        if (me.selectedIndex != -1) {
                            me.localData.rowlist[me.selectedIndex].classList.toggle(DOMElement.searchcomboboxclass.selected);
                            changed = true;
                        }
                        me.localData.selectedIndex = index;
                        me.selectedText = me.options[index].text;
                        me.localData.rowlist[index].classList.toggle(DOMElement.searchcomboboxclass.selected);
                        DOMElement.searchcomboboxclass.lastshown = null;
                        if (changed) {
                            if (me.localData.onchange !== undefined) {
                                r = me.localData.onchange(event, me);
                            }
                            if (r !== undefined) return r;
                        }
                        return false;
                    }
                }
            } (x, dropdownDiv, i)
        }
        if (searchbox) {
            sb.onkeyup = sb.onpaste = sb.onchange = function(me) {
                return function (event) {
                    var keyword = sb.value.trim().toLowerCase();
                    var i, t;
                    for (i = 0; i < me.localData.rowlist.length; i++) {
                        t = me.options[i].text + "";
                        t = t.trim().toLowerCase();
                        if (t.indexOf(keyword) != -1) {
                            if (me.localData.rowlist[i].classList.contains(DOMElement.searchcomboboxclass.hidden)) me.localData.rowlist[i].classList.remove(DOMElement.searchcomboboxclass.hidden);
                        }
                        else {
                            if (!me.localData.rowlist[i].classList.contains(DOMElement.searchcomboboxclass.hidden)) me.localData.rowlist[i].classList.add(DOMElement.searchcomboboxclass.hidden);
                        }
                    }
                }
            } (x);
        }
        return x;
    },

    hTextSlider : function (params) {
        var data = [], textdata = [], filldiv = [], prevfillcell = [null], nextfillcell = [], w = [], textElement = [];
        var i, t;
        var color = "green", color2 = "rgba(0, 0, 0, 0)", textcolor = "black", minspace = 15, editlocked = false, selectedindex = 0, selectedvalue = params.list[0].value, rv, tw;
        if (params.color !== undefined) color = params.color;
        if (params.color2 !== undefined) color2 = params.color2;
        if (params.textcolor !== undefined) textcolor = params.textcolor;
        if (params.minspace !== undefined) minspace = params.minspace;
        if (params.editlocked !== undefined) editlocked = params.editlocked;
        if (params.selectedvalue !== undefined) {
            for (i = 0; i < params.list.length; i++) {
                if (params.selectedvalue == params.list[i].value) {
                    selectedindex = i;
                    selectedvalue = params.selectedvalue;
                    break;
                }
            }
        }
        for (i = 0; i < params.list.length; i++) {
            textElement.push(DOMElement.span({
                attrs: {
                    className: DOMElement.treetableclass.noselect,
                    style: {
                        font: "16px Helvetica, Arial, sans-serif",
                        fontWeight: "bold",
                        color: textcolor
                    }
                },
                text: params.list[i].text
            }));
            DOMElement.hiddendiv.appendChild(textElement[i]);
            w.push(textElement[i].offsetWidth + 30);
            DOMElement.hiddendiv.removeChild(textElement[i]);
            textdata.push(DOMElement.td({
                attrs: {
                    align: "center",
                    colSpan: 3,
                    style: {
                        paddingTop: "5px",
                        border: 0,
                        whiteSpace: "nowrap",
                        cursor: "pointer"
                    }
                },
                children: [textElement[i]]
            }));
        }
        for (i = 0; i < params.list.length; i++) {
            tw = (w[i]-14) >> 1;
            if (tw < minspace) tw = minspace;
            if (i > 0) {
                prevfillcell.push(DOMElement.div({
                    attrs: {
                        style: {
                            border: "1px 0px solid " + color,
                            backgroundColor: color,
                            width: tw + "px",
                            height: "4px"
                        }
                    }
                }));
                data.push(DOMElement.td({
                    attrs: {
                        align: "center",
                        style: {
                            padding: "8px 0px 8px 0px",
                            border: 0,
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            width: tw + "px",
                            height: "20px"
                        }
                    },
                    children: [prevfillcell[i]]
                }));
            }
            else {
                data.push(DOMElement.td({
                    attrs: {
                        align: "center",
                        valign: "middle",
                        style: {
                            padding: "8px 0px 8px 0px",
                            border: 0,
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            width: tw + "px",
                            height: "20px"
                        }
                    }
                }));
            }
            filldiv.push(DOMElement.div({
                attrs: {
                    style: {
                        border: "1px solid " + color,
                        borderRadius: "50%",
                        backgroundColor: color,
                        cursor: "pointer",
                        width: "14px",
                        height: "14px"
                    }
                }
            }));
            data.push(DOMElement.td({
                attrs: {
                    align: "center",
                    style: {
                        padding: 0,
                        border: 0,
                        width: "14px",
                        height: "20px"
                    }
                },
                children: [filldiv[i]]
            }));
            if (i + 1 < params.list.length) {
                nextfillcell.push(DOMElement.div({
                    attrs: {
                        style: {
                            border: "1px 0px solid " + color,
                            backgroundColor: color,
                            width: tw + "px",
                            height: "4px"
                        }
                    }
                }));
                data.push(DOMElement.td({
                    attrs: {
                        align: "center",
                        style: {
                            padding: "8px 0px 8px 0px",
                            border: 0,
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            width: tw + "px",
                            height: "20px"
                        }
                    },
                    children: [nextfillcell[i]]
                }));
            }
            else {
                data.push(DOMElement.td({
                    attrs: {
                        align: "center",
                        style: {
                            padding: "8px 0px 8px 0px",
                            border: 0,
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            width: tw + "px",
                            height: "20px"
                        }
                    }
                }));
            }
        }
        nextfillcell.push(null);
        rv = DOMElement.table({
            attrs: {
                style: {
                    border: 0
                }
            },
            data: [data, textdata]
        });
        if (params.id !== undefined) rv.id = params.id;
        rv.localData.value = selectedvalue;
        rv.localData.index = selectedindex;
        rv.localData.textElement = textElement;
        rv.localData.filldiv = filldiv;
        rv.localData.prevfillcell = prevfillcell;
        rv.localData.nextfillcell = nextfillcell;
        rv.localData.backgroundColor = color;
        rv.localData.backgroundColor2 = color2;
        rv.localData.valueList = [];
        rv.localData.editlocked = editlocked;
        for (i = 0; i < params.list.length; i++) {
            rv.localData.valueList.push(params.list[i].value);
            textdata[i].onclick = filldiv[i].onclick = function (me, index) {
                return function (event) {
                    if (!me.localData.editlocked) me.selectedindex = index;
                    DOMElement.cancelEvent(event);
                    return false;
                }
            } (rv, i);
        }
        rv.localData.refreshView = function (me) {
            return function () {
                var i;
                for (i = 0; i < me.localData.valueList.length; i++) {
                    if (i <= me.localData.index) {
                        me.localData.textElement[i].style.fontWeight = "bold";
                        me.localData.filldiv[i].style.backgroundColor = me.localData.backgroundColor;
                        if (me.localData.prevfillcell[i] !== null) me.localData.prevfillcell[i].style.backgroundColor = me.localData.backgroundColor;
                        if (i > 0) me.localData.nextfillcell[i-1].style.backgroundColor = me.localData.backgroundColor;
                    }
                    else {
                        me.localData.textElement[i].style.fontWeight = "normal";
                        me.localData.filldiv[i].style.backgroundColor = me.localData.backgroundColor2;
                        if (me.localData.prevfillcell[i] !== null) me.localData.prevfillcell[i].style.backgroundColor = me.localData.backgroundColor2;
                        if (i > 0) me.localData.nextfillcell[i-1].style.backgroundColor = me.localData.backgroundColor2;
                    }
                }
            }
        } (rv)
        rv.localData.refreshView();
        Object.defineProperty(rv, "selectedindex", {
            set: function (me) {
                return function (v) {
                    if (v < me.localData.valueList.length) {
                        me.localData.index = v;
                        me.localData.value = me.localData.valueList[v];
                        me.localData.refreshView();
                    }
                }
            } (rv),
            get: function (me) {
                return function () {
                    return me.localData.value;
                }
            } (rv)
        });
        Object.defineProperty(rv, "value", {
            set: function (me) {
                return function (v) {
                    var i;
                    for (i = 0; i < me.localData.valueList.length; i++) {
                        if (me.localData.valueList[i] == v) {
                            me.localData.index = i;
                            me.localData.value = v;
                            me.localData.refreshView();
                            return;
                        }
                    }
                }
            } (rv),
            get: function (me) {
                return function () {
                    return me.localData.value;
                }
            } (rv)
        });
        return rv;
    },

    colorPicker : function (params) {
        var i, j, r, color = "black", width = "50px", height = "20px", displaycell, colorPanel, inputColor, colorCodeCell;
        var colorArray = [
            ["#000000", "#434343", "#666666", "#999999", "#b7b7b7", "#cccccc", "#d9d9d9", "#efefef", "#f3f3f3", "#ffffff"],
            ["#980000", "#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#4a86e8", "#0000ff", "#9900ff", "#ff00ff"],
            ["#e6b8af", "#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#c9daf8", "#cfe2f3", "#d9d2e9", "#ead1dc"],
            ["#dd7e6b", "#ea9999", "#f8c8a0", "#ffe599", "#b6d7a8", "#a2c4c9", "#a4c2f4", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
            ["#cc4125", "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6d9eeb", "#6fa8dc", "#8e7cc3", "#c27ba0"],
            ["#a61c00", "#cc0000", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3c78d8", "#3d85c6", "#674ea7", "#a64d79"],
            ["#85200c", "#990000", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#1155cc", "#0b5394", "#351c75", "#741b47"],
            ["#5b0f00", "#660000", "#783f04", "#7f6000", "#274e13", "#0c343d", "#1c4587", "#073763", "#20124d", "#4c1130"]];
        var colorData = [], x;
        if (params.width !== undefined) width = params.width;
        if (params.height !== undefined) height = params.height;
        if (params.value !== undefined) color = params.value;
        displaycell = DOMElement.td({
            attrs: {
                style: {
                    border: "1px solid #ddd",
                    backgroundColor: color,
                    width: width,
                    height: height,
                    cursor: "pointer"
                }
            }
        });
        inputColor = DOMElement.input({
            attrs: {
                type: "color",
                value: color,
                style: {
                    width: "65px",
                    height: "40px",
                    cursor: "pointer"
                }
            }
        });
        colorCodeCell = DOMElement.td({
            attrs: {
                align: "center",
                vAlign: "middle"
            },
            text: inputColor.value
        });
        colorPanel = DOMElement.div({
            attrs: {
                style: {
                    position: "absolute",
                    paddingTop: "5px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    width: "210px",
                    border: "1px solid #ddd",
                    backgroundColor: "#eee",
                    zIndex: 100000,
                    display: "none"
                }
            },
        });
        for (i = 0; i < colorArray.length; i++) {
            x = [];
            for (j = 0; j < colorArray[i].length; j++) {
                x.push(DOMElement.td({
                    attrs: {
                        style: {
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                            borderTop: "1px solid #ddd",
                            borderLeft: "1px solid #ddd",
                            backgroundColor: colorArray[i][j]
                        },
                        onclick: function (inputColor, colorCodeCell, displaycell, color) {
                            return function (event) {
                                inputColor.value = color;
                                DOMElement.removeAllChildren(colorCodeCell);
                                colorCodeCell.appendChild(DOMElement.textNode(color));
                                displaycell.style.backgroundColor = color;
                                colorPanel.toggle(event);
                            }
                        } (inputColor, colorCodeCell, displaycell,colorArray[i][j])
                    }
                }));
            }
            colorData.push(DOMElement.tr({
                children: x
            }));
        }
        colorPanel.appendChild(DOMElement.table({data:[
            [{
                attrs: {
                    colSpan: 3,
                    align: "center"
                },
                children: [DOMElement.table({
                    attrs: {
                        style: {
                            borderRight: "1px solid #ddd",
                            borderBottom: "1px solid #ddd"
                        }
                    },
                    children: colorData
                })]
            }],
            [
                {
                    attrs: {
                        align: "center",
                        style: {
                            padding: "5px"
                        }
                    },
                    children: [inputColor]
                },
                {attrs: {style: {width: "20px", height: "20px"}}},
                colorCodeCell
            ]
        ]}));
        r = DOMElement.div({
            attrs: {
                className: "resetClass",
                style: {
                    position: "relative",
                }
            },
            children: [
                DOMElement.table({data:[[displaycell]]}),
                colorPanel
            ]
        });
        displaycell.onclick = function (me) {
            return function (event) {
                me.toggle(event);
            }
        } (colorPanel);
        colorPanel.toggle = function (host, me, colorPanel) {
            return function (event) {
                var rect;
                if (host.localData.colorPanelData.mode == "collapsed") {
                    host.localData.colorPanelData.mode = "expanded";
                    rect = me.getBoundingClientRect();
                    if (rect.top > DOMElement.clientInfo().height - rect.bottom) {
                        colorPanel.style.top = null;
                        colorPanel.style.bottom = "calc(100% + " + me.offsetHeight + "px)";
                    }
                    else {
                        colorPanel.style.top = "100%";
                        colorPanel.style.bottom = null;
                    }
                    colorPanel.style.display = "block";
                }
                else {
                    host.localData.colorPanelData.mode = "collapsed";
                    colorPanel.style.display = "none";
                }
            }
        } (r, displaycell, colorPanel);
        r.localData.colorPanelData = {
            mode: "collapsed"
        }
        inputColor.onchange = function (host, displaycell, me, colorCodeCell) {
            return function (event) {
                DOMElement.removeAllChildren(colorCodeCell);
                colorCodeCell.appendChild(DOMElement.textNode(me.value));
                displaycell.style.backgroundColor = me.value;
                host.toggle();
            }
        } (colorPanel, displaycell, inputColor, colorCodeCell);
        Object.defineProperty(r, "value", {
            set: function (me, displaycell, colorCodeCell) {
                return function (v) {
                    me.value = v;
                    DOMElement.removeAllChildren(colorCodeCell);
                    colorCodeCell.appendChild(DOMElement.textNode(me.value));
                    displaycell.style.backgroundColor = me.value;
                }
            } (inputColor, displaycell, colorCodeCell),
            get: function (me) {
                return function () {
                    return me.value;
                }
            } (inputColor)
        });
        if (params.id !== undefined) r.id = params.id;
        return r;
    },

    rawTabPanel : function (params) {
        var binded, activeHeaderAdapter, inactiveHeaderAdapter, contentAdapter;
        if (params.binded !== undefined) binded = params.binded; else binded = false;
        activeHeaderAdapter = params.activeHeaderAdapter;
        inactiveHeaderAdapter = params.inactiveHeaderAdapter;
        contentAdapter = params.contentAdapter;

    },

    tabPanel : function (params) {
        var r, header, contentCell, content, footer, leftTabButton, rightTabButton, tb, containerCell, rulerCell;
        var w, h, t;
        header = DOMElement.td({attrs: {
            vAlign: "top"
        }});
        content = DOMElement.div();
        contentCell = DOMElement.td({
            attrs: {
                vAlign: "top",
            },
            children: [content]
        });
        if (params.border !== undefined) {
            switch (params.border) {
                case "content":
                    contentCell.style.border = "1px solid #ddd";
                    break;
                case "curved-content":
                    content.style.border = "1px solid #ddd";
                    content.style.borderRadius = "0px 4px 0px 0px";
                    break;
                case "full":
                    header.style.borderTop = "1px solid #ddd";
                    header.style.borderLeft = "1px solid #ddd";
                    header.style.borderRight = "1px solid #ddd";
                    contentCell.style.border = "1px solid #ddd";
                    break;
                case "line":
                default:
                    contentCell.style.borderTop = "1px solid #ddd";
                    break;
            }
        }
        tb = DOMElement.table({data: [
            [header],
            [contentCell],
        ]});
        rulerCell = DOMElement.td();
        containerCell = DOMElement.div({
            attrs: {
                style: {
                    position: "absolute"
                }
            },
            children: [tb]
        });
        r = DOMElement.div({
            attrs: {
                className: "resetClass",
            },
            children: [
                containerCell,
                DOMElement.table({
                    data: [DOMElement.tr({children: [rulerCell]})]
                })
            ]
        });
        r.localData.tabData = {
            width: "auto",
            height: "auto",
            curWidth: 64,
            curHeight: 64,
            selectedTabIndex: -1,
            header: header,
            headerHeight: 34,
            contentCell: contentCell,
            content: content,
            rulerCell: rulerCell,
            list: []
        }
        if (params.width !== undefined) {
            r.localData.tabData.width = params.width;
            if (params.width != "auto") rulerCell.style.width = params.width;
        }
        if (params.height !== undefined) {
            r.localData.tabData.height = params.height;
            if (params.height != "auto") rulerCell.style.height = params.height;
        }
        if (params.closebutton !== undefined) {
            r.localData.tabData.closebutton = params.closebutton;
        }
        else {
            r.localData.tabData.closebutton = false;
        }
        if (r.localData.tabData.width != "auto") {
            header.style.width = "64px";
            content.style.width = "64px";
            contentCell.style.width = "64px";
            rulerCell.onresize = function (me) {
                return function (event) {
                    var i, s, w, h;
                    s = me.localData.tabData.list;
                    me.localData.tabData.list = [];
                    DOMElement.removeAllChildren(me.localData.tabData.header);
                    DOMElement.removeAllChildren(me.localData.tabData.content);
                    w = me.localData.tabData.rulerCell.offsetWidth - 2;
                    h = me.localData.tabData.rulerCell.offsetHeight - 2;
                    me.localData.tabData.header.style.width = w + "px";
                    me.localData.tabData.content.style.width = w + "px";
                    me.localData.tabData.contentCell.style.width = w + "px";
                    me.style.width = w + "px";
                    me.localData.tabData.curWidth = w;
                    me.localData.tabData.header.style.height = "34px";
                    me.localData.tabData.contentCell.style.height = "34px";
                    me.localData.tabData.content.style.height = "34px";
                    me.style.height = h + "px";
                    me.localData.tabData.curHeight = h;
                    for (i = 0; i < s.length; i++) {
                        me.add(s[i].title, s[i].rawcontent, s[i].closeTrigger);
                    }
                }
            } (r);
            r.onresize = rulerCell.onresize;
            header.style.height = "34px";
            content.style.height = "34px";
            contentCell.style.height = "34px";
        }
        else {
            containerCell.onresize = function (me) {
                return function (event) {
                    var i, s, w, h;
                    s = me.localData.tabData.list;
                    me.localData.tabData.list = [];
                    DOMElement.removeAllChildren(me.localData.tabData.header);
                    DOMElement.removeAllChildren(me.localData.tabData.content);
                    for (i = 0; i < s.length; i++) {
                        me.add(s[i].title, s[i].rawcontent, s[i].closeTrigger);
                    }
                }
            } (r);
            header.style.minWidth = "64px";
            content.style.minWidth = "64px";
            contentCell.style.minWidth = "64px";
            header.style.minHeight = "34px";
            content.style.minHeight = "34px";
            contentCell.style.minHeight = "34px";
            r.onresize = containerCell.onresize;
        }
        r.add = function (me, ocf) {
            return function (title, content, closeTrigger) {
                var th, tc, hw, cw, ch, tw, t, st, ta = null, tb = null, tf;
                var params, i, b1, b2;
                var onleave = null, onselect = null;
                if (EncodingClass.type.isObject(title) && (content === undefined) && (closeTrigger === undefined)) {
                    params = title;
                    if (params.title !== undefined) {
                        title = params.title;
                    }
                    else {
                        title = "";
                    }
                    if (params.content !== undefined) content = params.content;
                    if (params.onclose !== undefined) closeTrigger = params.onclose;
                    if (params.onleave !== undefined) onleave = params.onleave;
                    if (params.onselect !== undefined) onselect = params.onselect;
                }
                if (me.localData.tabData.closebutton) {
                    ta = DOMElement.button({
                        attrs: {
                            type: "button",
                            className: "btn btn-default " + DOMElement.treetableclass.noselect,
                            style: {
                                borderRadius: "4px 0px 0px 0px"
                            },
                            onclick: function (me, index, ocf) {
                                return function (event) {
                                    me.localData.tabData.selectedTabIndex = index;
                                    me.redraw();
                                    if (ocf !== undefined) {
                                        if (EncodingClass.type.isFunction(ocf)) {
                                            ocf(index, me);
                                        }
                                    }
                                }
                            } (me, me.localData.tabData.list.length, ocf)
                        },
                        text: title
                    });
                    tf = function (me, index, closeTrigger) {
                        return function (event) {
                            if (closeTrigger === undefined) {
                                setTimeout(function() {
                                    me.removeByIndex(index);
                                }, 10);
                            }
                            else if (EncodingClass.type.isFunction(closeTrigger)) {
                                if (closeTrigger() !== false) {
                                    setTimeout(function() {
                                        me.removeByIndex(index);
                                    }, 10);
                                }
                            }
                            DOMElement.cancelEvent(event);
                            return false;
                        }
                    } (me, me.localData.tabData.list.length, closeTrigger);
                    tb = DOMElement.button({
                        attrs: {
                            type: "button",
                            className: "btn btn-default",
                            style: {
                                borderRadius: "0px 4px 0px 0px",
                                width: "16px",
                                padding: "6px 0px"
                            },
                            onclick: tf,
                            onmouseover: function (event, me) {
                                var i, n;
                                n = me.childNodes.length;
                                for (i = 0; i < n; i++) {
                                    me.childNodes[i].style.color = "#ff0000";
                                }
                            },
                            onmouseout: function (event, me) {
                                var i, n;
                                n = me.childNodes.length;
                                for (i = 0; i < n; i++) {
                                    me.childNodes[i].style.color = "#aaa";
                                }
                            }
                        },
                        children: [DOMElement.span({
                            attrs: {
                                //className: "glyphicon glyphicon-remove",
                                style: {
                                    color: "#aaa",
                                    fontWeight: "bold"
                                }
                            },
                            text: "x"
                        })]
                    });
                    th = DOMElement.div({
                        attrs: {
                            className: "btn-group " + DOMElement.treetableclass.noselect,
                            style: {
                                whiteSpace: "nowrap",
                                display: "inline-block",
                                borderRadius: "4px 4px 0px 0px",
                            }
                        },
                        children: [ta, tb]
                    });
                }
                else {
                    th = DOMElement.button({
                        attrs: {
                            type: "button",
                            className: "btn btn-default " + DOMElement.treetableclass.noselect,
                            style: {
                                whiteSpace: "nowrap",
                                display: "inline-block",
                                borderRadius: "4px 4px 0px 0px"
                            },
                            onclick: function (me, index) {
                                return function (event) {
                                    me.localData.tabData.selectedTabIndex = index;
                                    me.redraw();
                                }
                            } (me, me.localData.tabData.list.length)
                        },
                        text: title
                    });
                }
                t = DOMElement.div({children: [content]});
                DOMElement.hiddendiv.appendChild(th);
                hw = th.offsetWidth;
                DOMElement.hiddendiv.removeChild(th);
                DOMElement.hiddendiv.appendChild(t);
                cw = t.offsetWidth;
                ch = t.offsetHeight;
                DOMElement.hiddendiv.removeChild(t);
                DOMElement.removeAllChildren(t);
                tc = DOMElement.div({
                    attrs: {
                        className: "resetClass",
                        position: "relative",
                        style: {
                            display: "block"
                        }
                    },
                    children: [content]
                });
                me.localData.tabData.content.appendChild(tc);
                me.localData.tabData.list.push({
                    hw: hw,
                    cw: cw,
                    ch: ch,
                    header: th,
                    content: tc,
                    ta: ta,
                    tb: tb,
                    title: title,
                    rawcontent: content,
                    closeTrigger: closeTrigger
                });
                if (me.localData.tabData.selectedTabIndex >= 0) {
                    tc.style.display = "none";
                }
                else {
                    me.localData.tabData.selectedTabIndex = me.localData.tabData.list.length - 1;
                }
                if (me.localData.tabData.width != "auto") {
                    tc.style.width = me.localData.tabData.curWidth + "px",
                    tc.style.overflowX = "auto";
                    DOMElement.removeAllChildren(me.localData.tabData.header);
                    tw = 0;
                    b1 = [];
                    b2 = [];
                    for (i = 0; i < me.localData.tabData.list.length; i++) {
                        if ((tw == 0) || (tw + me.localData.tabData.list[i].hw < me.localData.tabData.curWidth)) {
                            b2.push(me.localData.tabData.list[i].header);
                            tw += me.localData.tabData.list[i].hw;
                        }
                        else {
                            b1.push(DOMElement.tr({children: [DOMElement.td({children: b2})]}));
                            b2 = [me.localData.tabData.list[i].header];
                            tw = me.localData.tabData.list[i].hw;
                        }
                    }
                    if (b2.length > 0) b1.push(DOMElement.tr({children: [DOMElement.td({children: b2})]}));
                    me.localData.tabData.header.appendChild(DOMElement.table({data: b1}));
                    me.localData.tabData.headerHeight = b1.length * 34;
                }
                else {
                    tc.style.width = (cw+20) + "px",
                    tc.style.overflowX = "visible";
                    me.localData.tabData.header.appendChild(th);
                    me.localData.tabData.headerHeight = me.localData.tabData.header.offsetHeight;
                }
                if (me.localData.tabData.height != "auto") {
                    me.localData.tabData.header.style.height = me.localData.tabData.headerHeight + "px";
                    tc.style.height = (me.localData.tabData.curHeight-me.localData.tabData.headerHeight-4) + "px";
                    me.localData.tabData.contentCell.style.height = (me.localData.tabData.curHeight-me.localData.tabData.headerHeight-4) + "px";
                    me.localData.tabData.content.style.height = (me.localData.tabData.curHeight-me.localData.tabData.headerHeight-4) + "px";
                    tc.style.overflowY = "auto";
                }
                else {
                    ch = 0;
                    for (i = 0; i < me.localData.tabData.list.length; i++) {
                        if (me.localData.tabData.list[i].ch > ch) ch = me.localData.tabData.list[i].ch;
                    }
                    for (i = 0; i < me.localData.tabData.list.length; i++) {
                        me.localData.tabData.list[i].content.style.height = (ch+20) + "px";
                    }
                    me.localData.tabData.rulerCell.style.height = (ch + 20 + me.localData.tabData.header.offsetHeight) + "px";
                    tc.style.overflowY = "visible";
                }
                me.redraw();
                if ((ocf !== undefined) && (me.localData.tabData.list.length == 1)) {
                    if (EncodingClass.type.isFunction(ocf)) {
                        ocf(0, me);
                    }
                }
            }
        } (r, params.onchange);
        r.removeByIndex = function (me, ocf) {
            return function (index) {
                var i, s, nindex = -1;
                s = me.localData.tabData.list;
                me.localData.tabData.list = [];
                DOMElement.removeAllChildren(me.localData.tabData.header);
                DOMElement.removeAllChildren(me.localData.tabData.content);
                if (me.localData.tabData.selectedTabIndex >= s.length - 1) {
                    nindex = me.localData.tabData.selectedTabIndex = s.length - 2;
                }
                else if (me.localData.tabData.selectedTabIndex == index) {
                    nindex = index;
                }
                for (i = 0; i < s.length; i++) {
                    if (i != index) me.add(s[i].title, s[i].rawcontent);
                }
                if ((nindex != -1) && (ocf !== undefined)) {
                    if (EncodingClass.type.isFunction(ocf)) {
                        ocf(nindex, me);
                    }
                }
            }
        } (r, params.onchange);
        r.remove = function (me) {
            return function (element) {
                var i;
                for (i = 0; i < me.localData.tabData.list.length; i++) {
                    if (me.localData.tabData.list[i].rawcontent === element) {
                        return me.removeByIndex(i);
                    }
                }
            }
        } (r);
        r.redraw = function (me) {
            return function () {
                var i;
                for (i = 0; i < me.localData.tabData.list.length; i++) {
                    if (i == me.localData.tabData.selectedTabIndex) {
                        if (me.localData.tabData.list[i].ta != null) {
                            me.localData.tabData.list[i].ta.className = "btn btn-info " + DOMElement.treetableclass.noselect;
                            me.localData.tabData.list[i].tb.className = "btn btn-info " + DOMElement.treetableclass.noselect;
                        }
                        else {
                            me.localData.tabData.list[i].header.className = "btn btn-info " + DOMElement.treetableclass.noselect;
                        }
                        me.localData.tabData.list[i].content.style.display = "block";
                    }
                    else {
                        me.localData.tabData.list[i].content.style.display = "none";
                        if (me.localData.tabData.list[i].ta != null) {
                            me.localData.tabData.list[i].ta.className = "btn btn-default " + DOMElement.treetableclass.noselect;
                            me.localData.tabData.list[i].tb.className = "btn btn-default " + DOMElement.treetableclass.noselect;
                        }
                        else {
                            me.localData.tabData.list[i].header.className = "btn btn-default " + DOMElement.treetableclass.noselect;
                        }
                    }
                }
            }
        } (r);
        if (r.localData.tabData.width != "auto") {
            r.renameTitle = function (me, rulerCell) {
                return function (index, newtitle) {
                    if (index < 0) return;
                    if (index >= me.localData.tabData.list.length) return;
                    me.localData.tabData.list[index].title = newtitle;
                    rulerCell.onresize(null);
                }
            } (r, rulerCell)
        }
        else {
            r.renameTitle = function (me, containerCell) {
                return function (index, newtitle) {
                    if (index < 0) return;
                    if (index >= me.localData.tabData.list.length) return;
                    me.localData.tabData.list[index].title = newtitle;
                    containerCell.onresize(null);
                }
            } (r, containerCell);
        }
        Object.defineProperty(r, "count", {
            get: function (me) {
                return function () {
                    return me.localData.tabData.list.length;
                }
            } (r)
        });
        Object.defineProperty(r, "selectedIndex", {
            set : function (me) {
                return function (value) {
                    if (value < 0) return;
                    if (value >= me.localData.tabData.list.length) return;
                    me.localData.tabData.selectedTabIndex = value;
                    me.redraw();
                }
            } (r),
            get: function (me) {
                return function () {
                    return me.localData.tabData.selectedTabIndex;
                }
            } (r)
        });
        return r;
    },

    frameList : function (params) {
        var r = DOMElement.div(params);
        var i, f, type;
        r.localData.list = [];
        r.localData.index = -1;
        r.style.overflow = "hidden";
        r.style.position = "relative";
        if (params.type !== undefined) {
            type = params.type;
        }
        else {
            type = "block";
        }
        Object.defineProperty(r, "count", {
            get: function (me) {
                return function () {
                    return me.localData.list.length;
                }
            } (r)
        });
        Object.defineProperty(r, "selectedIndex", {
            set : function (me, type) {
                return function (value) {
                    if (value < 0) return;
                    if (value >= me.localData.list.length) return;
                    if (value == me.localData.index) return;
                    if ((me.localData.index >= 0) && (me.localData.index < me.localData.list.length)) {
                        switch (type) {
                            case "opacity":
                                me.localData.list[me.localData.index].element.style.opacity = 0;
                                break;
                            case "block":
                            default:
                                me.localData.list[me.localData.index].element.style.display = "none";
                                break;
                        }
                        if ((me.localData.list[me.localData.index].element.onleave !== undefined) && (me.localData.list[me.localData.index].element.onleave !== null)) {
                            me.localData.list[me.localData.index].element.onleave({
                                bubbles: false,
                                cancelBubble: false,
                                cancelable: false,
                                composed: false,
                                currentTarget: me.localData.list[me.localData.index].element,
                                defaultPrevented: false,
                                eventPhase: 2,
                                isTrusted: true,
                                path: me.localData.list[me.localData.index].element,
                                returnValue: true,
                                srcElement: me,
                                target: me.localData.list[me.localData.index].element,
                                timeStamp: (new Date()).getTime() - DOMElement.startTimeStamp,
                                type: "select",
                            }, me);
                        }
                    }
                    me.localData.index = value;
                    switch (type) {
                        case "opacity":
                            me.localData.list[me.localData.index].element.style.opacity = 1;
                            break;
                        case "block":
                        default:
                            me.localData.list[me.localData.index].element.style.display = "block";
                            break;
                    }
                    if ((me.localData.list[me.localData.index].element.onresize !== undefined) && (me.localData.list[me.localData.index].element.onresize !== null)) {
                        me.localData.list[me.localData.index].element.onresize({
                            bubbles: false,
                            cancelBubble: false,
                            cancelable: false,
                            composed: false,
                            currentTarget: me.localData.list[me.localData.index].element,
                            defaultPrevented: false,
                            eventPhase: 2,
                            isTrusted: true,
                            path: me.localData.list[me.localData.index].element,
                            returnValue: true,
                            srcElement: me,
                            target: me.localData.list[me.localData.index].element,
                            timeStamp: (new Date()).getTime() - DOMElement.startTimeStamp,
                            type: "select",
                        }, me);
                    }
                    if ((me.localData.list[me.localData.index].element.onselect !== undefined) && (me.localData.list[me.localData.index].element.onselect !== null)) {
                        me.localData.list[me.localData.index].element.onselect({
                            bubbles: false,
                            cancelBubble: false,
                            cancelable: false,
                            composed: false,
                            currentTarget: me.localData.list[me.localData.index].element,
                            defaultPrevented: false,
                            eventPhase: 2,
                            isTrusted: true,
                            path: me.localData.list[me.localData.index].element,
                            returnValue: true,
                            srcElement: me,
                            target: me.localData.list[me.localData.index].element,
                            timeStamp: (new Date()).getTime() - DOMElement.startTimeStamp,
                            type: "select",
                        }, me);
                    }
                }
            } (r, type),
            get: function (me) {
                return function () {
                    return me.localData.index;
                }
            } (r)
        });
        f = r.onresize;
        r.onresize = function (func, me) {
            return function (event) {
                var i;
                for (i = 0; i < me.localData.list.length; i++) {
                    if (me.localData.list[i].content.onresize !== undefined) {
                        if (EncodingClass.type.isFunction(me.localData.list[i].content.onresize)) {
                            me.localData.list[i].content.onresize(event, me.localData.list[i].content);
                        }
                    }
                }
                if ((func !== undefined) && (func !== null)) func(event, me);
            }
        } (f, r);
        r.add = function (me, type) {
            return function (element) {
                var e = DOMElement.div({
                    attrs: {
                        style: {
                            padding: "0",
                            border: "0"
                        }
                    },
                    children: [element]
                });
                switch (type) {
                    case "opacity":
                        e.style.opacity = 0;
                        e.style.display = "block";
                        e.style.position = "absolute";
                        break;
                    case "block":
                    default:
                        e.style.display = "none";
                        break;
                }
                me.localData.list.push({
                    element: e,
                    content: element
                });
                me.appendChild(e);
                if (me.localData.index == -1) me.selectedIndex = 0;
            }
        } (r, type);
        r.removeByIndex = function (me) {
            return function (index) {
                if (index < 0) return;
                if (index >= me.count) return;
                me.remove(me.localData.list[index].content);
            }
        } (r);
        r.remove = function (me) {
            return function (element) {
                var i, k, s;
                for (i = 0; i < me.localData.list.length; i++) {
                    if (me.localData.list[i].content === element) {
                        me.removeChild(me.localData.list[i].element);
                        s = [];
                        for (k = 0; k < me.localData.list.length; k++) {
                            if (i != k) s.push(me.localData.list[k]);
                        }
                        me.localData.list = s;
                        if (i == me.localData.index) {
                            if (i >= me.localData.list.length) {
                                if (me.localData.list.length == 0) {
                                    me.localData.index = -1;
                                }
                                else {
                                    me.selectedIndex = i - 1;
                                }
                            }
                            else {
                                me.localData.index = -1;
                                me.selectedIndex = i;
                            }
                        }
                        else if (i < me.localData.index) me.localData.index--;
                    }
                }
            }
        } (r);
        r.select = function (me) {
            return function (element) {
                for (i = 0; i < me.localData.list.length; i++) {
                    if (me.localData.list[i].content === element) {
                        me.selectedIndex = i;
                        return;
                    }
                }
            }
        } (r);
        if (params.list !== undefined) {
            for (i = 0; i < params.list.length; i++) {
                r.add(params.list[i]);
            }
        }
        return r;
    },

    imagesSlider : function (params) {
        params.type = "opacity";
        var r = DOMElement.frameList(params);
        var i, s, src, type, imgElement, cellElement, oldfunc;
        r.localData.imgElements = [];
        if (params.images !== undefined) {
            for (i = 0; i < params.images.length; i++) {
                if (EncodingClass.type.isString(params.images[i])) {
                    src = params.images[i];
                    type = "scale";
                }
                else {
                    src = params.images[i].src;
                    if (params.images[i].type !== undefined) {
                        type = params.images[i].type;
                    }
                    else {
                        type = "scale";
                    }
                }
                imgElement = DOMElement.img({
                    attrs: {
                        src: src
                    }
                });
                if (type == "original") {
                    imgElement = DOMElement.div({
                        attrs: {
                            style: {
                                padding: "0",
                                border: "0",
                                overflow: "hidden",
                                textAlign: "center",
                                verticalAlign: "middle"
                            }
                        },
                        children: [imgElement]
                    });
                }
                cellElement = DOMElement.td({
                    attrs: {
                        align: "center",
                        vAlign: "middle",
                        style: {
                            textAlign: "center",
                            border: "0",
                            padding: "0"
                        }
                    },
                    children: [imgElement]
                });
                s = DOMElement.table({
                    attrs: {
                        style: {
                            border: "0",
                            padding: "0",
                        },
                        onresize : function (cellElement, imgElement, host, type) {
                            return function (event) {
                                switch (type) {
                                    case "scale":
                                        imgElement.style.maxWidth = cellElement.style.width = host.offsetWidth + "px";
                                        imgElement.style.maxHeight = cellElement.style.height = host.offsetHeight + "px";
                                        break;
                                    case "stretch":
                                        imgElement.width = host.offsetWidth;
                                        imgElement.height = host.offsetHeight;
                                        cellElement.style.width = host.offsetWidth + "px";
                                        cellElement.style.height = host.offsetHeight + "px";
                                        break;
                                    case "original":
                                        imgElement.style.width = cellElement.style.width = host.offsetWidth + "px";
                                        imgElement.style.height = cellElement.style.height = host.offsetHeight + "px";
                                    default:
                                        break;
                                }
                            }
                        } (cellElement, imgElement, r, type)
                    },
                    data: [DOMElement.tr({
                        attrs: {
                            style: {
                                border: "0",
                                padding: "0"
                            }
                        },
                        children: [cellElement]
                    })]
                });
                r.add(s);
                r.localData.imgElements.push(imgElement);
            }
        }
        if (params.interval !== undefined) {
            if (params.interval > 0) {
                r.localData.lastUpdate = 0;
                r.localData.interval = params.interval;
                oldfunc = r.oninterval;
                r.oninterval = function (func) {
                    return function (event, me) {
                        if (event.timeStamp > me.localData.lastUpdate + r.localData.interval) {
                            me.localData.lastUpdate = event.timeStamp;
                            if (me.count > 0) {
                                if (me.selectedIndex + 1 < me.count) {
                                    me.selectedIndex = me.selectedIndex + 1;
                                }
                                else {
                                    me.selectedIndex = 0;
                                }
                            }
                        }
                        if ((func !== undefined) && (func !== null)) return func(event, me);
                        if (me.onchange !== undefined) {
                            if (EncodingClass.type.isFunction(me.onchange)) {
                                me.onchange(event, me);
                            }
                        }
                    }
                } (oldfunc);
            }
        }
        if (params.transitionDuration !== undefined) {
            s = params.transitionDuration;
        }
        else if ((params.interval !== undefined) && (params.interval !== 0)) {
            s = ~~(params.interval / 5);
            if (s > 2000) s = 2000;
            s = s + "ms";
        }
        else {
            s = "1s";
        }
        for (i = 0; i < r.localData.list.length; i++) {
            r.localData.list[i].element.style.transitionDuration = s;
        }
        return r;
    },

    addEvent : function (object, type, callback) {
        if (object == null || typeof(object) == 'undefined') return;
        callback = function (func, me) {
            return function (event) {
                return func(event, me);
            }
        } (callback, object);
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
        } else if (object.attachEvent) {
            object.attachEvent("on" + type, callback);
        } else {
            object["on"+type] = callback;
        }
    },

    clientInfo : function () {
        var myWidth = 0, myHeight = 0;
        if( typeof( window.innerWidth ) == 'number' ) {
            //Non-IE
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        }
        else if ( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        }
        else if ( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            //IE 4 compatible
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        return {
            width: myWidth,
            height: myHeight
        };
    },

    init : function () {
        var tName = ["a", "abbr", "address", "area", "article", "aside", "audio",
                     "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button",
                     "canvas", "caption", "cite", "code", "col", "colgroup",
                     "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt",
                     "em", "embed",
                     "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset",
                     "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html",
                     "i", "iframe", "img", "input", "ins",
                     "kbd",
                     "label", "legend", "li", "link",
                     "main", "map", "mark", "menu", "menuitem", "meta", "meter",
                     "nav", "noframe", "noscript",
                     "object", "ol", "optgroup", "option", "output",
                     "p", "param", "picture", "pre", "progress",
                     "q",
                     "rp", "rt", "ruby",
                     "s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup",
                     "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt",
                     "u", "ul",
                     "video",
                     "wbr"
                 ];
        var i;
        for (i = 0; i < tName.length; i++) {
            if (DOMElement[tName[i]] === undefined) DOMElement[tName[i]] = function (eName) {
                return function (params) {
                    if (params === undefined) {
                        params = {elementType: eName}
                    }
                    else {
                        params.elementType = eName;
                    }
                    return DOMElement.create(params);
                }
            } (tName[i]);
            //new Function ("params", "if (params === undefined) params = {elementType: '" + tName[i] + "'}; else params.elementType = '" + tName[i] + "'; return DOMElement.create(params);");
        }
        delete DOMElement.init;
        if (document.getElementsByTagName("BODY") == null) {
            if (window.addEventListener) {
                window.addEventListener('load', DOMElement.attach);
            }
            else {
                window.attachEvent('onload', DOMElement.attach);
            }
        }
        else {
            DOMElement.attach();
        }
    },

    resizeEvent : function (element, event) {
        var i;
        if ((element.tagName !== undefined) && (element.onresize !== undefined) && (element.localData !== undefined)) {
            if (element.localData.resizeParams !== undefined) {
                if (EncodingClass.type.isString(element.tagName)) {
                    if ((element.tagName.toLowerCase() != "body")) {
                        if (EncodingClass.type.isFunction(element.onresize)) {
                            if ((element.localData.resizeParams.w != element.offsetWidth) || (element.localData.resizeParams.h != element.offsetHeight)) {
                                element.localData.resizeParams.w = element.offsetWidth;
                                element.localData.resizeParams.h = element.offsetHeight;
                                element.onresize(event, element);
                            }
                        }
                    }
                }
            }
        }
        for (i = 0; i < element.childNodes.length; i++) {
            DOMElement.resizeEvent(element.childNodes[i], event);
        }
    },

    resizeThread : function (element) {
        var i, isroot = false;
        if (element == null) {
            isroot = true;
            element = DOMElement.bodyElement;
        }
        if ((element.tagName !== undefined) && (element.onresize !== undefined) && (element.localData !== undefined)) {
            if (element.localData.resizeParams !== undefined) {
                if (EncodingClass.type.isString(element.tagName)) {
                    if ((element.tagName.toLowerCase() != "body")) {
                        if (EncodingClass.type.isFunction(element.oninterval)) {
                            element.oninterval({
                                bubbles: false,
                                cancelBubble: false,
                                cancelable: false,
                                composed: false,
                                currentTarget: element,
                                defaultPrevented: false,
                                eventPhase: 2,
                                isTrusted: true,
                                path: element,
                                returnValue: true,
                                srcElement: element,
                                target: element,
                                timeStamp: (new Date()).getTime() - DOMElement.startTimeStamp,
                                type: "resize",
                            }, element);
                        }
                        if (EncodingClass.type.isFunction(element.onresize)) {
                            if ((element.localData.resizeParams.w != element.offsetWidth) || (element.localData.resizeParams.h != element.offsetHeight)) {
                                element.localData.resizeParams.w = element.offsetWidth;
                                element.localData.resizeParams.h = element.offsetHeight;
                                element.onresize({
                                    bubbles: false,
                                    cancelBubble: false,
                                    cancelable: false,
                                    composed: false,
                                    currentTarget: element,
                                    defaultPrevented: false,
                                    eventPhase: 2,
                                    isTrusted: true,
                                    path: element,
                                    returnValue: true,
                                    srcElement: element,
                                    target: element,
                                    timeStamp: (new Date()).getTime() - DOMElement.startTimeStamp,
                                    type: "resize",
                                }, element);
                            }
                        }
                    }
                }
            }
        }
        for (i = 0; i < element.childNodes.length; i++) {
            DOMElement.resizeThread(element.childNodes[i]);
        }
        if (isroot) setTimeout("DOMElement.resizeThread(null);", 200);
    },

    attach : function () {
        var x = DOMElement.body();
        if (x == null) {
            setTimeout("DOMElement.attach();", 10);
            return;
        }
        DOMElement.bodyElement = x;
        if (DOMElement.hiddendiv != null) return;
        DOMElement.hiddendiv = DOMElement.div({
            attrs: {
                id: "DOMClass_invisible_div",
                style: {
                    visibility: "hidden",
                    position: "fixed"
                }
            }
        });
        if (x.childNodes.length > 0) {
            x.insertBefore(DOMElement.hiddendiv, x.children[0]);
        }
        else {
            x.appendChild(DOMElement.hiddendiv);
        }
        DOMElement.imageLoader = DOMElement.img({
            attrs: {
                onload: function (event) {
                    DOMElement.imageready = true;
                },
                onerror: function (event) {
                    DOMElement.imageready = true;
                }
            }
        });
        DOMElement.hiddendiv.appendChild(DOMElement.imageLoader);
        DOMElement.addEvent(window, "resize", function(event) {
            DOMElement.resizeEvent(DOMElement.bodyElement, event);
        });
        DOMElement.startTimeStamp = (new Date()).getTime();
        setTimeout("DOMElement.resizeThread(null);", 200);
        if (ModuleManagerClass !== undefined) {
            ModuleManagerClass.register({
                name: "DOMElement",
                prerequisites: ["EncodingClass"],
                trigger: function () {
                    DOMElement.init_css();
                    DOMElement.init_dropdownbox();
                }
            });
        }
        else {
            DOMElement.init_css();
            DOMElement.init_dropdownbox();
        }
    },

    imagequeue : [],
    imageready : true,

    loadImageProcess : function () {
        var i, q = [];
        if ((DOMElement.imagequeue.length > 0) && (DOMElement.imageready)) {
            DOMElement.imageready = false;
            st = DOMElement.imagequeue[0];
            for (i = 1; i < DOMElement.imagequeue.length; i++) q.push(DOMElement.imagequeue[i]);
            DOMElement.imagequeue = q;
            DOMElement.imageLoader.src = st;
        }
        setTimeout("DOMElement.loadImageProcess();, 10");
    },

    loadImage : function (imageLink) {
        var i;
        if (EncodingClass.type.isString(imageLink)) {
            DOMElement.imagequeue.push(imageLink);
        }
        else if (EncodingClass.type.isArray(imageLink)) {
            for (i = 0; i < imageLink.length; i++) DOMElement.imagequeue.push(imageLink[i]);
        }

    },

    tooltip : function (params) {
        var st, t = params.attrs, x = [], content, i, spanelement;
        if (params.color === undefined) params.color = "black";
        if (params.backgroundcolor === undefined) params.backgroundcolor = "white";
        if (params.hpos === undefined) params.hpos = 0;
        if (params.vpos === undefined) params.vpos = 1;
        if (params.isarrow === undefined) params.isarrow = false;
        if (t === undefined) t = {};
        if (t.className === undefined) {
            t.className = "domclass_tooltip";
        }
        else {
            t.className = "domclass_tooltip " + t.className;
        }
        if (params.children !== undefined) {
            if (EncodingClass.type.isArray(params.children)) {
                for (i = 0; i < params.children.length; i++) {
                    x.push(params.children[i]);
                }
            }
            else {
                x.push(params.children);
            }
        }
        else if (params.innerHTML !== undefined) {
            content = DOMElement.div({innerHTML: params.innerHTML});
        }
        else if (params.text !== undefined) {
            content = DOMElement.textNode(params.text);
        }
        if (content !== undefined) x.push(content);
        spanelement = DOMElement.span({
            children: params.tooltipChildren,
            innerHTML: params.tooltipInnerHTML,
            text: params.tooltiptext
        });
        if (params.isarrow) {
            if (params.vpos >= 0) {
                spanelement.className = "domclass_tooltiptextarrowup";
            }
            else {
                spanelement.className = "domclass_tooltiptextarrowdown";
            }
        }
        else {
            spanelement.className = "domclass_tooltiptext";
        }
        if (params.width !== undefined) spanelement.style.width = params.width + "px";
        if (params.height !== undefined) spanelement.style.height = params.height + "px";
        if (params.hpos >= 0) {
            spanelement.style.left = (~~(50 + params.hpos * 50)) + "%";
        }
        else {
            spanelement.style.right = (~~(50 - params.hpos * 50)) + "%";
        }
        if (params.vpos >= 0) {
            spanelement.style.top = (~~(50 + params.vpos * 50)) + "%";
        }
        else {
            spanelement.style.bottom = (~~(50 - params.vpos * 50)) + "%";
        }
        spanelement.style.color = params.color;
        spanelement.style.backgroundColor = params.backgroundColor;
        x.push(spanelement);
        return DOMElement.div({attrs: t, children: x});
    },

    flydiv : function (params) {
        var r = DOMElement.div(params);
        var xr;
        if (DOMElement.fdInfo === undefined) {
            DOMElement.fdInfo = {
                list: []
            };
            DOMElement.addEvent(window, "click", function (event) {
                var i, j, x, y, mark = [], vTime = (new Date()).getTime() - 100;
                for (i = 0; i < DOMElement.fdInfo.list.length; i++) {
                    mark.push(false);
                }
                x = event.target;
                for (i = 0; i < DOMElement.fdInfo.list.length; i++) {
                    if ((x === DOMElement.fdInfo.list[i]) || (DOMElement.fdInfo.list[i].localData.lastshown > vTime)) {
                        if (!mark[i]) {
                            mark[i] = true;
                            y = x;
                            while (y.localData.parentElement !== undefined) {
                                y = y.localData.parentElement;
                                for (j = 0; j < DOMElement.fdInfo.list.length; j++) {
                                    if (y === DOMElement.fdInfo.list[j]) {
                                        mark[j] = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                for (i = 0; i < DOMElement.fdInfo.list.length; i++) {
                    if (!mark[i]) DOMElement.fdInfo.list[i].hide();
                }
            });
        }
        r.style.position = "absolute";
        xr = DOMElement.div({
            attrs: {
                style: {
                    position: "relative",
                    display: "none"
                }
            },
            properties: {
                parentElement: {
                    setter: function (value, me) {
                        var x, i, parent;
                        if (value.localData === undefined) return;
                        if (value.localData.children === undefined) return;
                        if (value.localData.status === undefined) return;
                        if (value.localData.show === undefined) return;
                        if (value.localData.hide === undefined) return;
                        if (value.localData.toggle === undefined) return;
                        if (!EncodingClass.type.isArray(value.localData.children)) return;
                        if (!EncodingClass.type.isString(value.localData.status)) return;
                        if (!EncodingClass.type.isFunction(value.localData.show)) return;
                        if (!EncodingClass.type.isFunction(value.localData.hide)) return;
                        if (!EncodingClass.type.isFunction(value.localData.toggle)) return;
                        parent = me.localData.parentElement;
                        if (parent !== undefined) {
                            x = [];
                            if (parent.localData.children !== undefined) {
                                for (i = 0; i < parent.localData.children.length; i++) {
                                    if (parent.localData.children[i] !== me) x.push(parent.localData.children[i]);
                                }
                                parent.localData.children = x;
                            }
                        }
                        me.localData.parentElement = value;
                        value.localData.children.push(me);
                    },
                    getter: function (me) {
                        return me.localData.parentElement;
                    }
                },
                status: {
                    setter: function (value, me) {
                        if (!EncodingClass.type.isString(value)) return;
                        value = value.toLowerCase();
                        if ((value != "show") && (value != "hide")) return;
                        if (value != me.localData.status) {
                            if (value == "show") {
                                me.show();
                            }
                            else {
                                me.hide();
                            }
                        }
                    },
                    getter: function (me) {
                        return me.localData.status;
                    }
                }
            },
            children: [r]
        });
        xr.localData.status = "hide";
        xr.localData.children = [];
        xr.localData.lastshown = 0;
        xr.show = function (me) {
            return function () {
                me.localData.lastshown = (new Date()).getTime();
                setTimeout(function (me) {
                    return function () {
                        me.localData.status = "show";
                        me.style.display = "";
                    }
                } (me), 100);
            }
        } (xr);
        xr.hide = function (me) {
            return function (isAll) {
                var x, y;
                if (isAll === undefined) isAll = false;
                if (isAll === true) {
                    x = me;
                    while (x.localData.parentElement !== undefined) {
                        y = x.localData.parentElement;
                        if (y.localData === undefined) break;
                        if (y.localData.children === undefined) break;
                        if (y.localData.status === undefined) break;
                        if (y.localData.show === undefined) break;
                        if (y.localData.hide === undefined) break;
                        if (y.localData.toggle === undefined) break;
                        if (!EncodingClass.type.isArray(y.localData.children)) break;
                        if (!EncodingClass.type.isString(y.localData.status)) break;
                        if (!EncodingClass.type.isFunction(y.localData.show)) break;
                        if (!EncodingClass.type.isFunction(y.localData.hide)) break;
                        if (!EncodingClass.type.isFunction(y.localData.toggle)) break;
                        x = y;
                    }
                    var removeAllChildren = function (host) {
                        var i;
                        host.hide();
                        for (i = 0; i < host.localData.children.length; i++) {
                            removeAllChildren(host.localData.children[i]);
                        }
                    };
                    removeAllChildren(x);
                    return;
                }
                setTimeout(function (me) {
                    return function () {
                        me.localData.status = "hide";
                        me.style.display = "none";
                    }
                } (me), 100);
            }
        } (xr);
        xr.toggle = function (me) {
            return function () {
                if (me.localData.status == "hide") {
                    me.show();
                }
                else {
                    me.hide();
                }
            }
        } (xr);
        DOMElement.fdInfo.list.push(xr);
        return xr;
    },

    compile: function (params) {
        var xmlTree, tag, input, attributes, prefix;
        var name;
        var tagName, attrs = {}, styles = {}, events = {}, properties = {}, children = [];
        var i, n, f;
        xmlTree = params.xmlTree;
        input = params.input;
        prefix = params.prefix;
        tag = xmlTree.tagName.toLowerCase().trim();
        attributes = xmlTree.attributes;
        switch (tag) {
            case "module":
                name = attributes.name;
                break;
            case "element":
                tagName = attributes.tagName;
                n = xmlTree.childNodes.length;
                for (i = 0; i < n; i++) {
                    switch (xmlTree.childNodes[i].tagName.toLowerCase().trim()) {
                        case "attributes":
                            attrs = DOMElement.compile({
                                host: result,
                                xmlTree: xmlTree.childNodes[i],
                                prefix: params.prefix
                            });
                            break;
                        case "styles":
                            styles = DOMElement.compile({
                                host: result,
                                xmlTree: xmlTree.childNodes[i],
                                prefix: params.prefix
                            });
                            break;
                        case "events":
                            events = DOMElement.compile({
                                host: result,
                                xmlTree: xmlTree.childNodes[i],
                                prefix: params.prefix
                            });
                            break;
                        case "properties":
                            properties = DOMElement.compile({
                                host: result,
                                xmlTree: xmlTree.childNodes[i],
                                prefix: params.prefix
                            });
                            break;
                        default:
                            children.push(DOMElement.compile({
                                host: result,
                                xmlTree: xmlTree.childNodes[i],
                                prefix: params.prefix
                            }));
                            break;
                    }
                }
                attrs.style = styles;
                f = function (tagName, attrs, events, properties, children) {
                    return function (params) {
                        var r = DOMElement[tagName]({
                            attrs: attrs,
                            events: events
                        });
                        var i, n, np;
                        n = children.length;
                        if (r.onpreload !== undefined) {
                            np = r.onpreload(params, r);
                        }
                        else {
                            np = undefined;
                        }
                        if (np === undefined) {
                            np = [];
                            for (i = 0; i < n; i++) np.push({});
                        }
                        for (i = 0; i < n; i++) r.appendChild(children[i](np[i]));
                        if (r.onpostload !== undefined) r.onpostload(params, r);
                        return r;
                    }
                } (tagName, attrs, events, properties, children);
                return f;
                break;
            case "attributes":
                break;
            case "styles":
                break;
            case "events":
                break;
            case "properties":
                break;
        }
    },

    make: function (params) {
        var xmlTree, tag, result = [];
        var i, n;
        xmlTree = params.xmlTree;
        tag = xmlTree.tagName.toLowerCase().trim();
        if (tag != "package") return null;
        n = xmlTree.childNodes.length;
        for (i = 0; i < n; i++) {
            DOMElement.compile({
                host: result,
                xmlTree: xmlTree.childNodes[i],
                prefix: ""
            });
        }
        return result;
    },

    cancelEvent : function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        else {
            event.returnValue = false;
        }
    },
};

DOMElement.init();
//# sourceURL=module:///src/jsdomelement.php.js?
