import { Portfolio } from "./Portfolio";
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import React from "react";
import { Outlet, RouterProvider, createMemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

jest.mock("axios");

function createRouterWithOutlet(
  component,
  mockedLoaderData,
  outletContext,
  path,
) {
  return createMemoryRouter(
    [
      {
        path: path,
        element: <Outlet context={outletContext} />,
        children: [
          {
            path: path,
            element: <RecoilRoot>{component}</RecoilRoot>,
            loader: () => mockedLoaderData,
          },
        ],
      },
    ],
    { initialEntries: [path] },
  );
}

test("test rendering empty portfolio", async () => {
  const mockedLoaderData = { publicActivities: [], privateActivities: [] };
  const outletContext = { signedIn: true };

  const router = createRouterWithOutlet(
    <Portfolio />,
    mockedLoaderData,
    outletContext,
    "/portfolio",
  );

  render(<RouterProvider router={router} />);

  await screen.findByRole("button", { name: "Add Activity" });

  expect(screen.getByText("No Public Activities")).exists;
  expect(screen.getByText("No Private Activities")).exists;
});
// import { renderHook } from '@testing-library/react';
// import { RecoilRoot, useRecoilSetState } from 'recoil';
// import axios from 'axios';
// import { act } from 'react-dom/test-utils';

// jest.mock('axios');

// test('test creating a course', () => {
//     // https://recoiljs.org/docs/guides/testing/#testing-recoil-state-inside-a-custom-hook
//     // doesn't work because we need a <RecoilRoot> in the render tree
//     // let { course } = renderHook(() => useCourse(12345));

//     // try to manually set course details, the call to axios is in an effect that isn't being called in the path of useCourse
//     // from src/Api/defineDBAndUserAndCourseInfo.php
//     axios.get.mockResolvedValue({data: {coursePermissionsAndSettings: [{ courseId: 12345, canEditContent : 1 }] }});
//     //axios.put.mockResolvedValue({data: []});
//     const resp = {success: true};
//     axios.post.mockResolvedValue(resp);

//     act(() => {
//     renderHook(() => {
//             let { create } = useCourse(12345);
//             create( { itemType: 'activity',
//                     parentDoenetId: '1',
//                     previousDoenetId: '2',
//                     previousContainingDoenetId: '3'
//                 },
//                 () => {console.log("successs!")}, //successCallback
//                 (e) => { console.log("something failed", e)} //failureCallback
//             );
//         },
//         { wrapper: RecoilRoot}
//     );
//     });
// });
