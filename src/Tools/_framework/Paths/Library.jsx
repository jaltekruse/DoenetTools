import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Papa from "papaparse";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";

function startsWith(str, maybePrefix) {
  //https://stackoverflow.com/a/4579228
  return str.lastIndexOf(maybePrefix, 0) === 0;
}

function onLoad(allResources) {
  // polyfill
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      "use strict";

      if (search instanceof RegExp) {
        throw TypeError("first argument must not be a RegExp");
      }
      if (start === undefined) {
        start = 0;
      }
      return this.indexOf(search, start) !== -1;
    };
  }
  var setCurrentList = function () {
    var element = document.getElementById("resourceList");
    var html = "";
    var searchVal = document.getElementById("searchBox").value;
    var alwaysFree = document.getElementById("alwaysFree").checked;
    var subject = document.getElementById("subjectValue").value;
    var level = document.getElementById("levelValue").value;
    searchVal = searchVal + " " + subject;
    searchVal = searchVal.toLowerCase().trim();

    var allMatching;
    // exactly matched whole search string
    var veryTopMatches = [];
    // exactly matched subject name
    var topMatches = [];
    // match (including prefix match) on one or more words in search string
    var otherMatches = [];
    var hitDisplayLimit = false;
    if (
      searchVal.trim() != "" ||
      alwaysFree ||
      subject ||
      level ||
      alwaysFree
    ) {
      let searchTerms = searchVal.split(" ");
      searchTerms = searchTerms.map(function (e) {
        return e.trim();
      });
      allResources.data.map(function (resource, index) {
        if (
          veryTopMatches.length + topMatches.length + otherMatches.length >
          399
        ) {
          hitDisplayLimit = true;
          return;
        }
        if (
          alwaysFree &&
          !(
            resource["Free Service Offered"] &&
            resource["Free Service Offered"]
              .toLowerCase()
              .includes("always free")
          )
        ) {
          return;
        }
        // doing this instead by concatenating subject with search term
        // enables finding products with a subject in the description but
        // not the explicit field filled out
        /*
if (subject &&
!(resource["Category/Subject"] &&
resource["Category/Subject"]
.toLowerCase().includes(subject.toLowerCase()))) {
return;
}
              */
        if (
          level &&
          !(
            resource["Grade/Age Group"] &&
            resource["Grade/Age Group"]
              .toLowerCase()
              .includes(level.toLowerCase())
          )
        ) {
          return;
        }
        var searchSomeText = function (toSearch, searchVal, topMatches) {
          if (toSearch == undefined || searchVal.trim() == "") {
            return false;
          }
          searchVal = " " + searchVal.toLowerCase().trim() + " ";
          // first do a check for the whole search string
          toSearch = toSearch
            .toLowerCase()
            .replace(/,/g, " ")
            .replace(/\//g, " ")
            .replace(/\./g, " ")
            .replace(/&/g, " ")
            // most people use subtraction as dash
            .replace(/-/g, " ")
            // proper dash character
            .replace(/–/g, " ")
            .replace(/;/g, " ");
          if (false || toSearch.includes(searchVal)) {
            topMatches.push(resource);
            return true;
          } else {
            // do a prefix match on the individual words in the search
            var words = toSearch.split(" ");
            var matches = false;
            var numMatches = 0;
            var term;
            terms: for (var i = 0; i < searchTerms.length; i++) {
              term = searchTerms[i];
              if (term.trim() == "") continue;
              for (var j = 0; j < words.length; j++) {
                word = words[j];
                if (word.trim() == "") {
                  continue;
                }
                if (startsWith(word, term)) {
                  numMatches++;
                  matches = true;
                  continue terms;
                }
              }
            }
            if (matches) {
              resource.numMatches = numMatches;
              otherMatches.push(resource);
              return true;
            } else {
              return false;
            }
          }
        };
        // the use of one space at the begging and end and two between the sections
        // is deliberate, it allows doing full exact matching on terms, by just doing
        // a simple substring search for " searchString ", but for multi-word searches
        // it won't match if description right next to company happens to produce the
        // search term, the extra space between the different strings helps here
        // example:
        // Description - give away free materials
        // company - science materials R US
        // if description and company were put together with a single space, doing
        // a substring for "materials science" would return this as a top result
        // this is not desired
        var twoSpaces = "  ";
        var allText =
          " " +
          resource["Category/Subject"] +
          twoSpaces +
          resource["Grade/Age Group"] +
          twoSpaces +
          resource["Description"] +
          twoSpaces +
          resource["Company"] +
          twoSpaces +
          resource["Free Service Offered"] +
          " ";

        var matched = false;
        // if someone typed in the box
        if (
          !(searchVal == undefined || searchVal.trim() == "") ||
          !(subject == undefined || subject.trim() == "")
        ) {
          matched = searchSomeText(allText, searchVal, veryTopMatches);
        } else if (subject == undefined || subject.trim() == "") {
          // if nothing was typed in the box, or provided as a subject
          // then we got down here because always free or grade level was
          // provided and we already passed that filter
          otherMatches.push(resource);
          matches = true;
        }
        // if we haven't already matched, run a search for the subject
        //if (!matched) {
        //    matched = searchSomeText(allText, searchVal + ' ' + subject, topMatches);
        //}
      });
      console.log(
        "last very top match: " +
          (veryTopMatches[veryTopMatches.length - 1]
            ? veryTopMatches[veryTopMatches.length - 1]["Company"]
            : "none"),
      );
      console.log(
        "last top match: " +
          (topMatches[topMatches.length - 1]
            ? topMatches[topMatches.length - 1]["Company"]
            : "none"),
      );
      console.log(
        "first other Matches: " +
          (otherMatches[0] ? otherMatches[0]["Company"] : "none"),
      );
      otherMatches = otherMatches.sort(function (a, b) {
        return b.numMatches - a.numMatches;
      });

      allMatching = veryTopMatches.concat(topMatches.concat(otherMatches));
    } else {
      allMatching = allResources.data;
    }
    console.log(allMatching.length);
    if (allMatching.length > 400) {
      allMatching = allMatching.slice(0, 400);
      hitDisplayLimit = true;
    }
    allMatching.map(function (resource, index) {
      if (!resource["Link"]) {
        return;
      }
      if (
        !(
          startsWith(resource["Link"], "http://") ||
          startsWith(resource["Link"], "https://")
        )
      ) {
        resource["Link"] = "http://" + resource["Link"];
      }
      html +=
        '<a href="' +
        resource["Link"] +
        '" style="white-space: pre-wrap; white-space: -moz-pre-wrap; ' +
        'white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word;"><h2>' +
        resource["Company"] +
        "</h2></a>";
      if (
        resource["Category/Subject"] != undefined &&
        resource["Category/Subject"].trim() != ""
      ) {
        html +=
          "<b>Category/Subject</b> &nbsp;&nbsp" +
          resource["Category/Subject"] +
          "<br />";
      }
      if (
        resource["Grade/Age Group"] != undefined &&
        resource["Grade/Age Group"].trim() != ""
      ) {
        html +=
          "<b>Grade/Age Group</b> &nbsp;&nbsp" +
          resource["Grade/Age Group"] +
          "<br />";
      }
      html += resource["Description"] + "<br />";
      html +=
        "<b>Free Service Offered</b> &nbsp;&nbsp" +
        resource["Free Service Offered"] +
        "<br /><br />";
    });
    if (hitDisplayLimit) {
      html +=
        "<h2>Showing top 400 results, to see others perform a more specific search.</h2>";
    }
    if (html == "") {
      html = "No matches found for search";
    }
    element.innerHTML = html;
  };
  if (window.allResources) {
    setCurrentList();
  } else {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "AmazingEducationalResouces.csv");
    xhr.onload = function () {
      if (this.readyState === 4) {
        if (this.status == 200) {
          try {
            window.allResources = Papa.parse(this.responseText, {
              header: true,
            });
            setCurrentList();
          } catch (e) {
            console.log(e);
            alert("error reading resource list: " + this.responsetext);
          }
        } else {
          alert(this.responsetext);
        }
      } else {
        // ignore other events for request still in progress
      }
    };
    xhr.send();
  }
}

