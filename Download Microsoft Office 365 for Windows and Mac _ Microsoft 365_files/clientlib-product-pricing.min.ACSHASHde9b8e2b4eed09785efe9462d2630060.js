/**
 * Gets the template markup for sku component.
 * @param {PricingClientConfig} pricingConfig config object.
 * @param {ProductPricingResponse} pricingResponse pricing response object.
 * @returns {string} The template markup for sku component.
 */
function getSkuMarkup(pricingConfig, pricingResponse) {
    if(!pricingConfig || !pricingResponse) {
        return null; 
    }

    switch (pricingResponse.responseCode) {
        case "Success":
            return getSkuAvailableMarkup(pricingConfig, pricingResponse);
        case "DisabledMarket":
            return getSkuDisabledMarketTemplate(pricingConfig);
        default:
            return getSkuUnavailableTemplate(pricingConfig);
    }
}

/**
 * Gets the template markup for available sku component.
 * @param {PricingClientConfig} pricingConfig config object.
 * @param {ProductPricingResponse} pricingResponse pricing response object.
 * @returns {string} The template markup for sku component.
 */
function getSkuAvailableMarkup(pricingConfig, pricingResponse) {
    const screenReaderText = window.ocReimagine.ProductPriceModule.ProductPricingTemplates.createScreenReaderText(pricingConfig, pricingResponse);

    const screenReaderMarkup = `
        <p class="sr-only" data-ocr-pricing-render="screen-reader" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}">
            ${screenReaderText}
        </p>
    `;

    const msrpMarkup = `
        <div class="sku__pricing-discount">
            <span class="oc-displayMSRPPrice">${pricingResponse.sku.displayMSRPPrice}</span>
        </div>
    `;

    const displayUnitMarkup = `
        <div class="sku__detail-recurrence">
            <span class="oc-displayUnit">${pricingConfig.displayUnit}</span>
        </div>
    `;

    return `
        <div class="sku__title" data-ocr-pricing-render="title" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}">
            <h3 class="oc-product-title">${pricingConfig.renderTitle}</h3>
        </div>
        <div class="sku__paragraph" data-ocr-pricing-content="paragraph" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}"></div>
        ${pricingConfig.isDiscounted ? screenReaderMarkup : ""}
        <!-- when there is price discount, the screen reader will announce the dispalyListPrice twice, then we need to set aria-hidden='true' here for this scenario -->
        <div class="sku__pricing" data-ocr-pricing-render="pricing" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}" aria-hidden=${screenReaderText && pricingConfig.isDiscounted ? "true" : ""}>
            ${pricingConfig.isDiscounted ? msrpMarkup : ""}
            <div class="sku__pricing-current">
                <span class="oc-displayListPrice">${pricingResponse.sku.displayListPrice}</span>
            </div>
        </div>
        ${pricingConfig.displayUnit ? displayUnitMarkup : ""}
        <div class="sku__detail-commitment" data-ocr-pricing-content="commitment" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}"></div>
        <div class="sku__note" data-ocr-pricing-content="disclaimer" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}"></div>
        <div class="sku__buttons" data-ocr-pricing-content="links" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}"></div>
        <div class="sku__footnote" data-ocr-pricing-content="footnote" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}"></div>
    `;
}

/**
 * Gets unavailable pricing component markup.
 * @param {PricingClientConfig} pricingConfig config object.
 * @returns HTML string for unavailable pricing component.
 */
function getSkuUnavailableTemplate(pricingConfig) {
    const unavailableMarkup = `
        <div class="sku">
            ${pricingConfig.renderTitle
            ? `<div class="sku__title" data-ocr-pricing-render="title" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}">
                <h3 class="oc-product-title">${pricingConfig.renderTitle}</h3>
            </div>`
            : ""
        }
            <div class="sku__paragraph" data-ocr-pricing-content="paragraph" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}"></div>
            <div class="sku__unavailable not-found" data-ocr-pricing-content="unavailable" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}"></div>
        </div>
    `;

    return unavailableMarkup;
}

/**
 * Gets disabled pricing component markup.
 * @param {PricingClientConfig} pricingConfig config object.
 * @returns HTML string for disabled pricing component.
 */
function getSkuDisabledMarketTemplate(pricingConfig) {
    const disabledMarkup = `
        <div class="sku">
            ${pricingConfig.renderTitle
            ? `<div class="sku__title" data-ocr-pricing-render="title" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}">
                <h3 class="oc-product-title">${pricingConfig.renderTitle}</h3>
            </div>`
            : ""
        }
            <div class="sku__paragraph" data-ocr-pricing-content="paragraph" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}"></div>
            <div class="sku__unavailable disabled-market" data-ocr-pricing-content="disabled" data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}"></div>
        </div>
    `;

    return disabledMarkup;
}
/**
 * Type definition for the sku web component action link config.
 * @typedef {Object} SkuWebComponentActionLinkConfig
 * @property {string} text - The text to be rendered for the action link.
 * @property {string} href - The action link URL.
 * @property {string} target - The target of the action link.
 * @property {string} ariaLabel - The aria-label for the action link.
 */

/**
 * Type definition for the sku web component actions.
 * @typedef {Object} SkuWebComponentActionsConfig
 * @property {SkuWebComponentActionLinkConfig?} primary - The primary action link configuration.
 * @property {SkuWebComponentActionLinkConfig?} secondary - The secondary action link configuration.
 */

/**
 * Type definition for the sku web component config.
 * @typedef {Object} SkuWebComponentConfig
 * @property {string} title - The product title for the sku web component to render.
 * @property {string} discountPrice - The discount price value for the sku web component to render.
 * @property {string} currentPrice - Current price value for the sku web component to render.
 * @property {string} recurrence - Recurrence policy for the sku web component to render.
 * @property {string} label - Label for the sku web component to render.
 * @property {string} srText - Screen reader text for the sku web component to render.
 * @property {string} note - The product note for the sku web component to render. *Note contains the Commitment and Tax Disclaimer
 * @property {string} embargoMarketMessage - Localized message for disabled markets.
 * @property {string} priceUnavailableText - Message to be rendered by sku web component when the product is unavailable.
 * @property {string} unavailableMessage - Localized message for unavailable products.
 * @property {SkuWebComponentActionsConfig} buttonGroup - Action link buttons for SKU web component.
 */

/**
 * Gets the template markup for available sku component.
 * @param {HTMLTemplateElement} pricingTemplateElement pricing component element
 * @param {PricingClientConfig} pricingConfig config object.
 * @param {ProductPricingResponse?} pricingResponse pricing response object.
 * @returns {DocumentFragment?} The template markup for sku component.
 */
function getSkuWebComponentMarkup(pricingTemplateElement, pricingConfig, pricingResponse) {
    // Get the SKU web component config from the template element
    const encodedString = pricingTemplateElement.getAttribute(window.ocReimagine.ProductPriceModule.ProductPricingConstants.SkuWebComponentAttributes.Data.SkuWebComponentConfig);

    if (!encodedString) {
        return null;
    }

    const originalSkuWebComponentConfigString = decodeURIComponent(encodedString);

    if (!originalSkuWebComponentConfigString) {
        return null;
    }

    /**
     * @type {SkuWebComponentConfig}
     * @description The original SKU web component config object.
     */
    const originalSkuWebComponentConfig = JSON.parse(originalSkuWebComponentConfigString);

    // Build SKU web component config
    const updatedSkuWebComponentConfig = this.buildSkuWebComponentConfig(originalSkuWebComponentConfig, pricingConfig, pricingResponse);
    // Build SKU web component markup fragment
    const skuWebComponentFragment = this.buildSkuWebComponentMarkupFragment(updatedSkuWebComponentConfig, pricingConfig, pricingResponse);

    return skuWebComponentFragment;
}

/**
 * Builds the SKU web component config object based on the original config and pricing response.
 * @param {SkuWebComponentConfig} originalConfig 
 * @param {PricingClientConfig} pricingConfig 
 * @param {ProductPricingResponse?} pricingResponse 
 * @returns {SkuWebComponentConfig} Updated SKU web component config object.
 */
function buildSkuWebComponentConfig(originalConfig, pricingConfig, pricingResponse) {
    /**
     * @type {SkuWebComponentConfig}
     */
    let skuWebComponentConfig = {};

    skuWebComponentConfig.title = pricingConfig.renderTitle;

    if (pricingResponse === null) {
        skuWebComponentConfig.priceUnavailableText = originalConfig.unavailableMessage;

        return skuWebComponentConfig;
    }

    if (pricingResponse.responseCode === window.ocReimagine.ProductPriceModule.ProductPricingConstants.Enumerables.Response.Success) {
        skuWebComponentConfig = { ...originalConfig, ...skuWebComponentConfig };
        skuWebComponentConfig.recurrence = pricingConfig.displayUnit;

        if (pricingResponse.catalogType == 4) {
            skuWebComponentConfig.taxDisclaimer = originalConfig.commercialTaxDisclaimer;
        } else {
            skuWebComponentConfig.taxDisclaimer = originalConfig.consumerTaxDisclaimer;
        }

        if (pricingResponse.sku.discountPrice > 0) {
            skuWebComponentConfig.currentPrice = pricingResponse.sku.displayMSRPPrice;
            skuWebComponentConfig.discountPrice = pricingResponse.sku.displayDiscountPrice;
            skuWebComponentConfig.srText = window.ocReimagine.ProductPriceModule.ProductPricingTemplates.createScreenReaderText(pricingConfig, pricingResponse);
        } else {
            skuWebComponentConfig.currentPrice = pricingResponse.sku.displayListPrice;
        }
    } else if (pricingResponse.responseCode === window.ocReimagine.ProductPriceModule.ProductPricingConstants.Enumerables.Response.DisabledMarket) {
        skuWebComponentConfig.priceUnavailableText = originalConfig.embargoMarketMessage;
    } else {
        skuWebComponentConfig.priceUnavailableText = originalConfig.unavailableMessage;
    }

    return skuWebComponentConfig;
}

/**
 * Builds the SKU web component markup fragment based on the updated SKU web component config and pricing config.
 * @param {SkuWebComponentConfig} updatedSkuWebComponentConfig 
 * @param {PricingClientConfig} pricingConfig 
 * @param {ProductPricingResponse?} pricingResponse 
 * @returns {DocumentFragment} The SKU web component markup fragment.
 */
function buildSkuWebComponentMarkupFragment(updatedSkuWebComponentConfig, pricingConfig, pricingResponse) {
    const skuWebComponentSlotMarkup = pricingResponse && pricingResponse.responseCode === window.ocReimagine.ProductPriceModule.ProductPricingConstants.Enumerables.Response.Success
        ? this.buildAvailableSlotsMarkup(updatedSkuWebComponentConfig)
        : this.buildUnavailableSlotsMarkup(updatedSkuWebComponentConfig);

    const skuWebComponentMarkup = `
        <reimagine-sku data-ocr-pricing-instance=${pricingConfig.pricingIdentifier}>
            ${skuWebComponentSlotMarkup}
        </reimagine-sku>
    `

    const skuWebComponentFragment = document
        .createRange()
        .createContextualFragment(skuWebComponentMarkup);

    return skuWebComponentFragment;
}

/**
 * Builds the SKU web component available slot elements markup.
 * @param {SkuWebComponentConfig} updatedSkuWebComponentConfig 
 * @returns {String} HTML markup for available slots.
 */
function buildAvailableSlotsMarkup(updatedSkuWebComponentConfig) {
    const markup = `
        ${updatedSkuWebComponentConfig.title ? `<span slot="title">${updatedSkuWebComponentConfig.title}</span>` : ""}
        ${updatedSkuWebComponentConfig.label ? `<div slot="label">${updatedSkuWebComponentConfig.label}</div>` : ""}
        ${updatedSkuWebComponentConfig.srText ? `<div slot="sr-only">${updatedSkuWebComponentConfig.srText}</div>` : ""}
        ${updatedSkuWebComponentConfig.displayDiscountPrice ? `<span slot="discount-price">${updatedSkuWebComponentConfig.displayDiscountPrice}</span>` : ""}
        ${updatedSkuWebComponentConfig.currentPrice ? `<span slot="current-price">${updatedSkuWebComponentConfig.currentPrice}</span>` : ""}
        ${updatedSkuWebComponentConfig.recurrence ? `<div slot="recurrence">${updatedSkuWebComponentConfig.recurrence}</div>` : ""}
        ${updatedSkuWebComponentConfig.note || updatedSkuWebComponentConfig.taxDisclaimer ? `<div slot="note">${updatedSkuWebComponentConfig.note}${updatedSkuWebComponentConfig.taxDisclaimer}</div>` : ""}
        ${updatedSkuWebComponentConfig.buttonGroup ? this.buildButtonGroupMarkup(updatedSkuWebComponentConfig) : ""}
    `;
    return markup;
}

/**
 * Builds the SKU web component unavailable slot elements markup.
 * @param {SkuWebComponentConfig} updatedSkuWebComponentConfig 
 * @returns {String} HTML markup for unavailable slots.
 */
function buildUnavailableSlotsMarkup(updatedSkuWebComponentConfig) {
    const markup = `
        ${updatedSkuWebComponentConfig.title ? `<span slot="title">${updatedSkuWebComponentConfig.title}</span>` : ""}
        <p slot="unavailable">${updatedSkuWebComponentConfig.priceUnavailableText}</p>
    `;
    return markup;
}

