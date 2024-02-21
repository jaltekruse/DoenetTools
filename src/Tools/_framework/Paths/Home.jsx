import React, { lazy, Suspense, useEffect } from "react";
import { useLoaderData, useOutletContext } from "react-router";
import { DoenetML } from "../../../Viewer/DoenetML";
import {
  pageVariantInfoAtom,
  pageVariantPanelAtom,
} from "../../../_sharedRecoil/PageViewerRecoil";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Carousel } from "../../../_reactComponents/PanelHeaderComponents/Carousel";
import {
  Box,
  Center,
  Text,
  IconButton,
  Flex,
  Link,
  Image,
  Tooltip,
  useColorModeValue,
  Button,
  VStack,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsDiscord } from "react-icons/bs";
import { MdBuild } from "react-icons/md";
import axios from "axios";
import { useFetcher } from "react-router-dom";

// export async function action() {
//   //Create a portfolio activity and redirect to the editor for it
//   let { data } = await axios.get("/api/createPortfolioActivity.php");

//   let { doenetId, pageDoenetId } = data;
//   return redirect(
//     `/portfolioeditor/${doenetId}?tool=editor&doenetId=${doenetId}&pageId=${pageDoenetId}`,
//   );
// }

export async function loader() {
  const response = await fetch("/api/loadPromotedContent.php");
  const data = await response.json();
  return data;
}

const HomeIntroVideo = lazy(() => import("./HomeIntroVideo"));

let doenetML = `
<example>
<setup>
<number name="num_lines">2</number>
<math name="left0">x^2+4x-3</math>
<math name="right0">2x^2+4x-7</math>
<math name="left1">x^2-3</math>
<math name="right1">2x^2-7</math>
</setup>

<p>Simplify the equation <m>$left0 = $right0</m>, explaining each step in the box at the right.</p>



<map name="map">
<template newNamespace>
<setup>
  <conditionalContent assignNames="(left_prefill right_prefill text_prefill)">
    <case condition="$i=1">$(../left0) $(../right0) <text>original expression</text></case>
    <case condition="$i=2">$(../left1) $(../right1) <text>subtracted 4x from both sides</text></case>
    <else>$(../map[$i-1]/left) $(../map[$i-1]/right) <text></text></else>
  </conditionalContent>
</setup>

<sideBySide widths="50% 40% 10%">
  <div>
    <mathInput name="left" prefill="$left_prefill"/>
    <m>=</m> <mathInput name="right" prefill="$right_prefill"/>
  </div>
  <div><textinput width="250px" height="35px" expanded prefill="$text_prefill" /></div>
  <div>
    <updateValue target="../num_lines" newValue="$(../num_lines)+1" 
         type="number" hide="$(../num_lines) > $i">
      <label>+</label>
    </updateValue><nbsp/>
    <updateValue target="../num_lines" newValue="$(../num_lines)-1" 
         type="number" hide="$(../num_lines) > $i" disabled="$i=1">
      <label>-</label>
    </updateValue>
  </div>
</sideBySide>
</template>
<sources alias="v" indexAlias="i"><sequence from="1" to="$num_lines" /></sources>
</map>



<hint>
<title>Hint on showing simplification steps</title>
<p>To perform a simplification step, click the <c>+</c> button, which will copy your work to a new line. Modify the expression and explain the step in the box to the right.  You can remove a line by clicking the <c>-</c> button.  Your work will be hand-graded after the due date.</p>
</hint>
  
</example>
`;

export function Home() {
  let context = useOutletContext();
  const loaderData = useLoaderData();

  const favorites = loaderData?.carouselData?.Homepage;

  const setVariantPanel = useSetRecoilState(pageVariantPanelAtom);
  const [variantInfo, setVariantInfo] = useRecoilState(pageVariantInfoAtom);

  useEffect(() => {
    document.title = `Home - Doenet`;
  }, []);

  function variantCallback(generatedVariantInfo, allPossibleVariants) {
    // console.log(">>>variantCallback",generatedVariantInfo,allPossibleVariants)
    const cleanGeneratedVariant = JSON.parse(
      JSON.stringify(generatedVariantInfo),
    );
    setVariantPanel({
      index: cleanGeneratedVariant.index,
      allPossibleVariants,
    });
    setVariantInfo({
      index: cleanGeneratedVariant.index,
    });
  }

  const grayColor = "doenet.lightGray";
  const blueColor = "doenet.mainBlue";
  const blackColor = "white";
  const whiteColor = "gray.900";
  const textColor = "doenet.canvas";

  //Don't do more processing if we don't know if we are signed in or not
  if (context.signedIn == null) {
    return null;
  }

  return (
    <>
      <Box
        data-test="jason"
        style={{
          position: "relative",
          backgroundColor: "black",
          maxHeight: "800px",
          overflow: "hidden",
        }}
      >
        <Link
          position="absolute"
          bottom="10vh"
          right="8vw"
          color={textColor}
          href="https://www.doenet.org/portfolioeditor/_Pgmpw33WxJym0qOUyKaCG/_PhwPDWnOKA5YBKXCjGEBK"
          zIndex="5"
        >
          How to Make this Animation
        </Link>
        <Box width="60vw" position="absolute" top="8vw" left="8vw">
          {/* <Image
            height="150px"
            float="left"
            src="/Doenet_Logo_Frontpage_greyscale_minimal.png"
          /> */}

          <Text color="white" fontSize={"5vw"} fontWeight="700">
            {/* <Text color="black" fontSize="60px" fontWeight="700"> */}
            Interactive activities to engage your students
          </Text>
          <Text color="white" fontSize={"2vw"} fontWeight="700">
            {/* <Text color="black" fontSize="60px" fontWeight="700"> */}
            Enhance your classroom with great OER resources, and learn how our
            new authoring tools make it easy to create your own.
          </Text>
          <Link href="https://www.doenet.org/portfolioeditor/_KfPv0YUsU1VoRNR7HCGA5/_VRU9SbxWNvTrUwUeJDfkb">
            <Button
              mt="40px"
              p="10px"
              colorScheme="blue"
              w={["160px", "180px", "220px", "250px", "300px"]}
              h={["20px", "30px", "40px", "50px", "60px"]}
              fontSize={["10px", "14px", "18px", "22px", "26px"]}
            >
              Explore Activities
            </Button>
          </Link>
          <br />
          <Link href="https://www.doenet.org/portfolioeditor/_KfPv0YUsU1VoRNR7HCGA5/_VRU9SbxWNvTrUwUeJDfkb">
            <Button
              mt="40px"
              p="10px"
              colorScheme="blue"
              w={["160px", "180px", "220px", "250px", "300px"]}
              h={["20px", "30px", "40px", "50px", "60px"]}
              fontSize={["10px", "14px", "18px", "22px", "26px"]}
            >
              Learn to Make Your Own
            </Button>
          </Link>
        </Box>
        <Suspense fallback={"Loading..."}>
          {/* Does this lazy loading do anything? */}
          <HomeIntroVideo />
        </Suspense>
      </Box>
    </>
  );
}