export async function loader() {
  let libraryContent = axios.get(`/media/library_content.csv`, {
    responseType: "text",
    transformResponse: [(data) => data],
  });
  let webworkTaxonomy = axios.get(`/media/webwork_taxonomy_algebra.csv`, {
    responseType: "text",
    transformResponse: [(data) => data],
  });

  let responses = await Promise.all([libraryContent, webworkTaxonomy]);
  libraryContent = responses[0].data;
  webworkTaxonomy = responses[1].data;

  libraryContent = Papa.parse(libraryContent, {
    dynamicTyping: true,
  }).data;

  webworkTaxonomy = Papa.parse(webworkTaxonomy, {
    dynamicTyping: true,
  }).data;

  let parseSectionKey = (key) => {
    let numPart = key.match(/[0-9]+/)[0];
    let alphaPart = key.match(/[a-zA-Z]+/);
    if (alphaPart) alphaPart = alphaPart[0];
    return { numPart, alphaPart };
  };

  webworkTaxonomy = webworkTaxonomy.filter((row) =>
    String(row[1]).match(/[0-9]+[a-zA-Z]*/),
  );

  let webworkSections = webworkTaxonomy.reduce((sections, sectionInfo) => {
    let { numPart, alphaPart } = parseSectionKey(String(sectionInfo[1]));
    let label = sectionInfo[0];
    // If we hit a section that hasn't been added yet
    let sectionDetails = sections.find((a) => a.sectionNumber == numPart);
    if (!sectionDetails) {
      sectionDetails = { sectionNumber: numPart, label, subsections: [] };
      sections.push(sectionDetails);
    }
    if (alphaPart) {
      sectionDetails.subsections.push({
        label,
        subSecLetter: alphaPart,
        activities: [],
      });
    }
    return sections;
  }, []);

  libraryContent = libraryContent.filter((row) => {
    return row[1] && String(row[1]).match(/[0-9]+[a-zA-Z]*/);
  });

  let groupedActivities = libraryContent.reduce((subsections, row) => {
    if (!subsections[row[1]]) subsections[row[1]] = [];
    subsections[row[1]].push(row);
    return subsections;
  }, {});

  for (const [subsectionKey, activities] of Object.entries(groupedActivities)) {
    let { numPart, alphaPart } = parseSectionKey(String(subsectionKey));
    webworkSections[Number(numPart) - 1].subsections.find(
      (subSec) => subSec.subSecLetter == alphaPart,
    ).activities = activities.map((activityInfo) => {
      let label = activityInfo[5];

      // some of the problems start with a number followed by a colon or the string "Problem XX:",
      // instead of a number followed by a period, strip that off first, so it doesn't mess up the
      // search for another colon later in the string
      if (label.match(/^[0-9]+:/) || label.match(/^problem [0-9]+:/i)) {
        label = label.substring(label.indexOf(":") + 1);
      }
      // most of the problems have the MOLS collection name as a prefix, some have it with a colon
      // after the section name, others have a dash surrounded by spaces
      if (label.includes(":")) {
        label = label.substring(label.indexOf(":") + 1);
      } else if (label.includes(" - ")) {
        // Note the spaces around this dash are important, we want to preserve other uses of dash
        label = label.substring(label.indexOf(" - ") + 3);
      }
      label = label.trim();
      label = label.charAt(0).toUpperCase() + label.slice(1);
      return {
        doenetId: activityInfo[2],
        parentDoenetId: activityInfo[3],
        label,
      };
    });
  }

  return {
    libraryData: webworkSections,
  };
}