/**
 * Builds the button group web component markup.
 * @param {SkuWebComponentConfig} updatedSkuWebComponentConfig 
 * @returns {String} HTML markup for the button group slots.
 */
function buildButtonGroupMarkup(updatedSkuWebComponentConfig) {
    const markup = `
        <reimagine-button-group slot="button-group">
            ${updatedSkuWebComponentConfig.buttonGroup.primary ? this.buildButtonMarkup(updatedSkuWebComponentConfig.buttonGroup.primary) : ""}
            ${updatedSkuWebComponentConfig.buttonGroup.secondary ? this.buildButtonMarkup(updatedSkuWebComponentConfig.buttonGroup.secondary) : ""}
        </reimagine-button-group>
    `;
    return markup;
}

/**
 * Builds the button group web component markup.
 * @param {SkuWebComponentActionLinkConfig} buttonConfig 
 * @returns {String} HTML markup for the button.
 */
function buildButtonMarkup(buttonConfig) {
    const markup = `
        <reimagine-button href="${buttonConfig.href}" target="${buttonConfig.target}">
            <span slot="button__text">${buttonConfig.text}</span>
        </reimagine-button>
    `;
    return markup;
}

/**
 * Queries the document and shadowRoot to find element matching the selector.
 * @param {string} selector - The selector to match element against.
 * @param {HTMLElement?} rootNode - The root node to start the search from.
 * @param {boolean?} deep - Whether to search deep into shadow DOM (default is false).
 * @returns {Element | null} - The matching elements or null if none found.
 */
function querySelectorDeep(selector, rootNode = document.body, deep = false) {
    const results = querySelectorAllDeep(selector, rootNode, deep, false);
    return Array.isArray(results) && results.length ? results[0] : results;
}

/**
 * Queries the document and shadowRoot for elements matching the selector.
 * @param {string} selector - The selector to match elements against.
 * @param {HTMLElement?} rootNode - The root node to start the search from.
 * @param {boolean?} deep - Whether to search deep into shadow DOM (default is false).
 * @param {boolean?} all - Whether to return all matching elements or just the first one.
 * @returns {Element[] | Element | null} - The matching elements or null if none found.
 */
function querySelectorAllDeep(selector, rootNode = document.body, deep = false, all = true) {
    if (!selector) {
        return null;
    }

    if (!deep) {
        if (all) {
            return Array.from(rootNode.querySelectorAll(selector));
        } else {
            return rootNode.querySelector(selector);
        }
    }

    /**
     * @type {Element[]}
     * @description Array to store the matching elements
     */
    const results = [];

    /**
     * @description Traverses the DOM and shadow DOM to find matching elements
     * @param {Element} node 
     * @returns {void}
     */
    const traverser = (node) => {
        if (!all && results.length) return;

        // 1. decline all nodes that are not elements
        if (node.nodeType !== Node.ELEMENT_NODE) return;

        // 2. add the node to the array, if it matches the selector
        if (node.matches(selector)) {
            results.push(node);

            if (!all) return;
        }

        // 3. loop through the children
        const children = node.children;
        if (children.length) {
            for (const child of children) {
                traverser(child);
            }
        }

        // 4. check for shadow DOM, and loop through it's children
        const shadowRoot = node.shadowRoot;

        if (shadowRoot) {
            const shadowChildren = shadowRoot.children;
            for (const shadowChild of shadowChildren) {
                traverser(shadowChild);
            }
        }
    }

    traverser(rootNode);

    return all ? results : (results.length ? results[0] : null);
}

/**
 * Checks if an element exists in the document, including shadow DOMs.
 * @param {Element} element - The element to check.
 * @param {Element | ShadowRoot} root - The root node to start the search from (default is document.body).
 * @param {boolean?} deep - Whether to search deep into shadow DOM (default is false).
 * @returns {boolean} True if the element exists in the document or shadow DOM, false otherwise.
 */
function isElementInDocument(element, root = document.body, deep = false) {
    if (!element || !root) return false;

    // Check if the element exists in the current root
    if (root.contains(element)) return true;

    // If deep traversal is not required, return false
    if(!deep) return false;

    // Traverse shadow DOMs recursively
    const shadowHosts = root.querySelectorAll('*');
    for (const host of shadowHosts) {
        if (host.shadowRoot && isElementInDocument(element, host.shadowRoot, deep)) {
            return true;
        }
    }

    return false;
}

/**
 * Update the pricing manager instance when SKU web components updates on DOM
 * @summary this custom event is dispatched by external pricing-components whenever the product pricing elements changes on DOM
 */
document.addEventListener("onOcrSkuWebComponentUpdate", (event) => {
    // Check if the event has a detail object and if it has the traversable property
    // If traversable is true, then we need to traverse the shadow DOM
    // If traversable is false, then we need to traverse the light DOM
    const enableShadowTraversal = event.detail && event.detail.traversable;
    // Get all the sku web components
    const skuWebComponents = querySelectorAllDeep("[data-ocr-pricing-component='sku-web-component']", document.body, enableShadowTraversal);

    skuWebComponents.forEach((skuWebComponent) => {
        // If the sku web component has already been initialized, then return
        if (
            skuWebComponent.hasAttribute("data-ocr-pricing-status")
        ) {
            return;
        }

        skuWebComponent.setAttribute("data-ocr-pricing-status", "0");
    });

    // Dispatch the custom event to update the pricing manager instance
    document.dispatchEvent(new CustomEvent("onOcrClientPricingChange", { detail: event.detail }));
});

/**
 * Gets the template markup for pricing-token component.
 * @param {HTMLSpanElement} pricingTemplateElement authored pricing component element
 * @param {PricingClientConfig} pricingConfig config object.
 * @param {ProductPricingResponse} pricingResponse pricing response object.
 * @returns {string} The template markup for sku component.
 */
function getPricingTokenMarkup(pricingTemplateElement, pricingConfig, pricingResponse) {
    if (!pricingConfig || !pricingResponse) {
        return null;
    }

    // Set product price response code to the token element.
    pricingTemplateElement.previousElementSibling.setAttribute("data-oc-product", `purchase ${pricingResponse.responseCode}`);

    switch (pricingResponse.responseCode) {
        case "Success":
            return getAvailableTokenMarkup(pricingTemplateElement, pricingConfig, pricingResponse);
        case "DisabledMarket":
            return getDisabledTokenMarkup(pricingTemplateElement, pricingConfig);
        default:
            return getUnavailableTokenMarkup(pricingTemplateElement, pricingConfig);
    }
}

/**
 * Gets the template markup for available token component.
 * @param {HTMLSpanElement} pricingTemplateElement authored pricing component element
 * @param {PricingClientConfig} pricingConfig config object.
 * @param {ProductPricingResponse} pricingResponse pricing response object.
 * @returns {string} The template markup for pricing token component.
 */
function getAvailableTokenMarkup(pricingTemplateElement, pricingConfig, pricingResponse) {
    if (!pricingConfig || !pricingResponse) {
        return null;
    }

    switch (pricingConfig.renderType) {
        case "list-price":
            return pricingResponse.sku.displayListPrice;
        case "title":
            return pricingResponse.title;
        case "sku-title":
            return pricingResponse.sku.title;
        case "msrp":
            return pricingResponse.sku.displayMSRPPrice;
        case "discount":
            return pricingResponse.sku.displayDiscountPrice;
        default:
            //Non catalog products will not have any ajax class.
            return "";
    }
}

/**
 * Gets unavailable pricing component markup.
 * @param {HTMLSpanElement} pricingTemplateElement authored pricing component element
 * @param {PricingClientConfig} pricingConfig config object.
 * @returns HTML string for unavailable pricing component.
 */
function getUnavailableTokenMarkup(pricingTemplateElement, pricingConfig) {
    const unavailableMarkup = "";

    // Set product price response code to the token element.
    pricingTemplateElement.previousElementSibling.setAttribute("data-oc-product", "purchase NotFound");

    return unavailableMarkup;
}

/**
 * Gets disabled pricing component markup.
 * @param {HTMLSpanElement} pricingTemplateElement authored pricing component element
 * @param {PricingClientConfig} pricingConfig config object.
 * @returns HTML string for disabled pricing component.
 */
function getDisabledTokenMarkup(pricingTemplateElement, pricingConfig) {
    const disabledMarkup = "";

    // Set product price response code to the token element.
    pricingTemplateElement.previousElementSibling.setAttribute("data-oc-product", "purchase DisabledMarket");

    return disabledMarkup;
}
(function () {
    const pricingEvents = Object.freeze({
        MarketSelector: Object.freeze({
            OnInit: "onInit",
        }),
        Pricing: Object.freeze({
            OnChange: "onOcrClientPricingChange",
        }),
    });

    /** Check if OneCloud Reimagine namespace exists */
    if (!window.ocReimagine) {
        window.ocReimagine = {};
    }

    /** Create product price module namespace */
    if (!window.ocReimagine.ProductPriceModule) {
        window.ocReimagine.ProductPriceModule = {};
    }

    /**
     * Initializes the reimagine product pricing manager and services
     * @param {string | undefined | null} market
     * @returns {void}
     */
    function initializeProductPriceModule(market) {
        try {
            // Check if product pricing manager instance exists
            if (
                window.ocReimagine &&
                window.ocReimagine.ProductPriceModule &&
                window.ocReimagine.ProductPriceModule.PricingManagerInstance
            ) {
                // If it exists, that means it has already been initialized so no need to re-initialize
                return;
            }

            window.ocReimagine.ProductPriceModule.PricingManagerInstance =
                new window.ocReimagine.ProductPriceModule.ProductPricingManager({ market });
        } catch (error) {
            console.warn("[OCR][ProductPricingModule] module failure: ", error);
        }
    }

    /**
     * By default the reimagine pricing-scripts are initialized on page load complete
     */
    document.addEventListener("DOMContentLoaded", () => {
        initializeProductPriceModule();
    });

    /**
     * Initialize the reimagine pricing-scripts with market-selector init event
     * @summary since there is a race condition on page load event between market-selector's init event and pricing-module's init event,
     *          try to initialize the pricing scripts after the market-selector is initialized and dispatches the init event
     */
    document.addEventListener(pricingEvents.MarketSelector.OnInit, (event) => {
        if (!event.detail || !event.detail.value) {
            return;
        }

        initializeProductPriceModule(event.detail.value);
    });

    /**
     * Update the pricing manager instance when the product pricing changes on DOM
     * @summary this custom event is dispatched by external pricing-components whenever the product pricing elements changes on DOM
     */
    document.addEventListener(pricingEvents.Pricing.OnChange, (event) => {
        // Check if product pricing manager instance has been initialized
        if (
            window.ocReimagine &&
            window.ocReimagine.ProductPriceModule &&
            window.ocReimagine.ProductPriceModule.PricingManagerInstance
        ) {
            // If it exists, then call the pricing manager update method
            window.ocReimagine.ProductPriceModule.PricingManagerInstance.updatePricingManager(event.detail);
        }
    });
})();

/**
 * Constants for the product pricing configuration options and services.
 * @class {ProductPricingConstants} - configuration parameters for the product pricing module.
 */
