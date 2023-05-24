import { aR as allComponentClasses, aS as componentTypesCreatingVariants, az as retrieveTextFileForCid, z as cidFromText, aT as expandDoenetMLsToFullSerializedComponents, aU as addDocumentIfItsMissing, aV as getNumberOfVariants, aW as numberToLetters, aX as parseAndCompile, aY as enumerateCombinations, aZ as countComponentTypes } from "./PageViewer-d914b069.js";
function createComponentInfoObjects() {
  let allComponentClasses$1 = allComponentClasses();
  let componentTypesCreatingVariants$1 = componentTypesCreatingVariants();
  let componentTypeLowerCaseMapping = {};
  for (let componentType in allComponentClasses$1) {
    componentTypeLowerCaseMapping[componentType.toLowerCase()] = componentType;
  }
  let stateVariableInfo = {};
  for (let componentType in allComponentClasses$1) {
    Object.defineProperty(stateVariableInfo, componentType, {
      get: function() {
        let info = allComponentClasses$1[componentType].returnStateVariableInfo();
        delete stateVariableInfo[componentType];
        return stateVariableInfo[componentType] = info;
      }.bind(this),
      configurable: true
    });
  }
  let publicStateVariableInfo = {};
  for (let componentType in allComponentClasses$1) {
    Object.defineProperty(publicStateVariableInfo, componentType, {
      get: function() {
        let info = allComponentClasses$1[componentType].returnStateVariableInfo({
          onlyPublic: true
        });
        delete publicStateVariableInfo[componentType];
        return publicStateVariableInfo[componentType] = info;
      }.bind(this),
      configurable: true
    });
  }
  function isInheritedComponentType({
    inheritedComponentType,
    baseComponentType
  }) {
    if (inheritedComponentType === baseComponentType) {
      return true;
    }
    if (inheritedComponentType === "string") {
      return baseComponentType === "_base" || baseComponentType === "_inline";
    } else if (baseComponentType === "string") {
      return false;
    }
    let baseClass = allComponentClasses$1[baseComponentType];
    if (!baseClass) {
      return false;
    }
    return baseClass.isPrototypeOf(allComponentClasses$1[inheritedComponentType]);
  }
  function isCompositeComponent({ componentType, includeNonStandard = true }) {
    let componentClass = allComponentClasses$1[componentType];
    if (!componentClass) {
      return false;
    }
    let isComposite = isInheritedComponentType({
      inheritedComponentType: componentType,
      baseComponentType: "_composite"
    });
    return isComposite && (includeNonStandard || !componentClass.treatAsComponentForRecursiveReplacements);
  }
  let componentTypeIsSpecifiedType = (cType, specifiedCType) => isInheritedComponentType({
    inheritedComponentType: cType,
    baseComponentType: specifiedCType
  });
  let componentIsSpecifiedType = (comp, specifiedCType) => {
    var _a, _b;
    return componentTypeIsSpecifiedType(comp.componentType, specifiedCType) || componentTypeIsSpecifiedType(
      (_b = (_a = comp.attributes) == null ? void 0 : _a.createComponentOfType) == null ? void 0 : _b.primitive,
      specifiedCType
    );
  };
  return {
    allComponentClasses: allComponentClasses$1,
    componentTypesCreatingVariants: componentTypesCreatingVariants$1,
    componentTypeLowerCaseMapping,
    isInheritedComponentType,
    isCompositeComponent,
    stateVariableInfo,
    publicStateVariableInfo,
    componentIsSpecifiedType
  };
}
async function returnAllPossibleVariants({ cid, doenetML }) {
  if (doenetML === void 0) {
    doenetML = await retrieveTextFileForCid(cid, "doenet");
  } else if (!cid) {
    cid = await cidFromText(doenetML);
  }
  let componentInfoObjects = createComponentInfoObjects();
  let { fullSerializedComponents } = await expandDoenetMLsToFullSerializedComponents({
    contentIds: [cid],
    doenetMLs: [doenetML],
    componentInfoObjects
  });
  let serializedComponents = fullSerializedComponents[0];
  addDocumentIfItsMissing(serializedComponents);
  let document = serializedComponents[0];
  let results = getNumberOfVariants({
    serializedComponent: document,
    componentInfoObjects
  });
  let numVariants = results.numberOfVariants;
  let allPossibleVariants;
  if (results.variantNames) {
    let variantNames = [...results.variantNames];
    if (variantNames.length >= numVariants) {
      variantNames = variantNames.slice(0, numVariants);
    } else {
      let originalVariantNames = [...variantNames];
      let variantNumber = variantNames.length;
      let variantValue = variantNumber;
      let variantString;
      while (variantNumber < numVariants) {
        variantNumber++;
        variantValue++;
        variantString = indexToLowercaseLetters(variantValue);
        while (originalVariantNames.includes(variantString)) {
          variantValue++;
          variantString = indexToLowercaseLetters(variantValue);
        }
        variantNames.push(variantString);
      }
    }
    allPossibleVariants = variantNames;
  } else {
    allPossibleVariants = [...Array(numVariants).keys()].map(
      (x) => indexToLowercaseLetters(x + 1)
    );
  }
  return { allPossibleVariants, doenetML, cid };
}
function indexToLowercaseLetters(index) {
  return numberToLetters(index, true);
}
function _prng_restore(prng, xg, opts) {
  let state = opts && opts.state;
  if (state) {
    if (typeof state == "object")
      xg.copy(state, xg);
    prng.state = () => xg.copy(xg, {});
  }
}
function prng_alea(seed, opts) {
  let xg = new AleaGen(seed);
  let prng = () => xg.next();
  prng.double = () => prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
  prng.int32 = () => xg.next() * 4294967296 | 0;
  prng.quick = prng;
  _prng_restore(prng, xg, opts);
  return prng;
}
class AleaGen {
  constructor(seed) {
    if (seed == null)
      seed = +/* @__PURE__ */ new Date();
    let n = 4022871197;
    this.c = 1;
    this.s0 = mash(" ");
    this.s1 = mash(" ");
    this.s2 = mash(" ");
    this.s0 -= mash(seed);
    if (this.s0 < 0) {
      this.s0 += 1;
    }
    this.s1 -= mash(seed);
    if (this.s1 < 0) {
      this.s1 += 1;
    }
    this.s2 -= mash(seed);
    if (this.s2 < 0) {
      this.s2 += 1;
    }
    function mash(data) {
      data = String(data);
      for (let i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        let h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 4294967296;
      }
      return (n >>> 0) * 23283064365386963e-26;
    }
  }
  next() {
    let { c, s0, s1, s2 } = this;
    let t = 2091639 * s0 + c * 23283064365386963e-26;
    this.s0 = s1;
    this.s1 = s2;
    return this.s2 = t - (this.c = t | 0);
  }
  copy(f, t) {
    t.c = f.c;
    t.s0 = f.s0;
    t.s1 = f.s1;
    t.s2 = f.s2;
    return t;
  }
}
let rngClass = prng_alea;
function parseActivityDefinition(activityDefDoenetML) {
  let serializedDefinition = parseAndCompile(activityDefDoenetML).filter(
    (x) => typeof x !== "string" || /\S/.test(x)
  );
  if (serializedDefinition.length !== 1 || serializedDefinition[0].componentType !== "document") {
    return { success: false, message: `Invalid activity definition` };
  }
  serializedDefinition = serializedDefinition[0];
  let documentProps = {};
  for (let prop in serializedDefinition.props) {
    let lowerProp = prop.toLowerCase();
    if (lowerProp in documentProps) {
      return {
        success: false,
        message: `Invalid activity definition: duplicate attribute ${lowerProp}`
      };
    }
    documentProps[prop.toLowerCase()] = serializedDefinition.props[prop];
  }
  let xmlns;
  if (documentProps.type.toLowerCase() === "activity") {
    let jsonDefinition = {
      type: "activity"
    };
    delete documentProps.type;
    if (documentProps.itemweights) {
      if (typeof documentProps.itemweights !== "string") {
        return {
          success: false,
          message: `Invalid activity definition: invalid itemWeights`
        };
      }
      jsonDefinition.itemWeights = documentProps.itemweights.split(/\s+/).filter((s) => s).map(Number);
      delete documentProps.itemweights;
    }
    jsonDefinition.shuffleItemWeights = documentProps.shuffleitemweights !== void 0 && (documentProps.shuffleitemweights === true || documentProps.shuffleitemweights.toLowerCase() === "true");
    delete documentProps.shuffleitemweights;
    jsonDefinition.isSinglePage = documentProps.issinglepage !== void 0 && (documentProps.issinglepage === true || documentProps.issinglepage.toLowerCase() === "true");
    delete documentProps.issinglepage;
    if (documentProps.xmlns) {
      if (documentProps.xmlns.slice(0, 34) === "https://doenet.org/spec/doenetml/v") {
        jsonDefinition.version = documentProps.xmlns.slice(34);
        xmlns = documentProps.xmlns;
        delete documentProps.xmlns;
      } else {
        return {
          success: false,
          message: `Invalid activity definition: unrecognized xmlns`
        };
      }
    } else {
      console.warn("no xmlns of activity!");
    }
    if (documentProps.numberofvariants) {
      jsonDefinition.numberOfVariants = Number(documentProps.numberofvariants);
      delete documentProps.numberofvariants;
    }
    if (Object.keys(documentProps).length > 0) {
      return {
        success: false,
        message: `Invalid activity definition: invalid document attributes: ${Object.keys(
          documentProps
        ).join(", ")}`
      };
    }
    let fakeOrder = {
      type: "order",
      behavior: "sequence",
      children: serializedDefinition.children
    };
    let result = validateOrder(fakeOrder);
    if (!result.success) {
      return {
        success: false,
        message: `Invalid activity definition: ${result.message}`
      };
    }
    jsonDefinition.order = result.order;
    return { success: true, activityJSON: jsonDefinition };
  } else if (documentProps.type.toLowerCase() === "page") {
    let page = { type: "page", doenetML: activityDefDoenetML };
    let jsonDefinition = {
      type: "activity",
      order: {
        type: "order",
        behavior: "sequence",
        content: [page]
      }
    };
    if (documentProps.xmlns) {
      if (documentProps.xmlns.slice(0, 34) === "https://doenet.org/spec/doenetml/v") {
        jsonDefinition.version = documentProps.xmlns.slice(34);
        delete documentProps.xmlns;
      } else {
        return {
          success: false,
          message: `Invalid activity definition: unrecognized xmlns`
        };
      }
    } else {
      console.warn("no xmlns of activity!");
    }
    return { success: true, activityJSON: jsonDefinition };
  } else {
    return { success: false, message: `Invalid activity definition` };
  }
  function validateOrder(order) {
    let newOrder = { type: "order" };
    let orderProps = {};
    for (let prop in order.props) {
      let lowerProp = prop.toLowerCase();
      if (lowerProp in orderProps) {
        return {
          success: false,
          message: `duplicate attribute of order ${lowerProp}`
        };
      }
      orderProps[prop.toLowerCase()] = order.props[prop];
    }
    for (let prop in orderProps) {
      if (prop === "behavior") {
        newOrder.behavior = orderProps.behavior;
      } else if (prop == "numbertoselect") {
        newOrder.numberToSelect = Number(orderProps.numbertoselect);
      } else if (prop == "withreplacement") {
        newOrder.withReplacement = orderProps.withreplacement !== void 0 && (orderProps.withreplacement === true || orderProps.withreplacement.toLowerCase() === "true");
      } else {
        return {
          success: false,
          message: `invalid order attribute: ${prop}`
        };
      }
    }
    let orderChildren = order.children.filter(
      (x) => typeof x !== "string" || /\S/.test(x)
    );
    let content = [];
    for (let child of orderChildren) {
      if (child.componentType.toLowerCase() === "order") {
        let result = validateOrder(child);
        if (result.success) {
          content.push(result.order);
        } else {
          return result;
        }
      } else if (child.componentType.toLowerCase() == "page") {
        let result = validatePage(child);
        if (result.success) {
          content.push(result.page);
        } else {
          return result;
        }
      } else {
        return {
          success: false,
          message: `invalid child of order, found type: ${child.componentType}`
        };
      }
    }
    newOrder.content = content;
    return {
      success: true,
      order: newOrder
    };
  }
  function validatePage(page) {
    var _a;
    let newPage = { type: "page" };
    let pageProps = {};
    for (let prop in page.props) {
      let lowerProp = prop.toLowerCase();
      if (lowerProp in pageProps) {
        return {
          success: false,
          message: `duplicate attribute of page ${lowerProp}`
        };
      }
      pageProps[prop.toLowerCase()] = page.props[prop];
    }
    for (let prop in pageProps) {
      if (prop === "cid") {
        newPage.cid = pageProps.cid;
        delete pageProps.cid;
      } else if (prop == "label")
        ;
      else {
        return {
          success: false,
          message: `invalid page attribute: ${prop}`
        };
      }
    }
    if (page.children.length > 0) {
      let pageDoenetML = activityDefDoenetML.slice(
        page.range.openEnd,
        page.range.closeBegin
      );
      if (((_a = page.children[0].componentType) == null ? void 0 : _a.toLowerCase()) !== "document") {
        let xmlnsprop = "";
        if (xmlns) {
          xmlnsprop = ` xmlns="${xmlns}"`;
        }
        pageDoenetML = `<document type="page" ${xmlnsprop}>${pageDoenetML}</document>`;
      }
      newPage.doenetML = pageDoenetML;
    }
    return {
      success: true,
      page: newPage
    };
  }
}
async function calculateOrderAndVariants({
  activityDefinition,
  requestedVariantIndex
}) {
  let activityVariantResult = await determineNumberOfActivityVariants(
    activityDefinition
  );
  let variantIndex = (requestedVariantIndex - 1) % activityVariantResult.numberOfVariants + 1;
  if (variantIndex < 1) {
    variantIndex += activityVariantResult.numberOfVariants;
  }
  if (!Number.isFinite(variantIndex)) {
    return { success: false, message: "Invalid requested variant index" };
  }
  let rng = new rngClass(variantIndex.toString());
  let orderResult = determineOrder(activityDefinition.order, rng);
  if (!orderResult.success) {
    return orderResult;
  }
  let originalOrder = orderResult.pages;
  let itemWeights = activityDefinition.itemWeights || [];
  if (!Array.isArray(itemWeights) || !itemWeights.every((x) => x >= 0)) {
    return { success: false, message: "Invalid itemWeights" };
  }
  let nPages = originalOrder.length;
  itemWeights = itemWeights.slice(0, nPages);
  if (itemWeights.length < nPages) {
    itemWeights.push(...Array(nPages - itemWeights.length).fill(1));
  }
  let totalWeight = itemWeights.reduce((a, c) => a + c);
  if (totalWeight > 0) {
    itemWeights = itemWeights.map((x) => x / totalWeight);
  }
  let pageVariantsResult;
  if (activityVariantResult.pageVariants) {
    pageVariantsResult = [activityVariantResult.pageVariants];
  } else {
    let promises = [];
    for (let page of originalOrder) {
      promises.push(
        returnAllPossibleVariants({
          cid: page.cid,
          doenetML: page.doenetML
        })
      );
    }
    try {
      pageVariantsResult = await Promise.all(promises);
    } catch (e) {
      return {
        success: false,
        message: `Error retrieving content for activity. ${e.message}`
      };
    }
  }
  let variantForEachPage;
  let allPossiblePerPage = [];
  let numberOfVariantsPerPage = [];
  for (let pageResult of pageVariantsResult) {
    allPossiblePerPage.push(pageResult.allPossibleVariants);
    numberOfVariantsPerPage.push(pageResult.allPossibleVariants.length);
  }
  let numberOfPageVariantCombinations = numberOfVariantsPerPage.reduce(
    (a, c) => a * c,
    1
  );
  if (numberOfPageVariantCombinations <= activityVariantResult.numberOfVariants) {
    let pageVariantCombinationIndex = (variantIndex - 1) % numberOfPageVariantCombinations + 1;
    variantForEachPage = enumerateCombinations({
      numberOfOptionsByIndex: numberOfVariantsPerPage,
      maxNumber: pageVariantCombinationIndex
    })[pageVariantCombinationIndex - 1].map((x) => x + 1);
  } else {
    variantForEachPage = [...Array(nPages).keys()].map(
      (i) => Math.floor(rng() * numberOfVariantsPerPage[i]) + 1
    );
  }
  let variantsByPage = [];
  let newOrder = [];
  for (let [ind, possibleVariants] of pageVariantsResult.entries()) {
    let pageVariantIndex = variantForEachPage[ind];
    variantsByPage.push(pageVariantIndex);
    let page = originalOrder[ind];
    if (page.doenetML === void 0) {
      page = { ...page };
      page.doenetML = possibleVariants.doenetML;
    } else if (!page.cid) {
      page = { ...page };
      page.cid = possibleVariants.cid;
    }
    newOrder.push(page);
  }
  let orderWithCids = [...originalOrder];
  newOrder.forEach((v, i) => orderWithCids[i].cid = v.cid);
  let previousComponentTypeCounts = await initializeComponentTypeCounts(
    newOrder
  );
  let activityInfo = {
    orderWithCids,
    variantsByPage,
    itemWeights,
    numberOfVariants: activityVariantResult.numberOfVariants,
    previousComponentTypeCounts
  };
  return {
    success: true,
    order: newOrder,
    itemWeights,
    variantsByPage,
    variantIndex,
    activityInfo,
    previousComponentTypeCounts
  };
}
async function determineNumberOfActivityVariants(activityDefinition) {
  let numberOfVariants = 1e3;
  let pageVariantsResult = null;
  if (activityDefinition.numberOfVariants !== void 0) {
    numberOfVariants = activityDefinition.numberOfVariants;
    if (!(Number.isInteger(numberOfVariants) && numberOfVariants >= 1)) {
      numberOfVariants = 1e3;
    }
  } else if ((activityDefinition.order.behavior === void 0 || activityDefinition.order.behavior === "sequence") && activityDefinition.order.content.every((x) => x.type === "page")) {
    let promises = [];
    for (let page of activityDefinition.order.content) {
      promises.push(
        returnAllPossibleVariants({
          cid: page.cid,
          doenetML: page.doenetML
        })
      );
    }
    pageVariantsResult = await Promise.all(promises);
    numberOfVariants = pageVariantsResult.reduce(
      (a, c) => a * c.allPossibleVariants.length,
      1
    );
    numberOfVariants = Math.min(1e3, numberOfVariants);
  }
  return { numberOfVariants, pageVariantsResult };
}
async function returnNumberOfActivityVariantsForCid(cid) {
  let activityDefinitionDoenetML = await retrieveTextFileForCid(cid);
  let result = parseActivityDefinition(activityDefinitionDoenetML);
  if (!result.success) {
    return result;
  }
  result = await determineNumberOfActivityVariants(result.activityJSON);
  return { success: true, numberOfVariants: result.numberOfVariants };
}
function determineOrder(order, rng) {
  var _a, _b;
  if (((_a = order == null ? void 0 : order.type) == null ? void 0 : _a.toLowerCase()) !== "order") {
    return { success: false, message: "invalid order" };
  }
  let behavior = (_b = order.behavior) == null ? void 0 : _b.toLowerCase();
  if (behavior === void 0) {
    behavior = "sequence";
  }
  switch (behavior) {
    case "sequence":
      return processSequenceOrder(order, rng);
    case "select":
      return processSelectOrder(order, rng);
    case "shuffle":
      return processShuffleOrder(order, rng);
    default:
      return {
        success: false,
        message: `Have not implemented behavior: ${behavior}`
      };
  }
}
function processSequenceOrder(order, rng) {
  let pages = [];
  for (let item of order.content) {
    let type = item.type.toLowerCase();
    if (type === "page") {
      pages.push(item);
    } else if (type === "order") {
      let orderResult = determineOrder(item, rng);
      if (orderResult.success) {
        pages.push(...orderResult.pages);
      } else {
        return orderResult;
      }
    } else {
      return { success: false, message: "Unrecognized item in order." };
    }
  }
  return { success: true, pages };
}
function processSelectOrder(order, rng) {
  let numberToSelect = order.numberToSelect;
  let nItems = order.content.length;
  if (!(Number.isInteger(numberToSelect) && numberToSelect > 0)) {
    numberToSelect = 1;
  }
  let numberUniqueRequired = 1;
  if (!order.withReplacement) {
    numberUniqueRequired = numberToSelect;
  }
  if (numberUniqueRequired > nItems) {
    return {
      success: false,
      message: "Cannot select " + numberUniqueRequired + " components from only " + nItems
    };
  }
  let selectWeights = order.selectWeights || [];
  if (!Array.isArray(selectWeights) || !selectWeights.every((x) => x >= 0)) {
    return { success: false, message: "Invalid selectWeights" };
  }
  selectWeights = selectWeights.slice(0, nItems);
  if (selectWeights.length < nItems) {
    selectWeights.push(...Array(nItems - selectWeights.length).fill(1));
  }
  let totalWeight = selectWeights.reduce((a, c) => a + c);
  selectWeights = selectWeights.map((x) => x / totalWeight);
  let cumulativeWeights = selectWeights.reduce(
    (a, x, i) => [...a, x + (a[i - 1] || 0)],
    []
  );
  let indsRemaining = [...Array(cumulativeWeights.length).keys()];
  let selectedItems = [];
  for (let ind = 0; ind < numberToSelect; ind++) {
    let rand = rng();
    let start = -1, end = cumulativeWeights.length - 1;
    while (start < end - 1) {
      let mid = Math.floor((start + end) / 2);
      if (cumulativeWeights[mid] > rand) {
        end = mid;
      } else {
        start = mid;
      }
    }
    selectedItems.push(order.content[indsRemaining[end]]);
    if (!order.withReplacement && ind < numberToSelect - 1) {
      selectWeights.splice(end, 1);
      indsRemaining.splice(end, 1);
      totalWeight = selectWeights.reduce((a, c) => a + c);
      selectWeights = selectWeights.map((x) => x / totalWeight);
      cumulativeWeights = selectWeights.reduce(
        (a, x, i) => [...a, x + (a[i - 1] || 0)],
        []
      );
    }
  }
  let pages = [];
  for (let item of selectedItems) {
    let type = item.type.toLowerCase();
    if (type === "page") {
      pages.push(item);
    } else if (type === "order") {
      let orderResult = determineOrder(item);
      if (orderResult.success) {
        pages.push(...orderResult.pages);
      } else {
        return orderResult;
      }
    } else {
      return { success: false, message: "Unrecognized item in order." };
    }
  }
  return { success: true, pages };
}
function processShuffleOrder(order, rng) {
  let newOrder = [...order.content];
  for (let i = order.content.length - 1; i > 0; i--) {
    const rand = rng();
    const j = Math.floor(rand * (i + 1));
    [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
  }
  let pages = [];
  for (let item of newOrder) {
    let type = item.type.toLowerCase();
    if (type === "page") {
      pages.push(item);
    } else if (type === "order") {
      let orderResult = determineOrder(item, rng);
      if (orderResult.success) {
        pages.push(...orderResult.pages);
      } else {
        return orderResult;
      }
    } else {
      return { success: false, message: "Unrecognized item in order." };
    }
  }
  return { success: true, pages };
}
async function initializeComponentTypeCounts(order) {
  let previousComponentTypeCountsByPage = [{}];
  let componentInfoObjects = createComponentInfoObjects();
  for (let [ind, page] of order.slice(0, order.length - 1).entries()) {
    let { fullSerializedComponents } = await expandDoenetMLsToFullSerializedComponents({
      contentIds: [page.cid],
      doenetMLs: [page.doenetML],
      componentInfoObjects
    });
    let serializedComponents = fullSerializedComponents[0];
    addDocumentIfItsMissing(serializedComponents);
    let documentChildren = serializedComponents[0].children;
    let componentTypeCounts = countComponentTypes(documentChildren);
    let countsSoFar = previousComponentTypeCountsByPage[ind];
    for (let cType in countsSoFar) {
      if (cType in componentTypeCounts) {
        componentTypeCounts[cType] += countsSoFar[cType];
      } else {
        componentTypeCounts[cType] = countsSoFar[cType];
      }
    }
    previousComponentTypeCountsByPage.push(componentTypeCounts);
  }
  return previousComponentTypeCountsByPage;
}
export {
  prng_alea as a,
  calculateOrderAndVariants as c,
  determineNumberOfActivityVariants as d,
  parseActivityDefinition as p,
  returnNumberOfActivityVariantsForCid as r
};
