import axios from "axios";
import { Box, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import ActivityCard from "../../../_reactComponents/PanelHeaderComponents/ActivityCard";
import { MoveToGroupMenuItem } from "./Community";
import Papa from "papaparse";

export async function loader() {
  const response = await axios.get(`/media/libraryContent.csv`, {
    responseType: "text",
    transformResponse: [(data) => data],
  });
  // get html string or others string
  console.log(response.data);
  console.log(response);
  let parsedData = Papa.parse(response.data, {
    dynamicTyping: true,
  }).data;
  // columnTypes = parsedData
  //   .slice(1)[0]
  //   .reduce((acc, val) => {
  //     if (typeof val === "number") {
  //       return `${acc}Number `;
  //     } else {
  //       return `${acc}Text `;
  //     }
  //   }, "")
  //   .trim();

  parsedData = parsedData.filter((row) => row[1] || row[4]);
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
    libraryData: parsedData,
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
              {libraryData.map((activity) => {
                return (
                  <>
                    {activity[4] ? (
                      <Text fontSize="20px" fontWeight="700">
                        {activity[4]}
                      </Text>
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
                    )}
                  </>
                );
              })}
            </>
          )}
        </PublicActivitiesSection>
      </PortfolioGrid>
    </>
  );
}