window.ocReimagine.ProductPriceModule.ProductPricingConstants = class ProductPricingConstants {
    /**
     * Default values for the product pricing module.
     * @readonly
     */
    static Defaults = Object.freeze({
        Locale: "en-us",
    });

    /**
     * Cache policy for the product pricing module.
     * @readonly
     */
    static CachePolicy = Object.freeze({
        IsCachingEnabled: true,
        StorageLocation: "memory",
    });

    /**
     * Request settings for the product pricing module.
     * @readonly
     */
    static Request = Object.freeze({
        Method: "GET",
        RelativeUri: "/m365/product/price",
        Headers: Object.freeze({
            "Content-Type": "application/json",
        }),
        QueryParameters: Object.freeze({
            v: "4",
            r: "json",
        }),
        MaxQueryCount: 5,
    });

    /**
     * Pricing component template names for the product pricing module.
     */
    static Templates = Object.freeze({
        Sku: "sku",
        PricingToken: "pricing-token",
        SkuWebComponent: "sku-web-component",
    });

    /**
     * HTML Attributes for the product pricing module.
     * @readonly
     */
    static Attributes = Object.freeze({
        Data: Object.freeze({
            Component: "data-ocr-pricing-component",
            PricingIdentifier: "data-ocr-pricing-identifier",
            LegacyProductMain: "data-oc-product",
            ProductMain: "data-ocr-product"
        })
    });

    /**
     * HTML Selectors for the product pricing module.
     * @readonly
     */
    static Selectors = Object.freeze({
        Dataset: Object.freeze({
            Component: `[${this.Attributes.Data.Component}]`,
            RenderSection: "[data-ocr-pricing-section='render']",
            SkuRequestQuery: "[data-ocr-sku-request]",
            TemplateContent: "[data-ocr-pricing-content]",
            PricingConfig: "[data-ocr-pricing-config]",
            MarketSelector: "[data-mount='market-selector']",
            PricingIdentifier: `[${this.Attributes.Data.PricingIdentifier}]`,
            PricingStatus: "[data-ocr-pricing-status]",
            PricingToken: `[${this.Attributes.Data.Component}='${this.Templates.PricingToken}']`
        }),
    });

    /**
     * Enumerables for the product pricing module.
     * @readonly
     */
    static Enumerables = Object.freeze({
        Response: Object.freeze({
            Undefined: "Undefined",
            Success: "Success",
            NotFound: "NotFound",
            NoAvailableSku: "NoAvailableSku",
            DisabledMarket: "DisabledMarket",
        }),
        TitleType: Object.freeze({
            SKU: "SKU",
            PRODUCT: "PRODUCT",
            OVERRIDE: "OVERRIDE",
        }),
    });

    /**
     * Parameters for the product pricing module.
     */
    static Parameters = Object.freeze({
        ScreenReader: Object.freeze({
            ListPriceKey: "%{listPrice}",
            MsrpKey: "%{msrpPrice}",
        }),
        MarketSelector: Object.freeze({
            Query: Object.freeze({
                Market: "market",
            }),
            RefreshMode: Object.freeze({
                AJAX: "ajax",
            }),
        }),
    });

    /**
     * Constants for custom event listener names
     * @readonly
     */
    static Events = Object.freeze({
        MarketSelector: Object.freeze({
            OnRefreshed: "onRefreshed",
            OnInit: "onInit",
        }),
        Pricing: Object.freeze({
            OnChange: "onOcrClientPricingChange",
            OnComplete: "onComplete", // Legacy event name for onOcrClientPricingRenderComplete
            OnRenderComplete: "onOcrClientPricingRenderComplete",
        }),
        SkuWebComponent: Object.freeze({
            OnUpdate: "onOcrSkuWebComponentUpdate",
        }),
    });

    static SkuWebComponentAttributes = Object.freeze({
        Data: Object.freeze({
            SkuWebComponentConfig: "data-ocr-sku-web-component-config",
            SkuWebComponentStatus: "data-ocr-pricing-status",
        }),
        Selectors: Object.freeze({
            SkuWebComponent: "[data-ocr-pricing-component='sku-web-component']",
        }),
    });
};

//#region Reimagine Product Pricing Templates Class
/**
 * @class ProductPricingTemplates - Helper Class for getting product pricing component templates.
 */
window.ocReimagine.ProductPriceModule.ProductPricingTemplates = class ProductPricingTemplates {
    /**
     * Gets the constants for the product pricing module.
     */
    static pricingConstants =
        window.ocReimagine.ProductPriceModule.ProductPricingConstants;

    /**
     * Gets the template markup for the given template name.
     * @param {HTMLTemplateElement | HTMLSpanElement} pricingTemplateElement pricing component element
     * @param {string} templateName template name
     * @param {PricingClientConfig} pricingConfig config object
     * @param {ProductPricingResponse} pricingResponse pricing response object.
     * @returns {DocumentFragment | string | null} The template markup for the given template name.
     */
    static getPricingTemplate(
        pricingTemplateElement,
        templateName,
        pricingConfig,
        pricingResponse
    ) {
        /**
         * Get the template markup for the given template name.
         * @type {DocumentFragment | string | null}
         */
        let updatedTemplateFragment = null;

        switch (templateName) {
            case this.pricingConstants.Templates.Sku:
                const skuTemplateMarkupText = getSkuMarkup(
                    pricingConfig,
                    pricingResponse
                );
                updatedTemplateFragment = this.replaceConfigContent(
                    skuTemplateMarkupText,
                    pricingTemplateElement,
                    pricingConfig
                );
                break;
            case this.pricingConstants.Templates.SkuWebComponent:
                updatedTemplateFragment = getSkuWebComponentMarkup(
                    pricingTemplateElement,
                    pricingConfig,
                    pricingResponse
                );
                break;
            case this.pricingConstants.Templates.PricingToken:
                updatedTemplateFragment = getPricingTokenMarkup(pricingTemplateElement, pricingConfig, pricingResponse);
                break;
            default:
                updatedTemplateFragment = null;
                break;
        }

        return updatedTemplateFragment;
    }

    /**
     * Creates a screen reader text for the given screen reader template string.
     * @param {PricingClientConfig} pricingConfig config object
     * @param {ProductPricingResponse} pricingResponse pricing response object.
     * @returns {string} The sr text for the given template format.
     */
    static createScreenReaderText(pricingConfig, pricingResponse) {
        const screenReaderTemplate = pricingConfig.discountedTextTemplate;
        let screenReaderText = "";

        if (pricingConfig.isDiscounted && screenReaderTemplate) {
            // Replace the current/list price key with the current/list price value.
            screenReaderText = screenReaderTemplate.replace(
                window.ocReimagine.ProductPriceModule.ProductPricingConstants.Parameters
                    .ScreenReader.ListPriceKey,
                pricingResponse.sku.displayListPrice
            );

            // Replace the msrp price key with the msrp price value.
            screenReaderText = screenReaderText.replace(
                window.ocReimagine.ProductPriceModule.ProductPricingConstants.Parameters
                    .ScreenReader.MsrpKey,
                pricingResponse.sku.displayMSRPPrice
            );
        }

        return screenReaderText;
    }

    /**
     * Replaces the config content from the pricing component element in the template markup.
     * @param {string} templateMarkup template markup.
     * @param {HTMLTemplateElement | HTMLSpanElement} pricingTemplateElement authored pricing template element.
     * @param {PricingClientConfig} pricingConfig config object
     * @returns {DocumentFragment} The template markup for the given template name.
     */
    static replaceConfigContent(
        templateMarkup,
        pricingTemplateElement,
        pricingConfig
    ) {
        /**
         * @type {Node}
         * Cloned node of the authored template element.
         */
        let authoredTemplateFragment;

        if (pricingTemplateElement instanceof HTMLTemplateElement) {
            authoredTemplateFragment =
                pricingTemplateElement.content.cloneNode(true);
        } else {
            authoredTemplateFragment = pricingTemplateElement.cloneNode(true);
        }

        // Create a range to parse the template markup string into a DocumentFragment.
        const templateFragment = document
            .createRange()
            .createContextualFragment(templateMarkup);
        // Iterate over configured template fragment content elements.
        const templateContentElements = templateFragment.querySelectorAll(
            `${this.pricingConstants.Selectors.Dataset.TemplateContent}[data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}"]`
        );

        templateContentElements.forEach((templateContentElement) => {
            const attributeValue = templateContentElement.dataset.ocrPricingContent;
            const configElement = authoredTemplateFragment.querySelector(
                `[data-ocr-pricing-content="${attributeValue}"][data-ocr-pricing-identifier="${pricingConfig.pricingIdentifier}"]`
            );

            // Remove the content from template if match does not exist in authored template.
            if (!configElement) {
                templateContentElement.remove();
                return;
            }

            // Replace the config content from the pricing component element in the template markup.
            templateContentElement.replaceWith(configElement);
        });

        return templateFragment;
    }

    /**
     * Gets unavailable pricing component markup.
     * @param {string} templateName template name
     * @param {PricingConfig} pricingConfig config object.
     * @param {HTMLTemplateElement | HTMLSpanElement} pricingTemplateElement authored pricing component element
     * @returns {DocumentFragment | string | null} HTML string for unavailable pricing component.
     */
    static getUnavailableTemplate(templateName, pricingConfig, pricingTemplateElement) {
        let unavailableTemplateFragment = null;

        switch (templateName) {
            case this.pricingConstants.Templates.Sku:
                const skuTemplateMarkupText = getSkuUnavailableTemplate(
                    pricingConfig
                );
                unavailableTemplateFragment = this.replaceConfigContent(
                    skuTemplateMarkupText,
                    pricingTemplateElement,
                    pricingConfig
                );
                break;
            case this.pricingConstants.Templates.SkuWebComponent:
                unavailableTemplateFragment = getSkuWebComponentMarkup(
                    pricingTemplateElement,
                    pricingConfig
                );
                break;
            case this.pricingConstants.Templates.PricingToken:
                unavailableTemplateFragment = getUnavailableTokenMarkup(pricingTemplateElement, pricingConfig);
                break;
            default:
                unavailableTemplateFragment = null;
                break;
        }

        return unavailableTemplateFragment;
    }

    /**
     * Gets disabled pricing component markup.
     * @param {string} templateName template name
     * @param {PricingConfig} pricingConfig config object.
     * @param {HTMLTemplateElement | HTMLSpanElement} pricingTemplateElement authored pricing component element
     * @returns HTML string for disabled pricing component.
     */
    static getDisabledMarketTemplate(templateName, pricingConfig, pricingTemplateElement) {
        let disabledTemplateFragment = null;

        switch (templateName) {
            case this.pricingConstants.Templates.Sku:
                const skuTemplateMarkupText = getSkuDisabledMarketTemplate(
                    pricingConfig
                );
                disabledTemplateFragment = this.replaceConfigContent(
                    skuTemplateMarkupText,
                    pricingTemplateElement,
                    pricingConfig
                );
                break;
            case this.pricingConstants.Templates.SkuWebComponent:
                disabledTemplateFragment = getSkuWebComponentMarkup(
                    pricingTemplateElement,
                    pricingConfig
                );
                break;
            case this.pricingConstants.Templates.PricingToken:
                disabledTemplateFragment = getDisabledTokenMarkup(pricingTemplateElement, pricingConfig);
                break;
            default:
                disabledTemplateFragment = null;
                break;
        }

        return disabledTemplateFragment;
    }
    /*============================ Component Templates ============================*/
};
//#endregion Reimagine Product Pricing Template Class

/**
 * @class ProductPricingRequest - Helper Class for making product pricing requests.
 */
