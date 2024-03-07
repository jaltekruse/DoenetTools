import axios from "axios";
import { Box, Button, ButtonGroup, Text, Wrap } from "@chakra-ui/react";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import ActivityCard from "../../../_reactComponents/PanelHeaderComponents/ActivityCard";
import { MoveToGroupMenuItem } from "./Community";
import Papa from "papaparse";

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
    //console.log(sectionInfo);
    // If we hit a section that hasn't been added yet
    let sectionDetails = sections.find((a) => a.sectionNumber == numPart);
    if (!sectionDetails) {
      sectionDetails = { sectionNumber: numPart, label, subsections: [] };
      sections.push(sectionDetails);
    }
    //console.log(sections);
    if (alphaPart) {
      sectionDetails.subsections.push({
        label,
        subSecLetter: alphaPart,
        activities: [],
      });
    }
    return sections;
  }, []);

  console.log(webworkSections);

  libraryContent = libraryContent.filter((row) => {
    return row[1] && String(row[1]).match(/[0-9]+[a-zA-Z]*/);
  });

  console.log(libraryContent);

  let groupedActivities = libraryContent.reduce((subsections, row) => {
    console.log(subsections[row[1]]);
    if (!subsections[row[1]]) subsections[row[1]] = [];
    subsections[row[1]].push(row);
    return subsections;
  }, {});

  console.log(groupedActivities);

  for (const [subsectionKey, activities] of Object.entries(groupedActivities)) {
    console.log(`${subsectionKey}: ${activities}`);
    let { numPart, alphaPart } = parseSectionKey(String(subsectionKey));
    webworkSections[Number(numPart) - 1].subsections.find(
      (subSec) => subSec.subSecLetter == alphaPart,
    ).activities = activities.map((activityInfo) => {
      let label = activityInfo[5];
      if (label.includes(":")) label = label.split(":")[1];
      // Note the spaces around this dash are important, we want to preserve other uses of dash
      if (label.includes(" - ")) label = label.split(" - ")[1];
      label = label.trim();
      label = label.charAt(0).toUpperCase() + label.slice(1);
      return {
        doenetId: activityInfo[2],
        parentDoenetId: activityInfo[3],
        label,
      };
    });
  }

  console.log(webworkSections);

  // groupedActivities;
  // let regroupedData = groupedActivities.forEach((activityInfo) => {
  //   let { numPart, alphaPart } = parseSectionKey(String(activityInfo[1]));
  //   webworkSections[Number(numPart) - 1].subsections
  //     .find((subSec) => subSec.subSecLetter == alphaPart)
  //     .activities.push({
  //       doenetId: activityInfo[2],
  //       parentDoenetId: activityInfo[3],
  //       label: activityInfo[5],
  //     });
  // });
  // console.log(regroupedData);

  // let sections = regroupedData.reduce((allSections, subsection) => {
  //   return allSections;
  // }, {});

  [
    {
      sectionName: "Alg of reals",
      sectionNumber: 1,
      subsections: [
        {
          subSecName: "Alg Exprs",
          subSecLetter: "b",
          activities: [
            {
              parentDoenetId: "adsf",
              doenetId: "1234",
              label: "learn the thing",
            },
          ],
        },
      ],
    },
  ];

  const isAdminResponse = await fetch(`/api/checkForCommunityAdmin.php`);
  const { isAdmin } = await isAdminResponse.json();
  let carouselGroups = [];
  if (isAdmin) {
    const carouselDataGroups = await fetch(
      `/api/loadPromotedContentGroups.php`,
    );
    const responseGroups = await carouselDataGroups.json();
    carouselGroups = responseGroups.carouselGroups;
  }

  return {
    fullName: "",
    libraryData: webworkSections,
    isAdmin,
    carouselGroups,
  };
}

const PublicActivitiesSection = styled.div`
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 10px;
  margin: 0px;
  justify-content: flex-start;
  padding-left: 200px;

  background: var(--lightBlue);
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  height: 100vh;
`;

export function Subsection({ label, activities }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div key={label}>
      <Text fontSize="20px" fontWeight="500">
        <Button
          size="xs"
          style={{
            margin: "5px",
            visibility: activities.length > 0 ? "visible" : "hidden",
          }}
          onClick={() => setIsOpen(!isOpen)}
        />
        {label}
      </Text>
      {isOpen
        ? activities.map((activity) => {
            return (
              <div key={activity.doenetId}>
                <a
                  key={activity.label}
                  href={`/portfolioviewer/${activity.parentDoenetId}/${activity.doenetId}`}
                >
                  {activity.label}
                </a>
                <br />
              </div>
            );
          })
        : null}
    </div>
  );
}

export function Library() {
  const { carouselGroups, isAdmin, libraryData } = useLoaderData();

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
            Vetted Public Problem Library
          </Text>
        </Box>
        <PublicActivitiesSection>
          {libraryData.length < 1 ? (
            <div>No Public Activities</div>
          ) : (
            <>
              {libraryData.map((section) => {
                return (
                  <div
                    style={{
                      border: "1px black",
                      padding: "10px",
                      margin: "10px",
                    }}
                    key={section.label}
                  >
                    <Text fontSize="22px" fontWeight="700">
                      {section.label}
                    </Text>
                    {section.subsections.map((subsection) => {
                      return (
                        <Subsection key={subsection.label} {...subsection} />
                      );
                    })}
                  </div>
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
        </PublicActivitiesSection>
      </PortfolioGrid>
    </>
  );
}
