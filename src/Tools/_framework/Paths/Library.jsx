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

  console.log(libraryContent);

  return {
    libraryContent,
    webworkTaxonomy,
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
      <AccordionPanel pb={4}>
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
  let { libraryContent, webworkTaxonomy } = useLoaderData();

  // added a columns with URLs, strip off first column to make the indexes below still work
  libraryContent = libraryContent.map((row) => row.slice(1));

  console.log(libraryContent);

  let parseSectionKey = (key) => {
    let numPart = key.match(/[0-9]+/)[0];
    let alphaPart = key.match(/[a-zA-Z]+/);
    if (alphaPart) alphaPart = alphaPart[0];
    return { numPart, alphaPart };
  };

  webworkTaxonomy = webworkTaxonomy.filter((row) =>
    String(row[1]).match(/^[0-9]+[a-zA-Z]*/),
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
    return row[1] && String(row[1]).match(/^[0-9]+[a-zA-Z]*/);
  });

  libraryContent = libraryContent.flatMap((row) => {
    console.log(row);
    return row[1].includes(",")
      ? row[1].split(",").map((val) => {
          let newRow = [...row];
          newRow[1] = val.trim();
          return newRow;
        })
      : [row];
  });

  let groupedActivities = libraryContent.reduce((subsections, row) => {
    if (!subsections[row[1]]) subsections[row[1]] = [];
    subsections[row[1]].push(row);
    return subsections;
  }, {});

  for (const [subsectionKey, activities] of Object.entries(groupedActivities)) {
    let { numPart, alphaPart } = parseSectionKey(String(subsectionKey));
    console.log(subsectionKey);
    console.log(numPart);
    console.log(alphaPart);
    console.log(webworkSections);
    console.log(webworkSections[Number(numPart) - 1]);

    let matchingSubsection = webworkSections[
      Number(numPart) - 1
    ].subsections.find((subSec) => subSec.subSecLetter == alphaPart);
    console.log(matchingSubsection);
    matchingSubsection.activities = activities.map((activityInfo) => {
      let label = activityInfo[6];

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
  let libraryData = webworkSections;

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
                      <Box
                        style={{
                          backgroundColor: "#2f76d9",
                          color: "white",
                          borderRadius: "5px",
                          padding: "10px",
                        }}
                      >
                        <Text fontSize="22px" fontWeight="700">
                          {section.label}
                        </Text>
                      </Box>
                      <Accordion
                        allowMultiple
                        defaultIndex={section.subsections.flatMap(
                          (sub, index) => {
                            return sub.activities.length > 0 ? index : null;
                          },
                        )}
                      >
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