window.ocReimagine.ProductPriceModule.ProductPricingRequest = class ProductPricingRequest {
    /**
     * Gets the constants for the product pricing module.
     */
    pricingConstants =
        window.ocReimagine.ProductPriceModule.ProductPricingConstants;

    /**
     * Gets or sets the current locale for the page.
     * @type {string}
     */
    locale;

    /**
     * Gets or sets the country for the page.
     * @type {string}
     */
    country;

    /**
     * Gets or sets the market for the page.
     * @type {string | undefined | null}
     */
    #market;

    /**
     * Gets the current selected market for the page.
     */
    get market() {
        return this.#market;
    }

    /**
     * Sets the current selected market for the page.
     */
    set market(value) {
        this.#market = value;
    }

    /**
     * Gets or sets the flag to indicate if caching is enabled for product pricing requests.
     * @type {boolean}
     */
    isCachingEnabled;

    /**
     * Gets or sets the instances of rendered pricing component instances for the current page.
     * This is the source array for the rendered instances of the pricing component.
     * @type {ocReimagine.ProductPriceModule.ProductPricingRendering[]}
     */
    renderedInstances;

    /**
     * Gets or sets the query from each instance of rendered pricing component for the current page.
     * @type {Set<string>}
     */
    uniqueQuerySet;

    /**
     * Gets or sets the map of pricing component request and response for the current page.
     * @description
     * Key - request query string,
     * Value - product pricing response for the request query
     * @summary this map is used to cache in-memory the product pricing response for the current page and avoid duplicate requests for the same request query.
     * @type {Map<string, ProductPricingResponse[]>}
     */
    responseCacheMap;

    /**
     * Gets or sets the instances of XHR request controllers for each in-progress requests.
     * @type {Array<XMLHttpRequest>}
     */
    xhrRequestControllers;

    /**
     * Initializes instance of the product pricing request helper class.
     * @param {string} locale - The locale 'll-cc' of the page.
     * @param {string} country - Current country of the page.
     * @param {string | undefined | null} market - Current selected market of the page.
     */
    constructor(locale, country, market) {
        this.locale = locale;
        this.country = country;
        this.market = market;
        this.renderedInstances = [];
        this.uniqueQuerySet = new Set();
        this.responseCacheMap = new Map();
        this.xhrRequestControllers = [];
        this.isCachingEnabled = this.pricingConstants.CachePolicy.IsCachingEnabled;
    }

    /**
     * Clears the render instances queue for the current page.
     */
    clearRequestManager() {
        this.abortPendingRequests();
        this.renderedInstances = [];
        this.uniqueQuerySet.clear();
        this.responseCacheMap.clear();
    }

    /**
     * Enqueues the rendering instance the requests queue for the current page.
     * @param {ocReimagine.ProductPriceModule.ProductPricingRendering} renderInstance - The pricing component rendering instance to enqueue.
     */
    enqueueRequest(renderInstance) {
        // Set the request query key map for the current instance of the rendering pricing component product price manager class

        // Store the render instance in the queue
        this.renderedInstances.push(renderInstance);

        // Adds the request query to the queue if it does not exist
        this.uniqueQuerySet.add(renderInstance.pricingConfig.requestQuery);
    }

    /**
     * Dequeues the rendering instance from the requests queue for the current page.
     * @param {string} instanceIdentifier
     * @param {boolean?} enableShadowTraversal - Flag to enable shadow DOM traversal.
     */
    dequeueRequest(instanceIdentifier, enableShadowTraversal = false) {
        // Check if the instance identifier is not provided
        if (!instanceIdentifier) {
            return;
        }

        // Get the removed element render instance from the existing rendered instances
        const removedInstance = this.renderedInstances.find(
            (renderInstance) =>
                !isElementInDocument(renderInstance.pricingComponentElement, document.body, enableShadowTraversal) &&
                renderInstance.instanceIdentifier === instanceIdentifier
        );

        // Check if the removed instance is not found
        if (!removedInstance) {
            return;
        }

        // Remove the instance from the existing rendered instances
        this.renderedInstances = this.renderedInstances.filter(
            (renderInstance) =>
                !isElementInDocument(renderInstance.pricingComponentElement, document.body, enableShadowTraversal) &&
                renderInstance.instanceIdentifier !== instanceIdentifier
        );

        // Check if the request query is still in use by any other render instance
        const isRequestQueryInUse = this.renderedInstances.some(
            (renderInstance) =>
                renderInstance.pricingConfig.requestQuery ===
                removedInstance.pricingConfig.requestQuery
        );

        // If the request query is still in use, do not remove it from the queue
        if (isRequestQueryInUse) {
            return;
        }

        // Remove the request query from the queue
        this.uniqueQuerySet.delete(removedInstance.pricingConfig.requestQuery);
    }

    /**
     * Gets the unique cache key for the current request query.
     * @param {string} requestQuery - The request query string.
     * @returns {string} requestQueryKey - The unique key for the request query, llcc and market.
     */
    getRequestCacheKey(requestQuery) {
        // Create unique key for the request query by combining the locale, product ID, recurrence and payment cadence.
        const keyParameters = new URLSearchParams();
        keyParameters.set("q", requestQuery);

        // Append llcc to the request query with market as cc if available.
        if (this.market) {
            keyParameters.set("llcc", `${this.country}-${this.market}`);
        } else {
            keyParameters.set("llcc", this.locale);
        }

        // Sort the query parameters to create the unique cache key for the request query
        keyParameters.sort();
        // Create the unique cache key for the request query
        const requestQueryKey = keyParameters.toString();

        return requestQueryKey;
    }

    /**
     * Updates the pricing request manager for the current page.
     * @param {string} market - The current selected market for the page.
     */
    updateRequestManager(market) {
        if (this.market !== market) {
            this.market = market;
        }
    }

    /**
     * Combines each request query into group of maximum allowed requests per call.
     * @see {@link ProductPricingConstants.Request.MaxQueryCount}
     * @param {string[]} fetchQueries - The request queries to combine.
     * @returns {string[]} combinedQueries - The combined request queries.
     */
    combineRequestQueries(fetchQueries) {
        // Return empty array if no fetch queries are available
        if (!fetchQueries.length) {
            return [];
        }

        /**
         * @example ["query1,query2,query3,query4,query5", "query6,query7,query8,query9", ...]
         * @type {string[]}
         */
        const combinedQueries = [];

        // Split the request queries into batches of maximum allowed requests per call
        // Since the product pricing API only allows only certain number of queries per request
        for (
            let i = 0;
            i < fetchQueries.length;
            i += this.pricingConstants.Request.MaxQueryCount
        ) {
            const requestQueries = fetchQueries.slice(
                i,
                i + this.pricingConstants.Request.MaxQueryCount
            );
            const combinedRequestQuery = requestQueries.join(",");
            combinedQueries.push(combinedRequestQuery);
        }

        return combinedQueries;
    }

    /**
     * Starts processing the pricing component requests from queue for the current page.
     * @param {(productsResponse: ProductPricingResponse[], relatedRenderedInstances: ocReimagine.ProductPriceModule.ProductPricingRendering[]) => void} onFulfilledCallback - The callback function to execute when the fetch request promise is fulfilled.
     * @param {(error: Error, relatedRenderedInstances: ocReimagine.ProductPriceModule.ProductPricingRendering[]) => void} onRejectedCallback - The callback function to execute when the fetch request promise is rejected.
     * @param {((this: XMLHttpRequest, ev: Event, relatedRenderedInstances: ocReimagine.ProductPriceModule.ProductPricingRendering[]) => void) | null} onStatusChangeCallback - Optional - callback function to execute when the ready state changes.
     * @param {() => void} onRequestsProcessedCallback - Optional - callback function to execute when all the XHR requests are complete and processed.
     */
    processRequests(
        onFulfilledCallback,
        onRejectedCallback,
        onStatusChangeCallback,
        onRequestsProcessedCallback
    ) {
        /**
         * Pending request queries to be fetched
         * @type {string[]}
         */
        const fetchQueries = [];

        try {
            // Send the product pricing requests for each unique request key i.e., query, llcc and market
            this.uniqueQuerySet.forEach((requestQuery) => {
                // Get the render pricing component instances for the current group of request queries
                const renderingManagerInstances = this.renderedInstances.filter(
                    (renderInstance) =>
                        requestQuery === renderInstance.pricingConfig.requestQuery
                );
                /**
                 * Get the cached product pricing response data
                 * @type {ProductPricingResponse[]}
                 */
                let cachedResponse = [];

                // Check if the current request query is already cached
                if (this.isCachingEnabled) {
                    // Get the cached response for the current request query
                    // Get the cache key
                    const requestQueryKey = this.getRequestCacheKey(requestQuery);

                    // Get the cached response by the current request query key
                    if (this.responseCacheMap.has(requestQueryKey)) {
                        cachedResponse = this.responseCacheMap.get(requestQueryKey);
                    }
                }

                if (cachedResponse.length) {
                    // Return the cached product pricing response to each associated rendering manager instance
                    onFulfilledCallback(cachedResponse, renderingManagerInstances);
                } else {
                    // Add the current request query to the pending request queries
                    fetchQueries.push(requestQuery);
                }
            });

            // Combine the pending request queries into batches of maximum allowed requests per call
            const combinedQueries = this.combineRequestQueries(fetchQueries);

            // Fetch pending requests if any
            if (combinedQueries.length) {
                // Send the product pricing request for the current request query
                this.fetchRequest(
                    combinedQueries,
                    onFulfilledCallback,
                    onRejectedCallback,
                    onStatusChangeCallback,
                    onRequestsProcessedCallback
                );
            } else if (onRequestsProcessedCallback) {
                // Execute the callback function when all the requests are processed and completed
                onRequestsProcessedCallback();
            }
        } catch (error) {
            // Handle any errors that occur during the request processing
            console.warn("[OCR][ProductPricingRequest] Error processing requests:", error);

            if (onRejectedCallback) {
                onRejectedCallback(error, this.renderedInstances);
                this.abortPendingRequests();
                this.manageRequestsProgress(onRequestsProcessedCallback);
            }
        }
    }

    /**
     * Fetches the product pricing requests for the provided queries.
     * @param {string[]} combinedQueries - Array of combined request queries to be fetched using pricing service.
     * @param {ocReimagine.ProductPriceModule.ProductPricingRendering[]} relatedPricingInstances - The associated instances of the SKU rendering manager for the current request query.
     * @param {(productsResponse: ProductPricingResponse[], relatedPricingInstances: ocReimagine.ProductPriceModule.ProductPricingRendering[]) => void} onFulfilledCallback - The callback function to execute when the fetch request promise is fulfilled.
     * @param {(error: Error, relatedPricingInstances: ocReimagine.ProductPriceModule.ProductPricingRendering[]) => void} onRejectedCallback - The callback function to execute when the fetch request promise is rejected.
     * @param {((this: XMLHttpRequest, ev: Event, relatedPricingInstances: ocReimagine.ProductPriceModule.ProductPricingRendering[]) => void) | null} onStatusChangeCallback - Optional - callback function to execute when the ready state changes.
     * @param {() => void} onRequestsProcessedCallback - Optional - callback function to execute when all the XHR requests are complete and processed.
     */
    fetchRequest(
        combinedQueries,
        onFulfilledCallback,
        onRejectedCallback,
        onStatusChangeCallback,
        onRequestsProcessedCallback
    ) {
        combinedQueries.forEach((combinedRequestQuery) => {
            // Get the render pricing component instances for the current group of request queries
            const relatedPricingInstances = this.renderedInstances.filter(
                (renderInstance) =>
                    combinedRequestQuery.includes(
                        renderInstance.pricingConfig.requestQuery
                    )
            );

            const requestResponse = this.sendRequest(
                this.pricingConstants.Request.Method,
                combinedRequestQuery,
                null,
                function (event) {
                    if (onStatusChangeCallback) {
                        onStatusChangeCallback(this, event, relatedPricingInstances);
                    }
                }
            );

            // Create the product pricing request for the current request query
            requestResponse
                .then((productsResponse) => {
                    this.processSuccessResponse(
                        combinedRequestQuery,
                        productsResponse,
                        onFulfilledCallback
                    );
                    this.manageRequestsProgress(onRequestsProcessedCallback);
                })
                .catch((errorResponse) => {
                    onRejectedCallback(errorResponse, relatedPricingInstances);
                    this.manageRequestsProgress(onRequestsProcessedCallback);
                });
        });
    }

    /**
     * Manages and tracks the progress status of the product pricing requests.
     *
     * @param {() => void} onRequestsProcessedCallback - Optional - callback function to execute when all the XHR requests are complete and processed.
     */
    manageRequestsProgress(onRequestsProcessedCallback) {
        // Check if all product-price requests are complete and processed.
        const areAllRequestsComplete = this.xhrRequestControllers.every(
            (xhrRequestController) =>
                xhrRequestController.readyState === XMLHttpRequest.DONE
        );

        if (areAllRequestsComplete && onRequestsProcessedCallback) {
            // Execute the callback function when all the requests are processed and completed
            onRequestsProcessedCallback();
        }

        // If all the requests are complete, clear the XHR requests controllers
        if (areAllRequestsComplete) {
            // Clear the XHR requests controller
            this.xhrRequestControllers = [];
        }
    }

    /**
     * Processes the product pricing response for the current combined request query.
     * @param {string} combinedQueries - Combined request queries grouped by comma separated values.
     * @param {ProductPricingResponse[]} productsResponse - The product pricing response for the associated SKU instances.
     * @param {(productsResponse: ProductPricingResponse[], relatedPricingInstances: ocReimagine.ProductPriceModule.ProductPricingRendering[]) => void} onFulfilledCallback - The callback function to execute when the fetch request promise is fulfilled.
     */
    processSuccessResponse(
        combinedQueries,
        productsResponse,
        onFulfilledCallback
    ) {
        // Separate the combined queries into individual request queries
        const requestQueries = combinedQueries.split(",");

        requestQueries.forEach((requestQuery) => {
            // Get the product pricing response for the current request query
            // Filter the product pricing response data by component request query and PUID from response
            const responseData = productsResponse.filter(
                (productResponse) => requestQuery === productResponse.puid
            );
            // Get the render pricing component instances for the current request query
            const relatedPricingInstances = this.renderedInstances.filter(
                (renderInstance) =>
                    requestQuery === renderInstance.pricingConfig.requestQuery
            );

            // Cache the product pricing response for the current request query if caching is enabled
            if (this.isCachingEnabled) {
                // Get the cache key
                const requestQueryKey = this.getRequestCacheKey(requestQuery);
                // Cache the product pricing response for the current request query
                this.responseCacheMap.set(requestQueryKey, responseData);
            }

            // Return the product pricing response data to each associated rendering manager instance
            onFulfilledCallback(responseData, relatedPricingInstances);
        });
    }

    /**
     * Gets the request URI for the product pricing request.
     * @param {string} query - The query string for the request.
     * @returns {string} requestUri - The request URI for the product pricing request.
     */
    getRequestUri(query) {
        // Get catalog product price relative URI
        const relativeUri = this.pricingConstants.Request.RelativeUri;
        // Set query parameters
        const queryParameters = new URLSearchParams();
        queryParameters.set("q", query);

        // Append llcc to the request query with market as cc if available.
        if (this.market) {
            queryParameters.set("llcc", `${this.country}-${this.market}`);
        } else {
            queryParameters.set("llcc", this.locale);
        }

        // Add default query parameters
        for (const parameterKey in this.pricingConstants.Request.QueryParameters) {
            queryParameters.set(
                parameterKey,
                this.pricingConstants.Request.QueryParameters[parameterKey]
            );
        }

        return OneCloudUtil.getMsocapiurl(relativeUri, queryParameters.toString());
    }

    /**
     * Aborts any pending or in-progress XHR requests.
     */
    abortPendingRequests() {
        // Abort any pending or in-progress XHR requests
        this.xhrRequestControllers.forEach((xhr) => {
            xhr.abort();
        });

        // Clear the XHR requests controller
        this.xhrRequestControllers = [];
    }

    /**
     * Sends the product pricing request.
     * @param {string} method - The HTTP request method type.
     * @param {string} query - The query string for the request.
     * @param {Record<string, string> | null} requestHeaders - Optional - additional request headers to add to the xhr request.
     * @param {((this: XMLHttpRequest, ev: Event) => void) | null} onReadyStateChange - Optional - callback function to execute when the ready state changes.
     * @returns {Promise<ProductPricingResponse[]> | Promise<Error>} requestResult - Either the promise resolve or reject for the product pricing request.
     */
    sendRequest(method, query, requestHeaders = null, onReadyStateChange = null) {
        const requestResult = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            // Set the xhr request controller for the current request query
            this.xhrRequestControllers.push(xhr);
            const requestUri = this.getRequestUri(query);
            xhr.onreadystatechange = onReadyStateChange;
            xhr.open(method, requestUri);
            this.addRequestHeaders(xhr, requestHeaders);
            xhr.onload = function (ev) {
                if (this.readyState === XMLHttpRequest.DONE) {
                    if (this.status === 200) {
                        const parsedResponse = JSON.parse(this.response);
                        resolve(parsedResponse);
                    } else {
                        const errorResponse =
                            window.ocReimagine.ProductPriceModule.ProductPricingRequest.createRejectResponse(
                                this,
                                ev
                            );

                        reject(errorResponse);
                    }
                }
            };
            xhr.onerror = function (ev) {
                const errorResponse =
                    window.ocReimagine.ProductPriceModule.ProductPricingRequest.createRejectResponse(
                        this,
                        ev
                    );

                reject(errorResponse);
            };
            xhr.send();
        });

        return requestResult;
    }

    /**
     * Adds request headers to the xhr request.
     * @param {XMLHttpRequest} xhr - The xhr request instance.
     * @param {Record<string, string> | null} requestHeaders - Optional - additional request headers to add to the xhr request.
     */
    addRequestHeaders(xhr, requestHeaders = null) {
        const defaultHeaders = this.pricingConstants.Request.Headers;

        for (const defaultHeader in defaultHeaders) {
            xhr.setRequestHeader(defaultHeader, defaultHeaders[defaultHeader]);
        }

        if (requestHeaders) {
            for (const additionalHeader in requestHeaders) {
                xhr.setRequestHeader(
                    additionalHeader,
                    requestHeaders[additionalHeader]
                );
            }
        }
    }

    /**
     * Creates the error response for the product pricing request.
     * @param {XMLHttpRequest} xhr - The instance of current XMLHttpRequest request.
     * @param {ProgressEvent<EventTarget>} ev - The progress event for the current XMLHttpRequest request.
     * @returns {Error} errorResponse - The error response for the product pricing request.
     */
    static createRejectResponse(xhr, ev) {
        const errorMessage = xhr.response
            ? xhr.response
            : xhr.responseText
                ? xhr.responseText
                : xhr.statusText
                    ? xhr.statusText
                    : "Unknown error";
        const errorResponse = new Error(errorMessage);
        errorResponse.name = xhr.status.toString();

        return errorResponse;
    }
};

