import { R as React, bx as useDoenetRenderer, t as Recoil_index_20, p as pageToolViewAtom, a8 as itemByDoenetId, ay as scrollableContainerAtom, l as useLocation, i as useNavigate, bL as getURLFromRef, b as jsxs, j as jsx, L as Link, s as styled } from "./PageViewer-d914b069.js";
const RefButton = styled.button`
  position: relative;
  height: 24px;
  display: inline-block;
  color: white;
  color: ${(props) => props.disabled ? "var(--canvastext)" : "var(--canvas)"};
  background-color: ${(props) => props.disabled ? "var(--mainGray)" : "var(--mainBlue)"};

  padding: 2px;
  border: none;
  border-radius: var(--mainBorderRadius);
  cursor: pointer;
  cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
  padding: 1px 6px 1px 6px;

  &:hover {
    background-color: ${(props) => props.disabled ? "var(--mainGray)" : "var(--lightBlue)"};
    color: ${(props) => props.disabled ? "var(--canvastext)" : "var(--canvas)"};
  }

  &:focus {
    outline: 2px solid var(--mainBlue);
    outline-offset: 2px;
  }
`;
const ref = React.memo(function Ref(props) {
  let { name, id, SVs, children } = useDoenetRenderer(props);
  const pageToolView = Recoil_index_20(pageToolViewAtom);
  const itemInCourse = Recoil_index_20(itemByDoenetId(SVs.doenetId));
  const scrollableContainer = Recoil_index_20(scrollableContainerAtom);
  let { search } = useLocation();
  let navigate = useNavigate();
  if (SVs.hidden) {
    return null;
  }
  let linkContent = children;
  if (children.length === 0) {
    linkContent = SVs.linkText;
  }
  let { targetForATag, url, haveValidTarget, externalUri } = getURLFromRef({
    cid: SVs.cid,
    doenetId: SVs.doenetId,
    variantIndex: SVs.variantIndex,
    edit: SVs.edit,
    hash: SVs.hash,
    page: SVs.page,
    givenUri: SVs.uri,
    targetName: SVs.targetName,
    pageToolView,
    inCourse: Object.keys(itemInCourse).length > 0,
    search,
    id
  });
  if (SVs.createButton) {
    if (targetForATag === "_blank") {
      return /* @__PURE__ */ jsxs("span", { id, children: [
        /* @__PURE__ */ jsx("a", { name: id }),
        /* @__PURE__ */ jsx(
          RefButton,
          {
            id: id + "_button",
            onClick: () => window.open(url, targetForATag),
            disabled: SVs.disabled,
            children: SVs.linkText
          }
        )
      ] });
    } else {
      return /* @__PURE__ */ jsxs("span", { id, children: [
        /* @__PURE__ */ jsx("a", { name: id }),
        /* @__PURE__ */ jsx(
          RefButton,
          {
            id: id + "_button",
            onClick: () => navigate(url),
            disabled: SVs.disabled,
            children: SVs.linkText
          }
        )
      ] });
    }
  } else {
    if (haveValidTarget) {
      if (externalUri || url === "#") {
        return /* @__PURE__ */ jsx(
          "a",
          {
            style: {
              color: "var(--mainBlue)",
              borderRadius: "5px"
            },
            target: targetForATag,
            id,
            name: id,
            href: url,
            children: linkContent
          }
        );
      } else {
        let scrollAttribute = scrollableContainer === window ? "scrollY" : "scrollTop";
        let stateObj = { fromLink: true };
        Object.defineProperty(stateObj, "previousScrollPosition", {
          get: () => scrollableContainer == null ? void 0 : scrollableContainer[scrollAttribute],
          enumerable: true
        });
        return /* @__PURE__ */ jsx(
          Link,
          {
            style: {
              color: "var(--mainBlue)",
              borderRadius: "5px"
            },
            target: targetForATag,
            id,
            name: id,
            to: url,
            state: stateObj,
            children: linkContent
          }
        );
      }
    } else {
      return /* @__PURE__ */ jsx("span", { id, children: linkContent });
    }
  }
});
export {
  ref as default
};