const PublicActivitiesSection = styled.div`
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 10px;
  margin: 0px;
  justify-content: flex-start;
  padding-left: 100px;

  background: #ffffff;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  height: 100vh;
`;

export function Subsection({ label, activities }) {
  activities = activities.filter((a) => a.label != "BA-Basics");
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            style={{ color: activities.length == 0 ? "#aaaaaa" : "black" }}
          >
            {label}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel isExpanded="true" pb={4}>
        {activities.map((activity) => {
          return (
            <div key={activity.doenetId}>
              <Link
                key={activity.label}
                href={`https://www.doenet.org/courseactivityeditor/${activity.parentDoenetId}/${activity.doenetId}`}
              >
                {activity.label}
              </Link>
              <br />
            </div>
          );
        })}
      </AccordionPanel>
    </AccordionItem>
  );
}

export function Library() {
  const { libraryData } = useLoaderData();

  return (
    <>
      <PortfolioGrid>
        <Box
          as="header"
          gridRow="1/2"
          backgroundColor="#fff"
          color="#000"
          height="80px"
          position="fixed"
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          zIndex="1200"
        >
          <Text fontSize="24px" fontWeight="700">
            Public Problem Library
          </Text>
        </Box>
        <PublicActivitiesSection>
          <SimpleGrid columns={3} spacing={10}>
            {libraryData.length < 1 ? (
              <div>No Public Activities</div>
            ) : (
              <>
                {libraryData.map((section) => {
                  return (
                    <Box
                      style={{
                        border: "1px black",
                        padding: "10px",
                        margin: "10px",
                        width: "400px",
                      }}
                      key={section.label}
                    >
                      <Text fontSize="22px" fontWeight="700">
                        {section.label}
                      </Text>
                      <Accordion allowMultiple>
                        {section.subsections.map((subsection) => {
                          return (
                            <Subsection
                              key={subsection.label}
                              {...subsection}
                            />
                          );
                        })}
                      </Accordion>
                    </Box>
                  );
                })}
                {/*activity[4] ? (
                    ) : (
                      <>
                        <a
                          key={activity[2]}
                          href={`/portfolioviewer/${activity[3]}/${activity[2]}`}
                        >
                          {activity[5]}
                        </a>
                        <br />
                      </>
                    ) */}
              </>
            )}
          </SimpleGrid>
        </PublicActivitiesSection>
      </PortfolioGrid>
    </>
  );
}