new (function (document, $) {
	"use strict";

	const SUCCESS_RESPONSE_CODE = "Success";
	const SHARED_DATA_SELECTOR = ".oc-shared-pricing-data";
	const PURCHASE_MAIN_SELECTOR = "[data-oc-product~='purchase']";
	const NOT_AVAILABLE_SELECTOR = "[data-oc-product~='not-available'] p"
	const COMMERCIAL_TAX_DISCLAIMER_SELECTOR = "[data-oc-shared-data='oc-tax-disclaimer'] p";
	const CONSUMER_TAX_DISCLAIMER_SELECTOR = "[data-oc-shared-data='oc-consumer-tax-disclmr'] p";
	const DATA_OC_PRODUCT_ATTRIBUTE = "data-oc-product";
	const OC_COMMERCIAL_TAX_DISCLAIMER_ATTRIBUTE = "oc-tax-disclaimer";
	const OC_CONSUMER_TAX_DISCLAIMER_ATTRIBUTE = "oc-consumer-tax-disclmr";

	/**
	 * On page load.
	 */
	$(document).on("DOMContentLoaded", () => {
		replaceSharedData();
		updateAccessibilityAttributes();
	});


	/**
	 * On market selector complete.
	 */
	$(document).on("onComplete", (event) => {
		const enableShadowTraversal = event.detail?.traversable;

		updateTokenTextMainResponseCode(enableShadowTraversal);
		updateAccessibilityAttributes(enableShadowTraversal);
		replaceSharedData(enableShadowTraversal);
	});

	/**
	 * Replaces the shared data elements inner html with the data from the shared data element depending on key.
	 * @param {boolean} [enableShadowTraversal=false] - Flag to enable shadow DOM traversal.
	 * @returns {void}
	 */
	function replaceSharedData(enableShadowTraversal = false) {
		const PURCHASE_MAIN_ELEMENTS = querySelectorAllDeep(PURCHASE_MAIN_SELECTOR, document.body, enableShadowTraversal);

		if (!PURCHASE_MAIN_ELEMENTS) return;

		PURCHASE_MAIN_ELEMENTS.forEach((elem) => {

			const RESPONSE_CODE = elem.getAttribute(DATA_OC_PRODUCT_ATTRIBUTE).split(" ")[2];
			const SHARED_DATA_ELEM = querySelectorDeep(SHARED_DATA_SELECTOR, document.body, enableShadowTraversal);
			let commercialTaxDisclaimerPlaceholder = querySelectorDeep(COMMERCIAL_TAX_DISCLAIMER_SELECTOR, elem, enableShadowTraversal);
			let consumerTaxDisclaimerPlaceholder = querySelectorDeep(CONSUMER_TAX_DISCLAIMER_SELECTOR, elem, enableShadowTraversal);
			let notAvailablePlaceholder = querySelectorDeep(NOT_AVAILABLE_SELECTOR, elem, enableShadowTraversal);

			if (!SHARED_DATA_ELEM) return;

			if (notAvailablePlaceholder && RESPONSE_CODE) {
				notAvailablePlaceholder.innerHTML = SHARED_DATA_ELEM.getAttribute(RESPONSE_CODE);
			}

			if (commercialTaxDisclaimerPlaceholder) {
				commercialTaxDisclaimerPlaceholder.innerHTML = SHARED_DATA_ELEM.getAttribute(OC_COMMERCIAL_TAX_DISCLAIMER_ATTRIBUTE);
			}

			if (consumerTaxDisclaimerPlaceholder) {
				consumerTaxDisclaimerPlaceholder.innerHTML = SHARED_DATA_ELEM.getAttribute(OC_CONSUMER_TAX_DISCLAIMER_ATTRIBUTE);
			}
		});
	}

	/**
	 * Updates the accessibility attributes for the product pricing hidden and visible elements.
	 * @param {boolean} [enableShadowTraversal=false] - Flag to enable shadow DOM traversal.
	 * @returns {void}
	 */
	function updateAccessibilityAttributes(enableShadowTraversal = false) {

		const PURCHASE_MAIN_ELEMENTS = querySelectorAllDeep(PURCHASE_MAIN_SELECTOR, document.body, enableShadowTraversal);

		if (!PURCHASE_MAIN_ELEMENTS) return;

		PURCHASE_MAIN_ELEMENTS.forEach((elem) => {

			const RESPONSE_CODE = elem.getAttribute(DATA_OC_PRODUCT_ATTRIBUTE).split(" ")[2];

			let commercialTaxDisclaimerPlaceholder = querySelectorDeep(COMMERCIAL_TAX_DISCLAIMER_SELECTOR, elem, enableShadowTraversal);
			let consumerTaxDisclaimerPlaceholder = querySelectorDeep(CONSUMER_TAX_DISCLAIMER_SELECTOR, elem, enableShadowTraversal);
			let notAvailablePlaceholder = querySelectorDeep(NOT_AVAILABLE_SELECTOR, elem, enableShadowTraversal);

			if (RESPONSE_CODE === SUCCESS_RESPONSE_CODE) {

				if (commercialTaxDisclaimerPlaceholder) {
					commercialTaxDisclaimerPlaceholder.removeAttribute("aria-hidden");
				}

				if (consumerTaxDisclaimerPlaceholder) {
					consumerTaxDisclaimerPlaceholder.removeAttribute("aria-hidden");
				}

				if (notAvailablePlaceholder) {
					notAvailablePlaceholder.setAttribute("aria-hidden", "true");
				}

			} else {

				if (commercialTaxDisclaimerPlaceholder) {
					commercialTaxDisclaimerPlaceholder.setAttribute("aria-hidden", "true");
				}

				if (consumerTaxDisclaimerPlaceholder) {
					consumerTaxDisclaimerPlaceholder.setAttribute("aria-hidden", "true");
				}

				if (notAvailablePlaceholder) {
					notAvailablePlaceholder.removeAttribute("aria-hidden");
				}
			}

		});
	}

	/**
	 * Iterates through all token text elements and updates the main response code to the first non-success response code.
	 * @param {boolean} [enableShadowTraversal=false] - Flag to enable shadow DOM traversal.
	 * @returns {void}
	 */
	function updateTokenTextMainResponseCode(enableShadowTraversal = false) {
		const TOKEN_TEXT_ELEMENTS = querySelectorAllDeep("[data-token-text]", document.body, enableShadowTraversal);
		TOKEN_TEXT_ELEMENTS.forEach((tokenTextElem) => {
			const purchaseMainElement = querySelectorDeep("[data-oc-product*=purchase][data-oc-product*=main]", tokenTextElem, enableShadowTraversal);
			if (!purchaseMainElement) return;

			const PRICING_TOKEN_ELEMENTS = querySelectorAllDeep("[data-oc-product*=purchase]:not([data-oc-product*=main])[data-token=m365ProductPrice]", tokenTextElem, enableShadowTraversal);
			if (!PRICING_TOKEN_ELEMENTS || !PRICING_TOKEN_ELEMENTS.length) return;

			let responseCode = SUCCESS_RESPONSE_CODE;
			for (const pricingTokenElem of PRICING_TOKEN_ELEMENTS) {
				let curResponseCode = pricingTokenElem.getAttribute(DATA_OC_PRODUCT_ATTRIBUTE).split(" ")[1];
				if (curResponseCode !== SUCCESS_RESPONSE_CODE) {
					responseCode = curResponseCode;
					break;
				}
			}

			let currentMainProductAttribute = purchaseMainElement.getAttribute(DATA_OC_PRODUCT_ATTRIBUTE);
			let currentMainResponseCode = currentMainProductAttribute.split(" ")[2];
			purchaseMainElement.setAttribute(DATA_OC_PRODUCT_ATTRIBUTE, currentMainProductAttribute.replace(currentMainResponseCode, responseCode));
		});
	}

})(document, $);

//#region Reimagine Product Pricing Rendering class.
/**
 * Manages rendering of product pricing component.
 * @note This class is not related with above script and is managed by product-pricing-manager script.
 */
window.ocReimagine.ProductPriceModule.ProductPricingRendering = class ProductPricingRendering {
	/**
	 * Gets the unique parent product pricing element instance identifier.
	 * @type {string | null | undefined}
	 */
	parentIdentifier;

	/**
	 * Gets the unique product pricing element instance identifier.
	 * @type {string}
	 */
	instanceIdentifier;

	/**
	 * Gets the unique child product pricing element instance identifiers.
	 * @type {string[] | null | undefined}
	 */
	childIdentifiers;

	/**
	 * Gets the product pricing component name.
	 * @type {string}
	 * @note This is used to identify the product pricing component template.
	 */
	pricingComponentName;

	/**
	 * Gets the constants for the product pricing module.
	 */
	pricingConstants =
		window.ocReimagine.ProductPriceModule.ProductPricingConstants;

	/**
	 * Gets the pricing component templates.
	 */
	pricingTemplates =
		window.ocReimagine.ProductPriceModule.ProductPricingTemplates;

	/**
	 * Gets or sets the target pricing component element.
	 * @type {HTMLDivElement | HTMLSpanElement}
	 */
	pricingComponentElement;

	/**
	 * Gets or sets the render section element.
	 * @type {HTMLDivElement | HTMLSpanElement}
	 */
	renderSectionElement;

	/**
	 * Gets or sets the pricing template fragment.
	 * @type {HTMLTemplateElement | HTMLSpanElement}
	 */
	pricingTemplateElement;

	/**
	 * Gets or sets the pricing config attributes for the current product sku request.
	 * @type {PricingClientConfig}
	 */
	pricingConfig;

	/**
	 * Gets or sets the product pricing response for the current product sku request.
	 * @type {ProductPricingResponse[]}
	 */
	#productPriceResponse;

	/**
	 * Gets the product pricing response data for the current product pricing config.
	 * @returns {ProductPricingResponse[]} product pricing response data
	 */
	get productPriceResponse() {
		return this.#productPriceResponse;
	}

	/**
	 * Sets the product pricing response data for the current product pricing request.
	 * @param {ProductPricingResponse[]} value product pricing response data
	 */
	set productPriceResponse(value) {
		this.#productPriceResponse = value;
	}

	/**
	 * Initializes new instance of the product pricing rendering handler class.
	 * @param {HTMLDivElement | HTMLSpanElement} pricingComponentElement target pricing component element
	 * @param {boolean} [enableShadowTraversal=false] - Flag to enable shadow DOM traversal.
	 */
	constructor(pricingComponentElement, enableShadowTraversal = false) {
		if (!pricingComponentElement) {
			throw new Error("[OCR][ProductPricingRenderer] Invalid pricing component element. Element is null or undefined.");
		}

		// Get pricing component element.
		this.pricingComponentElement = pricingComponentElement;

		// Find the first child element of the pricing component element from direct children of the current pricing element.
		const firstChildElement = window.ocReimagine.ProductPriceModule.ProductPricingManager.findPricingRequestElement(this.pricingComponentElement);

		// Set the unique identifier for the pricing component element render class instance
		this.instanceIdentifier = firstChildElement.dataset.ocrPricingIdentifier ?? OneCloudUtil.generateUniqueIdentifier();

		// Get render section element.
		this.renderSectionElement = this.pricingComponentElement.querySelector(
			`${this.pricingConstants.Selectors.Dataset.RenderSection}[data-ocr-pricing-identifier="${this.instanceIdentifier}"]`
		);

		// Get pricing component server-side config-template.
		this.pricingTemplateElement = this.pricingComponentElement.querySelector(
			`${this.pricingConstants.Selectors.Dataset.PricingConfig}[data-ocr-pricing-identifier="${this.instanceIdentifier}"]`
		);
		const configData = this.pricingTemplateElement?.dataset.ocrPricingConfig;

		if (configData) {
			this.pricingConfig = JSON.parse(configData);
		}

		// Set the unique identifier for the pricing component element
		this.pricingComponentElement.dataset.instanceIdentifier = this.instanceIdentifier;

		// Get the product pricing component name from the element dataset.
		this.pricingComponentName = this.pricingComponentElement.dataset.ocrPricingComponent;

		// Set the pricing component element status.
		this.pricingComponentElement.dataset.ocrPricingStatus = "1";

		// Assign child identifiers and parent identifier for the current product pricing component instance.
		this.assignChildIdentifiers(enableShadowTraversal);
		this.assignParentIdentifier(enableShadowTraversal);
	}

	/**
	 * Assigns the parent identifier for the current product pricing component instance.
	 * @param {boolean?} enableShadowTraversal - Flag to enable shadow DOM traversal.
	 * @note This is used to track the parent identifier for the pricing token component.
	 * @returns {void}
	 */
	assignParentIdentifier(enableShadowTraversal = false) {
		// Check if the pricing component is a pricing token
		// As of now, pricing tokens are the only components that can have a parent identifier.
		// Since the pricing token can be nested within another pricing component element, we need track the parent element.
		if (this.pricingComponentName === this.pricingConstants.Templates.PricingToken) {
			this.parentIdentifier = this.pricingComponentElement.dataset.ocrPricingParentIdentifier;
		}
	}

	/**
	 * Assigns the child identifiers for the current product pricing component instance.
	 * @param {boolean?} enableShadowTraversal - Flag to enable shadow DOM traversal.
	 * @note This is used to track the child identifiers for the pricing token component.
	 * @returns {void}
	 */
	assignChildIdentifiers(enableShadowTraversal = false) {
		// As of now, pricing tokens are the only components that can be nested within other pricing components.
		// Since the pricing token can be nested within another pricing component element, we need track the child elements.
		// Check if the pricing component is not a pricing token and has child pricing token elements
		if (this.pricingComponentName !== this.pricingConstants.Templates.PricingToken) {
			// Check if the current pricing component has any child pricing token elements present.
			/**
			 * @type {NodeListOf<HTMLSpanElement>}
			 */
			const childPricingTokenElements = querySelectorAllDeep(
				this.pricingConstants.Selectors.Dataset.PricingToken,
				this.pricingComponentElement,
				enableShadowTraversal
			);

			// If child pricing token elements are present, assign the parent identifier to child pricing token elements.
			// Also assign the child identifiers to the current product pricing component instance.
			if (childPricingTokenElements && childPricingTokenElements.length) {
				// Initialize the child identifiers to an empty array.
				this.childIdentifiers = [];

				// Get the child identifiers from the child pricing token elements.
				childPricingTokenElements.forEach((childPricingTokenElement) => {
					// Set the parent identifier for the child pricing token element.
					childPricingTokenElement.dataset.ocrPricingParentIdentifier = this.instanceIdentifier;

					// Get the child pricing token sku request element
					const childSkuRequestElement = window.ocReimagine.ProductPriceModule.ProductPricingManager.findPricingRequestElement(childPricingTokenElement);

					// Get the child identifier from the child pricing token element.
					const childIdentifier = childSkuRequestElement.dataset.ocrPricingIdentifier;

					if (!childIdentifier) {
						return;
					}

					this.childIdentifiers.push(childIdentifier);
				});
			}
		}
	}

	/**
	 * Handles the product pricing manager instance to update the nested pricing components.
	 * 
	 * @summary This is used to update the nested pricing components within the current product pricing component instance. 
	 * 			Can be called recursively for nested pricing components.
	 * 
	 * @returns {void}
	 */
	handleNestedPricingElements() {
		try {
			// Check if the child identifiers are present and has any child pricing token elements.
			// If child pricing token elements are present, then update the nested pricing tokens within the current pricing component.
			if (!this.childIdentifiers || !this.childIdentifiers.length) {
				return;
			}

			// Check if the pricing manager instance is initialized
			if (!window.ocReimagine.ProductPriceModule.PricingManagerInstance) {
				return;
			}

			// Get the product pricing manager instance.
			const productPricingManager = window.ocReimagine.ProductPriceModule.PricingManagerInstance;

			// Update the nested - child pricing component elements.
			// The {updateNestedPricingComponents} method can be called recursively for nested pricing components.
			// The {updateNestedPricingComponents} method calls the {updateInstanceElements} method for each child pricing component element.
			productPricingManager.updateNestedPricingComponents(this.childIdentifiers);
		} catch (error) {
			console.warn("[OCR][ProductPricingRenderer] Unable to update nested pricing components: ", error);
		}
	}

	/**
	 * Updates the product pricing component instance elements with the updated pricing component element.
	 * @summary This updates the current instance with newly rendered same pricing element on DOM.
	 * 			Since the old pricing component element is removed from DOM due to re-rendering of the parent element template,
	 * 			we need to update the child instance with the new pricing component element. Only applicable for nested/child pricing components.
	 * 			For example, if the parent pricing component is re-rendered, then the child pricing component element is removed from DOM.
	 * 			In this case, we need to update the instance with the new pricing component element.
	 * @note This method is called by the {ProductPricingManager.updateNestedPricingComponents}. Can be called recursively for nested pricing components.
	 * 
	 * @param {HTMLDivElement | HTMLSpanElement} updatedPricingComponentElement 
	 * @returns 
	 */
	updateInstanceElements(updatedPricingComponentElement) {
		// Check if the pricing component render instance is initialized
		if (!updatedPricingComponentElement) {
			return;
		}

		// Check if the pricing component element is rendered on the page
		if (isElementInDocument(this.pricingComponentElement)) {
			// No need to update the instance if the element is already rendered on the page.
			return;
		}

		// Get the first child element with the pricing request of the updated pricing component element.
		const firstChildElement = window.ocReimagine.ProductPriceModule.ProductPricingManager.findPricingRequestElement(updatedPricingComponentElement);

		// Check if the first child element matches with the current instance identifier and contains correct data-ocr-pricing-identifier and data-ocr-sku-request
		// Safety check to avoid updating the instance with incorrect element.
		if (firstChildElement.dataset.ocrSkuRequest !== this.pricingConfig.requestQuery
			|| this.instanceIdentifier !== firstChildElement.dataset.ocrPricingIdentifier) {
			throw new Error("[OCR][ProductPricingRenderer] Unable to update pricing component element. Element does not match with current instance.");
		}

		// Replace the current instance pricing component element with the updated pricing component element from DOM.
		this.pricingComponentElement = updatedPricingComponentElement;

		// Get the updated render section element.
		this.renderSectionElement = this.pricingComponentElement.querySelector(
			`${this.pricingConstants.Selectors.Dataset.RenderSection}[data-ocr-pricing-identifier="${this.instanceIdentifier}"]`
		);

		// Get the updated pricing component server-side config-template element.
		this.pricingTemplateElement = this.pricingComponentElement.querySelector(
			`${this.pricingConstants.Selectors.Dataset.PricingConfig}[data-ocr-pricing-identifier="${this.instanceIdentifier}"]`
		);

		// Set the unique identifier for the pricing component element
		this.pricingComponentElement.dataset.instanceIdentifier = this.instanceIdentifier;

		// Set the pricing component element status.
		this.pricingComponentElement.dataset.ocrPricingStatus = "1";

		// Render the updated pricing component element on the page.
		// This can be called recursively for nested pricing components if current instance has child elements.
		this.handleProductPricingResponse();
	}

	/**
	 * Handles the product pricing request response for the current reiamgine SKU request.
	 * @returns {void}
	 */
	handleProductPricingResponse() {
		if (!this.productPriceResponse || !this.productPriceResponse.length) {
			this.displayUnavailable();
			return;
		}

		try {
			const pricingResponse = this.productPriceResponse[0];
			// Update the pricing config.
			this.updatePricingConfig(pricingResponse);

			this.displayPricingTemplate(pricingResponse);
		} catch (error) {
			console.warn("[OCR][ProductPricingRenderer] rendering failure: ", error);

			if (pricingResponse.responseCode === this.pricingConstants.Enumerables.Response.DisabledMarket) {
				this.displayDisabledMarket();
			} else {
				this.displayUnavailable();
			}
		}

		// Update the product pricing manager instance to update the nested pricing components.
		// This is used to update the nested pricing components within the current product pricing component instance.
		// This will be called only if the current product pricing component instance has child identifiers.
		// Can be called recursively for nested pricing components.
		this.handleNestedPricingElements();
	}

	/**
	 * Updates the config for the current product pricing rendering instance.
	 * @param {ProductPricingResponse} pricingResponse pricing response object.
	 */
	updatePricingConfig(pricingResponse) {
		// Update edit mode flag
		this.pricingConfig.isEdit =
			this.pricingTemplateElement.hasAttribute("data-render-mode");

		this.updateRenderTitle(pricingResponse);

		if (!pricingResponse || !pricingResponse.sku) {
			return;
		}

		// Get product price has discount or not.
		this.pricingConfig.isDiscounted = pricingResponse.sku.discountPrice > 0;
	}

	/**
	 * Updates the config for the current product title rendering.
	 * @param {ProductPricingResponse} pricingResponse pricing response object. 
	 */
	updateRenderTitle(pricingResponse) {
		if (this.pricingConfig.titleOverride) {
			// Assign the title override to the render title.
			this.pricingConfig.renderTitle = this.pricingConfig.titleOverride;
		} else if (this.pricingConfig.isUsingProductTitle && pricingResponse) {
			// Assign the product title to the render title.
			this.pricingConfig.renderTitle = pricingResponse.title;
		} else if (pricingResponse && pricingResponse.sku) {
			// Assign the sku title to the render title.
			this.pricingConfig.renderTitle = pricingResponse.sku.title;
		} else if (this.pricingConfig.fallbackTitle) {
			// Assign the fallback title to the render title.
			this.pricingConfig.renderTitle = this.pricingConfig.fallbackTitle;
		} else {
			// Assign the empty string to the render title.
			// This is to avoid the title from being displayed as "undefined" in the template.
			this.pricingConfig.renderTitle = "";
		}
	}

	/**
	 * Assigns the product price response code to the product main - render element.
	 * @param {ProductResponseCode | string} responseCode 
	 */
	assignProductStatus(responseCode) {
		// For supporting legacy pricing token elements only,
		// Check if the render section element has the data-oc-product attribute.
		if (this.renderSectionElement.hasAttribute(this.pricingConstants.Attributes.Data.LegacyProductMain)) {
			this.renderSectionElement.setAttribute(this.pricingConstants.Attributes.Data.LegacyProductMain, `purchase ${responseCode}`);
		}

		// For reimagine pricing component elements,
		// Check if the render section element has the data-oc-product attribute.
		if (this.renderSectionElement.hasAttribute(this.pricingConstants.Attributes.Data.ProductMain)) {
			this.renderSectionElement.setAttribute(this.pricingConstants.Attributes.Data.ProductMain, `product main ${responseCode}`);
		}
	}

	/**
	 * Renders the template fragment for the current pricing component instance.
	 * @param {DocumentFragment | string} templateFragment template fragment to be rendered.
	 */
	renderTemplateFragment(templateFragment) {
		if (this.pricingConfig.isEdit && templateFragment instanceof DocumentFragment) {
			// Keep the authored content in the rendered content section and only replace configured sections from template fragment.
			this.replaceRenderedContent(templateFragment);
		} else {
			// Replace entire render section element with content from template fragment.
			this.renderSectionElement.replaceChildren(templateFragment);
		}
	}

	/**
	 * Saves the authored content for the current product pricing rendering instance.
	 * @param {DocumentFragment} templateFragment configured template fragment to be used for rendered.
	 */
	replaceRenderedContent(templateFragment) {
		// Replace the placeholder sections within rendered content element by replacing with content from configured template.
		for (const renderedElement of this.renderSectionElement.children) {
			const attributeValue = renderedElement.dataset.ocrPricingRender;
			const templateElement = templateFragment.querySelector(
				`[data-ocr-pricing-render="${attributeValue}"][data-ocr-pricing-identifier="${this.pricingConfig.pricingIdentifier}"]`
			);

			if (templateElement) {
				renderedElement.replaceWith(templateElement);
			}
		}
	}

	/**
	 * Prepares and displays pricing component template in the current product sku element on the page.
	 * @param {ProductPricingResponse} pricingResponse pricing response object.
	 */
	displayPricingTemplate(pricingResponse) {
		const templateFragment = this.pricingTemplates.getPricingTemplate(
			this.pricingTemplateElement,
			this.pricingComponentName,
			this.pricingConfig,
			pricingResponse
		);

		// Set the product price response code to the product main - render element.
		this.assignProductStatus(pricingResponse.responseCode);
		// Render the template fragment in the render section element.
		this.renderTemplateFragment(templateFragment);
	}

	/**
	 * Hides the pricing section and displays the unavailable section.
	 * @param {HTMLDivElement} skuElement target pricing component element
	 */
	displayUnavailable() {
		try {
			const templateFragment = this.pricingTemplates.getUnavailableTemplate(
				this.pricingComponentName,
				this.pricingConfig,
				this.pricingTemplateElement
			);

			// Set the product price response code to the product main - render element.
			this.assignProductStatus(this.pricingConstants.Enumerables.Response.NotFound);

			// Render the template fragment in the render section element.
			this.renderTemplateFragment(templateFragment);
		}
		catch (error) {
			console.warn("[OCR][ProductPricingRenderer] rendering failure: ", error);
		}
	}

	/**
	 * Hides the pricing section and displays the disabled market section.
	 * @param {HTMLDivElement} skuElement target pricing component element
	 */
	displayDisabledMarket() {
		try {
			const templateFragment = this.pricingTemplates.getDisabledMarketTemplate(
				this.pricingComponentName,
				this.pricingConfig,
				this.pricingTemplateElement
			);

			// Set the product price response code to the product main - render element.
			this.assignProductStatus(this.pricingConstants.Enumerables.Response.DisabledMarket);
			// Render the template fragment in the render section element.
			this.renderTemplateFragment(templateFragment);
		}
		catch (error) {
			console.warn("[OCR][ProductPricingRenderer] rendering failure: ", error);
		}
	}
};
//#endregion Reimagine Product Pricing Rendered Instance Manager

/**
 * @class ProductPricingManager - Manages the product pricing data and updates the UI
 */
window.ocReimagine.ProductPriceModule.ProductPricingManager = class ProductPricingManager {
    /**
     * Gets the constants for the product pricing module.
     */
    pricingConstants =
        window.ocReimagine.ProductPriceModule.ProductPricingConstants;

    /**
     * Gets the pricing manager options / settings.
     * @type {PricingManagerOptions}
     */
    pricingManagerOptions = {};

    /**
     * Gets or sets the pricing component elements on the current page.
     * @type {Array<HTMLDivElement | HTMLSpanElement>}
     */
    pricingComponentElements;

    /**
     * Gets or sets the market selector element on the current page.
     * @type {HTMLDivElement}
     */
    marketSelector;

    /**
     * Gets or sets the current locale for the page.
     * @type {string}
     */
    locale;

    /**
     * Gets or sets the country for the page.
     * @type {string}
     */
    country;

    /**
     * Gets or sets the market for the page.
     * @type {string | null}
     */
    market = null;

    /**
     * Gets or sets the market selector config options from data-layer attributes.
     * @type {MarketSelectorConfig}
     */
    marketSelectorOptions;

    /**
     * Gets or sets the instance of product pricing request manager class.
     * @type {ocReimagine.ProductPriceModule.ProductPricingRequest}
     */
    productPricingRequestManager;

    /**
     * Gets or sets the instances of product pricing rendering class for each pricing component on page.
     * @type {Array<ocReimagine.ProductPriceModule.ProductPricingRendering>}
     * @summary This is only for reference and not used in the product pricing request manager.
     */
    pricingComponentRenderInstances;

    /**
     * Gets or sets the flag to indicate if the pricing request mode is ajax.
     * @type {boolean}
     */
    isPricingRequestModeAjax;

    /**
     * Gets or sets the flag indicating whether the product pricing manager is initialized.
     * @type {boolean}
     */
    isPricingManagerInitialized = false;

    /**
     * Creates instance of the product pricing manager and associated services
     * @param {PricingManagerOptions?} options - The options/settings for the pricing manager.
     */
    constructor(options) {
        // Initial market value can be set after the on init event is dispatched by market-selector script
        // Set the market value from the market selector or from the URL
        this.market = options?.market;
        // this.market property gets updated during on refreshed event at onMarketSelectorChange

        // Set the pricing manager options
        if(options) {
            this.pricingManagerOptions = options;    
        }

        // Initialize product pricing manager
        this.initializePricingManager(options);
    }

    /**
     * Initializes the pricing manager and request manager
     * @param {PricingManagerOptions?} options - The options/settings for the pricing manager.
     * @summary Creates list of product price rendering instances of all elements with data-ocr-pricing-component
     * Request collection is managed by pricing request script, contains all the unique queries from data-sku-request/data-ocr-sku-request
     */
    initializePricingManager(options) {
        // Get current locale, country and selected market from the URL
        const documentLang =
            document.documentElement.lang || this.pricingConstants.Defaults.Locale;
        this.locale = documentLang;
        this.country = documentLang.split("-")[0];
        // Initial market value must be set after the on refreshed event is dispatched by market-selector script
        // this.market property is set during onMarketSelectorChange

        // Get pricing components.
        this.pricingComponentElements = this.getPricingComponents(options?.traversable);

        // Initialize instance of product pricing request manager class
        this.productPricingRequestManager =
            new window.ocReimagine.ProductPriceModule.ProductPricingRequest(
                documentLang,
                this.country,
                this.market
            );

        this.marketSelector = this.getMarketSelector();
        // Set the market selector config options from data-layer attributes
        this.setMarketSelectorConfig();

        // Creates and enqueues requests for all the reimagine pricing component instances on the current page
        this.createProductPricingRequests();

        if (this.isPricingManagerInitialized) {
            // if market selector is available on the page, set the market selector config and bind events
            if (this.marketSelector) {
                // Bind the market selector events
                this.bindEvents();
                // When this.marketSelectorOptions.isRefreshModeAjax is true,
                // Assign the market-selector page refresh mode value to the request mode ajax value
                // When this.marketSelectorOptions.isRefreshModeAjax is false,
                // Retain the server-side feature switch value of this.isPricingRequestModeAjax - for initial page load rendering
                this.isPricingRequestModeAjax = !this.marketSelectorOptions.isRefreshModeAjax ? this.isPricingRequestModeAjax : this.marketSelectorOptions.isRefreshModeAjax;
            }

            // if request-mode ajax feature-switch is enabled then send client-side product pricing requests on page load
            // otherwise on initial page load, the product pricing requests are made from the server-side by OSGi/ESI service
            if (this.isPricingRequestModeAjax) {
                // Send all pricing requests
                this.sendPricingRequests();
            }
        }
    }

    /**
     * Sends the product pricing requests for all the reimagine pricing component instances on the current page.
     * @summary This method is called on initialization and/or when the market selector is changed or when the product pricing elements changes on DOM.
     */
    sendPricingRequests() {
        // Start processing the requests
        this.productPricingRequestManager.processRequests(
            (productsResponse, relatedRenderedInstances) =>
                this.handleRequestSuccess(productsResponse, relatedRenderedInstances),
            (error, relatedRenderedInstances) =>
                this.handleRequestFailure(error, relatedRenderedInstances),
            this.handleRequestStatusChange,
            () => this.handleRequestsComplete()
        );
    }

    /**
     * Updates the pricing manager when the product pricing elements changes on DOM
     * @param {PricingManagerOptions?} options - The options/settings for the pricing manager. 
     * @summary This custom event is dispatched by external pricing-components whenever the product pricing elements changes on DOM. This method checks if the pricing component elements have changed and updates the product pricing request instances accordingly
     * @returns {void}
     * @memberof ProductPricingManager
     */
    updatePricingManager(options) {
        // Update the pricing manager options
        if (options) {
            // Merge the new options with the existing options
            this.pricingManagerOptions = {
                ...this.pricingManagerOptions,
                ...options,
            };
        }

        // Check if the pricing manager is initialized
        if (!this.isPricingManagerInitialized) {
            // Initialize product pricing manager
            this.initializePricingManager(options);
            return;
        }

        // Remove the pricing component element from the request manager if it is not present on the page
        for (const currentPricingComponent of this.pricingComponentElements) {
            // Get the identifier of the current pricing component
            // The identifier is set in the data-ocr-pricing-identifier attribute of the pricing component element
            const currentPricingComponentIdentifier =
                currentPricingComponent.dataset.instanceIdentifier;

            // Check if the current pricing component element is present on the page
            if (!isElementInDocument(currentPricingComponent, document.body, options?.traversable)) {
                // Remove the pricing component element from the request manager
                this.productPricingRequestManager.dequeueRequest(
                    currentPricingComponentIdentifier,
                    options?.traversable
                );
            }
        }

        // Get the pricing component elements on the current page
        const updatedPricingComponentElements = this.getPricingComponents(options?.traversable);
        let hasPricingComponentsChanged = false;

        // Check if the pricing component elements have changed
        for (const updatedPricingComponent of updatedPricingComponentElements) {

            // Get the identifier of the updated pricing component
            const updatedPricingComponentIdentifier =
                updatedPricingComponent.dataset.instanceIdentifier;
            // Get the status of the updated pricing component
            // The status is set to 0 when the pricing component is not rendered
            const updatedPricingComponentStatus = updatedPricingComponent.dataset.ocrPricingStatus;

            // Check if the updated pricing component status is not set or is 0
            // If the status is not set or is 0, it means the pricing component is not rendered
            if (!updatedPricingComponentIdentifier || !updatedPricingComponentStatus || updatedPricingComponentStatus === "0") {
                hasPricingComponentsChanged = true;
                continue;
            }

            let isPricingComponentPresent = false;

            // Get the identifier of the current pricing component
            let currentPricingComponentIdentifier = "";

            for (const currentPricingComponent of this.pricingComponentElements) {
                // Get the identifier of the current pricing component
                // The identifier is set in the data-ocr-pricing-identifier attribute of the pricing component element
                currentPricingComponentIdentifier =
                    currentPricingComponent.dataset.instanceIdentifier;

                // Check if the current pricing component element exists in the updated list
                isPricingComponentPresent =
                    currentPricingComponentIdentifier ===
                    updatedPricingComponentIdentifier;

                // If the pricing component element exists in the updated list, break the loop
                if (isPricingComponentPresent) {
                    break;
                }
            }

            // If the pricing component element does not exist in the updated list, remove it from the request manager
            if (!isPricingComponentPresent) {
                // Remove the pricing component element from the request manager
                this.productPricingRequestManager.dequeueRequest(
                    currentPricingComponentIdentifier,
                    options?.traversable
                );
            }
        }

        // Check if the updated pricing component elements have changed
        if (!hasPricingComponentsChanged) {
            return;
        }

        // Update the pricing component elements
        this.pricingComponentElements = updatedPricingComponentElements;

        // Update the product pricing request instances on page edit when pricing elements changes
        this.updateProductPricingRequests();

        // Send the pricing requests
        this.sendPricingRequests();
    }

    /**
     * Gets the pricing component elements on the current page.
     * @param {boolean?} enableShadowTraversal - If true, traverses shadow DOM to find the pricing component elements.
     * @summary Finds the pricing component elements by the [data-ocr-pricing-component] attribute selector. 
     * @returns {Array<HTMLDivElement | HTMLSpanElement>} The pricing component elements on the current page.
     */
    getPricingComponents(enableShadowTraversal) {
        return querySelectorAllDeep(this.pricingConstants.Selectors.Dataset.Component, document.body, enableShadowTraversal);
    }

    /**
     * Finds the first data-ocr-sku-request element for the provided pricing component element by searching direct children of the provided pricing element.
     * Descendants are ignored to avoid capturing nested pricing components.
     * @param {HTMLDivElement | HTMLSpanElement} pricingComponentElement target pricing component element
     * @returns {HTMLDivElement | HTMLSpanElement} the first pricing/sku request element of the pricing component element.
     * @throws {Error} if the pricing component element is invalid or does not have the required attributes.
     */
    static findPricingRequestElement(pricingComponentElement) {
        // Get the first child element of the pricing component element from direct children of the current pricing element.
        const firstChildElement = pricingComponentElement.querySelector(`:scope > ${window.ocReimagine.ProductPriceModule.ProductPricingConstants.Selectors.Dataset.SkuRequestQuery}`);

        // Check if the first child element is present and has the data-ocr-pricing-identifier and data-ocr-sku-request
        if (!firstChildElement || !firstChildElement.dataset.ocrPricingIdentifier || !firstChildElement.dataset.ocrSkuRequest) {
            throw new Error("[OCR][ProductPricingManager] Invalid pricing component element. Missing data-ocr-pricing-identifier or data-ocr-sku-request attribute.");
        }

        return firstChildElement;
    }

    /**
     * Updates the nested pricing components on the current page.
     * @summary This method updates the nested pricing components on the current page based on the provided nested component identifiers.
     * It fires the pricing component rendered instance update event based on the instance identifiers.
     * Used as a callback function by product price rendered instance. Can be called recursively to update nested pricing components.
     * @param {string[] | null | undefined} componentIdentifiers - The identifiers of the pricing components to update.
     * @returns {void}
     */
    updateNestedPricingComponents(componentIdentifiers) {
        if (!componentIdentifiers || componentIdentifiers.length === 0) {
            return;
        }

        // Update the pricing component elements on the current page
        this.pricingComponentElements = this.getPricingComponents();

        // Fire the pricing component rendered instance update event based on the instance identifiers
        this.pricingComponentElements.forEach((pricingComponentElement) => {
            try {
                const pricingInstanceIdentifier = pricingComponentElement.dataset.instanceIdentifier;
                const pricingComponentStatus = pricingComponentElement.dataset.ocrPricingStatus;

                if (pricingComponentStatus === "1" || pricingInstanceIdentifier) {
                    return;
                }

                const pricingComponentRequestElement = ProductPricingManager.findPricingRequestElement(pricingComponentElement);
                const pricingComponentIdentifier = pricingComponentRequestElement.getAttribute(this.pricingConstants.Attributes.Data.PricingIdentifier);

                if (!pricingComponentIdentifier || !componentIdentifiers.includes(pricingComponentIdentifier)) {
                    return;
                }

                // Get the pricing component instance from the list of pricing component render instances
                const pricingComponentInstance = this.pricingComponentRenderInstances.find((existingInstance) => existingInstance.instanceIdentifier === pricingComponentIdentifier);

                if (!pricingComponentInstance) {
                    return;
                }

                // Fire the update the pricing component instance event
                // updates the pricing component instance with the new pricing component element
                // The pricing component instance can callback the {updateNestedPricingComponents} method recursively to update nested pricing components
                pricingComponentInstance.updateInstanceElements(pricingComponentElement);
            } catch (e) {
                console.warn("[OCR][ProductPricingManager] update nested pricing components failure: ", e);
            }
        });
    }

    /**
     * Gets the market selector element on the current page.
     * @returns {HTMLDivElement} marketSelector - The market selector element on the current page.
     */
    getMarketSelector() {
        return document.querySelector(
            this.pricingConstants.Selectors.Dataset.MarketSelector
        );
    }

    /**
     * Sets the market selector configuration options from data-layer attributes.
     */
    setMarketSelectorConfig() {
        if (!this.marketSelector) {
            // If the market selector is not present on the page, set the default market selector options
            this.marketSelectorOptions = {
                isRefreshModeAjax: false
            };

            return;
        }

        this.marketSelectorOptions = {
            refreshMode: this.marketSelector?.dataset?.refreshMode,
            isRefreshModeAjax:
                this.marketSelector?.dataset?.refreshMode ===
                this.pricingConstants.Parameters.MarketSelector.RefreshMode.AJAX,
        };
    }

    /**
     * Binds the market selector events for the product pricing manager.
     */
    bindEvents() {
        if (
            this.marketSelectorOptions.isRefreshModeAjax &&
            oc.event.marketSelector
        ) {
            // This runs on first/initial page load event on document ready state and sub-sequent market selection changes
            document.body.addEventListener(
                this.pricingConstants.Events.MarketSelector.OnRefreshed,
                (ev) => {
                    this.onMarketSelectorChange(ev);
                }
            );
        }
    }

    /**
     * Handles the market selector change event.
     * @param {CustomEvent} event the on select event of market selector dropdown.
     */
    onMarketSelectorChange(event) {
        if (event.detail.value && event.detail.value !== this.market) {
            this.market = event.detail.value;
            this.productPricingRequestManager.market = event.detail.value;
            // Update the product pricing request manager
            this.productPricingRequestManager.updateRequestManager(
                event.detail.value
            );
            // Cancel all existing pending or in-progress requests
            this.productPricingRequestManager.abortPendingRequests();
            // Send the pricing requests
            this.sendPricingRequests();
        }
    }

    /**
     * Creates and enqueues product pricing requests for all the reimagine pricing components on the current page.
     */
    createProductPricingRequests() {
        if (this.pricingComponentElements.length) {
            try {
                // Create the product pricing requests for each pricing component element
                for (const pricingComponentElement of this.pricingComponentElements) {
                    try {
                        // Create an instance of product price rendering class for the pricing component element
                        this.createProductPriceRenderInstance(pricingComponentElement);
                    } catch (e) {
                        console.warn("[OCR][ProductPricingManager] creation error: ", e);
                    }
                }

                // Get the instances of product pricing rendering class for each pricing component on page
                this.isPricingManagerInitialized =
                    this.productPricingRequestManager.renderedInstances.length > 0;

                // Assign the product pricing request manager instances for each pricing component on page
                // Only for reference
                this.pricingComponentRenderInstances =
                    this.productPricingRequestManager.renderedInstances;
            } catch (e) {
                this.isPricingManagerInitialized = false;

                console.warn("[OCR][ProductPricingManager] initialization failure: ", e);
            }
        }
    }

    /**
     * Updates the product pricing request instances on page edit.
     * @returns
     */
    updateProductPricingRequests() {
        // update the product pricing request instances on pricing element changes.
        if (!this.pricingComponentElements.length) {
            return;
        }

        for (const pricingComponentElement of this.pricingComponentElements) {
            try {
                // Check if the pricing component element is already initialized
                // Check for instance identifier to avoid re-initializing the same instance of product pricing rendering class
                const instanceExists =
                    this.productPricingRequestManager.renderedInstances.some(
                        (existingInstance) =>
                            pricingComponentElement.dataset.instanceIdentifier &&
                            existingInstance.instanceIdentifier ===
                            pricingComponentElement.dataset.instanceIdentifier
                    );

                if (instanceExists) {
                    // If the instance already exists, continue to the next pricing component element iteration
                    continue;
                }

                // Create a new instance of product price rendering class for the pricing component element
                this.createProductPriceRenderInstance(pricingComponentElement);
            } catch (e) {
                console.warn("[OCR][ProductPricingManager] update error: ", e);
            }
        }
    }

    /**
     * Creates an instance of product price rendering class for the pricing component element.
     * @summary This method creates an instance of product price rendering class for the pricing component element.
     * It also checks if the request mode is ajax and if the market selector refresh mode is ajax.
     * If both are true, it sends the product pricing request.
     * @param {HTMLDivElement} pricingComponentElement 
     * @returns {void}
     * @memberof ocReimagine.ProductPriceModule.ProductPricingManager
     */
    createProductPriceRenderInstance(pricingComponentElement) {
        // Initialize instance of product price rendering class for the pricing component.
        // This rendering class is what updates the UI for the pricing component depending on the product pricing response.
        const productPricingRender =
            new window.ocReimagine.ProductPriceModule.ProductPricingRendering(
                pricingComponentElement,
                this.pricingManagerOptions.traversable
            );

        const requestQuery = productPricingRender.pricingConfig.requestQuery;
        const isProductPriceOverridden =
            productPricingRender.pricingConfig.isProductPriceOverridden;
        // Get pricing request mode from the pricing component element
        this.isPricingRequestModeAjax =
            productPricingRender.pricingConfig.isRequestModeAjax;

        // if request mode is not ajax and market selector refresh mode is not ajax, then break the loop
        if (
            !this.isPricingRequestModeAjax &&
            !this.marketSelectorOptions.isRefreshModeAjax
        ) {
            return;
        }

        // if sku request query is available and product price is not overridden, only then send the product pricing request
        // otherwise we ignore the current instance of reimagine pricing component
        if (requestQuery && !isProductPriceOverridden) {
            this.productPricingRequestManager.enqueueRequest(
                productPricingRender
            );
        }
    }

    /**
     * Handles the product pricing request status change for provided pricing component instances.
     * @param {XMLHttpRequest} xhr - The XMLHttpRequest object for the product pricing request.
     * @param {Event} event - The event object for the product pricing request.
     * @param {ocReimagine.ProductPriceModule.ProductPricingRendering[]} renderManagerInstances - Grouped instances of product pricing rendering class associated with same requests.
     */
    handleRequestStatusChange(xhr, event, renderManagerInstances) {
        // TODO: add in-progress status handling - loading animation or spinner
    }

    /**
     * Manages the product pricing request success for provided pricing component instances.
     * @param {ProductPricingResponse[]} productsResponse - The product pricing response for the associated SKU instances.
     * @param {ocReimagine.ProductPriceModule.ProductPricingRendering[]} renderManagerInstances - Grouped instances of product pricing rendering class associated with same requests.
     */
    handleRequestSuccess(productsResponse, renderManagerInstances) {
        // Assign and hanlde the product pricing response to each pricing component rendering class instance
        renderManagerInstances.forEach((renderingClassInstance) => {
            renderingClassInstance.productPriceResponse = productsResponse;
            renderingClassInstance.handleProductPricingResponse();
            // update the sku telemetry attributes for the action components in each page
            const renderElement = renderingClassInstance.renderSectionElement;
            const priceResponse = renderingClassInstance.productPriceResponse[0];
            this.updateSkuTelemetryAttributes(renderElement, priceResponse);
        });
    }

    /**
     * Handles the product pricing request failure for provided pricing component instances.
     * @param {Error} error - The error object for the failed product pricing request.
     * @param {Array<ocReimagine.ProductPriceModule.ProductPricingRendering>} renderManagerInstances - Grouped instances of product pricing rendering class associated with same requests.
     */
    handleRequestFailure(error, renderManagerInstances) {
        // Display the product pricing unavailable for each SKU rendering class instance
        renderManagerInstances.forEach((renderingClassInstance) =>
            renderingClassInstance.displayUnavailable()
        );
    }

    /**
     * Handles the callback when all the product pricing requests are complete and processed.
     */
    handleRequestsComplete() {
        if (!window.ocrReimagine) {
            return;
        }
        // Re-initialize popover component and/or pricing-tokens inside rich-text after rendering the template content.
        this.reinitializeComponents();
        // Regenerates FWLinks after the product pricing is rendered from a 'static' template.
        this.regenerateFWLinkParams();
        // Dispatch the render complete events for the product pricing module.
        this.dispatchRenderCompleteEvents();
    }

    /**
     * Re-initializes the popover component and/or pricing-tokens inside rich-text for the all the product pricing instances.
     *
     * @summary Since the product pricing component content is rendered dynamically from authored template and configured template,
     * the popover component and/or pricing-tokens inside rich-text will not be initialized as they are within the template section
     * and not actually rendered on the page. This method re-initializes the popover component and/or pricing-tokens inside rich-text.
     */
    reinitializeComponents() {
        // Try to re-initialize popover content and/or pricing-tokens scripts to update content functionality after it is rendered from template.
        try {
            if (window.ocrReimagine.PopoverRichTextPlugin) {
                // Re-initialize popover rich text plugin script.
                window.ocrReimagine.PopoverRichTextPlugin.initializePopoverRichTextPlugin();
            }
        } catch (e) { }
    }

    /*
     * Regenerates FWLinks by calling the Market Selector's function that handles setting the FWLinkParams.
     */
    regenerateFWLinkParams() {
        if (!window.ocrReimagine.MarketSelector) {
            return;
        }

        try {
            // Regenerate the FWLinkParams after the product pricing is rendered.
            window.ocrReimagine.MarketSelector.setFWLinksQueryParams(
                window.ocrReimagine.MarketSelector.instance.fwlinkParams
            );
        } catch (e) {
            // No error handling.
        }
    }

    /**
     * Update sku telemetry attributes for all the action components in the page.
     * @param {HTMLDivElement | HTMLSpanElement} renderElement 
     * @param {ProductPricingResponse} priceResponse 
     * @returns {void}
     */
    updateSkuTelemetryAttributes(renderElement, priceResponse) {
        if (!window.ocrReimagine.SkuTelemetry) return;
        try {
            window.ocrReimagine.SkuTelemetry.adjustActionTelemetryAjax(renderElement, priceResponse);
        } catch (e) {
            // No error handling.
        }
    }

    /**
     * Dispatches the render complete events for the product pricing module.
     * @summary This method dispatches the render complete events for the product pricing module.
     */
    dispatchRenderCompleteEvents() {
        // Legacy event render complete event for updating the pricing-tokens inside rich-text.
        const legacyCompleteEvent = new CustomEvent(this.pricingConstants.Events.Pricing.OnComplete, { detail: { traversable: this.pricingManagerOptions.traversable } });
        const renderCompleteEvent = new CustomEvent(this.pricingConstants.Events.Pricing.OnRenderComplete);

        document.dispatchEvent(legacyCompleteEvent);
        document.dispatchEvent(renderCompleteEvent);
    }
};

new (function () {
    // Check if edit mode is enabled and page is loaded
    const isEditing =
        window.Granite &&
        window.CQ &&
        document.querySelector("[data-render-mode]") &&
        document.readyState === "complete";

    if (isEditing) {
        // Update the product pricing module
        updateProductPriceModule();
    }

    /**
     * Updates the reimagine product pricing manager and services on page edit when dialog is submitted.
     *
     * @returns void
     */
    function updateProductPriceModule() {
        try {
            // Check if product pricing manager instance exists
            if (
                window.ocReimagine &&
                window.ocReimagine.ProductPriceModule &&
                window.ocReimagine.ProductPriceModule.PricingManagerInstance
            ) {
                // on page edit mode update product pricing manager instance on SKU component cq dialog submit event
                window.ocReimagine.ProductPriceModule.PricingManagerInstance.updatePricingManager();
            }
        } catch (error) {
            console.warn(
                "[OCR][ProductPricingEditor] update failure: ",
                error
            );
        }
    }
})();

